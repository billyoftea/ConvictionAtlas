#!/usr/bin/env python3
"""
Daily Rebalance Engine
- Loads previous allocations
- Runs all 4 LLM managers
- Computes NAV delta
- Places orders on Binance Testnet
- Saves snapshot
"""
import json, os, sys, time, hmac, hashlib, urllib.request
from datetime import datetime, date

sys.path.insert(0, os.path.dirname(__file__))
from market_data import collect_all
from managers import run_manager, MANAGERS

# ── Config ────────────────────────────────────────────────────────
INITIAL_CAPITAL = 10000.0   # per manager, USDT
DATA_DIR  = os.path.join(os.path.dirname(__file__), "data")
ORDER_DIR = os.path.join(os.path.dirname(__file__), "orders")
LOG_DIR   = os.path.join(os.path.dirname(__file__), "logs")
os.makedirs(DATA_DIR, exist_ok=True)
os.makedirs(ORDER_DIR, exist_ok=True)
os.makedirs(LOG_DIR, exist_ok=True)

BINANCE_BASE = "https://testnet.binance.vision"
MIN_REBALANCE_PCT = 2.0   # only trade if allocation drift > 2%

# ── Binance Testnet ───────────────────────────────────────────────
def load_binance_creds():
    with open(os.path.expanduser("~/.openclaw/credentials/binance.json")) as f:
        c = json.load(f)
    return c["apiKey"], c["secretKey"]

def place_market_order(symbol, side, usdt_amount, api_key, secret_key):
    """Place market order; uses quoteOrderQty for BUY, qty for SELL"""
    if usdt_amount < 10:
        return {"skipped": True, "reason": f"amount ${usdt_amount:.2f} < $10 min"}

    params = {
        "symbol": symbol,
        "side": side,
        "type": "MARKET",
        "quoteOrderQty": str(round(usdt_amount, 2)),
        "recvWindow": "5000",
        "timestamp": str(int(time.time() * 1000)),
    }
    query = "&".join(f"{k}={v}" for k, v in sorted(params.items()))
    sig = hmac.new(secret_key.encode(), query.encode(), hashlib.sha256).hexdigest()
    query += f"&signature={sig}"

    req = urllib.request.Request(
        f"{BINANCE_BASE}/api/v3/order",
        data=query.encode(), method="POST",
        headers={
            "X-MBX-APIKEY": api_key,
            "Content-Type": "application/x-www-form-urlencoded",
        }
    )
    try:
        with urllib.request.urlopen(req, timeout=15) as r:
            return json.loads(r.read())
    except urllib.error.HTTPError as e:
        return {"error": e.read().decode()[:200]}

# ── NAV Tracking ──────────────────────────────────────────────────
def load_state(manager_id):
    path = os.path.join(DATA_DIR, f"{manager_id}_state.json")
    if os.path.exists(path):
        with open(path) as f:
            return json.load(f)
    return {
        "nav": 1.0,
        "capital_usdt": INITIAL_CAPITAL,
        "allocations": {},
        "last_run": None,
        "nav_history": [],
    }

def save_state(manager_id, state):
    path = os.path.join(DATA_DIR, f"{manager_id}_state.json")
    with open(path, "w") as f:
        json.dump(state, f, indent=2)

def compute_nav(state, market_prices):
    """Recalculate current portfolio value → new NAV"""
    allocs = state.get("allocations", {})
    if not allocs:
        return state["capital_usdt"], state["nav"]

    total_value = 0.0
    for sym, weight in allocs.items():
        if sym == "CASH":
            # Apply yield_apy if set
            daily_yield = state.get("cash_daily_yield", 0)
            total_value += state["capital_usdt"] * weight * (1 + daily_yield)
        else:
            price = market_prices.get(sym, {}).get("price", 0)
            if price:
                total_value += state["capital_usdt"] * weight  # simplified: track in USDT units
    # If no prices available, fallback
    if total_value == 0:
        total_value = state["capital_usdt"]

    new_nav = total_value / INITIAL_CAPITAL
    return total_value, new_nav


