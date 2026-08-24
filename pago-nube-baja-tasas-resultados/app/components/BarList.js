import { fmtPct } from "../data";

// items: [{ name, rate, sub, isBest }]
export default function BarList({ items, bestLabel = "Mejor conversión" }) {
  const max = Math.max(...items.map((i) => i.rate));

  return (
    <div className="bar-list">
      {items.map((item) => {
        const width = Math.max(6, (item.rate / max) * 100);
        return (
          <div className={`bar-row${item.isBest ? " best" : ""}`} key={item.name}>
            <div className="bar-row-top">
              <div className="bar-row-name">
                {item.name}
                {item.isBest && <span className="badge">{bestLabel}</span>}
              </div>
              <div className="bar-row-cvr">{fmtPct(item.rate)}</div>
            </div>
            <div className="bar-row-sub">{item.sub}</div>
            <div className="bar-track">
              <div className="bar-fill" style={{ width: `${width}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
