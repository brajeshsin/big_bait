"use client";
import React, { useRef } from "react";
import Container from "../Container";
import { Chart } from "./Chart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

const Tokenomics = () => {
  const imgRef = useRef();

  useGSAP(() => {
    let split = SplitText.create(".splitText", { type: "words, chars" });
    gsap.to(imgRef?.current, {
      scrollTrigger: {
        trigger: ".box",
        start: "top bottom",
        scrub: 1,
        markers: true,
      },
      y: -300,
      stagger: 1,
    });

    gsap.from(split.chars, {
      scrollTrigger: {
        trigger: ".box",
        start: "top bottom",
        markers: true,
      },
      duration: 1,
      y: 100,
      autoAlpha: 0,
    });
  }, {});
  return (
    <div
      className="box bg-bgGreen flex items-center justify-center flex-col overflow-hidden py-20 relative lg:pt-52"
      style={{
        backgroundImage: "url(/grain.svg)",
        backgroundRepeat: "repeat",
      }}
    >
      <div>
        <p className="text-base text-customgreen splitText">
          It’s always about that
        </p>
        <p className="font-dela text-customgreen text-3xl lg:text-9xl text-center splitText">
          TOKENOMICS
        </p>
      </div>
      <img
        src="/tokenomics.svg"
        alt=""
        ref={imgRef}
        className="absolute hidden lg:flex"
      />
      <Container>
        <div
          className="md:h-[650px] bg-darkGreen rounded-[4rem] border-4 border-black relative z-10 mt-10 lg:mt-52"
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
          <div>
            <Chart />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tokenomics;
