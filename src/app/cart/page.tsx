import type { Metadata } from "next";
import Image from "next/image";
import { cookies } from "next/headers";
import Link from "next/link";
import { getCartById } from "@/api/cart";
import { ChangeQuantity } from "@/app/cart/ChangeQuantity";
import { RemoveProduct } from "@/app/cart/RemoveProduct";

export const metadata: Metadata = {
	title: "Cart | Next ecommerce app",
	description: "Next ecommerce app",
};

export default async function Cart() {
	const cartId = cookies().get("cartId")?.value;
	const cart = cartId ? await getCartById(cartId) : null;

	return (
		<main>
			<h1 className="text-2xl font-bold tracking-tight text-gray-900">Cart</h1>
			<div className="mt-8">
				{cart?.items.length ? (
					<div className="flow-root">
						<ul role="list" className="-my-6 divide-y divide-gray-200">
							{cart?.items.map(({ quantity, product }) => {
								return (
									<li key={product.id} className="flex py-6">
										<div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
											<Image
												fill
												className="h-full w-full "
												src={product.images[0]?.url || ""}
												alt={product.images[0]?.url || product.name}
											/>
										</div>

										<div className="ml-4 flex flex-1 flex-col">
											<div>
												<div className="flex justify-between text-base font-medium text-gray-900">
													<h3>
														<Link href={{ pathname: `/product/${product.id}` }}>
															{product.name}
														</Link>
													</h3>
													<p className="ml-4">${product.price}</p>
												</div>
												<p className="mt-1 text-sm text-gray-500">Salmon</p>
											</div>
											<div className="flex flex-1 items-end justify-between text-sm">
												<ChangeQuantity
													cartId={cart.id}
													productId={product.id}
													quantity={quantity}
												/>

												<RemoveProduct cartId={cart.id} productId={product.id} />
											</div>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				) : (
					<span className="block text-center text-gray-300">Cart is empty</span>
				)}
			</div>
		</main>
	);
}
