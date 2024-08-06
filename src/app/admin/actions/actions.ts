'use server';

import { PrismaClient } from '@prisma/client';
import { frontMatterSchema } from '@/lib/validation';

const prisma = new PrismaClient();

export const createProject = async (data: unknown) => {
	const validationResult = frontMatterSchema.safeParse(data);

	if (!validationResult.success) {
		throw new Error(validationResult.error.errors[0].message);
	}

	const validatedData = validationResult.data;

	await prisma.project.create({
		data: {
			...validatedData,
			createdAt: new Date(validatedData.createdAt),
			updatedAt: new Date(validatedData.updatedAt),
		},
	});
};
