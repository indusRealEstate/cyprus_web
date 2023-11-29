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
import { useAppSelector } from "@/redux/store";
import { ch_tr, en_tr, ru_tr } from "@/lang";

const Neo = () => {
  const lang = useAppSelector((state) => state.langReducer);

  const getLang = (lang) => {
    switch (lang) {
      case "en":
        return en_tr.latest_projects_neo;
      case "ru":
        return ru_tr.latest_projects_neo;
      case "ch":
        return ch_tr.latest_projects_neo;
      default:
        return en_tr.latest_projects_neo;
    }
  };

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
                  <a href="#">{getLang(lang).bread_crumb_1}</a>
                  <a href="#">{getLang(lang).bread_crumb_2}</a>
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
          <div className="row" data-aos="fade-up" data-aos-delay="0">
            <div className="col-lg-6">
              <h2
                style={{
                  fontSize: "30pt",
                  fontWeight: 200,
                  fontStyle: "oblique",
                }}
              >
                {getLang(lang).title}
              </h2>
              <div className="row">
                <div className="col-lg-6 col-12 my-4 fs-6 mobile-container-center">
                  <button
                    type="button"
                    onClick={(event) => handleClickOpen()}
                    className="ud-btn btn-transparent mr30 mr0-xs mobile-btn"
                  >
                    {lang == "en"
                      ? "DOWNLOAD BROCHURE"
                      : lang == "ru"
                      ? "СКАЧАТЬ БРОШЮРУ"
                      : "下载手册"}
                  </button>
                  {open ? (
                    <BrochureDownload
                      type={"neo"}
                      open={open}
                      dialogFunctions={dialogFunctions}
                      route={
                        "https://alsimatower.ae/int_web_api/media/brochure/neo/neo-brochure.pdf"
                      }
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="mb0">{getLang(lang).subtitle_1}</h5>
              <h5 className="mb0">{getLang(lang).subtitle_2}</h5>
              <h5 className="mb20">{getLang(lang).subtitle_3}</h5>
              <p className="text mb-1">{getLang(lang).para_1}</p>
              <p className="text mb-1">{getLang(lang).para_2}</p>
              <p className="text mb-1">{getLang(lang).para_3}</p>
              <p className="text mb-1">{getLang(lang).para_4}</p>
              <p className="text mb-1">{getLang(lang).para_5}</p>
              <p className="text mb50">{getLang(lang).para_6}</p>
              <div className="row">{/* <Mission /> */}</div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our About Area */}

      {/* About Banner */}
      <section className="our-about pt-0">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="0">
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
                data-aos-delay="10"
              >
                <div className="mb30">
                  <h2 className="title text-capitalize">
                    {lang == "en"
                      ? "Key Features"
                      : lang == "ru"
                      ? "Ключевая особенность"
                      : "主要特征"}
                  </h2>
                </div>
                <div className="why-chose-list style2">
                  <Features features={getLang(lang).features} />
                </div>
                <Link href="/contact" className="ud-btn btn-dark">
                  {lang == "en"
                    ? "Learn More"
                    : lang == "ru"
                    ? "Узнать больше"
                    : "了解更多"}
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
