import { createUploadthing, type FileRouter } from 'uploadthing/next';

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
	// Define as many FileRoutes as you like, each with a unique routeSlug
	markdownUploader: f({ text: { maxFileSize: '64KB' } }).onUploadComplete(
		async ({ file }) => {
			console.log('file url', file.url);
		},
	),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
