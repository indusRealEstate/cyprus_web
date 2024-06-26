/** @format */

"use client";
import { getAllListings } from "@/api";
import { Skeleton } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const NearbySimilarProperty = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllListings().then((res) => {
      setData(res);
    });
  }, []);

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
                      <Image
                        id={listing.id}
                        width={382}
                        height={248}
                        className={`opacity-100 w-100 h-100 cover`}
                        // className="w-100 h-100 cover"
                        src={`https://alsimatower.ae/int_web_api/media/listings/${
                          listing.prop_id
                        }/media/${JSON.parse(listing.images)[0]}`}
                        alt="listings"
                      />
                    </div>
                    <div className="list-content">
                      <h6 className="list-title">
                        <Link
                          href={`/property/${listing.prop_id}`}
                        >{`${listing.unit_no}, ${listing.property}`}</Link>
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
                          {listing.total_area} sq m
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
                          <a href={`/property/${listing.prop_id}`}>
                            <span className="flaticon-fullscreen" />
                          </a>
                          <a href="#">
                            <span className="flaticon-new-tab" />
                          </a>
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
      </>
    );
  }
};

export default NearbySimilarProperty;
