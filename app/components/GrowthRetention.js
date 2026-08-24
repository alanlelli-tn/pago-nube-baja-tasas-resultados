import { fmtInt, fmtPct, ppDelta } from "../data";

function CompareCard({ title, data, variant, benchmarkCvr }) {
  const trendUp = data.cvr >= benchmarkCvr;

  return (
    <div className={`compare-card ${variant}`}>
      <div className="compare-title">{title}</div>
      <div className="compare-cvr">{fmtPct(data.cvr)}</div>
      <div className="compare-cvr-label">CVR (conversiones / impactados)</div>
      <div
        style={{
          fontSize: 12.5,
          color: "rgba(255,255,255,0.75)",
          marginTop: 6,
        }}
      >
        vs. julio:{" "}
        <strong style={{ color: trendUp ? "#7CFFC4" : "#FFB4B4" }}>
          {fmtPct(benchmarkCvr)} ({ppDelta(data.cvr, benchmarkCvr)})
        </strong>
      </div>

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

export default function GrowthRetention({ growth, retention, benchmark }) {
  return (
    <div className="compare-grid">
      <CompareCard
        title="Growth"
        data={growth}
        variant="growth"
        benchmarkCvr={benchmark.growth.cvr}
      />
      <CompareCard
        title="Retention"
        data={retention}
        variant="retention"
        benchmarkCvr={benchmark.retention.cvr}
      />
    </div>
  );
}
