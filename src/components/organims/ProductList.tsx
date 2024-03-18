import { ProductListItem } from "@/components/moleculs/ProductListItem";
import type { IProduct } from "@/types/product";

type Props = {
	products: IProduct[];
};
export const ProductList = ({ products }: Props) => {
	return (
		<>
			<h1 className="text-2xl font-bold tracking-tight text-gray-900">All products</h1>
			<ul
				data-testid="products-list"
				className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
			>
				{products.map((product: IProduct) => (
					<ProductListItem key={product.id} product={product} />
				))}
			</ul>
		</>
	);
};
