import { fmtInt, fmtPct } from "../data";

export default function CommsBlock({ comms }) {
  return (
    <div className="comms-grid">
      <div>
        <div className="comms-channel-head">
          <h4>Email</h4>
          <span className="source-tag">HubSpot</span>
        </div>
        <div className="mini-stat-grid">
          <div className="mini-stat">
            <div className="v">{fmtInt(comms.email.sent)}</div>
            <div className="l">Enviados</div>
          </div>
          <div className="mini-stat">
            <div className="v">{fmtInt(comms.email.delivered)}</div>
            <div className="l">Entregados</div>
          </div>
          <div className="mini-stat">
            <div className="v">{fmtInt(comms.email.opens)}</div>
            <div className="l">Aperturas únicas</div>
          </div>
          <div className="mini-stat">
            <div className="v">{fmtPct(comms.email.openRate)}</div>
            <div className="l">Open rate</div>
          </div>
          <div className="mini-stat">
            <div className="v">{fmtInt(comms.email.clicks)}</div>
            <div className="l">Clics únicos</div>
          </div>
          <div className="mini-stat">
            <div className="v">{fmtPct(comms.email.ctor)}</div>
            <div className="l">CTOR</div>
          </div>
        </div>
      </div>

      <div>
        <div className="comms-channel-head">
          <h4>Inapp</h4>
          <span className="source-tag">Google Sheets · en vivo</span>
        </div>
        <div className="mini-stat-grid">
          <div className="mini-stat">
            <div className="v">{fmtInt(comms.inapp.views)}</div>
            <div className="l">Views únicas</div>
          </div>
          <div className="mini-stat">
            <div className="v">{fmtInt(comms.inapp.clicks)}</div>
            <div className="l">Clics únicos</div>
          </div>
          <div className="mini-stat">
            <div className="v">{fmtPct(comms.inapp.ctr)}</div>
            <div className="l">CTR</div>
          </div>
        </div>
      </div>
    </div>
  );
}
