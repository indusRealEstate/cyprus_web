/** @format */
import React, { useState, useLayoutEffect, useEffect } from "react";

const OverView = ({ id, data }) => {
  // const data = listings.filter((elm) => elm.id == id)[0] || listings[0];
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [screenWidth]);

  const overviewData = [
    {
      icon: "flaticon-bed",
      label: "Bedroom",
      value: data.bed,
    },
    {
      icon: "flaticon-shower",
      label: "Bath",
      value: data.bath,
    },
    {
      icon: "flaticon-event",
      label: "Year Built",
      value: data.year_built,
    },
    {
      icon: "flaticon-garage",
      label: "Garage",
      value: data.parking,
      xs: true,
    },
    {
      icon: "flaticon-expand",
      label: "Sq M",
      value: data.total_area,
      xs: true,
    },
    {
      icon: "flaticon-home-1",
      label: "Property Type",
      value: data.unit_type,
    },
  ];

  return (
    <>
      {screenWidth > 768 ? (
        overviewData.map((item, index) => (
          <div
            key={index}
            className={`col-sm-6 col-lg-4 ${item.xs ? "mb25-xs" : "mb25"}`}
          >
            <div className="overview-element d-flex align-items-center">
              <span className={`icon ${item.icon}`} />
              <div className="ml15">
                <h6 className="mb-0">{item.label}</h6>
                <p className="text mb-0 fz15">{item.value}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: "0px",
            margin: "0px",
          }}
        >
          {overviewData.map((item, index) => (
            <li
              key={index}
              style={{
                margin: "5px 10px",
                width: "40vw",
                justifyContent: "start",
                display: "flex",
              }}
            >
              <div className="row overview-element d-flex align-items-center w-100">
                <div className="col-5">
                  <span className={`icon ${item.icon}`} />
                </div>
                <div className="col-7">
                  <h6 className="mb-0">{item.label}</h6>
                  <p className="text mb-0 fz15">{item.value}</p>
                </div>
              </div>
              {/* <div className='overview-element d-flex align-items-center'>
								<div className='ml15'></div>
							</div> */}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default OverView;
