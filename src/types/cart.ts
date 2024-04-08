export interface ICart {
	id: string;
}

export interface IProductInCart {
	quantity: number;
	product: {
		name: string;
		price: number;
		id: string;
		slug: string;
		images: {
			url: string;
			alt: string;
		}[];
	};
}

export interface ICartWithProducts extends ICart {
	items: IProductInCart[];
}
