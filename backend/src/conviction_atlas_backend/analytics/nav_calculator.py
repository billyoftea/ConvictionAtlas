#!/usr/bin/env python3
"""
NAV 净值计算器 - 四个基金经理历史净值回测
基准日期：2025-09-28（180天前），初始NAV=1.0000
"""
import json, math
from datetime import datetime, timedelta

from conviction_atlas_backend.paths import MARKET_DATA_DIR, REPORTS_DIR, ensure_directories

PRICE_HISTORY_PATH = MARKET_DATA_DIR / "price_history.json"
NAV_RESULTS_PATH = REPORTS_DIR / "nav_results.json"

# ──────────────────────────────────────────
# 基金经理策略定义
# ──────────────────────────────────────────
MANAGERS = {
    "经理一_大盘趋势": {
        "emoji": "📈",
        "description": "趋势跟随，RSI+SMA信号",
        "allocation": {
            "BTCUSDT": 0.45,
            "ETHUSDT": 0.30,
            "SOLUSDT": 0.15,
            "CASH":    0.10,   # USDT 保留
        },
        "rebalance_days": 7,     # 每7天再平衡
        "leverage": 1.0,
        "fee_per_trade": 0.001,  # 0.1% 手续费
    },
    "经理二_DeFi基本面": {
        "emoji": "🦙",
        "description": "DeFi TVL+Yield策略",
        "allocation": {
            "ETHUSDT": 0.35,
            "TRXUSDT": 0.25,
            "SOLUSDT": 0.10,
            "CASH":    0.30,   # Yield farming 模拟
        },
        "rebalance_days": 14,
        "leverage": 1.0,
        "fee_per_trade": 0.001,
        "yield_apy": 0.055,     # DeFi yield 5.5%/年
    },
    "经理三_量化套利": {
        "emoji": "⚙️",
        "description": "资金费率+基差套利",
        "allocation": {
            "BTCUSDT": 0.30,
            "ETHUSDT": 0.30,
            "CASH":    0.40,   # 套利策略大量现金
        },
        "rebalance_days": 1,    # 每日再平衡
        "leverage": 1.0,
        "fee_per_trade": 0.0005,
        "funding_apy": 0.035,   # 资金费率套利 3.5%/年
    },
    "经理四_TRON稳健": {
        "emoji": "🔵",
        "description": "TRX质押+JustLend+Sun.io",
        "allocation": {
            "TRXUSDT": 0.40,
            "CASH":    0.60,   # USDT yield
        },
        "rebalance_days": 30,
        "leverage": 1.0,
        "fee_per_trade": 0.001,
        "yield_apy": 0.045,    # TRON 综合年化 4.5%
    },
}

def compute_rsi(prices, period=14):
    if len(prices) < period + 1:
        return 50.0
    deltas = [prices[i+1] - prices[i] for i in range(len(prices)-1)]
    gains = [d if d > 0 else 0 for d in deltas[-period:]]
    losses = [-d if d < 0 else 0 for d in deltas[-period:]]
    avg_gain = sum(gains) / period
    avg_loss = sum(losses) / period
    if avg_loss == 0:
        return 100.0
    rs = avg_gain / avg_loss
    return 100 - (100 / (1 + rs))

def trend_signal(prices_14d):
    """返回趋势信号：1=多头，0=空头"""
    if len(prices_14d) < 7:
        return 0.5
    sma7 = sum(prices_14d[-7:]) / 7
    sma14 = sum(prices_14d) / len(prices_14d)
    rsi = compute_rsi(prices_14d)
    score = 0
    if prices_14d[-1] > sma7: score += 1
    if sma7 > sma14: score += 1
    if rsi > 50: score += 1
    if rsi > 60: score += 1
    return score / 4.0

