import Link from "next/link";
import { Cart } from "@/svg/Cart";
import { getCart } from "@/api/cart";

export async function CartButton() {
	const cart = await getCart();
	const count = cart?.items.reduce((acc, item) => {
		return (acc += item.quantity);
	}, 0);
	return (
		<Link
			href={{ pathname: "/cart" }}
			className="relative rounded p-2 transition hover:bg-gray-600 sm:ml-2 md:ml-4"
			type="button"
		>
			<Cart />
			{count ? (
				<span className="absolute left-full top-full z-10 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-indigo-600 text-[10px] text-white">
					{count}
				</span>
			) : (
				""
			)}
		</Link>
	);
}
