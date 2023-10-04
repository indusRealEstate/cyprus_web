import React from 'react';

const ContactMeta = () => {
	const contactInfoList = [
		{
			title: 'Customer Care',
			phone: '+(971) 55 213 6536',
			phoneLink: 'tel:+971552136536', // Use "tel" URI scheme for phone
		},
		{
			title: 'Whatsapp',
			mail: 'Contact Via Whatsapp',
			mailLink: 'https://wa.me/971552136536',
		},
	];

	return (
		<div className='row mb-4 mb-lg-5'>
			{contactInfoList.map((contact, index) => (
				<div
					className='col-auto'
					key={index}>
					<div className='contact-info'>
						<p className='info-title'>{contact.title}</p>
						{contact.phone && (
							<h6 className='info-phone'>
								<a href={contact.phoneLink}>{contact.phone}</a>
							</h6>
						)}
						{contact.mail && (
							<h6 className='info-mail'>
								<a href={contact.mailLink}>{contact.mail}</a>
							</h6>
						)}
					</div>
				</div>
			))}
		</div>
	);
};

export default ContactMeta;
