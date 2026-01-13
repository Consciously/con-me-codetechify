import { query, mutation } from './_generated/server';
import { v } from 'convex/values';

export const list = query({
	args: { home: v.optional(v.boolean()) },
	handler: async (ctx, args) => {
		const home = args.home ?? false;
		const projects = await ctx.db.query('projects').collect();

		projects.sort((a, b) => {
			// Higher importance first, then newest first.
			if (a.importance !== b.importance) return b.importance - a.importance;
			return b._creationTime - a._creationTime;
		});

		return home ? projects.slice(0, 5) : projects;
	},
});

export const getById = query({
	args: { id: v.id('projects') },
	handler: async (ctx, args) => {
		return await ctx.db.get(args.id);
	},
});

export const create = mutation({
	args: {
		title: v.string(),
		description: v.string(),
		technologies: v.array(v.string()),
		clientName: v.string(),
		images: v.array(v.string()),
		features: v.array(v.string()),
		githubRepo: v.string(),
		liveDemo: v.string(),
		importance: v.number(),
	},
	handler: async (ctx, args) => {
		const identity = await ctx.auth.getUserIdentity();
		if (!identity) throw new Error('Unauthorized');

		const id = await ctx.db.insert('projects', {
			...args,
			updatedAt: Date.now(),
		});

		return id;
	},
});

export const appendImages = mutation({
	args: {
		id: v.id('projects'),
		imageUrls: v.array(v.string()),
	},
	handler: async (ctx, args) => {
		const identity = await ctx.auth.getUserIdentity();
		if (!identity) throw new Error('Unauthorized');

		const project = await ctx.db.get(args.id);
		if (!project) throw new Error('Project not found');

		await ctx.db.patch(args.id, {
			images: [...project.images, ...args.imageUrls],
			updatedAt: Date.now(),
		});

		return args.id;
	},
});

