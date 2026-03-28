'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { AssetAvatar } from '../../../components/asset-avatar';
import {
  fetchPageData,
  formatCompact,
  formatDate,
  formatDateTime,
  formatMoney,
  formatPercent,
  formatSignalName,
  getDirectionClass,
  getSignedClass,
} from '../../../lib/api';
import type {
  ManagerDecision,
  NewsItem,
  OpportunityDetail,
  OpportunityHistoryPoint,
  Signal,
} from '../../../lib/types';

export default function OpportunityDetailClient() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug') ?? '';

  const [opportunity, setOpportunity] = useState<OpportunityDetail | null>(null);
  const [managers, setManagers] = useState<ManagerDecision[]>([]);
  const [signals, setSignals] = useState<Signal[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [history, setHistory] = useState<OpportunityHistoryPoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    Promise.all([
      fetchPageData<OpportunityDetail>(`/opportunities/${slug}`),
      fetchPageData<ManagerDecision[]>(`/opportunities/${slug}/managers`),
      fetchPageData<Signal[]>(`/opportunities/${slug}/signals`),
      fetchPageData<NewsItem[]>(`/opportunities/${slug}/news`),
      fetchPageData<OpportunityHistoryPoint[]>(`/opportunities/${slug}/history`),
    ])
      .then(([opportunityData, managersData, signalsData, newsData, historyData]) => {
        setOpportunity(opportunityData ?? null);
        setManagers(managersData ?? []);
        setSignals(signalsData ?? []);
        setNews(newsData ?? []);
        setHistory(historyData ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className="loading">Loading...</div>;

  if (!slug || !opportunity) {
    return (
      <section className="section">
        <div className="error-card">
          Opportunity detail is not available. Open this page from an opportunity card
          after the latest Pages snapshot has been published.
        </div>
      </section>
    );
  }

  const signalRows = [...(signals ?? opportunity.signals ?? [])].sort(
    (left, right) => Math.abs(right.value) - Math.abs(left.value),
  );
  const managerRows = managers ?? [];
  const newsRows = news ?? opportunity.newsItems ?? [];
  const historyRows = history ?? opportunity.historyPoints ?? [];
  const latestHistory = historyRows.slice(-12).reverse();
  const metadataEntries = Object.entries(opportunity.metadata ?? {});

  return (
    <div className="page-stack">
      <section className="hero">
        <div>
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/opportunities">Opportunities</Link>
            <span>/</span>
            <span>{opportunity.title}</span>
          </div>
          <div className="tag-row">
            <span className="pill">{opportunity.sourceKind}</span>
            <span className="chip">{opportunity.type}</span>
            <span className="chip">{opportunity.status ?? 'unknown'}</span>
          </div>
          <div className="manager-detail-heading">
            <AssetAvatar
              title={opportunity.title}
              imageUrl={opportunity.imageUrl}
              symbol={opportunity.symbol}
              sourceKind={opportunity.sourceKind}
              size="lg"
            />
            <div>
              <h1 className="detail-headline">{opportunity.title}</h1>
            </div>
          </div>
          <p className="detail-copy">{opportunity.summary ?? opportunity.description}</p>
          <div className="tag-row">
            {opportunity.symbol ? <span className="chip">{opportunity.symbol}</span> : null}
            {opportunity.category ? <span className="chip">{opportunity.category}</span> : null}
            <span className="chip">Updated {formatDateTime(opportunity.lastUpdatedAt)}</span>
          </div>
        </div>
        <div className="panel-stack">
          {opportunity.imageUrl ? (
            <div className="image-frame hero-media">
              <img src={opportunity.imageUrl} alt={opportunity.title} />
            </div>
          ) : null}
          <div className="panel">
            <div className="list">
              <div className="list-row">
                <span>Current price</span>
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
                <span>Liquidity</span>
                <strong>{formatCompact(opportunity.liquidity)}</strong>
              </div>
              <div className="list-row">
                <span>Event date</span>
                <strong>{formatDate(opportunity.eventDate)}</strong>
              </div>
            </div>
            {opportunity.sourceUrl ? (
              <a
                href={opportunity.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="button-link source-link"
              >
                Open source page
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section-grid">
        <div className="panel">
          <div className="section-header">
            <h2 className="section-title">Signal stack</h2>
            <span className="muted">Sorted by absolute impact</span>
          </div>
          {signalRows.length ? (
            <div className="signal-grid">
              {signalRows.map((signal) => (
                <div key={signal.id} className="signal-card">
                  <div className="mini-metrics">
                    <span className="signal-name">{formatSignalName(signal.name)}</span>
                    <strong className={getDirectionClass(signal.direction)}>
                      {signal.direction.toLowerCase()}
                    </strong>
                  </div>
                  <div className="signal-value">{signal.value.toFixed(4)}</div>
                  <div className="muted">Confidence {signal.confidence.toFixed(2)}</div>
                  <p className="muted">{signal.rationale}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="muted">Signals have not been computed for this row yet.</div>
          )}
        </div>

        <div className="panel">
          <div className="section-header">
            <h2 className="section-title">Manager views</h2>
            <span className="muted">{managerRows.length} model(s)</span>
          </div>
          {managerRows.length ? (
            <div className="list">
              {managerRows.map((decision) => (
                <div key={decision.id} className="signal-item">
                  <div className="mini-metrics">
                    <Link href={`/managers/${decision.manager.slug}`}>
                      {decision.manager.name}
                    </Link>
                    <strong className={getDirectionClass(decision.direction)}>
                      {decision.direction.toLowerCase()}
                    </strong>
                  </div>
                  <div className="mini-metrics">
                    <span>Conviction {decision.convictionScore.toFixed(4)}</span>
                    <span>Target weight {formatPercent(decision.targetWeight * 100)}</span>
                  </div>
                  <div className="muted">{decision.rationale}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="muted">No manager decisions are stored for this opportunity yet.</div>
          )}
        </div>
      </section>

      <section className="section-grid">
        <div className="panel">
          <div className="section-header">
            <h2 className="section-title">Recent history</h2>
            <span className="muted">{historyRows.length} point(s)</span>
          </div>
          {latestHistory.length ? (
            <div className="table-card table-card-inline">
              <div
                className="data-table-row data-table-head"
                style={{ gridTemplateColumns: '1.1fr .9fr .9fr' }}
              >
                <span>Timestamp</span>
                <span>Price</span>
                <span>Volume</span>
              </div>
              {latestHistory.map((point) => (
                <div
                  key={point.id}
                  className="data-table-row"
                  style={{ gridTemplateColumns: '1.1fr .9fr .9fr' }}
                >
                  <span>{formatDateTime(point.pointAt)}</span>
                  <span>{formatMoney(point.price)}</span>
                  <span>{formatCompact(point.volume)}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="muted">No history points stored yet.</div>
          )}
        </div>

        <div className="panel">
          <div className="section-header">
            <h2 className="section-title">Mapped news</h2>
            <span className="muted">{newsRows.length} article(s)</span>
          </div>
          {newsRows.length ? (
            <div className="list">
              {newsRows.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="signal-item"
                >
                  <div className="mini-metrics">
                    <strong>{item.title}</strong>
                    <span>{item.provider}</span>
                  </div>
                  <div className="muted">
                    {item.sourceName ?? 'Unknown source'} • {formatDateTime(item.publishedAt)}
                  </div>
                  {item.summary ? <p className="muted">{item.summary}</p> : null}
                </a>
              ))}
            </div>
          ) : (
            <div className="muted">No linked news yet.</div>
          )}
        </div>
      </section>

      {metadataEntries.length ? (
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">Metadata</h2>
            <span className="muted">Source-specific fields</span>
          </div>
          <div className="table-card">
            {metadataEntries.map(([key, value]) => (
              <div key={key} className="data-table-row" style={{ gridTemplateColumns: '1fr 2fr' }}>
                <span>{key}</span>
                <strong>{typeof value === 'string' ? value : JSON.stringify(value)}</strong>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
