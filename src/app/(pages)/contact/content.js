"use client";

import { useAppSelector } from "@/redux/store";
import Form from "@/components/pages/contact/Form";
import { ch_tr, en_tr, ru_tr } from "@/lang";
import { useEffect } from "react";
import axios from "axios";

const ContactPageContent = () => {
  const lang = useAppSelector((state) => state.langReducer);

  const getLang = (lang) => {
    switch (lang) {
      case "en":
        return en_tr.contact_page;
      case "ru":
        return ru_tr.contact_page;
      case "ch":
        return ch_tr.contact_page;
      default:
        return en_tr.contact_page;
    }
  };

  const submitForm = () => {
    const thisForm = document.getElementById("myForm");

    const formData = new FormData(thisForm).entries();
    // const formData = new FormData();
    // formData.append("campaign", "616555fe3e944");
    // formData.append("lead_type", "sale");
    // formData.append("property_type", "apartment");
    // formData.append("source", "lp");
    // formData.append("name", "test-ajeer-2");
    // formData.append("phone", "034234234");
    // formData.append("email", "test@test.ae");
    // const response = await fetch("https://www.indus-inhouse.com/lead-api-v2", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(Object.fromEntries(formData)),
    // });

    fetch("https://www.indus-inhouse.com/lead-api-v2", {
      // headers: {
      //   "content-type": "application/json",
      // },
      body: JSON.stringify(Object.fromEntries(formData)),
      method: "POST",
      mode: "no-cors",
    }).then(async (res) => {
      console.log(res);
    });
  };

  return (
    <>
      <section id="main">
        <div className="container">
          <div className="row d-flex align-items-end">
            <div className="col-lg-5 position-relative">
              <div className="home8-contact-form default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white">
                <h4 className="form-title mb25">{getLang(lang).form_title}</h4>
                <Form lang={lang} />
              </div>
            </div>

            {/* End .col */}
            <div className="col-lg-5 offset-lg-2">
              <h2 className="mb0 text-capitalize">
                {getLang(lang).title_part_1}
              </h2>
              <h2 className="mb30 text-capitalize">
                {getLang(lang).title_part_2}
              </h2>
              <p className="text">{getLang(lang).subtitle}</p>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPageContent;
