import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductList } from "@/components/organims/ProductList";
import { getProducts, getTotalNumberOfProducts } from "@/api/products";
import { Pagination } from "@/components/organims/Pagination";
import { countTotalPages } from "@/utils";

type Props = {
	params: { pageNumber: string };
};

export const metadata: Metadata = {
	title: "Product list | Next ecommerce app",
	description: "Next ecommerce app",
};

const productsPerPage = 10;

export async function generateStaticParams() {
	const totalProducts = await getTotalNumberOfProducts();
	const totalPages = countTotalPages(totalProducts, productsPerPage);
	const pagesToPrerender = totalPages > 10 ? 5 : Math.round(totalPages / 2);
	const paths = [];
	for (let i = 1; i <= pagesToPrerender; i++) {
		paths.push({ pageNumber: `${i}` });
	}

	return paths;
}

export default async function Products({ params }: Props) {
	const { pageNumber } = params;
	const totalProducts = await getTotalNumberOfProducts();
	const skip = (parseInt(pageNumber, 10) - 1) * productsPerPage;
	const { products } = await getProducts({ skip, take: productsPerPage });
	if (!products.length) {
		notFound();
	}
	return (
		<main>
			<h1 className="text-2xl font-bold tracking-tight text-gray-900">All products</h1>
			<ProductList products={products} />
			<Pagination
				baseUrl={`/products`}
				currentPage={parseInt(pageNumber, 10)}
				totalItems={totalProducts}
				itemsPerPage={productsPerPage}
			/>
		</main>
	);
}
