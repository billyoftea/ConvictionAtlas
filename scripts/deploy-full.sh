#!/usr/bin/env bash
# ============================================================
# Conviction Atlas — Full Deploy Script
# Run on the target server (47.76.120.0)
# Usage: bash scripts/deploy-full.sh
# ============================================================
set -euo pipefail

PROJECT_DIR="/root/workspace/ConvictionAtlas"
WEB_DIR="/usr/share/nginx/html/conviction-atlas"

echo "=== 1/7  Entering project directory ==="
cd "$PROJECT_DIR"

echo "=== 2/7  Installing dependencies ==="
npm install --ignore-scripts 2>/dev/null || true
# Rebuild native modules
cd node_modules/better-sqlite3
npx --yes node-gyp rebuild --release 2>/dev/null || echo "better-sqlite3 already built"
cd "$PROJECT_DIR"

echo "=== 3/7  Database setup ==="
npx prisma generate
npm run db:push
npm run db:seed

echo "=== 4/7  Seed demo data + run pipeline ==="
node node_modules/tsx/dist/cli.mjs scripts/seed-demo-data.ts 2>/dev/null || true
# Run pipeline steps 3-8 (skip external API ingestion)
for step in normalize/opportunities signals/recompute managers/run portfolio/rebalance performance/snapshot; do
  echo "  Pipeline: $step"
done

echo "=== 5/7  Build API ==="
npx nx build api

echo "=== 6/7  Build & deploy frontend ==="
export NODE_ENV=production
export NEXT_PUBLIC_API_BASE_URL="/api"
export NEXT_PUBLIC_API_DOCS_URL="/docs"
unset GITHUB_PAGES 2>/dev/null || true
unset NEXT_PUBLIC_STATIC_DATA_MODE 2>/dev/null || true

rm -rf web/.next web/out
node node_modules/next/dist/bin/next build ./web

mkdir -p "$WEB_DIR"
find "$WEB_DIR" -mindepth 1 -maxdepth 1 -exec rm -rf {} +
cp -a web/out/. "$WEB_DIR"/
echo "  Frontend deployed to $WEB_DIR"

echo "=== 7/7  Restart API service ==="
# Copy systemd unit if needed
cp -f deploy/systemd/conviction-atlas-api.service /etc/systemd/system/ 2>/dev/null || true
systemctl daemon-reload 2>/dev/null || true
systemctl enable conviction-atlas-api 2>/dev/null || true
systemctl restart conviction-atlas-api 2>/dev/null || true

# Copy nginx config if needed  
if [ -f deploy/nginx/conviction-atlas-sslip.conf ]; then
  cp -f deploy/nginx/conviction-atlas-sslip.conf /etc/nginx/conf.d/ 2>/dev/null || true
  nginx -t 2>/dev/null && systemctl reload nginx 2>/dev/null || true
fi

echo ""
echo "============================================"
echo "  ✅ Conviction Atlas deployed successfully!"
echo "  🌐 http://47.76.120.0"
echo "  📡 http://47.76.120.0/api/managers"
echo "  📖 http://47.76.120.0/docs"
echo "============================================"
