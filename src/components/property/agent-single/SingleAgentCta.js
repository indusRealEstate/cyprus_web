"use client";
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

const SingleAgentCta = ({ id, agentDetails }) => {
  const [imgloading, setImageLoading] = useState(true);

  const agentData = {
    name: agentDetails.fname + " " + agentDetails.lname,
    company: "Indus Real Estate",
    img: `https://premium-realtor.com/api/media/agents/${agentDetails.agent_id}/${agentDetails.image}`,
    // reviews: "5.0 • 49 Reviews",
    phone1: agentDetails.phone,
    phone2: agentDetails.email,
    social: [
      { icon: "fab fa-facebook-f", link: "#" },
      { icon: "fab fa-twitter", link: "#" },
      { icon: "fab fa-instagram", link: "#" },
      { icon: "fab fa-linkedin-in", link: "#" },
    ],
  };

  useEffect(() => {}, [agentData]);

  return (
    <>
      <div className="agent-single d-sm-flex align-items-center">
        <div className="single-img mb30-sm">
          {imgloading && (
            <Skeleton
              variant="circle"
              width={172}
              height={172}
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
          )}
          <img
            width={172}
            height={172}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              position: imgloading ? "absolute" : "relative",
              opacity: imgloading ? "0" : "100",
            }}
            src={agentData.img}
            alt="agents"
            onLoad={() => setImageLoading(false)}
          />
        </div>
        {/* End single image */}
        <div className="single-contant ml30 ml0-xs">
          {agentData.name == "undefined undefined" ? (
            <Skeleton
              variant="rectangle"
              width={200}
              height={30}
              style={{
                borderRadius: "4px",
              }}
            />
          ) : (
            <h2 className="title mb-0">{agentData.name}</h2>
          )}

          {agentData.name == "undefined undefined" ? (
            <Skeleton
              className="mt-2"
              variant="rectangle"
              width={230}
              height={20}
              style={{
                borderRadius: "4px",
              }}
            />
          ) : (
            <p className="fz15">
              Sales Agent at <b>{agentData.company}</b>
            </p>
          )}

          {agentData.name == "undefined undefined" ? (
            <Skeleton
              className="mt-2"
              variant="rectangle"
              width={280}
              height={20}
              style={{
                borderRadius: "4px",
              }}
            />
          ) : (
            <div className="agent-meta mb15 d-md-flex align-items-center">
              <a className="text fz15 pe-2 bdrr1" href="#">
                <i className="fas fa-star fz10 review-color2 pr10" />
                {agentData.reviews}
              </a>
              <a className="text fz15 pe-2 ps-2 bdrr1" href="#">
                <i className="flaticon-call pe-1" />
                {agentData.phone1}
              </a>
              <a className="text fz15 ps-2" href="#">
                <i className="flaticon-smartphone pe-1" />
                {agentData.phone2}
              </a>
            </div>
          )}

          {agentData.name == "undefined undefined" ? (
            <Skeleton
              className="mt-2"
              variant="rectangle"
              width={130}
              height={20}
              style={{
                borderRadius: "4px",
              }}
            />
          ) : (
            <div className="agent-social">
              {agentData.social.map((socialItem, index) => (
                <a key={index} className="mr20" href={socialItem.link}>
                  <i className={socialItem.icon} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleAgentCta;
