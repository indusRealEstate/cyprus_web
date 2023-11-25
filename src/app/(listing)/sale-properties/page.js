import DefaultHeader from "@/components/common/DefaultHeader";

import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/home/footer";

import ProperteyFiltering from "@/components/listings/ProperteyFiltering";

import SalePropertiesTitle from "./title";

export async function generateMetadata() {
  return {
    title: "Premium Realtor | Explore International Properties",
  };
}

const SaleProperties = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcumb Sections */}
      <SalePropertiesTitle />
      {/* End Breadcumb Sections */}

      {/* Property Filtering */}
      <ProperteyFiltering prop_for="All" />

      {/* Property Filtering */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home6 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default SaleProperties;
