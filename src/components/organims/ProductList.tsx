import products from "../../../public/mocks/products.json";
import { ProductListItem } from "@/components/moleculs/ProductListItem";
import { type IProduct } from "@/types/product";
export const ProductList = () => {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="text-2xl font-bold tracking-tight text-gray-900">
					Customers also purchased
				</h2>
				<div
					data-testid="products-list"
					className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
				>
					{products.map((product: IProduct) => (
						<ProductListItem key={product.id} product={product} />
					))}
				</div>
			</div>
		</div>
	);
};
