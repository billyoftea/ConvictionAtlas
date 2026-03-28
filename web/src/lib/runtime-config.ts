const DEFAULT_API_BASE_URL = 'http://localhost:3001/api';

function trimTrailingSlash(value: string) {
  return value.endsWith('/') ? value.slice(0, -1) : value;
}

function deriveDocsUrl(apiBaseUrl: string) {
  const normalized = trimTrailingSlash(apiBaseUrl);

  try {
    const url = new URL(normalized);
    url.pathname = url.pathname.replace(/\/api$/, '/docs');
    return trimTrailingSlash(url.toString());
  } catch {
    return normalized.replace(/\/api$/, '/docs');
  }
}

export const API_BASE_URL = trimTrailingSlash(
  process.env.NEXT_PUBLIC_API_BASE_URL ?? DEFAULT_API_BASE_URL,
);

export const API_DOCS_URL = trimTrailingSlash(
  process.env.NEXT_PUBLIC_API_DOCS_URL ?? deriveDocsUrl(API_BASE_URL),
);
