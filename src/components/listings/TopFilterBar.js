"use client";

import Bathroom from "./sidebar/Bathroom";
import Bedroom from "./sidebar/Bedroom";
import PriceRange from "./sidebar/PriceRange";
import PropertyType from "./sidebar/PropertyType";

const TopFilterBar = ({
  filterFunctions,
  setCurrentSortingOption,
  colstyle,
  setColstyle,
  listingStatus,
  lang,
}) => {
  return (
    <>
      <div className="col-xl-8 d-none d-lg-block">
        <div className="dropdown-lists">
          <ul className="p-0 text-center text-xl-start">
            <li className="list-inline-item position-relative">
              <button
                type="button"
                className="open-btn mb15 dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                {lang == "en"
                  ? "Property Type"
                  : lang == "ru"
                  ? "Тип недвижимости"
                  : "财产种类"}{" "}
                <i className="fa fa-angle-down ms-2" />
              </button>
              <div className="dropdown-menu">
                <div className="widget-wrapper bdrb1 pb25 mb0 pl20">
                  <h6 className="list-title">
                    {lang == "en"
                      ? "Property Type"
                      : lang == "ru"
                      ? "Тип недвижимости"
                      : "财产种类"}
                  </h6>
                  <div className="checkbox-style1">
                    <PropertyType
                      filterFunctions={filterFunctions}
                      lang={lang}
                    />
                  </div>
                </div>
                <div className="text-end mt10 pr10">
                  <button
                    type="button"
                    className="done-btn ud-btn btn-thm dropdown-toggle"
                  >
                    {lang == "en"
                      ? "Done"
                      : lang == "ru"
                      ? "применять"
                      : "申请"}
                  </button>
                </div>
              </div>
            </li>
            {/* End li Property Type */}

            <li className="list-inline-item position-relative">
              <button
                type="button"
                className="open-btn mb15 dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                {lang == "en" ? "Price" : lang == "ru" ? "Цена" : "价格"}{" "}
                <i className="fa fa-angle-down ms-2" />
              </button>

              <div className="dropdown-menu dd3">
                <div className="widget-wrapper bdrb1 pb25 mb0 pl20 pr20">
                  <h6 className="list-title">
                    {lang == "en"
                      ? "Price Range"
                      : lang == "ru"
                      ? "Ценовой диапазон"
                      : "价格范围"}
                  </h6>
                  {/* Range Slider Desktop Version */}
                  <div className="range-slider-style1">
                    <PriceRange filterFunctions={filterFunctions} />
                  </div>
                </div>
                <div className="text-end mt10 pr10">
                  <button
                    type="button"
                    className="done-btn ud-btn btn-thm drop_btn3"
                  >
                    {lang == "en"
                      ? "Done"
                      : lang == "ru"
                      ? "применять"
                      : "申请"}
                  </button>
                </div>
              </div>
            </li>
            {/* End li Price */}

            <li className="list-inline-item position-relative">
              <button
                type="button"
                className="open-btn mb15 dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                {lang == "en"
                  ? "Beds / Baths"
                  : lang == "ru"
                  ? "Кровати / Ванны"
                  : "床/浴室"}{" "}
                <i className="fa fa-angle-down ms-2" />
              </button>
              <div className="dropdown-menu dd4 pb20">
                <div className="widget-wrapper pl20 pr20">
                  <h6 className="list-title">
                    {lang == "en"
                      ? "Bedrooms"
                      : lang == "ru"
                      ? "Спальни"
                      : "卧室"}
                  </h6>
                  <div className="d-flex">
                    <Bedroom filterFunctions={filterFunctions} lang={lang} />
                  </div>
                </div>

                <div className="widget-wrapper bdrb1 pb25 mb0 pl20 pr20">
                  <h6 className="list-title">
                    {lang == "en"
                      ? "Bathrooms"
                      : lang == "ru"
                      ? "Ванные комнаты"
                      : "浴室"}
                  </h6>
                  <div className="d-flex">
                    <Bathroom filterFunctions={filterFunctions} lang={lang} />
                  </div>
                </div>
                <div className="text-end mt10 pr10">
                  <button
                    type="button"
                    className="done-btn ud-btn btn-thm drop_btn4"
                  >
                    {lang == "en"
                      ? "Done"
                      : lang == "ru"
                      ? "применять"
                      : "申请"}
                  </button>
                </div>
              </div>
            </li>
            {/* End bed and bathroom check */}

            <li className="list-inline-item">
              {/* Advance Features modal trigger */}
              <button
                type="button"
                className="open-btn mb15"
                data-bs-toggle="modal"
                data-bs-target="#advanceSeachModal"
              >
                <i className="flaticon-settings me-2" />
                {lang == "en"
                  ? "More Filter"
                  : lang == "ru"
                  ? "Подробнее Фильтр"
                  : "更多筛选"}
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col-9 */}

      <div className="col-xl-4">
        <div className="page_control_shorting d-flex align-items-center justify-content-center justify-content-sm-end">
          <div className="pcs_dropdown pr10 d-flex align-items-center">
            <span style={{ minWidth: lang == "ru" ? "120px" : "60px" }}>
              {lang == "en"
                ? "Sort by"
                : lang == "ru"
                ? "Сортировать по"
                : "排序方式"}
            </span>
            <select
              className="form-select"
              onChange={(e) =>
                setCurrentSortingOption &&
                setCurrentSortingOption(e.target.value)
              }
            >
              <option>
                {" "}
                {lang == "en" ? "Newest" : lang == "ru" ? "Новейший" : "最新"}
              </option>
              <option>
                {lang == "en"
                  ? "Price Low"
                  : lang == "ru"
                  ? "Низкая цена"
                  : "价格低"}
              </option>
              <option>
                {lang == "en"
                  ? "Price High"
                  : lang == "ru"
                  ? "Высокая цена"
                  : "价格高"}
              </option>
            </select>
          </div>
          <div
            className={`pl15 pr15 bdrl1 bdrr1 d-none d-md-block  cursor ${
              !colstyle ? "menuActive" : "#"
            } `}
            onClick={() => setColstyle(false)}
          >
            {lang == "en" ? "Grid" : lang == "ru" ? "Сетка" : "网格"}
          </div>
          <div
            className={`pl15 d-none d-md-block  cursor ${
              colstyle ? "menuActive" : "#"
            }`}
            onClick={() => setColstyle(true)}
          >
            {lang == "en" ? "List" : lang == "ru" ? "Список" : "列表"}
          </div>
        </div>
      </div>
      {/* End .col-3 */}
    </>
  );
};

export default TopFilterBar;
