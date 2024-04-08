"use server";
import { revalidatePath } from "next/cache";
import { changeQuantity, removeItemFromCart } from "@/api/cart";

export const changeProductQuantity = async (
	cartId: string,
	productId: string,
	quantity: number,
) => {
	if (quantity > 0) {
		await changeQuantity(cartId, { productId, quantity });
		revalidatePath("/cart");
	}
};

export const removeProductFromCart = async (cartId: string, productId: string) => {
	await removeItemFromCart(cartId, { productId });
	revalidatePath("/cart");
};
