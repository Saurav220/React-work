import StatusBadge from "./StatusBadge";

function App() {
  const statuses = ["pending", "in-progress", "completed", "failed", "on-hold"];

  return (
    <div style={{ padding: "24px" }}>
      <h1>Status Badge Demo</h1>

      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          marginTop: "16px",
        }}
      >
        {statuses.map((status) => (
          <StatusBadge key={status} status={status} />
        ))}
      </div>

      <h2 style={{ marginTop: "24px" }}>Unknown Status</h2>
      <StatusBadge status="archived" />
    </div>
  );
}

export default App;
