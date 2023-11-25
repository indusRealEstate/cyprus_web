"use client";

import { useAppSelector } from "@/redux/store";
import Features from "@/components/blog/blog-single/Features";
import Image from "next/image";
import ReviewBoxForm from "@/components/blog/blog-single/ReviewBoxForm";
import { ch_tr, en_tr, ru_tr } from "@/lang";

const InvestCyprusContent = () => {
  const lang = useAppSelector((state) => state.langReducer);

  const getLang = (lang) => {
    switch (lang) {
      case "en":
        return en_tr.invest_in_cyprus;
      case "ru":
        return ru_tr.invest_in_cyprus;
      case "ch":
        return ch_tr.invest_in_cyprus;
      default:
        return en_tr.invest_in_cyprus;
    }
  };
  return (
    <>
      <div className="container">
        <div className="roww" data-aos="fade-up" data-aos-delay="0">
          <div className="col-xl-8 offset-xl-2">
            <div className="ui-content mt40 mb60">
              <h4 className="mb10">1. {getLang(lang).point_1.title}</h4>
              <p className="mb25 ff-heading">
                {getLang(lang).point_1.sub_title_1}
              </p>
              <p className="ff-heading">{getLang(lang).point_1.sub_title_2}</p>
            </div>

            <div className="blockquote-style1 mb60">
              <blockquote className="blockquote">
                <p className="fst-italic fz15 fw500 ff-heading">
                  {getLang(lang).point_1.quote}
                </p>
                {/* <h6 className="quote-title">Luis Pickford</h6> */}
              </blockquote>
            </div>
            {/* End  blockquote*/}

            <div className="col-12 ui-content">
              <h4 className="title">2. {getLang(lang).point_2.title}</h4>
            </div>

            <div className="row">
              <Features features={getLang(lang).point_2.features} />
            </div>
            {/* End .row */}

            <div className="col-lg-12 mt40">
              <Image
                width={804}
                height={470}
                priority
                src="/images/about/Real/minthis_neighbourhood.webp"
                alt="blog"
                className="bdrs12 post-img-2 w-100 h-100 cover"
              />
            </div>
            {/* End .col-12 */}

            <div className="ui-content mt40 mb30">
              <h4 className="mb10">3. {getLang(lang).point_3.title}</h4>
              <div className="custom_bsp_grid">
                <ul className="list-style-type-bullet p-0 ml20">
                  <li>{getLang(lang).point_3.li_1}</li>
                  <li>{getLang(lang).point_3.li_2}</li>
                  <li>{getLang(lang).point_3.li_3}</li>
                </ul>
              </div>
            </div>
            {/* End .i-content */}

            {/* <div className="bdrt1 bdrb1 d-block d-sm-flex justify-content-between pt50 pt30-sm pb50 pb30-sm">
                <div className="blog_post_share d-flex align-items-center mb10-sm">
                  <span className="mr30">Share this post</span>
                  <Social />
                </div>
                <div className="bsp_tags d-flex">
                  <Tags />
                </div>
              </div> */}
            {/* End share social and tags */}

            {/* <TopComments /> */}
            {/* End TopComments */}

            {/* <Pagination /> */}
            {/* End Blog Single pagination */}

            {/* <AllReviews /> */}
            {/* End  AllReviews */}

            <div className="bsp_reveiw_wrt">
              <h6 className="fz17">
                {lang == "en"
                  ? "Contact Us"
                  : lang == "ru"
                  ? "Связаться с нами"
                  : "联系我们"}
              </h6>
              <ReviewBoxForm lang={lang} />
            </div>
            {/* End ReviewBoxForm */}
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestCyprusContent;
