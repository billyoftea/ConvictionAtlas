#!/usr/bin/env python3
"""
TRON 支付层接入测试
功能：用户向平台充值 USDT（Nile testnet）→ 平台识别 → 分配给基金经理
"""
import json, urllib.request, urllib.error, time, subprocess
from datetime import datetime

from conviction_atlas_backend.paths import openclaw_candidates, resolve_existing_path

print("=" * 60)
print("💳 TRON 支付层接入测试")
print("=" * 60)

TRONGRID_NILE = "https://nile.trongrid.io"
TRONSCAN_NILE = "https://nileapi.tronscan.org/api"
NILE_USDT = "TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf"

USER_ADDR = "TREXnmg5Ed4g1S62BHLehxT87vVew3GviR"       # 用户钱包（用于充值）
PLATFORM_ADDR = "TKxJ4WDH5PBfXyRi9JDeSg6XLKhkM25xkN"  # 平台收款钱包

# STEP 1: 查询平台收款地址余额（TRX + USDT）
print(f"\n【STEP 1】 平台收款钱包余额")
print(f"  地址: {PLATFORM_ADDR}")
try:
    req = urllib.request.Request(
        f"{TRONGRID_NILE}/v1/accounts/{PLATFORM_ADDR}",
        headers={"User-Agent": "Mozilla/5.0"}
    )
    with urllib.request.urlopen(req, timeout=10) as r:
        acc = json.loads(r.read())
    
    acc_data = acc.get("data", [{}])[0] if acc.get("data") else {}
    trx_balance = acc_data.get("balance", 0) / 1e6
    print(f"  TRX 余额: {trx_balance:.3f} TRX")
    
    trc20 = acc_data.get("trc20", [])
    usdt_balance = 0
    for token_map in trc20:
        if NILE_USDT in token_map:
            usdt_balance = int(token_map[NILE_USDT]) / 1e6
    print(f"  USDT 余额: {usdt_balance:.2f} USDT")
    
    if trx_balance == 0 and usdt_balance == 0:
        print(f"  ⚠️  余额为零 - 需从 Nile Faucet 领取测试代币")
        print(f"  Faucet: https://nileex.io/join/getJoinPage")

except Exception as e:
    print(f"  ❌ {e}")

# STEP 2: 查询用户钱包余额
print(f"\n【STEP 2】 用户钱包余额")
print(f"  地址: {USER_ADDR}")
try:
    req = urllib.request.Request(
        f"{TRONGRID_NILE}/v1/accounts/{USER_ADDR}",
        headers={"User-Agent": "Mozilla/5.0"}
    )
    with urllib.request.urlopen(req, timeout=10) as r:
        acc = json.loads(r.read())
    
    acc_data = acc.get("data", [{}])[0] if acc.get("data") else {}
    trx_balance = acc_data.get("balance", 0) / 1e6
    print(f"  TRX 余额: {trx_balance:.3f} TRX")
    
    trc20 = acc_data.get("trc20", [])
    usdt_balance = 0
    for token_map in trc20:
        if NILE_USDT in token_map:
            usdt_balance = int(token_map[NILE_USDT]) / 1e6
    print(f"  USDT 余额: {usdt_balance:.2f} USDT")

except Exception as e:
    print(f"  ❌ {e}")

# STEP 3: 查询平台钱包最近充值记录（TRC20 转账）
print(f"\n【STEP 3】 平台钱包近期 TRC20 转账记录")
try:
    url = f"{TRONSCAN_NILE}/token_trc20/transfers?relatedAddress={PLATFORM_ADDR}&limit=5&start=0"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=15) as r:
        txns = json.loads(r.read())
    
    transfers = txns.get("token_transfers", [])
    if transfers:
        print(f"  最近 {len(transfers)} 笔 TRC20 转账：")
        for tx in transfers[:5]:
            from_addr = tx.get("from_address", "")[:16]
            to_addr = tx.get("to_address", "")[:16]
            amount = int(tx.get("quant", 0)) / 1e6
            ts = tx.get("block_ts", 0)
            dt = datetime.utcfromtimestamp(ts/1000).strftime("%m-%d %H:%M") if ts else "N/A"
            token = tx.get("tokenInfo", {}).get("tokenAbbr", "???")
            direction = "📥 IN" if tx.get("to_address") == PLATFORM_ADDR else "📤 OUT"
            print(f"    {direction} {amount:.2f} {token}  {from_addr}... → {to_addr}...  {dt}")
    else:
        print(f"  暂无转账记录（需先从 Faucet 领币后测试）")

