"use client";
import { getAgentDetails } from "@/api/pages/agents";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import FormContact from "@/components/property/FormContact";

import ProfessionalInfo from "@/components/property/ProfessionalInfo";
import ListingItemsContainer from "@/components/property/agency-single/ListingItems";

import SingleAgentCta from "@/components/property/agent-single/SingleAgentCta";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const metadata = {
  title: "Agent Single || Homez - Real Estate NextJS Template",
};

const AgentDetailsPage = ({}) => {
  const searchParams = useSearchParams();
  const params = searchParams.get("id");

  const [data, setData] = useState("");
  useEffect(() => {
    getAgentDetails(params).then((res) => {
      setData(res);
    });
  }, [data]);
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Agent Single Section Area */}
      <section className="agent-single pt60">
        <div className="cta-agent bgc-thm-light mx-auto maxw1600 pt60 pb60 bdrs12 position-relative mx20-lg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7">
                <SingleAgentCta id={params} agentDetails={data} />
                <div className="img-box-11 position-relative d-none d-xl-block">
                  <Image
                    width={120}
                    height={120}
                    className="img-1 spin-right"
                    src="/images/about/element-3.png"
                    alt="agents"
                  />
                  <Image
                    width={41}
                    height={11}
                    className="img-2 bounce-x"
                    src="/images/about/element-5.png"
                    alt="agents"
                  />
                  <Image
                    width={57}
                    height={49}
                    className="img-3 bounce-y"
                    src="/images/about/element-7.png"
                    alt="agents"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End cta-agent */}

        <div className="container">
          <div className="row wow fadeInUp" data-aos-delay="300">
            <div className="col-lg-8 pr40 pr20-lg">
              <div className="row">
                <div className="col-lg-12">
                  <div className="agent-single-details mt30 pb30 bdrb1">
                    <h6 className="fz17 mb30">About Agent</h6>
                    {data.about == undefined ? (
                      <Skeleton
                        variant="rectangular"
                        height={90}
                        style={{
                          borderRadius: "4px",
                        }}
                      />
                    ) : (
                      <p className="text">
                        {new String(data.about).substring(0, 400)}
                      </p>
                    )}
                    {new String(data.about).length > 400 ? (
                      <>
                        <div className="agent-single-accordion">
                          <div
                            className="accordion accordion-flush"
                            id="accordionFlushExample"
                          >
                            <div className="accordion-item">
                              <div
                                id="flush-collapseOne"
                                className="accordion-collapse collapse"
                                aria-labelledby="flush-headingOne"
                                data-bs-parent="#accordionFlushExample"
                                style={{}}
                              >
                                <div className="accordion-body p-0">
                                  <p className="text">
                                    {new String(data.about).substring(400)}
                                  </p>
                                </div>
                              </div>
                              <h2
                                className="accordion-header"
                                id="flush-headingOne"
                              >
                                <button
                                  className="accordion-button p-0 collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-collapseOne"
                                  aria-expanded="false"
                                  aria-controls="flush-collapseOne"
                                >
                                  Show more
                                </button>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </div>
              {/* End .row */}

              {data.agent_id == undefined ? (
                <Box
                  sx={{
                    display: "flex",
                    height: "15rem",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress size={30} />
                </Box>
              ) : (
                <ListingItemsContainer agentId={data.agent_id} />
              )}

              {/* <div className="row">
                <div className="col-lg-12">
                  <AllReviews />

                  <div className="bsp_reveiw_wrt">
                    <h6 className="fz17">Leave A Review</h6>
                    <ReviewBoxForm />
                  </div>
                </div>
              </div> */}
            </div>
            {/* End .col-lg-8 */}

            <div className="col-lg-4">
              <div className="agent-single-form home8-contact-form default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white position-relative">
                <h4 className="form-title mb25">Contact Form</h4>
                <FormContact />
              </div>
              <div className="agen-personal-info position-relative bgc-white default-box-shadow1 bdrs12 p30 mt30">
                <ProfessionalInfo />
              </div>
            </div>
            {/* End .col-lg-4 */}
          </div>
        </div>
      </section>
      {/* End Agent Single Section Area */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default AgentDetailsPage;
