import React from "react";
import { ch_tr, en_tr, ru_tr } from "@/lang";

const MenuWidget = ({ lang }) => {
  const getLang = (lang) => {
    switch (lang) {
      case "en":
        return en_tr.footer;
      case "ru":
        return ru_tr.footer;
      case "ch":
        return ch_tr.footer;
      default:
        return en_tr.footer;
    }
  };

  return (
    <>
      {getLang(lang).menu.map((section, index) => (
        <div className="col-auto" key={index}>
          <div className="link-style1 mb-3">
            <h6 className="text-white mb25">{section.title}</h6>
            <ul className="ps-0">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuWidget;
