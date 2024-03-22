"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search } from "@/svg/Search";

export const Searchbar = () => {
	const [search, setSearch] = useState("");
	const router = useRouter();

	const checkKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			submitSearch();
		}
	};

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			submitSearch();
		}, 500);

		return () => clearTimeout(delayDebounceFn);
	}, [search]);

	const submitSearch = () => {
		if (search.length > 1) {
			router.push(`/search?query=${search}`);
		}
	};

	return (
		<div className="w-full md:w-auto">
			<label htmlFor="search" className="sr-only">
				Search
			</label>
			<div className="relative flex w-full items-center justify-start overflow-hidden rounded  md:w-auto">
				<div className="absolute left-0 top-0 flex translate-y-1/2 items-center justify-center pl-3 text-gray-300">
					<Search />
				</div>
				<input
					value={search}
					onKeyDown={(e) => checkKeyDown(e)}
					onChange={(e) => setSearch(e.target.value)}
					id="search"
					name="search"
					className="block w-full bg-gray-600 py-2.5 pl-10 pr-3 text-sm text-gray-300 md:w-auto md:min-w-60 lg:min-w-80"
					placeholder="Search"
					type="search"
				/>
			</div>
		</div>
	);
};
