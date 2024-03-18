"use client";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import React, { useMemo } from "react";
import { type Route } from "next";
import { usePathname } from "next/navigation";

type Props<R extends string> = {
	className?: string;
	activeClassName?: string;
	href: Route<R>;
	exact?: boolean;
	children: React.ReactNode;
};
export const ActiveLink = <R extends string>({
	children,
	href,
	className = "",
	activeClassName = "",
	exact = true,
}: Props<R>) => {
	const pathname = usePathname();
	const isActive = useMemo(() => {
		if (exact) return href === pathname;
		return pathname.startsWith(href);
	}, [pathname, exact, href]);

	const classes = twMerge(className, isActive ? activeClassName : "");
	return (
		<Link href={href} className={classes} aria-current={isActive ? "page" : false}>
			{children}
		</Link>
	);
};
