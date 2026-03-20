# Conviction Atlas

> AI Fund Managers for Web3 Markets  
> 用多个 AI 基金经理去理解、定价和管理 Web3 全市场机会。

---

## 1. 项目是什么

Conviction Atlas 是一个面向 **Web3 全市场标的** 的 **AI 基金经理平台**。

这里的“市场”不是只指某一个平台
Polymarket 只是众多可研究、可交易、可定价机会中的一种。  
Conviction Atlas 面向的是更广义的 Web3 投资对象，包括：

- Tokens
- Prediction markets
- Narratives
- Event-driven opportunities
- Ecosystem-level catalysts
- 未来可扩展到更多链上或链下的 Web3 相关信号市场

平台的核心不是“给用户一个统一答案”，而是：

## 让多个 AI 基金经理以不同风格、不同信息来源、不同信号权重、不同调仓逻辑，去表达对同一个机会的不同看法。

这些基金经理不是普通聊天机器人，也不是一次性生成内容的 Agent。  
它们是 **持续存在、持续运行、可被跟踪、可被比较、可被订阅、可被评价** 的投资主体。

每个基金经理都应该有：

- 明确的投资风格
- 明确的信息来源偏好
- 明确的信号栈
- 明确的风险偏好
- 明确的组合构建逻辑
- 明确的调仓逻辑
- 可回看的历史业绩
- 可阅读的研究 memo
- 可付费访问的服务能力

---

## 2. 这个项目不是什么

为了避免误解，先明确这个项目 **不是什么**。

### 不是单一市场分析工具
它不是某个单一交易平台的外接插件。

### 不是简单的 Agent 聊天产品
它不是“问一句、答一句”的问答 Agent。

### 不是纯粹的量化回测网站
虽然项目里会包含量化型基金经理，但整体不是只做策略回测页面。

### 不是泛化的 Agent Builder
本项目的重点不是让用户自己搭 Agent，而是先提供一组已经成型的“AI 基金经理”。

### 不是第一阶段就做自动交易平台
第一阶段重点是：
- 数据
- 信号
- 决策
- 组合
- 业绩
- API
- 展示层

不是直接做实盘执行。

---

## 3. 核心理念

Conviction Atlas 的核心理念是：

## 同一个 Web3 机会，不同的基金经理，应该给出不同的判断、不同的仓位和不同的解释。

真实世界里，基金经理之间本来就应该存在分歧。  
有的人偏叙事，有的人偏事件驱动，有的人偏链上数据，有的人偏量化，有的人偏逆向，有的人偏保守风控。

所以在 Conviction Atlas 里：

- 不存在“平台唯一真理”
- 只有不同经理对机会的不同表达
- 平台负责让这种分歧被结构化、可比较、可验证、可持续

用户不是来找唯一答案的，而是来比较：

- 哪位经理怎么看
- 为什么这么看
- 现在持有什么
- 最近怎么调仓
- 历史做得怎么样
- 值不值得继续订阅

---

## 4. 为什么这个项目和 Agent Payment 强相关

这个项目不是“先做个研究站，以后再想怎么收费”。  
**支付能力本身就是产品结构的一部分。**

Conviction Atlas 里的基金经理，不只是展示内容的页面角色，它们应该逐渐变成：

## 可提供服务、可收取费用、可积累信誉、可长期运营的 AI 经济主体

这就是它和 **Agent Payment** 强相关的原因。

### 4.1 支付不是附加功能，而是经理服务成立的前提
每个基金经理都应该被理解为一个“可服务、可收费”的对象。  
用户不是给平台单纯充会员，而是在购买某位经理的服务，例如：

- 解锁某篇深度研究 memo
- 订阅某位经理的每日/每周观点
- 购买某位经理的高级 watchlist
- 付费查看某位经理的详细组合与调仓解释
- 未来可扩展到购买 custom research / manager-specific signal feed

所以支付能力在这里的作用不是传统 SaaS 订阅，而是：

## 让 AI 基金经理真正成为可以被购买、被选择、被比较的服务主体。

### 4.2 Agent Payment 能让经理“作为主体”而不是“作为页面功能”
如果没有支付层，这个平台很容易退化成：
- 一个聚合 dashboard
- 一个研究资讯站
- 一个“看看不同观点”的展示工具

但如果引入 agent payment 逻辑，基金经理就变成：

- 有定价的服务提供者
- 有购买记录的服务节点
- 有复购率和用户评价的供给方
- 有长期信誉沉淀的市场参与者

这会让产品从“工具”升级为“市场”。

### 4.3 支付和信誉天然绑定
一旦支付成为基金经理服务的一部分，就自然会产生：

