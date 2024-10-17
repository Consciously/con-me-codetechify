'use server';

import {
	getProjects,
	createProject,
	updateProject,
	getProjectById,
} from '@/lib/dal/project-dal';
import { projectSchema } from '@/lib/validation';
import { Project } from '@prisma/client';

type ProjectClean = Omit<Project, 'id' | 'createdAt' | 'updatedAt'>;

export const getProjectsHandler = async (isHomepage: boolean) => {
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
		console.error('Validation failed:', parsedData.error);
		throw new Error('Invalid project data');
	}

	try {
		return createProject(parsedData.data as ProjectClean);
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
