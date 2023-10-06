/** @format */

"use client";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/navigation";
import "swiper/swiper-bundle.min.css";
import axios from "axios";

const properties = [
  {
    id: 1,
    // featured: true,
    // status: "FOR SALE",
    logo: "/images/minthis-logo.svg",
    logo_width: "200",
    title: "Comfortable Villa Green",
    subtitle:
      "Minthis is an inspiring hillside community, where every inch is in complete harmony with its breathtaking surroundings. The 5 million square metre resort is positioned around a Natura 2000 protected site, with an 18 hole championship golf course, wellness spa and central square with world class restaurants and amenities. All residences, villas, and suites harmonize with the typography to capture the light, harness cool hillside breeze, and frame the extraordinary views of this inspirational Cyprus real estate.",
    location: "Paphos, Cyprus",
    bed: "3 - 5 beds",
    bath: "3- 5 baths",
    sqft: "200 - 300 sq m",
    // price: '$14,000 / mo',
    imageSrc: "/images/minthis/Minthis_photo_Callisto_exterior.jpg",
    path: "/featured-collections/minthis",
  },
  {
    id: 2,
    // featured: true,
    // status: "FOR SALE",
    logo: "/images/one-logo.svg",
    logo_width: "125",
    title: "Skyper Pool Apartment",
    subtitle:
      "ONE is 37 stories of exceptional seafront living, offering exclusivity and rarity. It gives the Limassol skyline a striking new definition that is recognized from anywhere in the city which firmly sets a new benchmark for Cyprus. The homes offer remarkably spacious living with double height atriums and large sea facing balconies with radiant finishes that define the residences’ superior quality. ",
    location: "Limassol, Cyprus",
    bed: "3 bed",
    bath: "4 bath",
    sqft: "300 sq m",
    // price: "$2,800 / mo",
    imageSrc: "/images/one/ONE_photo_exterior 3.jpg",
    path: "/featured-collections/one",
  },
  {
    id: 3,
    // featured: true,
    // status: "FOR SALE",
    logo: "/images/neo-logo.webp",
    logo_width: "120",
    title: "Comfortable Villa Green",
    subtitle:
      "NEO is a globally significant residential resort which will provide a new landmark and destination for Limassol. Located on Limassol’s most prestigious waterfront kilometre, NEO was designed to create an exceptional lifestyle led hub punctuated by ‘villas in the sky’ that capture the essence of the unique location. As passionate Cyprus developers, it was paramount that NEO offer six star resort facilities and a boulevard lined with branded shops and restaurants.",
    location: "Limassol, Cyprus",
    bed: "3 bed",
    bath: "4 bath",
    sqft: "300 sq m",
    // price: "$14,000 / mo",
    imageSrc: "/images/neo/231118_limassol_exteriors_aerial_riviera_wb.jpg",
    path: "/featured-collections/neo",
  },
];

const FeatureProperties = () => {
  const route = useRouter();

  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".featurePro_next__active",
          prevEl: ".featurePro_prev__active",
        }}
        pagination={{
          el: ".featurePro_pagination__active",
          clickable: true,
        }}
        slidesPerView={1}
      >
        {properties.map((property) => (
          <SwiperSlide
            key={property.id}
            onClick={() => {
              route.push(property.path);
            }}
            style={{
              cursor: "pointer",
            }}
          >
            <div className="item">
              <div className="listing-style11">
                <div className="col-lg-12">
                  <div className="row align-items-center">
                    <div className="list-content mb30-md col-md-8 col-lg-6 col-xl-5 p-xl-0">
                      {/* <div className="d-flex mb30">
                        <div className="list-tag fz12 mr20">
                          {property.featured && (
                            <span className="flaticon-electricity me-2" />
                          )}
                          {property.featured && "FEATURED"}
                        </div>
                        <div className="list-tag2 fz12">{property.status}</div>
                      </div> */}
                      <h4 className="list-title">
                        {/* <Link href="/map-v3">{property.title}</Link> */}
                        <Image
                          width={property.logo_width}
                          height={50}
                          src={property.logo}
                          alt="property image"
                          style={{
                            filter: "contrast(0.5)",
                          }}
                        />
                      </h4>
                      <p className="list-text fz15">{property.location}</p>
                      <p className="list-text fz15 hide-in-mobile">
                        {property.subtitle}
                      </p>
                      <div className="list-meta d-block d-sm-flex align-items-center mt30 mb40 mobile-display-flex">
                        <a
                          className="d-flex mb-2 mb-sm-0 align-items-center"
                          href="#"
                        >
                          <span className="flaticon-bed" />
                          {property.bed}
                        </a>
                        <a
                          className="d-flex mb-2 mb-sm-0 align-items-center"
                          href="#"
                        >
                          <span className="flaticon-shower" />
                          {property.bath}
                        </a>
                        <a className="d-flex align-items-center" href="#">
                          <span className="flaticon-expand" />
                          {property.sqft}
                        </a>
                      </div>
                      {/* End list-meta */}

                      <div className="row mb20">
                        <div className="col-auto">
                          <div className="contact-info">
                            <p className="info-title ff-heading mb-2">
                              Contact Now
                            </p>
                            <h6 className="info-phone">
                              <a href="tel:+971552136536">+(971) 55 213 6536</a>
                            </h6>
                          </div>
                        </div>
                        {/* End .col-auto */}

                        {/* <div className="col-auto">
                          <div className="contact-info">
                            <p className="info-title ff-heading mb-2">
                              Need Live Support?
                            </p>
                            <h6 className="info-mail">
                              <a href="mailto:hi@homez.com">hi@homez.com</a>
                            </h6>
                          </div>
                        </div> */}
                        {/* End .col-auto */}
                      </div>
                      {/* End .row */}

                      <div className="row align-items-center justify-content-between">
                        <div className="col-auto">
                          <div className="list-meta2">
                            <h4 className="list-price mb-0">
                              {property.price}
                            </h4>
                          </div>
                        </div>
                        {/* End .row */}

                        {/* <div className="col-auto">
                          <div className="list-meta2">
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
                        </div> */}
                        {/* End .col-auto */}
                      </div>
                      {/* End .row */}

                      <div className="list-meta2 d-flex justify-content-between align-items-center"></div>
                    </div>
                    {/* End list-content */}

                    <div className="list-thumb col-lg-6 col-xl-6 offset-xl-1 p-xl-0">
                      <Image
                        width={560}
                        height={610}
                        className="img-1 cover w-100 h-00 mobile-flaged-feature-image"
                        src={property.imageSrc}
                        alt="property image"
                      />
                    </div>
                    {/* End list-thumb */}
                  </div>
                  {/* End .row */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="row align-items-center justify-content-start">
        <div className="col-auto">
          <button className="featurePro_prev__active swiper_button">
            <i className="far fa-arrow-left-long" />
          </button>
        </div>
        {/* End prev */}

        <div className="col-auto">
          <div className="pagination swiper--pagination featurePro_pagination__active" />
        </div>
        {/* End pagination */}

        <div className="col-auto">
          <button className="featurePro_next__active swiper_button">
            <i className="far fa-arrow-right-long" />
          </button>
        </div>
        {/* End Next */}
      </div>

      {/* End .col for navigation and pagination */}
    </>
  );
};

export default FeatureProperties;
