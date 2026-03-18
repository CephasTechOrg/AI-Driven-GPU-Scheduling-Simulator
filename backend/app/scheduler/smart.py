def smart_schedule(queue, gpus):
    for gpu in gpus:
        for job in queue[:]:
            if gpu.can_fit(job):
                gpu.assign_job(job)
                queue.remove(job)
