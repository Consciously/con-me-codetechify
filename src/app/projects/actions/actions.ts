'use server';

import { getProjects } from '@/lib/dal/project-dal';

export const getProjectsHandler = async (home: boolean) => {
	return getProjects(home);
};

export const getPrjectHandler = async (id: string) => {};

export const createProjectHandler = async (data: unknown) => {};
