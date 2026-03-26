import Link from 'next/link';
import { AssetAvatar } from '../../components/asset-avatar';
import {
  formatCompact,
  formatDate,
  formatMoney,
  formatPercent,
  getSignedClass,
  safeFetchApi,
} from '../../lib/api';
import type {
  OpportunityLeaderboardEntry,
  OpportunitySummary,
} from '../../lib/types';

export const dynamic = 'force-dynamic';

export default async function OpportunitiesPage() {
  const [opportunities, leaderboard] = await Promise.all([
    safeFetchApi<OpportunitySummary[]>('/opportunities'),
    safeFetchApi<OpportunityLeaderboardEntry[]>('/leaderboard/opportunities'),
  ]);

  const rows = opportunities ?? [];
  const leaderboardRows = leaderboard ?? [];
  const tokenCount = rows.filter((row) => row.type === 'TOKEN').length;
  const marketCount = rows.filter((row) => row.type === 'PREDICTION_MARKET').length;
  const leadOpportunity = rows[0] ?? null;
  const averageConviction = average(
    leaderboardRows.map((row) => row.convictionAverage),
  );

  return (
    <div className="atlas-page">
      <section className="atlas-shell atlas-page-hero">
        <div className="panel atlas-hero-panel">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Opportunities</span>
          </div>
          <span className="atlas-kicker">Research inventory</span>
          <h1 className="atlas-page-title">
            The intake layer that feeds premium memos, signal desks, and custom work.
          </h1>
          <p className="atlas-page-copy">
            Opportunities are no longer displayed as flat cards. Each row now reads like
            a tradeable research object with source lineage, manager consensus, and signal
            context that can lead directly into paid output.
          </p>
          <div className="atlas-actions">
            <Link href="/leaderboard" className="button-link primary">
              Compare conviction
            </Link>
            <Link href="/managers" className="button-link">
              Browse desks
            </Link>
          </div>
          <div className="atlas-stat-band">
            <div className="atlas-stat-tile">
              <span className="atlas-stat-label">Total rows</span>
              <strong className="atlas-stat-value">{rows.length || '--'}</strong>
            </div>
            <div className="atlas-stat-tile">
              <span className="atlas-stat-label">Tokens</span>
              <strong className="atlas-stat-value">{tokenCount || '--'}</strong>
            </div>
            <div className="atlas-stat-tile">
              <span className="atlas-stat-label">Prediction markets</span>
              <strong className="atlas-stat-value">{marketCount || '--'}</strong>
            </div>
            <div className="atlas-stat-tile">
              <span className="atlas-stat-label">Avg conviction</span>
              <strong className="atlas-stat-value">
                {averageConviction === null ? '--' : averageConviction.toFixed(3)}
              </strong>
            </div>
          </div>
        </div>

        <div className="atlas-hero-side">
          <div className="panel atlas-spotlight-panel">
            <div className="atlas-inline-row">
              <span className="atlas-inline-label">Lead row</span>
              <span className="chip">{leadOpportunity?.sourceKind ?? 'pending'}</span>
            </div>
            <h2>{leadOpportunity?.title ?? 'No live research feed yet'}</h2>
            <p className="muted">
              {leadOpportunity?.summary ??
                'Opportunity data will appear here after ingestion populates the live inventory.'}
            </p>
            {leadOpportunity ? (
              <div className="atlas-inline-stats atlas-inline-stats-wrap">
                <span>{formatMoney(leadOpportunity.currentPrice)} spot</span>
                <span className={getSignedClass(leadOpportunity.priceChange24h)}>
                  {formatPercent(leadOpportunity.priceChange24h)}
                </span>
                <span>{formatCompact(leadOpportunity.volume24h)} vol</span>
              </div>
            ) : null}
          </div>

          <div className="panel atlas-ranking-panel">
            <div className="atlas-inline-row">
              <span className="atlas-inline-label">Highest conviction</span>
              <Link href="/leaderboard" className="atlas-inline-link">
                Open ranking layer
              </Link>
            </div>
            {leaderboardRows.length ? (
              <div className="atlas-rank-list">
                {leaderboardRows.slice(0, 3).map((entry, index) => (
                  <Link
                    key={entry.id}
                    href={`/opportunities/${entry.slug}`}
                    className="atlas-rank-row"
                  >
                    <div className="atlas-rank-main">
                      <span className="atlas-rank-index">0{index + 1}</span>
                      <div>
                        <strong>{entry.title}</strong>
                        <div className="muted">{entry.signalStrength.toFixed(3)} signal</div>
                      </div>
                    </div>
                    <span>{entry.convictionAverage.toFixed(3)}</span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="muted">Conviction ranking data is not available yet.</div>
            )}
          </div>
        </div>
      </section>

      {rows.length ? (
        <section className="atlas-shell atlas-section-block">
          <div className="atlas-section-heading atlas-heading-row">
            <div>
              <span className="atlas-kicker">Live inventory</span>
              <h2 className="atlas-section-title">
                Opportunity cards now surface signal, consensus, and source quality at a glance.
              </h2>
            </div>
            <div className="tag-row">
              <span className="chip">{tokenCount} token rows</span>
              <span className="chip">{marketCount} prediction rows</span>
            </div>
          </div>

          <div className="atlas-card-grid atlas-card-grid-three">
            {rows.map((opportunity) => (
              <Link
                key={opportunity.id}
                href={`/opportunities/${opportunity.slug}`}
                className="panel atlas-opportunity-card-v2"
              >
                <div className="atlas-inline-row">
                  <span className="atlas-inline-label">Source</span>
                  <div className="tag-row">
                    <span className="pill">{opportunity.sourceKind}</span>
                    <span className="chip">{opportunity.type}</span>
                  </div>
                </div>

                <div className="atlas-title-row">
                  <AssetAvatar
                    title={opportunity.title}
                    imageUrl={opportunity.imageUrl}
                    symbol={opportunity.symbol}
                    sourceKind={opportunity.sourceKind}
                    size="lg"
                  />
                  <div>
                    <h3>{opportunity.title}</h3>
                    <p className="muted">{opportunity.summary ?? opportunity.description}</p>
                  </div>
                </div>

                <div className="atlas-inline-stats atlas-inline-stats-wrap">
                  <span>{formatMoney(opportunity.currentPrice)} price</span>
                  <span className={getSignedClass(opportunity.priceChange24h)}>
                    {formatPercent(opportunity.priceChange24h)}
                  </span>
                  <span>{formatCompact(opportunity.volume24h)} volume</span>
                </div>

                <div className="atlas-card-split">
                  <div className="atlas-subpanel">
                    <div className="atlas-inline-row">
                      <span className="atlas-inline-label">Signal lead</span>
                      <span className="chip">
                        {opportunity.strongestSignal
                          ? opportunity.strongestSignal.direction.toLowerCase()
                          : 'pending'}
                      </span>
                    </div>
                    <div className="atlas-metric-pair">
                      <span>
                        {opportunity.strongestSignal
                          ? opportunity.strongestSignal.name.replace(/_/g, ' ')
                          : 'No computed signal'}
                      </span>
                      <strong>
                        {opportunity.strongestSignal
                          ? opportunity.strongestSignal.value.toFixed(3)
                          : '--'}
                      </strong>
                    </div>
                    <div className="atlas-metric-pair">
                      <span>Event date</span>
                      <strong>{formatDate(opportunity.eventDate)}</strong>
                    </div>
                  </div>

                  <div className="atlas-subpanel">
                    <div className="atlas-inline-row">
                      <span className="atlas-inline-label">Desk consensus</span>
                      <span className="chip">{opportunity.managers.length} desks</span>
                    </div>
                    <div className="tag-row">
                      {opportunity.managers.slice(0, 3).map((manager) => (
                        <span key={manager.slug} className="chip">
                          {manager.manager}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="atlas-card-footer-row">
                  <span>{opportunity.category ?? 'Uncategorized'}</span>
                  <strong>Open research row</strong>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <div className="atlas-shell">
          <div className="error-card">
            Opportunity data is not available yet. Run the backend and pipeline first.
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
