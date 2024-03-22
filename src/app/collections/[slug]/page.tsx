import type { Metadata } from "next";
import { ProductList } from "@/components/organims/ProductList";
import { getCollectionBySlug, getCollections } from "@/api/collections";

type Props = {
	params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = params;
	const collection = await getCollectionBySlug(slug);

	return {
		title: `${collection?.name || "Collection"} | Next ecommerce app`,
		description: `${collection?.description || "Single collection apge"}`,
	};
}

export const dynamicParams = false;

export async function generateStaticParams() {
	const { collections } = await getCollections();
	return collections.map(({ slug }) => ({
		slug,
	}));
}

export default async function Collection({ params }: Props) {
	const { slug } = params;
	const { name, products, description } = await getCollectionBySlug(slug);
	return (
		<main>
			<h1 className="text-2xl font-bold tracking-tight text-gray-900">{name}</h1>
			<p className="py-4 text-gray-600">{description}</p>
			<ProductList products={products} />
		</main>
	);
}
