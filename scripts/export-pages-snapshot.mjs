import { mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const apiBaseUrl = (process.env.SNAPSHOT_API_BASE_URL || 'http://127.0.0.1:3001/api').replace(
  /\/$/,
  '',
);
const outputDir = process.env.SNAPSHOT_OUTPUT_DIR
  ? path.resolve(process.env.SNAPSHOT_OUTPUT_DIR)
  : path.resolve(process.cwd(), 'web/public/data');

async function fetchJson(route) {
  const response = await fetch(`${apiBaseUrl}${route}`, {
    headers: { Accept: 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${route}: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function writeJson(route, payload) {
  const normalized = route.replace(/^\/+/, '');
  const target = path.join(outputDir, `${normalized}.json`);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, JSON.stringify(payload));
  console.log(`wrote ${path.relative(process.cwd(), target)}`);
}

async function snapshotRoute(route) {
  const payload = await fetchJson(route);
  await writeJson(route, payload);
  return payload;
}

async function main() {
  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });

  const managers = await snapshotRoute('/managers');
  await snapshotRoute('/leaderboard/managers');

  for (const manager of managers) {
    const slug = manager?.slug;
    if (!slug) {
      continue;
    }

    for (const suffix of ['', '/portfolio', '/rebalances', '/memos', '/reviews']) {
      await snapshotRoute(`/managers/${slug}${suffix}`);
    }
  }

  const opportunities = await snapshotRoute('/opportunities');
  await snapshotRoute('/leaderboard/opportunities');

  for (const opportunity of opportunities) {
    const routeKey = opportunity?.slug || opportunity?.id;
    if (!routeKey) {
      continue;
    }

    for (const suffix of ['', '/managers', '/signals', '/news', '/history']) {
      await snapshotRoute(`/opportunities/${routeKey}${suffix}`);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
