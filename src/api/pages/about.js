import { NextResponse, NextRequest } from "next/server";

export async function getExclusiveAgents() {
    const res = await fetch(
        "https://indusmanagement.ae/api/pages/aboutPage.php",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })

    return await res.json();
}