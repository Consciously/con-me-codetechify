'use server';

import db from '@/db/drizzle';
import { projectTable } from '@/db/schema';
import { and, asc, gt } from 'drizzle-orm';

export const getProjects = async (cursor?: number, limit = 4) => {
	const projects = await db
		.select()
		.from(projectTable)
		.where(cursor ? and(gt(projectTable.id, cursor)) : undefined)
		.limit(limit)
		.orderBy(asc(projectTable.id));

	const hasNextPage = projects.length === limit;
	const nextCursor = hasNextPage ? projects[projects.length - 1].id : null;

	return { projects, nextCursor };
};
