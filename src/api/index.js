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
