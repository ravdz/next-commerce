import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/index";
import { GetCollectionDocument, GetCollectionsDocument } from "@/gql/graphql";
import type { ICollectionList, ICollectionWithProducts } from "@/types/collection";

export const getCollections = async (): Promise<ICollectionList> => {
	const {
		collections: {
			data,
			meta: { total },
		},
	} = await executeGraphql(GetCollectionsDocument);
	return { total, collections: data };
};

export const getCollectionBySlug = async (
	collectionSlug: string,
): Promise<ICollectionWithProducts> => {
	const { collection } = await executeGraphql(GetCollectionDocument, { slug: collectionSlug });
	if (!collection) {
		notFound();
	}
	const { id, name, slug, description, products } = collection;
	return {
		id,
		name,
		slug,
		description,
		products: products.map((product) => {
			return {
				id: product.id,
				name: product.name,
				price: product.price,
				coverImage: product.images[0]?.url || "",
			};
		}),
	};
};
