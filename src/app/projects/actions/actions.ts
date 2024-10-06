'use server';

import {
	getProjects,
	createProject,
	updateProject,
	getProjectById,
} from '@/lib/dal/project-dal';
import { projectSchema } from '@/lib/validation';

export const getProjectsHandler = async (isHomepage: boolean = false) => {
	return getProjects(isHomepage);
};

export const getProjectHandler = async (id: string) => {
	try {
		return await getProjectById(id);
	} catch (error) {
		console.error('Error fetching project', error);
		throw new Error('Failed to fetch project');
	}
};

export const createProjectHandler = async (data: unknown) => {
	const parsedData = projectSchema.safeParse(data);

	if (!parsedData.success) {
		throw new Error('Invalid project data');
	}

	try {
		console.log('Parsed data:', parsedData.data);
		return createProject(parsedData.data);
	} catch (error) {
		console.error('Error creating project', error);
		throw new Error('Failed creating project');
	}
};

export const updateProjectHandler = async (id: string, imageUrls: string[]) => {
	try {
		return updateProject(id, imageUrls);
	} catch (error) {
		console.error('Error updating project', error);
		throw new Error('Failed updating project');
	}
};
