"use client";
import { getAllListingsByFilter } from "@/api";
import DefaultHeader from "@/components/common/DefaultHeader";

import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";

import ProperteyFiltering from "@/components/listing/grid-view/grid-full-3-col/ProperteyFiltering";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";

export const metadata = {
  title: "Gird Full 3 Column || Homez - Real Estate NextJS Template",
};

const GridFull3Col = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    getAllListingsByFilter({}, 1, 9).then((res) => {
      setAllData(res.prop);
    });
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
                  All Properties
                </h2>
                <div className="breadcumb-list">
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
                    For Rent
                  </a>
                </div>
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
        <ProperteyFiltering listings={allData} prop_for="Rent" />
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
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default GridFull3Col;