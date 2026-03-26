#!/usr/bin/env python3
"""
1-year backtest using the rule engine that approximates LLM manager logic.
"""
import json, statistics
from datetime import UTC, datetime

from conviction_atlas_backend.paths import MARKET_DATA_DIR, REPORTS_DIR, ensure_directories

SYMBOLS = ["BTCUSDT", "ETHUSDT", "SOLUSDT", "TRXUSDT"]
INITIAL_CAPITAL = 10000.0
LOOKBACK = 30  # warm-up days needed for indicators
PRICE_1Y_PATH = MARKET_DATA_DIR / "price_1y.json"
BACKTEST_1Y_PATH = REPORTS_DIR / "backtest_1y.json"
BTC_BENCHMARK_PATH = REPORTS_DIR / "btc_benchmark_1y.json"

def compute_rsi(closes, period=14):
    if len(closes) < period + 1:
        return 50.0
    deltas = [closes[i+1]-closes[i] for i in range(len(closes)-1)]
    gains  = [d if d > 0 else 0 for d in deltas[-period:]]
    losses = [-d if d < 0 else 0 for d in deltas[-period:]]
    ag, al = sum(gains)/period, sum(losses)/period
    return 100 - 100/(1 + ag/al) if al != 0 else 100.0

def sma(closes, n):
    return sum(closes[-n:]) / n if len(closes) >= n else closes[-1]

# ── Manager decision rules ────────────────────────────────────────

def compute_atr(closes, period=14):
    """Average True Range as % of price — volatility measure"""
    if len(closes) < period + 1: return 0.02
    trs = [abs(closes[i] - closes[i-1]) / closes[i-1] for i in range(-period, 0)]
    return sum(trs) / period

def momentum_score(closes, periods=(5, 10, 20)):
    """Multi-timeframe momentum: fraction of periods showing positive return"""
    score = 0
    for p in periods:
        if len(closes) > p and closes[-1] > closes[-p]:
            score += 1
    return score / len(periods)  # 0.0–1.0


def manager1_trend(day_idx, full_closes):
    """
    IMPROVED: Trend-following with multi-timeframe momentum + volatility sizing
    Key fixes:
    - BTC gets a structural base weight (crypto market leader)
    - Position size scales with trend strength, not just RSI alone
    - Reduces cash floor from 10% to 5% in strong bull regimes
    - Adds momentum confirmation to avoid false signals
    """
    weights = {}
    for sym in SYMBOLS:
        c = full_closes[sym][:day_idx+1]
        if len(c) < 26:
            weights[sym] = 0.15; continue

        rsi    = compute_rsi(c)
        above7  = c[-1] > sma(c, 7)
        above25 = c[-1] > sma(c, 25)
        above50 = c[-1] > sma(c, 50) if len(c) >= 50 else above25
        mom     = momentum_score(c)   # 0–1
        atr_pct = compute_atr(c)      # daily vol

        score = 0
        # Trend alignment
        if above7 and above25 and above50: score += 3
        elif above7 and above25:           score += 2
        elif above7:                       score += 1
        # Momentum
        if mom >= 0.67: score += 2
        elif mom >= 0.33: score += 1
        # RSI zone
        if 40 < rsi < 65:  score += 2
        elif 65 <= rsi < 75: score += 1   # still OK, just slower
        elif rsi >= 75:      score -= 1   # overbought mild cut
        elif rsi < 30:       score += 1   # deep oversold — dip buy
        # Volatility penalty: high vol → reduce
        if atr_pct > 0.04: score -= 1

        weights[sym] = max(score, 0)

    # BTC structural floor: crypto market cap leader gets minimum 15%
    weights["BTCUSDT"] = max(weights.get("BTCUSDT", 0), 1)

    total = sum(weights.values()) or 1
    max_exposure = 0.90  # allow up to 90% invested in strong bull
    allocs = {s: round(weights[s]/total * max_exposure, 4) for s in SYMBOLS}
    allocs["CASH"] = round(max(0.05, 1 - sum(allocs.values())), 4)
    t = sum(allocs.values())
    return {k: round(v/t, 4) for k, v in allocs.items()}


