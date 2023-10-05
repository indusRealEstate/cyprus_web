/** @format */

import axios from "axios"

export async function submitInvestCyprus(data) {
	const response = await axios
		.post("https://premium-realtor.com/api/forms/investInCyprus.php", data)
		.catch(function (error) {
			console.log(error)
		})
	// return res.json();
	return response
}
