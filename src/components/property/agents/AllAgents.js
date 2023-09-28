/** @format */

import agents from '@/data/agents';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Skeleton } from '@mui/material';

const AllAgents = ({ data }) => {
	const [loaded, setLoaded] = React.useState([]);
	React.useEffect(() => {}, [loaded]);
	return (
		<>
			{data.map((agent) => (
				<div
					className='col'
					key={agent.agent_id}>
					<div className='feature-style2 mb30'>
						<div className='feature-img bdrs12'>
							<Link href={`/agent-single/${agent.agent_id}`}>
								{!loaded.includes(agent.agent_id) && (
									<Skeleton
										// sx={{ bgcolor: "grey.100" }}
										variant='rectangular'
										width={217}
										height={248}
										className='bdrs12 cover'
									/>
								)}
								<img
									width={210}
									height={240}
									// className='bdrs12 cover'
									style={{
										objectFit: 'cover',
										objectPosition: 'top',
									}}
									className={`${
										!loaded.includes(agent.agent_id)
											? 'opacity-0 position-absolute bdrs12 cover'
											: 'opacity-100 bdrs12 cover'
									}}`}
									src={`https://indusmanagement.ae/api/media/agents/${agent.agent_id}/${agent.image}`}
									alt='agents'
									onLoad={() => {
										if (!loaded.includes(agent.agent_id)) {
											loaded.push(agent.agent_id);
											setLoaded(loaded);
										}
									}}
								/>
							</Link>
						</div>
						<div className='feature-content pt20'>
							<h6 className='title mb-1'>
								<Link href={`/agent-single/${agent.agent_id}`}>
									{agent.fname + ' ' + agent.lname}
								</Link>
							</h6>
							<p className='text fz15'>{agent.role}</p>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default AllAgents;
