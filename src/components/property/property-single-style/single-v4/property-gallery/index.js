import GalleryBox from "./GalleryBox";
import RealMapView from "./RealMapView";

const PropertyGallery = ({ id, images }) => {
  return (
    <>
      <div className="ps-v4-hero-tab">
        <div className="tab-content overflow-visible" id="pills-tabContent2">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="container">
              <div
                className="row position-relative"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="col-lg-12">
                  <div className="ps-v4-hero-slider h-100 position-relative">
                    <GalleryBox id={id} images={images} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <RealMapView />
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyGallery;
