'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AssetAvatar } from '../../components/asset-avatar';
import { PositionStack } from '../../components/position-stack';
import { SignalBars } from '../../components/signal-bars';
import { Sparkline } from '../../components/sparkline';
import {
  fetchPageData,
  formatMoney,
  formatPercent,
  formatReturn,
  getSignedClass,
} from '../../lib/api';
import { API_DOCS_URL } from '../../lib/runtime-config';
import type {
  ManagerLeaderboardEntry,
  ManagerSummary,
} from '../../lib/types';

export default function ManagersPage() {
  const [managers, setManagers] = useState<ManagerSummary[]>([]);
  const [leaderboard, setLeaderboard] = useState<ManagerLeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetchPageData<ManagerSummary[]>('/managers'),
      fetchPageData<ManagerLeaderboardEntry[]>('/leaderboard/managers'),
    ])
      .then(([managersData, leaderboardData]) => {
        setManagers(managersData ?? []);
        setLeaderboard(leaderboardData ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  const managerRows = managers ?? [];
  const leadManager = managerRows[0] ?? null;

  return (
    <div className="page-stack">
      <section className="hero hero-compact manager-hero">
        <div>
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Managers</span>
          </div>
          <span className="hero-kicker">Manager layer</span>
          <h1 className="detail-headline">
            Six manager desks reading one live token tape and crypto prediction surface.
          </h1>
          <p className="detail-copy">
            Each desk now carries its own curve, book map, signal bias, and packaging.
            The card is the current state of the strategy, not placeholder copy.
          </p>
          <div className="cta-row">
            <Link href="/leaderboard" className="button-link primary">
              Open leaderboard
            </Link>
            <a href={API_DOCS_URL} target="_blank" rel="noreferrer" className="button-link">
              API docs
            </a>
          </div>
        </div>

        <div className="hero-side-stack">
          <div className="hero-spotlight">
            <div className="mini-metrics">
              <span className="eyebrow">Desk snapshot</span>
              <span className="chip">90d backtest</span>
            </div>
            <div className="hero-spotlight-value">
              {leadManager ? formatMoney(leadManager.latestNav) : '--'}
            </div>
            <div className="mini-metrics">
              <span>Lead desk NAV</span>
              <strong className={getSignedClass(leadManager?.cumulativeReturn)}>
                {leadManager ? formatReturn(leadManager.cumulativeReturn) : '--'}
              </strong>
            </div>
            <Sparkline
              className="hero-curve"
              points={leadManager?.performanceSeries.map((point) => point.nav) ?? []}
              height={96}
              tone={
                (leadManager?.cumulativeReturn ?? 0) > 0
                  ? 'positive'
                  : (leadManager?.cumulativeReturn ?? 0) < 0
                    ? 'negative'
                    : 'neutral'
              }
              dateLabels={leadManager?.performanceSeries.map((point) => formatShortDate(point.pointAt))}
              formatValue={(v) => formatMoney(v)}
            />
            <div className="hero-spotlight-grid">
              <div>
                <div className="eyebrow">Managers</div>
                <strong>{managerRows.length}</strong>
              </div>
              <div>
                <div className="eyebrow">Gross exposure</div>
                <strong>
                  {leadManager ? formatPercent(leadManager.grossExposure * 100) : '--'}
                </strong>
              </div>
              <div>
                <div className="eyebrow">Hit rate</div>
                <strong>{leadManager ? formatPercent(leadManager.hitRate * 100) : '--'}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {!managerRows.length ? (
        <div className="error-card">
          Manager data is not available yet. Start the API, run `npm run pipeline`, and
          refresh this page.
        </div>
      ) : (
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">Live manager desks</h2>
            <span className="muted">Real-data backtest curve, current exposure, signal mix, and subscription layer</span>
          </div>
          <div className="manager-grid">
            {managerRows.map((manager, index) => {
              const leadPosition = manager.topPositions[0];
              const chartLabels = getChartLabels(manager.performanceSeries);
              const valueLabels = getValueLabels(manager.performanceSeries);
              return (
                <Link
                  key={manager.slug}
                  href={`/managers/${manager.slug}`}
                  className="manager-card"
                >
                  <div className="manager-card-top">
                    <div className="manager-card-title">
                      <AssetAvatar
                        title={manager.name}
                        symbol={manager.name}
                        sourceKind={manager.style}
                        size="lg"
                      />
                      <div>
                        <div className="mini-metrics manager-rank-row">
                          <span className="eyebrow">Desk {index + 1}</span>
                          <span className="chip">{manager.riskProfile}</span>
                        </div>
                        <h3>{manager.name}</h3>
                        <p className="muted">{manager.description}</p>
                      </div>
                    </div>
                    <div className={`manager-return ${getSignedClass(manager.cumulativeReturn)}`}>
                      {formatReturn(manager.cumulativeReturn)}
                    </div>
                  </div>

                  <div className="manager-chart-shell">
                    <Sparkline
                      className="manager-card-sparkline"
                      points={manager.performanceSeries.map((point) => point.nav)}
                      height={132}
                      area={false}
                      showAxes
                      xLabels={chartLabels}
                      yLabels={valueLabels}
                      dateLabels={manager.performanceSeries.map((point) => formatShortDate(point.pointAt))}
                      formatValue={(v) => formatMoney(v)}
                      tone={
                        manager.cumulativeReturn > 0
                          ? 'positive'
                          : manager.cumulativeReturn < 0
                            ? 'negative'
                            : 'neutral'
                      }
                    />
                  </div>

                  <div className="manager-metric-grid">
                    <div className="manager-metric-tile">
                      <span className="eyebrow">NAV</span>
                      <strong>{formatMoney(manager.latestNav)}</strong>
                    </div>
                    <div className="manager-metric-tile">
                      <span className="eyebrow">Gross</span>
                      <strong>{formatPercent(manager.grossExposure * 100)}</strong>
                    </div>
                    <div className="manager-metric-tile">
                      <span className="eyebrow">Cash</span>
                      <strong>{formatPercent(manager.cashWeight * 100)}</strong>
                    </div>
                    <div className="manager-metric-tile">
                      <span className="eyebrow">Hit rate</span>
                      <strong>{formatPercent(manager.hitRate * 100)}</strong>
                    </div>
                  </div>

                  <div className="manager-lead">
                    <div className="mini-metrics">
                      <span className="eyebrow">Lead position</span>
                      <span className={getSignedClass(leadPosition?.priceChange24h)}>
                        {formatPercent(leadPosition?.priceChange24h)}
                      </span>
                    </div>
                    {leadPosition ? (
                      <div className="manager-lead-row">
                        <AssetAvatar
                          title={leadPosition.title}
                          imageUrl={leadPosition.imageUrl}
                          symbol={leadPosition.symbol}
                          sourceKind={leadPosition.sourceKind}
                        />
                        <div>
                          <div className="manager-lead-title">{leadPosition.title}</div>
                          <div className="muted">
                            {(leadPosition.weight * 100).toFixed(1)}% book weight
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="muted">No active long yet.</div>
                    )}
                  </div>

                  <PositionStack positions={manager.topPositions.slice(0, 4)} />

                  <div className="manager-signal-block">
                    <div className="mini-metrics">
                      <span className="eyebrow">Signal mix</span>
                      <span className="muted">Model bias</span>
                    </div>
                    <SignalBars items={manager.signalMix.slice(0, 4)} />
                  </div>

                  <div className="manager-card-footer">
                    <div>
                      <div className="eyebrow">Entry pricing</div>
                      <strong>{manager.pricingSummary ?? 'TBD'}</strong>
                    </div>
                    <span className="manager-card-cta">Open manager</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {leaderboard?.length ? (
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">Leaderboard snapshot</h2>
            <Link href="/leaderboard" className="muted">
              Full leaderboard
            </Link>
          </div>
          <div className="table-card table-card-rich">
            <div className="leaderboard-grid leaderboard-head">
              <span>Manager</span>
              <span>Curve</span>
              <span>NAV</span>
              <span>3m</span>
              <span>Gross</span>
              <span>Sharpe</span>
              <span>Hit rate</span>
            </div>
            {leaderboard.map((entry) => (
              <Link key={entry.slug} href={`/managers/${entry.slug}`} className="leaderboard-grid">
                <strong>{entry.name}</strong>
                <Sparkline
                  className="leaderboard-sparkline"
                  points={entry.performanceSeries.map((point) => point.nav)}
                  height={48}
                  area={false}
                  tone={
                    entry.cumulativeReturn > 0
                      ? 'positive'
                      : entry.cumulativeReturn < 0
                        ? 'negative'
                        : 'neutral'
                  }
                  dateLabels={entry.performanceSeries.map((point) => formatShortDate(point.pointAt))}
                  formatValue={(v) => formatMoney(v)}
                />
                <span>{formatMoney(entry.nav)}</span>
                <span className={getSignedClass(entry.cumulativeReturn)}>
                  {formatReturn(entry.cumulativeReturn)}
                </span>
                <span>{formatPercent(entry.grossExposure * 100)}</span>
                <span>{entry.sharpe.toFixed(2)}</span>
                <span>{formatPercent(entry.hitRate * 100)}</span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

function getChartLabels(
  series: ManagerSummary['performanceSeries'],
): [string, string] {
  if (!series.length) {
    return ['Start', 'Now'];
  }

  return [
    formatShortDate(series[0].pointAt),
    formatShortDate(series[series.length - 1].pointAt),
  ];
}

function getValueLabels(
  series: ManagerSummary['performanceSeries'],
): [string, string] {
  if (!series.length) {
    return ['--', '--'];
  }

  const navValues = series.map((point) => point.nav);
  return [formatMoney(Math.max(...navValues)), formatMoney(Math.min(...navValues))];
}

function formatShortDate(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  }).format(new Date(value));
}
