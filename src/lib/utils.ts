import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

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
