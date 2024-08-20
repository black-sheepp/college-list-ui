import React from 'react';
import CollegeTable from './CollegeTable';
import collegeData from '../json-data/collegeData.json';
import TableHeader from './TableHeader';
import Institution from '../utils/interface';

const colleges: Institution[] = collegeData;

const Table: React.FC = () => {
    return (
        <div className='overflow-x-auto'>
            <table className='min-w-full border-collapse block md:table'>
                <TableHeader />
                <CollegeTable colleges={colleges} />
            </table>
        </div>
    );
};

export default Table;
