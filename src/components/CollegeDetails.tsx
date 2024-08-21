import React from "react";
import Institution from "../utils/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faDownload, faRightLong } from "@fortawesome/free-solid-svg-icons";

interface CollegeDetailsProps {
	college: Institution;
}

const CollegeDetails: React.FC<CollegeDetailsProps> = ({ college }) => {
	return (
		<td className='block md:table-cell space-y-1'>
			<div className='flex gap-4'>
				<img src={college.icon} alt='college' className='w-12 h-12 mt-2 rounded-full' />
				<div className='space-y-1'>
					<div className='font-semibold text-[#1d4e89]'>{college.name}</div>
					<p className='text-gray-500 text-xs'>
						{college.location} | {college.approved}
					</p>
					<div className='bg-[#fff6cc] p-2 rounded-r-3xl border-l-2 border-orange-600 w-fit pr-3'>
						<div className='flex items-center text-orange-600 font-semibold space-y-1'>
							<span className='text-sm'>{college.course}</span>
							<FontAwesomeIcon icon={faChevronDown} className='ml-2 text-xs' />
						</div>
						<div className='text-xs text-black mt-1'>{college.cutoff}</div>
					</div>
				</div>
			</div>
			<div className='flex w-full justify-between'>
				<button className='text-orange-500 text-xs font-semibold'>
					<FontAwesomeIcon icon={faRightLong} size='lg' style={{ color: "#F97315" }} className='mr-1' />
					Apply Now
				</button>
				<button className='ml-4 text-green-500 text-xs font-semibold'>
					<FontAwesomeIcon icon={faDownload} size='lg' style={{ color: "#32C764" }} className='mr-1' />
					Download Brochure
				</button>
				<div className='mt-2 flex items-center gap-2'>
					<input type='checkbox' id='checkbox' name='compareCOlleges' />
					<label htmlFor='checkbox' className='text-xs'>
						{" "}
						Add To Compare
					</label>
				</div>
			</div>
		</td>
	);
};

export default CollegeDetails;
