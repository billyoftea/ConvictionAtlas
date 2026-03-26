#!/usr/bin/env python3
"""
Build a simple static dashboard from backtest results and live manager state.
"""

from __future__ import annotations

import json
from datetime import UTC, datetime

from conviction_atlas_backend.paths import DASHBOARDS_DIR, REPORTS_DIR, STATE_DIR, ensure_directories

MANAGER_META = {
    "manager_1_trend": {
        "label": "Manager I · Trend",
        "emoji": "M1",
        "desc": "Macro trend-following via RSI and moving averages",
    },
    "manager_2_defi": {
        "label": "Manager II · DeFi",
        "emoji": "M2",
        "desc": "DeFi fundamentals with ETH/TRON ecosystem focus",
    },
    "manager_3_quant": {
        "label": "Manager III · Quant",
        "emoji": "M3",
        "desc": "Quant mean-reversion and funding-rate regime logic",
    },
    "manager_4_tron": {
        "label": "Manager IV · TRON",
        "emoji": "M4",
        "desc": "TRON conservative income strategy",
    },
}


def load_json(path):
    with path.open(encoding="utf-8") as f:
        return json.load(f)


def load_live_states() -> dict:
    result = {}
    for manager_id in MANAGER_META:
        path = STATE_DIR / f"{manager_id}_state.json"
        if path.exists():
            result[manager_id] = load_json(path)
    return result


def format_allocations(allocations: dict) -> str:
    visible = [f"{asset.replace('USDT', '')} {round(weight * 100)}%" for asset, weight in allocations.items() if weight > 0.01]
    return " · ".join(visible) if visible else "-"


def build_dashboard() -> str:
    ensure_directories()
    backtest_path = REPORTS_DIR / "backtest_1y.json"
    if not backtest_path.exists():
        raise FileNotFoundError(f"Missing backtest report: {backtest_path}")

    backtest = load_json(backtest_path)
    results = backtest["results"]
    btc_final_nav = backtest.get("btc_final_nav", 1.0)
    btc_return_pct = backtest.get("btc_return_pct", 0.0)
    generated_at = datetime.now(UTC).strftime("%Y-%m-%d %H:%M UTC")
    live_states = load_live_states()

    summary_rows = []
    for manager_id, result in results.items():
        stats = result["stats"]
        meta = MANAGER_META.get(manager_id, {})
        live_state = live_states.get(manager_id, {})
        allocations = live_state.get("allocations") or result["nav_series"][-1].get("allocations", {})
        summary_rows.append(
            f"""
            <tr>
              <td>{meta.get('emoji', manager_id)}</td>
              <td>{result['label']}</td>
              <td>{stats['final_nav']:.4f}</td>
              <td>{stats['total_return_pct']:+.2f}%</td>
              <td>{stats['max_drawdown_pct']:.2f}%</td>
              <td>{stats['sharpe']:.2f}</td>
              <td>{format_allocations(allocations)}</td>
            </tr>
            """
        )

    live_cards = []
    history_rows = []
    for manager_id, meta in MANAGER_META.items():
        live_state = live_states.get(manager_id, {})
        history = live_state.get("nav_history", [])
        latest = history[-1] if history else {}
        live_cards.append(
            f"""
            <section class="card">
              <div class="eyebrow">{meta['emoji']}</div>
              <h2>{meta['label']}</h2>
              <p>{meta['desc']}</p>
              <dl>
                <div><dt>Current NAV</dt><dd>{live_state.get('nav', 1.0):.4f}</dd></div>
                <div><dt>Capital</dt><dd>${live_state.get('capital_usdt', 0):,.2f}</dd></div>
                <div><dt>Last run</dt><dd>{live_state.get('last_run', '-')}</dd></div>
                <div><dt>Confidence</dt><dd>{round(latest.get('confidence', 0) * 100)}%</dd></div>
              </dl>
              <div class="allocations">{format_allocations(live_state.get('allocations', {}))}</div>
            </section>
            """
        )

        for record in history[-5:]:
            history_rows.append(
                f"""
                <tr>
                  <td>{record.get('date', '-')}</td>
                  <td>{meta['label']}</td>
                  <td>{record.get('nav', 0):.4f}</td>
                  <td>{round(record.get('confidence', 0) * 100)}%</td>
                  <td>{format_allocations(record.get('allocations', {}))}</td>
                  <td>{record.get('reasoning', '')[:120]}</td>
                </tr>
                """
            )

    history_rows.sort(reverse=True)
    if not history_rows:
        history_rows = [
            """
            <tr>
              <td colspan="6">No live history yet. Run `daily-run` first.</td>
            </tr>
            """
        ]

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Conviction Atlas Backend Dashboard</title>
  <style>
    :root {{
      color-scheme: light;
      --bg: #f5f7fb;
      --panel: #ffffff;
      --line: #d8deea;
      --text: #18212f;
      --muted: #5a6678;
      --accent: #1c6cff;
    }}
    * {{ box-sizing: border-box; }}
    body {{
      margin: 0;
      font-family: "Segoe UI", Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
    }}
    main {{
      max-width: 1180px;
      margin: 0 auto;
      padding: 32px 20px 48px;
    }}
    h1, h2 {{ margin: 0; }}
    p {{ margin: 0; color: var(--muted); }}
    .topbar {{
      display: flex;
      justify-content: space-between;
      gap: 16px;
      align-items: end;
      margin-bottom: 24px;
    }}
    .topbar strong {{
      display: block;
      font-size: 28px;
      margin-bottom: 6px;
    }}
    .stats {{
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }}
    .stat, .card, .table-wrap {{
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: 16px;
      padding: 18px;
    }}
    .stat span {{
      display: block;
      color: var(--muted);
      margin-bottom: 8px;
      font-size: 13px;
    }}
    .stat strong {{
      font-size: 24px;
    }}
    .cards {{
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }}
    .eyebrow {{
      display: inline-block;
      font-size: 12px;
      color: var(--accent);
      margin-bottom: 10px;
      font-weight: 700;
    }}
    .card p {{
      margin-top: 8px;
      margin-bottom: 14px;
    }}
    .card dl {{
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px 16px;
      margin: 0 0 14px;
    }}
    .card dt {{
      font-size: 12px;
      color: var(--muted);
      margin-bottom: 4px;
    }}
    .card dd {{
      margin: 0;
      font-weight: 600;
    }}
    .allocations {{
      padding: 12px 14px;
      background: #f0f4fb;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 600;
    }}
    table {{
      width: 100%;
      border-collapse: collapse;
      font-size: 14px;
    }}
    th, td {{
      text-align: left;
      border-top: 1px solid var(--line);
      padding: 12px 10px;
      vertical-align: top;
    }}
    th {{
      color: var(--muted);
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      border-top: none;
    }}
    @media (max-width: 900px) {{
      .stats, .cards {{ grid-template-columns: 1fr; }}
      .topbar {{ flex-direction: column; align-items: start; }}
    }}
  </style>
