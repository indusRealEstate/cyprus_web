"use client";
import Select from "react-select";
import PriceRange from "./PriceRange";
import Bedroom from "./Bedroom";
import Bathroom from "./Bathroom";
import Amenities from "./Amenities";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AdvanceFilterModal = () => {
  const router = useRouter();
  const catOptions = [
    { value: "all", label: "All" },
    { value: "house", label: "Houses" },

    { value: "office", label: "Office" },
    { value: "apartment", label: "Apartments" },
    { value: "villa", label: "Villa" },
  ];

  const locationOptions = [
    { value: "All Cities", label: "All Cities" },
    { value: "Paphos", label: "Paphos" },
    { value: "Limassol", label: "Limassol" },
  ];

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#89ada3"
          : isHovered
          ? "#e7f7f3"
          : isFocused
          ? "#89ada3"
          : undefined,
      };
    },
  };

  const [propertyTypes, setPropertyTypes] = useState(["all"]);
  const [priceRange, setPriceRange] = useState([1500, 10000000]);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathroms, setBathroms] = useState(0);
  const [location, setLocation] = useState("All Cities");
  const [squirefeet, setSquirefeet] = useState([]);
  const [categories, setCategories] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState();

  useEffect(() => {
    filterFunctions?.setSquirefeet([min, max]);
  }, [min, max]);

  const filterFunctions = {
    setPropertyTypes,
    setPriceRange,
    setBedrooms,
    setBathroms,
    setLocation,
    setSquirefeet,
    setCategories,
    categories,
  };

  return (
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header pl30 pr30">
          <h5 className="modal-title" id="exampleModalLabel">
            More Filter
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        {/* End modal-header */}

        <div className="modal-body pb-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="widget-wrapper">
                <h6 className="list-title mb20">Price Range</h6>
                <div className="range-slider-style modal-version">
                  <PriceRange filterFunctions={filterFunctions} />
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Type</h6>
                <div className="form-style2 input-group">
                  <Select
                    defaultValue={[catOptions[0]]}
                    name="colors"
                    options={catOptions}
                    styles={customStyles}
                    className="select-custom"
                    classNamePrefix="select"
                    required
                    onChange={(e) => filterFunctions.setPropertyTypes(e.value)}
                  />
                </div>
              </div>
            </div>
            {/* End .col-6 */}

            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Property ID</h6>
                <div className="form-style2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="RT04949213"
                  />
                </div>
              </div>
            </div>
            {/* End .col-6 */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Bedrooms</h6>
                <div className="d-flex">
                  <Bedroom filterFunctions={filterFunctions} />
                </div>
              </div>
            </div>
            {/* End .col-md-6 */}

            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Bathrooms</h6>
                <div className="d-flex">
                  <Bathroom filterFunctions={filterFunctions} />
                </div>
              </div>
            </div>
            {/* End .col-md-6 */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Location</h6>
                <div className="form-style2 input-group">
                  <Select
                    defaultValue={[locationOptions[0]]}
                    name="colors"
                    styles={customStyles}
                    options={locationOptions}
                    className="select-custom"
                    classNamePrefix="select"
                    required
                    onChange={(e) => filterFunctions.setLocation(e.value)}
                  />
                </div>
              </div>
            </div>
            {/* End .col-md-6 */}

            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Square Metre</h6>
                <div className="space-area">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="form-style1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Min."
                        onChange={(e) => setMin(e.target.value)}
                      />
                    </div>
                    <span className="dark-color">-</span>
                    <div className="form-style1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Max"
                        onChange={(e) => setMax(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End .col-md-6 */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div className="widget-wrapper mb0">
                <h6 className="list-title mb10">Amenities</h6>
              </div>
            </div>
            <Amenities filterFunctions={filterFunctions} />
          </div>
        </div>
        {/* End modal body */}

        <div className="modal-footer justify-content-between">
          <button className="reset-button">
            <span className="flaticon-turn-back" />
            <u>Reset all filters</u>
          </button>
          <div className="btn-area">
            <button
              data-bs-dismiss="modal"
              type="submit"
              className="ud-btn btn-thm"
              onClick={() => {
                if (squirefeet != [0, undefined]) {
                  console.log(squirefeet);
                  router.push(
                    `/search-results?price=${priceRange}&category=${propertyTypes}&bed=${bedrooms}&bath=${bathroms}&location=${location.replace(
                      / /,
                      "+"
                    )}&sqm=${squirefeet}&amenities=${categories.map((c) =>
                      c.replace(/ /, "+")
                    )}`
                  );
                } else if (categories.length != 0) {
                  router.push(
                    `/search-results?price=${priceRange}&category=${propertyTypes}&bed=${bedrooms}&bath=${bathroms}&location=${location.replace(
                      / /,
                      "+"
                    )}&amenities=${categories.map((c) => c.replace(/ /, "+"))}`
                  );
                } else {
                  router.push(
                    `/search-results?price=${priceRange}&category=${propertyTypes}&bed=${bedrooms}&bath=${bathroms}&location=${location.replace(
                      / /,
                      "+"
                    )}`
                  );
                }
              }}
            >
              <span className="flaticon-search align-text-top pr10" />
              Search
            </button>
          </div>
        </div>
        {/* End modal-footer */}
      </div>
    </div>
  );
};

export default AdvanceFilterModal;
