import type { IProductCard } from "@/types/product";

export interface ICollection {
	id: string;
	name: string;
	slug: string;
}

export interface ICollectionWithProducts extends ICollection {
	products: IProductCard[];
	description: string;
}

export interface ICollectionList {
	collections: ICollection[];
	total: number;
}
