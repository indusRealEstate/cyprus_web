import { NextResponse } from "next/server";

export async function getAllListings() {
  const res = await fetch(
    "https://indusmanagement.ae/api/listings/get_all_listings.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        limit: "10",
        pageNumber: "1",
      }),
    }
  );

  return await res.json();
}

export async function getPropertyDetails(prop_id) {
  const res = await fetch(
    "https://indusmanagement.ae/api/listings/get_property_details.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prop_id: prop_id,
      }),
    }
  );

  return await res.json();
}
