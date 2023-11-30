/** @format */

import MobileMenu from "@/components/common/mobile-menu";
import About from "@/components/home/About";
// import Agents from "@/components/home/Agents";
import ExploreCities from "@/components/home/ExploreCities";
import FeaturedListings from "@/components/home/FeatuerdListings";

import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import FilterWithProperties from "@/components/home/filter-with-property";
import Footer from "@/components/home/footer";
import WhyChoose from "@/components/home/why-choose";
import PopupDialog from "./popup";

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
      <section className="pt-0 pb50 bgc-f7 pb50-md">
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

      <section id="explore-cities" className="pt60 pb0 pb50-md">
        <ExploreCities />
      </section>
      {/* End Home Banner Style V6 */}
      <section id="why-cyprus" className="pb30 pt100">
        <div className="container">
          <div
            className="row align-items-md-center"
            data-aos="fade-left"
            data-aos-delay="10"
          >
            <WhyChoose />
          </div>
        </div>
      </section>

      {/* Featured Properties */}

      {/* End Featured Properties */}

      {/* Featured Listings */}
      <section id="featured-listings" className="pt100 pb80 pb30-md">
        <FeaturedListings />
      </section>
      {/* End Featured Listings */}

      {/* Property Cities */}

      {/* End property cities */}

      {/* <!-- About Us --> */}
      <section className="pb40-md bgc-f7">
        <div className="container">
          <About />
        </div>
      </section>
      {/*  <!-- End About Us --> */}

      {/* <PopupDialog /> */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home6 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Home;
