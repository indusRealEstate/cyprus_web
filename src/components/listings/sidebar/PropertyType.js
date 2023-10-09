"use client";

import React from "react";

const PropertyType = ({ filterFunctions }) => {
  const options = [
    { label: "Houses", val: "house" },

    { label: "Apartments", defaultChecked: true, val: "appartment" },
    { label: "Office", val: "office" },
    { label: "Villa", val: "villa" },
  ];

  return (
    <>
      <label className="custom_checkbox">
        All
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
