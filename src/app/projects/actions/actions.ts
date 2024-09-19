'use server';

import { getProjects } from '@/lib/dal/project-dal';

export const getProjectsHandler = async (isHomepage: boolean = false) => {
	return getProjects(isHomepage);
};

export const getPrjectHandler = async (id: string) => {};

export const createProjectHandler = async (data: unknown) => {};
