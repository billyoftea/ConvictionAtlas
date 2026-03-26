import Link from 'next/link';
import { IBM_Plex_Mono, Manrope, Sora } from 'next/font/google';
import { ThemeSync } from '../components/theme-sync';
import { SiteWordmark } from '../components/site-wordmark';
import { resolveThemeMode } from '../lib/theme';
import { readDevtoolsThemePreference } from '../lib/theme-server';
import './global.css';

const displayFont = Sora({
  subsets: ['latin'],
  variable: '--font-display',
});

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
});

const monoFont = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
});

export const metadata = {
  title: 'Conviction Atlas',
  description: 'Paid AI fund manager marketplace for TRON and cross-market Web3 research.',
};

const navItems = [
  { href: '/managers', label: 'Managers' },
  { href: '/opportunities', label: 'Opportunities' },
  { href: '/leaderboard', label: 'Leaderboard' },
];

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themePreference = await readDevtoolsThemePreference();
  const resolvedTheme = resolveThemeMode(themePreference);

  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
      data-theme={resolvedTheme}
      data-theme-preference={themePreference}
      suppressHydrationWarning
    >
      <body className="atlas-theme">
        <ThemeSync initialPreference={themePreference} />
        <div className="site-shell">
          <header className="site-header">
            <div className="site-header__inner">
              <Link href="/" className="brand">
                <span className="brand__copy">
                  <strong>
                    <SiteWordmark className="site-wordmark" />
                  </strong>
                  <small>Payable AI fund manager marketplace for Web3 research</small>
                </span>
              </Link>

              <nav className="nav-links" aria-label="Primary">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="nav-pill">
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="site-header__actions">
                <span className="site-header__status">Research terminal live</span>
                <a
                  href="http://localhost:3001/docs"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-pill nav-pill-accent"
                >
                  API Docs
                </a>
              </div>
            </div>
          </header>

          <nav className="site-mobile-nav" aria-label="Primary mobile">
            <div className="site-mobile-nav__inner">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="nav-pill">
                  {item.label}
                </Link>
              ))}
              <a
                href="http://localhost:3001/docs"
                target="_blank"
                rel="noreferrer"
                className="nav-pill nav-pill-accent"
              >
                API Docs
              </a>
            </div>
          </nav>

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
