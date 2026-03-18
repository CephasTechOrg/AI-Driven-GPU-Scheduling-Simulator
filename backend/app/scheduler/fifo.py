def fifo_schedule(queue, gpus):
    for gpu in gpus:
        if not gpu.jobs and queue:
            job = queue[0]
            if gpu.can_fit(job):
                gpu.assign_job(job)
                queue.pop(0)
