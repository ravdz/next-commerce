import Image from "next/image";
import type { IProductCard } from "@/types/product";

interface Props {
	product: IProductCard;
}

export const ProductListItem = (props: Props) => {
	const { coverImage, name, price, id } = props.product;
	return (
		<li className="group relative">
			<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
				{coverImage && (
					<Image
						className="h-full w-full object-cover object-center lg:h-full lg:w-full"
						src={coverImage}
						alt={name}
						width={300}
						height={300}
					/>
				)}
			</div>
			<div className="mt-4 flex justify-between">
				<div>
					<h3 className="text-sm text-gray-700">
						<a href={`/product/${id}`}>
							<span aria-hidden="true" className="absolute inset-0" />
							{name}
						</a>
					</h3>
				</div>
				<span data-testid="product-price" className="text-sm font-medium text-gray-900">
					${price}
				</span>
			</div>
		</li>
	);
};
