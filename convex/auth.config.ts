// Convex auth config for Clerk JWTs.
// Docs: https://docs.convex.dev/auth/clerk
const authConfig = {
	providers: [
		{
			domain: process.env.CLERK_JWT_ISSUER_DOMAIN,
			applicationID: 'convex',
		},
	],
};

export default authConfig;

