/** @format */

'use client';
import { getAgentDetails } from '@/api/pages/agents';
import React from 'react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';

const SingleAgentInfo = ({ agentId }) => {
	const [data, setData] = useState('');
	const [imgloading, setImageLoading] = useState(true);
	useEffect(() => {
		getAgentDetails(agentId).then((res) => {
			setData(res);
		});
	}, [data]);

	const agentData = {
		id: 1,
		name: data.fname + ' ' + data.lname,
		phoneNumbers: [data.phone, data.alternative_phone],
		socialMedia: ['facebook', 'twitter', 'instagram', 'linkedin'],
	};

	return (
		<>
			{data == '' ? (
				<></>
			) : (
				<>
					<div className='agent-single d-sm-flex align-items-center bdrb1 mb30 pb25'>
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
								alt='agent'
								style={{
									borderRadius: '50rem',
									objectFit: 'cover',
									objectPosition: 'center',
								}}
								onLoadingComplete={() => setImageLoading(false)}
							/>
						</div>
						<div className='single-contant ml30 ml0-xs'>
							<h6 className='title mb-1'>{agentData.name}</h6>
							<div
								className='agent-meta mb10 d-md-flex align-items-center'
								style={{
									display: 'flex',
									flexWrap: 'wrap',
								}}>
								{agentData.phoneNumbers.map((phoneNumber, index) => (
									<a
										key={index}
										className='text fz15 pe-2 bdrr1'
										href='#'
										style={{
											margin: '10px 0px',
										}}>
										<i className='flaticon-call pe-1 ps-1' />
										{phoneNumber}
									</a>
								))}
								<a
									className='text fz15 ps-2'
									href='#'
									style={{
										margin: '10px 0px',
									}}>
									<i className='flaticon-whatsapp pe-1' />
									WhatsApp
								</a>
							</div>
							<div className='agent-social'>
								{agentData.socialMedia.map((social, index) => (
									<a
										key={index}
										className='mr20'
										href='#'
										style={{
											margin: '10px 0px',
										}}>
										<i className={`fab fa-${social}`} />
									</a>
								))}
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default SingleAgentInfo;
