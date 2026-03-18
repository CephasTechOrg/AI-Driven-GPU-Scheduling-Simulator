import GPUBar from "./GPUBar";

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

export default function GPUCluster({
  gpus,
  loading,
}: {
  gpus: GPU[];
  loading?: boolean;
}) {
  return (
    <section className="panel gpu-panel">
      <h2>GPU Cluster</h2>

      {loading ? <p className="muted">Loading GPUs...</p> : null}

      {gpus.map((gpu) => (
        <GPUBar key={gpu.id} gpu={gpu} />
      ))}

      {!loading && gpus.length === 0 ? <p className="muted">No GPU data</p> : null}
    </section>
  );
}
