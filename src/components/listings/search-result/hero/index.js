"use client";

import AdvanceFilterModal from "@/components/common/advance-filter-two";
import HeroContent from "./HeroContent";

const Hero = ({
  filterFunctions,
  currentActiveTab,
  currentPropertyType,
  currentSearchQuery,
  lang,
}) => {
  return (
    <>
      <div className="inner-banner-style1 text-center">
        <h2 className="hero-title animate-up-3">
          {lang == "en"
            ? "Find Your Dream Home"
            : lang == "ru"
            ? "Найдите дом своей мечты"
            : "找到您的梦想家园"}
        </h2>
        <p className="hero-text animate-up-3">
          {lang == "en"
            ? "Browse through our collections"
            : lang == "ru"
            ? "Просмотрите наши коллекции"
            : "浏览我们的收藏"}
        </p>
        <HeroContent
          lang={lang}
          filterFunctions={filterFunctions}
          currentActiveTab={currentActiveTab}
          currentSearchQuery={currentSearchQuery}
        />
      </div>
      {/* End Hero content */}

      {/* <!-- Advance Feature Modal Start --> */}
      <div className="advance-feature-modal">
        <div
          className="modal fade"
          id="advanceSeachModal"
          tabIndex={-1}
          aria-labelledby="advanceSeachModalLabel"
          aria-hidden="true"
        >
          <AdvanceFilterModal
            filterFunctions={filterFunctions}
            currentPropertyType={currentPropertyType}
          />
        </div>
      </div>
      {/* <!-- Advance Feature Modal End --> */}
    </>
  );
};

export default Hero;
