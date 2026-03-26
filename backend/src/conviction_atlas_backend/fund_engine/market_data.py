#!/usr/bin/env python3
"""
Market Data Collector — feeds all 4 managers with fresh market context
"""
import json, urllib.request, time
from datetime import datetime

def fetch(url, timeout=10):
    req = urllib.request.Request(url, headers={"User-Agent": "FundEngine/1.0"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return json.loads(r.read())

def get_prices_and_technicals(symbols=("BTCUSDT","ETHUSDT","SOLUSDT","TRXUSDT")):
    """RSI-14 + SMA7/25 + 24h change from Binance"""
    result = {}
    for sym in symbols:
        try:
            klines = fetch(f"https://api.binance.com/api/v3/klines?symbol={sym}&interval=1d&limit=30")
            closes = [float(k[4]) for k in klines]
            price  = closes[-1]

            # RSI-14
            deltas = [closes[i+1]-closes[i] for i in range(len(closes)-1)]
            gains  = [d if d>0 else 0 for d in deltas[-14:]]
            losses = [-d if d<0 else 0 for d in deltas[-14:]]
            ag, al = sum(gains)/14, sum(losses)/14
            rsi = 100 - 100/(1+ag/al) if al != 0 else 100.0

            sma7  = sum(closes[-7:])  / 7
            sma25 = sum(closes[-25:]) / 25
            chg1d = (closes[-1] - closes[-2]) / closes[-2] * 100
            chg7d = (closes[-1] - closes[-7]) / closes[-7] * 100

            result[sym] = {
                "price": round(price, 6),
                "rsi14": round(rsi, 1),
                "sma7":  round(sma7, 4),
                "sma25": round(sma25, 4),
                "above_sma7":  price > sma7,
                "above_sma25": price > sma25,
                "chg_1d_pct": round(chg1d, 2),
                "chg_7d_pct": round(chg7d, 2),
            }
            time.sleep(0.15)
        except Exception as e:
            result[sym] = {"error": str(e)}
    return result

def get_fear_greed():
    try:
        d = fetch("https://strykr-prism.up.railway.app/market/fear-greed", timeout=8)
        return {"value": d["value"], "label": d["label"]}
    except:
        return {"value": 50, "label": "Neutral"}

def get_funding_rates(symbols=("BTCUSDT","ETHUSDT","SOLUSDT","TRXUSDT")):
    try:
        data = fetch("https://fapi.binance.com/fapi/v1/premiumIndex", timeout=12)
        lookup = {d["symbol"]: float(d.get("lastFundingRate",0))*100 for d in data}
        return {sym: round(lookup.get(sym, 0), 5) for sym in symbols}
    except:
        return {sym: 0.0 for sym in symbols}

def get_reddit_sentiment(top_n=10):
    try:
        d = fetch("https://apewisdom.io/api/v1.0/filter/all-crypto/page/1", timeout=8)
        results = d.get("results", [])[:top_n]
        return [{"ticker": r["ticker"], "mentions": r["mentions"], "rank": r["rank"]}
                for r in results]
    except:
        return []

def get_defi_tvl():
    """TRON + global top protocols"""
    try:
        chains = fetch("https://api.llama.fi/v2/chains", timeout=12)
        tron = next((c for c in chains if c.get("name","").lower()=="tron"), {})
        tron_tvl = tron.get("tvl", 0)

        protocols = fetch("https://api.llama.fi/protocols", timeout=12)
        top5 = sorted(protocols, key=lambda x: x.get("tvl",0), reverse=True)[:5]
        top5_list = [{"name":p["name"],"tvl_b":round(p.get("tvl",0)/1e9,2),
                      "change_1d":round(p.get("change_1d") or 0,2)} for p in top5]
        return {"tron_tvl_b": round(tron_tvl/1e9,2), "top5_protocols": top5_list}
    except Exception as e:
        return {"tron_tvl_b": 0, "top5_protocols": [], "error": str(e)}

def collect_all():
    print("  Fetching prices + technicals...")
    prices = get_prices_and_technicals()
    print("  Fetching Fear & Greed...")
    fg = get_fear_greed()
    print("  Fetching funding rates...")
    funding = get_funding_rates()
    print("  Fetching Reddit sentiment...")
    reddit = get_reddit_sentiment()
    print("  Fetching DeFi TVL...")
    defi = get_defi_tvl()

    return {
        "timestamp": datetime.utcnow().isoformat() + "Z",
        "prices": prices,
        "fear_greed": fg,
        "funding_rates_8h_pct": funding,
        "reddit_top10": reddit,
        "defi": defi,
    }

if __name__ == "__main__":
    print("Collecting market data...")
    d = collect_all()
    print(json.dumps(d, indent=2))
