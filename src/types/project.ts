export type ProjectDoc = {
	_id: string;
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

