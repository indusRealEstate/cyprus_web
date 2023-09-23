"use client";
import listings from "@/data/listings";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Skeleton } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "swiper/swiper-bundle.min.css";

const GalleryBox = ({ id, images }) => {
  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];

  const imageUrls = images != undefined ? JSON.parse(images) : [];
  const loadingUrls = [1, 2, 3];

  return (
    <>
      <Swiper
        className="overflow-visible"
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".single-pro-slide-next__active",
          prevEl: ".single-pro-slide-prev__active",
        }}
        slidesPerView={1}
        initialSlide={1}
        loop={true}
      >
        {imageUrls.length == 0
          ? loadingUrls.map((url, index) => (
              <SwiperSlide key={index}>
                <div className="item">
                  <Skeleton variant="rectangular" width={1170} height={600} />
                </div>
              </SwiperSlide>
            ))
          : imageUrls.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <div className="item">
                  <LazyLoadImage
                    src={`https://indusmanagement.ae/api/media/listings/${id}/media/${imageUrl}`}
                    className="bdrs12 w-100 h-100 cover"
                    width={1170}
                    height={600}
                    alt="Image Alt"
                    style={{
                      "max-height": "40rem",
                    }}
                  />
                  {/* <Image
                width={1170}
                height={600}
                className="bdrs12 w-100 h-100 cover"
                src={`https://indusmanagement.ae/api/media/listings/${id}/media/${imageUrl}`}
                alt={`Image ${index + 1}`}
                style={{
                  "max-height": "45rem",
                }}
              /> */}
                </div>
              </SwiperSlide>
            ))}
      </Swiper>

      <div className="rounded-arrow arrowY-center-position">
        <button className="single-pro-slide-prev__active swiper_button _prev">
          <i className="far fa-chevron-left" />
        </button>
        {/* End prev */}

        <button className="single-pro-slide-next__active swiper_button _next">
          <i className="far fa-chevron-right" />
        </button>
        {/* End Next */}
      </div>
      {/* End .col for navigation  */}
    </>
  );
};

export default GalleryBox;
