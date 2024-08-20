import React from 'react';

interface RankingInfoProps {
    nationalRank: number;
    source: string;
    year: number;
}

const RankingInfo: React.FC<RankingInfoProps> = ({ nationalRank, source, year }) => {
    return (
        <td className='p-2 block md:table-cell'>
            <div className='text-gray-700 font-semibold'>{`#${nationalRank} in India`}</div>
            <div className='text-gray-400'>
                {source} {year}
            </div>
        </td>
    );
};

export default RankingInfo;
