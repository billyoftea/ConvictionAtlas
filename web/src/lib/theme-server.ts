import 'server-only';

import { readFile } from 'fs/promises';
import path from 'path';

import {
  DEFAULT_THEME_PREFERENCE,
  normalizeThemePreference,
  type ThemePreference,
} from './theme';

const devtoolsConfigPath = path.join(
  process.cwd(),
  'web',
  '.next',
  'cache',
  'next-devtools-config.json',
);

export async function readDevtoolsThemePreference(): Promise<ThemePreference> {
  if (process.env.NODE_ENV !== 'development') {
    return DEFAULT_THEME_PREFERENCE;
  }

  try {
    const raw = await readFile(devtoolsConfigPath, 'utf8');
    const parsed = JSON.parse(raw) as { theme?: unknown };
    return normalizeThemePreference(parsed.theme);
  } catch {
    return DEFAULT_THEME_PREFERENCE;
  }
}
