import { executeGraphQl } from "@/api/index";
import { GetCategoriesDocument, GetCategoriesWithProductsDocument } from "@/gql/graphql";
import type { ICategoryList, ICategoryWithProducts } from "@/types/category";

export const getCategoriesWithProducts = async (): Promise<ICategoryWithProducts[]> => {
	const { categories } = await executeGraphQl({ query: GetCategoriesWithProductsDocument });
	return categories.data.map((category) => {
		return {
			id: category.id,
			slug: category.slug,
			name: category.name,
			products: category.products.map((product) => {
				return {
					id: product.id,
					name: product.name,
					price: product.price,
					coverImage: product.images[0]?.url || "",
					rating: product.rating || 0,
				};
			}),
		};
	});
};

export const getCategories = async (): Promise<ICategoryList> => {
	const {
		categories: {
			data,
			meta: { total },
		},
	} = await executeGraphQl({ query: GetCategoriesDocument });
	return {
		total,
		categories: data,
	};
};
