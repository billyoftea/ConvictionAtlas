'use client';

import { useEffect, useRef } from 'react';

import {
  normalizeThemePreference,
  resolveThemeMode,
  type ThemePreference,
} from '../lib/theme';

function applyTheme(preference: ThemePreference) {
  const root = document.documentElement;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const resolvedTheme = resolveThemeMode(preference, prefersDark);

  root.dataset.themePreference = preference;
  root.dataset.theme = resolvedTheme;
}

export function ThemeSync({
  initialPreference,
}: {
  initialPreference: ThemePreference;
}) {
  const preferenceRef = useRef<ThemePreference>(initialPreference);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const syncTheme = () => applyTheme(preferenceRef.current);
    const handleSystemThemeChange = () => {
      if (preferenceRef.current === 'system') {
        syncTheme();
      }
    };

    syncTheme();
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    let intervalId: number | undefined;
    let cancelled = false;

    const refreshThemePreference = async () => {
      try {
        const response = await fetch('/api/devtools-theme', {
          cache: 'no-store',
        });

        if (!response.ok || cancelled) {
          return;
        }

        const payload = (await response.json()) as { theme?: unknown };
        const nextPreference = normalizeThemePreference(payload.theme);

        if (nextPreference !== preferenceRef.current) {
          preferenceRef.current = nextPreference;
          syncTheme();
        }
      } catch {
        // Ignore transient dev-server polling failures.
      }
    };

    if (process.env.NODE_ENV === 'development') {
      void refreshThemePreference();
      intervalId = window.setInterval(() => {
        void refreshThemePreference();
      }, 1000);
    }

    return () => {
      cancelled = true;
      mediaQuery.removeEventListener('change', handleSystemThemeChange);

      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
      }
    };
  }, []);

  return null;
}
