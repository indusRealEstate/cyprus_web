/** next.config.js - with Webpack v5.x */
import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
// import nodemailer from 'nodemailer';

export async function submit(data) {
  const res = await axios
    .post("https://alsimatower.ae/int_web_api/forms/scheduleATtour.php", data)
    .catch((error) => {
      console.log(error);
    });

  return res;
}

export async function contactAgent(data) {
  const res = await axios
    .post("https://alsimatower.ae/int_web_api/forms/contactAgent.php", data)
    .catch((error) => {
      console.log(error);
    });

  return res;
}
