import { removeProductFromCart } from "@/app/cart/actions";

export const RemoveProduct = ({ cartId, productId }: { cartId: string; productId: string }) => {
	return (
		<form className="flex">
			<button
				formAction={async () => {
					"use server";
					await removeProductFromCart(cartId, productId);
				}}
				type="submit"
				className="font-medium text-indigo-600 hover:text-indigo-500"
			>
				Remove
			</button>
		</form>
	);
};
