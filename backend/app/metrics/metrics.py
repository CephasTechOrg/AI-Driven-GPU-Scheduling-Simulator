def calculate_metrics(gpus, completed_jobs, total_jobs, start_time):
    total_used = sum(gpu.used for gpu in gpus)
    utilization = total_used / len(gpus)

    wait_times = []
    for job in completed_jobs:
        if job.start_time:
            wait_times.append(job.start_time - job.submit_time)

    avg_wait = sum(wait_times) / len(wait_times) if wait_times else 0

    throughput = len(completed_jobs) / (time_elapsed(start_time))

    return {
        "utilization": round(utilization * 100, 2),
        "avg_wait_time": round(avg_wait, 2),
        "throughput": round(throughput, 2),
        "completed_jobs": len(completed_jobs),
        "total_jobs": total_jobs
    }


def time_elapsed(start_time):
    import time
    return max(time.time() - start_time, 1)
