# 🌐 Conviction Atlas

> **AI Fund Managers as Autonomous Economic Agents on TRON**  
> 6 个 AI 基金经理 × TRON 链上支付 × 实时投研决策 × 可购买份额的 Agent 经济体

[![Live Demo](https://img.shields.io/badge/Live_Demo-47.76.120.0-blue?style=for-the-badge)](http://47.76.120.0)
[![API Docs](https://img.shields.io/badge/API_Docs-Swagger-green?style=for-the-badge)](http://47.76.120.0/docs)
[![TRON Network](https://img.shields.io/badge/TRON-Nile_Testnet-red?style=for-the-badge)](https://nile.tronscan.org)

---

## 📌 项目简介

**Conviction Atlas** 是一个由 **6 个自主运行的 AI 基金经理** 组成的 Web3 投资服务市场。每个 AI 基金经理拥有独立的投资哲学、信号偏好和持仓策略，用户可以通过 **TRON 网络 USDT** 直接购买基金经理的份额，体验 AI Agent 作为链上经济主体的完整闭环。

### 🎯 核心理念

> **同一个 Web3 机会，不同的 AI 基金经理，应该给出不同的判断、不同的仓位和不同的解释。**

这不是一个简单的信息聚合平台——每个 AI 基金经理都是**可付费、可比较、可追踪、可验证**的独立投资主体。用户不是来找唯一答案的，而是来比较哪位经理最值得信任和投资。

### 💡 解决了什么问题

1. **AI Agent 经济化**：让 AI 不只是"生成内容的工具"，而是能收费、有业绩、可追踪的经济主体
2. **投资决策透明化**：每个决策背后有量化信号、conviction score、持仓调整记录
3. **多视角分歧呈现**：同一标的，6 个经理给出完全不同的看法，让用户自行判断
4. **链上支付闭环**：通过 TRON USDT 直接购买份额，AI Agent 作为服务提供者完成价值交换

---

## 🏗️ 技术架构

```
┌──────────────────────────────────────────────────────────────────────┐
│                        Conviction Atlas Architecture                │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────┐  ┌────────────┐  ┌──────────┐                         │
│  │CoinGecko│  │ Polymarket │  │ News APIs│    Data Sources          │
│  └────┬────┘  └─────┬──────┘  └────┬─────┘                         │
│       │             │              │                                 │
│       ▼             ▼              ▼                                 │
│  ┌─────────────────────────────────────┐                            │
│  │   Opportunity Normalization Layer   │    Standardize + Filter    │
│  └──────────────────┬──────────────────┘                            │
│                     ▼                                                │
│  ┌─────────────────────────────────────┐                            │
│  │      Signal Engine (10+ dims)       │    Quantitative Scoring   │
│  │  momentum · volume · narrative ·    │                            │
│  │  catalyst · probability_edge · ...  │                            │
│  └──────────────────┬──────────────────┘                            │
│                     ▼                                                │
│  ┌─────────────────────────────────────┐                            │
│  │     6 AI Manager Decision Layer     │    Independent Decisions   │
│  │  ┌──────┐ ┌──────┐ ┌──────┐       │                            │
│  │  │Narr. │ │Event │ │Quant │       │                            │
│  │  └──────┘ └──────┘ └──────┘       │                            │
│  │  ┌──────┐ ┌──────┐ ┌──────┐       │                            │
│  │  │Hybrid│ │OnChn │ │PolyM │       │                            │
│  │  └──────┘ └──────┘ └──────┘       │                            │
│  └──────────────────┬──────────────────┘                            │
│                     ▼                                                │
│  ┌──────────────────────────────────────┐                           │
│  │  Portfolio Rebalance + NAV Snapshot  │    Books + Performance    │
│  └──────────────────┬───────────────────┘                           │
│                     ▼                                                │
│  ┌──────────────────────────────────────┐                           │
│  │  DeepSeek AI Memo Generation (LLM)  │    Research Delivery      │
│  └──────────────────┬───────────────────┘                           │
│                     ▼                                                │
│  ┌──────────────────────────────────────┐                           │
│  │    NestJS REST API + Swagger Docs   │    Service Layer          │
│  └──────────────────┬───────────────────┘                           │
│                     ▼                                                │
│  ┌──────────────┐  ┌───────────────────┐                           │
│  │ Next.js SSG  │  │ TRON Nile USDT    │   Frontend + Payment     │
│  │  Dark-Glass  │  │ Share Purchase    │                           │
│  │    UI        │  │ Verification     │                           │
│  └──────────────┘  └───────────────────┘                           │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### 技术栈

| 层级 | 技术 | 说明 |
|------|------|------|
| **后端框架** | NestJS + TypeScript | 模块化 API 服务 |
| **数据库** | SQLite + Prisma ORM | 轻量级，零配置部署 |
| **前端框架** | Next.js 15 (Static Export) | Dark-glass 风格 UI |
| **3D 场景** | React Three Fiber + Three.js | 首页 3D 可视化 |
| **AI 引擎** | DeepSeek Chat API | 投研备忘录生成 |
| **支付网络** | TRON Nile Testnet | USDT TRC-20 份额购买 |
| **构建工具** | Nx Monorepo | API + Web 统一管理 |
| **部署** | Nginx + systemd | 生产级部署配置 |

---

## 🤖 六个 AI 基金经理

每个经理都是一个**独立的 conviction engine**，拥有不同的信号权重、风险偏好和持仓逻辑：

| 经理 | 风格 | 核心信号偏好 | 风险 | 最大持仓 |
|------|------|-------------|------|----------|
| 🎯 **Narrative Manager** | 叙事驱动 | narrative_strength (0.24), quality (0.20) | Aggressive | 5 |
| ⚡ **Event-driven Manager** | 事件驱动 | catalyst_setup (0.26), event_proximity (0.18) | Moderate | 6 |
| 📊 **Quant Manager** | 纯量化 | market_momentum (0.24), trend_regime (0.20) | Moderate | 6 |
| 🔀 **Hybrid Manager** | 混合策略 | 均衡分配，无明显偏科 | Moderate | 6 |
| ⛓️ **On-chain Fundamentals** | 链上基本面 | quality (0.28), volume_spike (0.22) | Conservative | 5 |
| 🎲 **Polymarket Specialist** | 预测市场 | probability_edge (0.30), event_proximity (0.22) | Moderate | 8 |

### 决策公式

```
convictionScore = clamp(Σ(signalValue × weight) + opportunityTypeBias, -1, 1)

BULLISH  → convictionScore > bullishThreshold
BEARISH  → convictionScore < bearishThreshold
NEUTRAL  → otherwise
```

每个经理的 `opportunityTypeBias` 确保**专业化分工**：
- TOKEN 经理（前 5 个）对 Prediction Market 有负偏置（-0.08 ~ -0.25）
- Polymarket Specialist 对 TOKEN 有强负偏置（-0.20），只做预测市场

---

## 🔗 Bank of AI 基础设施集成

### 1. TRON 链上支付 — Agent 份额购买

**Conviction Atlas 的核心 payment 设计**：用户通过 TRON USDT 直接购买 AI 基金经理的份额。

```
用户选择经理 → 输入份额数量 → 获取 TRON 钱包地址
→ 发送 USDT (Nile Testnet) → 粘贴 txHash → 链上验证 → 份额到账
```

**实现细节**：
- **网络**：TRON Nile Testnet
- **代币**：USDT TRC-20（合约 `TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj`）
- **验证方式**：通过 TronGrid Nile API 实时验证交易哈希
- **定价**：1 share = 1 USDT，按经理独立计价
- **API 端点**：
  - `GET /api/managers/:slug/shares/payment-info` — 获取支付信息
  - `POST /api/managers/:slug/shares/purchase` — 提交 txHash 验证并领取份额

> 这不是传统 SaaS 订阅——每个 AI 基金经理作为独立的经济主体接受投资，实现了 **Agent 接单 → 收费 → 交付** 的完整闭环。

### 2. AI Agent 服务交付

每个经理购买份额后，持有者获得：
- ✅ 完整投研备忘录（AI 生成）
- ✅ 实时持仓和调仓信息
- ✅ 量化信号详情
- ✅ 业绩曲线和风险指标

### 3. Agent 信誉与比较

平台内置经理评分和排行系统：
- 用户可对经理打分和评论
- Leaderboard 按 NAV、Sharpe、收益率排名
- 业绩曲线可视化，支持跨经理对比

---

## 🔄 自动化 Pipeline（9 步）

每日自动运行完整数据流水线：

```bash
npm run pipeline  # 完整 pipeline（含 AI Memo）
```

| 步骤 | API 端点 | 说明 |
|------|----------|------|
| 1 | `POST /api/internal/ingest/coingecko` | 采集代币行情数据 |
| 2 | `POST /api/internal/ingest/polymarket` | 采集预测市场数据 |
| 3 | `POST /api/internal/normalize/opportunities` | 标准化机会数据 |
| 4 | `POST /api/internal/ingest/news` | 采集新闻情绪数据 |
| 5 | `POST /api/internal/signals/recompute` | 信号引擎重算（10+ 维度） |
| 6 | `POST /api/internal/managers/run` | 6 个 Agent 独立决策 |
| 7 | `POST /api/internal/portfolio/rebalance` | 组合再平衡 |
| 8 | `POST /api/internal/performance/snapshot` | 净值快照 |
| 9 | `POST /api/internal/memos/generate` | AI 投研备忘录（DeepSeek） |

---

## 🖥️ Demo 使用说明

### 在线访问

- **产品主页**：[http://47.76.120.0](http://47.76.120.0)
- **API 文档**：[http://47.76.120.0/docs](http://47.76.120.0/docs)（Swagger UI）
- **API 基础路径**：`http://47.76.120.0/api/`

### 核心页面

| 页面 | 路径 | 功能 |
|------|------|------|
| 首页 | `/` | 产品概览 + 3D 场景 + Pipeline 展示 |
| 经理列表 | `/managers` | 6 个 AI 经理卡片 + 业绩预览 |
| 经理详情 | `/managers/[slug]` | 业绩曲线 + 持仓 + Memo + 购买份额 |
| 机会列表 | `/opportunities` | 全市场标的 + 信号 + 多经理视角 |
| 机会详情 | `/opportunities/detail?slug=xxx` | 单标的深度信号 + 各经理看法 |
| 排行榜 | `/leaderboard` | 经理排名 + 标的排名 |

### 购买份额流程（Demo）

1. 打开任意经理详情页（如 `/managers/narrative-manager`）
2. 在「Buy Shares」区域输入想购买的份额数量
3. 点击「Buy via TRON USDT」获取收款钱包地址
4. 前往 [TRON Nile Faucet](https://nileex.io/join/getJoinPage) 获取测试币
5. 使用 TronLink 或其他钱包向指定地址发送对应数量的 USDT
6. 将交易哈希粘贴到验证框，点击「Verify & Claim Shares」
7. 系统通过 TronGrid API 实时验证链上交易，确认后份额到账

### 本地运行

```bash
# 克隆项目
git clone https://github.com/YourUsername/ConvictionAtlas.git
cd ConvictionAtlas

# 安装依赖
npm install

# 初始化数据库
npm run setup

# 配置环境变量
cp .env.example .env
# 编辑 .env，填入 DEEPSEEK_API_KEY

# 启动 API + 前端
npm run dev

# 另开终端，运行 pipeline
npm run pipeline
```

---

## 📡 API 接口一览

### 公开接口

```
GET  /api/managers                          # 所有经理列表
GET  /api/managers/:slug                    # 经理详情
GET  /api/managers/:slug/performance        # 业绩数据
GET  /api/managers/:slug/portfolio          # 当前持仓
GET  /api/managers/:slug/rebalances         # 调仓记录
GET  /api/managers/:slug/memos              # 投研备忘录
GET  /api/managers/:slug/reviews            # 用户评价
POST /api/managers/:slug/reviews            # 提交评价
GET  /api/managers/:slug/shares/payment-info # 份额支付信息
POST /api/managers/:slug/shares/purchase     # 份额购买验证

GET  /api/opportunities                     # 所有机会列表
GET  /api/opportunities/:slug               # 机会详情
GET  /api/opportunities/:slug/signals       # 信号详情
GET  /api/opportunities/:slug/news          # 相关新闻
GET  /api/opportunities/:slug/managers      # 各经理看法

GET  /api/leaderboard/managers              # 经理排行
GET  /api/leaderboard/opportunities         # 机会排行
```

### 内部 Pipeline 接口

```
POST /api/internal/ingest/coingecko         # 采集 CoinGecko 数据
POST /api/internal/ingest/polymarket        # 采集 Polymarket 数据
POST /api/internal/normalize/opportunities  # 标准化数据
POST /api/internal/ingest/news              # 采集新闻
POST /api/internal/signals/recompute        # 重算信号
POST /api/internal/managers/run             # 经理决策
POST /api/internal/portfolio/rebalance      # 组合再平衡
POST /api/internal/performance/snapshot     # 净值快照
POST /api/internal/memos/generate           # 生成 Memo
```

---

## 📊 当前 Demo 数据

| 经理 | NAV | 累计收益 | Sharpe | 命中率 |
|------|-----|---------|--------|--------|
| Narrative Manager | 103.45 | +3.45% | 0.03 | 100% |
| Event-driven Manager | 102.78 | +2.78% | 0.03 | 83% |
| Quant Manager | 105.36 | +5.36% | 0.05 | 100% |
| Hybrid Manager | 105.70 | +5.70% | 0.06 | 100% |
| On-chain Fundamentals | 100.90 | +0.90% | 0.01 | 60% |
| Polymarket Specialist | 100.04 | +0.04% | 0.00 | 50% |

覆盖 **18 个标的**：12 个 TOKEN（BTC, ETH, SOL, AVAX, LINK 等）+ 6 个 Prediction Market

---

## 🏛️ 项目结构

```
ConvictionAtlas/
├── api/                          # NestJS 后端
│   └── src/app/
│       ├── controllers/          # REST API 控制器
│       ├── services/             # 业务逻辑层
│       │   ├── source-ingestion.service.ts
│       │   ├── normalize.service.ts
│       │   ├── signal-engine.service.ts
│       │   ├── manager-engine.service.ts
│       │   ├── portfolio.service.ts
│       │   ├── performance.service.ts
│       │   ├── memo.service.ts
│       │   ├── llm.service.ts
│       │   ├── tron-payment.service.ts
│       │   └── query.service.ts
│       └── core/                 # 核心配置
│           ├── manager-blueprints.ts   # 6 个经理的信号权重蓝图
│           └── opportunity-universe.ts # 标的过滤规则
├── web/                          # Next.js 前端
│   └── src/
│       ├── app/                  # 页面路由
│       ├── components/           # UI 组件
│       │   ├── buy-shares-button.tsx  # TRON 份额购买
│       │   ├── sparkline.tsx          # 业绩曲线
│       │   ├── signal-bars.tsx        # 信号可视化
│       │   └── ...
│       └── lib/                  # 工具函数
├── prisma/
│   ├── schema.prisma             # 数据模型
│   └── seed.ts                   # 初始化种子数据
├── scripts/
│   ├── run-pipeline.ts           # Pipeline 入口
│   ├── seed-demo-data.ts         # Demo 数据生成
│   └── deploy-web-prod.sh        # 生产部署脚本
└── deploy/
    ├── nginx/                    # Nginx 配置
    └── systemd/                  # systemd 服务
```

---

## 🚀 部署架构

```
Client Browser
     │
     ▼
Nginx (443/80)
     │
     ├── /           → Static HTML/JS (Next.js export)
     ├── /api/       → Proxy → NestJS (port 3001)
     └── /docs       → Proxy → Swagger UI
```

- **前端**：Next.js 静态导出，由 Nginx 直接提供
- **后端**：NestJS 服务通过 systemd 管理，Nginx 反向代理
- **数据库**：SQLite 文件数据库，零配置
- **支付验证**：实时调用 TronGrid Nile API

---

## 🔮 未来规划

- [ ] 接入更多数据源（DeFiLlama, Dune Analytics, 社交媒体情绪）
- [ ] 支持 TRON 主网 USDT 真实交易
- [ ] 8004 链上身份系统集成（Agent 信誉上链）
- [ ] x402 Payment Protocol 接入（微支付解锁单篇 Memo）
- [ ] 用户自定义 Agent 参数
- [ ] 实盘交易执行层
- [ ] 多链扩展（ETH, Solana）

---

## 📜 License

MIT

---

<div align="center">
  <strong>Conviction Atlas</strong> — Where AI Agents become autonomous economic participants on TRON.
  <br/>
  Built for TRON × Bank of AI Hackathon 2026 🏆
</div>
