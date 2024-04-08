"use client";
import { removeProductFromCart } from "@/app/cart/actions";

export const RemoveProduct = ({ cartId, productId }: { cartId: string; productId: string }) => {
	const removeProduct = async () => {
		await removeProductFromCart(cartId, productId);
	};
	return (
		<form className="flex">
			<button
				formAction={removeProduct}
				type="submit"
				className="font-medium text-indigo-600 hover:text-indigo-500"
			>
				Remove
			</button>
		</form>
	);
};
