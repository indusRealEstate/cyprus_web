/** @format */

'use client';
import { getAllBlogs } from '@/api/pages/blogs';
import Pagination from '@/components/blog/Pagination';
import Blog from '@/components/blog/blog-list-v2/Blog';
import BlogSidebar from '@/components/blog/sidebar';
import DefaultHeader from '@/components/common/DefaultHeader';
import Footer from '@/components/common/default-footer';
import MobileMenu from '@/components/common/mobile-menu';
import { useEffect, useState } from 'react';

export const metadata = {
	title: 'Blog List v2  || Homez - Real Estate NextJS Template',
};

const BlogV2 = () => {
	const [blogData, setBlogData] = useState();

	const getThePage = (page) => {
		// console.log( page );
		getAllBlogs(6, page).then((res) => {
			setBlogData(res.data);
		});
	};

	useEffect(() => {
		getAllBlogs(6, 1).then((res) => {
			setBlogData(res.data);
			console.log(res);
		});
		// setBlogData( getAllBlogs( 6, 1 ).data );
	}, []);

	return (
		<div className='bgc-f7'>
			{/* Main Header Nav */}
			<DefaultHeader />
			{/* End Main Header Nav */}

			{/* Mobile Nav  */}
			<MobileMenu />
			{/* End Mobile Nav  */}

			{/* Breadcrumb Start */}
			<section className='breadcumb-section'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='breadcumb-style1'>
								<h2 className='title text-dark'>Blog</h2>
								<div className='breadcumb-list text-dark'>
									<a
										href='#'
										className='text-dark'>
										Home
									</a>
									<a
										href='#'
										className='text-dark'>
										Blog
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* End Breadcrumb Start */}

			{/* Blog Section Area */}
			<section className='our-blog pt-0'>
				<div className='container'>
					<div
						className='row'
						data-aos='fade-up'
						data-aos-delay='300'>
						<div className='col-lg-8'>
							{blogData != undefined ? <Blog blogs={blogData.blogs} /> : ''}

							<div className='row'>
								<div className='mbp_pagination text-center'>
									{blogData != undefined ? (
										<Pagination
											count={blogData.count}
											onPageChange={getThePage}
										/>
									) : (
										''
									)}

									<p className='mt10 pagination_page_count text-center'>
										1 – 20 of 300+ property available
									</p>
								</div>
							</div>
							{/* End .row */}
						</div>
						{/* End .col-lg-8 */}

						<div className='col-lg-4'>
							<BlogSidebar />
						</div>
						{/* End .col-lg-4 */}
					</div>
					{/* End .row */}
				</div>
				{/* End .container */}
			</section>
			{/* End Blog Section Area */}

			{/* Start Our Footer */}
			<section className='footer-style1 pt60 pb-0'>
				<Footer />
			</section>
			{/* End Our Footer */}
		</div>
	);
};

export default BlogV2;
