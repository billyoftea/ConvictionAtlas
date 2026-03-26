import Link from 'next/link';
import {
  formatMoney,
  formatPercent,
  formatReturn,
  safeFetchApi,
} from '../lib/api';
import type { ManagerSummary, OpportunitySummary } from '../lib/types';

export const dynamic = 'force-dynamic';

const backendModules = [
  {
    label: 'Fund Engine',
    title: 'Market intake, manager prompts, and stateful daily runs',
    copy: 'The Python backend collects inputs, runs manager logic, and writes portable state for the product layer to consume.',
    footnote: 'backend/src/conviction_atlas_backend/fund_engine',
  },
  {
    label: 'Analytics',
    title: 'Backtests, NAV series, and benchmark output',
    copy: 'Historical performance, 30D and 1Y reports, and derived metrics are generated from the same backend package layout.',
    footnote: 'backend/src/conviction_atlas_backend/analytics',
  },
  {
    label: 'Delivery Rails',
    title: 'Service unlocks, custom research, and payment hooks',
    copy: 'The app layer now points to explicit paid outputs instead of a generic dashboard shell.',
    footnote: 'api + web paid-service flow',
  },
];

const routeEntries = [
  {
    href: '/managers',
    title: 'Managers',
    copy: 'Browse live desks, compare styles, and inspect productized service catalogs.',
    meta: 'Discovery surface',
  },
  {
    href: '/opportunities',
    title: 'Opportunities',
    copy: 'See what the backend research tape is currently tracking across tokens and market events.',
    meta: 'Inventory surface',
  },
  {
    href: '/leaderboard',
    title: 'Leaderboard',
    copy: 'Rank desks and opportunities without leaving the same visual system.',
    meta: 'Comparison surface',
  },
];

const workflowSteps = [
  {
    step: '01',
    title: 'Collect',
    copy: 'Ingest market data, signals, and opportunity context from the backend pipeline.',
  },
  {
    step: '02',
    title: 'Decide',
    copy: 'Managers turn the shared feed into portfolio views, memos, and signal outputs.',
  },
  {
    step: '03',
    title: 'Deliver',
    copy: 'The frontend exposes unlocks, subscriptions, and custom research as concrete actions.',
  },
  {
    step: '04',
    title: 'Track',
    copy: 'Performance, reviews, and payment-backed delivery stay visible in one place.',
  },
];

