import { fmtPct } from "../data";

// items: [{ name, rate, sub, isBest, desc }]
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
            {item.desc && (
              <div
                style={{
                  fontSize: 12.5,
                  color: "var(--grey-mid)",
                  marginTop: 2,
                }}
              >
                {item.desc}
              </div>
            )}
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
