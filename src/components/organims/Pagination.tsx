import Link from "next/link";
import type { Route } from "next";
import { usePagination } from "@/hooks/usePagination";
import { ActiveLink } from "@/components/atoms/ActiveLink";
import { ChevronLeft } from "@/svg/ChevronLeft";
import { ChevronRight } from "@/svg/ChevronRight";

type Props = {
	totalItems: number;
	currentPage: number;
	baseUrl: string;
	itemsPerPage?: number;
	searchParams?: { [key: string]: string | string[] | undefined };
};
export const Pagination = ({
	currentPage,
	totalItems,
	baseUrl,
	itemsPerPage = 10,
	searchParams = {},
}: Props) => {
	const paginationRange = usePagination({
		currentPage,
		totalItems,
		itemsPerPage,
	});

	const lastPage = paginationRange[paginationRange.length - 1];
	return (
		<div className="mt-10 flex items-center justify-between border-t border-gray-200 bg-white py-3">
			{paginationRange.length > 1 && (
				<div className="flex flex-1 justify-between sm:hidden">
					{currentPage !== 1 && (
						<Link
							href={{ pathname: `${baseUrl}/${currentPage - 1}`, query: searchParams }}
							className="relative mr-auto inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
						>
							Previous
						</Link>
					)}

					{currentPage !== lastPage && (
						<Link
							href={{ pathname: `${baseUrl}/${currentPage + 1}`, query: searchParams }}
							className="relative  ml-auto inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
						>
							Next
						</Link>
					)}
				</div>
			)}

			<div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
				<div>
					<p className="text-sm text-gray-700">
						Total items:
						<span className="ml-1 font-medium">{totalItems}</span>
					</p>
				</div>
				{paginationRange.length > 1 && (
					<div>
						<nav
							className="isolate inline-flex -space-x-px rounded-md shadow-sm"
							aria-label="pagination"
						>
							{currentPage !== 1 && (
								<Link
									className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
									href={{ pathname: `${baseUrl}/${currentPage - 1}`, query: searchParams }}
								>
									<span className="sr-only">Previous</span>
									<ChevronLeft />
								</Link>
							)}

							{paginationRange.map((pageNumber, index) => {
								if (pageNumber === "DOTS")
									return (
										<span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
											...
										</span>
									);

								return (
									<ActiveLink
										key={index + 1}
										activeClassName="z-10 hover:bg-indigo-600 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
										exact={true}
										className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
										href={`${baseUrl}/${pageNumber}` as Route}
										searchParams={searchParams}
									>
										{pageNumber}
									</ActiveLink>
								);
							})}

							{currentPage !== lastPage && (
								<Link
									className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
									href={{ pathname: `${baseUrl}/${currentPage + 1}`, query: searchParams }}
								>
									<span className="sr-only">Next</span>
									<ChevronRight />
								</Link>
							)}
						</nav>
					</div>
				)}
			</div>
		</div>
	);
};
