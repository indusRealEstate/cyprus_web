"use client";
import { getAllListings } from "@/api";
import DefaultHeader from "@/components/common/DefaultHeader";

import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/home/footer";

import ProperteyFiltering from "@/components/listing/grid-view/grid-full-3-col/ProperteyFiltering";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";

const SaleProperties = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    getAllListings().then((res) => setAllData(res));
  }, [allData]);

  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcumb Sections */}
      <section className="breadcumb-section bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2
                  className="title"
                  style={{
                    color: "black",
                  }}
                >
                  Properties For Sale
                </h2>
                {/* <div className="breadcumb-list">
                  <a
                    href="#"
                    style={{
                      color: "black",
                    }}
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    style={{
                      color: "black",
                    }}
                  >
                    For Sale
                  </a>
                </div> */}
                <a
                  className="filter-btn-left mobile-filter-btn d-block d-lg-none"
                  data-bs-toggle="offcanvas"
                  href="#listingSidebarFilter"
                  role="button"
                  aria-controls="listingSidebarFilter"
                >
                  <span className="flaticon-settings" /> Filter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcumb Sections */}

      {/* Property Filtering */}
      {allData.length != 0 ? (
        <ProperteyFiltering listings={allData} prop_for="Buy" />
      ) : (
        <Box
          sx={{
            display: "flex",
            height: "30rem",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}

      {/* Property Filtering */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home6 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default SaleProperties;
