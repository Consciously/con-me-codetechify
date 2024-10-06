// import { auth	 } from '@clerk/nextjs/server';
import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { z } from 'zod';
import {
	createProjectHandler,
	updateProjectHandler,
} from '@/app/projects/actions/actions';

// Create the Uploadthing instance
const f = createUploadthing();

export const ourFileRouter = {
	jsonUploader: f({
		'application/json': {
			maxFileSize: '1MB', // Set the maximum file size for text files
		},
	})
		.input(z.object({ projectId: z.string().optional() })) // Optional projectId
		.middleware(async ({ input }) => {
			// const { userId } = auth();

			// if (!userId) {
			// 	throw new Error('Please sign in');
			// }
			// console.log(userId);

			return { input };
		})
		.onUploadComplete(async ({ metadata, file }) => {
			const { projectId } = metadata.input;
			const res = await fetch(file.url);
			const data = await res.json();

			if (!projectId) {
				// const newProject = await createProjectHandler(data);
				return { projectId: 'u89sd8gyg8sdy8g' };
			}
		}),
	imageUploader: f({
		image: {
			maxFileSize: '4MB',
			maxFileCount: 4,
		},
	})
		.input(z.object({ projectId: z.string().optional() }))
		.middleware(async ({ input }) => {
			return { input };
		})
		.onUploadComplete(async ({ metadata, file }) => {
			const { projectId } = metadata.input;
			if (projectId) {
				const updateProject = updateProjectHandler(projectId, [file.url]);

				return { projectId: (await updateProject).id };
			}
		}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
