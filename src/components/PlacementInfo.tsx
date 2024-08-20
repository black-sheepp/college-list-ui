import React from "react";
import { formatCurrency } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface PlacementInfoProps {
	averagePlacement: number;
	highestPlacement: number;
}

const PlacementInfo: React.FC<PlacementInfoProps> = ({ averagePlacement, highestPlacement }) => {
	return (
		<td className='block md:table-cell space-y-1'>
			<div>
				<p className='text-[#02c39a] font-semibold'>{formatCurrency(averagePlacement)}</p>
				<p className='text-xs'>Average Package</p>
			</div>
			<div>
				<p className='text-[#02c39a] font-semibold'>{formatCurrency(highestPlacement)}</p>
				<p className='text-xs'>Highest Package</p>
			</div>
			<button className='text-orange-500 text-xs font-semibold'>
				<FontAwesomeIcon icon={faArrowRightArrowLeft} size='sm' style={{ color: "#F97315" }} className="mr-1"/>
				Compare Placement
			</button>
		</td>
	);
};

export default PlacementInfo;
