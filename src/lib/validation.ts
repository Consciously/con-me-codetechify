import { z } from 'zod';

export const frontMatterSchema = z.object({
	title: z.string(),
	description: z.string(),
	technologies: z.array(z.string()).optional().default([]),
	clientName: z.string().optional().default(''),
	features: z.array(z.string()).optional().default([]),
	githubRepo: z.string().optional().default(''),
	liveDemo: z.string().optional().default(''),
	importance: z.number().optional().default(0),
	createdAt: z.string().optional().default(new Date().toISOString()),
	updatedAt: z.string().optional().default(new Date().toISOString()),
});

export const markdownMetadataSchema = z.object({
	frontMatter: frontMatterSchema,
	content: z.string(),
});

export type MarkdownMetadata = z.infer<typeof markdownMetadataSchema>;
