/** @format */

import axios from "axios";
import { NextResponse } from "next/server";

export async function getAllListings() {
  const res = await fetch(
    "https://premium-realtor.com/api/listings/get_all_listings.php",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return await res.json();
}

export async function getAllListingsByFilter(type) {
  const res = await fetch(
    "https://premium-realtor.com/api/listings/get_all_listings_filter.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: type,
      }),
    }
  );

  return await res.json();
}

export async function getPropertyDetails(prop_id) {
  const res = await axios
    .post("https://premium-realtor.com/api/listings/get_property_details.php", {
      prop_id: prop_id,
    })
    .catch(function (error) {
      console.log(error);
    });

  return res.data;
}