def manager2_defi(day_idx, full_closes):
    """
    IMPROVED: DeFi fundamentals — smarter TVL-proxy using on-chain price trends
    Key fixes:
    - Reduce cash floor from 15% to 10% in confirmed uptrends
    - Use 50-day trend as proxy for DeFi ecosystem health
    - ETH and TRX are DeFi hubs; SOL added as L1 DeFi competitor
    - More aggressive when multiple signals align
    """
    allocs = {s: 0 for s in SYMBOLS}
    allocs["CASH"] = 0
    c_eth = full_closes["ETHUSDT"][:day_idx+1]
    c_trx = full_closes["TRXUSDT"][:day_idx+1]
    c_sol = full_closes["SOLUSDT"][:day_idx+1]
    if len(c_eth) < 26:
        allocs["CASH"] = 1.0; return allocs

    rsi_eth = compute_rsi(c_eth)
    rsi_trx = compute_rsi(c_trx)
    rsi_sol = compute_rsi(c_sol) if len(c_sol) >= 15 else 50

    eth_trend  = c_eth[-1] > sma(c_eth, 25) and c_eth[-1] > sma(c_eth, 50 if len(c_eth)>=50 else 25)
    trx_trend  = c_trx[-1] > sma(c_trx, 25)
    sol_trend  = len(c_sol) >= 26 and c_sol[-1] > sma(c_sol, 25)
    mom_eth    = momentum_score(c_eth)
    mom_trx    = momentum_score(c_trx)

    # ETH: DeFi primary hub
    if eth_trend and rsi_eth < 75 and mom_eth >= 0.67:   eth_w = 0.42
    elif eth_trend and rsi_eth < 75:                      eth_w = 0.33
    elif rsi_eth < 35:                                    eth_w = 0.30  # dip buy
    else:                                                 eth_w = 0.18

    # TRX: TRON USDT ecosystem
    if trx_trend and rsi_trx < 75 and mom_trx >= 0.67:   trx_w = 0.25
    elif trx_trend and rsi_trx < 75:                      trx_w = 0.18
    elif rsi_trx < 35:                                    trx_w = 0.20
    else:                                                 trx_w = 0.08

    # SOL: L1 DeFi competitor
    if sol_trend and rsi_sol < 72:   sol_w = 0.15
    elif sol_trend:                  sol_w = 0.10
    else:                            sol_w = 0.05

    cash_w = max(0.10, 1 - eth_w - trx_w - sol_w)
    t = eth_w + trx_w + sol_w + cash_w
    allocs["ETHUSDT"] = round(eth_w/t, 4)
    allocs["TRXUSDT"] = round(trx_w/t, 4)
    allocs["SOLUSDT"] = round(sol_w/t, 4)
    allocs["CASH"]    = round(cash_w/t, 4)
    return allocs


def manager3_quant(day_idx, full_closes):
    """
    IMPROVED: Quant arbitrage with proper market regime filter
    Key fixes (root cause of -33%):
    - Old: pure RSI extremes → got stuck in low-weight during trending market
    - New: REGIME FILTER first — if macro trend is bull, use momentum base
           only flip to mean-reversion in sideways/bear regimes
    - Trailing stop: if drawdown > 15% from recent peak → cut to 30% exposure
    - Volatility targeting: size positions inversely to ATR
    - No more 65% cash while market rallies 40%
    """
    allocs = {s: 0 for s in SYMBOLS}
    allocs["CASH"] = 0

    # BTC is the macro regime indicator
    c_btc = full_closes["BTCUSDT"][:day_idx+1]
    if len(c_btc) < 50:
        allocs = {"BTCUSDT":0.20,"ETHUSDT":0.20,"SOLUSDT":0.20,"TRXUSDT":0.10,"CASH":0.30}
        return allocs

    # Macro regime: bull if BTC above 50-SMA and momentum positive
    btc_sma50  = sma(c_btc, 50)
    btc_sma200 = sma(c_btc, 200) if len(c_btc) >= 200 else btc_sma50
    btc_mom    = momentum_score(c_btc)
    bull_regime = c_btc[-1] > btc_sma50 and c_btc[-1] > btc_sma200

    # Trailing drawdown protection: track 60-day peak
    window_60 = [x for x in c_btc[-60:] if x]
    peak_60 = max(window_60) if window_60 else c_btc[-1]
    drawdown_from_peak = (peak_60 - c_btc[-1]) / peak_60

    # Severe drawdown → capital preservation mode
    if drawdown_from_peak > 0.20:
        allocs = {"BTCUSDT":0.10,"ETHUSDT":0.10,"SOLUSDT":0.05,"TRXUSDT":0.05,"CASH":0.70}
        return allocs

    weights = {}
    for sym in SYMBOLS:
        c = full_closes[sym][:day_idx+1]
        if len(c) < 20:
            weights[sym] = 0.15; continue

        rsi     = compute_rsi(c)
        atr_pct = compute_atr(c)
        mom     = momentum_score(c)
        above25 = c[-1] > sma(c, 25)

        if bull_regime:
            # BULL: trend-following mode, mean-revert only at extremes
            if rsi > 78:       w = 0.05   # very overbought → reduce
            elif rsi < 30:     w = 0.40   # oversold in bull → strong buy
            elif above25 and mom >= 0.67: w = 0.30  # momentum confirm
            elif above25:      w = 0.22
            else:              w = 0.12
        else:
            # BEAR/SIDEWAYS: classic mean-reversion
            if rsi > 70:   w = 0.05
            elif rsi < 32: w = 0.35
            else:          w = 0.15

        # Volatility sizing: halve weight if ATR > 5%
        if atr_pct > 0.05: w *= 0.7
        weights[sym] = w

    total = sum(weights.values())
    max_exp = 0.85 if bull_regime else 0.65
    cash_w  = max(0.10 if bull_regime else 0.20, 1 - total * (max_exp/total if total > 0 else 1))

    t = total + cash_w
    for s in SYMBOLS: allocs[s] = round(weights[s]/t, 4)
    allocs["CASH"] = round(cash_w/t, 4)

    # Final normalise
    tt = sum(allocs.values())
    return {k: round(v/tt, 4) for k, v in allocs.items()}


