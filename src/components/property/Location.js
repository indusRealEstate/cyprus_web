/** @format */

'use client';
import { values } from '@/data/mobileMenuItems';
import Select from 'react-select';
import { getDealingCities } from '@/api/pages/agents';
import React, { useLayoutEffect, useState } from 'react';

const Location = ({ filterFunctions }) => {
	//
	const [allCities, setAllCities] = useState([]);
	getDealingCities().then((item) => {
		setAllCities(item);
	});

	const locationOptions = allCities.map((city) => ({
		value: city.city,
		label: city.city,
	}));

	// const locationOptions = [
	// 	{ value: 'All Cities', label: 'All Cities' },
	// 	{ value: 'California', label: 'California' },
	// 	{ value: 'Los Angeles', label: 'Los Angeles' },

	// 	{ value: 'New York', label: 'New York' },
	// 	{ value: 'San Diego', label: 'San Diego' },
	// 	{ value: 'San Francisco', label: 'San Francisco' },
	// 	{ value: 'Texas', label: 'Texas' },
	// ];

	// console.log(locationOptions);

	const customStyles = {
		option: (styles, { isFocused, isSelected, isHovered }) => {
			return {
				...styles,
				backgroundColor: isSelected
					? '#89ada3'
					: isHovered
					? '#89ada312'
					: isFocused
					? '#89ada312'
					: undefined,
			};
		},
	};

	return (
		<>
			{allCities != undefined ? (
				<Select
					defaultValue={[locationOptions[0]]}
					name='colors'
					styles={customStyles}
					options={locationOptions}
					className='select-custom'
					classNamePrefix='select'
					required
					value={{
						value: filterFunctions.location,
						label: filterFunctions.location,
					}}
					onChange={(e) => filterFunctions?.handlelocation(e.value)}
				/>
			) : (
				''
			)}
		</>
	);
};

export default Location;
