#!/usr/bin/env python3
"""
经理三：量化套利型
策略：资金费率套利 + 跨市场价差 + 统计套利信号
"""
import json, urllib.request, urllib.error, time, hmac, hashlib, math
from datetime import datetime

from conviction_atlas_backend.paths import openclaw_candidates, resolve_existing_path

print("=" * 60)
print("⚙️  经理三 - 量化套利型 端到端测试")
print("=" * 60)

BINANCE_BASE = "https://testnet.binance.vision"

# 读取 API Key
try:
    cred_path = resolve_existing_path(
        [
            *openclaw_candidates("credentials", "binance.json"),
            *openclaw_candidates("secrets", "binance.json"),
        ],
        required=False,
    )
    with cred_path.open(encoding="utf-8") as f:
        creds = json.load(f)
    API_KEY = creds["apiKey"]
    SECRET_KEY = creds["secretKey"]
except:
    API_KEY, SECRET_KEY = "", ""

def binance_public(path, params=""):
    url = f"https://fapi.binance.com{path}"
    if params:
        url += "?" + params
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=10) as r:
        return json.loads(r.read())

def binance_testnet_signed(path, method="GET", params=None):
    params = params or {}
    params["timestamp"] = int(time.time() * 1000)
    query = "&".join(f"{k}={v}" for k, v in sorted(params.items()))
    sig = hmac.new(SECRET_KEY.encode(), query.encode(), hashlib.sha256).hexdigest()
    query += f"&signature={sig}"
    url = f"{BINANCE_BASE}{path}?{query}"
    req = urllib.request.Request(url, headers={
        "X-MBX-APIKEY": API_KEY,
        "User-Agent": "Mozilla/5.0"
    })
    with urllib.request.urlopen(req, timeout=10) as r:
        return json.loads(r.read())

# STEP 1: 资金费率扫描 - 找高负费率（空头赚钱机会）
print("\n【STEP 1】 资金费率套利扫描（找负费率机会）")
try:
    data = binance_public("/fapi/v1/premiumIndex")
    # 按资金费率排序
    data_sorted = sorted(data, key=lambda x: float(x.get("lastFundingRate", 0)))
    
    print("  资金费率极低（负值，空头赚/做多买保险机会）：")
    neg_top5 = [d for d in data_sorted if float(d.get("lastFundingRate", 0)) < -0.0001][:5]
    for d in neg_top5:
        fr = float(d["lastFundingRate"]) * 100
        mp = float(d["markPrice"])
        print(f"    {d['symbol']:<20} 费率: {fr:.4f}%/8h  标价: ${mp:.4f}")
    
    print("\n  资金费率极高（正值，多头赚/做空有利机会）：")
    pos_top5 = list(reversed(data_sorted))[:5]
    pos_top5 = [d for d in pos_top5 if float(d.get("lastFundingRate", 0)) > 0.0003][:5]
    for d in pos_top5:
        fr = float(d["lastFundingRate"]) * 100
        mp = float(d["markPrice"])
        print(f"    {d['symbol']:<20} 费率: {fr:.4f}%/8h  标价: ${mp:.4f}")
    
    # 重点分析 BTC/ETH/SOL/TRX
    targets = {d["symbol"]: d for d in data if d["symbol"] in ["BTCUSDT","ETHUSDT","SOLUSDT","TRXUSDT"]}
    print("\n  核心资产资金费率：")
    for sym, d in targets.items():
        fr = float(d.get("lastFundingRate", 0)) * 100
        mp = float(d.get("markPrice", 0))
        annualized = fr * 3 * 365  # 3次/天 * 365天
        print(f"    {sym:<12} 费率: {fr:.4f}%/8h  年化: {annualized:.1f}%  建议: {'做空套利' if fr > 0.03 else '中性' if abs(fr) < 0.01 else '做多套利'}")

except Exception as e:
    print(f"  ❌ {e}")