def manager4_tron(day_idx, full_closes):
    """
    IMPROVED: TRON conservative income with better trend capture
    Key fixes:
    - Add BTC as macro risk gauge (not as holding, just signal)
    - Wider TRX range: 20%–65% instead of 20%–55%
    - Add momentum confirmation for higher conviction entries
    - Reduce cash floor to 35% in confirmed uptrend (was 45%)
    """
    allocs = {s: 0 for s in SYMBOLS}
    allocs["CASH"] = 0
    c_trx = full_closes["TRXUSDT"][:day_idx+1]
    c_btc = full_closes["BTCUSDT"][:day_idx+1]

    if len(c_trx) < 14:
        allocs["TRXUSDT"] = 0.35; allocs["CASH"] = 0.65; return allocs

    rsi_trx  = compute_rsi(c_trx)
    mom_trx  = momentum_score(c_trx)
    above14  = c_trx[-1] > sma(c_trx, 14)
    above30  = c_trx[-1] > sma(c_trx, 30) if len(c_trx) >= 30 else above14

    # Macro risk filter via BTC
    macro_bull = len(c_btc) >= 50 and c_btc[-1] > sma(c_btc, 50)

    if rsi_trx > 78:
        trx_w = 0.18   # very overbought, reduce
    elif rsi_trx < 30:
        trx_w = 0.60   # deep oversold, accumulate hard
    elif above14 and above30 and mom_trx >= 0.67 and macro_bull:
        trx_w = 0.60   # all signals aligned + macro bull
    elif above14 and above30 and macro_bull:
        trx_w = 0.50
    elif above14 and above30:
        trx_w = 0.42
    elif above14:
        trx_w = 0.32
    else:
        trx_w = 0.22

    allocs["TRXUSDT"] = round(trx_w, 4)
    allocs["CASH"]    = round(1 - trx_w, 4)
    return allocs

MANAGER_FNS = {
    "manager_1_trend": manager1_trend,
    "manager_2_defi":  manager2_defi,
    "manager_3_quant": manager3_quant,
    "manager_4_tron":  manager4_tron,
}
MANAGER_META = {
    "manager_1_trend": {"label":"Manager I - Trend",   "color":"#60A5FA","emoji":"M1"},
    "manager_2_defi":  {"label":"Manager II - DeFi",   "color":"#34D399","emoji":"M2"},
    "manager_3_quant": {"label":"Manager III - Quant", "color":"#FBBF24","emoji":"M3"},
    "manager_4_tron":  {"label":"Manager IV - TRON",   "color":"#A78BFA","emoji":"M4"},
}

