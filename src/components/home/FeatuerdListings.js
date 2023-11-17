/** @format */

"use client";
import { getAllListings } from "@/api";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Skeleton, Tooltip } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useAppSelector } from "@/redux/store";
import { ch_tr, en_tr, ru_tr } from "@/lang";

const FeaturedListings = () => {
  var formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "EUR",
  });
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState([]);

  useEffect(() => {
    getAllListings().then((res) => setData(res));
  }, [data]);

  const lang = useAppSelector((state) => state.langReducer);

  const getLang = (lang) => {
    switch (lang) {
      case "en":
        return en_tr.featured_listings_home;
      case "ru":
        return ru_tr.featured_listings_home;
      case "ch":
        return ch_tr.featured_listings_home;
      default:
        return en_tr.featured_listings_home;
    }
  };

  if (data.length == 0) {
    return (
      <>
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title">{getLang(lang).heading}</h2>
                <p className="paragraph">{getLang(lang).sub_heading}</p>
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="featured-prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination featured-pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="featured-next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                {/* End Next */}
              </div>
              {/* End .col for navigation and pagination */}
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-listing-slider">
                <Box
                  sx={{
                    display: "flex",
                    height: "10rem",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress size={40} />
                </Box>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title">{getLang(lang).heading}</h2>
                <p className="paragraph">{getLang(lang).sub_heading}</p>
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="featured-prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination featured-pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="featured-next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                {/* End Next */}
              </div>
              {/* End .col for navigation and pagination */}
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-listing-slider">
                <Swiper
                  className="overflow-visible"
                  spaceBetween={30}
                  modules={[Navigation, Pagination]}
                  navigation={{
                    nextEl: ".featured-next__active",
                    prevEl: ".featured-prev__active",
                  }}
                  pagination={{
                    el: ".featured-pagination__active",
                    clickable: true,
                  }}
                  slidesPerView={1}
                  breakpoints={{
                    300: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {data != undefined ? (
                    data.map((listing) => (
                      <SwiperSlide key={listing.id}>
                        <div className="item">
                          <div className="listing-style1">
                            <div
                              className="list-thumb"
                              style={{
                                height: "15rem",
                              }}
                            >
                              {!loaded.includes(listing.id) && (
                                <Skeleton
                                  // sx={{ bgcolor: "grey.100" }}
                                  variant="rectangular"
                                  width={420}
                                  height={240}
                                />
                              )}

                              <img
                                id={listing.id}
                                width={382}
                                height={248}
                                className={`${
                                  !loaded.includes(listing.id)
                                    ? "opacity-0 position-absolute w-100 h-100 cover"
                                    : "opacity-100 w-100 h-100 cover"
                                }}`}
                                // className="w-100 h-100 cover"
                                src={`https://premium-realtor.com/api/media/listings/${
                                  listing.prop_id
                                }/media/${JSON.parse(listing.images)[0]}`}
                                alt="listings"
                                onLoad={() => {
                                  if (!loaded.includes(listing.id)) {
                                    loaded.push(listing.id);
                                    setLoaded(loaded);
                                  }
                                }}
                              />
                              {/* <div className="sale-sticker-wrap">
                      {listing.highlight && (
                        <div className="list-tag rounded-0 fz12">
                          <span className="flaticon-electricity" />
                          FEATURED
                        </div>
                      )}
                    </div> */}
                              {/* <div className="list-price">
                        {formatter.format(listing.price)}
                      </div> */}
                            </div>
                            <div className="list-content">
                              <h6 className="list-title">
                                <Link
                                  href={`/property/${listing.prop_id}`}
                                >{`${listing.property}`}</Link>
                              </h6>
                              <p className="list-text">{listing.location}</p>
                              <div className="list-meta d-flex align-items-center">
                                <a href="#">
                                  <span className="flaticon-bed" />{" "}
                                  {listing.bed}{" "}
                                  {lang == "en"
                                    ? "bed"
                                    : lang == "ru"
                                    ? "кровать"
                                    : "床"}
                                </a>
                                <a href="#">
                                  <span className="flaticon-shower" />{" "}
                                  {listing.bath}{" "}
                                  {lang == "en"
                                    ? "bath"
                                    : lang == "ru"
                                    ? "ванна"
                                    : "洗澡"}
                                </a>
                                <a href="#">
                                  <span className="flaticon-expand" />{" "}
                                  {listing.total_area}{" "}
                                  {lang == "en"
                                    ? "sq m"
                                    : lang == "ru"
                                    ? "кв.м."
                                    : "平方米"}
                                </a>
                              </div>
                              <hr className="mt-2 mb-2" />
                              <div className="list-meta2 d-flex justify-content-between align-items-center">
                                <span className="for-what">
                                  {listing.unit_purpose == "sale"
                                    ? lang == "en"
                                      ? "For Sale"
                                      : lang == "ru"
                                      ? "Продается"
                                      : "出售"
                                    : lang == "en"
                                    ? "For Rent"
                                    : lang == "ru"
                                    ? "В аренду"
                                    : "出租"}
                                </span>
                                <div className="icons d-flex align-items-center">
                                  <Tooltip title="View">
                                    <a href={`/property/${listing.prop_id}`}>
                                      <span className="flaticon-fullscreen" />
                                    </a>
                                  </Tooltip>

                                  <Tooltip title="Open In New Tab">
                                    <a
                                      href={`/property/${listing.prop_id}`}
                                      target="_blank"
                                    >
                                      <span className="flaticon-new-tab" />
                                    </a>
                                  </Tooltip>
                                  {/* <a href="#">
                            <span className="flaticon-like" />
                          </a> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  ) : (
                    <div></div>
                  )}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default FeaturedListings;
