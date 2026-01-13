import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

declare global {
	var cachedPrisma: PrismaClient;
}

const createMissingDb = () =>
	new Proxy(
		{},
		{
			get() {
				throw new Error(
					'DATABASE_URL is not set. Set DATABASE_URL to use the database.',
				);
			},
		},
	) as PrismaClient;

const createPrismaClient = () => {
	const connectionString = process.env.DATABASE_URL;
	if (!connectionString) return createMissingDb();

	const adapter = new PrismaPg({ connectionString });
	return new PrismaClient({ adapter });
};

let prisma: PrismaClient;
if (process.env.NODE_ENV === 'production') {
	prisma = createPrismaClient();
} else {
	if (!global.cachedPrisma) {
		global.cachedPrisma = createPrismaClient();
	}

	prisma = global.cachedPrisma;
}

export const db = prisma;
