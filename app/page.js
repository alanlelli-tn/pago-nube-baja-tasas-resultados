import StatCard from "./components/StatCard";
import GrowthRetention from "./components/GrowthRetention";
import BarList from "./components/BarList";
import ABTest from "./components/ABTest";
import CommsBlock from "./components/CommsBlock";
import SegmentTable from "./components/SegmentTable";
import {
  GENERAL,
  GROWTH,
  RETENTION,
  PLANS,
  BEST_PLAN,
  AB_TEST,
  COMMS,
  SEGMENTS,
  SEGMENT_DESCRIPTIONS,
  weightedEngagement,
  fmtInt,
  fmtPct,
} from "./data";

export default function Home() {
  const planItems = [...PLANS]
    .sort((a, b) => b.cvr - a.cvr)
    .map((p) => ({
      name: p.name,
      rate: p.cvr,
      isBest: p.name === BEST_PLAN,
      sub: `${fmtInt(p.conversions)} conversiones sobre ${fmtInt(p.impacted)} impactados`,
    }));

  const engagementRaw = SEGMENTS.map((seg) => {
    const clicks = seg.email.clicks + seg.inapp.clicks;
    const exposure = seg.email.opens + seg.inapp.views;
    return { key: seg.key, rate: weightedEngagement(seg), clicks, exposure };
  }).sort((a, b) => b.rate - a.rate);

  const topSegment = engagementRaw[0].key;

  const engagementItems = engagementRaw.map((e) => ({
    name: `Segmento ${e.key}`,
    rate: e.rate,
    isBest: e.key === topSegment,
    desc: SEGMENT_DESCRIPTIONS[e.key],
    sub: `${fmtInt(e.clicks)} clics (email + inapp) sobre ${fmtInt(
      e.exposure
    )} aperturas + views`,
  }));

  return (
    <main>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="container">
          <span className="hero-eyebrow">Pago Nube · Argentina</span>
          <h1>Resultados de la campaña de Baja de Tasas</h1>
          <p className="subtitle">
            Comunicación a merchants de Growth y Retention para incentivar la
            activación de Pago Nube y de cuotas, con medición de conversión
            sobre el GPV registrado entre el 10/8 y el 20/8.
          </p>

          <div className="hero-highlights">
            <div className="hero-highlight">
              <div className="value">{fmtInt(GENERAL.conversions)}</div>
              <div className="label">Conversiones totales</div>
            </div>
            <div className="hero-highlight">
              <div className="value">{fmtPct(GENERAL.cvr)}</div>
              <div className="label">CVR global</div>
            </div>
            <div className="hero-highlight">
              <div className="value">{fmtInt(GENERAL.impacted)}</div>
              <div className="label">Merchants impactados</div>
            </div>
            <div className="hero-highlight">
              <div className="value">{fmtPct(GENERAL.coverage)}</div>
              <div className="label">Cobertura</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- NIVEL GENERAL ---------- */}
      <section className="block">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Nivel general</span>
            <h2>Toda la campaña, en números</h2>
            <p>
              Agregado de los dos segmentos comerciales de la campaña —
              Growth y Retention.
            </p>
          </div>

          <div className="stat-grid">
            <StatCard label="Audiencia potencial" value={fmtInt(GENERAL.audience)} />
            <StatCard label="Impactados" value={fmtInt(GENERAL.impacted)} />
            <StatCard label="Cobertura" value={fmtPct(GENERAL.coverage)} />
            <StatCard label="Conversiones" value={fmtInt(GENERAL.conversions)} />
            <StatCard label="CVR" value={fmtPct(GENERAL.cvr)} accent />
          </div>
        </div>
      </section>

      {/* ---------- GROWTH vs RETENTION ---------- */}
      <section className="block alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Growth vs. Retention</span>
            <h2>La conversión no fue pareja entre ambos segmentos</h2>
            <p>
              Retention convirtió a una tasa ~5,6x superior a Growth, aunque
              con audiencias de tamaño similar.
            </p>
          </div>

          <GrowthRetention growth={GROWTH} retention={RETENTION} />
        </div>
      </section>

      {/* ---------- HIGHLIGHTS ---------- */}
      <section className="block">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Highlights</span>
            <h2>Lo más destacado</h2>
          </div>

          {/* Mejor plan */}
          <div style={{ marginBottom: 48 }}>
            <h3 style={{ fontSize: 18, marginBottom: 6 }}>
              ¿Qué plan tuvo la mejor conversión?
            </h3>
            <p style={{ color: "var(--grey-light)", fontSize: 14, marginBottom: 16 }}>
              Combinando Growth + Retention, cada comercio convertido con su
              propio criterio de segmento.{" "}
              <strong style={{ color: "var(--blue-dark)" }}>{BEST_PLAN}</strong> lidera
              tanto en CVR como en volumen de conversiones.
            </p>
            <BarList items={planItems} />
          </div>

          {/* A/B test */}
          <div style={{ marginBottom: 48 }}>
            <h3 style={{ fontSize: 18, marginBottom: 6 }}>
              Test A/B — Segmento {AB_TEST.segment}, {AB_TEST.plan}
            </h3>
            <p style={{ color: "var(--grey-light)", fontSize: 14, marginBottom: 16 }}>
              Dos mensajes distintos para el mismo segmento y plan, con BBDD
              de tamaño equivalente.
            </p>
            <ABTest data={AB_TEST} />
          </div>

          {/* Comunicaciones */}
          <div style={{ marginBottom: 48 }}>
            <h3 style={{ fontSize: 18, marginBottom: 6 }}>
              Resultados de las comunicaciones
            </h3>
            <p style={{ color: "var(--grey-light)", fontSize: 14, marginBottom: 16 }}>
              Agregado de las {COMMS.campaigns} campañas de la comunicación de
              baja de tasas, por canal.
            </p>
            <CommsBlock comms={COMMS} />
          </div>

          {/* Engagement por segmento */}
          <div>
            <h3 style={{ fontSize: 18, marginBottom: 6 }}>
              Segmentos con mayor engagement en las comms
            </h3>
            <p style={{ color: "var(--grey-light)", fontSize: 14, marginBottom: 16 }}>
              Engagement ponderado = clics totales (email + inapp) sobre el
              total de aperturas de email + views de inapp.{" "}
              <strong style={{ color: "var(--blue-dark)" }}>
                Segmento {topSegment}
              </strong>{" "}
              es el que más engagement generó.
            </p>
            <BarList items={engagementItems} bestLabel="Mayor engagement" />

            <div style={{ marginTop: 24 }}>
              <SegmentTable segments={SEGMENTS} comms={COMMS} />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>
            <strong>Pago Nube — Campaña Baja de Tasas</strong>
          </p>
          <p style={{ marginTop: 6 }}>
            Conversión de Growth: audiencia potencial + impactado (inapp o
            email) + estado activo con GPV de Pago Nube entre el 10/8 y el
            20/8. Conversión de Retention: audiencia potencial + impactado +
            activación de card o de cuotas según segmento, en la misma
            ventana. CTOR de email = clics / aperturas; CTR inapp = clics /
            views.
          </p>
        </div>
      </footer>
    </main>
  );
}
