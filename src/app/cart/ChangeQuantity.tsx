"use client";
import { useOptimistic } from "react";
import { changeProductQuantity } from "@/app/cart/actions";

export const ChangeQuantity = ({
	cartId,
	productId,
	quantity,
}: {
	cartId: string;
	productId: string;
	quantity: number;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);

	const decreaseQuantity = async () => {
		const newQuantity = optimisticQuantity - 1;
		if (newQuantity > 0) {
			setOptimisticQuantity(newQuantity);
			await changeProductQuantity(cartId, productId, newQuantity);
		}
	};

	const increaseQuantity = async () => {
		const newQuantity = optimisticQuantity + 1;
		setOptimisticQuantity(newQuantity);
		await changeProductQuantity(cartId, productId, newQuantity);
	};

	return (
		<form className="flex items-center justify-start">
			<span className="mr-4 text-gray-500">Quantity:</span>

			<button
				data-testid="decrement"
				disabled={optimisticQuantity < 2}
				formAction={decreaseQuantity}
				className={`${quantity < 2 ? "cursor-not-allowed border-gray-100 bg-gray-100 text-gray-300" : "border-gray-300 text-gray-500 hover:border-indigo-500"} flex h-6 w-6 items-center justify-center rounded border transition`}
				type="submit"
			>
				-
			</button>

			<span className="px-3 text-gray-500" data-testid="quantity">
				{optimisticQuantity}
			</span>

			<button
				data-testid="increment"
				formAction={increaseQuantity}
				className="flex h-6 w-6 items-center justify-center rounded border border-gray-300 px-2 py-0.5 text-gray-500 transition hover:border-indigo-500"
				type="submit"
			>
				+
			</button>
		</form>
	);
};
