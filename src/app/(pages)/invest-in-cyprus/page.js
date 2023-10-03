import Details from "@/components/blog/blog-single/Details";
import Features from "@/components/blog/blog-single/Features";
import ReviewBoxForm from "@/components/blog/blog-single/ReviewBoxForm";
import DefaultHeader from "@/components/common/DefaultHeader";
import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/home/footer";
import Image from "next/image";

export const metadata = {
  title: "Premium Realtor | Why Invest In Cyprus",
};

const InvestInCyprus = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Blog Section Area */}
      <section className="our-blog pt50">
        <Details />

        <div className="container">
          <div className="roww" data-aos="fade-up" data-aos-delay="500">
            <div className="col-xl-8 offset-xl-2">
              <div className="ui-content mt40 mb60">
                <h4 className="mb10">1. Cyprus Permanent Residence</h4>
                <p className="mb25 ff-heading">
                  With its beautiful beaches and tropical Mediterranean climate,
                  Cyprus is considered an ideal destination for permanent
                  residence for non-EU nationals.
                </p>
                <p className="ff-heading">
                  In line with the Cypriot government’s intention to increase
                  foreign investment and to help its economic development,
                  Regulation 6(2) of the Aliens and Immigration Regulations
                  allows the Ministry of Interior to issue residence permits to
                  applicants from non-European countries who intend to invest in
                  the republic.
                </p>
              </div>

              <div className="blockquote-style1 mb60">
                <blockquote className="blockquote">
                  <p className="fst-italic fz15 fw500 ff-heading">
                    The Cyprus golden visa allows foreign nationals to benefit
                    from the country's relatively low cost of living, no
                    inheritance tax, and the lowest crime levels in the EU, as
                    well as its high-quality healthcare system and leading
                    medical centers.
                  </p>
                  {/* <h6 className="quote-title">Luis Pickford</h6> */}
                </blockquote>
              </div>
              {/* End  blockquote*/}

              <div className="col-12 ui-content">
                <h4 className="title">2. Benefits of a Cypriot golden visa</h4>
              </div>

              <div className="row">
                <Features />
              </div>
              {/* End .row */}

              <div className="col-lg-12 mt40">
                <Image
                  width={804}
                  height={470}
                  priority
                  src="/images/about/Real/compressed_neighbourhood.webp"
                  alt="blog"
                  className="bdrs12 post-img-2 w-100 h-100 cover"
                />
              </div>
              {/* End .col-12 */}

              <div className="ui-content mt40 mb30">
                <h4 className="mb10">3. Cyprus golden visa requirements</h4>
                <div className="custom_bsp_grid">
                  <ul className="list-style-type-bullet p-0 ml20">
                    <li>
                      Purchase up to two new immovable residential properties of
                      a total market value of at least EUR 300,000 plus VAT,
                      with the option to purchase from two different developers.
                    </li>
                    <li>
                      Purchase up to two new or used immovable non-residential
                      properties (offices, shops, hotels, or other developments)
                      of a total market value of at least EUR 300,000 plus VAT
                    </li>
                    <li>
                      Invest EUR 300,000 in the share capital of a physical
                      company registered and operating in Cyprus, which employs
                      at least five people.
                    </li>
                  </ul>
                </div>
              </div>
              {/* End .i-content */}

              {/* <div className="bdrt1 bdrb1 d-block d-sm-flex justify-content-between pt50 pt30-sm pb50 pb30-sm">
                <div className="blog_post_share d-flex align-items-center mb10-sm">
                  <span className="mr30">Share this post</span>
                  <Social />
                </div>
                <div className="bsp_tags d-flex">
                  <Tags />
                </div>
              </div> */}
              {/* End share social and tags */}

              {/* <TopComments /> */}
              {/* End TopComments */}

              {/* <Pagination /> */}
              {/* End Blog Single pagination */}

              {/* <AllReviews /> */}
              {/* End  AllReviews */}

              <div className="bsp_reveiw_wrt">
                <h6 className="fz17">Contact Us</h6>
                <ReviewBoxForm />
              </div>
              {/* End ReviewBoxForm */}
            </div>
          </div>
        </div>
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
