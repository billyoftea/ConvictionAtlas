'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { AssetAvatar } from '../../../components/asset-avatar';
import { MarkdownContent } from '../../../components/markdown-content';
import { MemoUnlockButton } from '../../../components/memo-unlock-button';
import { PositionStack } from '../../../components/position-stack';
import { ReviewForm } from '../../../components/review-form';
import { SignalBars } from '../../../components/signal-bars';
import { Sparkline } from '../../../components/sparkline';
import {
  formatDateTime,
  formatMoney,
  formatPercent,
  formatReturn,
  getDirectionClass,
  getSignedClass,
} from '../../../lib/api';
import { API_BASE_URL } from '../../../lib/runtime-config';
import type {
  ManagerDetail,
  ManagerRebalance,
  ManagerReviewsResponse,
  Memo,
  PortfolioSnapshot,
} from '../../../lib/types';

export default function ManagerDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [manager, setManager] = useState<ManagerDetail | null>(null);
  const [portfolio, setPortfolio] = useState<PortfolioSnapshot | null>(null);
  const [rebalances, setRebalances] = useState<ManagerRebalance[]>([]);
  const [memos, setMemos] = useState<Memo[]>([]);
  const [reviews, setReviews] = useState<ManagerReviewsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    Promise.all([
      fetch(`${API_BASE_URL}/managers/${slug}`).then(r => r.json()),
      fetch(`${API_BASE_URL}/managers/${slug}/portfolio`).then(r => r.json()),
      fetch(`${API_BASE_URL}/managers/${slug}/rebalances`).then(r => r.json()),
      fetch(`${API_BASE_URL}/managers/${slug}/memos`).then(r => r.json()),
      fetch(`${API_BASE_URL}/managers/${slug}/reviews`).then(r => r.json()),
    ])
      .then(([managerData, portfolioData, rebalancesData, memosData, reviewsData]) => {
        setManager(managerData ?? null);
        setPortfolio(portfolioData ?? null);
        setRebalances(rebalancesData ?? []);
        setMemos(memosData ?? []);
        setReviews(reviewsData ?? null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className="loading">Loading...</div>;

  if (!manager) {
    return (
      <section className="section">
        <div className="error-card">
          Manager detail is not available. Confirm the API is running and the pipeline
          has produced manager snapshots.
        </div>
      </section>
    );
  }

  const livePortfolio = portfolio ?? manager.latestPortfolio;
  const derivedPerformance = manager.derivedPerformance;
  const reviewState = reviews ?? {
    averageRating: manager.ratingAverage,
    total: manager.reviews.length,
    reviews: manager.reviews,
  };
  const actionRows = rebalances ?? [];
  const memoRows = memos ?? [];
  const chartLabels = getChartLabels(manager.performanceSeries);
  const valueLabels = getValueLabels(manager.performanceSeries);

  return (
    <div className="page-stack">
      <section className="hero hero-compact manager-detail-hero">
        <div>
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/managers">Managers</Link>
            <span>/</span>
            <span>{manager.name}</span>
          </div>
          <div className="manager-detail-heading">
            <AssetAvatar
              title={manager.name}
              symbol={manager.name}
              sourceKind={manager.style}
              size="lg"
            />
            <div>
              <div className="tag-row">
                <span className="pill">{manager.style}</span>
                <span className="chip">{manager.riskProfile}</span>
                <span className="chip">{manager.rebalanceCadence}</span>
              </div>
              <h1 className="detail-headline">{manager.name}</h1>
            </div>
          </div>
          <p className="detail-copy">{manager.description}</p>
          <div className="tag-row">
            <span className="chip">{manager.memoStyle}</span>
            <span className="chip">{manager.universe}</span>
            <span className="chip">{manager.pricingSummary ?? 'Pricing pending'}</span>
          </div>
          <div className="cta-row">
            <Link href="/leaderboard" className="button-link primary">
              Compare desks
            </Link>
            <Link href="/opportunities" className="button-link">
              Browse opportunity tape
            </Link>
          </div>
        </div>

        <div className="manager-detail-hero-card">
          <div className="mini-metrics">
            <span className="eyebrow">
              {derivedPerformance.lookbackDays
                ? `${derivedPerformance.lookbackDays.toFixed(0)}d lookback`
                : 'Backtest lookback'}
            </span>
            <strong className={getSignedClass(derivedPerformance.cumulativeReturn)}>
              {formatReturn(derivedPerformance.cumulativeReturn)}
            </strong>
          </div>
          <div className="manager-detail-nav">{formatMoney(derivedPerformance.nav)}</div>
          <Sparkline
            className="detail-curve"
            points={manager.performanceSeries.map((point) => point.nav)}
            height={160}
            area={false}
            showAxes
            xLabels={chartLabels}
            yLabels={valueLabels}
            tone={
              derivedPerformance.cumulativeReturn > 0
                ? 'positive'
                : derivedPerformance.cumulativeReturn < 0
                  ? 'negative'
                  : 'neutral'
            }
          />
          <div className="manager-detail-stat-grid">
            <div>
              <div className="eyebrow">Daily</div>
              <strong className={getSignedClass(derivedPerformance.dailyReturn)}>
                {formatReturn(derivedPerformance.dailyReturn)}
              </strong>
            </div>
            <div>
              <div className="eyebrow">Sharpe</div>
              <strong>{derivedPerformance.sharpe.toFixed(2)}</strong>
            </div>
            <div>
              <div className="eyebrow">Hit rate</div>
              <strong>{formatPercent(derivedPerformance.hitRate * 100)}</strong>
            </div>
            <div>
              <div className="eyebrow">Drawdown</div>
              <strong>{formatReturn(derivedPerformance.drawdown)}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="manager-dashboard-grid">
        <div className="manager-primary-column">
          <div className="panel manager-performance-panel">
            <div className="section-header">
              <h2 className="section-title">Performance curve</h2>
              <span className="muted">
                90-day walk-forward backtest on stored real price and news history
              </span>
            </div>
            <Sparkline
              className="performance-curve-large"
              points={manager.performanceSeries.map((point) => point.nav)}
              height={220}
              area={false}
              showAxes
              xLabels={chartLabels}
              yLabels={valueLabels}
              tone={
                derivedPerformance.cumulativeReturn > 0
                  ? 'positive'
                  : derivedPerformance.cumulativeReturn < 0
                    ? 'negative'
                    : 'neutral'
              }
            />
            <div className="manager-timeline">
              {manager.performanceSeries.slice(0, 1).map((point) => (
                <span key={point.pointAt}>{formatDateTime(point.pointAt)}</span>
              ))}
              {manager.performanceSeries.slice(-1).map((point) => (
                <span key={point.pointAt}>{formatDateTime(point.pointAt)}</span>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="section-header">
              <h2 className="section-title">Current actions</h2>
              <span className="muted">Top current model outputs by conviction</span>
            </div>
            <div className="action-grid">
              {manager.latestDecisions.length ? (
                manager.latestDecisions.map((decision) => (
                  <div key={decision.id} className="action-card">
                    <div className="mini-metrics">
                      <strong className={getDirectionClass(decision.direction)}>
                        {decision.direction.toLowerCase()}
                      </strong>
                      <span>{formatPercent(decision.targetWeight * 100)}</span>
                    </div>
                    <div className="action-card-row">
                      <AssetAvatar
                        title={decision.opportunity.title}
                        imageUrl={decision.opportunity.imageUrl}
                        symbol={decision.opportunity.symbol}
                        sourceKind={decision.opportunity.sourceKind}
                      />
                      <div>
                        <Link href={`/opportunities/${decision.opportunity.slug}`}>
                          <strong>{decision.opportunity.title}</strong>
                        </Link>
                        <div className="muted">
                          Conviction {decision.convictionScore.toFixed(3)}
                        </div>
                      </div>
                    </div>
                    <div className="mini-metrics">
                      <span className={getSignedClass(decision.opportunity.priceChange24h)}>
                        {formatPercent(decision.opportunity.priceChange24h)}
                      </span>
                      <span>{formatMoney(decision.opportunity.currentPrice)}</span>
                    </div>
                    <div className="action-card-rationale muted">{decision.rationale}</div>
                  </div>
                ))
              ) : (
                <div className="muted">No manager decisions are stored yet.</div>
              )}
            </div>
          </div>

          <div className="panel">
            <div className="section-header">
              <h2 className="section-title">Research memos</h2>
              <span className="muted">Generated from the current live portfolio state</span>
            </div>
            {memoRows.length ? (
              <div className="card-grid">
                {memoRows.map((memo) => (
                  <div key={memo.id} className="panel panel-nested">
                    <div className="tag-row">
                      <span className="pill">{memo.generatedBy}</span>
                      <span className="chip">{memo.accessTier}</span>
                    </div>
                    <h3>{memo.title}</h3>
                    <p className="muted">{memo.summary}</p>
                    <div className="mini-metrics">
                      <span>{formatDateTime(memo.createdAt)}</span>
                      {memo.opportunity ? (
                        <Link href={`/opportunities/${memo.opportunity.slug}`}>
                          {memo.opportunity.title}
                        </Link>
                      ) : (
                        <span>No linked opportunity</span>
                      )}
                    </div>
                    <MarkdownContent content={memo.content} className="rich-text" />
                    <MemoUnlockButton memoId={memo.id} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="muted">No memo has been generated for this manager yet.</div>
            )}
          </div>
        </div>

        <div className="manager-secondary-column">
          <div className="panel">
            <div className="section-header">
              <h2 className="section-title">Book structure</h2>
              <span className="muted">{livePortfolio?.positions?.length ?? 0} positions</span>
            </div>
            <div className="manager-book-metrics">
              <div className="manager-book-metric">
                <span className="eyebrow">Gross exposure</span>
                <strong>{formatPercent((livePortfolio?.grossExposure ?? 0) * 100)}</strong>
              </div>
              <div className="manager-book-metric">
                <span className="eyebrow">Cash</span>
                <strong>{formatPercent((livePortfolio?.cashWeight ?? 0) * 100)}</strong>
              </div>
              <div className="manager-book-metric">
                <span className="eyebrow">Risk score</span>
                <strong>{(livePortfolio?.riskScore ?? 0).toFixed(2)}</strong>
              </div>
              <div className="manager-book-metric">
                <span className="eyebrow">Rating</span>
                <strong>{reviewState.averageRating?.toFixed(2) ?? '--'}</strong>
              </div>
            </div>
            <PositionStack
              positions={
                livePortfolio?.positions?.map((position) => ({
                  id: position.id,
                  title: position.opportunity.title,
                  weight: position.weight,
                  imageUrl: position.opportunity.imageUrl,
                  symbol: position.opportunity.symbol,
                  sourceKind: position.opportunity.sourceKind,
                })) ?? []
              }
            />
            <div className="portfolio-list">
              {livePortfolio?.positions?.length ? (
                livePortfolio.positions.map((position) => (
                  <div key={position.id} className="portfolio-row">
                    <div className="portfolio-row-main">
                      <AssetAvatar
                        title={position.opportunity.title}
                        imageUrl={position.opportunity.imageUrl}
                        symbol={position.opportunity.symbol}
                        sourceKind={position.opportunity.sourceKind}
                      />
                      <div>
                        <Link href={`/opportunities/${position.opportunity.slug}`}>
                          <strong>{position.opportunity.title}</strong>
                        </Link>
                        <div className="muted">
                          Conviction {position.convictionScore.toFixed(3)}
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-row-metrics">
                      <strong>{formatPercent(position.weight * 100)}</strong>
                      <span className={getSignedClass(position.opportunity.priceChange24h)}>
                        {formatPercent(position.opportunity.priceChange24h)}
                      </span>
                    </div>
                    <div className="position-track">
                      <div
                        className="position-fill"
                        style={{ width: `${Math.max(position.weight * 100, 4)}%` }}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="muted">
                  No bullish opportunity cleared this manager&apos;s threshold on the latest
                  rebalance.
                </div>
              )}
            </div>
          </div>

          <div className="panel">
            <div className="section-header">
              <h2 className="section-title">Signal architecture</h2>
              <span className="muted">The bias map behind this desk</span>
            </div>
            <SignalBars items={manager.signalMix} />
          </div>

          <div className="panel">
            <div className="section-header">
              <h2 className="section-title">Rebalance tape</h2>
              <span className="muted">Current snapshot versus previous snapshot</span>
            </div>
            {actionRows.length ? (
              <div className="action-tape">
                {actionRows.map((rebalance) => (
                  <div key={rebalance.opportunityId} className="tape-row">
                    <div className="action-card-row">
                      <AssetAvatar
                        title={rebalance.opportunityTitle}
                        imageUrl={rebalance.opportunityImageUrl}
                        symbol={rebalance.opportunitySymbol}
                        size="sm"
                      />
                      <div>
                        {rebalance.opportunitySlug ? (
                          <Link href={`/opportunities/${rebalance.opportunitySlug}`}>
                            <strong>{rebalance.opportunityTitle}</strong>
                          </Link>
                        ) : (
                          <strong>{rebalance.opportunityTitle}</strong>
                        )}
                        <div className="muted">
                          {rebalance.delta > 0
                            ? 'Added risk'
                            : rebalance.delta < 0
                              ? 'Trimmed risk'
                              : 'No change'}
                        </div>
                      </div>
                    </div>
                    <div className="mini-metrics">
                      <span>{formatPercent(rebalance.previousWeight * 100)}</span>
                      <strong className={getSignedClass(rebalance.delta)}>
                        {formatPercent(rebalance.delta * 100)}
                      </strong>
                      <span>{formatPercent(rebalance.currentWeight * 100)}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="muted">Only one portfolio snapshot exists so far.</div>
            )}
          </div>

          <div className="panel">
            <div className="section-header">
              <h2 className="section-title">Member reviews</h2>
              <span className="muted">{reviewState.total} total review(s)</span>
            </div>
            {reviewState.reviews.length ? (
              <div className="list">
                {reviewState.reviews.map((review) => (
                  <div key={review.id} className="signal-item">
                    <div className="mini-metrics">
                      <strong>{review.authorName}</strong>
                      <span>{formatDateTime(review.createdAt)}</span>
                    </div>
                    <div className="signal-name">Rating {review.rating}/5</div>
                    <div className="muted">{review.comment}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="muted">No reviews yet.</div>
            )}
          </div>

          <div className="panel">
            <h2 className="section-title">Submit a review</h2>
            <p className="muted">
              This writes directly into the live Nest API review endpoint for tomorrow&apos;s
              debugging.
            </p>
            <ReviewForm managerSlug={manager.slug} />
          </div>
        </div>
      </section>
    </div>
  );
}

function getChartLabels(series: ManagerDetail['performanceSeries']): [string, string] {
  if (!series.length) {
    return ['Start', 'Now'];
  }

  return [
    formatShortDate(series[0].pointAt),
    formatShortDate(series[series.length - 1].pointAt),
  ];
}

function getValueLabels(series: ManagerDetail['performanceSeries']): [string, string] {
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
