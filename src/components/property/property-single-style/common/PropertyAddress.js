import React from "react";

const PropertyAddress = ({ data }) => {
  const addresses = [
    {
      address: data.location,
      city: data.city,
      zipCode: data.zip_code,
      // area: "Brookside",
      country: data.country,
    },
    // {
    //   address: "10 Downing Street",
    //   city: "London",
    //   state: "Greater London",
    //   zipCode: "SW1A 2AA",
    //   area: "Westminster",
    //   country: "United Kingdom",
    // },
  ];

  return (
    <>
      {addresses.map((address, index) => (
        <div
          key={index}
          className={`col-md-6 col-xl-5 ${index === 1 ? "offset-xl-2" : ""}`}
        >
          <div className="d-flex justify-content-between">
            <div className="pd-list">
              <p className="fw600 mb10 ff-heading dark-color">Address</p>
              <p className="fw600 mb10 ff-heading dark-color">Zip Code</p>
              <p className="fw600 mb10 ff-heading dark-color">City</p>
              <p className="fw600 mb-0 ff-heading dark-color">State/county</p>
            </div>
            <div className="pd-list">
              <p className="text mb10">{address.address}</p>
              <p className="text mb10">{address.zipCode}</p>
              <p className="text mb10">{address.city}</p>
              <p className="text mb-0">{address.country}</p>
            </div>
          </div>
        </div>
      ))}
      {/* End col */}

      <div className="col-md-12">
        <iframe
          className="position-relative bdrs12 mt30 h250"
          loading="lazy"
          src={`https://maps.google.com/maps?q=${addresses[0].address}&t=m&z=14&output=embed&iwloc=near`}
          title={addresses[0].address}
          aria-label={addresses[0].address}
        />
      </div>
      {/* End col */}
    </>
  );
};

export default PropertyAddress;
