/** @format */

"use client";

import MainMenu from "@/components/common/MainMenu";
import { ch_tr, en_tr, ru_tr } from "@/lang/index";
import { useAppSelector } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SelectLanguage from "../select-lang";

const DefaultHeader = () => {
  const [navbar, setNavbar] = useState(false);

  const lang = useAppSelector((state) => state.langReducer);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const getLang = (lang) => {
    switch (lang) {
      case "en":
        return en_tr.conatct;
      case "ru":
        return ru_tr.conatct;
      case "ch":
        return ch_tr.conatct;
      default:
        return en_tr.conatct;
    }
  };

  return (
    <>
      <header
        className={`header-nav nav-homepage-style light-header menu-home4 main-menu ${
          navbar ? "sticky slideInDown animated" : ""
        }`}
      >
        <nav className="posr">
          <div className="container posr menu_bdrt1 ">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="logos mr40">
                    <Link className="header-logo logo1" href="/">
                      <Image
                        width={138}
                        height={55}
                        src="/images/logo/logo-dark.svg"
                        alt="Header Logo"
                      />
                    </Link>
                    <Link className="header-logo logo2" href="/">
                      <Image
                        width={138}
                        height={55}
                        src="/images/logo/logo-dark.svg"
                        alt="Header Logo"
                      />
                    </Link>
                  </div>
                  {/* End Logo */}

                  <MainMenu lang={lang} />
                  {/* End Main Menu */}
                </div>
              </div>
              {/* End .col-auto */}

              <div className="col-auto">
                <div className="d-flex align-items-center">
                  <SelectLanguage scrolled={true} />
                  <a
                    className="ud-btn btn-white add-property bdrs60 mx-2 mx-xl-4"
                    href="tel:+971552136536"
                  >
                    {getLang(lang)}
                    <i className="fal fa-arrow-right-long fz13" />
                  </a>
                  <a href="https://wa.me/971552136536" target="_blank">
                    <img
                      src="/images/whatsapp.svg"
                      alt="whatsapp"
                      className="whtsapp-icon"
                    />
                  </a>
                </div>
              </div>
              {/* End .col-auto */}
            </div>
            {/* End .row */}
          </div>
        </nav>
      </header>
      {/* End Header */}

      {/* Signup Modal */}

      {/* End Signup Modal */}

      {/* DesktopSidebarMenu */}

      {/* Sidebar Panel End */}
    </>
  );
};

export default DefaultHeader;
