import { z } from 'zod';

export const projectSchema = z.object({
	title: z.string().min(1, 'Title is required'),
	description: z.string().min(1, 'Description is required'),
	technologies: z
		.array(z.string())
		.min(1, 'At least one technology is required'),
	clientName: z.string().min(1, 'Client name is required'),
	images: z.array(z.string().url('Each image must be a valid URL')),
	features: z.array(z.string()).min(1, 'At least one feature is required'),
	githubRepo: z.string().url('GitHub repository must be a valid URL'),
	liveDemo: z.string().url('Live demo URL must be a valid URL'),
	importance: z.number().min(1).max(5, 'Importance must be between 1 and 5'),
});

export const consentSchema = z.object({
	necessary: z.boolean().default(true),
	analytics: z.boolean().optional(),
	marketing: z.boolean().optional(),
});

export type ConsentTypeValues = z.infer<typeof consentSchema>;
// export type ProjectTypeValues = z.infer<typeof projectSchema>;
