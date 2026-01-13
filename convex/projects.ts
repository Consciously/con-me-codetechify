import { mutationGeneric, queryGeneric } from 'convex/server';

export const list = queryGeneric(async (ctx, args: { home?: boolean }) => {
	const home = args.home ?? false;
	const projects = await ctx.db.query('projects').collect();

	projects.sort((a, b) => {
		// Higher importance first, then newest first.
		if (a.importance !== b.importance) return b.importance - a.importance;
		return b._creationTime - a._creationTime;
	});

	return home ? projects.slice(0, 5) : projects;
});

export const getById = queryGeneric(async (ctx, args: { id: string }) => {
	type ProjectId = Parameters<(typeof ctx.db)['get']>[0];
	const projectId = args.id as unknown as ProjectId;
	return await ctx.db.get(projectId);
});

export const create = mutationGeneric(
	async (
		ctx,
		args: {
			title: string;
			description: string;
			technologies: string[];
			clientName: string;
			images: string[];
			features: string[];
			githubRepo: string;
			liveDemo: string;
			importance: number;
		},
	) => {
		const identity = await ctx.auth.getUserIdentity();
		if (!identity) throw new Error('Unauthorized');

		const id = await ctx.db.insert('projects', {
			...args,
			updatedAt: Date.now(),
		});

		return id;
	},
);

export const appendImages = mutationGeneric(
	async (ctx, args: { id: string; imageUrls: string[] }) => {
		const identity = await ctx.auth.getUserIdentity();
		if (!identity) throw new Error('Unauthorized');

		type ProjectId = Parameters<(typeof ctx.db)['get']>[0];
		const projectId = args.id as unknown as ProjectId;

		const project = await ctx.db.get(projectId);
		if (!project) throw new Error('Project not found');

		await ctx.db.patch(projectId, {
			images: [...project.images, ...args.imageUrls],
			updatedAt: Date.now(),
		});

		return args.id;
	},
);

