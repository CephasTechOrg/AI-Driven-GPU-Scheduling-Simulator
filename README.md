# AI-Driven GPU Scheduling Simulator

GPU scheduling simulator for multi-tenant ML workloads, with a live dashboard for queue state, GPU packing, and runtime metrics.

## Overview

The system models a shared GPU cluster where jobs have variable GPU demand, memory usage, and duration. It supports multiple schedulers and exposes live state to a web UI.

Primary goal: compare baseline scheduling (`fifo`) against an optimized packing strategy (`smart`) and observe utilization and throughput differences in real time.

## Core Capabilities

- Real-time job generation and queue simulation
- Scheduler mode switching (`fifo` / `smart`)
- GPU allocation visualization with packed job segments
- Live metrics:
  - GPU utilization
  - average wait time
  - throughput
  - completed jobs
  - total generated jobs
- Simulation reset from the dashboard

## Technology

- Frontend: Next.js, TypeScript
- Backend: FastAPI
- Simulation engine: Python

## Repository Layout

```text
gpu-scheduler-sim/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── scheduler/
│   │   ├── simulation/
│   │   ├── metrics/
│   │   └── utils/
│   └── requirements.txt
├── frontend/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── styles/
└── docs/
```

## Execution Model

1. Jobs are generated with randomized resource requirements.
2. Jobs are queued until schedulable on available GPUs.
3. The selected scheduler assigns jobs to GPUs.
4. The simulation advances in 1-second ticks.
5. Metrics are recalculated from current state.
6. Frontend polls backend and renders updates continuously.

## Getting Started

### Backend

Run from `backend/`:

```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend URL: `http://127.0.0.1:8000`

### Frontend

Run from `frontend/`:

```bash
npm install
npm run dev
```

Frontend URL: `http://localhost:3000`

Optional frontend environment override (`frontend/.env.local`):

```bash
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
```

## API

- `GET /state` — returns queue, GPU state, metrics, and current mode
- `POST /mode/{mode}` — sets scheduler mode (`fifo` or `smart`)
- `POST /reset` — resets and restarts simulation state

## Scheduler Modes

- `fifo`: assigns at most one queued job to each empty GPU
- `smart`: greedily packs all jobs that fit into each GPU

## Roadmap

- Side-by-side parallel mode comparison
- AI-assisted scheduling policies
- Fairness and tenant-level policy controls
- Kubernetes-oriented deployment support

## License

Currently unlicensed. All rights reserved.
