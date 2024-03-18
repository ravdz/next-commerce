import Link from "next/link";
import { ActiveLink } from "@/components/atoms/ActiveLink";

type Props = {
	totalPages: number;
	totalItems: number;
	currentPage: number;
};
export const Pagination = ({ totalPages, currentPage, totalItems }: Props) => {
	return (
		<div className="mt-10 flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
			<div className="flex flex-1 justify-between sm:hidden">
				<a
					href="#"
					className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
				>
					Previous
				</a>
				<a
					href="#"
					className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
				>
					Next
				</a>
			</div>
			<div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
				<div>
					<p className="text-sm text-gray-700">
						Total products:
						<span className="ml-1 font-medium">{totalItems}</span>
					</p>
				</div>
				<div>
					<nav
						className="isolate inline-flex -space-x-px rounded-md shadow-sm"
						aria-label="pagination"
					>
						{currentPage !== 1 && (
							<Link
								className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
								href={{ pathname: `/products/${currentPage - 1}` }}
							>
								<span className="sr-only">Previous</span>
								<svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path
										fillRule="evenodd"
										d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
										clipRule="evenodd"
									/>
								</svg>
							</Link>
						)}

						<ActiveLink
							activeClassName="z-10 hover:bg-indigo-600 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							exact={true}
							className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
							href="/products/1"
						>
							1
						</ActiveLink>

						{totalPages > 2 && (currentPage === 1 || currentPage === totalPages) && (
							<ActiveLink
								activeClassName="z-10 hover:bg-indigo-600 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								exact={true}
								className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
								href="/products/2"
							>
								2
							</ActiveLink>
						)}

						{totalPages > 4 &&
							(currentPage === 1 || currentPage === totalPages ? (
								<span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
									...
								</span>
							) : (
								<>
									{currentPage - 2 > 1 && (
										<span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
											...
										</span>
									)}

									{currentPage - 1 !== 1 && (
										<ActiveLink
											activeClassName="z-10 hover:bg-indigo-600 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
											exact={true}
											className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
											href={`/products/${currentPage - 1}`}
										>
											{currentPage - 1}
										</ActiveLink>
									)}

									<ActiveLink
										activeClassName="z-10 hover:bg-indigo-600 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
										exact={true}
										className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
										href={`/products/${currentPage}`}
									>
										{currentPage}
									</ActiveLink>

									{currentPage + 1 !== totalPages && (
										<ActiveLink
											activeClassName="z-10 hover:bg-indigo-600 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
											exact={true}
											className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
											href={`/products/${currentPage + 1}`}
										>
											{currentPage + 1}
										</ActiveLink>
									)}

									{currentPage + 2 < totalPages && (
										<span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
											...
										</span>
									)}
								</>
							))}

						{totalPages > 3 && (currentPage === 1 || currentPage === totalPages) && (
							<ActiveLink
								activeClassName="z-10 hover:bg-indigo-600 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								exact={true}
								className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
								href={`/products/${totalPages - 1}`}
							>
								{totalPages - 1}
							</ActiveLink>
						)}

						{totalPages > 1 && (
							<ActiveLink
								activeClassName="z-10 hover:bg-indigo-600 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								exact={true}
								className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
								href={`/products/${totalPages}`}
							>
								{totalPages}
							</ActiveLink>
						)}

						{currentPage !== totalPages && (
							<Link
								className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
								href={{ pathname: `/products/${currentPage + 1}` }}
							>
								<span className="sr-only">Next</span>
								<svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path
										fillRule="evenodd"
										d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
										clipRule="evenodd"
									/>
								</svg>
							</Link>
						)}
					</nav>
				</div>
			</div>
		</div>
	);
};
