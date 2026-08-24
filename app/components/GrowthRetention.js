import { fmtInt, fmtPct } from "../data";

function CompareCard({ title, data, variant }) {
  return (
    <div className={`compare-card ${variant}`}>
      <div className="compare-title">{title}</div>
      <div className="compare-cvr">{fmtPct(data.cvr)}</div>
      <div className="compare-cvr-label">CVR (conversiones / impactados)</div>

      <div className="compare-metrics">
        <div className="compare-metric">
          <div className="m-value">{fmtInt(data.audience)}</div>
          <div className="m-label">Audiencia potencial</div>
        </div>
        <div className="compare-metric">
          <div className="m-value">{fmtInt(data.impacted)}</div>
          <div className="m-label">Impactados</div>
        </div>
        <div className="compare-metric">
          <div className="m-value">{fmtPct(data.coverage)}</div>
          <div className="m-label">Cobertura</div>
        </div>
        <div className="compare-metric">
          <div className="m-value">{fmtInt(data.conversions)}</div>
          <div className="m-label">Conversiones</div>
        </div>
      </div>
    </div>
  );
}

export default function GrowthRetention({ growth, retention }) {
  return (
    <div className="compare-grid">
      <CompareCard title="Growth" data={growth} variant="growth" />
      <CompareCard title="Retention" data={retention} variant="retention" />
    </div>
  );
}
