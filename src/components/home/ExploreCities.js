"use client";
import { ch_tr, en_tr, ru_tr } from "@/lang";
import { useAppSelector } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const ExploreCities = () => {
  const lang = useAppSelector((state) => state.langReducer);

  const cities = [
    {
      id: 1,
      name: "Paphos",
      image: "/images/listings/Paphos.webp",
    },
    {
      id: 2,
      name: "Limassol",
      image: "/images/listings/Limassol.webp",
    },
    {
      id: 2,
      name: "Muscut",
      image: "/images/listings/muscut.webp",
    },
  ];

  const getLang = (lang) => {
    switch (lang) {
      case "en":
        return en_tr.explore_cities_home;
      case "ru":
        return ru_tr.explore_cities_home;
      case "ch":
        return ch_tr.explore_cities_home;
      default:
        return en_tr.explore_cities_home;
    }
  };

  return (
    <>
      <div className="container">
        <div className="row  justify-content-between align-items-center">
          <div className="col-auto">
            <div className="main-title" data-aos="fade-up" data-aos-delay="100">
              <h2 className="title">{getLang(lang).heading}</h2>
              <p className="paragraph">{getLang(lang).sub_heading}</p>
            </div>
          </div>
          {/* End header */}

          <div className="col-auto mb30">
            <div className="row align-items-center justify-content-center">
              <div className="col-auto">
                <button className="cities_prev__active swiper_button">
                  <i className="far fa-arrow-left-long" />
                </button>
              </div>
              {/* End prev */}

              <div className="col-auto">
                <div className="pagination swiper--pagination cities_pagination__active" />
              </div>
              {/* End pagination */}

              <div className="col-auto">
                <button className="cities_next__active swiper_button">
                  <i className="far fa-arrow-right-long" />
                </button>
              </div>
              {/* End Next */}
            </div>
          </div>
          {/* End .col for navigation and pagination */}
        </div>
        {/* End .row */}

        <div className="row">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
            <div className="property-city-slider">
              <Swiper
                spaceBetween={30}
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: ".cities_next__active",
                  prevEl: ".cities_prev__active",
                }}
                pagination={{
                  el: ".cities_pagination__active",
                  clickable: true,
                }}
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
              >
                {cities.map((city) => (
                  <SwiperSlide key={city.id}>
                    <div className="item">
                      <Link
                        href={{
                          pathname: "/search-results",
                          query: {
                            city: city.name,
                          },
                        }}
                      >
                        <div className="feature-style2 mb30">
                          <div
                            className="feature-img"
                            style={{
                              minHeight: "279px",
                            }}
                          >
                            <Image
                              width={279}
                              height={279}
                              className="w-100 h-100 cover"
                              style={{
                                minHeight: "279px",
                              }}
                              src={city.image}
                              alt="city listings"
                            />
                          </div>
                          <div className="feature-content pt20">
                            <h6 className="title mb-1">{city.name}</h6>
                            {/* <p className="text fz15">{city.number} Properties</p> */}
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        {/* End .row */}
      </div>
    </>
  );
};

export default ExploreCities;
