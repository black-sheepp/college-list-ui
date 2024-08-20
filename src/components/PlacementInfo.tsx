import React from "react";
import { formatCurrency } from "../utils/utils";

interface PlacementInfoProps {
	averagePlacement: number;
	highestPlacement: number;
}

const PlacementInfo: React.FC<PlacementInfoProps> = ({ averagePlacement, highestPlacement }) => {
	return (
		<td className='p-2 block md:table-cell'>
			<div>
				<p className='text-[#2a9d8f] font-semibold'>{formatCurrency(averagePlacement)}</p>
				<p className='text-xs'>Average Package</p>
			</div>
			<div>
				<p className='text-[#2a9d8f] font-semibold'>{formatCurrency(highestPlacement)}</p>
				<p className='text-xs'>Highest Package</p>
			</div>
            <button className="text-orange-500 text-xs font-semibold">Compare Placement</button>
		</td>
	);
};

export default PlacementInfo;
