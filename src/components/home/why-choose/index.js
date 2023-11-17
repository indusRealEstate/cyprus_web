"use client";
import Image from "next/image";
import Link from "next/link";
import Features from "./Features";
import { useAppSelector } from "@/redux/store";

import { ch_tr, en_tr, ru_tr } from "@/lang/index";

const WhyChoose = () => {
  const lang = useAppSelector((state) => state.langReducer);

  const getLang = (lang) => {
    switch (lang) {
      case "en":
        return en_tr.why_cyprus;
      case "ru":
        return ru_tr.why_cyprus;
      case "ch":
        return ch_tr.why_cyprus;
      default:
        return en_tr.why_cyprus;
    }
  };

  return (
    <>
      <div className="col-md-6 col-lg-6">
        <div
          className="position-relative mb30-md"
          style={{
            height: "600px",
          }}
        >
          <Image
            width={570}
            height={687}
            priority
            className="w-100 h-100 cover"
            src="/images/why-cyrpus-img.webp"
            alt="why chosse"
          />
          <Link href="/all-properties">
            <div className="iconbox-style5 d-flex align-items-center">
              <span className="icon flaticon-home flex-shrink-0" />
              <div className="iconbox-content flex-shrink-1 ms-2">
                <p className="text mb-0">{getLang(lang).btn_text_1}</p>
                <h4 className="title mb-0">{getLang(lang).btn_text_2}</h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* End .col-6 */}

      <div
        className="col-md-6 col-lg-5 offset-lg-1"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <div className="main-title2">
          <h2 className="title">{getLang(lang).heading}</h2>
          <p className="paragraph fz15">{getLang(lang).sub_heading}</p>
        </div>
        {/* End main-title2 */}

        <div className="why-chose-list">
          <Features lang={getLang(lang)} />
        </div>
        {/* End .why-chose-list */}
      </div>
      {/* End .col-6 */}
    </>
  );
};

export default WhyChoose;
