import { useId } from 'react';

type SparklineProps = {
  points: Array<number | null | undefined>;
  height?: number;
  strokeWidth?: number;
  area?: boolean;
  tone?: 'positive' | 'negative' | 'neutral';
  className?: string;
  showAxes?: boolean;
  xLabels?: [string, string];
  yLabels?: [string, string];
};

export function Sparkline({
  points,
  height = 72,
  strokeWidth = 2.5,
  area = true,
  tone = 'neutral',
  className,
  showAxes = false,
  xLabels,
  yLabels,
}: SparklineProps) {
  const cleanPoints = points.filter(
    (point): point is number => typeof point === 'number' && Number.isFinite(point),
  );

  if (!cleanPoints.length) {
    return <div className={className} />;
  }

  const width = 100;
  const svgHeight = 100;
  const minValue = Math.min(...cleanPoints);
  const maxValue = Math.max(...cleanPoints);
  const spread = maxValue - minValue || 1;
  const gradientId = useId().replace(/:/g, '');
  const topPadding = 8;
  const bottomPadding = 10;
  const drawableHeight = svgHeight - topPadding - bottomPadding;

  const coordinates = cleanPoints.map((point, index) => {
    const x =
      cleanPoints.length === 1
        ? width / 2
        : (index / (cleanPoints.length - 1)) * width;
    const y =
      topPadding +
      (1 - (point - minValue) / spread) * Math.max(drawableHeight, 1);

    return { x, y };
  });
  const linePath = buildSmoothPath(coordinates);
  const areaPath = `${linePath} L ${coordinates[coordinates.length - 1].x} ${svgHeight - bottomPadding} L ${coordinates[0].x} ${svgHeight - bottomPadding} Z`;
  const toneClass =
    tone === 'positive'
      ? 'sparkline-positive'
      : tone === 'negative'
        ? 'sparkline-negative'
        : 'sparkline-neutral';
  const resolvedXLabels = xLabels ?? ['Start', 'Now'];
  const resolvedYLabels = yLabels ?? [
    maxValue.toFixed(2),
    minValue.toFixed(2),
  ];

  return (
    <div
      className={[
        className,
        'sparkline',
        toneClass,
        showAxes ? 'sparkline-with-axes' : null,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ ['--sparkline-height' as string]: `${height}px` }}
    >
      <div className="sparkline-canvas">
        {showAxes ? (
          <>
            <span className="sparkline-y-label sparkline-y-top">{resolvedYLabels[0]}</span>
            <span className="sparkline-y-label sparkline-y-bottom">
              {resolvedYLabels[1]}
            </span>
          </>
        ) : null}
        <svg
          viewBox={`0 0 ${width} ${svgHeight}`}
          className="sparkline-svg"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {showAxes ? (
            <>
              <line x1="0" y1={topPadding} x2={width} y2={topPadding} className="sparkline-grid-line" />
              <line
                x1="0"
                y1={topPadding + drawableHeight / 2}
                x2={width}
                y2={topPadding + drawableHeight / 2}
                className="sparkline-grid-line"
              />
              <line
                x1="0"
                y1={svgHeight - bottomPadding}
                x2={width}
                y2={svgHeight - bottomPadding}
                className="sparkline-axis-line"
              />
            </>
          ) : null}
          <defs>
            <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity={0.18} />
              <stop offset="100%" stopColor="currentColor" stopOpacity={0.01} />
            </linearGradient>
          </defs>
          {area ? <path d={areaPath} fill={`url(#${gradientId})`} /> : null}
          <path
            d={linePath}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
      {showAxes ? (
        <div className="sparkline-x-axis">
          <span>{resolvedXLabels[0]}</span>
          <span>{resolvedXLabels[1]}</span>
        </div>
      ) : null}
    </div>
  );
}

function buildSmoothPath(points: Array<{ x: number; y: number }>) {
  if (!points.length) {
    return '';
  }

  if (points.length < 3) {
    return points
      .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
      .join(' ');
  }

  let path = `M ${points[0].x} ${points[0].y}`;

  for (let index = 0; index < points.length - 1; index += 1) {
    const current = points[index];
    const next = points[index + 1];
    const midpointX = (current.x + next.x) / 2;
    const midpointY = (current.y + next.y) / 2;

    path += ` Q ${current.x} ${current.y} ${midpointX} ${midpointY}`;
  }

  const penultimate = points[points.length - 2];
  const last = points[points.length - 1];
  path += ` Q ${penultimate.x} ${penultimate.y} ${last.x} ${last.y}`;

  return path;
}
