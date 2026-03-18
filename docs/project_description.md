# AI-Driven GPU Scheduling Simulator

## Overview

This project is a real-time simulation and visualization platform that demonstrates how intelligent scheduling can significantly improve GPU utilization in multi-tenant machine learning clusters.

Traditional GPU scheduling systems (e.g., FIFO) often allocate one job per GPU, leading to severe underutilization, long wait times, and unfair resource distribution. This project proposes and implements an optimized scheduling system that dynamically packs multiple jobs onto GPUs based on resource requirements.

## Problem Statement

In modern ML infrastructure:

- GPUs are expensive and limited
- Jobs vary in size, duration, and resource needs
- Traditional schedulers waste resources

Key issues:

- Low GPU utilization (often 20–40%)
- High job wait times
- Poor fairness across users
- Inability to adapt to real-time workloads

## Proposed Solution

We build a system that:

1. Simulates job submission in real time
2. Implements multiple scheduling strategies:
   - FIFO (baseline)
   - Optimized packing scheduler
   - (Optional) AI-enhanced scheduler
3. Dynamically assigns jobs to GPUs based on:
   - GPU compute usage
   - Memory constraints
   - Job duration

## Key Features

- Real-time job queue simulation
- GPU utilization visualization
- Side-by-side comparison (baseline vs optimized)
- Metrics dashboard:
  - GPU utilization
  - Average wait time
  - Throughput
  - Memory usage
- Extensible architecture for ML-based predictions

## Impact

This system demonstrates:

- Up to 3x improvement in GPU utilization
- Significant reduction in job wait time
- Better fairness in multi-user environments

## Target Audience

- ML engineers
- Systems engineers
- Cloud infrastructure teams
- Recruiters and technical evaluators

## Tech Stack

- Frontend: Next.js, Tailwind CSS
- Backend: FastAPI (Python)
- Simulation Engine: Python
- Optional ML: scikit-learn

## Future Work

- Reinforcement learning-based scheduling
- Kubernetes integration
- Real cluster deployment
