// import { auth	 } from '@clerk/nextjs/server';
import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { z } from 'zod';
import { createProjectHandler } from '@/app/projects/actions/actions';
import { db } from '@/db';

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
				try {
					const newProject = await db.project.create({
						data: data,
					});

					console.log(newProject.id);

					return {
						projectId: newProject.id,
					};
				} catch (error) {
					console.error('Database error:', error);
					throw new Error('Failed to create project in database');
				}
			}
		}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
