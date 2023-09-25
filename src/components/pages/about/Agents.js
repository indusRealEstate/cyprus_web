"use client";
import { getExclusiveAgents } from "@/api/pages/about";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import 'react-loading-skeleton/dist/skeleton.css';
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";


const Agents = () => {
  const [agentData, setAgentData] = useState("nothing");
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    // getAllData();
    getExclusiveAgents().then((res) => {
      setAgentData(res);
      setDataLoaded(true);
      console.log(res);
    });
  }, [])


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
        {dataLoaded ? agentData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="item" key={index}>
              <Link href={`/agent-single/${data.agent_id}`}>
                <div className="team-style1">
                  <div className="team-img">
                    <Image
                      width={217}
                      height={248}
                      className="agent-image"
                      src={`https://indusmanagement.ae/assets/agents/${data.image}`}
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
        )) : ""}
      </Swiper>
    </>
  );
};

export default Agents;
