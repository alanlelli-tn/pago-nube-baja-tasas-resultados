import { fmtInt, fmtPct, weightedEngagement } from "../data";

export default function SegmentTable({ segments, comms }) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            <th>Segmento</th>
            <th>Email enviados</th>
            <th>Email entregados</th>
            <th>Aperturas</th>
            <th>Open rate</th>
            <th>Clics email</th>
            <th>CTOR</th>
            <th>Views inapp</th>
            <th>Clics inapp</th>
            <th>CTR inapp</th>
            <th>Engagement ponderado</th>
          </tr>
        </thead>
        <tbody>
          {segments.map((seg) => (
            <tr key={seg.key}>
              <td>
                <span className="seg-dot">{seg.key}</span>
                Segmento {seg.key}
              </td>
              <td>{fmtInt(seg.email.sent)}</td>
              <td>{fmtInt(seg.email.delivered)}</td>
              <td>{fmtInt(seg.email.opens)}</td>
              <td>{fmtPct(seg.email.openRate)}</td>
              <td>{fmtInt(seg.email.clicks)}</td>
              <td>{fmtPct(seg.email.ctor)}</td>
              <td>{fmtInt(seg.inapp.views)}</td>
              <td>{fmtInt(seg.inapp.clicks)}</td>
              <td>{fmtPct(seg.inapp.ctr)}</td>
              <td>{fmtPct(weightedEngagement(seg))}</td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>{fmtInt(comms.email.sent)}</td>
            <td>{fmtInt(comms.email.delivered)}</td>
            <td>{fmtInt(comms.email.opens)}</td>
            <td>{fmtPct(comms.email.openRate)}</td>
            <td>{fmtInt(comms.email.clicks)}</td>
            <td>{fmtPct(comms.email.ctor)}</td>
            <td>{fmtInt(comms.inapp.views)}</td>
            <td>{fmtInt(comms.inapp.clicks)}</td>
            <td>{fmtPct(comms.inapp.ctr)}</td>
            <td>
              {fmtPct(
                ((comms.email.clicks + comms.inapp.clicks) /
                  (comms.email.opens + comms.inapp.views)) *
                  100
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
