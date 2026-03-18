# System Architecture

## Overview

The system follows a client-server architecture with a simulation engine at its core.

---

## High-Level Architecture

Frontend (Next.js)
↓
FastAPI Backend
↓
Scheduler Engine
↓
Simulation Engine
↓
Metrics Engine

---

## Components

### 1. Frontend (Next.js)

- Displays queue, GPUs, metrics
- Handles user interactions
- Polls backend for updates

---

### 2. Backend (FastAPI)

- Exposes API endpoints:
  - /state
  - /start
  - /reset
- Runs simulation loop
- Applies scheduling algorithms

---

### 3. Scheduler Engine

Implements:

- FIFO Scheduler
- Smart Packing Scheduler
- (Optional) AI Scheduler

---

### 4. Simulation Engine

- Generates jobs
- Updates job progress
- Handles job completion

---

### 5. Metrics Engine

Tracks:

- GPU utilization
- Wait times
- Throughput
- Memory usage

---

## Data Flow

1. Jobs are generated
2. Jobs enter queue
3. Scheduler assigns jobs to GPUs
4. Simulation updates job states
5. Metrics are calculated
6. Frontend renders updated state

---

## Future Extensions

- ML prediction module
- Distributed scheduling
- Real GPU integration
