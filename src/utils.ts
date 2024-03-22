import { getTotalNumberOfProducts } from "@/api/products";

export const countProducts = async (): Promise<{ totalPages: number; totalProducts: number }> => {
	const totalProducts = await getTotalNumberOfProducts();
	const productsPerPage = 10;
	const totalPages =
		totalProducts % productsPerPage === 0
			? totalProducts / productsPerPage
			: Math.ceil(totalProducts / productsPerPage);
	return { totalPages, totalProducts };
};

export const countTotalPages = (totalItems: number, itemsPerPage: number = 10): number => {
	return totalItems % itemsPerPage === 0
		? totalItems / itemsPerPage
		: Math.ceil(totalItems / itemsPerPage);
};

export const range = (start: number, end: number) => {
	const length = end - start + 1;
	return Array.from({ length }, (_, idx) => idx + start);
};