export default async function HomePage() {
  const [managers, opportunities] = await Promise.all([
    safeFetchApi<ManagerSummary[]>('/managers'),
    safeFetchApi<OpportunitySummary[]>('/opportunities'),
  ]);

  const managerRows = managers ?? [];
  const opportunityRows = opportunities ?? [];
  const leadManager = managerRows[0] ?? null;
  const leadOpportunity = opportunityRows[0] ?? null;
  const serviceCount = managerRows.reduce(
    (total, manager) => total + manager.marketplace.serviceCatalog.length,
    0,
  );
  const averageReturn = average(managerRows.map((manager) => manager.cumulativeReturn));
  const bestSharpe = managerRows.reduce<ManagerSummary | null>((best, manager) => {
    if (!best || manager.sharpe > best.sharpe) {
      return manager;
    }
    return best;
  }, null);

  return (
    <div className="atlas-page">
      <section className="atlas-shell atlas-page-hero">
        <div className="panel atlas-section-block">
          <div className="atlas-section-heading">
            <span className="atlas-kicker">Backend-First Entry</span>
            <h1 className="home-entry-title">
              Research engine, manager marketplace, and paid delivery in one clear
              starting point.
            </h1>
            <p className="atlas-page-subcopy">
              This entry page now mirrors the real project structure: backend strategy
              execution, API service delivery, and a straightforward frontend surface
              for browsing managers and purchasing research.
            </p>
          </div>

          <div className="cta-row">
            <Link href="/managers" className="button-link primary">
              Open managers
            </Link>
            <Link href="/opportunities" className="button-link">
              Open opportunities
            </Link>
            <Link href="/leaderboard" className="button-link button-link-ghost">
              View leaderboard
            </Link>
            <a
              href="http://localhost:3001/docs"
              target="_blank"
              rel="noreferrer"
              className="button-link button-link-ghost"
            >
              API docs
            </a>
          </div>

          <div className="atlas-stat-band">
            <div className="hero-proof-card">
              <span className="hero-proof-card__label">Managers live</span>
              <strong className="hero-proof-card__value">{managerRows.length || '--'}</strong>
            </div>
            <div className="hero-proof-card">
              <span className="hero-proof-card__label">Opportunities live</span>
              <strong className="hero-proof-card__value">
                {opportunityRows.length || '--'}
              </strong>
            </div>
            <div className="hero-proof-card">
              <span className="hero-proof-card__label">Service SKUs</span>
              <strong className="hero-proof-card__value">{serviceCount || '--'}</strong>
            </div>
            <div className="hero-proof-card">
              <span className="hero-proof-card__label">Average return</span>
              <strong className="hero-proof-card__value">
                {averageReturn === null ? '--' : formatReturn(averageReturn)}
              </strong>
            </div>
          </div>
        </div>

        <div className="atlas-hero-side">
          <div className="feature-panel">
            <div className="atlas-section-heading">
              <span className="atlas-kicker">Live Snapshot</span>
              <h2 className="atlas-section-title">Current manager and inventory feed</h2>
            </div>

            <div className="atlas-card-split">
              <div className="atlas-subpanel">
                <span className="atlas-inline-label">Lead manager</span>
                <strong>{leadManager?.name ?? 'No manager feed yet'}</strong>
                <p className="home-entry-note">
                  {leadManager?.description ??
                    'Start the API and data pipeline to populate manager snapshots.'}
                </p>
                <div className="home-entry-metrics">
                  <span>{formatMoney(leadManager?.latestNav)} nav</span>
                  <span>{formatReturn(leadManager?.cumulativeReturn)} return</span>
                  <span>{bestSharpe ? bestSharpe.sharpe.toFixed(2) : '--'} sharpe</span>
                </div>
              </div>

              <div className="atlas-subpanel">
                <span className="atlas-inline-label">Lead opportunity</span>
                <strong>{leadOpportunity?.title ?? 'No opportunity feed yet'}</strong>
                <p className="home-entry-note">
                  {leadOpportunity?.summary ??
                    'The opportunity tape appears here once the pipeline writes live inventory.'}
                </p>
                <div className="home-entry-metrics">
                  <span>{formatMoney(leadOpportunity?.currentPrice)} price</span>
                  <span>{formatPercent(leadOpportunity?.priceChange24h)} 24h</span>
                  <span>{leadOpportunity?.type ?? '--'} type</span>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-panel feature-panel-accent">
            <div className="atlas-section-heading">
              <span className="atlas-kicker">Workflow</span>
              <h2 className="atlas-section-title">The entry page follows the actual system flow</h2>
            </div>
            <div className="home-entry-stack">
              {workflowSteps.map((step) => (
                <div key={step.step} className="atlas-subpanel">
                  <div className="atlas-list-row">
                    <span className="atlas-inline-label">Step {step.step}</span>
                    <strong>{step.title}</strong>
                  </div>
                  <p className="home-entry-note">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="atlas-shell home-feature-grid">
        <div className="feature-panel">
          <div className="atlas-section-heading">
            <span className="atlas-kicker">Backend Core</span>
            <h2 className="atlas-section-title">
              The frontend now points at the implementation layers that actually run the
              product.
            </h2>
          </div>

          <div className="atlas-card-grid atlas-card-grid-three">
            {backendModules.map((module) => (
              <div key={module.label} className="atlas-subpanel">
                <span className="atlas-inline-label">{module.label}</span>
                <strong>{module.title}</strong>
                <p className="home-entry-note">{module.copy}</p>
                <span className="pill">{module.footnote}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="feature-panel">
          <div className="atlas-section-heading">
            <span className="atlas-kicker">Product Surfaces</span>
            <h2 className="atlas-section-title">
              Routes are presented as usable entry points instead of visual experiments.
            </h2>
          </div>

          <div className="home-entry-stack">
            {routeEntries.map((route) => (
              <Link key={route.href} href={route.href} className="home-entry-row">
                <div className="home-entry-copy">
                  <span className="atlas-inline-label">{route.meta}</span>
                  <strong>{route.title}</strong>
                  <p className="home-entry-note">{route.copy}</p>
                </div>
                <span className="pill">{route.href}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="atlas-shell home-bottom-grid">
        <div className="feature-panel">
          <div className="atlas-section-heading">
            <span className="atlas-kicker">Managers Live Now</span>
            <h2 className="atlas-section-title">Open a desk directly from the current feed.</h2>
          </div>

          {managerRows.length ? (
            <div className="home-entry-stack">
              {managerRows.slice(0, 4).map((manager) => (
                <Link key={manager.id} href={`/managers/${manager.slug}`} className="home-entry-row">
                  <div className="home-entry-copy">
                    <span className="atlas-inline-label">{manager.style}</span>
                    <strong>{manager.name}</strong>
                    <p className="home-entry-note">{manager.description}</p>
                  </div>
                  <div className="home-entry-metrics">
                    <span>{formatMoney(manager.latestNav)} nav</span>
                    <span>{formatReturn(manager.cumulativeReturn)} return</span>
                    <span>{formatPercent(manager.hitRate * 100)} hit rate</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="error-card">
              No live managers yet. Start the API and run the pipeline to populate this view.
            </div>
          )}
        </div>

        <div className="feature-panel">
          <div className="atlas-section-heading">
            <span className="atlas-kicker">Opportunity Tape</span>
            <h2 className="atlas-section-title">
              The homepage now links straight into the current research inventory.
            </h2>
          </div>

          {opportunityRows.length ? (
            <div className="home-entry-stack">
              {opportunityRows.slice(0, 4).map((opportunity) => (
                <Link
                  key={opportunity.id}
                  href={`/opportunities/${opportunity.slug}`}
                  className="home-entry-row"
                >
                  <div className="home-entry-copy">
                    <span className="atlas-inline-label">
                      {opportunity.strongestSignal?.name.replace(/_/g, ' ') ??
                        opportunity.type}
                    </span>
                    <strong>{opportunity.title}</strong>
                    <p className="home-entry-note">
                      {opportunity.summary ?? opportunity.description ?? 'No summary available.'}
                    </p>
                  </div>
                  <div className="home-entry-metrics">
                    <span>{formatMoney(opportunity.currentPrice)} price</span>
                    <span>{formatPercent(opportunity.priceChange24h)} 24h</span>
                    <span>{opportunity.symbol ?? '--'} symbol</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="error-card">
              No live opportunities yet. The backend inventory will surface here once synced.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function average(values: number[]) {
  if (!values.length) {
    return null;
  }

  return values.reduce((total, value) => total + value, 0) / values.length;
}
