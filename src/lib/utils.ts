import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';

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

export const formatDate = (
	date: Date | string | number,
	dateFormat = 'yyyy-MM-dd',
) => {
	const dateObj =
		typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;

	return format(dateObj, dateFormat);
};

export const separateWords = (text: string) => {
	return text.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
};
