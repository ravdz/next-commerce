/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["picsum.photos", "naszsklep-api.vercel.app"],
	},
	experimental: {
		typedRoutes: true,
	},
};

export default nextConfig;
