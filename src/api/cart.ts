import { cookies } from "next/headers";
import { executeGraphQl } from "@/api/index";
import {
	AddProductToCartDocument,
	ChangeItemQuantityDocument,
	GetCartByIdDocument,
	GetOrCreateCartDocument,
	RemoveItemFromCartDocument,
} from "@/gql/graphql";

export const getCart = async () => {
	"use server";
	const id = cookies().get("cartId")?.value;
	if (!id) return null;
	const { cart } = await executeGraphQl({
		query: GetCartByIdDocument,
		variables: { id },
		next: { tags: ["cart"] },
	});
	return cart;
};

export const createCart = async (productId: string) => {
	const { cartFindOrCreate } = await executeGraphQl({
		query: GetOrCreateCartDocument,
		variables: {
			input: { items: [{ productId, quantity: 1 }] },
		},
	});
	return cartFindOrCreate;
};

export const removeItemFromCart = async (cartId: string, { productId }: { productId: string }) => {
	const { cartRemoveItem } = await executeGraphQl({
		query: RemoveItemFromCartDocument,
		variables: {
			id: cartId,
			productId,
		},
	});
	return cartRemoveItem;
};

export const addItemToCart = async (
	cartId: string,
	product: { productId: string; quantity: number },
) => {
	await executeGraphQl({
		query: AddProductToCartDocument,
		variables: { id: cartId, input: { item: product } },
	});
};

export const changeQuantity = async (
	cartId: string,
	{ productId, quantity }: { productId: string; quantity: number },
) => {
	await executeGraphQl({
		query: ChangeItemQuantityDocument,
		variables: { id: cartId, productId, quantity },
	});
};
