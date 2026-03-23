下面是我帮你重构后的 **README v2**。
这一版把项目从“AI 基金经理展示平台”彻底改成了：

**一个由多个 AI 基金经理组成、可被付费调用、可链上结算、可积累信誉的 Web3 研究与投资服务市场。**

我也把你要求的几个重点整合进去了：

* 产品重心改成 **付费调用服务**
* 叙事更贴近 **Agent Payment / Agent Economy**
* 技术栈更偏向 **TRON 生态**
* 明确接入 **x402 / 8004 / MCP Server / Skills**
* 把 **ClawHub Multi Search Engine** 作为研究能力层的一部分写进去

你可以直接把下面内容作为仓库根目录 `README.md` 使用。

---

# Conviction Atlas

> **A Payable AI Fund Manager Marketplace for Web3**
> 一个由多个 AI 基金经理组成的、可被付费调用的 Web3 研究与投资服务市场。

---

## Overview

Conviction Atlas 不是一个单纯展示 AI 经理观点的仪表盘。
它的目标是把 AI 基金经理变成真正的链上服务主体：

* 可以被发现
* 可以被付费调用
* 可以交付研究与信号
* 可以持续订阅
* 可以结算收入
* 可以沉淀链上信誉

在这个系统里，用户不是只“看经理”。
用户是来向 AI 基金经理 **购买服务** 的。

核心用户路径是：

**Browse managers → Buy a manager’s service → Get research / portfolio / signals → Subscribe / follow → Reputation accumulates**

这意味着 Conviction Atlas 的重点不再是“谁说得更好”，而是：

**哪个 AI 基金经理真正提供了可收费、可验证、可持续的服务。**

---

## What This Project Is

Conviction Atlas 是一个面向 Web3 市场的 **AI 基金经理服务市场**。

这里的 “market” 有两层含义：

### 1. Web3 投资机会市场

基金经理可以覆盖的对象包括：

* Tokens
* Prediction markets
* Narratives
* Event-driven opportunities
* Ecosystem-level catalysts
* TRON ecosystem opportunities
* 可扩展到更多链上 / 链下 Web3 信号市场

### 2. AI 基金经理服务市场

平台上的每位 AI 基金经理，都是一个可运营、可收费、可比较、可积累信誉的服务主体，而不只是一个页面角色。

每位经理都应具备：

* 明确的投资风格
* 明确的信息源偏好
* 明确的信号栈
* 明确的风险偏好
* 明确的定价方式
* 明确的交付类型
* 明确的订阅能力
* 可回看的历史服务记录
* 可追踪的链上支付记录
* 可验证的身份与信誉

---

## What This Project Is Not

为了避免误解，Conviction Atlas **不是**：

### Not a simple research dashboard

它不是单纯聚合新闻、价格和信号的资讯平台。

### Not a manager showcase website

它不是只让用户浏览 AI 经理主页、看业绩、看组合的展示系统。

### Not a one-shot chatbot

它不是“问一句、答一句”的普通聊天 Agent。

### Not just a backtesting tool

它不是纯量化回测网站。

### Not an agent builder platform

它的重点不是让用户从零自定义 Agent，而是先提供一批已经成型、可交易、可服务、可收费的 AI 基金经理。

### Not a full auto-trading platform in phase one

第一阶段重点是：

* 服务定义
* 支付
* 交付
* 信誉
* 数据
* 研究
* 信号
* API

而不是先做实盘自动交易。

---

## Core Thesis

Conviction Atlas 的核心命题是：

## AI 基金经理不应该只是“会分析”的页面对象，而应该成为“会收费、会交付、会结算、会积累信誉”的链上经济主体。

传统版本的项目更像：

* AI 投研平台
* AI 基金经理展示平台
* Web3 决策支持系统

但这还不够 Agent-native。

更强的方向应该是：

## 一个由多个 AI 基金经理组成的、可被付费调用的 Web3 研究与投资服务市场。

这里的重点从：

**“用户来比较基金经理”**

变成：

**“用户来向基金经理购买服务”**

---

## Why This Is Strongly Aligned with Agent Payment

这个项目天然适合 Agent Payment，因为支付不是附加功能，而是产品成立的前提。

如果没有支付层，这个平台很容易退化成：

* 一个信息聚合网站
* 一个研究展示工具
* 一个多 Agent 观点对比页

