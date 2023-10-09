"use client";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import MobileMenu from "@/components/common/mobile-menu";
import BrochureDownload from "@/components/dialog/brochureDownload";
import Footer from "@/components/home/footer";
import Features from "@/components/featured-collections/Features";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const One = () => {
  const propertyType = "minthis";
  const features = [
    {
      icon: "flaticon-secure-payment",
      title: "Low risk investment profile",
      description:
        "Low Risk investments are in general terms, investments that are safer than their alternatives.",
    },
    {
      icon: "flaticon-hotel-1",
      title: "Under construction - delivery  commenced 2021",
      description:
        "When purchasing a property, homebuyers are usually divided between a ready and under-construction property",
    },
    {
      icon: "flaticon-security",
      title: "Complete privacy and exclusivity",
      description:
        "3 apartments per floor giving complete privacy and exclusivity",
    },
  ];
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (response) => {
    setOpen(false);
  };

  const dialogFunctions = {
    handleClose,
  };

  useEffect(() => {}, [open]);
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcrumb Sections */}
      <section className="one p-0 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">
                  <Image
                    width={180}
                    height={50}
                    src="/images/one-logo.svg"
                    alt="property image"
                    style={{
                      filter: "brightness(5.5)",
                    }}
                  />
                </h2>
                <div className="breadcumb-list ps-3 mt-2">
                  <a href="#">Featured Properties Collection </a>
                  <a href="#">One</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Sections */}

      {/* Our About Area */}
      <section className="our-about pb90">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-6">
              <h2
                style={{
                  fontSize: "30pt",
                  fontWeight: 200,
                  fontStyle: "oblique",
                }}
              >
                ONE Limassol Tower
              </h2>
              <p
                style={{
                  fontSize: "12pt",
                  fontWeight: 200,
                  fontStyle: "oblique",
                }}
              >
                One-of-a-kind, bold, striking, commanding, and the tallest
                residential seafront tower in Europe.
              </p>
              <div className="row">
                <div className="col-lg-6 col-12 my-4 fs-6 mobile-container-center">
                  <button
                    type="button"
                    onClick={(event) => handleClickOpen()}
                    className="ud-btn btn-transparent mr30 mr0-xs mobile-btn"
                  >
                    DOWNLOAD BROCHURE
                  </button>
                  {open ? (
                    <BrochureDownload
                      type={"neo"}
                      open={open}
                      dialogFunctions={dialogFunctions}
                      route={
                        "https://premium-realtor.com/api/media/brochure/one/ONE_BROCHURE_EN.pdf"
                      }
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h5>A One-Of-A-Kind Opportunity</h5>
              <p className="text mb-1">
                Cyprus&apos; southern coastal city of Limassol has blossomed
                over the last few decades from an industrial-fuelled landscape
                into a multifaceted, modern European vista of vibrant
                opportunities in business, culture, and recreation.
              </p>
              <p className="text mb-1">
                Reigning supreme as the epitome of luxurious island living,
                Limassol&apos;s coastal charm, inherent history and culture,
                vast entertainment options, boutique shopping, and epicurean
                proposals make it a playground for global, glamorous travellers
                and residents alike.
              </p>
              <p className="text mb-1">
                Armed with rich knowledge of Limassol&apos;s development history
                and belief in the potential of its future, Pafilia saw an
                opportunity: to create a collection of refined residences at an
                iconic address that would serve as a progenitor of a new
                lifestyle and evolved expression of luxury.
              </p>
              <p className="text mb-1">
                A masterpiece of architectural and design brilliance, ONE
                Limassol stands proudly, powerfully, in the very heart of the
                community, propositioning self-assured buyers seeking a
                reimagined expression of luxury living.
              </p>
              <h5 className="my-3">Orchestrating a Masterpiece</h5>
              <p className="text mb-1">
                Intent on demonstrating just how far inspired thinking can
                transform the character of a city&apos;s landscape, and the
                essence of a community&apos;s experience, Pafilia sought out the
                most esteemed consortium of partners – including Atkins, of Burj
                Al Arab fame, WKK, HBA, and BuroHappold – with which to
                collaborate in orchestrating the exact execution of its vision
                for ONE.
              </p>
              <p className="text mb50">
                The sprawling, palm tree-lined 28th October Avenue seafront
                promenade close to both the business district and quaint old
                town is Limassol&apos;s most iconic address. In possession of a
                prime position along it, Pafilia set about uniting
                Limassol&apos;s blessed trinity of city, mountain, and sea,
                creating an immediately recognisable 37-storey landmark to
                command the locale&apos;s horizon.
              </p>
              <div className="row">{/* <Mission /> */}</div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our About Area */}

      {/* About Banner */}
      <section className="our-about pt-0">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-12">
              <div className="about-page-img">
                <Image
                  width={1206}
                  height={515}
                  priority
                  className="about-banner"
                  src="/images/featureProperties/ONE_CGI_aerial view.webp"
                  alt="about banner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Banner */}

      {/* Funfact */}
      {/* <section className='pt-0'>
                <div className='container'>
                    <div
                        className='row justify-content-center'
                        data-aos='fade-up'
                        data-aos-delay='300'>
                        <FunFact />
                    </div>
                </div>
            </section> */}
      {/* End Funfact */}

      {/* Exclusive Agents */}
      {/* <section className='pb90'>
                <div className='container'>
                    <div className='row  justify-content-center'>
                        <div className='col-auto'>
                            <div
                                className='main-title'
                                data-aos='fade-up'
                                data-aos-delay='100'>
                                <h2 className='title'>Our Exclusive Agetns</h2>
                                <p className='paragraph'>
                                    Aliquam lacinia diam quis lacus euismod
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-12' data-aos='fade-up' data-aos-delay='300'>
                            <div className='property-city-slider'>
                                <Agents />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
      {/* Exclusive Agents */}

      {/* Abut intro */}
      <section className="pt30 pb-0 about-banner-section">
        <div className="about-feature-banner bgc-thm-light mx-auto maxw1600 pt100 pt60-lg pb90 pb60-lg bdrs24 position-relative overflow-hidden mx20-lg">
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 col-lg-5 pl30-md pl15-xs"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="mb30">
                  <h2 className="title text-capitalize">Key Features</h2>
                </div>
                <div className="why-chose-list style2">
                  <Features features={features} />
                </div>
                <Link href="/contact" className="ud-btn btn-dark">
                  Learn More
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Abut intro */}

      {/* Our Partners */}
      {/* <section className="our-partners">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <div className="main-title text-center">
                <h6>Trusted by the world’s best</h6>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <div
                className="dots_none nav_none"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Partner />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* End Our Partners */}

      {/* Our CTA */}
      <CallToActions />
      {/* Our CTA */}

      {/* Start Our Footer */}
      {/* footer-style1  */}
      <section className="footer-style1 at-home6 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default One;
