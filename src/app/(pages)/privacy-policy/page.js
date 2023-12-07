import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/home/footer";

export const metadata = {
  title: "Privacy Policy - Premium Realtor | Explore International Properties",
};

const Faq = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcrumb Sections */}
      <section className="breadcumb-section pb0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title text-dark">Privacy Policy</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Sections */}

      {/* FAQ Section Area */}
      <section className="our-faq pb90 pt-0">
        <div className="container">
          <p>
            Premium Realtor (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;)
            operates the https://premium-realtor.com/ website (the
            &quot;Service&quot;).
          </p>
          <p>
            This page informs you of our policies regarding the collection, use,
            and disclosure of personal data when you use our Service and the
            choices you have associated with that data. Our Privacy Policy for
            Premium Realtor is created with the help of the Free Privacy Policy
            website.
          </p>
          <p>
            We use your data to provide and improve the Service. By using the
            Service, you agree to the collection and use of information in
            accordance with this policy. Unless otherwise defined in this
            Privacy Policy, terms used in this Privacy Policy have the same
            meanings as in our Terms and Conditions, accessible from
            https://premium-realtor.com/
          </p>
        </div>
      </section>
      {/* End FAQ Section Area */}

      {/* Our CTA */}
      <CallToActions />
      {/* Our CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home6 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Faq;
