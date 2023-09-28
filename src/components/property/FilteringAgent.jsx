/** @format */

'use client';
import React, { useEffect, useState } from 'react';
import TopFilter from './TopFilter';
import AllAgents from './agents/AllAgents';
import agents from '@/data/agents';
import PaginationTwo from '../listing/PaginationTwo';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function FilteringAgent({
	data,
	getPagination,
	allCities,
	getFilterData,
}) {
	// if (data.length != 0) {
	// }
	// const [allAgents, setAllAgents] = useState([]);
	// const [totalpages, setPages] = useState();

	// useEffect(() => {
	// 	// setAllAgents(data.agents);
	// 	// setPages(Math.ceil(data.count / 2));
	// }, [data]);

	// console.log(allCities);
	const [location, setLocation] = useState('All Cities');

	const [filterData, setFilterData] = useState({
		city: '',
		category: '',
		agent_name: '',
	});

	const getThePage = (page) => {
		getPagination(page);
	};

	const handlelocation = (elm) => {
		console.log(elm);
		setLocation(elm);
	};

	// my edit above

	const [filteredData, setFilteredData] = useState([]);
	const [currentSortingOption, setCurrentSortingOption] = useState('Newest');
	const [sortedFilteredData, setSortedFilteredData] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [pageItems, setPageItems] = useState([]);
	const [pageContentTrac, setPageContentTrac] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	useEffect(() => {
		setPageItems(
			sortedFilteredData.slice((pageNumber - 1) * 15, pageNumber * 15)
		);
		setPageContentTrac([
			(pageNumber - 1) * 15 + 1,
			pageNumber * 15,
			sortedFilteredData.length,
		]);
	}, [pageNumber, sortedFilteredData]);
	const [propertyTypes, setPropertyTypes] = useState([]);

	const resetFilter = () => {
		setPropertyTypes([]);
		setLocation('All Cities');
		setCurrentSortingOption('Newest');
		document.querySelectorAll('.filterInput').forEach(function (element) {
			element.value = null;
		});
	};
	const handlepropertyTypes = (elm) => {
		if (elm == 'All') {
			setPropertyTypes([]);
		} else {
			setPropertyTypes((pre) =>
				pre.includes(elm) ? [...pre.filter((el) => el != elm)] : [...pre, elm]
			);
		}
	};

	const filterFunctions = {
		handlepropertyTypes,

		handlelocation,
		setSearchQuery,

		propertyTypes,
		resetFilter,
		location,
		setPropertyTypes,
	};

	useEffect(() => {
		const refItems = agents.filter((elm) => {
			return elm;
		});

		let filteredArrays = [];

		if (propertyTypes.length > 0) {
			const filtered = refItems.filter((elm) =>
				propertyTypes.includes(elm.category)
			);
			filteredArrays = [...filteredArrays, filtered];
		}
		filteredArrays = [
			...filteredArrays,
			refItems.filter((el) =>
				el.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
			),
		];

		if (location != 'All Cities') {
			filteredArrays = [
				...filteredArrays,
				refItems.filter((el) => el.city == location),
			];
		}

		const commonItems = refItems.filter((item) =>
			filteredArrays.every((array) => array.includes(item))
		);
		setFilteredData(commonItems);
	}, [propertyTypes, location, searchQuery]);

	useEffect(() => {
		setPageNumber(1);
		setSortedFilteredData(filteredData);
	}, [filteredData, currentSortingOption]);

	return (
		<section className='our-agents pt-0'>
			<div className='container'>
				<div className='row align-items-center mb20'>
					<TopFilter
						filterFunctions={filterFunctions}
						allCities={allCities}
					/>
				</div>
				{/* End .row */}

				<div
					className='row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5'
					data-aos='fade-up'
					data-aos-delay='100'>
					{data.agents != undefined ? <AllAgents data={data.agents} /> : ''}
				</div>
				{/* End .row */}

				<div className='row justify-content-center mt20'>
					{/* <PaginationTwo
						pageNumber={pageNumber}
						setPageNumber={setPageNumber}
						data={sortedFilteredData}
						pageCapacity={15}
					/> */}
					f
					<Stack spacing={2}>
						<Pagination
							count={Math.ceil(data.count / 2)}
							variant='outlined'
							shape='rounded'
							onChange={(event, value) => getThePage(value)}
						/>
					</Stack>
				</div>
			</div>
		</section>
	);
}
