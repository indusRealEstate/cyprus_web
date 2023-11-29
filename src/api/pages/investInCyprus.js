/** @format */

import axios from "axios";

export async function submitInvestCyprus(data) {
  const response = await axios
    .post("https://alsimatower.ae/int_web_api/forms/investInCyprus.php", data)
    .catch(function (error) {
      console.log(error);
    });
  // return res.json();
  return response;
}
