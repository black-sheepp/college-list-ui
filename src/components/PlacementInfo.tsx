import React from 'react';
import { formatCurrency } from '../utils/utils';

interface PlacementInfoProps {
    averagePlacement: number;
    highestPlacement: number;
}

const PlacementInfo: React.FC<PlacementInfoProps> = ({ averagePlacement, highestPlacement }) => {
    return (
        <td className='p-2 block md:table-cell'>
            <div className='text-gray-700'>{formatCurrency(averagePlacement)}</div>
            <div className='text-gray-400'>{`Highest: ${formatCurrency(highestPlacement)}`}</div>
        </td>
    );
};

export default PlacementInfo;
