'use server';

import db from '@/db/drizzle';
import { projectTable } from '@/db/schema';
import { frontMatterSchema } from '@/lib/validation';

export const createProject = async (data: unknown) => {
	const validationResult = frontMatterSchema.safeParse(data);

	if (!validationResult.success) {
		throw new Error(validationResult.error.errors[0].message);
	}

	const validatedData = validationResult.data;

	const dbData = {
		...validatedData,
		createdAt: new Date(validatedData.createdAt),
		updatedAt: new Date(validatedData.updatedAt),
	};

	await db.insert(projectTable).values(dbData);
};
