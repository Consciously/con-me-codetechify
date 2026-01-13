'use server';
import { getStaticFiles, type StaticFile } from '@/lib/dal/static-dal';

export const getStaticFilesHandler = async () => {
	try {
		const rawFiles = await getStaticFiles();
		const { files } = rawFiles;

		// Filter files fro HeroCtaArea and HeroIntroArea
		const ctaFiles: string[] = [];
		const introFiles: string[] = [];

		files.forEach((file: StaticFile) => {
			if (file.name.includes('_cta_')) {
				ctaFiles.push(file.key);
			} else if (file.name.includes('_illustration_')) {
				introFiles.push(file.key);
			}
		});

		// Fetch URLs for both sets of files in parallel
		// Construct URLs for both sets of files
		const ctaFileUrls = ctaFiles.map(key => `https://utfs.io/f/${key}`);
		const introFileUrls = introFiles.map(key => `https://utfs.io/f/${key}`);

		return {
			ctaFileUrls,
			introFileUrls,
		};
	} catch (error) {
		// Log errors more prominently to help identify configuration issues
		console.error('Error fetching and sorting files:', error);
		if (process.env.NODE_ENV === 'production') {
			// In production, provide more context about the error
			console.error('Static file fetch failed. Check UploadThing configuration.');
		}
		return { ctaFileUrls: [], introFileUrls: [] };
	}
};
