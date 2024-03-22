import { ProductListItem } from "@/components/moleculs/ProductListItem";
import type { IProductCard } from "@/types/product";
import { getProducts } from "@/api/products";
export const RelatedProducts = async () => {
	const { products } = await getProducts({ take: 4, orderBy: "RATING", order: "DESC" });
	return (
		<div>
			<h2 className="text-2xl font-bold tracking-tight text-gray-900">Top rated products</h2>
			<ul
				data-testid="related-products"
				className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 rounded bg-gray-100 p-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
			>
				{products.map((product: IProductCard) => (
					<ProductListItem key={product.id} product={product} />
				))}
			</ul>
		</div>
	);
};
