/** @format */

"use client";

import { Skeleton, Tooltip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Box from "@mui/material/Box";

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
            className={` ${
              colstyle ? "col-sm-12 col-lg-6" : "col-sm-6 col-lg-4"
            }  `}
            key={listing.id}
          >
            <div
              className={
                colstyle
                  ? "listing-style1 listCustom listing-type"
                  : "listing-style1"
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
                  className={`${
                    !loaded.includes(listing.id)
                      ? "opacity-0 position-absolute w-100 cover"
                      : "opacity-100 w-100 cover"
                  }}`}
                  style={{ height: "230px" }}
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
                  {!listing.forRent && (
                    <div className="list-tag fz12">
                      <span className="flaticon-electricity me-2" />
                      FEATURED
                    </div>
                  )}
                </div>

                {/* <div className='list-price'>
									{formatter.format(listing.price)}
								</div> */}
              </div>
              <div className="list-content">
                <h6 className="list-title">
                  <Link
                    href={`/property/${listing.prop_id}`}
                  >{`${listing.property}`}</Link>
                </h6>
                <p className="list-text">{listing.location}</p>
                <div className="list-meta d-flex align-items-center">
                  <a href="#">
                    <span className="flaticon-bed" /> {listing.bed} bed
                  </a>
                  <a href="#">
                    <span className="flaticon-shower" /> {listing.bath} bath
                  </a>
                  <a href="#">
                    <span className="flaticon-expand" /> {listing.total_area} sq
                    m
                  </a>
                </div>
                <hr className="mt-2 mb-2" />
                <div className="list-meta2 d-flex justify-content-between align-items-center">
                  <span className="for-what">
                    {listing.unit_purpose == "sale" ? "For Sale" : "For Rent"}
                  </span>
                  <div className="icons d-flex align-items-center">
                    <Tooltip title="View">
                      <a href={`/property/${listing.prop_id}`}>
                        <span className="flaticon-fullscreen" />
                      </a>
                    </Tooltip>

                    <Tooltip title="Open In New Tab">
                      <a href={`/property/${listing.prop_id}`} target="_blank">
                        <span className="flaticon-new-tab" />
                      </a>
                    </Tooltip>
                    {/* <a href="#">
                      <span className="flaticon-like" />
                    </a> */}
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
