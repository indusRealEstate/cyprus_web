/** @format */

"use client";
import { getAllListings } from "@/api";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Skeleton } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

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

  if (data.length == 0) {
    return (
      <>
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
      </>
    );
  } else {
    return (
      <>
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
                      <div className="list-price">
                        {formatter.format(listing.price)}
                      </div>
                    </div>
                    <div className="list-content">
                      <h6 className="list-title">
                        <Link
                          href={{
                            pathname: "/property-details",
                            query: {
                              id: listing.prop_id,
                            },
                          }}
                        >{`${listing.property}`}</Link>
                      </h6>
                      <p className="list-text">{listing.location}</p>
                      <div className="list-meta d-flex align-items-center">
                        <a href="#">
                          <span className="flaticon-bed" /> {listing.bed} bed
                        </a>
                        <a href="#">
                          <span className="flaticon-shower" /> {listing.bath}{" "}
                          bath
                        </a>
                        <a href="#">
                          <span className="flaticon-expand" />{" "}
                          {listing.total_area} sqft
                        </a>
                      </div>
                      <hr className="mt-2 mb-2" />
                      <div className="list-meta2 d-flex justify-content-between align-items-center">
                        <span className="for-what">
                          {listing.unit_purpose == "sale"
                            ? "For Sale"
                            : "For Rent"}
                        </span>
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
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <div></div>
          )}
        </Swiper>
      </>
    );
  }
};

export default FeaturedListings;
