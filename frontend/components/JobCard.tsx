type Job = {
	id: number;
	gpu: number;
	memory: number;
	remaining: number;
	duration: number;
};

export default function JobCard({ job }: { job: Job }) {
	const progress = Math.max(
		0,
		Math.min(100, ((job.duration - job.remaining) / job.duration) * 100)
	);

	return (
		<article className="job-card">
			<div className="job-card-row">
				<strong>Job {job.id}</strong>
				<span>{Math.round(job.gpu * 100)}% GPU</span>
			</div>

			<div className="job-card-row muted">
				<span>{job.memory} GB</span>
				<span>
					{job.remaining}s / {job.duration}s
				</span>
			</div>

			<div className="job-progress-track">
				<div className="job-progress-fill" style={{ width: `${progress}%` }} />
			</div>
		</article>
	);
}
