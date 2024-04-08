import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/index";
import {
	ChangeItemQuantityDocument,
	GetCartByIdDocument,
	RemoveItemFromCartDocument,
} from "@/gql/graphql";

export const getCartById = async (cartId: string) => {
	const { cart } = await executeGraphql(GetCartByIdDocument, { id: cartId });
	if (!cart) {
		notFound();
	}
	return cart;
};

export const removeItemFromCart = async (cartId: string, { productId }: { productId: string }) => {
	const { cartRemoveItem } = await executeGraphql(RemoveItemFromCartDocument, {
		id: cartId,
		productId,
	});
	return cartRemoveItem;
};

export const changeQuantity = async (
	cartId: string,
	{ productId, quantity }: { productId: string; quantity: number },
) => {
	await executeGraphql(ChangeItemQuantityDocument, { id: cartId, productId, quantity });
};
