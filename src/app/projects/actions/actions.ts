'use server';

import { getProjects, createProject } from '@/lib/dal/project-dal';
import { projectSchema } from '@/lib/validation';

export const getProjectsHandler = async (isHomepage: boolean = false) => {
	return getProjects(isHomepage);
};

export const getPrjectHandler = async (id: string) => {};

export const createProjectHandler = async (data: unknown) => {
	const parsedData = projectSchema.safeParse(data);

	if (!parsedData.success) {
		throw new Error('Invalid project data');
	}

	try {
		return createProject(parsedData.data);
	} catch (error) {
		console.error('Error creating project', error);
		throw new Error('Failed creating project');
	}
};
