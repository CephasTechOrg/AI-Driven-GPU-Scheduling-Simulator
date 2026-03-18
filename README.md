# AI-Driven GPU Scheduling Simulator

Real-time simulation and visualization platform for GPU job scheduling in multi-tenant ML clusters.

This project compares baseline scheduling (`FIFO`) vs optimized packing (`smart`) and visualizes the impact on utilization, queue behavior, and throughput.

---

## Features

- Real-time job generation and queue simulation
- Multiple scheduling strategies:
  - `FIFO` (baseline)
  - `smart` (optimized packing)
- Live GPU cluster visualization
- Live metrics dashboard:
  - GPU utilization
  - average wait time
  - throughput
  - completed and total jobs
- Mode switching and simulation reset from UI

---

## Tech Stack

- **Frontend:** Next.js + TypeScript
- **Backend:** FastAPI (Python)
- **Simulation:** Custom Python engine

---

## Project Structure

```text
gpu-scheduler-sim/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── scheduler/
│   │   │   ├── fifo.py
│   │   │   └── smart.py
│   │   ├── simulation/
│   │   │   ├── engine.py
│   │   │   ├── gpu.py
│   │   │   └── job.py
│   │   └── metrics/
│   │       └── metrics.py
│   └── requirements.txt
├── frontend/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── styles/
└── docs/
```

---

## How It Works

1. Jobs are generated with random GPU, memory, and duration requirements.
2. Jobs enter the queue.
3. Scheduler assigns jobs to GPUs using the selected mode.
4. Simulation advances every second.
5. Metrics are computed from current cluster state.
6. Frontend polls backend and renders queue, GPUs, and metrics live.

---

## Local Setup

## 1) Backend

From the `backend` folder:

```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend runs at: `http://127.0.0.1:8000`

---

## 2) Frontend

From the `frontend` folder:

```bash
npm install
npm run dev
```

Frontend runs at: `http://localhost:3000`

Optional API override:

```bash
# frontend/.env.local
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
```

---

## API Endpoints

- `GET /state` → current queue, GPU allocation, metrics, mode
- `POST /mode/{mode}` → set scheduler mode (`fifo` or `smart`)
- `POST /reset` → reset simulation engine

---

## Current Scheduler Modes

- **FIFO**: Places at most one queued job onto each empty GPU.
- **Smart**: Attempts to pack as many fitting jobs as possible per GPU.

---

## Roadmap

- Side-by-side dual simulation view (FIFO vs smart in parallel)
- AI/ML-enhanced scheduler
- Fairness metrics and user-level prioritization
- Kubernetes and real cluster integration

---

## License

For academic/demo use. Add a formal license file if you plan to distribute publicly.
