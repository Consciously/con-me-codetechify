import { defineConfig } from '@prisma/config';

export default defineConfig({
	// Prisma 7 moved datasource URLs out of `schema.prisma`.
	// We keep a safe fallback so `prisma generate` doesn't fail in envs
	// (like CI) where DATABASE_URL isn't set.
	datasource: {
		url:
			process.env.DATABASE_URL ??
			'postgresql://postgres:postgres@localhost:5432/postgres?schema=public',
	},
});

