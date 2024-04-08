import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductList } from "@/components/organims/ProductList";
import { getProducts, getTotalNumberOfProducts, type OrderBy } from "@/api/products";
import { Pagination } from "@/components/organims/Pagination";
import { countTotalPages } from "@/utils";
import { SortProductList } from "@/components/moleculs/SortProductList";

type Props = {
	params: { pageNumber: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export const metadata: Metadata = {
	title: "Product list | Next ecommerce app",
	description: "Next ecommerce app",
};

const orderByOptions: OrderBy[] = ["PRICE", "RATING"];

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

export default async function Products({ params, searchParams }: Props) {
	const getProductList = async (skip: number, orderByValue?: string) => {
		const orderBy = orderByOptions.find((orderByOption) => {
			return orderByOption === orderByValue?.toUpperCase() && true;
		});
		const order = orderBy && "DESC";

		return await getProducts({ skip, take: productsPerPage, orderBy, order });
	};

	const orderByValue =
		searchParams?.orderby &&
		(Array.isArray(searchParams.orderby) ? searchParams.orderby[0] : searchParams.orderby);

	const { pageNumber } = params;
	const totalProducts = await getTotalNumberOfProducts();
	const skip = (parseInt(pageNumber, 10) - 1) * productsPerPage;
	const { products } = await getProductList(skip, orderByValue);
	if (!products.length) {
		notFound();
	}
	return (
		<main>
			<h1 className="text-2xl font-bold tracking-tight text-gray-900">All products</h1>
			<SortProductList activeOrderBy={orderByValue} />
			<ProductList products={products} />
			<Pagination
				baseUrl={`/products`}
				currentPage={parseInt(pageNumber, 10)}
				totalItems={totalProducts}
				itemsPerPage={productsPerPage}
				searchParams={searchParams}
			/>
		</main>
	);
}
