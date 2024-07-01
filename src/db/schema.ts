// drizzleSchema.ts

import { sql } from 'drizzle-orm';
import { pgTable, serial, text, varchar, timestamp } from 'drizzle-orm/pg-core';

export const projectTable = pgTable('project_table', {
	id: serial('id').primaryKey().notNull(),
	title: varchar('title', { length: 255 }).notNull(),
	description: text('description').notNull(),
	technologies: text('technologies')
		.array()
		.notNull()
		.default(sql`'{}'::text[]`),
	clientName: varchar('client_name', { length: 255 }).notNull(),
	image: varchar('image', { length: 255 }).notNull(),
	features: text('features')
		.array()
		.notNull()
		.default(sql`'{}'::text[]`),
	githubRepo: varchar('github_repo', { length: 255 }).notNull(),
	liveDemo: varchar('live_demo', { length: 255 }).notNull(),
	createdAt: timestamp('created_at').notNull().defaultNow(),
	updatedAt: timestamp('updated_at'),
});

export type InsertProject = typeof projectTable.$inferInsert;
export type SelectProject = typeof projectTable.$inferSelect;
