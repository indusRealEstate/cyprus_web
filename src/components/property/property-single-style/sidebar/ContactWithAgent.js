/** @format */

'use client';
import { getAgentDetails } from '@/api/pages/agents';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';

const ContactWithAgent = ({ agentId }) => {
	const [data, setData] = useState('');
	const [imgloading, setImageLoading] = useState(true);
	useEffect(() => {
		getAgentDetails(agentId).then((res) => {
			setData(res);
		});
	}, [data]);

	return (
		<>
			{data == '' ? (
				<>
					<div className='agent-single d-sm-flex align-items-center pb25'>
						<div className='single-img mb30-sm'>
							<Skeleton
								// sx={{ bgcolor: "grey.100" }}
								variant='rectangular'
								width={90}
								height={90}
								className='w90'
							/>
						</div>
						<div className='single-contant ml20 ml0-xs w-100'>
							<Skeleton
								variant='rectangular'
								className='title mb-1'
							/>
							<Skeleton
								variant='rectangular'
								className='title mb-1'
							/>
							<Skeleton
								variant='rectangular'
								className='title mb-1'
							/>
						</div>
					</div>
					<div className='d-grid'>
						<Skeleton
							variant='rectangular'
							className='title mb-1'
							height={50}
						/>
					</div>
				</>
			) : (
				<>
					<div className='agent-single d-sm-flex align-items-center pb25'>
						<div className='single-img mb30-sm'>
							{imgloading && (
								<Skeleton
									variant='rectangular'
									width={90}
									height={90}
								/>
							)}
							<Image
								width={90}
								height={90}
								className={`${
									imgloading
										? 'opacity-0 position-absolute w90'
										: 'opacity-100 w90'
								}}`}
								src={`https://premium-realtor.com/api/media/agents/${data.agent_id}/${data.image}`}
								alt='avatar'
								onLoadingComplete={() => setImageLoading(false)}
							/>
						</div>
						<div className='single-contant ml20 ml0-xs'>
							<h6 className='title mb-1'>
								{data.fname} {data.lname}
							</h6>
							<div className='agent-meta mb10 d-md-flex align-items-center'>
								<a
									className='text fz15'
									href='#'>
									<i className='flaticon-call pe-1' />
									{data.phone}
								</a>
							</div>
							<Link
								href={{
									pathname: '/agent-details',
									query: {
										id: data.agent_id,
									},
								}}
								className='text-decoration-underline fw600'>
								View Listings
							</Link>
						</div>
					</div>

					<div className='d-grid'>
						<Link
							href={{
								pathname: '/agent-details',
								query: {
									id: data.agent_id,
								},
							}}
							className='ud-btn btn-white2'>
							Contact Agent
							<i className='fal fa-arrow-right-long' />
						</Link>
					</div>
				</>
			)}
		</>
	);
};

export default ContactWithAgent;
