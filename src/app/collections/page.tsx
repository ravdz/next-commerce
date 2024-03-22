import type { Metadata } from "next";
import Link from "next/link";
import { getCollections } from "@/api/collections";

export const metadata: Metadata = {
	title: "Collections | Next ecommerce app",
	description: "Collection list",
};

export default async function Collections() {
	const { collections } = await getCollections();
	return (
		<main>
			<h1 className="text-2xl font-bold tracking-tight text-gray-900">All collections</h1>
			<ul role="list" className="mt-10 divide-y divide-gray-100">
				{collections.map((collection) => (
					<li key={collection.id}>
						<Link
							className="flex justify-between gap-x-6 py-5"
							href={{ pathname: `/collections/${collection.slug}` }}
						>
							<div className="flex min-w-0 gap-x-4">
								<div className="min-w-0 flex-auto">
									<span className="text-sm font-semibold leading-6 text-gray-900">
										{collection.name}
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
