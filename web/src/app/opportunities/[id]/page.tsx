import Link from 'next/link';
import { AssetAvatar } from '../../../components/asset-avatar';
import { Sparkline } from '../../../components/sparkline';
import {
  formatCompact,
  formatDate,
  formatDateTime,
  formatMoney,
  formatPercent,
  formatSignalName,
  getDirectionClass,
  getSignedClass,
  safeFetchApi,
} from '../../../lib/api';
import type {
  ManagerDecision,
  NewsItem,
  OpportunityDetail,
  OpportunityHistoryPoint,
  Signal,
} from '../../../lib/types';

type PageProps = {
  params: Promise<{ id: string }>;
};

export const dynamic = 'force-dynamic';

export default async function OpportunityDetailPage({ params }: PageProps) {
  const { id } = await params;
  const [opportunity, managers, signals, news, history] = await Promise.all([
    safeFetchApi<OpportunityDetail>(`/opportunities/${id}`),
    safeFetchApi<ManagerDecision[]>(`/opportunities/${id}/managers`),
    safeFetchApi<Signal[]>(`/opportunities/${id}/signals`),
    safeFetchApi<NewsItem[]>(`/opportunities/${id}/news`),
    safeFetchApi<OpportunityHistoryPoint[]>(`/opportunities/${id}/history`),
  ]);

  if (!opportunity) {
    return (
      <section className="atlas-shell">
        <div className="error-card">
          Opportunity detail is not available. Confirm the API is running and the
          ingestion pipeline has produced live rows.
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
  const historyLabels = getHistoryLabels(historyRows);
  const historyValueLabels = getHistoryValueLabels(historyRows);

  return (
    <div className="atlas-page">
      <section className="atlas-shell atlas-detail-hero">
        <div className="panel atlas-detail-main">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/opportunities">Opportunities</Link>
            <span>/</span>
            <span>{opportunity.title}</span>
          </div>

          <span className="atlas-kicker">Research row</span>

          <div className="atlas-title-row atlas-title-row-large">
            <AssetAvatar
              title={opportunity.title}
              imageUrl={opportunity.imageUrl}
              symbol={opportunity.symbol}
              sourceKind={opportunity.sourceKind}
              size="lg"
            />
            <div>
              <h1 className="atlas-page-title">{opportunity.title}</h1>
              <div className="tag-row">
                <span className="pill">{opportunity.sourceKind}</span>
                <span className="chip">{opportunity.type}</span>
                {opportunity.status ? <span className="chip">{opportunity.status}</span> : null}
                {opportunity.category ? <span className="chip">{opportunity.category}</span> : null}
              </div>
            </div>
          </div>

          <p className="atlas-page-copy">{opportunity.summary ?? opportunity.description}</p>

          <div className="tag-row">
            {opportunity.symbol ? <span className="chip">{opportunity.symbol}</span> : null}
            <span className="chip">Updated {formatDateTime(opportunity.lastUpdatedAt)}</span>
            <span className="chip">Event {formatDate(opportunity.eventDate)}</span>
          </div>

          <div className="atlas-actions">
            {opportunity.sourceUrl ? (
              <a
                href={opportunity.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="button-link primary"
              >
                Open source page
              </a>
            ) : null}
            <Link href="/leaderboard" className="button-link">
              Compare conviction
            </Link>
          </div>

          <div className="atlas-stat-band">
            <div className="atlas-stat-tile">
              <span className="atlas-stat-label">Current price</span>
              <strong className="atlas-stat-value">{formatMoney(opportunity.currentPrice)}</strong>
            </div>
            <div className="atlas-stat-tile">
              <span className="atlas-stat-label">24h move</span>
              <strong className="atlas-stat-value">
                {formatPercent(opportunity.priceChange24h)}
              </strong>
            </div>
            <div className="atlas-stat-tile">
              <span className="atlas-stat-label">Volume</span>
              <strong className="atlas-stat-value">{formatCompact(opportunity.volume24h)}</strong>
            </div>
            <div className="atlas-stat-tile">
              <span className="atlas-stat-label">Liquidity</span>
              <strong className="atlas-stat-value">{formatCompact(opportunity.liquidity)}</strong>
            </div>
          </div>
        </div>

        <div className="atlas-detail-side">
          {opportunity.imageUrl ? (
            <div className="panel atlas-media-panel">
              <div className="image-frame hero-media atlas-hero-image">
                <img src={opportunity.imageUrl} alt={opportunity.title} />
              </div>
            </div>
          ) : null}

          <div className="panel atlas-spotlight-panel">
            <div className="atlas-inline-row">
              <span className="atlas-inline-label">Market replay</span>
              <span className={getSignedClass(opportunity.priceChange24h)}>
                {formatPercent(opportunity.priceChange24h)}
              </span>
            </div>
            {historyRows.length ? (
              <Sparkline
                className="atlas-detail-sparkline"
                points={historyRows.map((point) => point.price)}
                height={174}
                area={false}
                showAxes
                xLabels={historyLabels}
                yLabels={historyValueLabels}
                tone={
                  (opportunity.priceChange24h ?? 0) > 0
                    ? 'positive'
                    : (opportunity.priceChange24h ?? 0) < 0
                      ? 'negative'
                      : 'neutral'
                }
              />
            ) : (
              <div className="muted">No history points stored yet.</div>
            )}
            <div className="atlas-inline-stats atlas-inline-stats-wrap">
              <span>{signalRows.length} signals</span>
              <span>{managerRows.length} manager views</span>
              <span>{newsRows.length} news items</span>
            </div>
          </div>
        </div>
      </section>

      <section className="atlas-shell atlas-detail-layout">
        <div className="atlas-detail-primary">
          <div className="panel">
            <div className="atlas-section-heading atlas-heading-row">
              <div>
                <span className="atlas-kicker">Signal stack</span>
                <h2 className="atlas-section-title">Sorted by absolute impact, not buried inside metadata.</h2>
              </div>
              <span className="chip">{signalRows.length} signal(s)</span>
            </div>
            {signalRows.length ? (
              <div className="atlas-card-grid atlas-card-grid-two">
                {signalRows.map((signal) => (
                  <div key={signal.id} className="atlas-action-card">
                    <div className="atlas-inline-row">
                      <span className="atlas-inline-label">{formatSignalName(signal.name)}</span>
                      <strong className={getDirectionClass(signal.direction)}>
                        {signal.direction.toLowerCase()}
                      </strong>
                    </div>
                    <div className="atlas-signal-value">{signal.value.toFixed(4)}</div>
                    <div className="atlas-inline-stats">
                      <span>Confidence {signal.confidence.toFixed(2)}</span>
                    </div>
                    <p className="muted">{signal.rationale}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="muted">Signals have not been computed for this row yet.</div>
            )}
          </div>

          <div className="panel">
            <div className="atlas-section-heading atlas-heading-row">
              <div>
                <span className="atlas-kicker">Manager consensus</span>
                <h2 className="atlas-section-title">How individual desks are reading the same opportunity.</h2>
              </div>
              <span className="chip">{managerRows.length} desk(s)</span>
            </div>
            {managerRows.length ? (
              <div className="atlas-card-grid atlas-card-grid-two">
                {managerRows.map((decision) => (
                  <div key={decision.id} className="atlas-action-card">
                    <div className="atlas-inline-row">
                      <Link href={`/managers/${decision.manager.slug}`}>
                        <strong>{decision.manager.name}</strong>
                      </Link>
                      <strong className={getDirectionClass(decision.direction)}>
                        {decision.direction.toLowerCase()}
                      </strong>
                    </div>
                    <div className="atlas-inline-stats atlas-inline-stats-wrap">
                      <span>Conviction {decision.convictionScore.toFixed(4)}</span>
                      <span>Target {formatPercent(decision.targetWeight * 100)}</span>
                    </div>
                    <p className="muted">{decision.rationale}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="muted">No manager decisions are stored for this opportunity yet.</div>
            )}
          </div>

          <div className="panel">
            <div className="atlas-section-heading atlas-heading-row">
              <div>
                <span className="atlas-kicker">Mapped news</span>
                <h2 className="atlas-section-title">Relevant coverage stays attached to the research row.</h2>
              </div>
              <span className="chip">{newsRows.length} article(s)</span>
            </div>
            {newsRows.length ? (
              <div className="atlas-review-list">
                {newsRows.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="atlas-review-card"
                  >
                    <div className="atlas-inline-row">
                      <strong>{item.title}</strong>
                      <span>{formatDateTime(item.publishedAt)}</span>
                    </div>
                    <p className="muted">
                      {item.summary ?? item.sourceName ?? 'No summary available.'}
                    </p>
                  </a>
                ))}
              </div>
            ) : (
              <div className="muted">
                No mapped news items yet. Add `CRYPTOPANIC_API_KEY`, `GNEWS_API_KEY`, or
                `NEWSAPI_KEY` and rerun the pipeline to populate this section.
              </div>
            )}
          </div>
        </div>

        <div className="atlas-detail-secondary">
          <div className="panel">
            <div className="atlas-section-heading atlas-heading-row">
              <div>
                <span className="atlas-kicker">Recent history</span>
                <h2 className="atlas-section-title">The latest stored market points.</h2>
              </div>
              <span className="chip">{historyRows.length} point(s)</span>
            </div>
            {latestHistory.length ? (
              <div className="atlas-list">
                {latestHistory.map((point) => (
                  <div key={point.id} className="atlas-list-row">
                    <div>
                      <strong>{formatDateTime(point.pointAt)}</strong>
                    </div>
                    <div className="atlas-inline-stats atlas-inline-stats-wrap">
                      <span>{formatMoney(point.price)}</span>
                      <span>{formatCompact(point.volume)}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="muted">No history points stored yet.</div>
            )}
          </div>

          <div className="panel">
            <div className="atlas-section-heading">
              <span className="atlas-kicker">Metadata</span>
              <h2 className="atlas-section-title">Normalized provider extras without the old visual clutter.</h2>
            </div>
            {metadataEntries.length ? (
              <div className="atlas-metadata-grid">
                {metadataEntries.map(([key, value]) => (
                  <div key={key} className="atlas-meta-card">
                    <div className="atlas-inline-label">{formatSignalName(key)}</div>
                    <div className="atlas-metadata-value">
                      {Array.isArray(value) ? value.join(', ') : String(value)}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="muted">This opportunity does not currently expose provider metadata.</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function getHistoryLabels(series: OpportunityHistoryPoint[]): [string, string] {
  if (!series.length) {
    return ['Start', 'Now'];
  }

  return [
    formatShortDate(series[0].pointAt),
    formatShortDate(series[series.length - 1].pointAt),
  ];
}

function getHistoryValueLabels(series: OpportunityHistoryPoint[]): [string, string] {
  if (!series.length) {
    return ['--', '--'];
  }

  const values = series.map((point) => point.price);
  return [formatMoney(Math.max(...values)), formatMoney(Math.min(...values))];
}

function formatShortDate(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  }).format(new Date(value));
}
