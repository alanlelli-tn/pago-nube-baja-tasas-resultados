export default function StatCard({ label, value, accent, compareLabel, compareValue, trend }) {
  return (
    <div className="stat-card">
      <div className="stat-label">{label}</div>
      <div className={`stat-value${accent ? " accent" : ""}`}>{value}</div>
      {compareLabel && (
        <div style={{ fontSize: 12, color: "var(--grey-mid)", marginTop: 6 }}>
          {compareLabel}{" "}
          <strong
            style={{
              color: trend === "down" ? "#d64550" : "var(--success)",
            }}
          >
            {compareValue}
          </strong>
        </div>
      )}
    </div>
  );
}
