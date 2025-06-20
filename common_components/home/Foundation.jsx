import React from "react";
import Container from "../Container";

const Foundation = () => {
  return (
    <div
      className="box bg-darkGreen flex items-center justify-center flex-col overflow-hidden py-20"
      style={{
        backgroundImage: "url(/grain.svg)",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="flex items-center justify-center flex-col">
        <p className="text-base text-customcream splitText">We got really</p>
        <p className="font-dela text-customgreen text-3xl lg:text-7xl text-center splitText">
          STRONG <br /> FOUNDATION
        </p>
      </div>
      <Container>
        <div className="flex gap-10 flex-col md:flex-row">
          {cardData?.map((item, idx) => {
            return (
              <div key={idx} className="flex flex-col gap-3 ">
                <div className="h-64 xl:h-96 bg-[#e4ebd7] flex items-end justify-center rounded-t-full">
                  <img
                    src={item?.img}
                    alt={item?.img}
                    className="h-full xl:h-80"
                  />
                </div>
                <p className="font-dela text-customgreen text-3xl">
                  {item?.title}
                </p>
                <div className="font-bricolage text-customcream font-medium">
                  {item?.subTitle}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Foundation;

const cardData = [
  {
    img: "/found1.avif",
    title: (
      <p>
        Strategic <br /> Partnerships
      </p>
    ),
    subTitle:
      "BigBait has forged strategic partnerships with leading players in the cryptocurrency industry, as well as with key influencers and platforms in the meme community.",
  },
  {
    img: "/found2.avif",
    title: (
      <p>
        Community <br /> Support
      </p>
    ),
    subTitle:
      "Through active engagement, open communication, and collaborative initiatives, BigBait fosters a strong sense of community spirit among its members.",
  },
  {
    img: "/found3.avif",
    title: (
      <p>
        Growing <br /> Ecosystem
      </p>
    ),
    subTitle:
      "With a growing network of users, developers, and investors, BigBait offers unparalleled opportunities for collaboration, networking, and mutual support.",
  },
];
