import 'server-only';
import { utapi } from '../utils';

export const getStaticFiles = async () => {
	try {
		const rawFiles = await utapi.listFiles();
		return rawFiles;
	} catch (error) {
		console.error('Error fetching static files:', error);
		throw new Error('Failed to fetch static files');
	}
};
