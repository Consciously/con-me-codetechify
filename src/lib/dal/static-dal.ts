import 'server-only';
import { utapi } from '@/lib/server-utils';

export type StaticFile = {
	key: string;
	name: string;
};

export type StaticFilesResult = {
	files: StaticFile[];
};

export const getStaticFiles = async () => {
	try {
		if (!process.env.UPLOADTHING_TOKEN) return { files: [] } satisfies StaticFilesResult;

		const rawFiles = await utapi.listFiles();
		return rawFiles as unknown as StaticFilesResult;
	} catch (error) {
		console.error('Error fetching static files:', error);
		// In dev (or misconfigured envs), don't hard-fail the whole page.
		return { files: [] } satisfies StaticFilesResult;
	}
};
