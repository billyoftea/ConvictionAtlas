import Link from 'next/link';
import { Sparkline } from '../../components/sparkline';
import {
  formatCompact,
  formatMoney,
  formatPercent,
  formatReturn,
  getSignedClass,
  safeFetchApi,
} from '../../lib/api';
import type {
  ManagerLeaderboardEntry,
  OpportunityLeaderboardEntry,
} from '../../lib/types';

export const dynamic = 'force-dynamic';

export default async function LeaderboardPage() {
  const [managerRows, opportunityRows] = await Promise.all([
    safeFetchApi<ManagerLeaderboardEntry[]>('/leaderboard/managers'),
    safeFetchApi<OpportunityLeaderboardEntry[]>('/leaderboard/opportunities'),
  ]);

  const managers = managerRows ?? [];
  const opportunities = opportunityRows ?? [];
  const leadManager = managers[0] ?? null;
  const leadOpportunity = opportunities[0] ?? null;

  return (
    <div className="atlas-page">
      <section className="atlas-shell atlas-page-hero">
        <div className="panel atlas-hero-panel">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Leaderboard</span>
          </div>
          <span className="atlas-kicker">Trust and ranking layer</span>
          <h1 className="atlas-page-title">
            Compare desks and opportunities through one cleaner market-wide ranking surface.
          </h1>
          <p className="atlas-page-copy">
            This page is now organized like a control room instead of a dump of tables.
            Performance, reputation, and conviction are surfaced as decision tools for
            users who want to spend money intelligently on manager output.
          </p>
          <div className="atlas-actions">
            <Link href="/managers" className="button-link primary">
              Open desks
            </Link>
            <Link href="/opportunities" className="button-link">
              Open research rows
            </Link>
          </div>
          <div className="atlas-stat-band">
            <div className="atlas-stat-tile">
              <span className="atlas-stat-label">Managers ranked</span>
              <strong className="atlas-stat-value">{managers.length || '--'}</strong>
            </div>
            <div className="atlas-stat-tile">
              <span className="atlas-stat-label">Opportunities ranked</span>
              <strong className="atlas-stat-value">{opportunities.length || '--'}</strong>
            </div>
            <div className="atlas-stat-tile">
              <span className="atlas-stat-label">Top manager return</span>
              <strong className="atlas-stat-value">
                {leadManager ? formatReturn(leadManager.cumulativeReturn) : '--'}
              </strong>
            </div>
            <div className="atlas-stat-tile">
              <span className="atlas-stat-label">Top conviction</span>
              <strong className="atlas-stat-value">
                {leadOpportunity ? leadOpportunity.convictionAverage.toFixed(3) : '--'}
              </strong>
            </div>
          </div>
        </div>

        <div className="atlas-hero-side">
          <div className="panel atlas-spotlight-panel">
            <div className="atlas-inline-row">
              <span className="atlas-inline-label">Manager leader</span>
              <Link href="/managers" className="atlas-inline-link">
                Browse desks
              </Link>
            </div>
            <h2>{leadManager?.name ?? 'No ranking feed yet'}</h2>
            <p className="muted">
              {leadManager
                ? `${formatMoney(leadManager.nav)} NAV with ${formatPercent(leadManager.hitRate * 100)} hit rate.`
                : 'Manager leaderboard data will appear here once the API is running.'}
            </p>
            {leadManager ? (
              <Sparkline
                className="atlas-card-sparkline"
                points={leadManager.performanceSeries.map((point) => point.nav)}
                height={118}
                area={false}
                tone={
                  leadManager.cumulativeReturn > 0
                    ? 'positive'
                    : leadManager.cumulativeReturn < 0
                      ? 'negative'
                      : 'neutral'
                }
              />
            ) : null}
          </div>

          <div className="panel atlas-ranking-panel">
            <div className="atlas-inline-row">
              <span className="atlas-inline-label">Opportunity leader</span>
              <Link href="/opportunities" className="atlas-inline-link">
                Open inventory
              </Link>
            </div>
            <h2>{leadOpportunity?.title ?? 'No opportunity rankings yet'}</h2>
            <p className="muted">
              {leadOpportunity
                ? `${formatMoney(leadOpportunity.currentPrice)} spot and ${leadOpportunity.signalStrength.toFixed(3)} signal strength.`
                : 'Opportunity conviction data will appear here after the pipeline runs.'}
            </p>
            {leadOpportunity ? (
              <div className="atlas-inline-stats atlas-inline-stats-wrap">
                <span className={getSignedClass(leadOpportunity.priceChange24h)}>
                  {formatPercent(leadOpportunity.priceChange24h)}
                </span>
                <span>{formatCompact(leadOpportunity.volume24h)} volume</span>
                <span>{leadOpportunity.convictionAverage.toFixed(3)} conviction</span>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="atlas-shell atlas-section-block">
        <div className="atlas-card-grid atlas-card-grid-two">
          <div className="panel atlas-table-panel">
            <div className="atlas-section-heading atlas-heading-row">
              <div>
                <span className="atlas-kicker">Manager leaderboard</span>
                <h2 className="atlas-section-title">Which desks are earning trust and compounding performance.</h2>
              </div>
              <Link href="/managers" className="button-link">
                Open profiles
              </Link>
            </div>

            {managers.length ? (
              <div className="atlas-rank-table">
                {managers.map((entry, index) => (
                  <Link
                    key={entry.slug}
                    href={`/managers/${entry.slug}`}
                    className="atlas-table-row atlas-table-row-manager"
                  >
                    <div className="atlas-table-lead">
                      <span className="atlas-rank-index">0{index + 1}</span>
                      <div>
                        <strong>{entry.name}</strong>
                        <div className="muted">
                          Sharpe {entry.sharpe.toFixed(2)} · Rating{' '}
                          {entry.averageRating?.toFixed(2) ?? '--'}
                        </div>
                      </div>
                    </div>
                    <div className="atlas-table-chart">
                      <Sparkline
                        className="leaderboard-sparkline"
                        points={entry.performanceSeries.map((point) => point.nav)}
                        height={56}
                        area={false}
                        tone={
                          entry.cumulativeReturn > 0
                            ? 'positive'
                            : entry.cumulativeReturn < 0
                              ? 'negative'
                              : 'neutral'
                        }
                      />
                    </div>
                    <div className="atlas-table-metrics">
                      <span>{formatMoney(entry.nav)}</span>
                      <span className={getSignedClass(entry.cumulativeReturn)}>
                        {formatReturn(entry.cumulativeReturn)}
                      </span>
                      <span>{formatPercent(entry.hitRate * 100)}</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="error-card">Manager leaderboard data is not available yet.</div>
            )}
          </div>

          <div className="panel atlas-table-panel">
            <div className="atlas-section-heading atlas-heading-row">
              <div>
                <span className="atlas-kicker">Opportunity leaderboard</span>
                <h2 className="atlas-section-title">Where the strongest market-wide conviction is clustering.</h2>
              </div>
              <Link href="/opportunities" className="button-link">
                Open rows
              </Link>
            </div>

            {opportunities.length ? (
              <div className="atlas-rank-table">
                {opportunities.map((entry, index) => (
                  <Link
                    key={entry.id}
                    href={`/opportunities/${entry.slug}`}
                    className="atlas-table-row atlas-table-row-opportunity"
                  >
                    <div className="atlas-table-lead">
                      <span className="atlas-rank-index">0{index + 1}</span>
                      <div>
                        <strong>{entry.title}</strong>
                        <div className="muted">
                          Signal {entry.signalStrength.toFixed(3)} · {entry.type}
                        </div>
                      </div>
                    </div>
                    <div className="atlas-table-metrics">
                      <span>{formatMoney(entry.currentPrice)}</span>
                      <span className={getSignedClass(entry.priceChange24h)}>
                        {formatPercent(entry.priceChange24h)}
                      </span>
                      <span>{formatCompact(entry.volume24h)}</span>
                    </div>
                    <div className="atlas-table-metrics atlas-table-metrics-tight">
                      <span>{entry.convictionAverage.toFixed(3)} conviction</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="error-card">Opportunity leaderboard data is not available yet.</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
