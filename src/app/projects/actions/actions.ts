'use server';

import db from '@/db/drizzle';
import { projectTable } from '@/db/schema';
import type { SelectProject } from '@/db/schema';

export const getProjects = async (): Promise<SelectProject[]> => {
	const projects = await db.select().from(projectTable);

	return projects;
};
