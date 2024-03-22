import type { IProductCard } from "@/types/product";

export interface ICategoryWithProducts {
	id: string;
	slug: string;
	name: string;
	products: IProductCard[];
}

export interface ICategory {
	id: string;
	slug: string;
	name: string;
}

export interface ICategoryList {
	categories: ICategory[];
	total: number;
}
