// import { auth	 } from '@clerk/nextjs/server';
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
		.input(z.object({ projectId: z.string().optional() })) // Optional projectId
		.middleware(async ({ input, req }) => {
			// const { userId } = auth();

			// if (!userId) {
			// 	throw new Error('Please sign in');
			// }
			// console.log(userId);

			return { input };
		})
		.onUploadComplete(async ({ metadata, file }) => {
			let projectId = metadata.input.projectId;
			const res = await fetch(file.url);
			const data = await res.json();

			console.log(data);

			if (!projectId) {
				projectId = Math.random().toString(36).substring(7);
			}
			return { projectId };
		}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
