import 'server-only';

import { db } from '@/db';
import { Project } from '@prisma/client';

type ProjectClean = Omit<Project, 'id' | 'createdAt' | 'updatedAt'>;

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

export const createProject = async (project: ProjectClean) => {
	const newProject = await db.project.create({
		data: project,
	});
	return newProject;
};
