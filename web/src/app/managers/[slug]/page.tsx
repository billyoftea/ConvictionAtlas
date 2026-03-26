import Link from 'next/link';
import { AssetAvatar } from '../../../components/asset-avatar';
import { CustomResearchForm } from '../../../components/custom-research-form';
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
  safeFetchApi,
} from '../../../lib/api';
import type {
  ManagerDetail,
  ManagerRebalance,
  ManagerReviewsResponse,
  Memo,
  PortfolioSnapshot,
} from '../../../lib/types';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = 'force-dynamic';

export default async function ManagerDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const [manager, portfolio, rebalances, memos, reviews] = await Promise.all([
    safeFetchApi<ManagerDetail>(`/managers/${slug}`),
    safeFetchApi<PortfolioSnapshot>(`/managers/${slug}/portfolio`),
    safeFetchApi<ManagerRebalance[]>(`/managers/${slug}/rebalances`),
    safeFetchApi<Memo[]>(`/managers/${slug}/memos`),
    safeFetchApi<ManagerReviewsResponse>(`/managers/${slug}/reviews`),
  ]);

  if (!manager) {
    return (
      <section className="atlas-shell">
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
  const memoUnlockOffer =
    manager.marketplace.serviceCatalog.find((offer) => offer.kind === 'memo_unlock') ??
    null;
  const customResearchOffer =
    manager.marketplace.serviceCatalog.find((offer) => offer.kind === 'custom_research') ??
    null;

  return (
    <div className="atlas-page">
      <section className="atlas-shell atlas-detail-hero">
        <div className="panel atlas-detail-main">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/managers">Managers</Link>
            <span>/</span>
            <span>{manager.name}</span>
          </div>

          <span className="atlas-kicker">Manager operating desk</span>

          <div className="atlas-title-row atlas-title-row-large">
            <AssetAvatar
              title={manager.name}
              symbol={manager.name}
              sourceKind={manager.style}
              size="lg"
            />
            <div>
              <h1 className="atlas-page-title">{manager.name}</h1>
              <div className="tag-row">
                <span className="pill">{manager.style}</span>
                <span className="chip">{manager.riskProfile}</span>
                <span className="chip">{manager.rebalanceCadence}</span>
                <span className="chip">{manager.memoStyle}</span>
              </div>
            </div>
          </div>

          <p className="atlas-page-copy">{manager.description}</p>
          <p className="muted atlas-page-subcopy">{manager.marketplace.tagline}</p>

          <div className="tag-row">
            {manager.marketplace.chainFocus.map((focus) => (
              <span key={focus} className="chip">
                {focus}
              </span>
            ))}
            <span className="chip">{manager.marketplace.identityStatus}</span>
            <span className="chip">{manager.marketplace.marketplaceStatus}</span>
            <span className="chip">
              {manager.marketplace.settlementAsset} on {manager.marketplace.settlementNetwork}
            </span>
          </div>

          <div className="atlas-actions">
            <a href="#service-catalog" className="button-link primary">
              Buy service
            </a>
            <Link href="/opportunities" className="button-link">
              Inspect opportunity tape
            </Link>
          </div>

          <div className="atlas-stat-band">
            <div className="atlas-stat-tile">
              <span className="atlas-stat-label">Desk NAV</span>
              <strong className="atlas-stat-value">{formatMoney(derivedPerformance.nav)}</strong>
            </div>
            <div className="atlas-stat-tile">
              <span className="atlas-stat-label">Cumulative</span>
              <strong className="atlas-stat-value">
                {formatReturn(derivedPerformance.cumulativeReturn)}
              </strong>
            </div>
            <div className="atlas-stat-tile">
              <span className="atlas-stat-label">Sharpe</span>
              <strong className="atlas-stat-value">{derivedPerformance.sharpe.toFixed(2)}</strong>
            </div>
            <div className="atlas-stat-tile">
              <span className="atlas-stat-label">Rating</span>
              <strong className="atlas-stat-value">
                {reviewState.averageRating?.toFixed(2) ?? '--'}
              </strong>
            </div>
          </div>
        </div>

        <div className="atlas-detail-side">
          <div className="panel atlas-spotlight-panel">
            <div className="atlas-inline-row">
              <span className="atlas-inline-label">
                {derivedPerformance.lookbackDays
                  ? `${derivedPerformance.lookbackDays.toFixed(0)}d replay`
                  : 'Live replay'}
              </span>
              <span className={getSignedClass(derivedPerformance.cumulativeReturn)}>
                {formatReturn(derivedPerformance.cumulativeReturn)}
              </span>
            </div>
            <Sparkline
              className="atlas-detail-sparkline"
              points={manager.performanceSeries.map((point) => point.nav)}
              height={176}
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
            <div className="atlas-inline-stats atlas-inline-stats-wrap">
              <span className={getSignedClass(derivedPerformance.dailyReturn)}>
                {formatReturn(derivedPerformance.dailyReturn)} daily
              </span>
              <span>{formatPercent(derivedPerformance.hitRate * 100)} hit rate</span>
              <span>{formatReturn(derivedPerformance.drawdown)} drawdown</span>
            </div>
          </div>

          <div className="panel atlas-trust-panel">
            <div className="atlas-inline-row">
              <span className="atlas-inline-label">Trust surface</span>
              <span className="pill">{manager.marketplace.identityProvider}</span>
            </div>
            <div className="atlas-metric-pair">
              <span>Payment rail</span>
              <strong>{manager.marketplace.paymentRail}</strong>
            </div>
            <div className="atlas-metric-pair">
              <span>Settlement</span>
              <strong>
                {manager.marketplace.settlementAsset} on {manager.marketplace.settlementNetwork}
              </strong>
            </div>
            <div className="atlas-metric-pair">
              <span>Identity status</span>
              <strong>{manager.marketplace.identityStatus}</strong>
            </div>
            <div className="atlas-metric-pair">
              <span>Service modes</span>
              <strong>{manager.marketplace.serviceModes.length}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="atlas-shell atlas-detail-layout">
        <div className="atlas-detail-primary">
          <div className="panel">
            <div className="atlas-section-heading">
              <span className="atlas-kicker">Performance replay</span>
              <h2 className="atlas-section-title">The curve remains central, but it no longer crowds out everything else.</h2>
            </div>
            <Sparkline
              className="atlas-detail-sparkline"
              points={manager.performanceSeries.map((point) => point.nav)}
              height={236}
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
            <div className="atlas-inline-stats atlas-inline-stats-wrap">
              <span>{formatMoney(derivedPerformance.nav)} NAV</span>
              <span>{formatPercent((livePortfolio?.grossExposure ?? 0) * 100)} gross</span>
              <span>{formatPercent((livePortfolio?.cashWeight ?? 0) * 100)} cash</span>
              <span>{formatDateTime(manager.updatedAt)} updated</span>
            </div>
          </div>

          <div className="panel">
            <div className="atlas-section-heading">
              <span className="atlas-kicker">Active views</span>
              <h2 className="atlas-section-title">What the desk is expressing right now.</h2>
            </div>
            {manager.latestDecisions.length ? (
              <div className="atlas-card-grid atlas-card-grid-two">
                {manager.latestDecisions.map((decision) => (
                  <div key={decision.id} className="atlas-action-card">
                    <div className="atlas-inline-row">
                      <strong className={getDirectionClass(decision.direction)}>
                        {decision.direction.toLowerCase()}
                      </strong>
                      <span>{formatPercent(decision.targetWeight * 100)}</span>
                    </div>
                    <div className="atlas-title-row atlas-title-row-tight">
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
                    <div className="atlas-inline-stats">
                      <span>{formatMoney(decision.opportunity.currentPrice)}</span>
                      <span className={getSignedClass(decision.opportunity.priceChange24h)}>
                        {formatPercent(decision.opportunity.priceChange24h)}
                      </span>
                    </div>
                    <p className="muted">{decision.rationale}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="muted">No manager decisions are stored yet.</div>
            )}
          </div>

          <div className="panel">
            <div className="atlas-section-heading atlas-heading-row">
              <div>
                <span className="atlas-kicker">Research products</span>
                <h2 className="atlas-section-title">Memo unlocks now sit inside the desk context instead of feeling bolted on.</h2>
              </div>
              <span className="chip">{memoRows.length} memo(s)</span>
            </div>
            {memoRows.length ? (
              <div className="atlas-card-grid atlas-card-grid-two">
                {memoRows.map((memo) => (
                  <MemoUnlockButton
                    key={memo.id}
                    memo={memo}
                    managerName={manager.name}
                    unlockOffer={memoUnlockOffer}
                    paymentRail={manager.marketplace.paymentRail}
                    identityProvider={manager.marketplace.identityProvider}
                  />
                ))}
              </div>
            ) : (
              <div className="muted">No memo has been generated for this manager yet.</div>
            )}
          </div>

          <div className="panel">
            <div className="atlas-section-heading">
              <span className="atlas-kicker">Member reviews</span>
              <h2 className="atlas-section-title">Reputation is visible alongside performance instead of buried below it.</h2>
            </div>
            {reviewState.reviews.length ? (
              <div className="atlas-review-list">
                {reviewState.reviews.map((review) => (
                  <div key={review.id} className="atlas-review-card">
                    <div className="atlas-inline-row">
                      <strong>{review.authorName}</strong>
                      <span>{formatDateTime(review.createdAt)}</span>
                    </div>
                    <div className="atlas-inline-stats">
                      <span>Rating {review.rating}/5</span>
                    </div>
                    <p className="muted">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="muted">No reviews yet.</div>
            )}
          </div>
        </div>

        <div className="atlas-detail-secondary">
          <div className="panel" id="service-catalog">
            <div className="atlas-section-heading">
              <span className="atlas-kicker">Service catalog</span>
              <h2 className="atlas-section-title">What this desk can sell right now.</h2>
            </div>
            <div className="atlas-service-grid">
              {manager.marketplace.serviceCatalog.map((service) => (
                <div key={`${service.kind}-${service.label}`} className="atlas-service-panel">
                  <div className="atlas-inline-row">
                    <span className="atlas-inline-label">{service.cadence}</span>
                    <span className={service.featured ? 'pill' : 'chip'}>
                      {service.protocol}
                    </span>
                  </div>
                  <h3>{service.label}</h3>
                  <div className="atlas-service-price">
                    {formatMoney(service.amountUsd)} {service.asset}
                  </div>
                  <p className="muted">{service.description}</p>
                  <div className="atlas-inline-stats atlas-inline-stats-wrap">
                    <span>{service.network}</span>
                    <span>{service.delivery}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="atlas-section-heading">
              <span className="atlas-kicker">Custom research</span>
              <h2 className="atlas-section-title">Create, pay, and receive custom work without leaving the profile.</h2>
            </div>
            <CustomResearchForm
              managerSlug={manager.slug}
              managerName={manager.name}
              offer={customResearchOffer}
              paymentRail={manager.marketplace.paymentRail}
              identityProvider={manager.marketplace.identityProvider}
            />
          </div>

          <div className="panel">
            <div className="atlas-section-heading">
              <span className="atlas-kicker">Book structure</span>
              <h2 className="atlas-section-title">Portfolio shape, sizing, and current exposures.</h2>
            </div>
            <div className="atlas-stat-band atlas-stat-band-compact">
              <div className="atlas-stat-tile">
                <span className="atlas-stat-label">Gross</span>
                <strong className="atlas-stat-value">
                  {formatPercent((livePortfolio?.grossExposure ?? 0) * 100)}
                </strong>
              </div>
              <div className="atlas-stat-tile">
                <span className="atlas-stat-label">Cash</span>
                <strong className="atlas-stat-value">
                  {formatPercent((livePortfolio?.cashWeight ?? 0) * 100)}
                </strong>
              </div>
              <div className="atlas-stat-tile">
                <span className="atlas-stat-label">Risk</span>
                <strong className="atlas-stat-value">
                  {(livePortfolio?.riskScore ?? 0).toFixed(2)}
                </strong>
              </div>
              <div className="atlas-stat-tile">
                <span className="atlas-stat-label">Positions</span>
                <strong className="atlas-stat-value">
                  {livePortfolio?.positions?.length ?? 0}
                </strong>
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
            <div className="atlas-list">
              {livePortfolio?.positions?.length ? (
                livePortfolio.positions.map((position) => (
                  <div key={position.id} className="atlas-list-row">
                    <div className="atlas-title-row atlas-title-row-tight">
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
                    <div className="atlas-inline-stats atlas-inline-stats-wrap">
                      <span>{formatPercent(position.weight * 100)} weight</span>
                      <span className={getSignedClass(position.opportunity.priceChange24h)}>
                        {formatPercent(position.opportunity.priceChange24h)}
                      </span>
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
            <div className="atlas-section-heading">
              <span className="atlas-kicker">Signal architecture</span>
              <h2 className="atlas-section-title">The bias map behind the desk.</h2>
            </div>
            <SignalBars items={manager.signalMix} />
          </div>

          <div className="panel">
            <div className="atlas-section-heading">
              <span className="atlas-kicker">Rebalance tape</span>
              <h2 className="atlas-section-title">How the book changed versus the previous snapshot.</h2>
            </div>
            {actionRows.length ? (
              <div className="atlas-list">
                {actionRows.map((rebalance) => (
                  <div key={rebalance.opportunityId} className="atlas-list-row">
                    <div className="atlas-title-row atlas-title-row-tight">
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
                    <div className="atlas-inline-stats atlas-inline-stats-wrap">
                      <span>{formatPercent(rebalance.previousWeight * 100)}</span>
                      <span className={getSignedClass(rebalance.delta)}>
                        {formatPercent(rebalance.delta * 100)}
                      </span>
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
            <div className="atlas-section-heading">
              <span className="atlas-kicker">Write a review</span>
              <h2 className="atlas-section-title">Feedback remains wired into the live API flow.</h2>
            </div>
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
