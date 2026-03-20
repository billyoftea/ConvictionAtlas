import Link from 'next/link';
import { IBM_Plex_Sans, Space_Grotesk } from 'next/font/google';
import { SiteWordmark } from '../components/site-wordmark';
import './global.css';

const headingFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
});

const bodyFont = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

export const metadata = {
  title: 'Conviction Atlas',
  description: 'Web3 AI fund managers for tokens and prediction markets.',
};

const navItems = [
  { href: '/managers', label: 'Managers' },
  { href: '/opportunities', label: 'Opportunities' },
  { href: '/leaderboard', label: 'Leaderboard' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="reference-theme">
        <div className="site-shell">
          <header className="topbar">
            <Link href="/" className="brand">
              <span>
                <strong>
                  <SiteWordmark className="site-wordmark" />
                </strong>
                <small>Autonomous token and prediction desks</small>
              </span>
            </Link>
            <nav className="nav-links">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="nav-pill">
                  {item.label}
                </Link>
              ))}
              <a
                href="http://localhost:3001/docs"
                target="_blank"
                rel="noreferrer"
                className="nav-pill"
              >
                API Docs
              </a>
            </nav>
          </header>
          <nav className="site-mobile-nav" aria-label="Primary mobile">
            <div className="site-mobile-scroller">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="nav-pill">
                  {item.label}
                </Link>
              ))}
              <a
                href="http://localhost:3001/docs"
                target="_blank"
                rel="noreferrer"
                className="nav-pill"
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
