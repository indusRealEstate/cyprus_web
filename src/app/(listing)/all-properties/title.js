"use client";

import { useAppSelector } from "@/redux/store";

const AllPropertiesTitle = () => {
  const lang = useAppSelector((state) => state.langReducer);
  return (
    <section className="breadcumb-section bgc-f7">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcumb-style1">
              <h2
                className="title"
                style={{
                  color: "black",
                }}
              >
                {lang == "en"
                  ? "All Properties"
                  : lang == "ru"
                  ? "Все объекты недвижимости"
                  : "所有属性"}
              </h2>
              {/* <div className="breadcumb-list">
                  <a
                    href="#"
                    style={{
                      color: "black",
                    }}
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    style={{
                      color: "black",
                    }}
                  >
                    For All
                  </a>
                </div> */}
              <a
                className="filter-btn-left mobile-filter-btn d-block d-lg-none"
                data-bs-toggle="offcanvas"
                href="#listingSidebarFilter"
                role="button"
                aria-controls="listingSidebarFilter"
              >
                <span className="flaticon-settings" /> Filter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllPropertiesTitle;
