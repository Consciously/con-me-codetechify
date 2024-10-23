/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		disableStaticImages: true,
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
