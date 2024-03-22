"use client";
import { useEffect, useState } from "react";
import { type Route } from "next";
import { usePathname } from "next/navigation";
import { ActiveLink } from "@/components/atoms/ActiveLink";
import { Searchbar } from "@/components/moleculs/Searchbar";

const links = [
	{
		href: "/",
		label: "Home",
		exact: true,
	},
	{ href: "/products", label: "All", exact: false },
	{ href: "/categories", label: "Categories", exact: false },
	{ href: "/collections", label: "Collections", exact: false },
];

export const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		setMenuOpen(false);
	}, [pathname]);

	return (
		<nav className="bg-gray-800">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						<button
							onClick={() => setMenuOpen(!menuOpen)}
							type="button"
							className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded="false"
						>
							<span className="absolute -inset-0.5"></span>
							<span className="sr-only">Open main menu</span>

							<svg
								className="block h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>

							<svg
								className="hidden h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex flex-shrink-0 items-center">
							<img
								className="h-8 w-auto"
								src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
								alt="Your Company"
							/>
						</div>
						<div className="hidden items-center justify-start sm:ml-6 sm:flex">
							<ul className="flex space-x-4">
								{links.map(({ href, label, exact }, id) => {
									return (
										<li className="list-none" key={id}>
											<ActiveLink
												className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
												href={href as Route}
												exact={exact}
												activeClassName="bg-gray-900 hover:bg-gray-900 hover:text-gray-300"
											>
												{label}
											</ActiveLink>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
					<div className="hidden shrink sm:block">
						<Searchbar />
					</div>
				</div>
			</div>

			<div className="relative z-10 w-full sm:hidden" id="mobile-menu">
				<div
					className={`absolute left-0 top-0 z-10 w-full bg-gray-800 px-2 pb-3 pt-2 transition ${!menuOpen ? "-translate-x-full" : ""}`}
				>
					<Searchbar />
					<ul className="mt-4 space-y-1">
						{links.map(({ href, label, exact }, id) => {
							return (
								<li className="list-none" key={id}>
									<ActiveLink
										className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
										href={href as Route}
										exact={exact}
										activeClassName="bg-gray-900 hover:bg-gray-900 hover:text-gray-300"
									>
										{label}
									</ActiveLink>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
