import { notFound } from "next/navigation";
import type { ISingleProduct, IProductList } from "@/types/product";
import { executeGraphQl } from "@/api";
import {
	GetProductByIdDocument,
	GetProductsByNameDocument,
	GetProductsDocument,
	GetTotalNumberOfProductsDocument,
} from "@/gql/graphql";

export type OrderBy = "DEFAULT" | "NAME" | "PRICE" | "RATING";
type Order = "ASC" | "DESC";

export const getProducts = async ({
	take = 10,
	skip = 0,
	orderBy = "DEFAULT",
	order = "ASC",
}: {
	take?: number;
	skip?: number;
	orderBy?: OrderBy;
	order?: Order;
}): Promise<IProductList> => {
	const {
		products: {
			meta: { total },
			data,
		},
	} = await executeGraphQl({
		query: GetProductsDocument,
		variables: { take, skip, orderBy, order },
	});

	return {
		total,
		products: data.map((product) => {
			return {
				id: product.id,
				name: product.name,
				price: product.price,
				rating: product.rating || 0,
				coverImage: product.images[0]?.url || "",
			};
		}),
	};
};

export const getProductsByName = async (name: string): Promise<IProductList> => {
	const {
		products: {
			meta: { total },
			data,
		},
	} = await executeGraphQl({ query: GetProductsByNameDocument, variables: { search: name } });

	return {
		total,
		products: data.map((product) => {
			return {
				id: product.id,
				name: product.name,
				price: product.price,
				rating: product.rating || 0,
				coverImage: product.images[0]?.url || "",
			};
		}),
	};
};

export const getTotalNumberOfProducts = async (): Promise<number> => {
	const {
		products: {
			meta: { total },
		},
	} = await executeGraphQl({ query: GetTotalNumberOfProductsDocument });
	return total;
};

export const getProductById = async (productId: ISingleProduct["id"]): Promise<ISingleProduct> => {
	const { product } = await executeGraphQl({
		query: GetProductByIdDocument,
		variables: { id: productId },
	});

	if (!product) {
		notFound();
	}
	const { id, name, description, price, categories, images, rating, reviews } = product;
	return {
		id,
		name,
		description,
		price,
		category: {
			name: categories[0]?.name || "",
			id: categories[0]?.id || "",
			slug: categories[0]?.slug || "",
		},
		images,
		rating: rating || 0,
		reviews: reviews.length,
	};
};
