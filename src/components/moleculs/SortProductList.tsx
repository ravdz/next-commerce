import Link from "next/link";

export const SortProductList = ({ activeOrderBy = "" }: { activeOrderBy: string | undefined }) => {
	return (
		<div className="my-2 flex items-center justify-end">
			<span className="text-sm font-bold text-gray-900">Sort by:</span>
			<Link
				href={{ query: { orderby: "price" } }}
				data-testid="sort-by-price"
				type="button"
				className={`ml-3 text-sm transition hover:text-indigo-500 ${activeOrderBy.toLowerCase() === "price" ? "text-indigo-500" : "text-gray-600"}`}
			>
				Price
			</Link>
			<Link
				href={{ query: { orderby: "rating" } }}
				data-testid="sort-by-rating"
				className={`ml-3 text-sm transition hover:text-indigo-500 ${activeOrderBy.toLowerCase() === "rating" ? "text-indigo-500" : "text-gray-600"}`}
				type="button"
			>
				Rating
			</Link>
		</div>
	);
};
