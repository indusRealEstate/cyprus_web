"use client";

// import listings from "@/data/listings";
import React, { useState, useEffect } from "react";
import FeaturedListings from "./FeatuerdListings";
import TopFilterBar from "./TopFilterBar";
import Hero from "./hero";
import ScheduleTour from "@/components/property/property-single-style/sidebar/ScheduleTour";
import PaginationTwo from "../PaginationTwo";

export default function PropertyFilteringBanner({
  listings,
  prop_for,
  prop_type,
  search_text,
  lang,
}) {
  const [filteredData, setFilteredData] = useState([]);

  const [currentSortingOption, setCurrentSortingOption] = useState("Newest");

  const [sortedFilteredData, setSortedFilteredData] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);
  const [colstyle, setColstyle] = useState(false);
  const [pageItems, setPageItems] = useState([]);
  const [pageContentTrac, setPageContentTrac] = useState([]);

  useEffect(() => {
    setPageItems(
      sortedFilteredData.slice((pageNumber - 1) * 8, pageNumber * 8)
    );
    setPageContentTrac([
      (pageNumber - 1) * 8 + 1,
      pageNumber * 8,
      sortedFilteredData.length,
    ]);
  }, [pageNumber, sortedFilteredData]);

  const [listingStatus, setListingStatus] = useState(prop_for);
  const [propertyTypes, setPropertyTypes] = useState(prop_type);
  const [priceRange, setPriceRange] = useState([1500, 10000000]);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathroms, setBathroms] = useState(0);
  const [location, setLocation] = useState("All Cities");
  const [squirefeet, setSquirefeet] = useState([]);
  const [yearBuild, setyearBuild] = useState([]);
  const [categories, setCategories] = useState([]);

  const resetFilter = () => {
    setListingStatus("All");
    setPropertyTypes(["all"]);
    setPriceRange([1500, 10000000]);
    setBedrooms(0);
    setBathroms(0);
    setLocation("All Cities");
    setSquirefeet([]);
    setyearBuild([0, 2050]);
    setCategories([]);

    setCurrentSortingOption("Newest");
    document.querySelectorAll(".filterInput").forEach(function (element) {
      element.value = null;
    });

    document.querySelectorAll(".filterSelect").forEach(function (element) {
      element.value = "All Cities";
    });
  };
  const [searchQuery, setSearchQuery] = useState(search_text);

  const handlelistingStatus = (elm) => {
    setListingStatus((pre) => (pre == elm ? "All" : elm));
  };

  const handlepropertyTypes = (elm) => {
    if (elm == "all") {
      setPropertyTypes(listings);
    } else {
      setPropertyTypes((pre) =>
        pre.includes(elm) ? [...pre.filter((el) => el != elm)] : [...pre, elm]
      );
    }
  };
  const handlepriceRange = (elm) => {
    setPriceRange(elm);
  };
  const handlebedrooms = (elm) => {
    setBedrooms(elm);
  };
  const handlebathroms = (elm) => {
    setBathroms(elm);
  };
  const handlelocation = (elm) => {
    console.log(elm);
    setLocation(elm);
  };
  const handlesquirefeet = (elm) => {
    setSquirefeet(elm);
  };
  const handleyearBuild = (elm) => {
    setyearBuild(elm);
  };
  const handlecategories = (elm) => {
    setCategories((pre) =>
      pre.includes(elm) ? [...pre.filter((el) => el != elm)] : [...pre, elm]
    );
  };
  const filterFunctions = {
    handlelistingStatus,
    handlepropertyTypes,
    handlepriceRange,
    handlebedrooms,
    handlebathroms,
    handlelocation,
    handlesquirefeet,
    handleyearBuild,
    handlecategories,
    priceRange,
    listingStatus,
    propertyTypes,
    resetFilter,

    bedrooms,
    bathroms,
    location,
    squirefeet,
    yearBuild,
    categories,
    setPropertyTypes,
    setSearchQuery,
    setListingStatus,
  };

  useEffect(() => {
    const refItems = listings.filter((elm) => {
      if (listingStatus == "All") {
        return true;
      } else if (listingStatus == "Buy") {
        return elm.unit_purpose == "sale";
      } else if (listingStatus == "Rent") {
        return elm.unit_purpose == "rent";
      }
    });

    let filteredArrays = [];

    if (propertyTypes.length > 0) {
      if (propertyTypes[0] != "all") {
        const filtered = refItems.filter((elm) => {
          return propertyTypes.includes(elm.unit_type);
        });
        filteredArrays = [...filteredArrays, filtered];
      } else {
        filteredArrays = [refItems];
      }
    }
    filteredArrays = [
      ...filteredArrays,
      refItems.filter((el) => el.bed >= bedrooms),
    ];
    filteredArrays = [
      ...filteredArrays,
      refItems.filter((el) => el.bath >= bathroms),
    ];

    filteredArrays = [
      ...filteredArrays,
      refItems.filter(
        (el) =>
          el.city
            .toLocaleLowerCase()
            .includes(searchQuery.toLocaleLowerCase()) ||
          el.location
            .toLocaleLowerCase()
            .includes(searchQuery.toLocaleLowerCase()) ||
          el.property
            .toLocaleLowerCase()
            .includes(searchQuery.toLocaleLowerCase()) ||
          el.unit_type
            .toLocaleLowerCase()
            .includes(searchQuery.toLocaleLowerCase())
      ),
    ];

    filteredArrays = [
      ...filteredArrays,
      !categories.length
        ? [...refItems]
        : refItems.filter((elm) =>
            categories.every((elem) => elm.features.includes(elem))
          ),
    ];

    if (location != "All Cities") {
      filteredArrays = [
        ...filteredArrays,
        refItems.filter((el) => el.city == location),
      ];
    }

    if (priceRange.length > 0) {
      const filtered = refItems.filter(
        (elm) =>
          Number(elm.price) >= priceRange[0] &&
          Number(elm.price) <= priceRange[1]
      );
      filteredArrays = [...filteredArrays, filtered];
    }

    if (squirefeet.length > 0 && squirefeet[1]) {
      const filtered = refItems.filter(
        (elm) =>
          elm.total_area >= squirefeet[0] && elm.total_area <= squirefeet[1]
      );
      filteredArrays = [...filteredArrays, filtered];
    }

    if (yearBuild.length > 0) {
      const filtered = refItems.filter(
        (elm) =>
          elm.year_built >= yearBuild[0] && elm.year_built <= yearBuild[1]
      );
      filteredArrays = [...filteredArrays, filtered];
    }

    const commonItems = refItems.filter((item) =>
      filteredArrays.every((array) => array.includes(item))
    );

    setFilteredData(commonItems);
  }, [
    listingStatus,
    propertyTypes,
    priceRange,
    bedrooms,
    bathroms,
    location,
    squirefeet,
    yearBuild,
    categories,
    searchQuery,
  ]);

  useEffect(() => {
    setPageNumber(1);
    if (currentSortingOption == "Newest") {
      const sorted = [...filteredData].sort(
        (a, b) => a.year_built - b.year_built
      );
      setSortedFilteredData(sorted);
    } else if (currentSortingOption.trim() == "Price Low") {
      const sorted = [...filteredData].sort((a, b) => a.price - b.price);
      setSortedFilteredData(sorted);
    } else if (currentSortingOption.trim() == "Price High") {
      const sorted = [...filteredData].sort((a, b) => b.price - a.price);
      setSortedFilteredData(sorted);
    } else {
      setSortedFilteredData(filteredData);
    }
  }, [filteredData, currentSortingOption]);
  return (
    <>
      {/* Home Banner Style V1 */}
      <section
        className="property-banner-style1 p-0"
        style={{
          backgroundImage: "url(/images/search-banner.webp)",
        }}
      >
        <div className="inner-style1">
          <div className="container">
            <div className="row">
              <div className="col-xl-11 mx-auto">
                <Hero
                  lang={lang}
                  filterFunctions={filterFunctions}
                  currentActiveTab={prop_for == "Buy" ? "buy" : "rent"}
                  currentPropertyType={prop_type}
                  currentSearchQuery={search_text}
                />
              </div>
            </div>
          </div>
          {/* End .container */}
        </div>
      </section>
      {/* End Home Banner Style V1 */}

      {/* Breadcumb Sections */}
      <section className="breadcumb-section bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title text-dark">
                  {lang == "en"
                    ? "Searched Properties"
                    : lang == "ru"
                    ? "Поиск недвижимости"
                    : "搜索属性"}
                </h2>
                {/* <div className="breadcumb-list">
                  <a href="#" className="text-dark">
                    {lang == "en"
                      ? "Home"
                      : lang == "ru"
                      ? "Поиск недвижимости"
                      : "搜索属性"}
                  </a>
                  <a href="#" className="text-dark">
                    {listingStatus != "All"
                      ? listingStatus == "Buy"
                        ? "For Sale"
                        : "For Rent"
                      : "For All"}
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcumb Sections */}

      {/* Property Filtering */}
      <section className="pt0 pb90 bgc-f7">
        <div className="container">
          <div className="row gx-xl-5">
            <div className="col-lg-4">
              {/* <div className="list-sidebar-style1">
                <div className="widget-wrapper">
                  <h6 className="list-title">Mortgage Calculator</h6>
                  <MortgageCalculator />
                </div>
              </div> */}
              <div className="default-box-shadow1 bdrs12 bdr1 p-3 mb30-md bgc-white position-relative">
                <h4 className="form-title mb5">
                  {lang == "en"
                    ? "Schedule a tour"
                    : lang == "ru"
                    ? "Запланировать тур"
                    : "安排游览"}
                </h4>
                <p className="text">
                  {lang == "en"
                    ? "Choose your preferred day"
                    : lang == "ru"
                    ? "Выберите предпочитаемый день"
                    : "选择您喜欢的日子"}
                </p>
                <ScheduleTour lang={lang} />
              </div>
              {/* End .list-sidebar-style1 */}

              {/* <div className="list-sidebar-style1">
                <div className="widget-wrapper">
                  <h6 className="list-title">Recently Viewed</h6>
                  <RecentProperty />
                </div>
              </div> */}
              {/* End .list-sidebar-style1 */}
            </div>
            {/* End col-4 */}

            <div className="col-lg-8">
              <div className="row align-items-center mb20">
                <TopFilterBar
                  lang={lang}
                  pageContentTrac={pageContentTrac}
                  colstyle={colstyle}
                  setColstyle={setColstyle}
                  setCurrentSortingOption={setCurrentSortingOption}
                />
              </div>
              <div className="row mt15">
                <FeaturedListings colstyle={colstyle} data={pageItems} />
              </div>
              {/* End .row */}

              <div className="row text-center">
                <PaginationTwo
                  pageCapacity={8}
                  data={sortedFilteredData}
                  pageNumber={pageNumber}
                  setPageNumber={setPageNumber}
                />
              </div>
              {/* End .row */}
            </div>
            {/* End col-8 */}
          </div>
          {/* End TopFilterBar */}
        </div>
        {/* End .container */}
      </section>
      {/* Property Filtering */}
    </>
  );
}
