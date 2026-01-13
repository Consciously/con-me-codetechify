import type { Id } from '../../convex/_generated/dataModel';

export type ProjectDoc = {
	_id: Id<'projects'>;
	_creationTime: number;
	title: string;
	description: string;
	technologies: string[];
	clientName: string;
	images: string[];
	features: string[];
	githubRepo: string;
	liveDemo: string;
	importance: number;
	updatedAt?: number;
};

