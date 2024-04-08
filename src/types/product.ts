export interface IProductCard {
	id: string;
	name: string;
	price: number;
	rating: number;
	coverImage: string;
}

export interface IProductList {
	products: IProductCard[];
	total: number;
}

export interface ISingleProduct {
	id: string;
	category: {
		name: string;
		id: string;
		slug: string;
	};
	name: string;
	price: number;
	description: string;
	images: { url: string; alt: string }[];
	rating: number;
	reviews: number;
}
