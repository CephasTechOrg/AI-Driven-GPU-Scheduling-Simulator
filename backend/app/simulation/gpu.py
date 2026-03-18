class GPU:
    def __init__(self, gpu_id: int):
        self.id = gpu_id
        self.capacity = 1.0
        self.memory_capacity = 16  # GB

        self.used = 0.0
        self.memory_used = 0
        self.jobs = []

    def can_fit(self, job):
        return (
            self.used + job.gpu <= self.capacity and
            self.memory_used + job.memory <= self.memory_capacity
        )

    def assign_job(self, job):
        self.jobs.append(job)
        self.used += job.gpu
        self.memory_used += job.memory
        job.start()

    def step(self):
        finished = []

        for job in self.jobs:
            job.step()
            if job.is_done():
                finished.append(job)

        for job in finished:
            self.jobs.remove(job)
            self.used -= job.gpu
            self.memory_used -= job.memory

        return finished

    def to_dict(self):
        return {
            "id": self.id,
            "used": round(self.used, 2),
            "memory_used": self.memory_used,
            "jobs": [job.to_dict() for job in self.jobs]
        }
