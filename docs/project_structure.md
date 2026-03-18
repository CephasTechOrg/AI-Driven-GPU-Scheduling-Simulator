# Project Structure

## Root

gpu-scheduler-sim/
│
├── backend/
├── frontend/
├── docs/
└── README.md

---

## Backend (FastAPI)

backend/
│
├── app/
│ ├── main.py # FastAPI entry point
│ ├── routes/
│ │ └── state.py # API endpoints
│ │
│ ├── scheduler/
│ │ ├── fifo.py
│ │ ├── smart.py
│ │
│ ├── simulation/
│ │ ├── engine.py # simulation loop
│ │ ├── job.py # job model
│ │ ├── gpu.py # GPU model
│ │
│ ├── metrics/
│ │ └── metrics.py
│ │
│ └── utils/
│ └── helpers.py
│
├── requirements.txt

---

## Frontend (Next.js)

frontend/
│
├── app/
│ ├── page.tsx
│ ├── layout.tsx
│
├── components/
│ ├── Queue.tsx
│ ├── GPUCluster.tsx
│ ├── GPUBar.tsx
│ ├── JobCard.tsx
│ ├── MetricsDashboard.tsx
│ ├── ToggleMode.tsx
│
├── lib/
│ └── api.ts # API calls
│
├── styles/
│ └── globals.css
│
└── package.json

---

## Docs

docs/
│
├── project_description.md
├── visualizer.md
├── architecture.md
├── project_structure.md
