"use client";

import { useAppSelector } from "@/redux/store";
import Form from "@/components/pages/contact/Form";
import { ch_tr, en_tr, ru_tr } from "@/lang";

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
