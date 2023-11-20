"use client";

import React from "react";

const PropertyType = ({ filterFunctions, lang }) => {
  const options = [
    {
      label: lang == "en" ? "Houses" : lang == "ru" ? "Дома" : "房屋",
      val: "house",
    },

    {
      label: lang == "en" ? "Apartments" : lang == "ru" ? "Квартиры" : "公寓",
      defaultChecked: true,
      val: "appartment",
    },
    {
      label: lang == "en" ? "Office" : lang == "ru" ? "Офис" : "办公室",
      val: "office",
    },
    {
      label: lang == "en" ? "Villa" : lang == "ru" ? "Вилла" : "别墅",
      val: "villa",
    },
  ];

  return (
    <>
      <label className="custom_checkbox">
        {lang == "en" ? "All" : lang == "ru" ? "Все" : "全部"}
        <input
          type="checkbox"
          checked={!filterFunctions?.propertyTypes.length}
          onChange={(e) => {
            filterFunctions?.setPropertyTypes([]);
          }}
        />
        <span className="checkmark" />
      </label>
      {options.map((option, index) => (
        <label className="custom_checkbox" key={index}>
          {option.label}
          <input
            type="checkbox"
            checked={filterFunctions?.propertyTypes.includes(option.val)}
            onChange={(e) => {
              filterFunctions.handlepropertyTypes(option.val);
            }}
          />
          <span className="checkmark" />
        </label>
      ))}
    </>
  );
};

export default PropertyType;
