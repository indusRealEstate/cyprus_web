/** @format */

import axios from 'axios';

export async function getPropertyDetails(formData) {
	const res = await axios
		.post('https://premium-realtor.com/api/forms/contactFrom.php', {
			data: formData,
		})
		.catch(function (error) {
			console.log(error);
		});

	return res.json();
}

export async function submitContactForm(formData) {
	const response = await axios.post('https://premium-realtor.com/api/forms/contactFrom.php', {
			data: formData,
		})
		.catch(function (error) {
			console.log(error);
		});
	// return res.json();
	return response;
}


