from __future__ import annotations

import os
from pathlib import Path
from typing import Iterable

PACKAGE_DIR = Path(__file__).resolve().parent
SRC_DIR = PACKAGE_DIR.parent
BACKEND_DIR = SRC_DIR.parent
REPO_DIR = BACKEND_DIR.parent

DATASETS_DIR = BACKEND_DIR / "datasets"
MARKET_DATA_DIR = DATASETS_DIR / "market"

ARTIFACTS_DIR = BACKEND_DIR / "artifacts"
REPORTS_DIR = ARTIFACTS_DIR / "reports"
DASHBOARDS_DIR = ARTIFACTS_DIR / "dashboards"
IMAGES_DIR = ARTIFACTS_DIR / "images"

STORAGE_DIR = BACKEND_DIR / "storage"
STATE_DIR = STORAGE_DIR / "state"
ORDER_DIR = STORAGE_DIR / "orders"
LOG_DIR = STORAGE_DIR / "logs"

RUNTIME_DIR = BACKEND_DIR / "runtime"
OPENCLAW_DIR = RUNTIME_DIR / "openclaw"
LEGACY_DIR = RUNTIME_DIR / "legacy"
ARCHIVE_DIR = BACKEND_DIR / "archive"


def ensure_directories() -> None:
    for directory in (
        MARKET_DATA_DIR,
        REPORTS_DIR,
        DASHBOARDS_DIR,
        IMAGES_DIR,
        STATE_DIR,
        ORDER_DIR,
        LOG_DIR,
        OPENCLAW_DIR,
        LEGACY_DIR,
        ARCHIVE_DIR,
    ):
        directory.mkdir(parents=True, exist_ok=True)


def _dedupe_paths(paths: Iterable[Path]) -> list[Path]:
    unique: list[Path] = []
    seen: set[str] = set()
    for path in paths:
        key = str(path)
        if key not in seen:
            unique.append(path)
            seen.add(key)
    return unique


def openclaw_roots() -> list[Path]:
    env_root = os.environ.get("CONVICTION_ATLAS_OPENCLAW_DIR")
    roots = [
        Path(env_root) if env_root else None,
        OPENCLAW_DIR,
        BACKEND_DIR / ".openclaw",
        Path.home() / ".openclaw",
        Path("/root/.openclaw"),
        Path("/projects/.openclaw"),
    ]
    return _dedupe_paths(path for path in roots if path is not None)


def openclaw_candidates(*parts: str) -> list[Path]:
    return [root.joinpath(*parts) for root in openclaw_roots()]


def resolve_existing_path(candidates: Iterable[Path], required: bool = False) -> Path:
    candidate_list = [Path(candidate) for candidate in candidates]
    for candidate in candidate_list:
        if candidate.exists():
            return candidate

    if not candidate_list:
        raise FileNotFoundError("No candidate paths were provided.")

    if required:
        searched = "\n".join(f"- {candidate}" for candidate in candidate_list)
        raise FileNotFoundError(f"Required file not found. Searched:\n{searched}")

    return candidate_list[0]


def resolve_auth_profile_path(required: bool = True) -> Path:
    env_path = os.environ.get("CONVICTION_ATLAS_AUTH_PROFILES")
    candidates = [
        Path(env_path) if env_path else None,
        Path("/projects/.openclaw/agents/main/agent/auth-profiles.json"),
        *openclaw_candidates("agents", "main", "agent", "auth-profiles.json"),
    ]
    return resolve_existing_path(
        [candidate for candidate in candidates if candidate is not None],
        required=required,
    )


def state_file(manager_id: str) -> Path:
    ensure_directories()
    return STATE_DIR / f"{manager_id}_state.json"
