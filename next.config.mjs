/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["picsum.photos", "tailwindui.com", "naszsklep-api.vercel.app", "static-ourstore.hyperfunctor.com"],
	},
	experimental: {
		typedRoutes: true,
		serverActions: true
	},
	async redirects() {
		return [
			{
				source: '/products',
				destination: '/products/1',
				permanent: true,
			},
		]
	}
};

export default nextConfig;
