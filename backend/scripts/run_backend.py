#!/usr/bin/env python3
from __future__ import annotations

import argparse
import runpy
import sys
from pathlib import Path

BACKEND_DIR = Path(__file__).resolve().parents[1]
SRC_DIR = BACKEND_DIR / "src"

if str(SRC_DIR) not in sys.path:
    sys.path.insert(0, str(SRC_DIR))

COMMANDS = {
    "daily-run": "conviction_atlas_backend.fund_engine.daily_run",
    "backtest-1y": "conviction_atlas_backend.analytics.backtest_1y",
    "backtest-30d": "conviction_atlas_backend.analytics.backtest_30d",
    "nav-calc": "conviction_atlas_backend.analytics.nav_calculator",
    "build-dashboard": "conviction_atlas_backend.dashboard.build_dashboard_1y",
    "manager2-defi": "conviction_atlas_backend.diagnostics.manager2_defi",
    "manager3-quant": "conviction_atlas_backend.diagnostics.manager3_quant",
    "manager4-tron": "conviction_atlas_backend.diagnostics.manager4_tron",
    "payment-test": "conviction_atlas_backend.payments.tron_payment_test",
}


def _stabilize_console() -> None:
    for stream_name in ("stdout", "stderr"):
        stream = getattr(sys, stream_name, None)
        if hasattr(stream, "reconfigure"):
            stream.reconfigure(errors="replace")


def main(argv: list[str] | None = None) -> None:
    _stabilize_console()
    parser = argparse.ArgumentParser(description="Conviction Atlas backend command runner")
    parser.add_argument("command", choices=sorted(COMMANDS))
    parser.add_argument("args", nargs=argparse.REMAINDER)
    parsed = parser.parse_args(argv)

    module_name = COMMANDS[parsed.command]
    sys.argv = [module_name, *parsed.args]
    runpy.run_module(module_name, run_name="__main__")


if __name__ == "__main__":
    main()
