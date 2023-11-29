import React from "react";

const TopFilterBar = ({ setCurrentSortingOption, pageContentTrac, lang }) => {
  return (
    <>
      <div className="col-sm-6">
        <div className="text-center text-sm-start">
          <p className="pagination_page_count mb-0">
            Showing {pageContentTrac[0]}–
            {pageContentTrac[2] < pageContentTrac[1]
              ? pageContentTrac[2]
              : pageContentTrac[1]}{" "}
            of {pageContentTrac[2]} results
          </p>
        </div>
      </div>
      {/* End .col-sm-6 */}

      <div className="col-sm-6">
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
        </div>
      </div>
      {/* End .col-sm-6 */}
    </>
  );
};

export default TopFilterBar;
