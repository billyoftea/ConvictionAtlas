#!/usr/bin/env bash
set -euo pipefail

cd /root/workspace/ConvictionAtlas

set -a
source /root/workspace/ConvictionAtlas/.env
if [ -f /etc/conviction-atlas/api.env ]; then
  source /etc/conviction-atlas/api.env
fi
set +a

export NODE_ENV=production

exec /usr/bin/node /root/workspace/ConvictionAtlas/dist/api/main.js
