'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Sparkline } from './sparkline';
import { fetchPageData, formatMoney, formatReturn, getSignedClass } from '../lib/api';
import type { ManagerSummary } from '../lib/types';

function formatShortDate(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  }).format(new Date(value));
}

export default function HeroPerformanceChart() {
  const [managers, setManagers] = useState<ManagerSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPageData<ManagerSummary[]>('/managers')
      .then((data) => {
        setManagers(data ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="hero-chart-placeholder">
        <div className="hero-chart-loading">Loading performance data…</div>
      </div>
    );
  }

  if (!managers.length) {
    return (
      <div className="hero-chart-placeholder">
        <div className="hero-chart-loading">No manager data available</div>
      </div>
    );
  }

  // Sort by cumulative return, best first
  const sorted = [...managers].sort(
    (a, b) => (b.cumulativeReturn ?? 0) - (a.cumulativeReturn ?? 0),
  );

  return (
    <div className="hero-chart-grid">
      {sorted.map((manager) => (
        <Link
          key={manager.slug}
          href={`/managers/${manager.slug}`}
          className="hero-chart-card"
        >
          <div className="hero-chart-header">
            <div className="hero-chart-name">{manager.name}</div>
            <span className={`hero-chart-return ${getSignedClass(manager.cumulativeReturn)}`}>
              {formatReturn(manager.cumulativeReturn)}
            </span>
          </div>
          <Sparkline
            className="hero-chart-sparkline"
            points={manager.performanceSeries.map((p) => p.nav)}
            height={64}
            area
            tone={
              (manager.cumulativeReturn ?? 0) > 0
                ? 'positive'
                : (manager.cumulativeReturn ?? 0) < 0
                  ? 'negative'
                  : 'neutral'
            }
            dateLabels={manager.performanceSeries.map((p) => formatShortDate(p.pointAt))}
            formatValue={(v) => formatMoney(v)}
          />
          <div className="hero-chart-footer">
            <span className="hero-chart-nav">{formatMoney(manager.latestNav)}</span>
            <span className="hero-chart-style">{manager.style}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
