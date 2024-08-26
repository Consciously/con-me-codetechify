'use server';

import { db } from '@/db';
import { Project } from '@prisma/client';

export const getProjects = async (): Promise<Project[]> => {
	const projects = await db.project.findMany({
		orderBy: [{ importance: 'desc' }, { createdAt: 'desc' }],
	});

	return projects;
};

export const getProjectById = async (
	projectId: string,
): Promise<Project | null> => {
	const project = await db.project.findUnique({
		where: { id: projectId },
	});

	return project;
};
