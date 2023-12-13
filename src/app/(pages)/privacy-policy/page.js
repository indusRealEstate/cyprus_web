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
          <h2>Information Collection And Use</h2>

          <p>
            We collect several different types of information for various
            purposes to provide and improve our Service to you.
          </p>

          <h3>Types of Data Collected</h3>

          <h4>Personal Data</h4>

          <p>
            While using our Service, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you (&quot;Personal Data&quot;). Personally identifiable
            information may include, but is not limited to:
          </p>

          <ul>
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Cookies and Usage Data</li>
          </ul>
          <hr />
          <h4>Usage Data</h4>

          <p>
            We may also collect information how the Service is accessed and used
            (&quot;Usage Data&quot;). This Usage Data may include information
            such as your computer&apos;s Internet Protocol address (e.g. IP
            address), browser type, browser version, the pages of our Service
            that you visit, the time and date of your visit, the time spent on
            those pages, unique device identifiers and other diagnostic data.
          </p>

          <h4>Tracking & Cookies Data</h4>
          <p>
            We use cookies and similar tracking technologies to track the
            activity on our Service and hold certain information.
          </p>
          <p>
            Cookies are files with small amount of data which may include an
            anonymous unique identifier. Cookies are sent to your browser from a
            website and stored on your device. Tracking technologies also used
            are beacons, tags, and scripts to collect and track information and
            to improve and analyze our Service.
          </p>
          <p>
            You can instruct your browser to refuse all cookies or to indicate
            when a cookie is being sent. However, if you do not accept cookies,
            you may not be able to use some portions of our Service.
          </p>
          <p>Examples of Cookies we use:</p>
          <ul>
            <li>
              <strong>Session Cookies.</strong> We use Session Cookies to
              operate our Service.
            </li>
            <li>
              <strong>Preference Cookies.</strong> We use Preference Cookies to
              remember your preferences and various settings.
            </li>
            <li>
              <strong>Security Cookies.</strong> We use Security Cookies for
              security purposes.
            </li>
          </ul>
          <hr />
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
