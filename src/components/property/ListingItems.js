/** @format */

"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

const ListingItems = ({ data }) => {
  var formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "EUR",
  });
  const [loaded, setLoaded] = useState([]);
  useEffect(() => {}, [loaded]);
  return (
    <>
      {data?.map((listing) => (
        <div className="col-md-6" key={listing.id}>
          <div className="listing-style1">
            <div
              className="list-thumb"
              style={{
                height: "15rem",
              }}
            >
              {!loaded.includes(listing.id) && (
                <Skeleton
                  // sx={{ bgcolor: "grey.100" }}
                  variant="rectangular"
                  width={420}
                  height={248}
                />
              )}
              <img
                width={382}
                height={248}
                className={`${
                  !loaded.includes(listing.id)
                    ? "opacity-0 position-absolute w-100 h-100 cover"
                    : "opacity-100 w-100 h-100 cover"
                }}`}
                src={`https://alsimatower.ae/int_web_api/media/listings/${
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
                {listing.featured && (
                  <div className="list-tag fz12">
                    <span className="flaticon-electricity me-2" />
                    FEATURED
                  </div>
                )}
              </div>

              <div className="list-price">
                {formatter.format(listing.price)}
              </div>
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
                  <span className="flaticon-expand" /> {listing.total_area} sq m
                </a>
              </div>
              <hr className="mt-2 mb-2" />
              <div className="list-meta2 d-flex justify-content-between align-items-center">
                <span className="for-what">
                  {listing.unit_purpose == "sale" ? "For Sale" : "For Rent"}
                </span>
                <div className="icons d-flex align-items-center">
                  <a href="#">
                    <span className="flaticon-fullscreen" />
                  </a>
                  <a href="#">
                    <span className="flaticon-new-tab" />
                  </a>
                  <a href="#">
                    <span className="flaticon-like" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListingItems;
