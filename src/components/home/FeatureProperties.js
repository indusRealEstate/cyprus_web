/** @format */

"use client";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/navigation";
import "swiper/swiper-bundle.min.css";
import axios from "axios";
import { useAppSelector } from "@/redux/store";
import { ch_tr, en_tr, ru_tr } from "@/lang";

const FeatureProperties = () => {
  const route = useRouter();

  const lang = useAppSelector((state) => state.langReducer);

  const getLang = (lang) => {
    switch (lang) {
      case "en":
        return en_tr.property_collections_home;
      case "ru":
        return ru_tr.property_collections_home;
      case "ch":
        return ch_tr.property_collections_home;
      default:
        return en_tr.property_collections_home;
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto" data-aos-delay="300ms">
            <div className="main-title text-center">
              <h2>{getLang(lang).heading}</h2>
              <p className="paragraph">{getLang(lang).sub_heading}</p>
            </div>
          </div>
        </div>
        {/* End .row */}

        <div className="col-lg-12">
          <div className="home6-listing-single-slider" data-aos="fade-up">
            <Swiper
              spaceBetween={30}
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: ".featurePro_next__active",
                prevEl: ".featurePro_prev__active",
              }}
              pagination={{
                el: ".featurePro_pagination__active",
                clickable: true,
              }}
              slidesPerView={1}
            >
              {getLang(lang).collection.map((property) => (
                <SwiperSlide
                  key={property.id}
                  onClick={() => {
                    route.push(property.path);
                  }}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <div className="item">
                    <div className="listing-style11">
                      <div className="col-lg-12">
                        <div className="row align-items-center">
                          <div className="list-content mb30-md col-md-8 col-lg-6 col-xl-5 p-xl-0">
                            {/* <div className="d-flex mb30">
                        <div className="list-tag fz12 mr20">
                          {property.featured && (
                            <span className="flaticon-electricity me-2" />
                          )}
                          {property.featured && "FEATURED"}
                        </div>
                        <div className="list-tag2 fz12">{property.status}</div>
                      </div> */}
                            <h4 className="list-title">
                              {/* <Link href="/map-v3">{property.title}</Link> */}
                              <Image
                                width={property.logo_width}
                                height={50}
                                src={property.logo}
                                alt="property image"
                                style={{
                                  filter: "contrast(0.5)",
                                }}
                              />
                            </h4>
                            <p className="list-text fz15">
                              {property.location}
                            </p>
                            <p className="list-text fz15 hide-in-mobile">
                              {property.subtitle}
                            </p>
                            <div className="list-meta d-block d-sm-flex align-items-center mt30 mb40 mobile-display-flex">
                              <a
                                className="d-flex mb-2 mb-sm-0 align-items-center"
                                href="#"
                              >
                                <span className="flaticon-bed" />
                                {property.bed}
                              </a>
                              <a
                                className="d-flex mb-2 mb-sm-0 align-items-center"
                                href="#"
                              >
                                <span className="flaticon-shower" />
                                {property.bath}
                              </a>
                              <a className="d-flex align-items-center" href="#">
                                <span className="flaticon-expand" />
                                {property.sqft}
                              </a>
                            </div>
                            {/* End list-meta */}

                            <div className="row mb20">
                              <div className="col-auto">
                                <div className="contact-info">
                                  <p className="info-title ff-heading mb-2">
                                    Contact Now
                                  </p>
                                  <h6 className="info-phone">
                                    <a href="tel:+971552136536">
                                      +(971) 55 213 6536
                                    </a>
                                  </h6>
                                </div>
                              </div>
                              {/* End .col-auto */}

                              {/* <div className="col-auto">
                          <div className="contact-info">
                            <p className="info-title ff-heading mb-2">
                              Need Live Support?
                            </p>
                            <h6 className="info-mail">
                              <a href="mailto:hi@homez.com">hi@homez.com</a>
                            </h6>
                          </div>
                        </div> */}
                              {/* End .col-auto */}
                            </div>
                            {/* End .row */}

                            <div className="row align-items-center justify-content-between">
                              <div className="col-auto">
                                <div className="list-meta2">
                                  <h4 className="list-price mb-0">
                                    {property.price}
                                  </h4>
                                </div>
                              </div>
                              {/* End .row */}

                              {/* <div className="col-auto">
                          <div className="list-meta2">
                            <div className="icons d-flex align-items-center">
                              <a href="#">
                                <span className="flaticon-fullscreen" />
                              </a>
                              <a href="#">
                                <span className="flaticon-new-tab" />
                              </a>
                              <a href="#">
                                <span className="flaticon-like" />
                              </a>
                            </div>
                          </div>
                        </div> */}
                              {/* End .col-auto */}
                            </div>
                            {/* End .row */}

                            <div className="list-meta2 d-flex justify-content-between align-items-center"></div>
                          </div>
                          {/* End list-content */}

                          <div className="list-thumb col-lg-6 col-xl-6 offset-xl-1 p-xl-0">
                            <Image
                              width={560}
                              height={610}
                              className="img-1 cover w-100 h-00 mobile-flaged-feature-image"
                              src={property.imageSrc}
                              alt="property image"
                            />
                          </div>
                          {/* End list-thumb */}
                        </div>
                        {/* End .row */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="row align-items-center justify-content-start">
              <div className="col-auto">
                <button className="featurePro_prev__active swiper_button">
                  <i className="far fa-arrow-left-long" />
                </button>
              </div>
              {/* End prev */}

              <div className="col-auto">
                <div className="pagination swiper--pagination featurePro_pagination__active" />
              </div>
              {/* End pagination */}

              <div className="col-auto">
                <button className="featurePro_next__active swiper_button">
                  <i className="far fa-arrow-right-long" />
                </button>
              </div>
              {/* End Next */}
            </div>
          </div>
        </div>
        {/* End .col-12 */}
      </div>
    </>
  );
};

export default FeatureProperties;
