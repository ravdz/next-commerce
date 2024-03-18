import type { IProduct } from "@/types/product";

interface IgetProducts {
	take?: string;
	offset?: string;
}

export const getProducts = async (props?: IgetProducts) => {
	let params = "";
	if (props?.take) {
		params = new URLSearchParams({ ...props }).toString();
	}

	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products${params ? `?=${params}` : ""}`,
	);
	return (await res.json()) as IProduct[];
};

export const getProductById = async (productId: IProduct["id"]) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${productId}`);
	return (await res.json()) as IProduct;
};
