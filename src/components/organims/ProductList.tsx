import { ProductListItem } from "@/components/moleculs/ProductListItem";
import type { IProductCard } from "@/types/product";

type Props = {
	products: IProductCard[];
};
export const ProductList = ({ products }: Props) => {
	return (
		<ul
			data-testid="products-list"
			className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
		>
			{products.map((product: IProductCard) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
