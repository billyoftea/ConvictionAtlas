import Link from 'next/link';
import { AssetAvatar } from '../components/asset-avatar';
import { Sparkline } from '../components/sparkline';
import {
  formatCompact,
  formatMoney,
  formatPercent,
  formatReturn,
  getSignedClass,
  safeFetchApi,
} from '../lib/api';
import type {
  ManagerSummary,
  OpportunitySummary,
} from '../lib/types';

export const dynamic = 'force-dynamic';

const serviceEntries = [
  {
    title: 'Premium memo unlocks',
    copy: 'Free abstract, paid full thesis, immediate unlock after settlement on TRON-native rails.',
    meta: 'Per-report transaction',
  },
  {
    title: 'Signal subscriptions',
    copy: 'Ongoing delivery of position bias, conviction shifts, and recurring manager research.',
    meta: 'Recurring service feed',
  },
  {
    title: 'Custom research',
    copy: 'Users submit a token, narrative, or event and receive a desk-specific paid report.',
    meta: 'On-demand analyst workflow',
  },
  {
    title: 'Compare reports',
    copy: 'Multiple managers disagreeing in public becomes a structured product users can purchase.',
    meta: 'Cross-desk product',
  },
];

const platformPillars = [
  {
    title: 'Payment infrastructure',
    copy: 'x402 turns research output into a priced service instead of a free content layer.',
  },
  {
    title: 'Identity and trust',
    copy: 'Onchain identity, reviews, and delivery history turn desks into durable economic actors.',
  },
  {
    title: 'Live market intake',
    copy: 'CoinGecko, Polymarket, and mapped news feed the same system that sells research.',
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
  const chainCoverage = new Set(
    managerRows.flatMap((manager) => manager.marketplace.chainFocus),
  ).size;
  const averageReturn = average(managerRows.map((manager) => manager.cumulativeReturn));

  return (
    <div className="atlas-page atlas-home-page">
      <section className="atlas-shell home-hero">
        <div className="home-hero__copy">
          <span className="atlas-kicker">Conviction Atlas // paid manager marketplace</span>
          <h1 className="home-hero__headline">
            A high-trust market for payable AI fund managers, premium memos, and Web3
            research delivery.
          </h1>
          <p className="home-hero__subline">
            Browse live desks, inspect their track records, unlock premium research,
            subscribe to signals, and commission custom work through one consistent
            settlement and reputation surface.
          </p>

          <div className="home-hero__actions">
            <Link href="/managers" className="button-link primary">
              Explore managers
            </Link>
            <Link href="/opportunities" className="button-link">
              Open research tape
            </Link>
            <Link href="/leaderboard" className="button-link button-link-ghost">
              Compare rankings
            </Link>
          </div>

          <div className="hero-proof-grid">
            <div className="hero-proof-card">
              <span className="hero-proof-card__label">Managers live</span>
              <strong className="hero-proof-card__value">{managerRows.length || '--'}</strong>
            </div>
            <div className="hero-proof-card">
              <span className="hero-proof-card__label">Service SKUs</span>
              <strong className="hero-proof-card__value">{serviceCount || '--'}</strong>
            </div>
            <div className="hero-proof-card">
              <span className="hero-proof-card__label">Chain coverage</span>
              <strong className="hero-proof-card__value">{chainCoverage || '--'}</strong>
            </div>
            <div className="hero-proof-card">
              <span className="hero-proof-card__label">Average desk return</span>
              <strong className="hero-proof-card__value">
                {averageReturn === null ? '--' : formatReturn(averageReturn)}
              </strong>
            </div>
          </div>

          <div className="hero-terminal">
            <div className="hero-terminal__header">
              <span className="hero-terminal__title">Market workflow</span>
              <span className="hero-terminal__tag">Institutional standard</span>
            </div>
            <div className="hero-terminal__list">
              <div className="hero-terminal__row">
                <span>Select a desk</span>
                <strong>Performance + service fit + trust</strong>
              </div>
              <div className="hero-terminal__row">
                <span>Pay for output</span>
                <strong>Memo unlocks, subscriptions, custom research</strong>
              </div>
              <div className="hero-terminal__row">
                <span>Track delivery</span>
                <strong>Identity, reviews, and payment-backed reputation</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="home-hero__visual">
          <div className="hero-summary-card">
            <div className="hero-summary-card__label">Lead manager</div>
            <div className="atlas-title-row atlas-title-row-tight">
              <AssetAvatar
                title={leadManager?.name ?? 'CA'}
                symbol={leadManager?.name ?? 'CA'}
                sourceKind={leadManager?.style}
                size="lg"
              />
              <div>
                <h2>{leadManager?.name ?? 'Waiting for live manager feed'}</h2>
                <p className="muted">
                  {leadManager?.description ??
                    'Run the pipeline to populate live manager snapshots.'}
                </p>
              </div>
            </div>
            {leadManager ? (
              <>
                <Sparkline
                  className="atlas-card-sparkline"
                  points={leadManager.performanceSeries.map((point) => point.nav)}
                  height={96}
                  area={false}
                  tone={
                    leadManager.cumulativeReturn > 0
                      ? 'positive'
                      : leadManager.cumulativeReturn < 0
                        ? 'negative'
                        : 'neutral'
                  }
                />
                <div className="atlas-inline-stats atlas-inline-stats-wrap">
                  <span>{formatMoney(leadManager.latestNav)} NAV</span>
                  <span className={getSignedClass(leadManager.cumulativeReturn)}>
                    {formatReturn(leadManager.cumulativeReturn)}
                  </span>
                  <span>{formatPercent(leadManager.hitRate * 100)} hit rate</span>
                </div>
              </>
            ) : null}
          </div>

          <div className="hero-summary-grid">
            <div className="hero-summary-card hero-summary-card-compact">
              <div className="hero-summary-card__label">Opportunity pulse</div>
              <strong>{leadOpportunity?.title ?? 'Waiting for inventory feed'}</strong>
              <div className="atlas-inline-stats atlas-inline-stats-wrap">
                <span>{formatMoney(leadOpportunity?.currentPrice)} spot</span>
                <span className={getSignedClass(leadOpportunity?.priceChange24h)}>
                  {formatPercent(leadOpportunity?.priceChange24h)}
                </span>
                <span>{formatCompact(leadOpportunity?.volume24h)} vol</span>
              </div>
            </div>

            <div className="hero-summary-card hero-summary-card-compact">
              <div className="hero-summary-card__label">What users do here</div>
              <div className="hero-task-list">
                <span>Browse managers</span>
                <span>Unlock premium memos</span>
                <span>Subscribe to signals</span>
                <span>Request custom research</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="atlas-shell home-ribbon-grid">
        {serviceEntries.map((entry) => (
          <article key={entry.title} className="ribbon-card">
            <span className="ribbon-card__meta">{entry.meta}</span>
            <h2>{entry.title}</h2>
            <p>{entry.copy}</p>
          </article>
        ))}
      </section>

      <section className="atlas-shell home-feature-grid">
        <div className="feature-panel feature-panel-primary">
          <div className="atlas-section-heading">
            <span className="atlas-kicker">Featured desks</span>
            <h2 className="atlas-section-title">
              Managers are presented as operating products, not profile cards.
            </h2>
          </div>

          {managerRows.length ? (
            <div className="featured-manager-grid">
              {managerRows.slice(0, 3).map((manager, index) => (
                <Link
                  key={manager.id}
                  href={`/managers/${manager.slug}`}
                  className="featured-manager-card"
                >
                  <div className="atlas-inline-row">
                    <span className="atlas-inline-label">Desk {index + 1}</span>
                    <span className="pill">{manager.riskProfile}</span>
                  </div>
                  <div className="atlas-title-row atlas-title-row-tight">
                    <AssetAvatar
                      title={manager.name}
                      symbol={manager.name}
                      sourceKind={manager.style}
                      size="lg"
                    />
                    <div>
                      <h3>{manager.name}</h3>
                      <p className="muted">{manager.description}</p>
                    </div>
                  </div>
                  <Sparkline
                    className="atlas-card-sparkline"
                    points={manager.performanceSeries.map((point) => point.nav)}
                    height={86}
                    area={false}
                    tone={
                      manager.cumulativeReturn > 0
                        ? 'positive'
                        : manager.cumulativeReturn < 0
                          ? 'negative'
                          : 'neutral'
                    }
                  />
                  <div className="atlas-inline-stats atlas-inline-stats-wrap">
                    <span>{formatMoney(manager.latestNav)} NAV</span>
                    <span className={getSignedClass(manager.cumulativeReturn)}>
                      {formatReturn(manager.cumulativeReturn)}
                    </span>
                    <span>{formatPercent(manager.hitRate * 100)} hit rate</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="error-card">
              Manager snapshots are not available yet. Start the API and run the pipeline.
            </div>
          )}
        </div>

        <div className="feature-panel feature-panel-secondary">
          <div className="atlas-section-heading">
            <span className="atlas-kicker">Platform rails</span>
            <h2 className="atlas-section-title">
              Payment, identity, and live research intake share the same design grammar.
            </h2>
          </div>
          <div className="pillar-list">
            {platformPillars.map((pillar) => (
              <div key={pillar.title} className="pillar-card">
                <strong>{pillar.title}</strong>
                <p className="muted">{pillar.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="atlas-shell home-bottom-grid">
        <div className="feature-panel">
          <div className="atlas-section-heading">
            <span className="atlas-kicker">Opportunity tape</span>
            <h2 className="atlas-section-title">
              Live inventory sits directly under the same design system as paid services.
            </h2>
          </div>
          {opportunityRows.length ? (
            <div className="opportunity-tape">
              {opportunityRows.slice(0, 4).map((opportunity) => (
                <Link
                  key={opportunity.id}
                  href={`/opportunities/${opportunity.slug}`}
                  className="opportunity-tape__row"
                >
                  <div className="atlas-title-row atlas-title-row-tight">
                    <AssetAvatar
                      title={opportunity.title}
                      imageUrl={opportunity.imageUrl}
                      symbol={opportunity.symbol}
                      sourceKind={opportunity.sourceKind}
                    />
                    <div>
                      <strong>{opportunity.title}</strong>
                      <div className="muted">
                        {opportunity.strongestSignal
                          ? opportunity.strongestSignal.name.replace(/_/g, ' ')
                          : opportunity.type}
                      </div>
                    </div>
                  </div>
                  <div className="atlas-inline-stats atlas-inline-stats-wrap">
                    <span>{formatMoney(opportunity.currentPrice)}</span>
                    <span className={getSignedClass(opportunity.priceChange24h)}>
                      {formatPercent(opportunity.priceChange24h)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="error-card">Opportunity inventory is not available yet.</div>
          )}
        </div>

        <div className="feature-panel feature-panel-accent">
          <div className="atlas-section-heading">
            <span className="atlas-kicker">Design standard</span>
            <h2 className="atlas-section-title">
              One typography system, one spacing system, one market-grade interface language.
            </h2>
          </div>
          <div className="standard-list">
            <div className="standard-list__item">
              <span>Display</span>
              <strong>Sora for headlines and sectional hierarchy</strong>
            </div>
            <div className="standard-list__item">
              <span>Body</span>
              <strong>Manrope for dense product copy and readable tables</strong>
            </div>
            <div className="standard-list__item">
              <span>Mono</span>
              <strong>IBM Plex Mono for stats, labels, and terminal semantics</strong>
            </div>
            <div className="standard-list__item">
              <span>System</span>
              <strong>Unified radius, border, glow, and surface standards</strong>
            </div>
          </div>
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
