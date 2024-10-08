'use server';
import { utapi } from '@/lib/server-utils';
import { getStaticFiles } from '@/lib/dal/static-dal';

export const getStaticFilesHandler = async () => {
	try {
		const rawFiles = await getStaticFiles();
		const { files } = rawFiles;

		// Filter files fro HeroCtaArea and HeroIntroArea
		const ctaFiles: string[] = [];
		const introFiles: string[] = [];

		files.forEach(file => {
			if (file.name.includes('_cta_')) {
				ctaFiles.push(file.key);
			} else if (file.name.includes('_illustration_')) {
				introFiles.push(file.key);
			}
		});

		// Fetch URLs for both sets of files in parallel
		const [ctaFileUrls, introFileUrls] = await Promise.all([
			utapi.getFileUrls(ctaFiles),
			utapi.getFileUrls(introFiles),
		]);

		return {
			ctaFileUrls: ctaFileUrls.data.map(file => file.url),
			introFileUrls: introFileUrls.data.map(file => file.url),
		};
	} catch (error) {
		console.error('Error fetching and sorting files:', error);
		throw new Error('Failed to fetch and sort files');
	}
};
