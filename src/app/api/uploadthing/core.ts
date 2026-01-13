import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { z } from 'zod';

// Create the Uploadthing instance
const f = createUploadthing();

export const ourFileRouter = {
	jsonUploader: f({
		'application/json': {
			maxFileSize: '1MB', // Set the maximum file size for text files
		},
	})
		.input(z.object({})) // no-op input
		.middleware(async () => ({}))
		.onUploadComplete(async () => ({})),
	imageUploader: f({
		image: {
			maxFileSize: '4MB',
			maxFileCount: 4,
		},
	})
		.input(z.object({}))
		.middleware(async () => ({}))
		.onUploadComplete(async () => ({})),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