但一旦引入原生支付和结算机制，基金经理就变成：

* 有定价的服务提供者
* 有购买记录的收入主体
* 有复购率的服务节点
* 有链上身份的 Agent
* 有长期信誉沉淀的市场参与者

这会让产品从“有 Agent 的平台”升级为“Agent 自己参与经济活动的市场”。

---

## Service Model

Conviction Atlas 中的 AI 基金经理，优先提供以下 4 类服务：

### 1. Paid Deep Memo Unlock

用户可免费查看摘要，支付后解锁完整研究 memo。

示例：

* 免费看摘要
* 支付 1–2 USDT 解锁完整报告
* 支付记录记在该经理名下
* 形成经理收入与服务履约记录

这是最自然的 Agent payment 场景之一，因为它是：

**Agent 提供内容服务 → Agent 收费 → Agent 完成交付**

### 2. Paid Signal Subscription

用户订阅某位经理的持续性服务，例如：

* Daily brief
* Weekly report
* Premium watchlist
* Sector alerts
* Rebalance explanations
* TRON ecosystem tracker

这会让经理从“一次性页面角色”变成：

**长期可被订阅的服务主体**

### 3. Paid Custom Research Request

用户可以向某位经理提交定制化请求，例如：

* 帮我看这个币
* 帮我分析这个 Polymarket 事件
* 帮我做一个 TRON 生态专题判断
* 帮我比较某赛道内的多个机会

然后由经理：

* 报价
* 收款
* 生成研究
* 交付结果
* 记录履约历史

这非常符合 Hackathon 和 Agent Economy 叙事，因为它更像：

**Agent 接单 → 收费 → 交付 → 沉淀信誉**

### 4. Paid Multi-Manager Compare Report

这是平台最有差异化的服务之一。

用户输入一个机会后，平台可调度多个经理同时给出观点：

* 免费看简版分歧摘要
* 支付后解锁完整 compare memo
* 查看完整理由、仓位建议、分歧来源与风险判断

这非常适合按次付费的链上支付模式，也非常贴近 x402 的 “pay-before-response” 场景。x402 将 HTTP `402 Payment Required` 转化为可编程、无账户式的支付层，支持 API、数字内容和 AI agent 服务的机器对机器支付。([GitHub][1])

---

## Why TRON-First

Conviction Atlas 第一阶段将优先采用 **TRON-first** 的基础设施路径。

原因很简单：

* 目标场景天然需要 **低成本微支付**
* 服务调用天然适合 **按次付费**
* AI Agent 需要 **链上身份与信誉**
* 后续研究型 Agent 需要 **链上数据访问和执行能力**

而 BANK OF AI 的基础设施正好覆盖了这些核心能力，包括：

* **x402 Payment Protocol**
* **8004 On-chain Identity**
* **MCP Server**
* **Skills Modules**

BANK OF AI 官方资料显示，它提供面向 AI agents 的链上支付、身份和 DeFi 能力，并已支持 TRON 与 BNB Chain；其站点还列出 TRON-MCP、SunSwap、JustLend 和 TronScan 等面向 Agent 的 MCP 服务。([BANK OF AI][2])

---

## Core Infrastructure

### 1. x402 Payment Protocol

x402 是一种基于 HTTP `402 Payment Required` 的开放支付标准，可让服务端在返回内容或 API 响应前要求付款，适合按次收费、paywall、内容解锁和 AI Agent 服务调用。官方文档明确将其定位为无需传统账户体系的 “pay-before-response” 机制，并已支持 TRON 与 BSC。([docs.bankofai.io][3])

Conviction Atlas 将用它来承载：

* 单篇 memo 解锁
* 按次请求研究
* 多经理 compare report 解锁
* 付费 API 响应
* 高级信号流访问

也就是说，平台中的“收费动作”不是外挂式支付页，而是服务调用协议本身的一部分。

### 2. 8004 On-chain Identity

8004 / ERC-8004 的目标是为 AI Agent 提供可验证的链上身份、可移植标识和信誉基础，让 Agent 能在开放环境中被发现、被信任并开展经济活动。标准与相关介绍都强调 portable identity、verifiable reputation 与 agent-to-agent commerce。([ERC-8004][4])

Conviction Atlas 将用它来给每位 AI 基金经理建立：

* 链上身份
* 服务履约记录
* 购买历史关联
* 信誉与信任分数
* 长期可验证的市场声誉

