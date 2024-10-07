'use server';
import { utapi } from '@/lib/server-utils';
import { getStaticFiles } from '@/lib/dal/static-dal';

export const getStaticFilesHandler = async () => {
	try {
		const pattern = /^\d{2}_illustration$/;
		const rawFiles = await getStaticFiles();
		const { files } = rawFiles;

		const fileKeys = files
			.filter(file => file.name.includes('_illustration_'))
			.map(file => file.key);

		const fileRawUrls = await utapi.getFileUrls(fileKeys);
		const fileUrls = fileRawUrls.data.map(file => file.url);
		return fileUrls;
	} catch (error) {
		console.error('Error fetching static files:', error);
		throw new Error('Failed to fetch static files');
	}
};
