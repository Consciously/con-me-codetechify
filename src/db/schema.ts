import { pgTable, serial, text, varchar, timestamp } from 'drizzle-orm/pg-core';

export const project = pgTable('project', {
	id: serial('id').primaryKey().notNull(),
	title: varchar('title', { length: 255 }).notNull(),
	description: text('description').notNull(),
	technologies: text('technologies').array().notNull(),
	clientName: varchar('client_name', { length: 255 }).notNull(),
	images: text('images').array().notNull(),
	features: text('features').array().notNull(),
	githubRepo: varchar('github_repo', { length: 255 }).notNull(),
	liveDemo: varchar('live_demo', { length: 255 }).notNull(),
	createdAt: timestamp('created_at').notNull().defaultNow(),
	updatedAt: timestamp('updated_at').notNull(),
});

export type InsertProject = typeof project.$inferInsert;
export type SelectProject = typeof project.$inferSelect;
