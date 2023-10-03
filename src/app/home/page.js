/** @format */

import MobileMenu from '@/components/common/mobile-menu';
import About from '@/components/home/About';
// import Agents from "@/components/home/Agents";
import ExploreCities from '@/components/home/ExploreCities';
import FeaturedListings from '@/components/home/FeatuerdListings';
import FeatureProperties from '@/components/home/FeatureProperties';
import Header from '@/components/home/Header';
import Footer from '@/components/home/footer';
import WhyChoose from '@/components/home/home-v3/why-choose';
import Hero from '@/components/home/home-v5/Hero';
import FilterWithProperties from '@/components/home/home-v5/filter-with-property';

export const metadata = {
	title: 'Premium Realtor | Explore International Properties',
};

const Home = () => {
	return (
		<>
			{/* Main Header Nav */}
			<Header />
			{/* End Main Header Nav */}

			{/* Mobile Nav  */}
			<MobileMenu />
			{/* End Mobile Nav  */}

			{/* Home Banner Style V6 */}
			{/* <section id="main" className="home-banner-style6 p0">
        <video
          className="bg-video"
          id="vid"
          width="1920"
          height="760"
          loop
          autoPlay
          muted
          preload="auto"
        >
          <source
            src={"/video/sample.webm"}
            type="video/mp4"
          />
        </video>
        <div className="home-style1">
          <div className="container">
            <div className="row">
              <div className="col-xl-10">
                <Hero />
              </div>
            </div>
          </div>
        </div>
      </section> */}
			<div className='banner-wrapper position-relative'>
				<section className='thumbimg-countnumber-carousel p-0'>
					<Hero />
				</section>
			</div>
			<section className='pt-0 pb110 bgc-f7 pb50-md'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<FilterWithProperties />
						</div>
					</div>
					{/* End .row */}
				</div>
				{/* End .container */}
			</section>
			{/* End Home Banner Style V6 */}
			<section id='why-cyprus'>
				<div className='container'>
					<div
						className='row align-items-md-center'
						data-aos='fade-left'
						data-aos-delay='100'>
						<WhyChoose />
					</div>
				</div>
			</section>

			{/* Our Funfact */}
			{/* <section className="bg-off-white pb90 pb30-md">
        
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-md-6 col-xl-5 wow fadeInRight"
              data-wow-delay="100ms"
            >
              <div className="cta-style6 mb30-sm" data-aos="fade-up">
                <div className="row">
                  <div className="col-12">
                    <h2 className="cta-title mb25">
                      More than 20 Years of Real{" "}
                      <br className="d-none d-lg-block" /> Estate Experience
                    </h2>
                    <p className="cta-text fz15 mb25">
                      The range of service focuses on all aspects of property
                      selling, buying and leasing – both residential and
                      commercial. Our efficiency is derived from a combination
                      of experience and knowledge of the local property market.
                    </p>
                    <div className="row">
                      <div className="col-8 mobile-flex-center">
                        <a
                          href="/contact"
                          className="ud-btn btn-dark bdrs0 mobile-flex-center"
                        >
                          Get Started <i className="fal fa-arrow-right-long" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-6 offset-xl-1 wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div className="row align-items-center">
                <Funfact2 />
              </div>
            </div>
          </div>
        </div>
      </section> */}
			{/* End Our Funfact */}

			{/* Explore Apartment Home */}
			{/* <section className="pb90 pb30-md">
        <div className="container">
          <div className="row">
            <div className="col-xl-6" data-aos="fade-up" data-aos-delay="100">
              <div className="about-box2">
                <h4 className="title">
                  The New Way to Find <br className="d-none d-xl-block" /> Your
                  Home
                </h4>
                <p className="text fz15">
                  From as low as $10 per day with{" "}
                  <br className="d-none d-xl-block" /> limited time offer
                  discounts.
                </p>
                <Link href="/grid-full-1-col-v1" className="ud-btn btn-thm">
                  How İt Works
                  <i className="fal fa-arrow-right-long" />
                </Link>
                <Image
                  width={296}
                  height={318}
                  className="img-1 cover"
                  src="/images/about/home6-about-1.png"
                  alt="about"
                />
              </div>
            </div>
           

            <div className="col-xl-6" data-aos="fade-up" data-aos-delay="300">
              <div className="row">
                <FindHomeBlock />
              </div>
            </div>
          </div>
        </div>
      </section> */}
			{/* Explore Apartment Home */}

			{/* Featured Properties */}
			<section
				id='flagship-prop'
				className='our-testimonial pt-5 mt-5'>
				<div className='container'>
					<div className='row'>
						<div
							className='col-lg-6 mx-auto'
							data-aos-delay='300ms'>
							<div className='main-title text-center'>
								<h2>Pafilia Flagship Property Collection</h2>
								<p className='paragraph'>
									Pafilia is the largest privately owned residential Cyprus
									developer, dedicated to developing world class properties for
									personal living and investment.
								</p>
							</div>
						</div>
					</div>
					{/* End .row */}

					<div className='col-lg-12'>
						<div
							className='home6-listing-single-slider'
							data-aos='fade-up'>
							<FeatureProperties />
						</div>
					</div>
					{/* End .col-12 */}
				</div>
				{/* End .container */}
			</section>
			{/* End Featured Properties */}

			{/* Featured Listings */}
			<section
				id='featured-listings'
				className='pt-0 pb80 pb30-md'>
				<div className='container'>
					<div className='row  justify-content-between align-items-center'>
						<div className='col-auto'>
							<div
								className='main-title'
								data-aos='fade-up'
								data-aos-delay='100'>
								<h2 className='title'>Discover Our Featured Listings</h2>
								<p className='paragraph'>
									Explore Cyprus luxury homes with us.
								</p>
							</div>
						</div>
						{/* End header */}

						<div className='col-auto mb30'>
							<div className='row align-items-center justify-content-center'>
								<div className='col-auto'>
									<button className='featured-prev__active swiper_button'>
										<i className='far fa-arrow-left-long' />
									</button>
								</div>
								{/* End prev */}

								<div className='col-auto'>
									<div className='pagination swiper--pagination featured-pagination__active' />
								</div>
								{/* End pagination */}

								<div className='col-auto'>
									<button className='featured-next__active swiper_button'>
										<i className='far fa-arrow-right-long' />
									</button>
								</div>
								{/* End Next */}
							</div>
							{/* End .col for navigation and pagination */}
						</div>
						{/* End .col for navigation and pagination */}
					</div>
					{/* End .row */}

					<div className='row'>
						<div
							className='col-lg-12'
							data-aos='fade-up'
							data-aos-delay='200'>
							<div className='feature-listing-slider'>
								<FeaturedListings />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* End Featured Listings */}

			{/* Property Cities */}
			<section
				id='explore-cities'
				className='pt0 pb90 pb50-md'>
				<div className='container'>
					<div className='row  justify-content-between align-items-center'>
						<div className='col-auto'>
							<div
								className='main-title'
								data-aos='fade-up'
								data-aos-delay='100'>
								<h2 className='title'>Explore Cities</h2>
								<p className='paragraph'>Search properties in these cities.</p>
							</div>
						</div>
						{/* End header */}

						<div className='col-auto mb30'>
							<div className='row align-items-center justify-content-center'>
								<div className='col-auto'>
									<button className='cities_prev__active swiper_button'>
										<i className='far fa-arrow-left-long' />
									</button>
								</div>
								{/* End prev */}

								<div className='col-auto'>
									<div className='pagination swiper--pagination cities_pagination__active' />
								</div>
								{/* End pagination */}

								<div className='col-auto'>
									<button className='cities_next__active swiper_button'>
										<i className='far fa-arrow-right-long' />
									</button>
								</div>
								{/* End Next */}
							</div>
						</div>
						{/* End .col for navigation and pagination */}
					</div>
					{/* End .row */}

					<div className='row'>
						<div
							className='col-lg-12'
							data-aos='fade-up'
							data-aos-delay='300'>
							<div className='property-city-slider'>
								<ExploreCities />
							</div>
						</div>
					</div>
					{/* End .row */}
				</div>
			</section>
			{/* End property cities */}

			{/* <!-- About Us --> */}
			<section className='pb40-md bgc-f7'>
				<div className='container'>
					<About />
				</div>
			</section>
			{/*  <!-- End About Us --> */}

			{/* Our Testimonials */}
			{/* <section className="our-testimonial">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 mx-auto"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="main-title text-center">
                <h2>Testimonials</h2>
                <p className="paragraph">
                  10,000+ unique online course list designs
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              className="col-lg-8 m-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="testimonial-style2">
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section> */}

			{/* Pricing Section Area */}
			{/* <section className="our-pricing pb90 pt-0">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb30">
                <h2>Membership Plans</h2>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </div>
          </div> */}
			{/* End .row */}
			{/* <Pricing />
        </div>
      </section> */}
			{/* Pricing Section Area */}

			{/* Exclusive Agents */}
			{/* <section id="exlusive-agents" className="pt0 pb80 pb50-md">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title">Our Exclusive Agents</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="agent_prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>

                <div className="col-auto">
                  <div className="pagination swiper--pagination agent_pagination__active" />
                </div>

                <div className="col-auto">
                  <button className="agent_next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider">
                <Agents />
              </div>
            </div>
          </div>
        </div>
      </section> */}
			{/* Exclusive Agents */}

			{/* Our CTA */}
			{/* <Cta /> */}
			{/* Our CTA */}

			{/* Start Our Footer */}
			<section className='footer-style1 at-home6 pt60 pb-0'>
				<Footer />
			</section>
			{/* End Our Footer */}
		</>
	);
};

export default Home;
