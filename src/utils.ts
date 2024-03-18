import { getProducts } from "@/api/products";

export const countProducts = async (): Promise<{ totalPages: number; totalProducts: number }> => {
	const products = await getProducts({ take: "-1" });
	const productsPerPage = 10;
	const totalPages =
		products.length % productsPerPage === 0
			? products.length / productsPerPage
			: Math.ceil(products.length / productsPerPage);
	return { totalPages, totalProducts: products.length };
};
