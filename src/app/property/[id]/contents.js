"use client";

import FloorPlans from "@/components/property/property-single-style/common/FloorPlans";
import NearbySimilarProperty from "@/components/property/property-single-style/common/NearbySimilarProperty";
import OverView from "@/components/property/property-single-style/common/OverView";
import PropertyAddress from "@/components/property/property-single-style/common/PropertyAddress";
import PropertyDetails from "@/components/property/property-single-style/common/PropertyDetails";
import PropertyFeaturesAminites from "@/components/property/property-single-style/common/PropertyFeaturesAminites";
import PropertyNearby from "@/components/property/property-single-style/common/PropertyNearby";
import PropertyVideo from "@/components/property/property-single-style/common/PropertyVideo";
import ProperytyDescriptions from "@/components/property/property-single-style/common/ProperytyDescriptions";
import ScheduleTour from "@/components/property/property-single-style/sidebar/ScheduleTour";
import PropertyHeader from "@/components/property/property-single-style/single-v4/PropertyHeader";
import { ch_tr, en_tr, ru_tr } from "@/lang";
import { useAppSelector } from "@/redux/store";
import axios from "axios";

const PropertyDetailsContent = ({ data, params }) => {
  const lang = useAppSelector((state) => state.langReducer);

  const getLang = (lang) => {
    switch (lang) {
      case "en":
        return en_tr.contact_page;
      case "ru":
        return ru_tr.contact_page;
      case "ch":
        return ch_tr.contact_page;
      default:
        return en_tr.contact_page;
    }
  };

  const translatePage = async (text, lang) => {
    const res = await axios.post(
      "https://script.google.com/macros/s/AKfycby4cL2f3o--MDWjA4_uO2xe7eGsXs7g5hxV1IzoFPUcP98aYa_bbpY4g9F-Ius80g/exec",
      {
        source_lang: "en",
        target_lang: lang,
        text: text,
      }
    );

    return res.data;
  };

  return (
    <>
      <section className="pt0 pb90 bgc-white">
        <div className="container">
          <div className="row">
            <PropertyHeader id={params.id} data={data} lang={lang} />
          </div>
          {/* End .row */}

          <div className="row wrap">
            <div className="col-lg-8">
              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p-3 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">
                  {lang == "en" ? "Overview" : lang == "ru" ? "Обзор" : "概述"}
                </h4>
                <div className="row">
                  <OverView data={data} lang={lang} />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p-3 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">
                  {lang == "en"
                    ? "Property Description"
                    : lang == "ru"
                    ? "Описание недвижимости"
                    : "属性说明"}
                </h4>
                <ProperytyDescriptions desc={data.description} />
                {/* End property description */}

                <h4 className="title fz17 mb30 mt50">Property Details</h4>
                <div className="row">
                  <PropertyDetails data={data} />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p-3 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30 mt30">Address</h4>
                <div className="row">
                  <PropertyAddress data={data} />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p-3 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Features &amp; Amenities</h4>
                <div className="row">
                  <PropertyFeaturesAminites data={data.features} />
                </div>
              </div>
              {data.floorplan != "" ? (
                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p-3 mb30 overflow-hidden position-relative">
                  <h4 className="title fz17 mb30">Floor Plans</h4>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="accordion-style1 style2">
                        <FloorPlans
                          floorDataRaw={data.floorplan}
                          id={data.prop_id}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}

              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p-3 mb30 ">
                <h4 className="title fz17 mb30">Video</h4>
                <div className="row">
                  <PropertyVideo
                    allImages={data.images}
                    id={data.prop_id}
                    video={data.video}
                  />
                </div>
              </div>

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p-3 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">What&apos;s Nearby?</h4>
                <div className="row">
                  <PropertyNearby />
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="column">
                <div className="default-box-shadow1 bdrs12 bdr1 p-3 mb30-md bgc-white position-relative">
                  <h4 className="form-title mb5">Schedule a tour</h4>
                  <p className="text">Choose your preferred day</p>
                  <ScheduleTour />
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row mt30 align-items-center justify-content-between">
            <div className="col-auto">
              <div className="main-title">
                <h2 className="title">Discover Our Featured Listings</h2>
                <p className="paragraph">Explore related properties</p>
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="featured-prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination featured-pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="featured-next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                {/* End Next */}
              </div>
              {/* End .col for navigation and pagination */}
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div className="property-city-slider">
                <NearbySimilarProperty />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
    </>
  );
};

export default PropertyDetailsContent;
