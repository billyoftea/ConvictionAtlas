const DEFAULT_API_BASE_URL = process.env.GITHUB_PAGES
  ? 'https://47.76.120.0.sslip.io/api'
  : 'http://localhost:3001/api';
const STATIC_DATA_MODE = process.env.NEXT_PUBLIC_STATIC_DATA_MODE === 'true';
const DEFAULT_STATIC_DATA_BASE_URL = '/ConvictionAtlas/data';

function trimTrailingSlash(value: string) {
  return value.endsWith('/') ? value.slice(0, -1) : value;
}

function normalizePath(path: string) {
  return path.startsWith('/') ? path : `/${path}`;
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

export const STATIC_DATA_BASE_URL = trimTrailingSlash(
  process.env.NEXT_PUBLIC_STATIC_DATA_BASE_URL ?? DEFAULT_STATIC_DATA_BASE_URL,
);

export function buildReadApiUrl(path: string) {
  const normalized = normalizePath(path);

  if (STATIC_DATA_MODE) {
    return `${STATIC_DATA_BASE_URL}${normalized}.json`;
  }

  return `${API_BASE_URL}${normalized}`;
}

export const API_DOCS_URL = trimTrailingSlash(
  process.env.NEXT_PUBLIC_API_DOCS_URL ?? deriveDocsUrl(API_BASE_URL),
);