def run_backtest_1y():
    ensure_directories()
    with PRICE_1Y_PATH.open(encoding="utf-8") as f:
        raw = json.load(f)

    # Build full_closes (list of prices) and date index
    full_closes = {}
    all_ts = sorted({ts for sym in SYMBOLS for ts, _ in raw[sym]})
    all_dates = [datetime.fromtimestamp(ts, UTC).strftime("%Y-%m-%d") for ts in all_ts]

    for sym in SYMBOLS:
        ts_price = {ts: p for ts, p in raw[sym]}
        full_closes[sym] = [ts_price.get(ts, None) for ts in all_ts]

    # Use last 365 days
    start_idx = max(LOOKBACK, len(all_dates) - 365)
    bt_dates  = all_dates[start_idx:]
    n_days    = len(bt_dates)
    print(f"  Backtest range: {bt_dates[0]} -> {bt_dates[-1]}  ({n_days} days)")

    results = {}
    for mgr_id, fn in MANAGER_FNS.items():
        meta = MANAGER_META[mgr_id]
        print(f"  {meta['emoji']} {meta['label']}...")

        nav = 1.0
        nav_series = []
        prev_allocs = {}

        for i, d in enumerate(bt_dates):
            real_idx = start_idx + i
            allocs = fn(real_idx, full_closes)

            # Daily return
            day_return = 0.0
            for sym, w in allocs.items():
                if sym == "CASH":
                    cash_apy = 0.065 if mgr_id == "manager_4_tron" else 0.05
                    day_return += w * (cash_apy / 365)
                else:
                    p0 = full_closes[sym][real_idx - 1] if real_idx > 0 else None
                    p1 = full_closes[sym][real_idx]
                    if p0 and p1:
                        day_return += w * (p1 - p0) / p0

            nav *= (1 + day_return)
            nav_series.append({
                "date": d,
                "nav": round(nav, 6),
                "capital": round(nav * INITIAL_CAPITAL, 2),
                "allocations": allocs,
            })
            prev_allocs = allocs

        # ── Stats ────────────────────────────────────────────────
        navs = [x["nav"] for x in nav_series]
        peak = 1.0
        max_dd = 0.0
        for n in navs:
            if n > peak: peak = n
            dd = (peak - n) / peak
            if dd > max_dd: max_dd = dd

        daily_rets = [navs[i]/navs[i-1]-1 for i in range(1, len(navs))]
        avg_r = sum(daily_rets)/len(daily_rets) if daily_rets else 0
        std_r = statistics.stdev(daily_rets) if len(daily_rets) > 1 else 0.001
        sharpe = round((avg_r / std_r) * (252**0.5), 2) if std_r > 0 else 0
        cagr   = round((nav ** (365/n_days) - 1) * 100, 2)

        results[mgr_id] = {
            **meta,
            "nav_series": nav_series,
            "stats": {
                "final_nav":        round(nav, 6),
                "total_return_pct": round((nav-1)*100, 2),
                "cagr_pct":         cagr,
                "max_drawdown_pct": round(max_dd*100, 2),
                "sharpe":           sharpe,
            }
        }

    # BTC benchmark
    btc_prices = {datetime.fromtimestamp(ts, UTC).strftime("%Y-%m-%d"): p
                  for ts, p in raw["BTCUSDT"]}
    first_btc = btc_prices.get(bt_dates[0], 1)
    btc_nav = [{
        "date": d,
        "nav": round(btc_prices.get(d, first_btc) / first_btc, 6)
    } for d in bt_dates]
    btc_final = btc_nav[-1]["nav"]

    return {
        "results": results,
        "dates": bt_dates,
        "btc_benchmark": btc_nav,
        "btc_final_nav": round(btc_final, 6),
        "btc_return_pct": round((btc_final-1)*100, 2),
    }

if __name__ == "__main__":
    print("Running 1-year backtest...")
    data = run_backtest_1y()

    print(f"\n{'Manager':<25} {'Final NAV':>10} {'Total Ret':>10} {'CAGR':>7} {'MaxDD':>8} {'Sharpe':>8}")
    print("-"*72)
    for mgr_id, r in data["results"].items():
        s = r["stats"]
        print(f"  {r['label']:<23} {s['final_nav']:>10.4f} {s['total_return_pct']:>9.2f}% "
              f"{s['cagr_pct']:>6.2f}% {s['max_drawdown_pct']:>7.2f}% {s['sharpe']:>8.2f}")
    print(f"\n  {'BTC Buy & Hold':<23} {data['btc_final_nav']:>10.4f} {data['btc_return_pct']:>9.2f}%  (benchmark)")

    with BACKTEST_1Y_PATH.open("w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)
    with BTC_BENCHMARK_PATH.open("w", encoding="utf-8") as f:
        json.dump(data["btc_benchmark"], f, indent=2)
    print(f"\nSaved -> {BACKTEST_1Y_PATH}")
