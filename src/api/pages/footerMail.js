/** @format */

import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

export async function subscrbeMail(data) {
  const res = await axios
    .post("https://alsimatower.ae/int_web_api/forms/emailSubcribe.php", data)
    .catch(function (error) {
      console.log(error);
    });

  return res;
}
