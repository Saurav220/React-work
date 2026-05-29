import "./StatusBadge.css";

const STATUS_CLASSES = {
  pending: "status-badge--pending",
  "in-progress": "status-badge--in-progress",
  completed: "status-badge--completed",
  failed: "status-badge--failed",
  "on-hold": "status-badge--on-hold",
};

function formatStatus(status = "") {
  return status
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function StatusBadge({ status }) {
  const badgeClass = STATUS_CLASSES[status] || "status-badge--default";

  return (
    <span className={`status-badge ${badgeClass}`}>
      {formatStatus(status || "unknown")}
    </span>
  );
}

export default StatusBadge;
