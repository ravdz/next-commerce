import type { Metadata } from "next";
import Link from "next/link";
import { getCategories } from "@/api/categories";

export const metadata: Metadata = {
	title: "Categories | Next ecommerce app",
	description: "Next ecommerce app",
};

export default async function Categories() {
	const { categories } = await getCategories();
	return (
		<main>
			<h1 className="text-2xl font-bold tracking-tight text-gray-900">All categories</h1>
			<ul role="list" className="mt-10 divide-y divide-gray-100">
				{categories.map((category) => (
					<li key={category.id}>
						<Link
							className="flex justify-between gap-x-6 py-5"
							href={{ pathname: `/categories/${category.slug}/1` }}
						>
							<div className="flex min-w-0 gap-x-4">
								<div className="min-w-0 flex-auto">
									<span className="text-sm font-semibold leading-6 text-gray-900">
										{category.name}
									</span>
								</div>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
