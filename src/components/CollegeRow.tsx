import React from "react";
import CollegeDetails from "./CollegeDetails";
import PlacementInfo from "./PlacementInfo";
import UserReviews from "./UserReviews";
import RankingInfo from "./RankingInfo";
import Institution from "../utils/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface CollegeRowProps {
    college: Institution;
}

const CollegeRow: React.FC<CollegeRowProps> = ({ college }) => {
    const rowClasses = college.featured
        ? 'relative border-b border-gray-300 block md:table-row bg-red-50'
        : 'relative border-b border-gray-300 block md:table-row';

    return (
        <tr key={college.id} className={rowClasses}>
            <td className="p-2 block md:table-cell align-top text-xl">{`#${college.rank}`}</td>
            <td className="p-2 block md:table-cell align-top relative">
                {college.featured && (
                    <div className="absolute top-2 left-2 transform -translate-y-1/2">
                        <div className="bg-red-500 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg">
                            Featured
                        </div>
                    </div>
                )}
                <div className="pt-6">
                    <CollegeDetails college={college} />
                </div>
            </td>
            <td className="p-2 block md:table-cell align-top">
                <div className="text-[#02c39a] font-semibold">{`₹ ${college.fees.toLocaleString()}`}</div>
                <p className="text-gray-400 text-xs">BE/BTech</p>
                <p className="text-gray-400 text-xs">-First Year Fee</p>
                <button className="text-orange-500 text-xs font-semibold">
                    <FontAwesomeIcon
                        icon={faArrowRightArrowLeft}
                        size="sm"
                        style={{ color: "#F97315" }}
                        className="mr-1"
                    />
                    Compare Fees
                </button>
            </td>
            <td className="p-2 block md:table-cell align-top">
                <PlacementInfo
                    averagePlacement={college.average_placement}
                    highestPlacement={college.highest_placement}
                />
            </td>
            <td className="p-2 block md:table-cell align-top">
                <UserReviews
                    rating={college.user_reviews.rating}
                    reviewsCount={college.user_reviews.reviews_count}
                    highlight={college.user_reviews.highlight}
                />
            </td>
            <td className="p-2 block md:table-cell align-top">
                <RankingInfo
                    nationalRank={college.ranking.national_rank}
                    source={college.ranking.source}
                    year={college.ranking.year}
                />
            </td>
        </tr>
    );
};

export default CollegeRow;
