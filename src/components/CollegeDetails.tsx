import React from 'react';
import Institution from '../utils/interface';

interface CollegeDetailsProps {
    college: Institution;
}

const CollegeDetails: React.FC<CollegeDetailsProps> = ({ college }) => {
    return (
        <td className='p-2 block md:table-cell'>
            <div className='font-semibold text-blue-600'>{college.name}</div>
            <div className='text-gray-500'>{college.location}</div>
            <div className='text-sm text-gray-400'>{college.approved}</div>
            <div className='text-sm text-gray-400'>{college.course}</div>
            <div className='text-sm text-gray-400'>{college.cutoff}</div>
            <div className='mt-2'>
                <button className='text-orange-500'>Apply Now</button>
                <button className='ml-4 text-green-500'>Download Brochure</button>
            </div>
        </td>
    );
};

export default CollegeDetails;
