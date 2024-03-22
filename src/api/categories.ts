import { executeGraphql } from "@/api/index";
import { GetCategoriesDocument, GetCategoriesWithProductsDocument } from "@/gql/graphql";
import type { ICategoryList, ICategoryWithProducts } from "@/types/category";

export const getCategoriesWithProducts = async (): Promise<ICategoryWithProducts[]> => {
	const { categories } = await executeGraphql(GetCategoriesWithProductsDocument);
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
	} = await executeGraphql(GetCategoriesDocument);
	return {
		total,
		categories: data,
	};
};
