#!/usr/bin/env python3
"""
LLM engine core for manager decisions.
"""

import json
import urllib.error
import urllib.request

from conviction_atlas_backend.paths import resolve_auth_profile_path

GONGFENG_API = "https://copilot.code.woa.com/server/openclaw/copilot-gateway/v1/chat/completions"


def get_auth():
    auth_path = resolve_auth_profile_path(required=True)
    with auth_path.open(encoding="utf-8") as f:
        profiles = json.load(f)
    profile = profiles["profiles"]["gongfeng:default"]
    return profile["access"], profile["username"], profile["deviceId"]


def llm_call(
    system_prompt: str,
    user_prompt: str,
    temperature: float = 0.3,
    max_tokens: int = 1000,
) -> dict:
    token, username, device_id = get_auth()

    payload = json.dumps(
        {
            "model": "auto",
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt},
            ],
            "temperature": temperature,
            "max_tokens": max_tokens,
        }
    ).encode()

    req = urllib.request.Request(
        GONGFENG_API,
        data=payload,
        method="POST",
        headers={
            "Content-Type": "application/json",
            "OAUTH-TOKEN": token,
            "X-Username": username,
            "DEVICE-ID": device_id,
            "User-Agent": "FundEngine/1.0",
        },
    )
    with urllib.request.urlopen(req, timeout=45) as r:
        resp = json.loads(r.read())

    content = resp["choices"][0]["message"]["content"].strip()
    if content.startswith("```"):
        lines = content.splitlines()
        content = "\n".join(lines[1:-1] if lines[-1].strip() == "```" else lines[1:])
    return json.loads(content)
