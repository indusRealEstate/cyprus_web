/** @format */

"use client";
import { getPropertyDetails } from "@/api";
import DefaultHeader from "@/components/common/DefaultHeader";
import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/home/footer";
import FloorPlans from "@/components/property/property-single-style/common/FloorPlans";
import HomeValueChart from "@/components/property/property-single-style/common/HomeValueChart";
import MortgageCalculator from "@/components/property/property-single-style/common/MortgageCalculator";
import NearbySimilarProperty from "@/components/property/property-single-style/common/NearbySimilarProperty";
import OverView from "@/components/property/property-single-style/common/OverView";
import PropertyAddress from "@/components/property/property-single-style/common/PropertyAddress";
import PropertyDetails from "@/components/property/property-single-style/common/PropertyDetails";
import PropertyFeaturesAminites from "@/components/property/property-single-style/common/PropertyFeaturesAminites";
import PropertyNearby from "@/components/property/property-single-style/common/PropertyNearby";
import PropertyVideo from "@/components/property/property-single-style/common/PropertyVideo";
import ProperytyDescriptions from "@/components/property/property-single-style/common/ProperytyDescriptions";
import InfoWithForm from "@/components/property/property-single-style/common/more-info";
import ContactWithAgent from "@/components/property/property-single-style/sidebar/ContactWithAgent";
import ScheduleTour from "@/components/property/property-single-style/sidebar/ScheduleTour";
import PropertyHeader from "@/components/property/property-single-style/single-v4/PropertyHeader";
import PropertyGallery from "@/components/property/property-single-style/single-v4/property-gallery";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useSearchParams } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";

const PropertyDetailsPage = () => {
  const searchParams = useSearchParams();
  const params = searchParams.get("id");
  const [data, setData] = useState("");

  const [screenWidth, setScreenWidth] = useState();
  useEffect(() => {
    getPropertyDetails(params).then((res) => {
      setData(res);
    });
  }, [data]);

  useLayoutEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [screenWidth]);

  return (
    <>
      {data == "" ? (
        <Box
          sx={{
            display: "flex",
            height: "60rem",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          {/* Main Header Nav */}
          <DefaultHeader />
          {/* End Main Header Nav */}

          {/* Mobile Nav  */}
          <MobileMenu />
          {/* End Mobile Nav  */}

          {/* Property Slider Gallery */}
          <section className="pt20 pb60 bgc-white">
            <PropertyGallery id={params} images={data.images} />
          </section>
          {/* End Property Slider Gallery */}

          {/* Property All Single V4 */}
          <section className="pt0 pb90 bgc-white">
            <div className="container">
              <div className="row">
                <PropertyHeader id={params} data={data} />
              </div>
              {/* End .row */}

              <div className="row wrap">
                <div className="col-lg-8">
                  <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p-3 mb30 overflow-hidden position-relative">
                    <h4 className="title fz17 mb30">Overview</h4>
                    <div className="row">
                      <OverView id={params} data={data} />
                    </div>
                  </div>
                  {/* End .ps-widget */}

                  <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p-3 mb30 overflow-hidden position-relative">
                    <h4 className="title fz17 mb30">Property Description</h4>
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
                    <h4 className="title fz17 mb30">
                      Features &amp; Amenities
                    </h4>
                    <div className="row">
                      <PropertyFeaturesAminites data={data.features} />
                    </div>
                  </div>
                  {/* End .ps-widget */}

                  {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                  <h4 className="title fz17 mb30">Energy Class</h4>
                  <div className="row">
                    <EnergyClass />
                  </div>
                </div> */}
                  {/* End .ps-widget */}
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
                  {/* End .ps-widget */}

                  {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                    <h4 className="title fz17 mb30">360° Virtual Tour</h4>
                    <div className="row">
                      <VirtualTour360 />
                    </div>
                  </div> */}
                  {/* End .ps-widget */}

                  <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p-3 mb30 overflow-hidden position-relative">
                    <h4 className="title fz17 mb30">What&apos;s Nearby?</h4>
                    <div className="row">
                      <PropertyNearby />
                    </div>
                  </div>
                  {/* End .ps-widget */}

                  {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                  <h4 className="title fz17 mb30">Walkscore</h4>
                  <div className="row">
                    <div className="col-md-12">
                      <h4 className="fw400 mb20">
                        10425 Tabor St Los Angeles CA 90034 USA
                      </h4>
                      <WalkScore />
                    </div>
                  </div>
                </div> */}
                  {/* End .ps-widget */}

                  <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p-3 mb30 overflow-hidden position-relative">
                    <h4 className="title fz17 mb30">Mortgage Calculator</h4>
                    <div className="row">
                      <MortgageCalculator />
                    </div>
                  </div>
                  {/* End .ps-widget */}

                  {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                    <div className="row">
                      <PropertyViews />
                    </div>
                  </div> */}
                  {/* End .ps-widget */}
                  {screenWidth > 768 ? (
                    <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p-3 mb30 overflow-hidden position-relative">
                      <h4 className="title fz17 mb30">Home Value</h4>
                      <div className="row">
                        <HomeValueChart />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {/* End .ps-widget */}

                  <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p-3 mb30 overflow-hidden position-relative">
                    <h4 className="title fz17 mb30">Get More Information</h4>
                    <InfoWithForm agentId={data.listed_agent_id} />
                  </div>
                  {/* End .ps-widget */}

                  {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                  <div className="row">
                    <AllReviews />
                  </div>
                </div> */}
                  {/* End .ps-widget */}

                  {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                  <h4 className="title fz17 mb30">Leave A Review</h4>
                  <div className="row">
                    <ReviewBoxForm />
                  </div>
                </div> */}
                  {/* End .ps-widget */}
                </div>
                {/* End .col-8 */}

                <div className="col-lg-4">
                  <div className="column">
                    <div className="default-box-shadow1 bdrs12 bdr1 p-3 mb30-md bgc-white position-relative">
                      <h4 className="form-title mb5">Schedule a tour</h4>
                      <p className="text">Choose your preferred day</p>
                      <ScheduleTour />
                    </div>
                    {/* End .Schedule a tour */}

                    <div className="agen-personal-info position-relative bgc-white default-box-shadow1 bdrs12 p-3 mt30">
                      <div className="widget-wrapper mb-0">
                        <h6 className="title fz17 mb30">
                          Get More Information
                        </h6>
                        <ContactWithAgent agentId={data.listed_agent_id} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="row mt30 align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="main-title">
                    <h2 className="title">Discover Our Featured Listings</h2>
                    <p className="paragraph">
                      Aliquam lacinia diam quis lacus euismod
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
          {/* End Property All Single V4  */}

          {/* Start Our Footer */}
          <section className="footer-style1 at-home6 pt60 pb-0">
            <Footer />
          </section>
          {/* End Our Footer */}
        </>
      )}
    </>
  );
};

export default PropertyDetailsPage;
