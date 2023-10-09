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

const Neo = () => {
  const propertyType = "minthis";
  const features = [
    {
      icon: "flaticon-home-3",
      title: "4 Residential Towers",
      description:
        "Rising from the foot of the Cyprian hills, NEO's four towers embody a meeting point between four distinct landscapes: City, Mountain, Sky and Sea.",
    },
    {
      icon: "flaticon-location",
      title: "Set on the Limassol shoreline",
      description:
        "On the rooftop, the pool is framed by soothing natural tones, plants and native trees, surrounded by a vista of the sea and gardens below.",
    },
    // {
    // 	icon: "flaticon-investment",
    // 	title: "Currency Services",
    // 	description:
    // 		"3% of the land will be built on, the rest will remain natural untouched landscape",
    // },
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
      <section className="neo p-0 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">
                  <Image
                    width={150}
                    height={50}
                    src="/images/neo-logo.webp"
                    alt="property image"
                    style={{
                      filter: "brightness(5.5)",
                    }}
                  />
                </h2>
                <div className="breadcumb-list mt-2">
                  <a href="#">Featured Properties Collection </a>
                  <a href="#">Neo</a>
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
                NEO: Between the Sky and the Sea
              </h2>
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
                        "https://premium-realtor.com/api/media/brochure/neo/neo-brochure.pdf"
                      }
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h5>
                A new home. <br />A new investment. <br />A new discovery.
              </h5>
              <p className="text mb-1">
                Rising from the foot of the Cyprian hills, NEO&apos;s four
                towers embody a meeting point between four distinct landscapes:
                City, Mountain, Sky and Sea.
              </p>
              <p className="text mb-1">
                Designed and crafted by world-leading developers, architects and
                engineers, NEO is a prestigious and globally-significant
                residential landmark set on the Limassol shoreline. With
                unparalleled views, unprecedented architecture and immersive
                environment, NEO represents the ethos of Cypriot living at every
                level.
              </p>
              <p className="text mb-1">
                At the heart of NEO&apos;s identity is its connection to
                Limassol&apos;s evolution. With a tradition of warmly welcoming
                visitors, wanderers and explorers, Limassol is both
                quintessentially Cyprian and internationally relevant. Cyprus
                has evolved to become an eastern gateway into Europe, making NEO
                an investment in community, culture and connectivity.
              </p>
              <p className="text mb-1">
                All properties - Residences, Villas and Suites - harmonise with
                the topography to capture the light, harness cool hillside
                breezes and frame the extraordinary views. Nature is an
                ever-present element at Minthis. The 18-hole championship golf
                course moulds itself to the landscape, passing walnut and fig
                trees, olive groves and the historic 12th century monastery.
              </p>
              <p className="text mb-1">
                This unique development unites environment, innovation and local
                culture. It is defined by an exquisite balance of access to
                indulgence, and the desire to escape. NEO provides the ultimate
                luxury: choice. It is both an immersive, cosmopolitan
                environment and a haven high above it all.
              </p>
              <p className="text mb50">
                NEO offers a curated, modern and forward-looking lifestyle
                anchored by the sophisticated and historic allure of the
                Mediterranean. NEO delivers experiences across three levels:
                personal and adaptable living spaces — &apos;villas in the
                sky&apos;, resort-style podium amenities, access to local
                culture and finally, connectivity to the Limassol lifestyle —
                known as &apos;Lima-soul&apos;.
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
                  src="/images/featureProperties/231118_limassol_amenities_kids-pool_wb-884x1080.jpg"
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

export default Neo;
