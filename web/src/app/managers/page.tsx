import Link from 'next/link';
import { AssetAvatar } from '../../components/asset-avatar';
import { PositionStack } from '../../components/position-stack';
import { SignalBars } from '../../components/signal-bars';
import { Sparkline } from '../../components/sparkline';
import {
  formatMoney,
  formatPercent,
  formatReturn,
  getSignedClass,
  safeFetchApi,
} from '../../lib/api';
import type {
  ManagerLeaderboardEntry,
  ManagerSummary,
} from '../../lib/types';

export const dynamic = 'force-dynamic';

export default async function ManagersPage() {
  const [managers, leaderboard] = await Promise.all([
    safeFetchApi<ManagerSummary[]>('/managers'),
    safeFetchApi<ManagerLeaderboardEntry[]>('/leaderboard/managers'),
  ]);

  const managerRows = managers ?? [];
  const leaderboardRows = leaderboard ?? [];
  const leadManager = managerRows[0] ?? null;
  const averageReturn = average(managerRows.map((manager) => manager.cumulativeReturn));
  const averageRating = average(
    managerRows
      .map((manager) => manager.averageRating)
      .filter((value): value is number => typeof value === 'number'),
  );
  const serviceModes = Array.from(
    new Set(managerRows.flatMap((manager) => manager.marketplace.serviceModes)),
  );

  return (
    <div className="atlas-page">
      <section className="atlas-shell atlas-page-hero">
        <div className="panel atlas-hero-panel">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Managers</span>
          </div>
          <span className="atlas-kicker">Service desk directory</span>
          <h1 className="atlas-page-title">
            Pick a desk by performance, reputation, and what work it can sell.
          </h1>
          <p className="atlas-page-copy">
            Managers are no longer presented like static personas. Each entry now reads
            as an operating desk with priced services, settlement rails, position bias,
            and a trust surface users can inspect before paying.
          </p>
          <div className="atlas-actions">
            <Link href="/leaderboard" className="button-link primary">
              Compare desks
            </Link>
            <Link href="/opportunities" className="button-link">
              Open research tape
            </Link>
          </div>
          <div className="atlas-stat-band">
            <div className="atlas-stat-tile">
              <span className="atlas-stat-label">Managers live</span>
              <strong className="atlas-stat-value">{managerRows.length || '--'}</strong>
            </div>
            <div className="atlas-stat-tile">
              <span className="atlas-stat-label">Avg cumulative</span>
              <strong className="atlas-stat-value">
                {averageReturn === null ? '--' : formatReturn(averageReturn)}
              </strong>
            </div>
            <div className="atlas-stat-tile">
              <span className="atlas-stat-label">Avg rating</span>
              <strong className="atlas-stat-value">
                {averageRating === null ? '--' : averageRating.toFixed(2)}
              </strong>
            </div>
            <div className="atlas-stat-tile">
              <span className="atlas-stat-label">Service modes</span>
              <strong className="atlas-stat-value">{serviceModes.length || '--'}</strong>
            </div>
          </div>
        </div>

        <div className="atlas-hero-side">
          <div className="panel atlas-spotlight-panel">
            <div className="atlas-inline-row">
              <span className="atlas-inline-label">Lead desk</span>
              <span className="chip">{leadManager?.riskProfile ?? 'pending'}</span>
            </div>
            <h2>{leadManager?.name ?? 'No live manager feed yet'}</h2>
            <p className="muted">
              {leadManager?.description ??
                'Start the API and rerun the pipeline to populate manager snapshots.'}
            </p>
            {leadManager ? (
              <>
                <Sparkline
                  className="atlas-card-sparkline"
                  points={leadManager.performanceSeries.map((point) => point.nav)}
                  height={122}
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

          <div className="panel atlas-ranking-panel">
            <div className="atlas-inline-row">
              <span className="atlas-inline-label">Top ranks</span>
              <Link href="/leaderboard" className="atlas-inline-link">
                Full leaderboard
              </Link>
            </div>
            {leaderboardRows.length ? (
              <div className="atlas-rank-list">
                {leaderboardRows.slice(0, 3).map((entry, index) => (
                  <Link
                    key={entry.slug}
                    href={`/managers/${entry.slug}`}
                    className="atlas-rank-row"
                  >
                    <div className="atlas-rank-main">
                      <span className="atlas-rank-index">0{index + 1}</span>
                      <div>
                        <strong>{entry.name}</strong>
                        <div className="muted">Sharpe {entry.sharpe.toFixed(2)}</div>
                      </div>
                    </div>
                    <span className={getSignedClass(entry.cumulativeReturn)}>
                      {formatReturn(entry.cumulativeReturn)}
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="muted">Ranking data is not available yet.</div>
            )}
          </div>
        </div>
      </section>

      {managerRows.length ? (
        <section className="atlas-shell atlas-section-block">
          <div className="atlas-section-heading atlas-heading-row">
            <div>
              <span className="atlas-kicker">Marketplace desks</span>
              <h2 className="atlas-section-title">
                Live manager cards now emphasize what each desk can actually deliver.
              </h2>
            </div>
            <div className="tag-row">
              {serviceModes.slice(0, 4).map((service) => (
                <span key={service} className="chip">
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="atlas-card-grid atlas-card-grid-three">
            {managerRows.map((manager, index) => {
              const featuredOffer =
                manager.marketplace.serviceCatalog.find((offer) => offer.featured) ??
                manager.marketplace.serviceCatalog[0] ??
                null;

              return (
                <Link
                  key={manager.slug}
                  href={`/managers/${manager.slug}`}
                  className="panel atlas-manager-card-v2"
                >
                  <div className="atlas-inline-row">
                    <span className="atlas-inline-label">Desk {index + 1}</span>
                    <span className="chip">{manager.style}</span>
                  </div>

                  <div className="atlas-title-row">
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

                  <div className="atlas-inline-stats atlas-inline-stats-wrap">
                    <span>{formatMoney(manager.latestNav)} NAV</span>
                    <span className={getSignedClass(manager.cumulativeReturn)}>
                      {formatReturn(manager.cumulativeReturn)}
                    </span>
                    <span>{formatPercent(manager.cashWeight * 100)} cash</span>
                    <span>{formatPercent(manager.hitRate * 100)} hit rate</span>
                  </div>

                  <Sparkline
                    className="atlas-card-sparkline"
                    points={manager.performanceSeries.map((point) => point.nav)}
                    height={128}
                    area={false}
                    tone={
                      manager.cumulativeReturn > 0
                        ? 'positive'
                        : manager.cumulativeReturn < 0
                          ? 'negative'
                          : 'neutral'
                    }
                  />

                  <div className="atlas-card-split">
                    <div className="atlas-subpanel">
                      <div className="atlas-inline-row">
                        <span className="atlas-inline-label">Service rail</span>
                        <span className="pill">
                          {featuredOffer?.asset ?? manager.marketplace.settlementAsset}
                        </span>
                      </div>
                      {manager.marketplace.serviceCatalog.slice(0, 3).map((service) => (
                        <div
                          key={`${manager.slug}-${service.kind}`}
                          className="atlas-offer-row"
                        >
                          <span>{service.label}</span>
                          <strong>{formatMoney(service.amountUsd)}</strong>
                        </div>
                      ))}
                    </div>

                    <div className="atlas-subpanel">
                      <div className="atlas-inline-row">
                        <span className="atlas-inline-label">Signal bias</span>
                        <span className="chip">{manager.riskProfile}</span>
                      </div>
                      <SignalBars items={manager.signalMix.slice(0, 4)} />
                    </div>
                  </div>

                  <div className="atlas-subpanel">
                    <div className="atlas-inline-row">
                      <span className="atlas-inline-label">Top exposures</span>
                      <span className="chip">{manager.topPositions.length} positions</span>
                    </div>
                    <PositionStack positions={manager.topPositions.slice(0, 4)} />
                  </div>

                  <div className="atlas-card-footer-row">
                    <span>
                      {manager.marketplace.paymentRail} on {manager.marketplace.settlementNetwork}
                    </span>
                    <strong>Open desk</strong>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      ) : (
        <div className="atlas-shell">
          <div className="error-card">
            Manager data is not available yet. Start the API, run `npm run pipeline`, and
            refresh this page.
          </div>
        </div>
      )}
    </div>
  );
}

function average(values: number[]) {
  if (!values.length) {
    return null;
  }

  return values.reduce((total, value) => total + value, 0) / values.length;
}
