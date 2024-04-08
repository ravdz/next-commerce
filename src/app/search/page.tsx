import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductsByName } from "@/api/products";
import { ProductList } from "@/components/organims/ProductList";

type Props = {
	searchParams: { [key: string]: string | string[] | undefined };
};

const getQueryParam = ({ searchParams }: Props) => {
	if (searchParams?.query)
		return (
			Array.isArray(searchParams.query) ? searchParams.query[0] : searchParams.query
		) as string;
	return "";
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
	const query = getQueryParam({ searchParams }) || "Searching";
	return {
		title: `${query} | Next ecommerce app`,
		description: "Next ecommerce app",
	};
}

export default async function Search({ searchParams }: Props) {
	if (!getQueryParam({ searchParams }) || getQueryParam({ searchParams }).length < 2) {
		notFound();
	}
	const query = getQueryParam({ searchParams });

	const { products } = await getProductsByName(query);

	return (
		<main>
			<h1 className="text-2xl font-bold tracking-tight text-gray-900">Searching for: {query}</h1>
			<ProductList products={products} />
		</main>
	);
}
