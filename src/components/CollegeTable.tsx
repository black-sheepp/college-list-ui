import React from 'react';
import CollegeRow from './CollegeRow';
import Institution from '../utils/interface';

interface CollegeTableProps {
    colleges: Institution[];
}

const CollegeTable: React.FC<CollegeTableProps> = ({ colleges }) => {
    return (
        <tbody className='block md:table-row-group'>
            {colleges.map((college) => (
                <CollegeRow key={college.id} college={college} />
            ))}
        </tbody>
    );
};

export default CollegeTable;
