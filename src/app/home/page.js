/** @format */

import MobileMenu from "@/components/common/mobile-menu";
import About from "@/components/home/About";
// import Agents from "@/components/home/Agents";
import ExploreCities from "@/components/home/ExploreCities";
import FeaturedListings from "@/components/home/FeatuerdListings";
import FeatureProperties from "@/components/home/FeatureProperties";
import Header from "@/components/home/Header";
import Footer from "@/components/home/footer";
import WhyChoose from "@/components/home/why-choose";
import Hero from "@/components/home/Hero";
import FilterWithProperties from "@/components/home/filter-with-property";

export const metadata = {
  title: "Premium Realtor | Explore International Properties",
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
      <div id="main" className="banner-wrapper position-relative">
        <section className="thumbimg-countnumber-carousel p-0">
          <Hero />
        </section>
      </div>
      <section className="pt-0 pb110 bgc-f7 pb50-md">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <FilterWithProperties />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Home Banner Style V6 */}
      <section id="why-cyprus">
        <div className="container">
          <div
            className="row align-items-md-center"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <WhyChoose />
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="flagship-prop" className="our-testimonial pt-5 mt-5">
        <FeatureProperties />
        {/* End .container */}
      </section>
      {/* End Featured Properties */}

      {/* Featured Listings */}
      <section id="featured-listings" className="pt-0 pb80 pb30-md">
        <FeaturedListings />
      </section>
      {/* End Featured Listings */}

      {/* Property Cities */}
      <section id="explore-cities" className="pt0 pb90 pb50-md">
        <ExploreCities />
      </section>
      {/* End property cities */}

      {/* <!-- About Us --> */}
      <section className="pb40-md bgc-f7">
        <div className="container">
          <About />
        </div>
      </section>
      {/*  <!-- End About Us --> */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home6 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Home;
