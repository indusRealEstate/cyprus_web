import axios from "axios";

export async function getPropertyDetails(formData) {
    const res = await axios
      .post("https://indusmanagement.ae/api/forms/contactFrom.php", {
        data: formData,
      })
      .catch(function (error) {
        console.log(error);
      });
  
    return res.json();
  }
  