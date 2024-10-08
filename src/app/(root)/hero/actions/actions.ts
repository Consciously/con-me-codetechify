'use server';
import { utapi } from '@/lib/server-utils';
import { getStaticFiles } from '@/lib/dal/static-dal';

export const getStaticFilesHandler = async () => {
	try {
		const rawFiles = await getStaticFiles();
		const { files } = rawFiles;

		// Filter files for HeroCtaArea
		const ctaFiles = files
			.filter(file => file.name.includes('_cta_'))
			.map(file => file.key);

		// Filter files for HeroIntroArea
		const introFiles = files
			.filter(file => file.name.includes('_illustration_'))
			.map(file => file.key);

		// Fetch URLs for both sets of files
		const ctaFileUrls = await utapi.getFileUrls(ctaFiles);
		const introFileUrls = await utapi.getFileUrls(introFiles);

		return {
			ctaFileUrls: ctaFileUrls.data.map(file => file.url),
			introFileUrls: introFileUrls.data.map(file => file.url),
		};
	} catch (error) {
		console.error('Error fetching and sorting files:', error);
		throw new Error('Failed to fetch and sort files');
	}
};
