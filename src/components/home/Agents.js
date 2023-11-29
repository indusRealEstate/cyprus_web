/** @format */

"use client";
import { getExclusiveAgents } from "@/api/pages/agents";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useLayoutEffect } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Skeleton } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Agents = () => {
  const [agentData, setAgentData] = useState([]);
  const [loaded, setLoaded] = useState([]);

  useEffect(() => {}, [loaded]);
  useEffect(() => {
    getExclusiveAgents().then((res) => {
      setAgentData(res);
    });
  }, [agentData]);

  if (agentData.length == 0) {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            height: "10rem",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={40} />
        </Box>
      </>
    );
  } else {
    return (
      <>
        <Swiper
          spaceBetween={30}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".agent_next__active",
            prevEl: ".agent_prev__active",
          }}
          pagination={{
            el: ".agent_pagination__active",
            clickable: true,
          }}
          breakpoints={{
            300: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
          autoplay={{ delay: 3000 }} // Set the desired delay for autoplay
        >
          <div className="row">
            {agentData.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="col">
                  <div
                    className="card h-100 border border-0"
                    style={{
                      overflow: "hidden",
                    }}
                  >
                    <div className="item" key={index}>
                      <Link
                        href={{
                          pathname: "/agent-details",
                          query: {
                            id: data.agent_id,
                          },
                        }}
                      >
                        <div className="team-style1">
                          <div
                            className="card-header p-0 bg-light"
                            style={{
                              borderRadius: "15px",
                            }}
                          >
                            <div
                              className="team-img mobile-agent-image-container"
                              style={{
                                width: "210px",
                                height: "240px",
                              }}
                            >
                              {!loaded.includes(data.agent_id) && (
                                <Skeleton
                                  // sx={{ bgcolor: "grey.100" }}
                                  variant="rectangular"
                                  width={217}
                                  height={248}
                                />
                              )}

                              <img
                                width={217}
                                height={248}
                                className={`${
                                  !loaded.includes(data.agent_id)
                                    ? "opacity-0 position-absolute cover mobile-agent-image"
                                    : "opacity-100 cover mobile-agent-image card-img-top"
                                }`}
                                src={`https://alsimatower.ae/int_web_api/media/agents/${data.agent_id}/${data.image}`}
                                alt="agent team"
                                onLoad={() => {
                                  if (!loaded.includes(data.agent_id)) {
                                    loaded.push(data.agent_id);
                                    setLoaded(loaded);
                                  }
                                }}
                              />
                            </div>
                          </div>
                          <div className="team-content pt20">
                            <h6 className="name mb-1 text-uppercase">
                              {data.fname + " " + data.lname}
                            </h6>
                            <p className="text fz15 mb-0">{data.role}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>

          {/* {dataLoaded ? agentData.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="item" key={index}>
                <Link href={`/agent-single/${data.agent_id}`}>
                  <div className="team-style1">
                    <div className="team-img">
                      
                      <Image
                        width={217}
                        height={248}
                        loading="lazy"
                        className="agent-image"
                        src={`https://premium-realtor.com/assets/agents/${data.image}`}
                        alt="agent team"
                      />
                    </div>
                    <div className="team-content pt20">
                      <h6 className="name mb-1 text-uppercase">{data.fname  + " " + data.lname}</h6>
                      <p className="text fz15 mb-0">{data.role}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          )) : ""} */}
        </Swiper>
      </>
    );
  }
};

export default Agents;
