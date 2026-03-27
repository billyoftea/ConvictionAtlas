# ConvictionAtlas — Agent Architecture & Pipeline Guide

ConvictionAtlas 是一个自主运行的 Web3 基金管理系统，由 **6 个独立 Agent（Manager）** 组成，每个 Agent 拥有不同的投资哲学、信号权重和持仓偏好。系统通过一条完整的数据流水线（Pipeline）自动完成从数据采集到 AI 生成投研备忘录的全流程。

---

## 六个 Agent 简介

| # | Slug | 名称 | 核心哲学 | 最大持仓数 |
|---|------|------|----------|------------|
| 1 | `narrative-manager` | Narrative Manager | 叙事驱动，追踪市场热点故事 | 5 |
| 2 | `event-driven-manager` | Event-driven Manager | 事件驱动，押注催化剂前后的价格错配 | 6 |
| 3 | `quant-manager` | Quant Manager | 纯量化，依赖价格动量与技术信号 | 6 |
| 4 | `hybrid-manager` | Hybrid Manager | 混合策略，均衡分配各类信号权重 | 6 |
| 5 | `onchain-fundamentals-manager` | On-chain Fundamentals | 链上基本面，只信 TVL / 协议收入 / 鲸鱼行为 | 5 |
| 6 | `polymarket-specialist-manager` | Polymarket Specialist | 预测市场专家，专攻 Polymarket 定价偏差 | 8 |

---

## 一次完整任务的全流程

运行入口：`npm run pipeline`（调用 `scripts/run-pipeline.ts`）

整个流程分为 **8 个串行步骤**，每步调用一个内部 API：

```
POST /api/internal/ingest/coingecko
POST /api/internal/ingest/polymarket
POST /api/internal/normalize/opportunities
POST /api/internal/ingest/news
POST /api/internal/signals/recompute
POST /api/internal/managers/run
POST /api/internal/portfolio/rebalance
POST /api/internal/performance/snapshot
POST /api/internal/memos/generate         ← 可通过 SKIP_MEMOS=1 跳过
```

---

### Step 1 — 采集代币行情数据（CoinGecko）

**服务**：`SourceIngestionService`

从 CoinGecko API 拉取当前热门代币的市场数据，包括：
- 价格、24h 涨跌幅、成交量、市值
- 历史价格序列（用于后续动量计算）
- 流动性数据

写入数据库：`Opportunity` 表（type = `TOKEN`）

---

### Step 2 — 采集预测市场数据（Polymarket）

**服务**：`SourceIngestionService`

从 Polymarket API 拉取活跃的预测市场，包括：
- 市场标题、当前 YES/NO 概率
- 交易量、流动性、事件截止日期
- 市场元数据（类别、标签）

写入数据库：`Opportunity` 表（type = `PREDICTION_MARKET`）

---

### Step 3 — 标准化机会数据

**服务**：`NormalizeService`

对 Step 1 和 Step 2 采集的原始数据做清洗和标准化：
- 统一数值量纲（价格、成交量归一化）
- 计算衍生指标（价格偏离度、成交量 Z-score）
- 过滤低质量/低流动性标的
- 为每个 Opportunity 打上基础标签

---

### Step 4 — 采集新闻情绪数据

**服务**：`SourceIngestionService`

对每个 Opportunity 抓取相关新闻，来源包括 CryptoPanic、GNews、NewsAPI：
- 情绪评分（正面/负面/中性）
- 新闻热度（最近 24h 报道数量）
- 关键事件检测（监管、上所、协议升级等）

写入数据库：`NewsItem` 表，关联到对应的 Opportunity

---

### Step 5 — 信号引擎重算（Signal Engine）

**服务**：`SignalEngineService`

这是整个系统的核心计算层。基于前四步采集的数据，为每个 Opportunity 计算 **10+ 维度的量化信号**，每个信号值在 [-1, 1] 区间内：

| 信号名 | 含义 |
|--------|------|
| `market_momentum` | 价格动量强度 |
| `trend_regime` | 当前趋势状态（上涨/下跌/震荡） |
| `volume_spike` | 成交量异常放大程度 |
| `price_dislocation` | 价格偏离基本面程度 |
| `narrative_strength` | 叙事热度与扩散强度 |
| `news_heat` | 新闻覆盖密度 |
| `event_proximity` | 距下一个催化事件的时间权重 |
| `catalyst_setup` | 催化剂触发条件完备度 |
| `probability_edge` | 预测市场定价与公允价值的偏差 |
| `opportunity_quality` | 综合质量评分 |
| `risk_flag` | 风险信号（流动性枯竭、TVL 流失等） |

写入数据库：`Signal` 表，关联到对应的 Opportunity

---

