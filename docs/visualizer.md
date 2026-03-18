# Visualization Design

## Goal

To provide a clear, real-time visual understanding of how GPU scheduling strategies impact system efficiency.

---

## Layout

### Top Section: Mode Toggle

[ FIFO ❌ ] [ Optimized ✅ ]

---

## Left Panel: Job Queue

Displays incoming jobs:

[ Job A | 30% GPU | 2h ]
[ Job B | 10% GPU | 5m ]
[ Job C | 50% GPU | 30m ]

Features:

- Animated arrival of jobs
- Color-coded by user or job type

---

## Right Panel: GPU Cluster

Each GPU is displayed as a horizontal bar:

GPU 1:
[ A ][ B ][ C ] → 90%

GPU 2:
[ D ][ E ] → 70%

Design:

- Each block = job
- Width = GPU usage
- Color = job identity
- Tooltip: job details

---

## Bottom Panel: Metrics Dashboard

Key metrics:

- GPU Utilization (%)
- Average Wait Time
- Throughput (jobs/min)
- Memory Usage (GB)
- Queue Length

---

## Visual Indicators

- Red: idle/wasted resources
- Green: efficient utilization
- Blue: active jobs

---

## Animations

- Jobs move from queue → GPU
- GPU bars update in real time
- Smooth transitions when switching modes

---

## Key Interaction

Switching from FIFO → Optimized should:

- Repack jobs instantly
- Increase GPU utilization visually
- Reduce queue size

---

## Goal of Visualization

Make inefficiency obvious and improvements undeniable.
