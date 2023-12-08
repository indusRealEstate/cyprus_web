/** @format */

import React from "react";

const PropertyDetails = ({ data, lang }) => {
  const getPropFor = (purpose, lang) => {
    switch (purpose) {
      case purpose == "rent":
        if (lang == "en") {
          return "For Rent";
        } else if (lang == "ru") {
          return "В аренду";
        } else {
          return "出租";
        }

      case purpose == "sale":
        if (lang == "en") {
          return "For Sale";
        } else if (lang == "ru") {
          return "Продается";
        } else {
          return "出售";
        }
      default:
        if (lang == "en") {
          return "For Sale";
        } else if (lang == "ru") {
          return "Продается";
        } else {
          return "出售";
        }
    }
  };

  const columns = [
    [
      {
        label:
          lang == "en"
            ? "Property ID"
            : lang == "ru"
            ? "Идентификатор объекта"
            : "物业编号",
        value: data.prop_id,
      },
      {
        label:
          lang == "en"
            ? "Property Size"
            : lang == "ru"
            ? "Размер недвижимости"
            : "物业规模",
        value: data.total_area + " Sq M",
      },

      {
        label: lang == "en" ? "Bedrooms" : lang == "ru" ? "Спальни" : "卧室",
        value: data.bed,
      },
    ],
    [
      {
        label:
          lang == "en"
            ? "Property Type"
            : lang == "ru"
            ? "Тип недвижимости"
            : "财产种类",
        value: data.unit_type,
      },
      {
        label:
          lang == "en"
            ? "Property Status"
            : lang == "ru"
            ? "Статус недвижимости"
            : "物业状况",
        value: getPropFor(data.unit_purpose, lang),
      },
    ],
  ];

  return (
    <div
      className="row"
      style={{
        display: "flex",
      }}
    >
      {columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className={`col-md-6 col-xl-4 col-sm-2${
            columnIndex === 1 ? " offset-xl-2" : ""
          }`}
        >
          {column.map((detail, index) => (
            <div key={index} className="d-flex justify-content-between">
              <div className="pd-list">
                <p className="fw600 mb10 ff-heading dark-color">
                  {detail.label}
                </p>
              </div>
              <div className="pd-list">
                <p className="text mb10">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PropertyDetails;
