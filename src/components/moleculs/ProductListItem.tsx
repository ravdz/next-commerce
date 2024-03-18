import Image from "next/image";
import type { IProduct } from "@/types/product";

interface Props {
	product: IProduct;
}

export const ProductListItem = (props: Props) => {
	const { image, title, price, id } = props.product;
	return (
		<li className="group relative">
			<div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
				<Image
					className="h-full w-full object-cover object-center lg:h-full lg:w-full"
					src={image}
					alt={title}
					width={300}
					height={300}
				/>
			</div>
			<div className="mt-4 flex justify-between">
				<div>
					<h3 className="text-sm text-gray-700">
						<a href={`/product/${id}`}>
							<span aria-hidden="true" className="absolute inset-0" />
							{title}
						</a>
					</h3>
				</div>
				<p className="text-sm font-medium text-gray-900">${price}</p>
			</div>
		</li>
	);
};
