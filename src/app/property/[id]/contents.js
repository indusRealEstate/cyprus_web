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
import { useAppSelector } from "@/redux/store";
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

const PropertyDetailsContent = ({ data, params }) => {
  const lang = useAppSelector((state) => state.langReducer);

  const [desc, setDesc] = useState("");
  const [loadingTranslation, setLoadingTranslation] = useState(true);
  const translatePage = async (text, lang) => {
    const staticData = await fetch(
      `https://script.google.com/macros/s/AKfycby4cL2f3o--MDWjA4_uO2xe7eGsXs7g5hxV1IzoFPUcP98aYa_bbpY4g9F-Ius80g/exec`,
      {
        method: "POST",
        body: JSON.stringify({
          source_lang: "en",
          target_lang: lang,
          text: text,
        }),
      }
    );

    const data = await staticData.json();

    return data;
  };

  useEffect(() => {
    setLoadingTranslation(true);
    if (lang != "en") {
      translatePage(data.description, lang == "ch" ? "zh" : lang)
        .then((res) => {
          setDesc(res.translatedText);
        })
        .finally(() => setLoadingTranslation(false));
    } else {
      setDesc(data.description);
      setLoadingTranslation(false);
    }
  }, [lang]);

  return (
    <>
      <section className="pt0 pb90 bgc-white">
        <div className="container">
          <div className="row">
            <PropertyHeader
              id={params.id}
              data={data}
              lang={lang}
              translatePage={translatePage}
            />
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
                {loadingTranslation ? (
                  <>
                    <Skeleton height={30} />
                    <Skeleton height={30} />
                    <Skeleton height={30} />
                    <Skeleton width={800} height={30} />
                    <Skeleton width={600} height={30} />
                    <Skeleton height={30} />
                    <Skeleton height={30} />
                    <Skeleton height={30} />
                    <Skeleton height={30} />
                    <Skeleton width={300} height={30} />
                  </>
                ) : (
                  <ProperytyDescriptions desc={desc} />
                )}

                {/* End property description */}

                <h4 className="title fz17 mb30 mt50">
                  {lang == "en"
                    ? "Property Details"
                    : lang == "ru"
                    ? "Детали недвижимости"
                    : "物业详情"}
                </h4>
                <div className="row">
                  <PropertyDetails data={data} lang={lang} />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p-3 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30 mt30">
                  {lang == "en" ? "Address" : lang == "ru" ? "Адрес" : "地址"}
                </h4>
                <div className="row">
                  <PropertyAddress data={data} lang={lang} />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p-3 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">
                  {lang == "en"
                    ? "Features & Amenities"
                    : lang == "ru"
                    ? "Особенности и удобства"
                    : "特色与便利设施"}
                </h4>
                <div className="row">
                  <PropertyFeaturesAminites
                    data={data.features}
                    lang={lang}
                    translatePage={translatePage}
                  />
                </div>
              </div>
              {data.floorplan != "" ? (
                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p-3 mb30 overflow-hidden position-relative">
                  <h4 className="title fz17 mb30">
                    {lang == "en"
                      ? "Floor Plans"
                      : lang == "ru"
                      ? "Планировка этажей"
                      : "平面图"}
                  </h4>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="accordion-style1 style2">
                        <FloorPlans
                          floorDataRaw={data.floorplan}
                          id={data.prop_id}
                          lang={lang}
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
                <h4 className="title fz17 mb30">
                  {lang == "en" ? "Video" : lang == "ru" ? "видео" : "视频"}
                </h4>
                <div className="row">
                  <PropertyVideo
                    allImages={data.images}
                    id={data.prop_id}
                    video={data.video}
                  />
                </div>
              </div>

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p-3 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">
                  {lang == "en"
                    ? "What's Nearby?"
                    : lang == "ru"
                    ? "Что рядом?"
                    : "附近有什么？"}
                </h4>
                <div className="row">
                  <PropertyNearby lang={lang} />
                </div>
              </div> */}
            </div>

            <div className="col-lg-4">
              <div className="column">
                <div className="default-box-shadow1 bdrs12 bdr1 p-3 mb30-md bgc-white position-relative">
                  <h4 className="form-title mb5">
                    {lang == "en"
                      ? "Schedule a tour"
                      : lang == "ru"
                      ? "Запланировать тур"
                      : "安排游览"}
                  </h4>
                  <p className="text">
                    {lang == "en"
                      ? "Choose your preferred day"
                      : lang == "ru"
                      ? "Выберите предпочитаемый день"
                      : "选择您喜欢的日子"}
                  </p>
                  <ScheduleTour lang={lang} />
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row mt30 align-items-center justify-content-between">
            <div className="col-auto">
              <div className="main-title">
                <h2 className="title">
                  {lang == "en"
                    ? "Discover Our Featured Listings"
                    : lang == "ru"
                    ? "Откройте для себя наши избранные объявления"
                    : "发现我们的特色列表"}
                </h2>
                <p className="paragraph">
                  {lang == "en"
                    ? "Explore related properties"
                    : lang == "ru"
                    ? "Изучите похожие объекты"
                    : "探索相关属性"}
                </p>
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
