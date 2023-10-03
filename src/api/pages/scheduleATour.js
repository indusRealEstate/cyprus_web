import axios from 'axios';
import { NextResponse, NextRequest } from 'next/server';

export async function submit(data) {
	const res = await axios
		.post('https://premium-realtor.com/api/forms/scheduleATtour.php', data)
		.catch((error) => {
			console.log(error);
		});

	return res;
}
