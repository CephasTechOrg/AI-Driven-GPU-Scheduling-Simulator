import random
import time

class Job:
    def __init__(self, job_id: int):
        self.id = job_id
        self.gpu = round(random.uniform(0.1, 0.7), 2)  # GPU usage %
        self.memory = random.randint(2, 12)  # GB
        self.duration = random.randint(10, 100)  # seconds
        self.remaining = self.duration

        self.submit_time = time.time()
        self.start_time = None
        self.end_time = None

    def start(self):
        self.start_time = time.time()

    def step(self):
        if self.remaining > 0:
            self.remaining -= 1

    def is_done(self):
        return self.remaining <= 0

    def to_dict(self):
        return {
            "id": self.id,
            "gpu": self.gpu,
            "memory": self.memory,
            "remaining": self.remaining,
            "duration": self.duration
        }
