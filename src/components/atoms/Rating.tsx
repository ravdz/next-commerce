import { Star } from "@/svg/Star";
import { range } from "@/utils";

type Props = {
	rating: number;
};
export const Rating = ({ rating }: Props) => {
	const stars = range(1, 5);
	const ratingNumber = Math.round(rating);
	return (
		<div>
			<div className="flex items-center">
				{stars.map((star) => (
					<Star key={star} className={ratingNumber >= star ? "text-gray-900" : "text-gray-200"} />
				))}
			</div>
			<p className="sr-only">{ratingNumber} out of 5 stars</p>
		</div>
	);
};
