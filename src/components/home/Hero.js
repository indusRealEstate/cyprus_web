"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import Link from "next/link";
import { ch_tr, en_tr, ru_tr } from "@/lang";
import { useAppSelector } from "@/redux/store";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const lang = useAppSelector((state) => state.langReducer);

  const getLang = (lang) => {
    switch (lang) {
      case "en":
        return en_tr.main_slider;
      case "ru":
        return ru_tr.main_slider;
      case "ch":
        return ch_tr.main_slider;
      default:
        return en_tr.main_slider;
    }
  };

  return (
    <>
      <div className="hero-large-home5">
        <Swiper
          direction="vertical" // Set the direction to vertical
          spaceBetween={0}
          slidesPerView={1}
          speed={1400} // Set the slide transition speed in milliseconds
          autoplay={{ delay: 4000 }}
          modules={[Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          style={{ height: "850px" }}
        >
          {getLang(lang).map((item, index) => (
            <SwiperSlide key={index}>
              <div className="item">
                <div
                  className="slider-slide-item"
                  style={{ backgroundImage: `url('${item.image}')` }}
                  data-thumb={item.image}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 text-left position-relative">
                        <h4 className="h1 slider-subtitle text-white">
                          {item.price}
                        </h4>
                        <h3 className="h6 slider-title text-white">
                          {item.title}
                        </h3>
                        <p className="mb30 slider-text text-white">
                          {item.description}
                        </p>
                        <div className="slider-btn-block">
                          <Link
                            href={`/property/${item.prop_id}`}
                            className="ud-btn btn-white slider-btn"
                          >
                            {" "}
                            {lang == "en"
                              ? "View Details"
                              : lang == "ru"
                              ? "Посмотреть детали"
                              : "查看详情"}
                            <i className="fal fa-arrow-right-long" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="custom_thumbs">
        <Swiper
          direction="vertical" // Set the direction to vertical
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          slidesPerView={getLang(lang).length} // Display all thumbs at once
          spaceBetween={0} // Adjust the space between thumbs
          style={{ height: "268px" }} // Set a fixed height for the thumbs gallery
        >
          {getLang(lang).map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                width={50}
                height={50}
                className="cover"
                src={item.image}
                alt="thumb"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
