import React from "react";

const PropertyDetails = ({ data }) => {
  var formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "EUR",
  });
  const columns = [
    [
      {
        label: "Property ID",
        value: data.prop_id,
      },
      {
        label: "Price",
        value: formatter.format(data.price),
      },
      {
        label: "Property Size",
        value: data.total_area + " Sqft",
      },
      {
        label: "Bathrooms",
        value: data.bath,
      },
      {
        label: "Bedrooms",
        value: data.bed,
      },
    ],
    [
      {
        label: "Garage",
        value: data.parking,
      },
      {
        label: "Garage Size",
        value: data.parking_area + " Sqft",
      },
      {
        label: "Year Built",
        value: data.year_built,
      },
      {
        label: "Property Type",
        value: data.unit_type,
      },
      {
        label: "Property Status",
        value: data.unit_purpose == "sale" ? "For Sale" : "For Rent",
      },
    ],
  ];

  return (
    <div className="row">
      {columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className={`col-md-6 col-xl-4${
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
