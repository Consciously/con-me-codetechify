/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'utfs.io',
			},
			{
				protocol: 'https',
				hostname: 'con-me-codetechify.vercel.app',
			},
		],
	},
};

export default nextConfig;
