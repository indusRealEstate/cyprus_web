"use client";
import Image from "next/image";
import Link from "next/link";
import Features from "./Features";
import { useAppSelector } from "@/redux/store";

import { ch_tr, en_tr, ru_tr } from "@/lang/index";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { useState } from "react";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

const WhyChoose = () => {
  const lang = useAppSelector((state) => state.langReducer);

  const getLang = (lang) => {
    switch (lang) {
      case "en":
        return en_tr.why_choose;
      case "ru":
        return ru_tr.why_choose;
      case "ch":
        return ch_tr.why_choose;
      default:
        return en_tr.why_choose;
    }
  };

  const [realIndex, setIndex] = useState(0);

  return (
    <>
      <Swiper
        onSlideChange={(e) => setIndex(e.realIndex)}
        className="overflow-visible"
        spaceBetween={1}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".single-pro-slide-testimonials-next__active",
          prevEl: ".single-pro-slide-testimonials-prev__active",
        }}
        slidesPerView={1}
        initialSlide={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        // width={500}
      >
        {getLang(lang).map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`tab-pane fade row align-items-center ${
                realIndex === index ? "show active" : ""
              }`}
              id={`pills-${index}`}
              role="tabpanel"
              aria-labelledby={`pills-${index}-tab`}
            >
              <div className="col-md-6 col-lg-6">
                <div
                  className="position-relative mb30-md"
                  style={{
                    height: "600px",
                  }}
                >
                  <Image
                    width={570}
                    height={687}
                    priority
                    className="w-100 h-100 cover"
                    src={item.img}
                    alt="why chosse"
                  />
                  <Link href="/all-properties">
                    <div className={`iconbox-style5 d-flex align-items-center`}>
                      <span className="icon flaticon-home flex-shrink-0" />
                      <div className="iconbox-content flex-shrink-1 ms-2">
                        <p className="text mb-0">{item.btn_text_1}</p>
                        <h4 className="title mb-0">{item.btn_text_2}</h4>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* End .col-6 */}

              <div
                className="col-md-6 col-lg-5 offset-lg-1"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div className="main-title2">
                  <h2 className="title">{item.heading}</h2>
                  <p className="paragraph fz15">{item.sub_heading}</p>
                </div>
                {/* End main-title2 */}

                <div className="why-chose-list">
                  <Features lang={item} />
                </div>
                {/* End .why-chose-list */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="rounded-arrow arrowY-center-position top-minus-15">
        <button className="single-pro-slide-testimonials-prev__active swiper_button _prev">
          <i className="far fa-chevron-left" />
        </button>
        {/* End prev */}

        <button className="single-pro-slide-testimonials-next__active swiper_button _next">
          <i className="far fa-chevron-right" />
        </button>
        {/* End Next */}
      </div>

      {/* End .col-6 */}
    </>
  );
};

export default WhyChoose;