### 3. MCP Server

MCP Server 是 AI Agent 与区块链系统之间的标准交互层。BANK OF AI 官方页面与 TRON MCP 仓库均表明，这类服务可让 Agent 读取链上数据、查询余额、处理 TRX/TRC20、调用合约并管理账户。([BANK OF AI][2])

Conviction Atlas 将把 MCP 用于：

* 查询 TRON 链上数据
* 查询资产与余额
* 读取市场与协议信息
* 后续扩展到结算、资产管理与 DeFi 连接

### 4. Skills Modules

BANK OF AI 的 Skills 仓库定位为可复用的区块链工作流能力集合，覆盖 DeFi、支付、数据与身份管理；其中还包含 `x402-payment`、`x402-payment-demo`、SunSwap 等技能。([GitHub][5])

Conviction Atlas 会把 Skills 作为经理能力层的一部分，用于：

* payment / balance check
* paid endpoint invocation
* TRON DeFi interaction
* watchlist enrichment
* structured service delivery

---

## External Research Skill Layer

为了让基金经理不仅能“链上交互”，也能“跨源研究”，Conviction Atlas 将加入外部 research skill 层。

优先集成：

### ClawHub Multi Search Engine

ClawHub 上的 **Multi Search Engine** 提供 17 个搜索引擎整合（8 个中文、9 个全球），支持高级搜索操作符、时间过滤、站点搜索、隐私搜索和 WolframAlpha 查询，而且无需 API key。([ClawHub][6])

这对基金经理尤其重要，因为它可以增强：

* 新闻检索
* 叙事追踪
* 事件验证
* 多源研究
* 主题级比较分析
* TRON 生态项目情报整合

在 Conviction Atlas 中，它不是普通“搜索框”，而是 AI 基金经理的研究外脑。

---

## Product Reframing

旧版本更像：

* 多经理观点展示平台
* AI 投研 dashboard
* Web3 决策支持系统

新版本应重构为：

## A marketplace of payable AI fund managers for Web3 research and investment services.

其核心不再是：

* 看经理
* 看业绩
* 看持仓

而是：

* 买经理的服务
* 订阅经理的信号
* 付费请求研究
* 购买经理之间的分歧报告
* 在链上记录支付与履约
* 在链上沉淀经理信誉

---

## Product Architecture

系统整体架构应围绕以下链路：

## Discovery → Pricing → Payment → Fulfillment → Delivery → Reputation

与传统投研平台相比，Conviction Atlas 的重心会从 “data pipeline only” 扩展为 “service economy pipeline”。

### 1. Discovery Layer

用户发现和筛选 AI 基金经理：

* Browse managers
* Filter by style / sector / chain focus
* View sample outputs
* View pricing
* View public reputation

### 2. Pricing Layer

定义服务与价格：

* single memo unlock
* compare memo unlock
* subscription tier
* custom research request
* premium signal feed
* TRON ecosystem report

### 3. Payment Layer

使用 x402 处理：

* pay-per-request
* paywall unlock
* subscription entry
* service purchase
* machine-to-machine payment flow

### 4. Fulfillment Layer

经理完成服务：

* generate memo
* produce compare report
* generate watchlist
* emit signals
* answer custom research request

### 5. Delivery Layer

向用户交付：

* full memo
* structured report
* manager-specific signal feed
* downloadable research artifact
* API response payload

### 6. Reputation Layer

使用 8004 / on-chain identity 沉淀：

* service history
* payment history
* fulfillment history
* review history
* reputation score
* trust score

---

## Core Objects

### Manager

AI 基金经理，是平台上的核心服务主体。

字段建议：

* name
* slug
* style
* risk appetite
* research focus
* chain focus
* signal stack
* pricing profile
* delivery profile
* identity profile
* reputation profile

### Service

经理提供的可收费服务。

服务类型建议：

* memo_unlock
* signal_subscription
* custom_research
* compare_report
* watchlist_access
* portfolio_explanation

### Opportunity

可被研究、定价、比较的对象：

* token
* prediction market
* narrative
* event-driven opportunity
* TRON ecosystem catalyst

### Order

一次用户购买行为。

包括：

* buyer
* manager
* service type
* amount
* payment status
* fulfillment status
* delivery reference
* settlement record

### Memo

研究交付内容。

在新架构中，memo 不只是内容页，而是：

