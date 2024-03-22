import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { countTotalPages } from "@/utils";
import { getCategoriesWithProducts } from "@/api/categories";
import type { ICategoryWithProducts } from "@/types/category";
import { ProductList } from "@/components/organims/ProductList";
import { Pagination } from "@/components/organims/Pagination";

type Params = { slug: string; pageNumber: string };

type Props = {
	params: Params;
};

export const metadata: Metadata = {
	title: "Category list | Next ecommerce app",
	description: "Next ecommerce app",
};

const productsPerPage = 2;
export async function generateStaticParams() {
	const categories = await getCategoriesWithProducts();
	return categories.reduce((acc: Params[], currentCategory: ICategoryWithProducts) => {
		const totalPages = countTotalPages(currentCategory.products.length, productsPerPage);
		const pagesToPrerender = totalPages > 10 ? 5 : Math.round(totalPages / 2);
		for (let i = 1; i <= pagesToPrerender; i++) {
			acc.push({ slug: currentCategory.slug, pageNumber: `${i}` });
		}
		return acc;
	}, []);
}

export default async function Category({ params }: Props) {
	const { slug, pageNumber } = params;
	const categories = await getCategoriesWithProducts();
	const currentCategory = categories.find((category) => category.slug === slug);
	if (!currentCategory) {
		notFound();
	}
	const allCategoryProducts = currentCategory.products;
	const skip = (parseInt(pageNumber, 10) - 1) * productsPerPage;
	const products = allCategoryProducts.slice(skip, skip + productsPerPage);
	if (!products.length) {
		notFound();
	}
	return (
		<main>
			<h1 className="text-2xl font-bold tracking-tight text-gray-900">{currentCategory.name}</h1>
			<ProductList products={products} />
			<Pagination
				baseUrl={`/categories/${slug}`}
				currentPage={parseInt(pageNumber, 10)}
				totalItems={allCategoryProducts.length}
				itemsPerPage={productsPerPage}
			/>
		</main>
	);
}
