"use client";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const GalleryBox = ({ id, images }) => {
  const loadingImgs = [0, 1, 2, 3, 4];
  const [imgs, setImgs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setImgs(JSON.parse(images));
  }, [images]);

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
        {imgs.length == 0
          ? loadingImgs.map((sk, index) => (
              <SwiperSlide key={index}>
                <div className="item height-50 w-100">
                  <Skeleton
                    className={`bdrs12 w-100 cover height-50`}
                    variant="rectangular"
                    width={1200}
                    height={600}
                  />
                </div>
              </SwiperSlide>
            ))
          : imgs.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <div className="item height-50 w-100">
                  {loading && (
                    <Skeleton
                      className={`bdrs12 w-100 cover height-50`}
                      variant="rectangular"
                      width={1200}
                      height={600}
                    />
                  )}
                  <Image
                    src={`https://premium-realtor.com/api/media/listings/${id}/media/${imageUrl}`}
                    className={`${
                      !loading
                        ? "bdrs12 w-100 cover height-50 position-relative opacity-100"
                        : "bdrs12 w-100 cover height-50 position-absolute opacity-0"
                    }`}
                    width={1200}
                    height={600}
                    alt="Image Alt"
                    onLoadingComplete={() => setLoading(false)}
                  />
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
