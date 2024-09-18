import 'server-only';

import { db } from '@/db';
import { Project } from '@prisma/client';

export const getProjects = async (home: boolean): Promise<Project[]> => {
	const projects = await db.project.findMany({
		orderBy: [{ importance: 'desc' }, { createdAt: 'desc' }],
		// If we are on the home page, we only want to show 5 projects
		take: home ? 5 : undefined,
	});
	return projects;
};

export const getProjectById = async (id: string): Promise<Project> => {
	const project = await db.project.findUnique({
		where: {
			id: id,
		},
	});

	if (!project) {
		throw new Error(`Project with id ${id} not found`);
	}

	return project;
};

export const createProject = async (project: Project) => {
	const newProject = await db.project.create({
		data: project,
	});
	return newProject;
};
