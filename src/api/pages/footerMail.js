/** @format */

import axios from 'axios';
import { NextResponse, NextRequest } from 'next/server';

export async function subscrbeMail(data) {
	const res = await axios
		.post('https://premium-realtor.com/api/forms/emailSubcribe.php', {
			data: data,
		})
		.catch(function (error) {
			console.log(error);
		});

	return res.data;
}
