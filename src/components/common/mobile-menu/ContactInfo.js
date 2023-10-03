/** @format */

import React from 'react';

const ContactInfo = () => {
	const contactInfo = [
		{
			id: 1,
			title: 'Customer Care',
			phone: '+(971) 55 213 6536',
			phoneHref: 'tel:+971552136536', // Updated phoneHref to use "tel" URI
		},
		{
			id: 2,
			title: 'Whatsapp',
			email: 'Message Via Whatsapp',
			emailHref: 'https://wa.me/971552136536', // Updated emailHref to use "mailto" URI
		},
	];

	return (
		<>
			{contactInfo.map((info) => (
				<div
					className='col-auto'
					key={info.id}>
					<div className='contact-info'>
						<p className='info-title dark-color'>{info.title}</p>
						{info.phone && (
							<h6 className='info-phone dark-color'>
								<a href={info.phoneHref}>{info.phone}</a>
							</h6>
						)}
						{info.email && (
							<h6 className='info-mail dark-color'>
								<a href={info.emailHref}>{info.email}</a>
							</h6>
						)}
					</div>
				</div>
			))}
		</>
	);
};

export default ContactInfo;
