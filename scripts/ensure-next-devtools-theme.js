const fs = require('fs');
const path = require('path');

const configPath = path.join(
  process.cwd(),
  'web',
  '.next',
  'cache',
  'next-devtools-config.json',
);

const validThemes = new Set(['light', 'dark', 'system']);

function writeConfig(config) {
  fs.mkdirSync(path.dirname(configPath), { recursive: true });
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
}

try {
  if (!fs.existsSync(configPath)) {
    writeConfig({ theme: 'light' });
    process.exit(0);
  }

  const raw = fs.readFileSync(configPath, 'utf8');
  const parsed = raw ? JSON.parse(raw) : {};

  if (!validThemes.has(parsed.theme)) {
    writeConfig({ ...parsed, theme: 'light' });
  }
} catch (error) {
  console.error('[theme-init] Failed to initialize Next devtools theme.', error);
  process.exit(1);
}
