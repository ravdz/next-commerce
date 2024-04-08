"use client";
import { useFormStatus } from "react-dom";

export function AddToCartButton() {
	const { pending } = useFormStatus();

	return (
		<button
			data-testid="add-to-cart-button"
			type="submit"
			disabled={pending}
			aria-disabled={pending}
			className={`mt-10 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${pending ? "bg-indigo-300" : "bg-indigo-600 hover:bg-indigo-700"}`}
		>
			Add to cart
		</button>
	);
}
