"use client";
import React from "react";
import Container from "../Container";
import { Chart } from "./Chart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

const Tokenomics = () => {
  return (
    <div
      className="bg-bgGreen flex items-center justify-center flex-col overflow-hidden py-20 "
      style={{
        backgroundImage: "url(/grain.svg)",
        backgroundRepeat: "repeat",
      }}
    >
      <div>
        <p className="text-base text-customgreen">It’s always about that</p>
        <p className="font-dela text-customgreen text-3xl lg:text-9xl text-center">
          TOKENOMICS
        </p>
      </div>
      <Container>
        <div
          className="h-[650px] bg-darkGreen rounded-[4rem] border-4 border-black"
          style={{
            backgroundImage: "url(/wave.svg)",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="py-8  flex items-center justify-center">
            <Swiper
              className="w-[96%]"
              modules={[Autoplay, FreeMode]}
              speed={10000}
              loop={true}
              freeMode={true}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              }}
            >
              {Array(20)
                .fill("i")
                .map((src, index) => (
                  <SwiperSlide key={index}>
                    <p className="text-customcream font-dela text-2xl">
                      Tokenomics
                    </p>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <Chart />
          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default Tokenomics;
