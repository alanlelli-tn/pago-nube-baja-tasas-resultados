// Datos de resultados de la campaña "Baja de tasas" — Pago Nube (AR)
// Fuentes:
// - Conversiones generales / Growth / Retention / Test A-B: sheet "Análisis conversiones"
// - Mejor plan: sheets Growth_Comu_Tasas_ACTUALIZADO.xlsx y Retention_Comu_Tasas_ACTUALIZADO.xlsx
// - Comunicaciones (email + inapp) y engagement por segmento: dashboard interno (HubSpot + Userflow/Google Sheets)

export const GENERAL = {
  audience: 25668,
  impacted: 21589,
  coverage: 84.11,
  conversions: 1689,
  cvr: 7.82,
};

export const GROWTH = {
  audience: 11641,
  impacted: 8994,
  coverage: 77.26,
  conversions: 192,
  cvr: 2.13,
};

export const RETENTION = {
  audience: 14027,
  impacted: 12595,
  coverage: 89.79,
  conversions: 1497,
  cvr: 11.89,
};

// Mejor plan — combinando Growth + Retention, cada fila convertida con su propio criterio
export const PLANS = [
  { name: "Custom Plan", impacted: 13006, conversions: 1260, cvr: 9.69 },
  { name: "Super Economy Plan", impacted: 39, conversions: 3, cvr: 7.69 },
  { name: "Economy Plan", impacted: 1777, conversions: 127, cvr: 7.15 },
  { name: "Otros (legacy)", impacted: 530, conversions: 31, cvr: 5.85 },
  { name: "Select Plan", impacted: 102, conversions: 5, cvr: 4.9 },
  { name: "Value Plan", impacted: 6135, conversions: 263, cvr: 4.29 },
];

export const BEST_PLAN = "Custom Plan";

export const AB_TEST = {
  segment: "E",
  plan: "Value Plan",
  variants: [
    {
      key: "A",
      label: "Mensaje hiperpersonalizado sobre el beneficio de ofrecer cuotas",
      bbdd: 1367,
      impacted: 807,
      coverage: 59.03,
      conversions: 25,
      cvr: 3.1,
      winner: true,
    },
    {
      key: "B",
      label: "Mensaje genérico sobre la baja de tasas",
      bbdd: 1368,
      impacted: 807,
      coverage: 58.99,
      conversions: 23,
      cvr: 2.85,
    },
  ],
};

export const COMMS = {
  campaigns: 32,
  email: {
    sent: 27093,
    delivered: 26980,
    opens: 11936,
    openRate: 44.24,
    clicks: 243,
    ctor: 2.04,
  },
  inapp: {
    views: 26774,
    clicks: 1111,
    ctr: 4.15,
  },
};

export const SEGMENTS = [
  {
    key: "A",
    email: { sent: 14417, delivered: 14366, opens: 6378, openRate: 44.4, clicks: 165, ctor: 2.59 },
    inapp: { views: 14401, clicks: 809, ctr: 5.62 },
  },
  {
    key: "B",
    email: { sent: 1336, delivered: 1331, opens: 631, openRate: 47.41, clicks: 8, ctor: 1.27 },
    inapp: { views: 1205, clicks: 67, ctr: 5.56 },
  },
  {
    key: "C",
    email: { sent: 864, delivered: 858, opens: 406, openRate: 47.32, clicks: 6, ctor: 1.48 },
    inapp: { views: 937, clicks: 36, ctr: 3.84 },
  },
  {
    key: "D",
    email: { sent: 7119, delivered: 7087, opens: 3151, openRate: 44.46, clicks: 43, ctor: 1.36 },
    inapp: { views: 7582, clicks: 128, ctr: 1.69 },
  },
  {
    key: "E",
    email: { sent: 3357, delivered: 3338, opens: 1370, openRate: 41.04, clicks: 21, ctor: 1.53 },
    inapp: { views: 2649, clicks: 71, ctr: 2.68 },
  },
];

export const SEGMENT_DESCRIPTIONS = {
  A: "Usa Pago Nube, con card",
  B: "Usa Pago Nube, sin card",
  C: "Usa Pago Nube, sin card, pero ofrece card con competencia",
  D: "No usa Pago Nube, ofrece card/cuotas con la competencia",
  E: "No usa Pago Nube, no ofrece card/cuotas con la competencia",
};

// Benchmark: campaña anterior "Baja de tasas - julio"
export const BENCHMARK_JULY = {
  label: "Baja de tasas · julio",
  general: { impacted: 18552, conversions: 1240, cvr: 6.68 },
  growth: { cvr: 5.88 },
  retention: { cvr: 7.53 },
};

// Variación relativa (para conteos: impactados, conversiones)
export function pctDelta(current, prev) {
  const pct = ((current - prev) / prev) * 100;
  const sign = pct >= 0 ? "+" : "";
  return `${sign}${pct.toLocaleString("es-AR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })}%`;
}

// Variación en puntos porcentuales (para tasas: CVR, cobertura, etc.)
export function ppDelta(current, prev) {
  const diff = current - prev;
  const sign = diff >= 0 ? "+" : "";
  return `${sign}${diff.toLocaleString("es-AR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} p.p.`;
}

// Engagement ponderado = (clics email + clics inapp) / (aperturas email + views inapp)
export function weightedEngagement(seg) {
  const clicks = seg.email.clicks + seg.inapp.clicks;
  const exposure = seg.email.opens + seg.inapp.views;
  return (clicks / exposure) * 100;
}

export function fmtInt(n) {
  return n.toLocaleString("es-AR");
}

export function fmtPct(n, decimals = 2) {
  return (
    n.toLocaleString("es-AR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }) + "%"
  );
}