- 谁被买得多
- 谁被订阅得多
- 谁复购率更高
- 谁评价更好
- 谁在长期更值得信任

这使得平台能形成一个真正的经理市场，而不是静态排行榜。

### 4.4 为什么第一阶段不一定要把支付全部做完
虽然 agent payment 是产品核心叙事之一，但第一阶段的主要目标仍然是：

- 先把后端系统跑通
- 先让经理和数据系统成型
- 先把组合、业绩、memo、API 跑起来

因此第一阶段可以先做到：
- paywall / unlock 的接口骨架
- pricing plan 的数据结构
- 订单/订阅表结构
- “解锁 memo”的流程占位
- mock payment flow

等系统稳定后，再接入真实的 agent payment 方案。

换句话说：

## 第一阶段必须在架构上为 agent payment 预留完整位置，但不要求第一晚就把真实支付闭环做深。

---

## 5. 产品核心对象

Conviction Atlas 的系统核心对象如下：

### 5.1 Manager（基金经理）
平台上的 AI 基金经理。

每个经理都有：
- 名称
- 风格
- 风险偏好
- 信号偏好
- 覆盖 universe
- 调仓频率
- 组合规则
- memo 风格
- 定价信息
- 历史业绩
- 用户评价

### 5.2 Opportunity（机会）
可研究、可定价、可持仓、可跟踪的对象。

可以包括：
- token
- prediction market
- narrative
- event-driven opportunity

### 5.3 Signal（信号）
从原始数据中抽取出来、可供基金经理消费的结构化判断依据。

例如：
- market momentum
- volume spike
- news heat
- narrative heat
- catalyst detected
- risk flag
- price dislocation
- sentiment bias

### 5.4 Portfolio（组合）
基金经理在某一时刻的持仓状态。

包括：
- 当前持仓
- 目标仓位
- 现金仓位
- 风险暴露
- 调仓历史

### 5.5 Memo（研究内容）
基金经理对某个机会或某次调仓的解释性文本。

Memo 不是简单内容页，而是基金经理服务的一部分。  
它未来天然适合和 agent payment 结合。

### 5.6 Performance（业绩）
基金经理的历史结果表达。

包括：
- NAV
- 日收益
- 累计收益
- 最大回撤
- Sharpe（可简化）
- 命中率
- 回测结果

---

## 6. 第一阶段要解决的核心问题

本项目第一阶段不是追求“最聪明的 AI 经理”，而是先解决这几个基础问题：

### 6.1 如何稳定抓到外部数据
需要先把最基本的数据源打通，形成稳定 ingestion 能力。

### 6.2 如何把不同来源的数据统一成内部标准对象
不同来源的数据格式和抽象方式不同，需要标准化。

### 6.3 如何把原始数据转化成统一信号
基金经理不能直接吃杂乱原始数据，必须先经过 signal 层。

### 6.4 如何让不同经理基于不同 policy 产生不同决策
这是整个产品的灵魂。

### 6.5 如何把决策落成组合、调仓和业绩
否则经理只是“说法不同”，不是真正的经理。

### 6.6 如何通过 API 把这些能力暴露给前端
前端只是查看系统的窗口，后端必须先站稳。

---

## 7. 系统总体架构

系统必须围绕以下流水线搭建：

## Sources → Raw Data → Normalization → Signals → Managers → Portfolios → API → Frontend

### 7.1 Sources
外部数据源，例如：
- CoinGecko
- Polymarket
- NewsAPI
- GNews
- 后续更多市场/社交/链上源

### 7.2 Raw Data
原始数据落库，便于：
- 调试
- 重放
- 重算
- 回测
- 追踪错误

### 7.3 Normalization
把不同源映射成内部统一对象。

### 7.4 Signals
生成标准化信号。

### 7.5 Managers
不同基金经理根据自身策略消费信号。

### 7.6 Portfolios
经理输出变成：
- 仓位
- 调仓
- 组合
- 业绩

### 7.7 API
为前端和内部任务提供统一接口。

### 7.8 Frontend
轻前端，只负责展示和验证后端输出。

---

## 8. 第一阶段开发优先级

### P0：必须做
- 项目骨架
- 数据库 schema
- 迁移
- 基础 source adapters
- mock mode
- raw data 入库
- normalization
- signal engine scaffold
- manager engine scaffold
- portfolio engine scaffold
- 基础 API
- 轻前端页面

### P1：应该做
- 定时任务
- memo 生成
- leaderboard
- reviews
- watchlist
- 简单的 paywall 数据结构

### P2：可后续做
- 真实支付接入
- 实盘交易
- 更复杂量化策略
- 在线学习
- 更复杂用户权限体系

---

## 9. 推荐的第一阶段经理类型

第一阶段至少实现 4 位基金经理：

