'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  formatCompact,
  formatMoney,
  formatPercent,
  formatReturn,
  getSignedClass,
} from '../../lib/api';
import { API_BASE_URL } from '../../lib/runtime-config';
import type {
  ManagerLeaderboardEntry,
  OpportunityLeaderboardEntry,
} from '../../lib/types';

export default function LeaderboardPage() {
  const [managerRows, setManagerRows] = useState<ManagerLeaderboardEntry[]>([]);
  const [opportunityRows, setOpportunityRows] = useState<OpportunityLeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`${API_BASE_URL}/leaderboard/managers`).then(r => r.json()),
      fetch(`${API_BASE_URL}/leaderboard/opportunities`).then(r => r.json()),
    ])
      .then(([managers, opportunities]) => {
        setManagerRows(managers ?? []);
        setOpportunityRows(opportunities ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="page-stack">
      <section className="hero hero-compact">
        <div>
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Leaderboard</span>
          </div>
          <span className="hero-kicker">Ranking layer</span>
          <h1 className="detail-headline">One place to compare manager and market ranks.</h1>
          <p className="detail-copy">
            This page surfaces the aggregate outputs from the signal engine, manager
            scoring, walk-forward backtests, portfolio engine, and review layer.
          </p>
        </div>
        <div className="stat-strip">
          <div className="stat-box">
            <div className="stat-label">Managers ranked</div>
            <div className="stat-value">{managerRows?.length ?? 0}</div>
          </div>
          <div className="stat-box">
            <div className="stat-label">Opportunities ranked</div>
            <div className="stat-value">{opportunityRows?.length ?? 0}</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Manager leaderboard</h2>
          <Link href="/managers" className="muted">
            Open manager pages
          </Link>
        </div>
        {managerRows?.length ? (
          <div className="table-card">
            <div
              className="data-table-row data-table-head"
              style={{ gridTemplateColumns: '1.3fr .8fr .8fr .8fr .8fr .8fr' }}
            >
              <span>Manager</span>
              <span>NAV</span>
              <span>Cumulative</span>
              <span>Sharpe</span>
              <span>Hit rate</span>
              <span>Rating</span>
            </div>
            {managerRows.map((entry) => (
              <Link
                key={entry.slug}
                href={`/managers/${entry.slug}`}
                className="data-table-row"
                style={{ gridTemplateColumns: '1.3fr .8fr .8fr .8fr .8fr .8fr' }}
              >
                <strong>{entry.name}</strong>
                <span>{formatMoney(entry.nav)}</span>
                <span className={getSignedClass(entry.cumulativeReturn)}>
                  {formatReturn(entry.cumulativeReturn)}
                </span>
                <span>{entry.sharpe.toFixed(2)}</span>
                <span>{formatPercent(entry.hitRate * 100)}</span>
                <span>{entry.averageRating?.toFixed(2) ?? '--'}</span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="error-card">Manager leaderboard data is not available yet.</div>
        )}
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Opportunity leaderboard</h2>
          <Link href="/opportunities" className="muted">
            Open opportunity pages
          </Link>
        </div>
        {opportunityRows?.length ? (
          <div className="table-card">
            <div
              className="data-table-row data-table-head"
              style={{ gridTemplateColumns: '1.5fr .7fr .7fr .8fr .8fr .8fr' }}
            >
              <span>Opportunity</span>
              <span>Price</span>
              <span>24h</span>
              <span>Volume</span>
              <span>Conviction</span>
              <span>Signal</span>
            </div>
            {opportunityRows.map((entry) => (
              <Link
                key={entry.id}
                href={`/opportunities/${entry.slug}`}
                className="data-table-row"
                style={{ gridTemplateColumns: '1.5fr .7fr .7fr .8fr .8fr .8fr' }}
              >
                <strong>{entry.title}</strong>
                <span>{formatMoney(entry.currentPrice)}</span>
                <span className={getSignedClass(entry.priceChange24h)}>
                  {formatPercent(entry.priceChange24h)}
                </span>
                <span>{formatCompact(entry.volume24h)}</span>
                <span>{entry.convictionAverage.toFixed(4)}</span>
                <span>{entry.signalStrength.toFixed(4)}</span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="error-card">Opportunity leaderboard data is not available yet.</div>
        )}
      </section>
    </div>
  );
}
