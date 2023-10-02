/** @format */

'use client';
import { Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const GalleryBox = ({ id, images }) => {
	const loadingUrls = [1, 2, 3];
	const imageUrls = images != undefined ? JSON.parse(images) : [];

	const [loaded, setLoaded] = useState([]);

	useEffect(() => {}, [loaded]);

	return (
		<>
			<Swiper
				className='overflow-visible'
				spaceBetween={30}
				modules={[Navigation, Pagination]}
				navigation={{
					nextEl: '.single-pro-slide-next__active',
					prevEl: '.single-pro-slide-prev__active',
				}}
				slidesPerView={1}
				initialSlide={1}
				loop={true}>
				{imageUrls.length == 0
					? loadingUrls.map((url, index) => (
							<SwiperSlide key={index}>
								<div className='item'>
									<Skeleton
										variant='rectangular'
										width={1170}
										height={600}
									/>
								</div>
							</SwiperSlide>
					  ))
					: imageUrls.map((imageUrl, index) => (
							<SwiperSlide key={index}>
								<div className='item height-50'>
									{!loaded.includes(index) && (
										<Skeleton
											variant='rectangular'
											className='height-50 bdrs12 width-inherit'
											width={1170}
											height={640}
										/>
									)}
									<LazyLoadImage
										src={`https://premium-realtor.com/api/media/listings/${id}/media/${imageUrl}`}
										className={`${
											!loaded.includes(index)
												? 'opacity-0 position-absolute bdrs12 w-100 cover height-50'
												: 'opacity-100 bdrs12 w-100 cover height-50 position-relative'
										}}`}
										width={1170}
										height={600}
										alt='Image Alt'
										style={{
											maxHeight: '40rem',
										}}
										onLoad={() => {
											if (!loaded.includes(index)) {
												loaded.push(index);
												setLoaded(loaded);
											}
										}}
									/>
									{/* <Image
                width={1170}
                height={600}
                className="bdrs12 w-100 h-100 cover"
                src={`https://premium-realtor.com/api/media/listings/${id}/media/${imageUrl}`}
                alt={`Image ${index + 1}`}
                style={{
                  "max-height": "45rem",
                }}
              /> */}
								</div>
							</SwiperSlide>
					  ))}
			</Swiper>

			<div className='rounded-arrow arrowY-center-position'>
				<button className='single-pro-slide-prev__active swiper_button _prev'>
					<i className='far fa-chevron-left' />
				</button>
				{/* End prev */}

				<button className='single-pro-slide-next__active swiper_button _next'>
					<i className='far fa-chevron-right' />
				</button>
				{/* End Next */}
			</div>
			{/* End .col for navigation  */}
		</>
	);
};

export default GalleryBox;