### 9.1 Narrative Manager
看重：
- 热点扩散
- 叙事强弱
- 社区关注度
- 主题轮动

### 9.2 Event-driven Manager
看重：
- 新闻
- 公告
- 时间节点
- 催化剂

### 9.3 Quant Manager
看重：
- 动量
- 波动率
- 成交量
- 价格结构
- 简单量化规则

### 9.4 Hybrid Manager
混合：
- 量化信号
- 新闻事件
- 市场结构
- 风险约束

这些经理不要求第一阶段就做到真实“超额收益”，但必须做到：
- 风格差异清晰
- 数据流不同
- 组合不同
- API 可见
- 结果可比较

---

## 10. 为什么前端不是第一优先级

前端在这个项目里不是不重要，而是：

## 前端只是系统输出的可视化窗口，不应该反过来绑架后端架构。

因此第一阶段前端的目标是：
- 能看经理
- 能看组合
- 能看业绩
- 能看机会
- 能看 memo
- 能看分歧

而不是先做复杂交互、复杂品牌页或大量营销内容。

---

## 11. 给工程 Agent 的关键要求

这个项目需要一个工程 Agent 从 0 到 1 长时间工作，因此必须满足以下要求：

### 11.1 不依赖你立刻提供所有 API keys
系统必须支持：
- mock providers
- fixture seed data
- dry-run 模式
- 真实 provider 与 mock provider 的切换

### 11.2 所有关键模块可独立测试
例如：
- source adapters
- signal generation
- manager decisions
- portfolio updates
- performance snapshots

### 11.3 项目必须在明早可本地测试
即使没有真实 key，也必须做到：
- 本地运行
- 页面可访问
- API 可调用
- 数据可查看
- 任务可 dry-run

### 11.4 所有真实 key 相关能力必须预留占位
包括：
- `.env.example`
- provider abstraction
- clear TODO comments
- integration checklist

---

## 12. 数据源建议

第一阶段优先接这几类：

### CoinGecko
作用：
- token price
- market data
- historical charts

### Polymarket
作用：
- prediction opportunities
- events
- market prices
- historical price structure

### NewsAPI / GNews
作用：
- 事件型新闻
- 催化剂检测
- 文章聚合

后续可扩展：
- social
- onchain metrics
- exchange feeds
- governance / protocol data

---

## 13. 后端必须暴露的核心 API

### Managers
- `GET /api/managers`
- `GET /api/managers/:slug`
- `GET /api/managers/:slug/performance`
- `GET /api/managers/:slug/portfolio`
- `GET /api/managers/:slug/rebalances`
- `GET /api/managers/:slug/memos`
- `GET /api/managers/:slug/reviews`
- `POST /api/managers/:slug/reviews`

### Opportunities
- `GET /api/opportunities`
- `GET /api/opportunities/:id`
- `GET /api/opportunities/:id/managers`
- `GET /api/opportunities/:id/signals`
- `GET /api/opportunities/:id/news`
- `GET /api/opportunities/:id/history`

### Memos
- `GET /api/memos/:id`
- `POST /api/memos/:id/unlock`
- `POST /internal/memos/generate`

### Leaderboards
- `GET /api/leaderboard/managers`
- `GET /api/leaderboard/opportunities`

### Internal Jobs
- `POST /internal/ingest/coingecko`
- `POST /internal/ingest/polymarket`
- `POST /internal/ingest/news`
- `POST /internal/normalize/opportunities`
- `POST /internal/signals/recompute`
- `POST /internal/managers/run`
- `POST /internal/portfolio/rebalance`
- `POST /internal/performance/snapshot`

---

## 14. 前端最小页面集合

第一阶段前端只需要这些页面：

- `/`
- `/managers`
- `/managers/[slug]`
- `/opportunities`
- `/opportunities/[id]`
- `/leaderboard`

页面的作用是验证后端系统，而不是决定后端结构。

---

## 15. 工程目标总结

这个项目第一阶段的本质不是做一个华丽产品页，而是：

## 搭一个可扩展的 Web3 AI 基金经理后端平台。

如果这个平台搭得对，后续你可以不断加：
- 更多数据源
- 更多经理
- 更多支付方式
- 更多真实交易能力
- 更多前端表达

但如果底层没搭对，前端再漂亮也只是 demo。

---

## 16. 当前最重要的开发原则

### 原则 1
先把 **数据源 → signals → manager → portfolio → API** 跑通。

### 原则 2
先做可扩展的系统，不做一次性写死的脚本集合。

### 原则 3
agent payment 在架构上必须被预留为经理服务的一部分。

### 原则 4
无 API key 时必须可运行。

### 原则 5
明早必须能本地测试，而不是停留在脚手架。

---