# ── Main daily run ────────────────────────────────────────────────
def daily_run(dry_run=False):
    today = date.today().isoformat()
    log_lines = [f"=== Daily Run {datetime.utcnow().isoformat()}Z ===\n"]

    print("\n" + "="*65)
    print(f"🤖 FUND ENGINE — Daily Rebalance  {today}")
    print("="*65)

    # 1. Collect market data (shared across all managers)
    print("\n[1/3] Collecting market data...")
    market_data = collect_all()
    prices = market_data["prices"]

    # 2. Run all managers in sequence
    print("\n[2/3] Running LLM managers...")
    decisions = {}
    api_key, secret_key = load_binance_creds()

    for mgr_id in MANAGERS:
        cfg = MANAGERS[mgr_id]
        print(f"\n  {cfg['emoji']} {cfg['label']}...")

        # Load previous state
        state = load_state(mgr_id)

        # Compute current NAV before rebalance
        current_value, current_nav = compute_nav(state, prices)
        state["capital_usdt"] = current_value
        state["nav"] = current_nav

        # LLM decision
        try:
            decision = run_manager(mgr_id, market_data)
        except Exception as e:
            print(f"    ❌ LLM error: {e}")
            log_lines.append(f"  {mgr_id}: LLM ERROR {e}\n")
            continue

        new_allocs = decision["allocations"]
        old_allocs = state.get("allocations", {})

        print(f"    NAV: {current_nav:.4f}  Value: ${current_value:,.2f}")
        print(f"    Reasoning: {decision.get('reasoning','')[:120]}")
        print(f"    New allocation: { {k:f'{v*100:.0f}%' for k,v in new_allocs.items() if v>0} }")

        # 3. Compute rebalance trades
        orders_placed = []
        if not dry_run:
            for sym, new_w in new_allocs.items():
                if sym == "CASH":
                    continue
                old_w = old_allocs.get(sym, 0)
                drift = (new_w - old_w) * 100  # percentage points

                if abs(drift) < MIN_REBALANCE_PCT:
                    continue  # no trade needed

                trade_usdt = abs(drift / 100) * current_value
                side = "BUY" if drift > 0 else "SELL"

                print(f"    → {side} {sym}  drift={drift:+.1f}%  ~${trade_usdt:.0f}")
                result = place_market_order(sym, side, trade_usdt, api_key, secret_key)
                orders_placed.append({"symbol": sym, "side": side, "usdt": trade_usdt, "result": result})

                if result.get("skipped"):
                    print(f"       Skipped: {result['reason']}")
                elif result.get("error"):
                    print(f"       Error: {result['error'][:80]}")
                else:
                    print(f"       Filled: orderId={result.get('orderId')}")
                time.sleep(0.3)

        # Save order log
        if orders_placed:
            order_path = os.path.join(ORDER_DIR, f"{today}_{mgr_id}_orders.json")
            with open(order_path, "w") as f:
                json.dump(orders_placed, f, indent=2)

        # Update state
        state["allocations"] = new_allocs
        state["last_run"] = datetime.utcnow().isoformat() + "Z"
        state["cash_daily_yield"] = decision.get("estimated_cash_apy", 4.5) / 100 / 365
        state["nav_history"].append({
            "date": today,
            "nav": round(current_nav, 6),
            "value_usdt": round(current_value, 2),
            "reasoning": decision.get("reasoning", "")[:200],
            "confidence": decision.get("confidence", 0),
            "allocations": new_allocs,
        })
        save_state(mgr_id, state)
        decisions[mgr_id] = decision

        log_lines.append(
            f"  {mgr_id}: NAV={current_nav:.4f} | "
            f"Alloc={json.dumps({k:round(v,2) for k,v in new_allocs.items() if v>0})} | "
            f"Conf={decision.get('confidence',0):.2f}\n"
        )

    # 4. Print summary
    print("\n[3/3] Summary")
    print("─"*65)
    print(f"  {'Manager':<22} {'NAV':>7}  {'Value':>12}  {'Conf':>6}  Regime")
    print("─"*65)
    for mgr_id, dec in decisions.items():
        s = load_state(mgr_id)
        regime = dec.get("market_regime") or dec.get("top_defi_signal","–")[:12]
        conf = dec.get("confidence", 0)
        print(f"  {dec['label']:<22} {s['nav']:>7.4f}  ${s['capital_usdt']:>10,.2f}  {conf:>6.0%}  {regime}")

    total_aum = sum(load_state(m)["capital_usdt"] for m in MANAGERS)
    print(f"  {'TOTAL AUM':<22} {'':>7}  ${total_aum:>10,.2f}")

    # Save log
    log_path = os.path.join(LOG_DIR, f"{today}.log")
    with open(log_path, "w") as f:
        f.writelines(log_lines)

    print(f"\n✅ Done. Logs: {log_path}")
    return decisions


if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true", help="Skip order placement")
    args = parser.parse_args()
    daily_run(dry_run=args.dry_run)
