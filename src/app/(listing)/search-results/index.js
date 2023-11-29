"use client";
import { getAllListings } from "@/api";
import DefaultHeader from "@/components/common/DefaultHeader";
import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/home/footer";

import PropertyFilteringBanner from "@/components/listings/search-result/PropertyFilteringBanner";
import { useAppSelector } from "@/redux/store";
import { Box, CircularProgress } from "@mui/material";
import { useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";

const SearchResultPage = () => {
  const lang = useAppSelector((state) => state.langReducer);

  const searchParams = useSearchParams();
  const [allData, setAllData] = useState([]);
  const [prop_for, setPropFor] = useState("");
  const [prop_type, setPropType] = useState("");
  const [search_text, setSearchText] = useState("");

  const [priceRange, setPriceRange] = useState("");
  const [bed, setBed] = useState("");
  const [bath, setBath] = useState("");
  const [location, setLocation] = useState("");
  const [sqft, setSqft] = useState("");
  const [amenities, setAmenities] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    setPropFor(searchParams.get("prop_type"));
    setPropType(searchParams.get("category"));
    setSearchText(searchParams.get("search_text"));

    setPriceRange(searchParams.get("price"));
    setBed(searchParams.get("bed"));
    setBath(searchParams.get("bath"));
    setLocation(searchParams.get("location"));
    setSqft(searchParams.get("sqft"));
    setAmenities(searchParams.get("amenities"));
    setCity(searchParams.get("city"));

    // console.log(prop_type);

    getAllListings().then((res) => setAllData(res));
  }, [allData, prop_for, prop_type]);

  const getPropertyType = (type) => {
    switch (type) {
      case null:
        return ["all"];
      case "Houses":
        return ["house"];
      case "Office":
        return ["office"];
      case "Apartments":
        return ["apartment"];
      case "Villa":
        return ["villa"];
      default:
        return ["all"];
    }
  };

  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Home Banner Style V1 */}
      {allData.length != 0 ? (
        <PropertyFilteringBanner
          lang={lang}
          listings={allData}
          prop_for={
            prop_for == null ? "Buy" : prop_for == "buy" ? "Buy" : "Rent"
          }
          prop_type={getPropertyType(prop_type)}
          search_text={search_text == null ? "" : search_text}
        />
      ) : (
        <Box
          sx={{
            display: "flex",
            height: "30rem",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}

      {/* Property Filtering */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home6 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default SearchResultPage;
