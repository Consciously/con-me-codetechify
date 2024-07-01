'use server';

import db from '@/db/drizzle';
import { project } from '@/db/schema';
import type { SelectProject } from '@/db/schema';

export const getProjects = async (): Promise<SelectProject[]> => {
	const projects = await db.select().from(project).limit(8);

	console.log('projects');

	return projects;
};
