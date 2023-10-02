/** @format */

"use client";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import FilteringAgent from "@/components/property/FilteringAgent";
import { getAllAgents } from "@/api/pages/agents";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { getDealingCities } from "@/api/pages/agents";

export const metadata = {
  title: "Agents || Homez - Real Estate NextJS Template",
};

const Agents = () => {
  const [allAgents, setAllAgents] = useState([]);
  const [page, setPage] = useState(1);
  const [allCities, setAllCities] = useState();

  useEffect(() => {
    getAllAgents(page, 2).then((res) => {
      setAllAgents(res.data);
    });
  }, [allAgents, page]);

  getDealingCities().then((res) => {
    setAllCities(res.data);
    // console.log(res.data);
  });

  const pagination = (page) => {
    console.log(page);
    setPage(page);
  };

  const getFilterData = (filterData) => {
    console.log(filterData);
  };

  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcumb Sections */}
      <section className="breadcumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title text-dark">Agents</h2>
                <div className="breadcumb-list">
                  <a href="#" className="text-dark">
                    Agents
                  </a>
                  <a href="#" className="text-dark">
                    All Agents
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcumb Sections */}

      {/* Agent Section Area */}
      {allAgents == undefined ? (
        <>
          <Box
            sx={{
              display: "flex",
              height: "50rem",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress size={40} />
          </Box>
        </>
      ) : allAgents.length != 0 ? (
        <FilteringAgent
          data={allAgents}
          allCities={allCities}
          getPagination={pagination}
          getFilterData={getFilterData}
        />
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              height: "50rem",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress size={40} />
          </Box>
        </>
      )}

      {/* End Agent Section Area */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Agents;
