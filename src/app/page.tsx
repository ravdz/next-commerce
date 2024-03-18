import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Next ecommerce app",
	description: "Next ecommerce app",
};

export default function Home() {
	return (
		<main>
			<h1 className="text-2xl font-bold tracking-tight text-gray-900">Homepage</h1>
		</main>
	);
}
