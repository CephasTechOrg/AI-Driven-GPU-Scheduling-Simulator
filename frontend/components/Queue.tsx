import JobCard from "./JobCard";

type Job = {
  id: number;
  gpu: number;
  memory: number;
  remaining: number;
  duration: number;
};

export default function Queue({
  jobs,
  loading,
}: {
  jobs: Job[];
  loading?: boolean;
}) {
  return (
    <section className="panel queue-panel">
      <h2>Job Queue</h2>

      {loading ? <p className="muted">Loading queue...</p> : null}

      {!loading && jobs.length === 0 ? (
        <p className="muted">No waiting jobs</p>
      ) : null}

      <div className="job-list">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}
  