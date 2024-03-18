import type { Metadata } from "next";
import { ProductList } from "@/components/organims/ProductList";
import { getProducts } from "@/api/products";
import { Pagination } from "@/components/organims/Pagination";
import { countProducts } from "@/utils";

type Props = {
	params: { pageNumber: string };
};

export const metadata: Metadata = {
	title: "Product list | Next ecommerce app",
	description: "Next ecommerce app",
};

export const dynamicParams = false;

export async function generateStaticParams() {
	const { totalPages } = await countProducts();
	const paths = [];
	for (let i = 1; i <= totalPages; i++) {
		paths.push({ pageNumber: `${i}` });
	}
	return paths;
}

export default async function Products({ params }: Props) {
	const { totalPages, totalProducts } = await countProducts();
	const { pageNumber } = params;
	const products = await getProducts({ take: "100", offset: `${pageNumber}` });
	return (
		<main>
			<ProductList products={products} />
			<Pagination
				totalPages={totalPages}
				currentPage={parseInt(pageNumber, 10)}
				totalItems={totalProducts}
			/>
		</main>
	);
}
