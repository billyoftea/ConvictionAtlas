#!/usr/bin/env python3
"""
30-Day Historical Backtest with LLM-Style Rule Engine
Simulates what each manager WOULD have decided each day,
using the same logic/signals as the real LLM prompts but via fast rules.
"""
import json, urllib.request, time
from datetime import datetime, timedelta, date

from conviction_atlas_backend.paths import REPORTS_DIR, ensure_directories

SYMBOLS = ["BTCUSDT", "ETHUSDT", "SOLUSDT", "TRXUSDT"]
INITIAL_CAPITAL = 10000.0

def fetch(url, timeout=12):
    req = urllib.request.Request(url, headers={"User-Agent": "FundEngine/1.0"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return json.loads(r.read())

def compute_rsi(closes, period=14):
    deltas = [closes[i+1]-closes[i] for i in range(len(closes)-1)]
    gains  = [d if d>0 else 0 for d in deltas[-period:]]
    losses = [-d if d<0 else 0 for d in deltas[-period:]]
    ag, al = sum(gains)/period, sum(losses)/period
    return 100 - 100/(1+ag/al) if al != 0 else 100.0

def get_30day_klines():
    """Fetch 60 days of daily klines per symbol (need lookback for indicators)"""
    print("  Fetching 60d klines for all symbols...")
    data = {}
    for sym in SYMBOLS:
        klines = fetch(f"https://api.binance.com/api/v3/klines?symbol={sym}&interval=1d&limit=60")
        data[sym] = [(int(k[0])//1000, float(k[4])) for k in klines]  # (unix_ts, close)
        time.sleep(0.2)
    return data

# ── Manager decision rules (mirrors LLM persona logic) ──────────
def manager1_trend(day_idx, closes_by_sym):
    """Trend following: RSI + SMA crossover"""
    allocs = {"BTCUSDT": 0, "ETHUSDT": 0, "SOLUSDT": 0, "TRXUSDT": 0, "CASH": 0}
    signals = {}
    for sym in SYMBOLS:
        c = closes_by_sym[sym][:day_idx+1]
        if len(c) < 26: continue
        rsi = compute_rsi(c)
        sma7  = sum(c[-7:])  / 7
        sma25 = sum(c[-25:]) / 25
        above7  = c[-1] > sma7
        above25 = c[-1] > sma25
        # Scoring
        score = 0
        if above7 and above25: score += 2
        elif above7: score += 1
        if 45 < rsi < 70: score += 2
        elif rsi >= 70: score -= 2
        elif rsi < 35: score += 1  # oversold dip-buy
        signals[sym] = max(score, 0)

    total = sum(signals.values()) or 1
    base = {s: signals[s]/total * 0.85 for s in SYMBOLS}
    cash = max(0.10, 1 - sum(base.values()))
    for s in SYMBOLS: allocs[s] = round(base[s], 4)
    allocs["CASH"] = round(cash, 4)
    # Normalise
    t = sum(allocs.values())
    return {k: round(v/t, 4) for k, v in allocs.items()}

def manager2_defi(day_idx, closes_by_sym):
    """DeFi fundamentals: ETH/TRX focused, no BTC"""
    allocs = {"BTCUSDT": 0, "ETHUSDT": 0, "SOLUSDT": 0, "TRXUSDT": 0, "CASH": 0}
    c_eth = closes_by_sym["ETHUSDT"][:day_idx+1]
    c_trx = closes_by_sym["TRXUSDT"][:day_idx+1]
    c_sol = closes_by_sym["SOLUSDT"][:day_idx+1]
    if len(c_eth) < 26:
        allocs["CASH"] = 1.0; return allocs

    rsi_eth = compute_rsi(c_eth)
    rsi_trx = compute_rsi(c_trx)
    sma7_eth  = sum(c_eth[-7:])/7
    sma7_trx  = sum(c_trx[-7:])/7
    sma25_eth = sum(c_eth[-25:])/25
    sma25_trx = sum(c_trx[-25:])/25

    eth_w = 0.35 if c_eth[-1] > sma25_eth and rsi_eth < 72 else 0.20
    trx_w = 0.20 if c_trx[-1] > sma25_trx and rsi_trx < 72 else 0.10
    sol_w = 0.10 if len(c_sol) >= 26 and c_sol[-1] > sum(c_sol[-25:])/25 else 0.05
    cash_w = max(0.15, 1 - eth_w - trx_w - sol_w)

    t = eth_w + trx_w + sol_w + cash_w
    allocs["ETHUSDT"] = round(eth_w/t, 4)
    allocs["TRXUSDT"] = round(trx_w/t, 4)
    allocs["SOLUSDT"] = round(sol_w/t, 4)
    allocs["CASH"]    = round(cash_w/t, 4)
    return allocs

def manager3_quant(day_idx, closes_by_sym):
    """Quant arb: mean-reversion via RSI extremes + equal weight base"""
    allocs = {"BTCUSDT": 0, "ETHUSDT": 0, "SOLUSDT": 0, "TRXUSDT": 0, "CASH": 0}
    weights = {}
    for sym in SYMBOLS:
        c = closes_by_sym[sym][:day_idx+1]
        if len(c) < 20:
            weights[sym] = 0.15; continue
        rsi = compute_rsi(c)
        if rsi > 72:   weights[sym] = 0.05   # overbought → reduce
        elif rsi < 32: weights[sym] = 0.35   # oversold  → add
        else:          weights[sym] = 0.20   # neutral

    cash_w = max(0.20, 1 - sum(weights.values()))
    t = sum(weights.values()) + cash_w
    for s in SYMBOLS: allocs[s] = round(weights[s]/t, 4)
    allocs["CASH"] = round(cash_w/t, 4)
    return allocs

def manager4_tron(day_idx, closes_by_sym):
    """TRON conservative: TRX + CASH yield only"""
    c = closes_by_sym["TRXUSDT"][:day_idx+1]
    allocs = {"BTCUSDT": 0, "ETHUSDT": 0, "SOLUSDT": 0, "TRXUSDT": 0, "CASH": 0}
    if len(c) < 14:
        allocs["TRXUSDT"] = 0.30; allocs["CASH"] = 0.70; return allocs

    rsi = compute_rsi(c)
    sma7  = sum(c[-7:])/7
    sma14 = sum(c[-14:])/14

    if rsi > 72:
        trx_w = 0.20   # overbought, reduce
    elif rsi < 35:
        trx_w = 0.55   # oversold, accumulate
    elif c[-1] > sma7 > sma14:
        trx_w = 0.45   # uptrend
    else:
        trx_w = 0.30   # neutral

    allocs["TRXUSDT"] = round(trx_w, 4)
    allocs["CASH"]    = round(1 - trx_w, 4)
    return allocs

MANAGER_FNS = {
    "manager_1_trend": manager1_trend,
    "manager_2_defi":  manager2_defi,
    "manager_3_quant": manager3_quant,
    "manager_4_tron":  manager4_tron,
}

MANAGER_LABELS = {
    "manager_1_trend": {"label": "Manager I - Trend",   "color": "#60A5FA", "emoji": "M1"},
    "manager_2_defi":  {"label": "Manager II - DeFi",   "color": "#34D399", "emoji": "M2"},
    "manager_3_quant": {"label": "Manager III - Quant", "color": "#FBBF24", "emoji": "M3"},
    "manager_4_tron":  {"label": "Manager IV - TRON",   "color": "#A78BFA", "emoji": "M4"},
}

def run_backtest():
    klines = get_30day_klines()

    # Use last 32 days (need some lookback buffer)
    # Find common date range
    all_dates = []
    for sym in SYMBOLS:
        for ts, price in klines[sym][-32:]:
            d = datetime.utcfromtimestamp(ts).strftime("%Y-%m-%d")
            all_dates.append(d)
    all_dates = sorted(set(all_dates))[-30:]  # last 30 trading days

    # Build price matrix: {sym: [close0, close1, ...]} aligned to dates
    price_matrix = {}
    for sym in SYMBOLS:
        date_map = {datetime.utcfromtimestamp(ts).strftime("%Y-%m-%d"): p for ts, p in klines[sym]}
        price_matrix[sym] = [date_map.get(d, None) for d in all_dates]

    # Build full history (60 days) for indicator lookback
    full_closes = {}
    for sym in SYMBOLS:
        full_closes[sym] = [p for _, p in klines[sym]]

    results = {}
    for mgr_id, fn in MANAGER_FNS.items():
        print(f"  Backtesting {MANAGER_LABELS[mgr_id]['label']}...")
        nav = 1.0
        capital = INITIAL_CAPITAL
        nav_series = []
        holdings_series = []

        # Starting allocation (day 0)
        lookback_offset = len(full_closes["BTCUSDT"]) - 30

        for i, d in enumerate(all_dates):
            day_idx = lookback_offset + i - 1
            allocs = fn(day_idx, full_closes)

            # Compute daily return based on price changes
            if i > 0:
                day_return = 0.0
                for sym, w in allocs.items():
                    if sym == "CASH":
                        # TRON yield: ~5% APY / 365
                        cash_yield = 0.05 / 365
                        if mgr_id == "manager_4_tron":
                            cash_yield = 0.065 / 365  # JustLend premium
                        day_return += w * cash_yield
                    else:
                        prev_price = price_matrix[sym][i-1]
                        curr_price = price_matrix[sym][i]
                        if prev_price and curr_price:
                            sym_return = (curr_price - prev_price) / prev_price
                            day_return += w * sym_return
                nav *= (1 + day_return)
                capital = nav * INITIAL_CAPITAL

            nav_series.append({"date": d, "nav": round(nav, 6), "capital": round(capital, 2)})
            holdings_series.append({"date": d, "allocations": allocs})

        # Stats
        navs = [x["nav"] for x in nav_series]
        peak = 1.0
        max_dd = 0.0
        for n in navs:
            if n > peak: peak = n
            dd = (peak - n) / peak
            if dd > max_dd: max_dd = dd

        returns = [navs[i]/navs[i-1]-1 for i in range(1,len(navs))]
        sharpe = 0.0
        if returns:
            import statistics
            avg_r = sum(returns)/len(returns)
            std_r = statistics.stdev(returns) if len(returns)>1 else 0.001
            sharpe = round((avg_r/std_r)*16, 2) if std_r > 0 else 0  # annualised ~sqrt(252/trading)

        results[mgr_id] = {
            "nav_series": nav_series,
            "holdings_series": holdings_series,
            "stats": {
                "final_nav": round(nav, 6),
                "total_return_pct": round((nav-1)*100, 2),
                "max_drawdown_pct": round(max_dd*100, 2),
                "sharpe": sharpe,
            },
            "label": MANAGER_LABELS[mgr_id]["label"],
            "color": MANAGER_LABELS[mgr_id]["color"],
            "emoji": MANAGER_LABELS[mgr_id]["emoji"],
        }

    return results, all_dates

if __name__ == "__main__":
    ensure_directories()
    print("Running 30-day backtest...")
    results, dates = run_backtest()
    out = REPORTS_DIR / "backtest_30d.json"
    with out.open("w", encoding="utf-8") as f:
        json.dump({"results": results, "dates": dates}, f)
    print(f"\n30-Day Backtest Results:")
    print(f"{'Manager':<25} {'Final NAV':>10} {'Return':>8} {'MaxDD':>8} {'Sharpe':>8}")
    print("-"*65)
    for mgr_id, r in results.items():
        s = r["stats"]
        print(f"  {r['label']:<23} {s['final_nav']:>10.4f} {s['total_return_pct']:>7.2f}% {s['max_drawdown_pct']:>7.2f}% {s['sharpe']:>8.2f}")
    print(f"\nSaved to {out}")
