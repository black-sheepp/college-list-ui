import React from 'react';
import { formatRating } from '../utils/utils';

interface UserReviewsProps {
    rating: number;
    reviewsCount: number;
    highlight: string;
}

const UserReviews: React.FC<UserReviewsProps> = ({ rating, reviewsCount, highlight }) => {
    return (
        <td className='p-2 block md:table-cell'>
            <div className='items-center'>
                <p className='text-black text-sm font-semibold'>{formatRating(rating)}</p>
                <p className='text-gray-400 text-xs'>{`Based on ${reviewsCount} Users Review`}</p>
            </div>
            <div className='text-orange-500 text-xs'>{highlight}</div>
        </td>
    );
};

export default UserReviews;
