export function formatExperienceDate(dateString: string | null): string {
	if (!dateString) return 'Present';

	const date = new Date(dateString);
	return date.toLocaleDateString('en-US', {
		month: 'short',
		year: 'numeric',
	});
}

export function getExperienceDuration({
	startDate,
	endDate,
}: {
	startDate: string;
	endDate: string | null;
}): string {
	const start = new Date(startDate);
	const end = endDate ? new Date(endDate) : new Date();

	const monthDiff =
		(end.getFullYear() - start.getFullYear()) * 12 +
		(end.getMonth() - start.getMonth());

	const years = Math.floor(monthDiff / 12);
	const months = monthDiff % 12;

	if (years > 0 && months > 0) {
		return `${years}y ${months}m`;
	} else if (years > 0) {
		return `${years}y`;
	} else {
		return `${months}m`;
	}
}
