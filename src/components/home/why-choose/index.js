import Image from "next/image";
import Link from "next/link";
import Features from "./Features";

const WhyChoose = () => {
  return (
    <>
      <div className="col-md-6 col-lg-6">
        <div
          className="position-relative mb30-md"
          style={{
            height: "600px",
          }}
        >
          <Image
            width={570}
            height={687}
            priority
            className="w-100 h-100 cover"
            src="/images/why-cyrpus-img.webp"
            alt="why chosse"
          />
          <Link href="/all-properties">
            <div className="iconbox-style5 d-flex align-items-center">
              <span className="icon flaticon-home flex-shrink-0" />
              <div className="iconbox-content flex-shrink-1 ms-2">
                <p className="text mb-0">Explore</p>
                <h4 className="title mb-0">Properties</h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* End .col-6 */}

      <div
        className="col-md-6 col-lg-5 offset-lg-1"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <div className="main-title2">
          <h2 className="title">Why Cyprus</h2>
          <p className="paragraph fz15">
            A unique and unrivalled proposition for investing and living, the
            full EU-member of Cyprus is poised on the cusp of three continents –
            namely, Europe, Africa, and Asia – and enjoys the bounty of this
            exclusive position that no other country can boast.
          </p>
        </div>
        {/* End main-title2 */}

        <div className="why-chose-list">
          <Features />
        </div>
        {/* End .why-chose-list */}
      </div>
      {/* End .col-6 */}
    </>
  );
};

export default WhyChoose;
