type SignalBarsProps = {
  items: Array<{
    name: string;
    weight: number;
  }>;
};

export function SignalBars({ items }: SignalBarsProps) {
  return (
    <div className="signal-bars">
      {items.map((item) => {
        const width = Math.max(Math.abs(item.weight) * 100, 6);
        const tone = item.weight >= 0 ? 'signal-bar-positive' : 'signal-bar-negative';

        return (
          <div key={item.name} className="signal-bar-row">
            <span className="signal-bar-label">{item.name.replace(/_/g, ' ')}</span>
            <div className="signal-bar-track">
              <div className={`signal-bar-fill ${tone}`} style={{ width: `${width}%` }} />
            </div>
            <strong className="signal-bar-value">{item.weight.toFixed(2)}</strong>
          </div>
        );
      })}
    </div>
  );
}
