# Backend

`backend/` 现在是这个项目的后端实现中心，负责四类事情：

- 市场数据采集
- AI 基金经理决策
- 回测与净值计算
- 报表与支付诊断

## 目录

- `src/conviction_atlas_backend/fund_engine/`: 实时数据、经理 prompt、日常调仓引擎
- `src/conviction_atlas_backend/analytics/`: 30 天 / 1 年回测与 NAV 计算
- `src/conviction_atlas_backend/dashboard/`: 报表和 dashboard 构建
- `src/conviction_atlas_backend/payments/`: TRON / x402 支付侧检查
- `src/conviction_atlas_backend/diagnostics/`: 单经理策略探针和独立测试脚本
- `datasets/market/`: 固定输入数据
- `storage/`: 运行时状态、订单、日志
- `artifacts/`: 报表、静态 dashboard、图片输出
- `runtime/`: OpenClaw、本地临时目录和旧快照
- `archive/`: 打包导出文件

## 统一入口

优先用下面这一个入口，不要再直接跑散落脚本：

```powershell
python backend/scripts/run_backend.py <command>
```

可用命令：

- `daily-run`
- `backtest-1y`
- `backtest-30d`
- `nav-calc`
- `build-dashboard`
- `manager2-defi`
- `manager3-quant`
- `manager4-tron`
- `payment-test`

示例：

```powershell
python backend/scripts/run_backend.py daily-run --dry-run
python backend/scripts/run_backend.py backtest-1y
python backend/scripts/run_backend.py build-dashboard
```

## 路径约定

后端不再依赖 `/tmp`、`/root/.openclaw` 这类硬编码目录。统一通过 `src/conviction_atlas_backend/paths.py` 管理路径。

默认会优先查找这些 OpenClaw 根目录：

1. 环境变量 `CONVICTION_ATLAS_OPENCLAW_DIR`
2. `backend/runtime/openclaw`
3. `backend/.openclaw`
4. `~/.openclaw`
5. `/root/.openclaw`
6. `/projects/.openclaw`

如果 LLM 鉴权文件位置特殊，可以单独设置：

```powershell
$env:CONVICTION_ATLAS_AUTH_PROFILES = 'C:\\path\\to\\auth-profiles.json'
```

## 和 api / web 的关系

- `backend/` 是研究引擎和策略实现
- `api/` 是面向产品的接口层和数据编排层
- `web/` 是用户界面

现在推荐的边界是：

- `backend/` 产出策略结果、回测结果、研究资产
- `api/` 消费这些结果，封装成稳定接口
- `web/` 只消费 `api/`，不直接绑后端脚本
