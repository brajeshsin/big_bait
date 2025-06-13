"use client";
import React from "react";
import Container from "../Container";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IconCheck } from "@tabler/icons-react";

const RoadMap = () => {
  return (
    <div
      className="bg-bgGreen relative "
      style={{
        backgroundImage: "url(/grain.svg)",
        backgroundRepeat: "repeat",
      }}
    >
      <div
        className="w-full absolute h-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(15, 44, 35, 0) 0%, #0F2C23 100%)",
        }}
      ></div>
      <Container disablePadding>
        <div className="grid-cols-12 grid relative z-10 pt-20">
          <div className="col-span-12 lg:col-span-6 flex items-center md:items-start justify-center flex-col">
            <p className="text-customcream leading-1">We are on the</p>
            <p className="text-2xl xl:text-9xl xl:leading-28 font-dela text-customgreen">
              ROAD <br /> MAP
            </p>
            <p className="text-customcream leading-8">to heaven.</p>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <img src="/roadmap.svg" alt="" />
          </div>
          <div className="col-span-12 ">
            <Swiper
              loop={true}
              spaceBetween={50}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                1265: { slidesPerView: 2 },
                1465: { slidesPerView: 3 },
              }}
            >
              {cardItem?.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="bg-[#e4ebd7] min-h-[450px] rounded-t-full flex flex-col items-center justify-center xl:justify-start xl:items-start xl:p-25">
                      <div>
                        <p
                          style={{ color: item?.lableColor }}
                          className={`xl:text-lg 2xl:text-4xl font-dela`}
                        >
                          {item?.label}
                        </p>
                        <p className="font-bricolage font-normal xl:text-sm 2xl:text-xl my-2 text-black/90">
                          "{item?.subLabel}"
                        </p>
                      </div>
                      <ul className=" flex flex-col gap-2 mt-6">
                        {item?.listItem?.map((it, idx) => {
                          return (
                            <li key={idx} className="flex gap-1 items-center">
                              <div className=" border-black/50 border-2 rounded-xs h-3.5 w-3.5 flex items-center justify-center">
                                {item?.checked && (
                                  <IconCheck size={10} color="black" />
                                )}
                              </div>
                              <p className="text-darkGreen">{it}</p>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RoadMap;

const cardItem = [
  {
    label: "Stage 1:",
    lableColor: "#72c39a",
    subLabel: "GROWTH",
    listItem: ["Governance", "Incentive", "Partnership", "Scaling", "Visions"],
    checked: true,
  },
  {
    label: "Stage 2:",
    lableColor: "#5f06cd",
    subLabel: "GROWTH",
    listItem: ["Governance", "Incentive", "Partnership", "Scaling", "Visions"],
    checked: false,
  },
  {
    label: "Stage 3:",
    lableColor: "#3e584d",
    subLabel: "GROWTH",
    listItem: ["Governance", "Incentive", "Partnership", "Scaling", "Visions"],
    checked: false,
  },
  {
    label: "Stage 4:",
    lableColor: "#e77e29",
    subLabel: "GROWTH",
    listItem: ["Governance", "Incentive", "Partnership", "Scaling", "Visions"],
    checked: false,
  },
  {
    label: "Stage 5:",
    lableColor: "#3e584d",
    subLabel: "GROWTH",
    listItem: ["Governance", "Incentive", "Partnership", "Scaling", "Visions"],
    checked: false,
  },
  {
    label: "Stage 6:",
    lableColor: "#5f06cd",
    subLabel: "GROWTH",
    listItem: ["Governance", "Incentive", "Partnership", "Scaling", "Visions"],
    checked: false,
  },
];
