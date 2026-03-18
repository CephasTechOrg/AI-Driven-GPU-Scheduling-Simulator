import threading
import time
from app.simulation.job import Job
from app.simulation.gpu import GPU
from app.scheduler.fifo import fifo_schedule
from app.scheduler.smart import smart_schedule
from app.metrics.metrics import calculate_metrics

class SimulationEngine:
    def __init__(self):
        self.queue = []
        self.completed = []
        self.gpus = [GPU(i) for i in range(1, 5)]

        self.job_id = 1
        self.running = False
        self.mode = "fifo"
        self.start_time = time.time()

    def generate_job(self):
        job = Job(self.job_id)
        self.job_id += 1
        self.queue.append(job)

    def schedule(self):
        if self.mode == "fifo":
            fifo_schedule(self.queue, self.gpus)
        else:
            smart_schedule(self.queue, self.gpus)

    def step(self):
        # Generate jobs randomly
        if len(self.queue) < 10:
            self.generate_job()

        # Schedule jobs
        self.schedule()

        # Advance GPUs
        for gpu in self.gpus:
            finished = gpu.step()
            self.completed.extend(finished)

    def run(self):
        self.running = True
        while self.running:
            self.step()
            time.sleep(1)

    def start(self):
        threading.Thread(target=self.run, daemon=True).start()

    def stop(self):
        self.running = False

    def set_mode(self, mode):
        self.mode = mode

    def get_state(self):
        metrics = calculate_metrics(
            self.gpus,
            self.completed,
            self.job_id,
            self.start_time
        )

        return {
            "queue": [job.to_dict() for job in self.queue],
            "gpus": [gpu.to_dict() for gpu in self.gpus],
            "metrics": metrics,
            "mode": self.mode
        }
