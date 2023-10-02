"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const sliderItems = [
    {
      image:
        "https://premium-realtor.com/api/media/listings/MI-P1-030/media/Minthis_photo_Amalthia_exterior nignt view.webp",
      // price: "$986,00",
      title: "Villa on Paphos, Cyprus",
      description: "3 Beds - 3 Baths - 240 sq ft",
      prop_id: "MI-P1-030",
    },
    {
      image:
        "https://premium-realtor.com/api/media/listings/MI-TOPOS-ALTO-01/media/Minthis_CGI_Topos-Alto_evening pool view.webp",
      // price: "$986,00",
      title: "Topos Villa on Cyprus",
      description: "3 Beds - 3 Baths - 242 sq ft",
      prop_id: "MI-TOPOS-ALTO-02",
    },
    {
      image:
        "https://premium-realtor.com/api/media/listings/MI-TOPOS-ALTO-01/media/Minthis_CGI_Topos-Alto_front entrance.webp",
      // price: "$986,00",
      title: "Luxury Villa on Cyprus",
      description: "4 Beds - 3 Baths - 360 sq ft",
      prop_id: "MI-TOPOS-ALTO-01",
    },
    // {
    //   image: "/images/home/home-5-4.jpg",
    //   price: "$986,00",
    //   title: "Studio on Grand Avenue",
    //   description: "32 Beds - 91 Baths - 1500 sq ft",
    // },
  ];

  return (
    <>
      <div className="hero-large-home5">
        <Swiper
          direction="vertical" // Set the direction to vertical
          spaceBetween={0}
          slidesPerView={1}
          speed={1400} // Set the slide transition speed in milliseconds
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          style={{ height: "850px" }}
        >
          {sliderItems.map((item, index) => (
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
                            href={{
                              pathname: "/property-details",
                              query: {
                                id: item.prop_id,
                              },
                            }}
                            className="ud-btn btn-white slider-btn"
                          >
                            View Details
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
          slidesPerView={sliderItems.length} // Display all thumbs at once
          spaceBetween={0} // Adjust the space between thumbs
          style={{ height: "268px" }} // Set a fixed height for the thumbs gallery
        >
          {sliderItems.map((item, index) => (
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
