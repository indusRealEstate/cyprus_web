/** @format */

import { allblogs } from '@/data/blogs';
import Image from 'next/image';
import React from 'react';

export default function Details({ object }) {
	console.log(object);
	return (
		<>
			<div className='container'>
				<div
					className='row'
					data-aos='fade-up'
					data-aos-delay='100'>
					<div className='col-lg-12'>
						<h2 className='blog-title'>{object.blog_title}</h2>
						<div className='blog-single-meta'>
							<div className='post-author d-sm-flex align-items-center'>
								<Image
									width={40}
									height={40}
									className='mr10 cover'
									src={`https://premium-realtor.com/api/media/agents/${object.agent_id}/${object.agent_image}`}
									style={{ borderRadius: '50rem' }}
									alt='blog'
								/>
								<a
									className='pr15 bdrr1'
									href='#'>
									{object.agent_name}
								</a>
								<a
									className='ml15 pr15 bdrr1'
									href='#'>
									{object.category}
								</a>
								<a
									className='ml15'
									href='#'>
									{object.date}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* End .container */}

			<div
				className='mx-auto maxw1600 mt60'
				data-aos='fade-up'
				data-aos-delay='300'>
				<div className='row'>
					<div className='col-lg-12'>
						<div className='large-thumb'>
							<Image
								width={1200}
								height={600}
								priority
								style={{
									objectFit: 'cover',
									width: '100%',
									borderRadius: '10px',
								}}
								src={`${object.blog_main_image}`}
								alt='blog'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
