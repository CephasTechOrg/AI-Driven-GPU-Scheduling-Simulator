"use client";

import { useEffect, useMemo, useState } from "react";
import GPUCluster from "../components/GPUCluster";
import Metrics from "../components/Metrics";
import Queue from "../components/Queue";
import Toggle from "../components/Toggle";
import { fetchState, resetSimulation, setMode } from "../lib/api";

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

type MetricsType = {
  utilization: number;
  avg_wait_time: number;
  throughput: number;
  completed_jobs: number;
  total_jobs: number;
};

type SimulationState = {
  queue: Job[];
  gpus: GPU[];
  metrics: MetricsType;
  mode: "fifo" | "smart";
};

const INITIAL_STATE: SimulationState = {
  queue: [],
  gpus: [],
  metrics: {
    utilization: 0,
    avg_wait_time: 0,
    throughput: 0,
    completed_jobs: 0,
    total_jobs: 0,
  },
  mode: "fifo",
};

export default function Home() {
  const [state, setState] = useState<SimulationState>(INITIAL_STATE);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined;
    let mounted = true;

    const load = async () => {
      try {
        const next = await fetchState();
        if (!mounted) {
          return;
        }
        setState(next);
        setError(null);
      } catch {
        if (mounted) {
          setError("Cannot reach backend at http://127.0.0.1:8000");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    load();
    intervalId = setInterval(load, 1000);

    return () => {
      mounted = false;
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  const modeLabel = useMemo(() => {
    return state.mode === "fifo" ? "FIFO" : "Optimized";
  }, [state.mode]);

  const onModeChange = async (mode: "fifo" | "smart") => {
    try {
      await setMode(mode);
      setState((prev) => ({ ...prev, mode }));
    } catch {
      setError("Failed to change scheduler mode");
    }
  };

  const onReset = async () => {
    try {
      await resetSimulation();
      setError(null);
      setLoading(true);
      const next = await fetchState();
      setState(next);
      setLoading(false);
    } catch {
      setError("Failed to reset simulation");
      setLoading(false);
    }
  };

  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <div>
          <h1>AI-Driven GPU Scheduling Simulator</h1>
          <p>
            Live cluster state · mode: <strong>{modeLabel}</strong>
          </p>
        </div>

        <div className="header-actions">
          <Toggle mode={state.mode} setMode={onModeChange} />
          <button className="btn btn-secondary" onClick={onReset}>
            Reset
          </button>
        </div>
      </header>

      {error ? <p className="error-banner">{error}</p> : null}

      <section className="panels">
        <Queue jobs={state.queue} loading={loading} />
        <GPUCluster gpus={state.gpus} loading={loading} />
      </section>

      <Metrics metrics={state.metrics} loading={loading} />
    </main>
  );
}
  