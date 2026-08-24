import { fmtInt, fmtPct } from "../data";

export default function ABTest({ data }) {
  return (
    <>
      <div className="ab-grid">
        {data.variants.map((v) => (
          <div className={`ab-card${v.winner ? " winner" : ""}`} key={v.key}>
            {v.winner && <span className="winner-badge">Mejor CVR</span>}
            <span className="ab-variant-tag">{v.key}</span>
            <p className="ab-message">{v.label}</p>

            <div className="ab-metrics">
              <div className="ab-metric">
                <div className="a-value">{fmtInt(v.bbdd)}</div>
                <div className="a-label">BBDD</div>
              </div>
              <div className="ab-metric">
                <div className="a-value">{fmtInt(v.impacted)}</div>
                <div className="a-label">Impactados</div>
              </div>
              <div className="ab-metric">
                <div className="a-value">{fmtPct(v.coverage)}</div>
                <div className="a-label">Cobertura</div>
              </div>
              <div className="ab-metric">
                <div className="a-value">{fmtInt(v.conversions)}</div>
                <div className="a-label">Conversiones</div>
              </div>
              <div className="ab-metric">
                <div className="a-value">{fmtPct(v.cvr)}</div>
                <div className="a-label">CVR</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="ab-note">
        <strong>Variante A</strong> (mensaje hiperpersonalizado sobre cuotas) superó a la{" "}
        <strong>Variante B</strong> (mensaje genérico) por 0,25 p.p. de CVR (25 vs. 23
        conversiones sobre 807 impactados en cada celda). La diferencia es direccionalmente
        favorable a la personalización, pero con esta muestra no es estadísticamente
        concluyente — vale la pena repetir el test con mayor volumen antes de generalizarlo.
      </p>
    </>
  );
}
