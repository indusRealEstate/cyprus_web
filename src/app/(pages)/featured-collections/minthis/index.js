"use client";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import MobileMenu from "@/components/common/mobile-menu";
import BrochureDownload from "@/components/dialog/brochureDownload";
import Footer from "@/components/home/footer";
import Features from "@/components/pages/about/Features";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Minthis = () => {
  const propertyType = "minthis";
  const features = [
    {
      icon: "flaticon-garden",
      title: "Situated on 5 million square metres",
      description:
        "Situated on 5 million square metres of land, 550 metres above sea level",
    },
    {
      icon: "flaticon-location",
      title: "Just 10 minutes from Pafos",
      description:
        "Just 10 minutes from Pafos in the heart of the wine producing region",
    },
    {
      icon: "flaticon-investment",
      title: "Currency Services",
      description:
        "3% of the land will be built on, the rest will remain natural untouched landscape",
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

  // console.log(download)
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcrumb Sections */}

      <section className="minthis p-0 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">
                  <Image
                    width={400}
                    height={50}
                    className="minthis-log"
                    src="/images/minthis-logo.svg"
                    alt="property image"
                    style={{
                      filter: "brightness(5.5)",
                    }}
                  />
                </h2>
                <div className="breadcumb-list ps-3 mt-2 path-description">
                  <a href="#">Featured Properties Collection </a>
                  <a href="#">Minthis</a>
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
                Minthis: Effortless Luxury Living
              </h2>
              <p
                style={{
                  fontSize: "12pt",
                  fontWeight: 200,
                  fontStyle: "oblique",
                }}
              >
                Minthis is an inspiring hillside community, where every inch is
                in complete harmony with its breathtaking surroundings.
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
                      type={"minthis"}
                      open={open}
                      dialogFunctions={dialogFunctions}
                      route={
                        "https://premium-realtor.com/api/media/brochure/minthis/MINTHIS BOOK PROPERTY COLLECTION EN.pdf"
                      }
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h5>An eden of discovery, wellness and adventure</h5>
              <p className="text mb-1">
                The exclusive neighbourhoods and private homesites at Minthis
                capitalise on incredible views, positioned around the golf
                course, children&apos;s playgrounds and world-class amenities.
              </p>
              <p className="text mb-1">
                Perched on a tranquil hilltop, resting in 5 million square
                metres of a Natura 2000 protected landscape, this authentic
                residential retreat offers true escapism and cultural discovery.
                Inspired by local Cypriot dwellings, the pioneering architecture
                is a unique balance of modernity, tradition and the natural
                world.
              </p>
              <p className="text mb-1">
                High-quality design that creates a strong sense of community and
                long-term value has been an integral part of the shared vision
                between renowned developer, Pafilia and world-class architects,
                Woods Bagot.
              </p>
              <p className="text mb-1">
                All properties – Residences, Villas and Suites – harmonise with
                the topography to capture the light, harness cool hillside
                breezes and frame the extraordinary views. Nature is an
                ever-present element at Minthis. The 18-hole championship golf
                course moulds itself to the landscape, passing walnut and fig
                trees, olive groves and the historic 12th century monastery.
              </p>
              <p className="text mb-1">
                World-class chefs use seasonal ingredients from the surrounding
                countryside to create dishes that are a fusion of modern
                Mediterranean flavours. Countless nature trails balance serenity
                and pathways for adventure — mountain biking, horse riding,
                hiking —while peaceful courtyards and gardens welcome outdoor
                yoga or quiet reflection.
              </p>
              <p className="text mb50">
                Just 10 minutes from Minthis lies Pafos, a beautiful and vibrant
                city that is captivating in its contrasts. A cosmopolitan hub,
                Pafos combines stunning palm-fringed beaches, stylish boutiques,
                lively cafés and world class restaurants, with colourful
                archaeological sites, rustic tavernas and charming colonial
                backstreets. Add to this the city&apos;s thriving arts scene –
                concerts, plays, screenings, exhibitions – and it is no wonder
                it has become a European Capital of Culture 2017.
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
                  src="/images/featureProperties/Minthis neighbourhood.webp"
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
                  <h2 className="title text-capitalize">
                    Let&apos;s find the right{" "}
                    <br className="d-none d-md-block" /> selling option for you
                  </h2>
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

export default Minthis;
