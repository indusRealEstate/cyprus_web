import DefaultHeader from "@/components/common/DefaultHeader";
import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/home/footer";

import PropertyGallery from "@/components/property/property-single-style/single-v4/property-gallery";

import PropertyDetailsContent from "./contents";

// export async function generateStaticParams() {
//   // Call an external API endpoint to get posts
//   const res = await fetch(
//     `https://alsimatower.ae/int_web_api/listings/get_all_listings.php`,
//     {
//       method: "GET",
//     }
//   );
//   const props = await res.json();

//   return props.map((p) => ({
//     id: p.prop_id,
//   }));
// }

export async function generateMetadata({ params }) {
  const staticData = await fetch(
    `https://alsimatower.ae/int_web_api/listings/get_property_details.php`,
    {
      cache: "force-cache",
      method: "POST",
      body: JSON.stringify({
        prop_id: params.id,
      }),
    }
  );

  const data = await staticData.json();
  return {
    title: `${data.country}, ${data.property}`,
  };
}

async function PropertyPage({ params }) {
  const staticData = await fetch(
    `https://alsimatower.ae/int_web_api/listings/get_property_details.php`,
    {
      cache: "force-cache",
      method: "POST",
      body: JSON.stringify({
        prop_id: params.id,
      }),
    }
  );

  const data = await staticData.json();

  return (
    <>
      <div id="divcontents">
        {/* Main Header Nav */}
        <DefaultHeader />
        {/* End Main Header Nav */}

        {/* Mobile Nav  */}
        <MobileMenu />
        {/* End Mobile Nav  */}

        {/* Property Slider Gallery */}
        <section className="pt20 pb60 bgc-white">
          <PropertyGallery id={data.prop_id} images={data.images} />
        </section>
        {/* End Property Slider Gallery */}

        {/* Property All Single V4 */}

        <PropertyDetailsContent data={data} params={params} />
        {/* End Property All Single V4  */}

        {/* Start Our Footer */}
        <section className="footer-style1 at-home6 pt60 pb-0">
          <Footer />
        </section>
        {/* End Our Footer */}
      </div>
    </>
  );
}

export default PropertyPage;