</head>
<body>
  <main>
    <section class="topbar">
      <div>
        <strong>Conviction Atlas Backend Dashboard</strong>
        <p>Research engine, backtest reports, and latest manager state in one place.</p>
      </div>
      <p>Generated at {generated_at}</p>
    </section>

    <section class="stats">
      <div class="stat">
        <span>Managers</span>
        <strong>{len(results)}</strong>
      </div>
      <div class="stat">
        <span>BTC Benchmark</span>
        <strong>{btc_final_nav:.4f}</strong>
      </div>
      <div class="stat">
        <span>BTC Return</span>
        <strong>{btc_return_pct:+.2f}%</strong>
      </div>
    </section>

    <section class="cards">
      {''.join(live_cards)}
    </section>

    <section class="table-wrap">
      <h2>1Y Backtest Summary</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Manager</th>
            <th>Final NAV</th>
            <th>Total Return</th>
            <th>Max DD</th>
            <th>Sharpe</th>
            <th>Current Allocation</th>
          </tr>
        </thead>
        <tbody>
          {''.join(summary_rows)}
        </tbody>
      </table>
    </section>

    <section class="table-wrap" style="margin-top: 24px;">
      <h2>Recent Live Decision History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Manager</th>
            <th>NAV</th>
            <th>Confidence</th>
            <th>Allocation</th>
            <th>Reasoning</th>
          </tr>
        </thead>
        <tbody>
          {''.join(history_rows)}
        </tbody>
      </table>
    </section>
  </main>
</body>
</html>"""

    out = DASHBOARDS_DIR / "dashboard.html"
    with out.open("w", encoding="utf-8") as f:
        f.write(html)
    print(f"Dashboard written: {out}")
    return str(out)


if __name__ == "__main__":
    build_dashboard()
