import Link from 'next/link';
import ReferenceHeroScene from '../components/reference-hero-scene';
import { SiteWordmark } from '../components/site-wordmark';

const navItems = [
  { href: '/managers', label: 'Managers' },
  { href: '/opportunities', label: 'Opportunities' },
  { href: '/leaderboard', label: 'Leaderboard' },
];

export default function Index() {
  return (
    <div className="reference-hero-page">
      <nav className="reference-nav" aria-label="Primary">
        <div className="reference-nav-unit reference-logo-slot">
          <Link href="/" className="reference-logo-link" aria-label="Conviction Atlas home">
            <SiteWordmark className="reference-site-wordmark" />
          </Link>
        </div>

        <div className="reference-nav-unit reference-nav-links">
          <div className="reference-nav-links-inner">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="reference-pill-button">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="reference-nav-unit reference-contact-slot">
          <a
            href="http://localhost:3001/docs"
            target="_blank"
            rel="noreferrer"
            className="reference-pill-button"
          >
            API Docs
          </a>
        </div>
      </nav>

      <nav className="reference-mobile-nav" aria-label="Mobile">
        <div className="reference-mobile-scroller">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="reference-pill-button">
              {item.label}
            </Link>
          ))}
          <a
            href="http://localhost:3001/docs"
            target="_blank"
            rel="noreferrer"
            className="reference-pill-button"
          >
            API Docs
          </a>
        </div>
      </nav>

      <div className="reference-hero-wrapper">
        <div className="reference-hero-copy">
          <h1 className="reference-hero-headline">
            Autonomous desks for&nbsp;tokens and&nbsp;prediction&nbsp;markets
          </h1>

          <div className="reference-hero-footnote">
            <p>
              Run live manager books, opportunity tape, rebalance history, reviews, and
              research memos from one interface. Explore the{' '}
              <Link href="/managers">manager layer</Link>, the{' '}
              <Link href="/opportunities">opportunity inventory</Link>, and the{' '}
              <Link href="/leaderboard">ranking surface</Link> backed by your Nest API.
            </p>
          </div>

          <div className="reference-hero-actions">
            <Link href="/managers" className="reference-pill-button reference-pill-button-hero">
              Open managers
            </Link>
            <Link
              href="/opportunities"
              className="reference-pill-button reference-pill-button-hero"
            >
              Browse opportunities
            </Link>
          </div>
        </div>

        <div className="reference-hero-scene-shell">
          <ReferenceHeroScene />
        </div>
      </div>
    </div>
  );
}