**付费交付物**

### Identity

经理的链上身份对象。

### Reputation

经理的信誉与信任沉淀对象。

包括：

* completed orders
* paid unlock count
* active subscribers
* repurchase rate
* reviews
* trust score

---

## Manager Types for Phase One

第一阶段建议至少做 4 位经理，但要把他们定义为 **服务型经理**，而不是纯展示型经理。

### 1. Narrative Manager

偏好：

* 热点扩散
* 社区关注度
* 叙事轮动
* 板块热度

适合提供：

* narrative memo
* sector watchlist
* trend digest

### 2. Event-driven Manager

偏好：

* 新闻
* 公告
* 时间节点
* 催化剂

适合提供：

* event brief
* catalyst report
* risk alert

### 3. Quant Manager

偏好：

* 动量
* 波动率
* 成交量
* 价格结构

适合提供：

* quant memo
* ranking signal feed
* rebalance explanation

### 4. TRON Ecosystem Manager

这是重构后最应该新增的经理。

偏好：

* TRON ecosystem narratives
* TRX / TRC20 market changes
* SunSwap / JustLend / TronScan context
* TRON-native catalysts
* protocol-level ecosystem opportunities

适合提供：

* TRON weekly
* TRON ecosystem watchlist
* protocol compare memo
* TRON opportunity scan

---

## Phase One Priorities

### P0 — Must Have

第一阶段必须完成的是：

* manager registry
* service registry
* pricing schema
* order schema
* x402 paywall flow scaffold
* 8004 identity binding scaffold
* delivery pipeline
* memo generation pipeline
* compare report generation
* manager profile APIs
* service purchase APIs
* mock settlement flow
* mock reputation accumulation

### P1 — Should Have

* subscription model
* reviews
* public manager reputation page
* multi-manager compare flow
* TRON ecosystem manager
* external research skill integration
* order history UI

### P2 — Later

* real on-chain settlement depth
* more DeFi execution capability
* custom quoting engine
* automatic treasury management
* real A2A commerce flows
* cross-chain expansion

---

## Minimal User Flows

### Flow 1 — Unlock a Memo

1. User opens a manager memo
2. Reads free summary
3. Clicks unlock
4. x402 payment flow executes
5. Memo is delivered
6. Purchase is recorded under the manager
7. Reputation updates

### Flow 2 — Subscribe to a Manager

1. User browses managers
2. Picks a premium signal stream
3. Pays for subscription
4. Starts receiving periodic outputs
5. Subscription history strengthens manager credibility

### Flow 3 — Custom Research Request

1. User submits a research question
2. Manager quotes or uses fixed price
3. User pays
4. Manager generates report
5. Delivery is recorded
6. Manager reputation grows

### Flow 4 — Multi-Manager Compare

1. User inputs an opportunity
2. Multiple managers analyze it
3. Free divergence summary is shown
4. User pays to unlock full compare report
5. Full output is delivered
6. Revenue and usage accrue to participating managers

---

## API Direction

第一阶段 API 应该从“展示型接口”转向“服务市场型接口”。

### Managers

* `GET /api/managers`
* `GET /api/managers/:slug`
* `GET /api/managers/:slug/services`
* `GET /api/managers/:slug/reputation`
* `GET /api/managers/:slug/reviews`

### Services

* `GET /api/services`
* `GET /api/services/:id`
* `POST /api/services/:id/buy`
* `POST /api/services/:id/quote`

### Orders

* `GET /api/orders/:id`
* `POST /api/orders/:id/pay`
* `POST /api/orders/:id/settle`
* `GET /api/orders/:id/delivery`

### Memos

* `GET /api/memos/:id/preview`
* `POST /api/memos/:id/unlock`
* `GET /api/memos/:id/full`

### Compare

* `POST /api/compare/create`
* `GET /api/compare/:id/preview`
* `POST /api/compare/:id/unlock`
* `GET /api/compare/:id/full`

### Subscriptions

* `POST /api/subscriptions/create`
* `GET /api/subscriptions/:id`
* `GET /api/users/:id/subscriptions`

### Identity / Reputation

* `GET /api/managers/:slug/identity`
* `GET /api/managers/:slug/reputation`
* `POST /internal/reputation/recompute`

---

## Frontend Scope

前端第一阶段不应该做成“漂亮的资讯门户”，而应该做成“能完成购买与交付验证的最小服务市场”。

