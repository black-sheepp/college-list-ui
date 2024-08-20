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
            <div className='flex items-center'>
                <span className='text-yellow-400 font-semibold'>{formatRating(rating)}</span>
                <span className='ml-2 text-gray-400'>{`(${reviewsCount} reviews)`}</span>
            </div>
            <div className='text-orange-500 text-sm'>{highlight}</div>
        </td>
    );
};

export default UserReviews;
