import Details from "@/components/blog/blog-single/Details";

import DefaultHeader from "@/components/common/DefaultHeader";
import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/home/footer";

import Head from "next/head";

import InvestCyprusContent from "./content";

export const metadata = {
  title: "Why Invest In Cyprus | Premium Realtor",
  description:
    "Check out the benefits of investment in Cyprus. Cyprus introduce luxury villas and apartments.",
};

const InvestInCyprus = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Check out the benefits of investment in Cyprus. Cyprus introduce luxury villas and apartments."
          key="desc"
        />
        <meta property="og:title" content="Cyprus Permanent Residence" />
        <meta
          property="og:description"
          content="With its beautiful beaches and tropical Mediterranean climate,
                  Cyprus is considered an ideal destination for permanent
                  residence for non-EU nationals."
        />
        <meta
          property="og:image"
          content="/images/about/Real/compressed_neighbourhood.webp"
        />
      </Head>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Blog Section Area */}
      <section className="our-blog pt50">
        <Details />

        <InvestCyprusContent />
      </section>
      {/* End Blog Details */}

      {/* Related Blog Post */}
      {/* <section className="pb90 pb20-md pt-0">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="main-title text-start text-md-center">
                <h2 className="title">Related Posts</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <Blog />
          </div>
        </div>
      </section> */}

      <section className="footer-style1 at-home6 pt60 pb-0">
        <Footer />
      </section>
    </>
  );
};

export default InvestInCyprus;
