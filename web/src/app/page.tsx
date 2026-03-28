import Link from 'next/link';
import ReferenceHeroScene from '../components/reference-hero-scene';
import { API_DOCS_URL } from '../lib/runtime-config';

const landingStats = [
  {
    label: 'Autonomous desks',
    value: '6',
    detail: 'Distinct manager philosophies with separate conviction engines.',
  },
  {
    label: 'Market surfaces',
    value: '2',
    detail: 'Spot token flow and Polymarket probability dislocations in one tape.',
  },
  {
    label: 'Daily loop',
    value: '9-step',
    detail: 'Ingestion, signals, decisions, rebalancing, snapshots, and memos.',
  },
];

const landingSurfaces = [
  {
    href: '/managers',
    index: '01',
    title: 'Manager layer',
    description:
      'See six desks expressed as live products with their own signal bias, book shape, drawdown profile, and pricing surface.',
    eyebrow: 'Desks',
    meta: 'Curves · exposures · memos',
  },
  {
    href: '/opportunities',
    index: '02',
    title: 'Opportunity tape',
    description:
      'Scan the normalized market inventory flowing in from CoinGecko and Polymarket with strongest-signal context attached.',
    eyebrow: 'Tape',
    meta: 'Tokens · markets · catalysts',
  },
  {
    href: '/leaderboard',
    index: '03',
    title: 'Ranking surface',
    description:
      'Compare which managers and which opportunities are carrying conviction right now without hopping across disconnected screens.',
    eyebrow: 'Ranks',
    meta: 'NAV · Sharpe · conviction',
  },
];

const pipelineSteps = [
  {
    index: '01',
    title: 'Ingest',
    description: 'Pull token, prediction market, and news inputs into one shared opportunity store.',
  },
  {
    index: '02',
    title: 'Score',
    description: 'Recompute multi-factor signals so each opportunity gets a fresh quantitative state vector.',
  },
  {
    index: '03',
    title: 'Decide',
    description: 'Let each manager translate those signals into conviction, sizing, and direction.',
  },
  {
    index: '04',
    title: 'Publish',
    description: 'Rebalance books, snapshot NAV, and expose the whole cycle through one interface.',
  },
];

export default function Index() {
  return (
    <div className="page-stack landing-page">
      <section className="hero landing-hero">
        <div className="landing-copy-column">
          <div className="tag-row">
            <span className="hero-kicker">Autonomous fund stack</span>
            <span className="chip">Crypto macro to market microstructure</span>
          </div>

          <div className="landing-copy-block">
            <h1 className="detail-headline landing-headline">
              One operating surface for six crypto managers, live opportunity flow, and
              AI research memos.
            </h1>
            <p className="detail-copy landing-copy-lead">
              Conviction Atlas turns ingestion, signal recompute, manager scoring,
              rebalancing, and memo generation into a single dark-glass interface that
              feels like one desk instead of five disconnected tools.
            </p>
          </div>

          <div className="cta-row">
            <Link href="/managers" className="button-link primary">
              Open managers
            </Link>
            <Link href="/opportunities" className="button-link">
              Browse opportunities
            </Link>
            <a href={API_DOCS_URL} target="_blank" rel="noreferrer" className="button-link">
              API docs
            </a>
          </div>

          <div className="landing-stat-grid">
            {landingStats.map((item) => (
              <div key={item.label} className="stat-box landing-stat-card">
                <div className="stat-label">{item.label}</div>
                <div className="stat-value">{item.value}</div>
                <p className="muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="landing-scene-panel">
          <div className="mini-metrics">
            <span className="eyebrow">Live scene</span>
            <span className="chip">Orbit preview</span>
          </div>

          <div className="landing-scene-frame">
            <ReferenceHeroScene />
            <div className="landing-scene-copy">
              <span className="eyebrow">Unified market cockpit</span>
              <p>
                The hero now speaks the same product language as the rest of the app:
                glass panels, signal surfaces, and portfolio-first navigation.
              </p>
            </div>
          </div>

          <div className="landing-scene-meta">
            <div className="panel landing-mini-card">
              <div className="eyebrow">Coverage</div>
              <strong>Signals, books, trades, memos</strong>
              <p className="muted">
                Every surface ladders back to the same pipeline and database state.
              </p>
            </div>
            <div className="panel landing-mini-card">
              <div className="eyebrow">Use case</div>
              <strong>From watchlist to thesis</strong>
              <p className="muted">
                Managers, opportunities, rankings, and docs now feel like one product
                family.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Explore the surface</h2>
          <span className="muted">
            Three entry points, one visual system, one operating model.
          </span>
        </div>

        <div className="landing-feature-grid">
          {landingSurfaces.map((item) => (
            <Link key={item.href} href={item.href} className="panel landing-feature-card">
              <div className="landing-feature-top">
                <div>
                  <div className="eyebrow">{item.eyebrow}</div>
                  <h3>{item.title}</h3>
                </div>
                <span className="landing-feature-index">{item.index}</span>
              </div>
              <p className="detail-copy">{item.description}</p>
              <div className="landing-feature-meta">
                <span>{item.meta}</span>
                <span className="landing-feature-arrow">Open</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Pipeline loop</h2>
          <span className="muted">
            The interface, data layer, and portfolio engine now read as one continuous
            flow.
          </span>
        </div>

        <div className="landing-pipeline-grid">
          {pipelineSteps.map((step) => (
            <div key={step.index} className="panel landing-step-card">
              <div className="landing-step-index">{step.index}</div>
              <h3>{step.title}</h3>
              <p className="detail-copy">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
