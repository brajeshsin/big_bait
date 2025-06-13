import React from "react";

const MemCoin = () => {
  return (
    <div className="container flex items-center justify-center flex-col">
      <p className="text-customgreen text-[12rem] font-dela">MEMECOIN</p>
      <div className="flex justify-around w-full">
        {textItems?.map((item, idx) => {
          return (
            <p
              className="text-white font-bricolage hover:text-customgreen cursor-pointer"
              key={idx}
            >
              {item?.label}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default MemCoin;

const textItems = [
  {
    label: "About",
    nav: "#",
  },
  {
    label: "Features",
    nav: "#",
  },
  {
    label: "Tokenomics",
    nav: "#",
  },
  {
    label: "Roadmap",
    nav: "#",
  },
  {
    label: "How to Buy",
    nav: "#",
  },
  {
    label: "FAQ",
    nav: "#",
  },
];
