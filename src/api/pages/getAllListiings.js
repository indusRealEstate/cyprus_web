import { NextResponse, NextRequest } from "next/server";

export async function getAllListing(){
    const res = await fetch(
        "https://indusmanagement.ae/api/listings/get_all_properties_count.php",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })

    return await res.json();
} 