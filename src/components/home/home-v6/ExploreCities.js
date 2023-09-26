"use client";
import Image from "next/image";
import Link from "next/link";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const ExploreCities = () => {
  const cities = [
    {
      id: 1,
      name: "Paphos",
      image: "/images/listings/Paphos.webp",
      number: 12,
    },
    {
      id: 2,
      name: "Limassol",
      image: "/images/listings/Limassol.webp",
      number: 8,
    },
    {
      id: 3,
      name: "Larnaca",
      image: "/images/listings/Larnaca.webp",
      number: 15,
    },
    {
      id: 4,
      name: "Nicosia",
      image: "/images/listings/Nicosia.jpg",
      number: 10,
    },
    {
      id: 5,
      name: "Ayia Napa",
      image: "/images/listings/Ayia Napa.webp",
      number: 12,
    },
    {
      id: 6,
      name: "Protaras",
      image: "/images/listings/Protaras.webp",
      number: 8,
    },
    // Add more cities if needed
  ];

  return (
    <>
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
              <Link href="/map-v3">
                <div className="feature-style2 mb30">
                  <div className="feature-img">
                    <Image
                      width={279}
                      height={279}
                      style={{objectFit:"cover",objectPosition:"center"}}
                      src={city.image}
                      alt="city listings"
                    />
                  </div>
                  <div className="feature-content pt20">
                    <h6 className="title mb-1">{city.name}</h6>
                    <p className="text fz15">{city.number} Properties</p>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ExploreCities;
