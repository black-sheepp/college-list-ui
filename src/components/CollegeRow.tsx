import React from 'react';
import CollegeDetails from './CollegeDetails';
import PlacementInfo from './PlacementInfo';
import UserReviews from './UserReviews';
import RankingInfo from './RankingInfo';
import Institution from '../utils/interface';

interface CollegeRowProps {
    college: Institution;
}

const CollegeRow: React.FC<CollegeRowProps> = ({ college }) => {
    return (
        <tr key={college.id} className='border-b border-gray-300 block md:table-row'>
            <td className='p-2 block md:table-cell'>{`#${college.rank}`}</td>
            <CollegeDetails college={college} />
            <td className='p-2 block md:table-cell'>
                <div className='text-gray-700 font-semibold'>{`₹${college.fees.toLocaleString()}`}</div>
            </td>
            <PlacementInfo
                averagePlacement={college.average_placement}
                highestPlacement={college.highest_placement}
            />
            <UserReviews
                rating={college.user_reviews.rating}
                reviewsCount={college.user_reviews.reviews_count}
                highlight={college.user_reviews.highlight}
            />
            <RankingInfo
                nationalRank={college.ranking.national_rank}
                source={college.ranking.source}
                year={college.ranking.year}
            />
        </tr>
    );
};

export default CollegeRow;
