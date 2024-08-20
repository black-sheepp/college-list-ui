import React from 'react';

const TableHeader: React.FC = () => {
    return (
        <thead className='block md:table-header-group'>
            <tr className='border-b border-gray-300 block md:table-row'>
                <th className='text-left p-2 block md:table-cell'>Rank</th>
                <th className='text-left p-2 block md:table-cell'>Colleges</th>
                <th className='text-left p-2 block md:table-cell'>Course Fees</th>
                <th className='text-left p-2 block md:table-cell'>Placement</th>
                <th className='text-left p-2 block md:table-cell'>User Reviews</th>
                <th className='text-left p-2 block md:table-cell'>Ranking</th>
            </tr>
        </thead>
    );
};

export default TableHeader;
