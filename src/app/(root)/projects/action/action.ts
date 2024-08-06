'use server';

import { db } from '@/db';
import { Project } from '@prisma/client';

export const getProjects = async (): Promise<Project[]> => {
	const projects = await db.project.findMany({
		orderBy: [{ importance: 'desc' }, { createdAt: 'desc' }],
		take: 5,
	});

	return projects;
};
