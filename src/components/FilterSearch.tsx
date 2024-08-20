import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";

type SortOption = "College_rating" | "fees" | "user_reviews_rating";

interface FilterSearchProps {
	onSearch: (query: string) => void;
	onSort: (sortKey: SortOption) => void;
}

const FilterSearch: React.FC<FilterSearchProps> = ({ onSearch, onSort }) => {
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [selectedSort, setSelectedSort] = useState<SortOption | "">("");

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
		onSearch(e.target.value);
	};

	const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const sortKey = e.target.value as SortOption;
		setSelectedSort(sortKey);
		onSort(sortKey);
	};

	return (
		<div className='flex justify-center items-center flex-col'>
			<h1 className='w-full text-4xl font-bold text-gray-900 mb-4 mx-auto text-center my-4'>
				Top College List of India
			</h1>
			<div className='flex flex-col w-full md:flex-row justify-between items-center gap-4 mb-4'>
				<div className='flex items-center bg-white text-gray-900 rounded-full shadow-sm overflow-hidden w-full mx-6 my-3 md:w-1/3'>
					<FontAwesomeIcon icon={faSearch} className='ml-3 text-gray-400 text-sm' />
					<input
						type='text'
						placeholder='Search by college name'
						value={searchQuery}
						onChange={handleSearchChange}
						className='w-full px-3 py-2 text-sm border-1 focus:ring-0 focus:outline-none rounded-full'
					/>
				</div>
				<div className='flex items-center bg-white text-gray-900 rounded-full shadow-sm overflow-hidden w-full mx-6 my-3 md:w-1/4'>
					<select
						value={selectedSort}
						onChange={handleSortChange}
						className='w-full px-3 py-2 text-sm border-0 focus:ring-0 focus:outline-none rounded-full appearance-none bg-transparent'>
						<option value='' disabled>
							Sort by
						</option>
						<option value='fees'>Course Fees</option>
						<option value='College_rating'>College Rating</option>
						<option value='user_reviews_rating'>User Reviews</option>
					</select>
					<div className='pointer-events-none pr-3'>
						<FontAwesomeIcon icon={faChevronDown} className='text-gray-600 text-sm' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FilterSearch;