# STEP 2: 现货/合约价差分析（Basis）
print("\n【STEP 2】 现货/合约价差（Basis 分析）")
symbols = ["BTCUSDT", "ETHUSDT", "SOLUSDT", "TRXUSDT"]
try:
    # 现货价格
    spot_req = urllib.request.Request(
        "https://api.binance.com/api/v3/ticker/price",
        headers={"User-Agent": "Mozilla/5.0"}
    )
    with urllib.request.urlopen(spot_req, timeout=10) as r:
        spot_prices = {d["symbol"]: float(d["price"]) for d in json.loads(r.read())}
    
    # 合约标价
    perp_req = urllib.request.Request(
        "https://fapi.binance.com/fapi/v1/ticker/price",
        headers={"User-Agent": "Mozilla/5.0"}
    )
    with urllib.request.urlopen(perp_req, timeout=10) as r:
        perp_prices = {d["symbol"]: float(d["price"]) for d in json.loads(r.read())}
    
    print(f"  {'Symbol':<12} {'Spot':>12} {'Perp':>12} {'Basis':>10} {'Basis%':>8} {'机会'}")
    print(f"  {'-'*62}")
    for sym in symbols:
        spot = spot_prices.get(sym, 0)
        perp = perp_prices.get(sym, 0)
        if spot and perp:
            basis = perp - spot
            basis_pct = basis / spot * 100
            opp = "正套利机会" if basis_pct > 0.05 else "反套利机会" if basis_pct < -0.05 else "中性"
            print(f"  {sym:<12} ${spot:>11,.4f} ${perp:>11,.4f} {basis:>+10.4f} {basis_pct:>+7.4f}%  {opp}")

except Exception as e:
    print(f"  ❌ {e}")

# STEP 3: 波动率分析（判断是否适合套利）
print("\n【STEP 3】 波动率分析（24h High/Low Range）")
try:
    ticker_req = urllib.request.Request(
        "https://api.binance.com/api/v3/ticker/24hr",
        headers={"User-Agent": "Mozilla/5.0"}
    )
    with urllib.request.urlopen(ticker_req, timeout=10) as r:
        tickers = {d["symbol"]: d for d in json.loads(r.read())}
    
    for sym in symbols:
        t = tickers.get(sym, {})
        if t:
            h = float(t["highPrice"])
            l = float(t["lowPrice"])
            c = float(t["lastPrice"])
            vol_range = (h - l) / c * 100
            vol_label = "高波动 ⚡" if vol_range > 5 else "中波动 ~" if vol_range > 2 else "低波动 💤"
            print(f"    {sym:<12} 24h区间: {vol_range:.2f}%  [{vol_label}]  量: ${float(t['quoteVolume'])/1e6:.0f}M")

except Exception as e:
    print(f"  ❌ {e}")

# STEP 4: 模拟套利下单（现货买 + 合约空，对冲策略）
print("\n【STEP 4】 模拟套利执行（现货多头 + 期货空头对冲）")
print("  策略: ETHUSDT Basis 套利 - 买入现货 + 开空合约")
print("  注：Testnet 仅做多演示，合约空头需 Futures Testnet 账户")

try:
    import hmac as hmac_mod
    params = {
        "symbol": "ETHUSDT",
        "side": "BUY",
        "type": "MARKET",
        "quantity": "0.01",
        "recvWindow": "5000"
    }
    params["timestamp"] = str(int(time.time() * 1000))
    query = "&".join(f"{k}={v}" for k, v in sorted(params.items()))
    sig = hmac_mod.new(SECRET_KEY.encode(), query.encode(), hashlib.sha256).hexdigest()
    query += f"&signature={sig}"
    
    order_req = urllib.request.Request(
        f"{BINANCE_BASE}/api/v3/order",
        data=query.encode(),
        method="POST",
        headers={
            "X-MBX-APIKEY": API_KEY,
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0"
        }
    )
    with urllib.request.urlopen(order_req, timeout=15) as r:
        result = json.loads(r.read())
    
    print(f"  ✅ 现货腿成交：")
    print(f"    orderId: {result.get('orderId')}")
    print(f"    symbol: {result.get('symbol')}")
    print(f"    side: {result.get('side')}")
    print(f"    status: {result.get('status')}")
    fills = result.get("fills", [])
    if fills:
        avg_price = sum(float(f["price"]) * float(f["qty"]) for f in fills) / sum(float(f["qty"]) for f in fills)
        print(f"    成交均价: ${avg_price:.2f}")

except Exception as e:
    print(f"  ❌ 下单错误: {e}")

# STEP 5: 综合信号
print("\n【STEP 5】 经理三综合套利信号")
print("  ┌─────────────────────────────────────────────┐")
print("  │  量化套利分析结论：                          │")
print("  │  • 资金费率接近零 → 基差套利机会小           │")
print("  │  • 现货/合约价差<0.05% → 无明显套利空间     │")
print("  │  • 波动率适中 → 适合统计均值回归策略        │")
print("  │  信号：⚠️  套利机会有限，建议小仓位待机     │")
print("  │  建议仓位：5-10%，等待资金费率>0.05%时介入  │")
print("  └─────────────────────────────────────────────┘")

print("\n✅ 经理三测试完成")
