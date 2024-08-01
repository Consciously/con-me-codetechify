import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';
import type { SelectProject } from '@/db/schema';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const generateRange = (start: number, end: number) => {
	const range = [];
	for (let i = start; i < end; i++) {
		range.push(i);
	}
	return range;
};

export const formatDate = (date: Date | string, dateFormat = 'yyyy-MM-dd') => {
	const dateObj = typeof date === 'string' ? new Date(date) : date;

	return format(dateObj, dateFormat);
};

export const separateWords = (text: string) => {
	return text.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
};

// Arrow function to determine if a project is large or small
export const getProjectSize = (
	projects: SelectProject[],
): ((project: SelectProject) => 'large' | 'small') => {
	if (!Array.isArray(projects) || projects.length === 0) {
		return () => 'small';
	}
	// Find the project with the highest importance and latest date
	const latestImportantProject = projects.sort((a, b) => {
		if (b.importance !== a.importance) {
			return b.importance - a.importance;
		}
		return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
	})[0];

	return (project: SelectProject) =>
		project.id === latestImportantProject?.id ? 'large' : 'small';
};
