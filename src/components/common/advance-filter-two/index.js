"use client";
import Select from "react-select";
import PriceRange from "./PriceRange";
import Bedroom from "./Bedroom";
import Bathroom from "./Bathroom";
import Amenities from "./Amenities";
import { useEffect, useState } from "react";

const AdvanceFilterModal = ({ filterFunctions, currentPropertyType }) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState();

  useEffect(() => {
    filterFunctions?.handlesquirefeet([min, max]);
  }, [min, max]);

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
                    defaultValue={
                      currentPropertyType != null
                        ? [
                            catOptions.find(
                              (op) => op.value == currentPropertyType[0]
                            ),
                          ]
                        : [catOptions[0]]
                    }
                    name="colors"
                    options={catOptions}
                    styles={customStyles}
                    onChange={(e) =>
                      filterFunctions?.setPropertyTypes([e.value])
                    }
                    className="select-custom"
                    classNamePrefix="select"
                    required
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
                    className="select-custom filterSelect"
                    value={{
                      value: filterFunctions?.location,
                      label: filterFunctions?.location,
                    }}
                    classNamePrefix="select"
                    onChange={(e) => filterFunctions?.handlelocation(e.value)}
                    required
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
                        type="number"
                        className="form-control filterInput"
                        onChange={(e) => setMin(e.target.value)}
                        placeholder="Min."
                      />
                    </div>
                    <span className="dark-color">-</span>
                    <div className="form-style1">
                      <input
                        type="number"
                        className="form-control filterInput"
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
          <button
            className="reset-button"
            onClick={() => filterFunctions?.resetFilter()}
          >
            <span className="flaticon-turn-back" />
            <u>Reset all filters</u>
          </button>
          <div className="btn-area">
            <button type="submit" className="ud-btn btn-thm">
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
