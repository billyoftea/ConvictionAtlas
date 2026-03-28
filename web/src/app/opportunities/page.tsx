'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AssetAvatar } from '../../components/asset-avatar';
import {
  fetchPageData,
  formatCompact,
  formatDate,
  formatMoney,
  formatPercent,
  formatSignalName,
  getSignedClass,
} from '../../lib/api';
import type {
  OpportunityLeaderboardEntry,
  OpportunitySummary,
} from '../../lib/types';

export default function OpportunitiesPage() {
  const [opportunities, setOpportunities] = useState<OpportunitySummary[]>([]);
  const [leaderboard, setLeaderboard] = useState<OpportunityLeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetchPageData<OpportunitySummary[]>('/opportunities'),
      fetchPageData<OpportunityLeaderboardEntry[]>('/leaderboard/opportunities'),
    ])
      .then(([opportunitiesData, leaderboardData]) => {
        setOpportunities(opportunitiesData ?? []);
        setLeaderboard(leaderboardData ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  const rows = opportunities ?? [];
  const tokenCount = rows.filter((row) => row.type === 'TOKEN').length;
  const marketCount = rows.filter((row) => row.type === 'PREDICTION_MARKET').length;

  return (
    <div className="page-stack">
      <section className="hero hero-compact">
        <div>
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Opportunities</span>
          </div>
          <span className="hero-kicker">Opportunity tape</span>
          <h1 className="detail-headline">
            Tokens and prediction markets flowing through one signal engine.
          </h1>
          <p className="detail-copy">
            This is the normalized inventory produced from CoinGecko and Polymarket
            ingestion, with signal overlays, manager interpretations, and source links.
          </p>
        </div>
        <div className="stat-strip">
          <div className="stat-box">
            <div className="stat-label">Total</div>
            <div className="stat-value">{rows.length}</div>
          </div>
          <div className="stat-box">
            <div className="stat-label">Tokens</div>
            <div className="stat-value">{tokenCount}</div>
          </div>
          <div className="stat-box">
            <div className="stat-label">Prediction markets</div>
            <div className="stat-value">{marketCount}</div>
          </div>
        </div>
      </section>

      {!rows.length ? (
        <div className="error-card">
          Opportunity data is not available yet. Run the backend and pipeline first.
        </div>
      ) : (
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">Live inventory</h2>
            <span className="muted">Real sources only, no mock opportunity rows</span>
          </div>
          <div className="card-grid">
            {rows.map((opportunity) => (
              <Link
                key={opportunity.id}
                href={`/opportunities/detail?slug=${opportunity.slug}`}
                className="panel"
              >
                <div className="action-card-row">
                  <AssetAvatar
                    title={opportunity.title}
                    imageUrl={opportunity.imageUrl}
                    symbol={opportunity.symbol}
                    sourceKind={opportunity.sourceKind}
                    size="lg"
                  />
                  <div>
                    <div className="tag-row">
                      <span className="pill">{opportunity.sourceKind}</span>
                      <span className="chip">{opportunity.type}</span>
                    </div>
                    <h3>{opportunity.title}</h3>
                  </div>
                </div>
                <p className="muted">{opportunity.summary}</p>
                <div className="list">
                  <div className="list-row">
                    <span>Price</span>
                    <strong>{formatMoney(opportunity.currentPrice)}</strong>
                  </div>
                  <div className="list-row">
                    <span>24h move</span>
                    <strong className={getSignedClass(opportunity.priceChange24h)}>
                      {formatPercent(opportunity.priceChange24h)}
                    </strong>
                  </div>
                  <div className="list-row">
                    <span>Volume</span>
                    <strong>{formatCompact(opportunity.volume24h)}</strong>
                  </div>
                  <div className="list-row">
                    <span>Strongest signal</span>
                    <strong>
                      {opportunity.strongestSignal
                        ? formatSignalName(opportunity.strongestSignal.name)
                        : '--'}
                    </strong>
                  </div>
                  <div className="list-row">
                    <span>Event</span>
                    <strong>{formatDate(opportunity.eventDate)}</strong>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {leaderboard?.length ? (
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">Conviction leaderboard</h2>
            <Link href="/leaderboard" className="muted">
              Compare all ranks
            </Link>
          </div>
          <div className="table-card">
            <div
              className="data-table-row data-table-head"
              style={{ gridTemplateColumns: '1.4fr .8fr .8fr .8fr .8fr' }}
            >
              <span>Opportunity</span>
              <span>Price</span>
              <span>24h move</span>
              <span>Conviction</span>
              <span>Signal</span>
            </div>
            {leaderboard.slice(0, 10).map((entry) => (
              <Link
                key={entry.id}
                href={`/opportunities/detail?slug=${entry.slug}`}
                className="data-table-row"
                style={{ gridTemplateColumns: '1.4fr .8fr .8fr .8fr .8fr' }}
              >
                <strong>{entry.title}</strong>
                <span>{formatMoney(entry.currentPrice)}</span>
                <span className={getSignedClass(entry.priceChange24h)}>
                  {formatPercent(entry.priceChange24h)}
                </span>
                <span>{entry.convictionAverage.toFixed(4)}</span>
                <span>{entry.signalStrength.toFixed(4)}</span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
