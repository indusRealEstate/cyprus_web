/** @format */

import axios from 'axios';
import { NextResponse, NextRequest } from 'next/server';

export async function getExclusiveAgents() {
	const res = await fetch(
		'https://premium-realtor.com/api/agents/get_all_exclusive_agents.php',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);

	return await res.json();
}

export async function getAgentDetails(agent_id) {
	const res = await axios
		.post('https://premium-realtor.com/api/agents/get_agent_details.php', {
			agent_id: agent_id,
		})
		.catch(function (error) {
			console.log(error);
		});

	return res.data;
}

export async function getAllAgents(page, limit) {
	const data = {
		pageNumber: page,
		limit: limit,
	};

	const res = await axios
		.post('https://premium-realtor.com/api/agents/get_all_agents.php', data)
		.catch((error) => {
			console.log(error);
		});

	return res;
}

export async function getAgentListingsLimited4(agent_id, prop_for) {
	const res = await axios
		.post(
			'https://premium-realtor.com/api/agents/get_agent_listed_properties_limited.php',
			{
				agent_id: agent_id,
				prop_for: prop_for,
			}
		)
		.catch((error) => {
			console.log(error);
		});

	return res.data;
}

export async function getAllAgentListings(agent_id) {
	const res = await axios
		.post(
			'https://premium-realtor.com/api/agents/get_agent_listed_properties_all.php',
			{
				agent_id: agent_id,
			}
		)
		.catch((error) => {
			console.log(error);
		});

	return res.data;
}

export async function getDealingCities() {
	const res = await axios
		.get('https://premium-realtor.com/api/agents/get_all_dealing_cities.php')
		.catch((error) => {
			console.log(error);
		});

	return res.data;
}
