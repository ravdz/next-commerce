import type { Metadata } from "next";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";
import { getProductById } from "@/api/products";
import { Rating } from "@/components/atoms/Rating";
import { executeGraphql } from "@/api";
import { changeQuantity } from "@/api/cart";
import {
	AddProductToCartDocument,
	GetCartByIdDocument,
	GetOrCreateCartDocument,
} from "@/gql/graphql";
import type { ICart, ICartWithProducts } from "@/types/cart";
import { AddToCartButton } from "@/components/atoms/AddToCartButton";

type Props = {
	params: { productId: string };
};

type ProductToCart = { productId: string; quantity: number };

async function getCart(cartId: string): Promise<ICartWithProducts | null> {
	const { cart } = await executeGraphql(GetCartByIdDocument, { id: cartId });
	return cart || null;
}

async function createCart(productId: string): Promise<ICart> {
	const { cartFindOrCreate } = await executeGraphql(GetOrCreateCartDocument, {
		input: { items: [{ productId, quantity: 1 }] },
	});
	return cartFindOrCreate;
}

async function addToCart(cartId: string, product: ProductToCart) {
	await executeGraphql(AddProductToCartDocument, { id: cartId, input: { item: product } });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { productId } = params;
	const product = await getProductById(productId);
	const { description, name } = product;

	return {
		title: `${name} | Next ecommerce app`,
		description,
	};
}

export default async function ProductPage({ params }: Props) {
	const product = await getProductById(params.productId);
	const { id, name, price, description, images, category, rating, reviews } = product;

	async function addToCartAction() {
		"use server";
		const { productId } = params;
		const cartId = cookies().get("cartId")?.value;
		if (cartId) {
			const cart = await getCart(cartId);
			const hasCurrentItem = cart?.items.find((item) => item.product.id === productId);
			if (hasCurrentItem) {
				await changeQuantity(cartId, { productId, quantity: hasCurrentItem.quantity + 1 });
			} else {
				await addToCart(cartId, { productId, quantity: 1 });
			}
		} else {
			const newCart = await createCart(productId);
			cookies().set("cartId", newCart.id);
		}

		/* temporary check */
		// if (cookies().get("cartId")?.value) {
		// 	const cart = await getCart(cookies().get("cartId")?.value as string);
		// 	console.log(cart);
		// }
		revalidatePath("/cart");
	}

	return (
		<div className="bg-white">
			<div className="pt-6">
				<nav aria-label="Breadcrumb">
					<ol
						role="list"
						className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
					>
						<li>
							<div className="flex items-center">
								<Link href={{ pathname: "/" }} className="mr-2 text-sm font-medium text-gray-900">
									Home
								</Link>
								<svg
									width="16"
									height="20"
									viewBox="0 0 16 20"
									fill="currentColor"
									aria-hidden="true"
									className="h-5 w-4 text-gray-300"
								>
									<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
								</svg>
							</div>
						</li>
						<li>
							<div className="flex items-center">
								<Link
									href={{ pathname: "/products" }}
									className="mr-2 text-sm font-medium text-gray-900"
								>
									Products
								</Link>
								<svg
									width="16"
									height="20"
									viewBox="0 0 16 20"
									fill="currentColor"
									aria-hidden="true"
									className="h-5 w-4 text-gray-300"
								>
									<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
								</svg>
							</div>
						</li>

						<li>
							<div className="flex items-center">
								<Link
									href={{ pathname: `/categories/${category.slug}/1` }}
									className="mr-2 text-sm font-medium text-gray-900"
								>
									{category.name}
								</Link>
								<svg
									width="16"
									height="20"
									viewBox="0 0 16 20"
									fill="currentColor"
									aria-hidden="true"
									className="h-5 w-4 text-gray-300"
								>
									<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
								</svg>
							</div>
						</li>

						<li className="text-sm">
							<Link
								href={{ pathname: `/product/${id}` }}
								aria-current="page"
								className="font-medium text-gray-500 hover:text-gray-600"
							>
								{name}
							</Link>
						</li>
					</ol>
				</nav>

				{images.length && (
					<div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
						<div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
							<Image
								fill
								src={
									images[1]?.url ||
									"https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
								}
								alt={images[1]?.alt || name}
								className="h-full w-full object-cover object-center"
							/>
						</div>
						<div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
							<div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
								<Image
									fill
									src={
										images[2]?.url ||
										"https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
									}
									alt={images[2]?.alt || name}
									className="h-full w-full object-cover object-center"
								/>
							</div>
							<div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
								<Image
									fill
									src={
										images[3]?.url ||
										"https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
									}
									alt={images[3]?.alt || name}
									className="h-full w-full object-cover object-center"
								/>
							</div>
						</div>
						<div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
							<Image
								fill
								src={
									images[0]?.url ||
									"https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
								}
								alt={images[0]?.alt || name}
								className="h-full w-full object-cover object-center"
							/>
						</div>
					</div>
				)}

				<div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
					<div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
						<h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{name}</h1>
					</div>

					<div className="mt-4 lg:row-span-3 lg:mt-0">
						<h2 className="sr-only">Product information</h2>
						<p className="text-3xl tracking-tight text-gray-900">${price}</p>

						<div className="mt-6">
							<h3 className="sr-only">Reviews</h3>
							<div className="flex items-center">
								<Rating rating={rating} />
								<button
									type="button"
									className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
								>
									{reviews} reviews
								</button>
							</div>
						</div>

						<form action={addToCartAction} className="mt-10">
							<input type="hidden" name="productId" value={params.productId} />
							<AddToCartButton />
						</form>
					</div>

					<div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
						<div>
							<h3 className="sr-only">Description</h3>

							<div className="space-y-6">
								<p className="text-base text-gray-900">{description}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
