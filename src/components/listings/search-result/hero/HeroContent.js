"use client";
import React, { useState } from "react";

const HeroContent = ({
  filterFunctions,
  currentActiveTab,
  currentSearchQuery,
  lang,
}) => {
  const [activeTab, setActiveTab] = useState(currentActiveTab);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    window.history.replaceState(null, "", `/search-results/?prop_type=${tab}`);
    filterFunctions.setListingStatus(tab == "rent" ? "Rent" : "Buy");
  };

  const getLang = (lang, type) => {
    if (type == "buy") {
      switch (lang) {
        case "en":
          return "Buy";
        case "ru":
          return "Купить";
        case "ch":
          return "买";
        default:
          return "Buy";
      }
    } else {
      switch (lang) {
        case "en":
          return "Rent";
        case "ru":
          return "Арендовать";
        case "ch":
          return "租";
        default:
          return "Rent";
      }
    }
  };

  const tabs = [
    { id: "buy", label: getLang(lang, "buy") },
    { id: "rent", label: getLang(lang, "rent") },
    // { id: "sold", label: "Sold" },
  ];

  return (
    <div className="advance-search-tab mt30 mx-auto animate-up-3">
      <ul className={`nav nav-tabs p-0 m-0 ${lang == "ru" ? "maxw240" : ""}`}>
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
              className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            className={`${activeTab === tab.id ? "active" : ""} tab-pane`}
            key={tab.id}
          >
            <div className="advance-content-style1">
              <div className="row">
                <div className="col-md-8 col-lg-9">
                  <div className="advance-search-field position-relative text-start">
                    <form className="form-search position-relative">
                      <div className="box-search">
                        <span className="icon flaticon-home-1" />
                        <input
                          className="form-control bgc-f7 bdrs12"
                          type="text"
                          name="search"
                          defaultValue={currentSearchQuery}
                          onChange={(e) =>
                            filterFunctions &&
                            filterFunctions.setSearchQuery(e.target.value)
                          }
                          placeholder={
                            lang == "en"
                              ? "Search Properties"
                              : lang == "ru"
                              ? "Поиск недвижимости"
                              : "搜索属性"
                          }
                        />
                      </div>
                    </form>
                  </div>
                </div>
                {/* End .col-md-8 */}

                <div className="col-md-4 col-lg-3">
                  <div className="d-flex align-items-center justify-content-start justify-content-md-center mt-3 mt-md-0">
                    <button
                      className="advance-search-btn"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#advanceSeachModal"
                    >
                      <span className="flaticon-settings" />
                      {lang == "en"
                        ? "Advanced"
                        : lang == "ru"
                        ? "Передовой"
                        : "先进的"}
                    </button>
                    <button
                      className="advance-search-icon ud-btn btn-thm ms-4"
                      type="button"
                    >
                      <span className="flaticon-search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroContent;
