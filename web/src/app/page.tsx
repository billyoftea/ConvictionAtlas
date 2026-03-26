import Link from 'next/link';
import { Sparkline } from '../components/sparkline';
import {
  formatMoney,
  formatPercent,
  formatReturn,
  safeFetchApi,
} from '../lib/api';
import type { ManagerSummary, OpportunitySummary } from '../lib/types';

export const dynamic = 'force-dynamic';

const productRails = [
  {
    label: 'Desk Shares',
    title: 'Direct Nile USDT share purchase',
    copy: 'The core flow is now explicit: create an order, transfer on Nile, and record the purchase against the manager.',
  },
  {
    label: 'Paid Research',
    title: 'Memo unlocks and custom requests',
    copy: 'x402 still powers the paid research layer, but it now sits under the manager instead of replacing the product.',
  },
  {
    label: 'Research Tape',
    title: 'Backend-fed opportunity inventory',
    copy: 'Opportunities remain the underlying feed, but they support the desk economy instead of dominating it.',
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
  const heroManagers = managerRows.slice(0, 4);
  const shareDeskCount = managerRows.filter(
    (manager) => manager.marketplace.shareOffering.enabled,
  ).length;
  const serviceCount = managerRows.reduce(
    (total, manager) => total + manager.marketplace.serviceCatalog.length,
    0,
  );
  const averageReturn = average(
    managerRows.map((manager) => manager.cumulativeReturn),
  );

  return (
    <div className="atlas-page">
      <section className="atlas-shell atlas-page-hero">
        <div className="panel atlas-section-block">
          <div className="atlas-section-heading">
            <span className="atlas-kicker">Manager Marketplace</span>
            <h1 className="home-entry-title">
              Buy a manager, not just a dashboard.
            </h1>
            <p className="atlas-page-subcopy">
              Conviction Atlas is now centered on live manager desks. Users can
              inspect a desk, buy research, or send Nile testnet USDT to
              purchase that manager
              {"'"}s shares from the same product surface.
            </p>
          </div>

          <div className="cta-row">
            <Link href="/managers" className="button-link primary">
              Open managers
            </Link>
            {leadManager ? (
              <Link
                href={`/managers/${leadManager.slug}`}
                className="button-link"
              >
                Buy lead desk
              </Link>
            ) : null}
            <Link
              href="/opportunities"
              className="button-link button-link-ghost"
            >
              Open research tape
            </Link>
          </div>

          <div className="atlas-stat-band">
            <div className="hero-proof-card">
              <span className="hero-proof-card__label">Managers live</span>
              <strong className="hero-proof-card__value">
                {managerRows.length || '--'}
              </strong>
            </div>
            <div className="hero-proof-card">
              <span className="hero-proof-card__label">Share desks</span>
              <strong className="hero-proof-card__value">
                {shareDeskCount || '--'}
              </strong>
            </div>
            <div className="hero-proof-card">
              <span className="hero-proof-card__label">Service SKUs</span>
              <strong className="hero-proof-card__value">
                {serviceCount || '--'}
              </strong>
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
          {heroManagers.length ? (
            <div className="hero-pnl-grid">
              {heroManagers.map((manager) => (
                <Link
                  key={manager.id}
                  href={`/managers/${manager.slug}`}
                  className="hero-pnl-card"
                >
                  <div className="atlas-inline-row">
                    <span className="atlas-inline-label">{manager.style}</span>
                    <span className="chip">
                      {manager.marketplace.shareOffering.shareSymbol}
                    </span>
                  </div>

                  <div className="home-entry-copy">
                    <strong>{manager.name}</strong>
                    <p className="home-entry-note">
                      {formatMoney(manager.marketplace.shareOffering.priceUsd)} / share
                    </p>
                  </div>

                  <Sparkline
                    className="hero-pnl-sparkline"
                    points={manager.performanceSeries.map((point) => point.nav)}
                    height={124}
                    area={false}
                    tone={
                      manager.cumulativeReturn > 0
                        ? 'positive'
                        : manager.cumulativeReturn < 0
                          ? 'negative'
                          : 'neutral'
                    }
                  />

                  <div className="hero-pnl-metrics">
                    <span>{formatMoney(manager.latestNav)} nav</span>
                    <span>{formatReturn(manager.cumulativeReturn)}</span>
                    <span>{formatPercent(manager.hitRate * 100)} hit rate</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="error-card">
              Manager feed is not available yet. Start the API and data pipeline to
              populate the hero PnL grid.
            </div>
          )}
        </div>
      </section>

      <section className="atlas-shell atlas-section-block">
        <div className="atlas-section-heading atlas-heading-row">
          <div>
            <span className="atlas-kicker">Live desks</span>
            <h2 className="atlas-section-title">
              Each manager is a product surface with pricing, share issuance,
              and a clear reason to buy.
            </h2>
          </div>
          <Link href="/managers" className="button-link">
            Browse full directory
          </Link>
        </div>

        {managerRows.length ? (
          <div className="atlas-card-grid atlas-card-grid-two home-manager-grid">
            {managerRows.slice(0, 4).map((manager) => {
              const featuredOffer =
                manager.marketplace.serviceCatalog.find(
                  (offer) => offer.featured,
                ) ??
                manager.marketplace.serviceCatalog[0] ??
                null;

              return (
                <Link
                  key={manager.id}
                  href={`/managers/${manager.slug}`}
                  className="panel manager-market-card"
                >
                  <div className="atlas-inline-row">
                    <span className="atlas-inline-label">{manager.style}</span>
                    <span className="chip">{manager.riskProfile}</span>
                  </div>

                  <div className="home-entry-copy">
                    <strong>{manager.name}</strong>
                    <p className="home-entry-note">{manager.description}</p>
                  </div>

                  <div className="share-proof-strip">
                    <div className="atlas-subpanel">
                      <span className="atlas-inline-label">Desk share</span>
                      <strong>
                        {formatMoney(
                          manager.marketplace.shareOffering.priceUsd,
                        )}{' '}
                        / {manager.marketplace.shareOffering.shareSymbol}
                      </strong>
                      <div className="home-entry-metrics">
                        <span>{manager.marketplace.shareOffering.network}</span>
                        <span>{manager.marketplace.shareOffering.asset}</span>
                      </div>
                    </div>

                    <div className="atlas-subpanel">
                      <span className="atlas-inline-label">
                        Featured service
                      </span>
                      <strong>
                        {featuredOffer?.label ?? 'Service catalog pending'}
                      </strong>
                      <div className="home-entry-metrics">
                        <span>
                          {formatMoney(featuredOffer?.amountUsd ?? null)}
                        </span>
                        <span>
                          {featuredOffer?.asset ??
                            manager.marketplace.settlementAsset}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="atlas-inline-stats atlas-inline-stats-wrap">
                    <span>{formatMoney(manager.latestNav)} nav</span>
                    <span>{formatReturn(manager.cumulativeReturn)} return</span>
                    <span>{formatPercent(manager.hitRate * 100)} hit rate</span>
                    <span>{manager.marketplace.identityStatus}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="error-card">
            No live managers yet. Start the API and run the pipeline to populate
            this view.
          </div>
        )}
      </section>

      <section className="atlas-shell home-feature-grid">
        <div className="feature-panel">
          <div className="atlas-section-heading">
            <span className="atlas-kicker">Product rails</span>
            <h2 className="atlas-section-title">
              The product now reads like a marketplace, not a backend diagram.
            </h2>
          </div>

          <div className="atlas-card-grid atlas-card-grid-three">
            {productRails.map((rail) => (
              <div key={rail.label} className="atlas-subpanel">
                <span className="atlas-inline-label">{rail.label}</span>
                <strong>{rail.title}</strong>
                <p className="home-entry-note">{rail.copy}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="feature-panel">
          <div className="atlas-section-heading">
            <span className="atlas-kicker">Current tape</span>
            <h2 className="atlas-section-title">
              Opportunities still matter, but they serve the manager layer.
            </h2>
          </div>

          {leadOpportunity ? (
            <div className="home-entry-stack">
              <Link
                href={`/opportunities/${leadOpportunity.slug}`}
                className="home-entry-row"
              >
                <div className="home-entry-copy">
                  <span className="atlas-inline-label">
                    {leadOpportunity.strongestSignal?.name.replace(/_/g, ' ') ??
                      leadOpportunity.type}
                  </span>
                  <strong>{leadOpportunity.title}</strong>
                  <p className="home-entry-note">
                    {leadOpportunity.summary ??
                      leadOpportunity.description ??
                      'No summary available.'}
                  </p>
                </div>
                <div className="home-entry-metrics">
                  <span>{formatMoney(leadOpportunity.currentPrice)} price</span>
                  <span>
                    {formatPercent(leadOpportunity.priceChange24h)} 24h
                  </span>
                  <span>{leadOpportunity.symbol ?? '--'} symbol</span>
                </div>
              </Link>
              <div className="atlas-subpanel">
                <span className="atlas-inline-label">Backend role</span>
                <p className="home-entry-note">
                  The research engine still drives market intake and signal
                  generation. It just no longer occupies the first product
                  surface the user sees.
                </p>
              </div>
            </div>
          ) : (
            <div className="error-card">
              No opportunity feed yet. The backend inventory will appear here
              once synced.
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