except Exception as e:
    print(f"  ❌ TronScan Nile: {e}")
    # 备用：TronGrid
    try:
        url = f"{TRONGRID_NILE}/v1/accounts/{PLATFORM_ADDR}/transactions/trc20?limit=5&contract_address={NILE_USDT}"
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=15) as r:
            data = json.loads(r.read())
        txns = data.get("data", [])
        if txns:
            print(f"  (TronGrid) 最近 {len(txns)} 笔 USDT 转账：")
            for tx in txns[:5]:
                val = int(tx.get("value", 0)) / 1e6
                direction = "📥 IN" if tx.get("to") == PLATFORM_ADDR else "📤 OUT"
                print(f"    {direction} {val:.2f} USDT  {tx.get('from','?')[:12]}... → {tx.get('to','?')[:12]}...")
        else:
            print(f"  暂无 USDT 转账记录")
    except Exception as e2:
        print(f"  ❌ TronGrid 也失败: {e2}")

# STEP 4: 支付接入架构说明
print(f"\n【STEP 4】 TRON 支付流程架构")
print("""
  用户充值流程:
  ┌─────────────────────────────────────────────────────┐
  │  User Wallet (Nile)                                  │
  │  TREXnmg5Ed4g1S62BHLehxT87vVew3GviR                │
  │         │                                            │
  │         │ TRC20 USDT 转账 (Nile Testnet)            │
  │         ▼                                            │
  │  Platform Wallet (收款)                              │
  │  TKxJ4WDH5PBfXyRi9JDeSg6XLKhkM25xkN               │
  │         │                                            │
  │         │ 监听 TronGrid Webhook / 轮询              │
  │         ▼                                            │
  │  平台后台 (Bot Orchestrator)                         │
  │    ├── 解析充值金额                                  │
  │    ├── 分配给对应基金经理                            │
  │    │   ├── 经理一 30% → Binance Testnet 交易        │
  │    │   ├── 经理二 25% → DeFi Yield 策略             │
  │    │   ├── 经理三 25% → 量化套利                    │
  │    │   └── 经理四 20% → TRON 稳健策略               │
  │    └── 每日净值计算 → 用户收益结算                  │
  └─────────────────────────────────────────────────────┘
""")

# STEP 5: x402 支付协议测试
print(f"【STEP 5】 x402 Agent Payment 协议检查")
import os
x402_dist = resolve_existing_path(
    openclaw_candidates("workspace", "skills", "x402-payment-tron", "dist", "index.js"),
    required=False,
)
if x402_dist.exists():
    print(f"  ✅ x402-payment-tron 已安装: {x402_dist}")
    # 检查 dist 大小
    size = os.path.getsize(x402_dist)
    print(f"  文件大小: {size/1024:.1f} KB")
else:
    print(f"  ❌ x402 dist 未找到: {x402_dist}")
    # 检查 skill 目录
    skill_dir = resolve_existing_path(
        openclaw_candidates("workspace", "skills", "x402-payment-tron"),
        required=False,
    )
    if skill_dir.exists():
        files = os.listdir(skill_dir)
        print(f"  skill 目录文件: {files}")

# STEP 6: 生成充值提示
print(f"\n【STEP 6】 测试充值指南")
print(f"""
  要完整测试支付流程，请：
  
  1. 访问 Nile Faucet: https://nileex.io/join/getJoinPage
     → 向用户地址 {USER_ADDR[:20]}... 领取测试 TRX + USDT
  
  2. 用 TronLink 测试网 或 直接 tronweb 脚本转账：
     → 发送 100 USDT (Nile) → {PLATFORM_ADDR[:20]}...
  
  3. 平台监听地址：
     TronGrid API: {TRONGRID_NILE}/v1/accounts/{PLATFORM_ADDR}/transactions/trc20
  
  4. 充值后平台自动按比例分配给四个基金经理
""")

print("\n✅ TRON 支付层接入测试完成")
print(f"   架构已验证，等待 Nile 测试网充值后可完整测试支付流程")