最小页面集合建议：

* `/`
* `/managers`
* `/managers/[slug]`
* `/services`
* `/services/[id]`
* `/compare`
* `/orders/[id]`
* `/reputation`
* `/tron`

其中 `/tron` 可以作为 TRON 生态专题入口页，用来强化你的比赛叙事。

---

## Why This Is More Hackathon-Competitive

这个版本比旧版本更适合比赛，因为评委更容易看到：

### 1. Agent is the seller

不是平台卖会员，而是经理在卖服务。

### 2. Payment is native

不是“先注册、后买年费”，而是按次付费、按服务付费、按结果付费。

### 3. Delivery is explicit

用户付钱之后得到明确交付物，而不是只得到一个页面浏览权限。

### 4. Reputation compounds

经理的收入、履约、评价和复购，会成为长期链上信誉的一部分。

### 5. TRON ecosystem is not decoration

TRON 不只是部署链，而是支付、身份、MCP、技能和生态研究的主舞台。

---

## Phase One Build Principle

### Principle 1

先把 **服务购买 → 支付 → 交付 → 信誉沉淀** 跑通。

### Principle 2

先做 **Agent service marketplace**，不要退化成普通资讯平台。

### Principle 3

x402 必须进入核心服务流，而不是放在“以后接支付”的 TODO 里。

### Principle 4

8004 / identity 必须成为经理对象的一部分，而不是独立装饰模块。

### Principle 5

TRON-first，不只是“支持 TRON”，而是优先围绕 TRON 生态设计服务。

### Principle 6

所有能力都必须支持 mock mode，确保没有完整 key / wallet 条件下也能本地演示。

---

## Tech Positioning

Conviction Atlas sits at the intersection of:

* AI fund managers
* Agent commerce
* On-chain payment
* On-chain identity
* Web3 research workflows
* TRON-native agent infrastructure

它不是：

**“一个带 Agent 的产品”**

而是：

## “一个让 Agent 作为经济主体去收费、交付、结算并积累信誉的市场系统。”

---

## Current North Star

Conviction Atlas 的第一阶段北极星不是：

* 最多数据源
* 最复杂前端
* 最强量化收益
* 最全自动交易

而是：

## 让用户真的能向 AI 基金经理付费购买服务，并让这笔服务在链上形成身份、支付、交付与信誉闭环。

---

## Infrastructure References

* x402 将 HTTP `402 Payment Required` 用作可编程区块链支付层，适用于 API、数字内容与 AI agents，并已支持 TRON。([GitHub][1])
* BANK OF AI 官方将其定位为面向 AI agents 的链上支付、身份与 DeFi 基础设施，并列出 MCP Server 与 Skills 体系。([BANK OF AI][2])
* ERC-8004 / 8004 面向 AI agent 身份、发现、验证与信誉，强调 portable identity 与 trustless agent commerce。([ERC-8004][4])
* BANK OF AI Skills 仓库已提供面向支付、DeFi、数据分析的可复用技能，包括 x402 与 SunSwap 相关能力。([GitHub][5])
* ClawHub 的 Multi Search Engine 可为经理提供多源研究能力，支持 17 个搜索引擎与高级搜索操作。([ClawHub][6])

---

如果你愿意，我下一步可以直接继续帮你做两件事里的一个：

1. 把这版 README 再压缩成更像 Hackathon 提交页的版本
2. 基于这版 README，继续给你写一版 **系统架构 / repo 目录结构 / MVP 开发计划**

[1]: https://github.com/bankofai/x402-tron?utm_source=chatgpt.com "GitHub - bankofai/x402-tron: x402 payments protocol for Tron"
[2]: https://www.bankofai.io/?utm_source=chatgpt.com "BANK OF AI | On-chain payments, identities, and DeFi for AI agents"
[3]: https://docs.bankofai.io/zh-Hans/?utm_source=chatgpt.com "欢迎使用 x402 | BANK OF AI | Developer Guide"
[4]: https://www.geterc8004.com/?utm_source=chatgpt.com "ERC-8004 — The Ethereum Standard for AI Agent Identity"
[5]: https://github.com/BofAI/skills?utm_source=chatgpt.com "GitHub - BofAI/skills"
[6]: https://clawhub.ai/gpyAngyoujun/multi-search-engine?utm_source=chatgpt.com "Multi Search Engine — ClawHub"
