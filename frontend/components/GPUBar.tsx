type Job = {
  id: number;
  gpu: number;
  memory: number;
  remaining: number;
  duration: number;
};

type GPU = {
  id: number;
  used: number;
  memory_used: number;
  jobs: Job[];
};

export default function GPUBar({ gpu }: { gpu: GPU }) {
  const usedPct = Math.round(gpu.used * 100);

  return (
    <div className="gpu-row">
      <div className="gpu-title">GPU {gpu.id}</div>

      <div className="gpu-track" role="img" aria-label={`GPU ${gpu.id} utilization`}>
        {gpu.jobs.map((job) => (
          <div
            key={job.id}
            className="gpu-job-segment"
            title={`Job ${job.id} · ${Math.round(job.gpu * 100)}% GPU · ${job.memory}GB`}
            style={{ width: `${job.gpu * 100}%` }}
          >
            {job.id}
          </div>
        ))}

        {gpu.used < 1 ? (
          <div className="gpu-idle-segment" style={{ width: `${(1 - gpu.used) * 100}%` }} />
        ) : null}
      </div>

      <div className="gpu-meta muted">
        <span>Usage: {usedPct}%</span>
        <span>Memory: {gpu.memory_used} / 16 GB</span>
      </div>
    </div>
  );
}
  