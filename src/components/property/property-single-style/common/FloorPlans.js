"use client";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";

// const floorPlanData = [
//   {
//     id: "first-floor",
//     title: "First Floor",
//     size: "1267 Sqft",
//     bedrooms: "2",
//     bathrooms: "2",
//     price: "$920,99",
//     imageSrc: "/images/listings/listing-single-1.png",
//   },
//   {
//     id: "second-floor",
//     title: "Second Floor",
//     size: "1267 Sqft",
//     bedrooms: "2",
//     bathrooms: "2",
//     price: "$920,99",
//     imageSrc: "/images/listings/listing-single-1.png",
//   },
//   {
//     id: "third-floor",
//     title: "Third Floor",
//     size: "1267 Sqft",
//     bedrooms: "2",
//     bathrooms: "2",
//     price: "$920,99",
//     imageSrc: "/images/listings/listing-single-1.png",
//   },
// ];

const FloorPlans = ({ floorDataRaw, id }) => {
  const floorData = JSON.parse(floorDataRaw);

  const [loaded, setLoaded] = useState([]);

  useEffect(() => {}, [loaded]);

  return (
    <div className="accordion" id="accordionExample">
      {floorData.map((floorPlan, index) => (
        <div
          className={`accordion-item ${index === 1 ? "active" : ""}`}
          key={floorPlan.type}
        >
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className={`accordion-button ${index === 1 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded={index === 1 ? "true" : "false"}
              aria-controls={`collapse${index}`}
            >
              <span className="w-100 d-md-flex align-items-center">
                <span className="mr10-sm">{floorPlan.type}</span>
                {/* <span className="ms-auto d-md-flex align-items-center justify-content-end">
                  <span className="me-2 me-md-4">
                    <span className="fw600">Size:</span>
                    <span className="text">{floorPlan.size}</span>
                  </span>
                  <span className="me-2 me-md-4">
                    <span className="fw600">Bedrooms</span>
                    <span className="text">{floorPlan.bedrooms}</span>
                  </span>
                  <span className="me-2 me-md-4">
                    <span className="fw600">Bathrooms</span>
                    <span className="text">{floorPlan.bathrooms}</span>
                  </span>
                  <span>
                    <span className="fw600">Price</span>
                    <span className="text">{floorPlan.price}</span>
                  </span>
                </span> */}
              </span>
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${
              index === 1 ? "show" : ""
            }`}
            aria-labelledby={`heading${index}`}
            data-parent="#accordionExample"
          >
            <div className="accordion-body text-center">
              {!loaded.includes(index) && (
                <Skeleton
                  // sx={{ bgcolor: "grey.100" }}
                  variant="rectangular"
                  width={736}
                  height={544}
                />
              )}
              <img
                width={736}
                height={544}
                className={`${
                  !loaded.includes(index)
                    ? "opacity-0 position-absolute w-100 h-100 cover"
                    : "opacity-100 w-100 h-100 cover"
                }}`}
                src={`https://premium-realtor.com/api/media/listings/${id}/floorplan/${floorPlan.img}`}
                alt="listing figureout"
                onLoad={() => {
                  if (!loaded.includes(index)) {
                    loaded.push(index);
                    setLoaded(loaded);
                  }
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloorPlans;
