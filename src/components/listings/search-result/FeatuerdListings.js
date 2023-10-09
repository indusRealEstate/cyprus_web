/** @format */

"use client";

import { Box, Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const FeaturedListings = ({ data, colstyle }) => {
  var formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "EUR",
  });

  const [loaded, setLoaded] = useState([]);
  return (
    <>
      {data.length == 0 ? (
        <>
          <Box
            sx={{
              display: "flex",
              height: "30rem",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "block",
              }}
            >
              <Image
                src="/images/no-result.svg"
                width={300}
                height={300}
                alt="no-result"
              />
              <h2 className="text-center">No Result :(</h2>
            </div>
          </Box>
        </>
      ) : (
        data.map((listing) => (
          <div
            className={` ${colstyle ? "col-sm-12" : "col-sm-6"}  `}
            key={listing.id}
          >
            <div
              className={
                colstyle
                  ? "listing-style7 listCustom listing-type"
                  : "listing-style7"
              }
            >
              <div className="list-thumb">
                {!loaded.includes(listing.id) && (
                  <Skeleton
                    // sx={{ bgcolor: "grey.100" }}
                    variant="rectangular"
                    width={420}
                    height={240}
                  />
                )}
                <img
                  width={382}
                  height={248}
                  style={{ height: "228px" }}
                  className={`${
                    !loaded.includes(listing.id)
                      ? "opacity-0 position-absolute w-100 cover"
                      : "opacity-100 w-100 cover"
                  }}`}
                  src={`https://premium-realtor.com/api/media/listings/${
                    listing.prop_id
                  }/media/${JSON.parse(listing.images)[0]}`}
                  alt="listings"
                  onLoad={() => {
                    if (!loaded.includes(listing.id)) {
                      loaded.push(listing.id);
                      setLoaded(loaded);
                    }
                  }}
                />
                <div className="sale-sticker-wrap">
                  {listing.forRent && (
                    <div className="list-tag rounded-0 fz12">
                      <span className="flaticon-electricity" />
                      FEATURED
                    </div>
                  )}
                  <div className="list-tag2 rounded-0 fz12">
                    {listing.unit_purpose == "sale" ? "FOR SALE" : "FOR RENT"}
                  </div>
                </div>
                <div className="list-meta">
                  <a href="#" className="mr5">
                    <span className="flaticon-fullscreen" />
                  </a>
                  <a href="#" className="mr5">
                    <span className="flaticon-new-tab" />
                  </a>
                  <a href="#">
                    <span className="flaticon-like" />
                  </a>
                </div>
              </div>
              <div className="list-content">
                <h6 className="list-title">
                  <Link
                    href={{
                      pathname: "/property-details",
                      query: {
                        id: listing.prop_id,
                      },
                    }}
                  >
                    {listing.property}
                  </Link>
                </h6>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="list-price text-capitalize">
                    {listing.unit_type}
                  </div>
                  <div className="list-meta2 d-flex align-items-center">
                    <a href="#" className="mr10">
                      <span className="flaticon-bed mr5" /> {listing.bed}
                    </a>
                    <a href="#" className="mr10">
                      <span className="flaticon-shower mr5" /> {listing.bath}
                    </a>
                    <a href="#">
                      <span className="flaticon-expand" /> {listing.total_area}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default FeaturedListings;
