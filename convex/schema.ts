import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
	projects: defineTable({
		title: v.string(),
		description: v.string(),
		technologies: v.array(v.string()),
		clientName: v.string(),
		images: v.array(v.string()),
		features: v.array(v.string()),
		githubRepo: v.string(),
		liveDemo: v.string(),
		importance: v.number(),
		updatedAt: v.optional(v.number()),
	})
		.index('by_importance', ['importance']),
});

