import type { Metadata } from "next";
import { RelatedProducts } from "@/components/organims/RelatedProducts";

export const metadata: Metadata = {
	title: "Next ecommerce app",
	description: "Next ecommerce app",
};

export default function Home() {
	return (
		<main>
			<RelatedProducts />
		</main>
	);
}
