import React from 'react';

interface RankingInfoProps {
    nationalRank: number;
    source: string;
    year: number;
}

const RankingInfo: React.FC<RankingInfoProps> = ({ nationalRank, source, year }) => {
    return (
        <td className='block md:table-cell space-y-1'>
            <div className='text-gray-700 font-semibold text-sm'>{`#${nationalRank} in India`}</div>
            <div className='text-gray-400 text-xs'>
                {source} {year}
            </div>

        </td>
    );
};

export default RankingInfo;
