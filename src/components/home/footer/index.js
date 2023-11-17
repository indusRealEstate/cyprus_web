"use client";
import Image from "next/image";
import Link from "next/link";
import ContactMeta from "./ContactMeta";
import Social from "./Social";
import Subscribe from "./Subscribe";
import MenuWidget from "./MenuWidget";
import Copyright from "./Copyright";
import { useAppSelector } from "@/redux/store";

const Footer = () => {
  const lang = useAppSelector((state) => state.langReducer);

  return (
    <>
      <div className="container">
        <div className="row bb-white-light mb60">
          <div className="col-sm-5">
            <div className="footer-widget text-center text-sm-start">
              <Link className="footer-logo" href="/">
                <Image
                  width={138}
                  height={55}
                  className="mb40"
                  src="/images/logo/logo-light.svg"
                  alt="logo"
                />
              </Link>
            </div>
          </div>
          {/* End .col */}

          {/* <div className="col-sm-7">
            <div className="social-widget text-center text-sm-end">
              <Social />
            </div>
          </div> */}
          {/* End .col */}
        </div>
        {/* End .row */}

        <div className="row">
          <div className="col-md-6">
            <div className="row justify-content-between">
              <MenuWidget lang={lang} />
            </div>
          </div>
          {/* End .col */}

          <div className="col-md-6 col-lg-4 offset-lg-2">
            <div className="footer-widget mb-4 mb-lg-5">
              <ContactMeta />
              <div className="footer-widget mb-4 mb-lg-5">
                <div className="mailchimp-widget mb-4 mb-lg-5">
                  <h6 className="title text-white mb20">
                    {lang == "en"
                      ? "Keep Yourself Up to Date"
                      : lang == "ru"
                      ? "Держите себя в курсе"
                      : "让自己保持最新状态"}
                  </h6>
                  <Subscribe />
                </div>
              </div>
            </div>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}

      <Copyright />
      {/* End copyright */}
    </>
  );
};

export default Footer;
