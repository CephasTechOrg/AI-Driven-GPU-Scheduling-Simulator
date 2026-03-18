type MetricsType = {
  utilization: number;
  avg_wait_time: number;
  throughput: number;
  completed_jobs: number;
  total_jobs: number;
};

export default function Metrics({
  metrics,
  loading,
}: {
  metrics: MetricsType;
  loading?: boolean;
}) {
  return (
    <section className="panel metrics-panel">
      <h2>Metrics</h2>

      {loading ? (
        <p className="muted">Loading metrics...</p>
      ) : (
        <div className="metrics-grid">
          <div className="metric-card">
            <span className="metric-label">GPU Utilization</span>
            <strong>{metrics.utilization}%</strong>
          </div>

          <div className="metric-card">
            <span className="metric-label">Avg Wait Time</span>
            <strong>{metrics.avg_wait_time}s</strong>
          </div>

          <div className="metric-card">
            <span className="metric-label">Throughput</span>
            <strong>{metrics.throughput} jobs/s</strong>
          </div>

          <div className="metric-card">
            <span className="metric-label">Completed Jobs</span>
            <strong>{metrics.completed_jobs}</strong>
          </div>

          <div className="metric-card">
            <span className="metric-label">Generated Jobs</span>
            <strong>{metrics.total_jobs}</strong>
          </div>
        </div>
      )}
    </section>
  );
}
  