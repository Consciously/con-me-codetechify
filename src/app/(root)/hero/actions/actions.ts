import { getStaticFiles } from '@/lib/dal/static-dal';
import { utapi } from '@/lib/utils';

export const getStaticFilesHandler = async () => {
	try {
		const rawFiles = await getStaticFiles();
		const { files } = rawFiles;

		const fileKeys = files
			.filter(file => file.name.startsWith('illustration'))
			.map(file => file.key);

		const fileRawUrls = await utapi.getFileUrls(fileKeys);
		const fileUrls = fileRawUrls.data.map(file => file.url);
		return fileUrls;
	} catch (error) {
		console.error('Error fetching static files:', error);
		throw new Error('Failed to fetch static files');
	}
};
