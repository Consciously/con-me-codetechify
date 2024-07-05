'use server';

import db from '@/db/drizzle';
import { projectTable } from '@/db/schema';
import type { SelectProject } from '@/db/schema';
import { sql } from 'drizzle-orm';

export const getProjects = async (): Promise<SelectProject[]> => {
	const projects = await db
		.select()
		.from(projectTable)
		.orderBy(
			sql`${projectTable.importance} DESC`,
			sql`${projectTable.createdAt} DESC`,
		)
		.limit(9);

	return projects;
};
