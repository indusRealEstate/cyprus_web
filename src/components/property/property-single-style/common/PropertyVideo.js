/** @format */

'use client';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'node_modules/react-modal-video/scss/modal-video.scss';

const PropertyVideo = ({ allImages, id, video }) => {
	const [isOpen, setOpen] = useState(false);

	const bgImage = JSON.parse(allImages)[2];

	return (
		<>
			<ModalVideo
				channel='youtube'
				isOpen={isOpen}
				videoId={video}
				onClose={() => setOpen(false)}
			/>

			<div className='col-md-12'>
				<div
					className='property_video bdrs12 w-100'
					style={{
						backgroundImage: `url('https://premium-realtor.com/api/media/listings/${id}/media/${bgImage}')`,
					}}>
					<button
						className='video_popup_btn mx-auto popup-img'
						onClick={() => setOpen(true)}
						style={{ border: 'none', background: 'transparent' }}>
						<span className='flaticon-play' />
					</button>
				</div>
			</div>
		</>
	);
};

export default PropertyVideo;
