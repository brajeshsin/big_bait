"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

const logos = [
  "Gate.io",
  "Gate.io",
  "Gate.io",
  "Gate.io",
  "Gate.io",
  "Gate.io",
  "Gate.io",
];

export default function LogoSwiper() {
  return (
    <div className="container max-w-screen-xl mx-auto py-8 px-4 ">
      <div className="  flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] ">
        <Swiper
          modules={[Autoplay, FreeMode]}
          speed={10000}
          loop={true}
          freeMode={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
        >
          {logos.map((src, index) => (
            <SwiperSlide key={index}>
              <div className=" flex justify-center items-center gap-40">
                <button
                  className="bg-cream px-10 py-5 border-4 border-black rounded-full cursor-pointer hover:bg-customgreen text-black font-bold"
                  style={{ boxShadow: "2px 1px #000000" }}
                >
                  {src}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
