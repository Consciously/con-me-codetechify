import { createProject } from '@/app/admin/actions/actions';
import { markdownMetadataSchema } from '@/lib/validation';
import { createUploadthing, type FileRouter } from 'uploadthing/next';

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
	// Define as many FileRoutes as you like, each with a unique routeSlug
	markdownUploader: f({ text: { maxFileSize: '64KB' } })
		.input(markdownMetadataSchema)
		.middleware(async ({ input }) => {
			return { ...input };
		})
		.onUploadComplete(async ({ metadata }) => {
			try {
				console.log('Received metadata:', metadata);
				await createProject(metadata.frontMatter);
				console.log('Project created successfully.');
			} catch (error) {
				console.error('Error creating project:', error);
				throw new Error('Failed to create project');
			}
		}),
	imagesUploader: f({ image: { maxFileSize: '4MB' } }).onUploadComplete(
		async ({ file }) => {
			console.log('file url', file.url);
		},
	),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
