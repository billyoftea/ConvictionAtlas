export const themePreferences = ['light', 'dark', 'system'] as const;

export type ThemePreference = (typeof themePreferences)[number];
export type ThemeMode = Exclude<ThemePreference, 'system'>;

export const DEFAULT_THEME_PREFERENCE: ThemePreference = 'light';

export function normalizeThemePreference(value: unknown): ThemePreference {
  if (typeof value === 'string' && themePreferences.includes(value as ThemePreference)) {
    return value as ThemePreference;
  }

  return DEFAULT_THEME_PREFERENCE;
}

export function resolveThemeMode(
  preference: ThemePreference,
  prefersDark = false,
): ThemeMode {
  if (preference === 'system') {
    return prefersDark ? 'dark' : 'light';
  }

  return preference;
}
