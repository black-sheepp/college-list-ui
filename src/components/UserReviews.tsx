import React from "react";
import { formatRating } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";

interface UserReviewsProps {
	rating: number;
	reviewsCount: number;
	highlight: string;
}

const UserReviews: React.FC<UserReviewsProps> = ({ rating, reviewsCount, highlight }) => {
	return (
		<td className='block md:table-cell space-y-2'>
			<div className='items-center'>
				<p className='text-black text-lg font-sans'>
					<FontAwesomeIcon icon={faCircle} size='2xs' style={{ color: "#FFD43B" }} className="mr-2" />
					{formatRating(rating)}
				</p>
				<p className='text-gray-400 text-xs'>{`Based on ${reviewsCount} Users Review`}</p>
			</div>
			<div className='text-[#d81159] text-xs font-semibold bg-yellow-100 w-fit px-3 py-1 rounded-full'>
				<FontAwesomeIcon icon={faCheck} size='sm' style={{ color: "#d81159" }} className='mr-1' />
				{highlight}
                <FontAwesomeIcon icon={faAngleDown} size='sm' style={{ color: "#d81159" }} className='ml-1 items-start' />
			</div>
		</td>
	);
};

export default UserReviews;
