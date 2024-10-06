'use server';

import { Project } from '@prisma/client';

type ProjectClean = Omit<Project, 'id' | 'createdAt' | 'updatedAt'>;

import {
	getProjects,
	// createProject,
	updateProject,
	getProjectById,
} from '@/lib/dal/project-dal';
import { projectSchema } from '@/lib/validation';
import { db } from '@/db';

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

// export const createProjectHandler = async (data: unknown) => {
// 	const parsedData = projectSchema.safeParse(data);

// 	if (!parsedData.success) {
// 		throw new Error('Invalid project data');
// 	}

// 	try {
// 		return createProject(parsedData.data);
// 	} catch (error) {
// 		console.error('Error creating project:', error);
// 		return {
// 			error: 'Failed to create project',
// 			details: error instanceof Error ? error.message : 'Unknown error',
// 		};
// 	}
// };

export const createProject = async (project: ProjectClean) => {
	const newProject = await db.project.create({
		data: project,
	});
	return newProject;
};

export const updateProjectHandler = async (id: string, imageUrls: string[]) => {
	try {
		return updateProject(id, imageUrls);
	} catch (error) {
		console.error('Error updating project', error);
		throw new Error('Failed updating project');
	}
};
