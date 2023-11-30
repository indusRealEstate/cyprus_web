import FeatureProperties from "@/components/home/FeatureProperties";

import DefaultHeader from "@/components/common/DefaultHeader";
import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/home/footer";
import WhyChoose from "@/components/home/why-choose";
export const metadata = {
  title: "Why Cyprus | Premium Realtor",
  description:
    "Check out the benefits of investment in Cyprus. Cyprus introduce luxury villas and apartments.",
};

const WhyCyprus = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}
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
      <section id="flagship-prop" className="our-testimonial pt-5 mt-5">
        <FeatureProperties />
        {/* End .container */}
      </section>
      <section className="footer-style1 at-home6 pt60 pb-0">
        <Footer />
      </section>
    </>
  );
};

export default WhyCyprus;
