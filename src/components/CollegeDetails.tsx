import React from "react";
import Institution from "../utils/interface";

interface CollegeDetailsProps {
	college: Institution;
}

const CollegeDetails: React.FC<CollegeDetailsProps> = ({ college }) => {
	return (
		<td className='p-2 block md:table-cell'>
			<div className='font-semibold text-blue-600'>{college.name}</div>
			<p className='text-gray-500 text-xs'>
				{college.location} | {college.approved}
			</p>
			<div className='pl-4'>
				<div className='text-sm text-gray-400'>{college.course}</div>
				<div className='text-xs text-gray-400'>{college.cutoff}</div>
			</div>
			<div className="flex justify-between">
				<div className='mt-2'>
					<button className='text-orange-500 text-xs'>Apply Now</button>
					<button className='ml-4 text-green-500 text-xs'>Download Brochure</button>
				</div>
				<div className='mt-2 flex items-center gap-2'>
					<input type='checkbox' id='checkbox' name='compareCOlleges'/>
					<label htmlFor='checkbox' className="text-xs"> Add To Compare</label>
				</div>
			</div>
		</td>
	);
};

export default CollegeDetails;