def run_backtest():
    ensure_directories()
    with PRICE_HISTORY_PATH.open(encoding="utf-8") as f:
        raw = json.load(f)
    
    # 整理数据：date_str -> {sym: price}
    dates = {}
    for sym, series in raw.items():
        for ts, price in series:
            d = datetime.utcfromtimestamp(ts).strftime("%Y-%m-%d")
            if d not in dates:
                dates[d] = {}
            dates[d][sym] = price
    
    sorted_dates = sorted(dates.keys())
    N = len(sorted_dates)
    
    results = {}
    
    for mgr_name, config in MANAGERS.items():
        nav_series = {}
        nav = 1.0
        
        # 初始持仓（按allocation配比）
        alloc = config["allocation"].copy()
        last_rebalance = 0
        rebalance_days = config.get("rebalance_days", 7)
        yield_apy = config.get("yield_apy", 0)
        funding_apy = config.get("funding_apy", 0)
        fee = config.get("fee_per_trade", 0.001)
        
        # 跟踪每只资产的持仓价值比例
        holdings = {sym: w for sym, w in alloc.items()}
        
        for i, date in enumerate(sorted_dates):
            day_prices = dates[date]
            
            if i == 0:
                # 第一天初始化
                nav_series[date] = 1.0
                continue
            
            prev_prices = dates[sorted_dates[i-1]]
            
            # 计算当日收益
            total_return = 0.0
            for sym, weight in holdings.items():
                if sym == "CASH":
                    # 现金部分：Yield APY 收益
                    daily_yield = (yield_apy + funding_apy) / 365
                    total_return += weight * daily_yield
                elif sym in day_prices and sym in prev_prices:
                    price_change = (day_prices[sym] - prev_prices[sym]) / prev_prices[sym]
                    # 经理一：趋势跟随（弱信号时降仓）
                    if mgr_name == "经理一_大盘趋势" and i >= 14:
                        lookback = [dates[sorted_dates[j]].get(sym, prev_prices.get(sym, 1))
                                   for j in range(max(0, i-14), i)]
                        signal = trend_signal(lookback)
                        effective_weight = weight * signal * 1.5  # 最大1.5x
                        effective_weight = min(effective_weight, weight * 1.5)
                    else:
                        effective_weight = weight
                    total_return += effective_weight * price_change
            
            # 再平衡手续费
            if (i - last_rebalance) >= rebalance_days:
                total_return -= sum(abs(w) for w in holdings.values() if w != 0) * fee * 0.1
                last_rebalance = i
                # 根据信号调整持仓（简化：维持原配比）
            
            nav = nav * (1 + total_return)
            nav_series[date] = round(nav, 6)
        
        # 统计指标
        navs = list(nav_series.values())
        max_nav = max(navs)
        final_nav = navs[-1]
        total_return_pct = (final_nav - 1.0) * 100
        
        # 最大回撤
        max_drawdown = 0
        peak = navs[0]
        for n in navs:
            if n > peak:
                peak = n
            dd = (peak - n) / peak
            if dd > max_drawdown:
                max_drawdown = dd
        
        # Sharpe（简化，用日收益标准差）
        daily_returns = [(navs[i] - navs[i-1]) / navs[i-1] for i in range(1, len(navs))]
        mean_r = sum(daily_returns) / len(daily_returns)
        variance = sum((r - mean_r)**2 for r in daily_returns) / len(daily_returns)
        std_r = math.sqrt(variance)
        sharpe = (mean_r * 365) / (std_r * math.sqrt(365)) if std_r > 0 else 0
        
        results[mgr_name] = {
            "config": config,
            "nav_series": nav_series,
            "final_nav": final_nav,
            "total_return_pct": total_return_pct,
            "max_drawdown_pct": max_drawdown * 100,
            "sharpe": sharpe,
            "max_nav": max_nav,
        }
    
    return results, sorted_dates

if __name__ == "__main__":
    print("🔄 运行 180 天 NAV 回测...")
    results, dates = run_backtest()
    
    print("\n" + "="*70)
    print("📊 四个基金经理 180 天回测结果汇总")
    print("="*70)
    print(f"{'经理':<18} {'终值NAV':>9} {'总收益':>9} {'最大回撤':>9} {'Sharpe':>7}")
    print("-"*70)
    
    for name, r in results.items():
        emoji = r['config']['emoji']
        print(f"{emoji} {name:<16} {r['final_nav']:>9.4f}  {r['total_return_pct']:>+8.2f}%  "
              f"{r['max_drawdown_pct']:>8.2f}%  {r['sharpe']:>7.2f}")
    
    # 等权组合
    all_navs = [list(r["nav_series"].values()) for r in results.values()]
    combo_navs = [sum(all_navs[j][i] for j in range(4)) / 4 for i in range(len(dates))]
    combo_return = (combo_navs[-1] - 1.0) * 100
    print(f"{'📦 等权组合':<19} {combo_navs[-1]:>9.4f}  {combo_return:>+8.2f}%")
    
    print("\n📅 最近10天各经理 NAV：")
    last10 = dates[-10:]
    header = f"{'日期':<12}" + "".join(f"{n[:8]:>10}" for n in results.keys())
    print(header)
    print("-" * (12 + 10*4))
    for d in last10:
        row = f"{d:<12}"
        for name, r in results.items():
            row += f"{r['nav_series'].get(d, 0):>10.4f}"
        print(row)
    
    # 保存完整数据
    save_data = {
        name: {
            "nav_series": r["nav_series"],
            "stats": {
                "final_nav": r["final_nav"],
                "total_return_pct": r["total_return_pct"],
                "max_drawdown_pct": r["max_drawdown_pct"],
                "sharpe": r["sharpe"],
            },
            "config": {
                "emoji": r["config"]["emoji"],
                "description": r["config"]["description"],
                "allocation": r["config"]["allocation"],
            }
        }
        for name, r in results.items()
    }
    with NAV_RESULTS_PATH.open("w", encoding="utf-8") as f:
        json.dump(save_data, f, indent=2)
    print(f"\nSaved NAV results -> {NAV_RESULTS_PATH}")
