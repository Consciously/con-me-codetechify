import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';
import { Project } from '@prisma/client';

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
	projects: Project[],
): ((project: Project) => 'large' | 'small') => {
	// Sort projects by importance and creation date
	const latestImportantProject = projects.sort((a, b) => {
		if (b.importance !== a.importance) {
			return b.importance - a.importance;
		}
		return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
	})[0];

	// Return a function that compares project IDs
	return (project: Project) =>
		project.id === latestImportantProject?.id ? 'large' : 'small';
};

export const getHeroData = async () => {};