### Step 6 — 六个 Agent 独立决策

**服务**：`ManagerEngineService`

这是六个 Agent 同时工作的环节。每个 Agent 读取所有 Opportunity 及其信号，按照自己的 **信号权重配置** 计算 `convictionScore`：

```
convictionScore = Σ(signalValue × weight) + opportunityTypeBias
```

然后与阈值比较，得出方向：
- `convictionScore > bullishThreshold` → **BULLISH**（做多）
- `convictionScore < bearishThreshold` → **BEARISH**（做空/回避）
- 其余 → **NEUTRAL**（观望）

**六个 Agent 的权重差异决定了它们截然不同的行为：**

- **Narrative Manager**：最看重 `narrative_strength`（0.24）和 `opportunity_quality`（0.20），忽视链上数据
- **Event-driven Manager**：最看重 `catalyst_setup`（0.26）和 `event_proximity`（0.18），对预测市场有 +0.06 偏好
- **Quant Manager**：最看重 `market_momentum`（0.24）和 `trend_regime`（0.20），完全忽略新闻
- **Hybrid Manager**：各信号权重均衡，无明显偏科
- **On-chain Fundamentals**：最看重 `opportunity_quality`（0.28，代表 TVL/收入质量）和 `volume_spike`（0.22，代表链上实际成交），对叙事权重极低（0.04），现金底仓最高（30%）
- **Polymarket Specialist**：最看重 `probability_edge`（0.30）和 `event_proximity`（0.22），对代币类机会强烈回避（-0.20），只做预测市场，最多持有 8 个仓位

每个 Agent 的决策（方向 + 信念分数 + 目标仓位权重 + 决策理由）写入 `ManagerDecision` 表。

---

### Step 7 — 组合再平衡（Portfolio Rebalance）

**服务**：`PortfolioService`

基于 Step 6 的决策，每个 Agent 独立执行组合调整：

1. **过滤**：只保留 BULLISH 的标的，NEUTRAL/BEARISH 全部清仓
2. **限仓**：超过 `maxPositions` 时，按 `convictionScore` 从高到低截取
3. **现金底仓**：确保现金仓位不低于 `cashFloor`（各 Agent 设定不同）
4. **权重归一化**：将剩余仓位权重归一化到 `1 - cashFloor`
5. **差异计算**：与上期持仓对比，生成 `BUY / SELL / HOLD` 操作列表

写入数据库：`Holding` 表（当前持仓）+ `Trade` 表（本次操作记录）

---

### Step 8 — 净值快照（Performance Snapshot）

**服务**：`PerformanceService`

对每个 Agent 记录当前时刻的净值（NAV）：
- 按持仓权重 × 各标的最新价格加权计算
- 记录累计收益率、当日涨跌幅
- 写入 `NavPoint` 表，供折线图展示历史走势

---

### Step 9 — AI 投研备忘录生成（可选）

**服务**：`MemoService` + `LlmService`

对每个 Agent 调用 LLM（GPT-4 / DeepSeek），生成一份本次决策的**投研备忘录（Investment Memo）**，包含：
- 本期投资论文（Thesis）
- 主要持仓的做多逻辑
- 风险提示
- 与上期持仓的变化说明

备忘录以 Markdown 格式写入 `Memo` 表，在前端 Manager 详情页展示。

跳过方式：`SKIP_MEMOS=1 npm run pipeline` 或 `npm run pipeline:fast`

---

## 数据流总览

```
CoinGecko API ──┐
                ├──▶ Opportunities ──▶ Signals ──▶ Manager Decisions ──▶ Holdings / Trades
Polymarket API ─┘                                                    ↓
                                                            NAV Snapshot
News APIs ──────────────────────────────────────────▶ NewsItems ─────▶ AI Memo
```

---

## 关键数据模型

| 表名 | 说明 |
|------|------|
| `Opportunity` | 每个可投资标的（代币或预测市场） |
| `Signal` | 每个标的的量化信号向量 |
| `NewsItem` | 关联新闻，含情绪评分 |
| `Manager` | 六个 Agent 的基础信息 |
| `ManagerDecision` | 每个 Agent 对每个标的的决策记录 |
| `Holding` | 当前持仓快照 |
| `Trade` | 历史交易记录 |
| `NavPoint` | 净值历史序列 |
| `Memo` | AI 生成的投研备忘录 |

---

## 快速启动

```bash
# 安装依赖
npm install

# 初始化数据库
npm run db:push

# 启动 API + 前端
npm run dev

# 另开终端，跑一次完整 pipeline
npm run pipeline

# 跳过 AI 备忘录（更快）
npm run pipeline:fast
```

Pipeline 建议每天定时运行一次，可用 cron 或任务调度器配置。
