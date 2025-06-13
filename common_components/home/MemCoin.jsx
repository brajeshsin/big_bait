import React from "react";

const MemCoin = () => {
  return (
    <div className="container flex items-center justify-center flex-col py-20">
      <p className="text-customgreen text-4xl lg:text-9xl 2xl:text-[12rem] font-dela">
        MEMECOIN
      </p>
      <div className="w-full my-12 grid grid-cols-12">
        {textItems?.map((item, idx) => {
          return (
            <div
              className="col-span-6 lg:col-span-2 flex items-center justify-center"
              key={idx}
            >
              <p className=" text-white font-bricolage hover:text-customgreen cursor-pointer text-xl hover:scale-110 transition-all duration-200 delay-200 font-semibold ">
                {item?.label}
              </p>
            </div>
          );
        })}
      </div>
      <button
        style={{
          borderColor: "rgb(0, 0, 0)",
          boxShadow: "rgb(0, 0, 0) 2px 4px 0px 0px",
          backgroundColor: "rgb(252, 250, 194)",
          borderBottomWidth: "4px",
          borderRightWidth: "4px",
          borderTopWidth: "4px",
          borderStyle: "solid",
        }}
        className="min-w-fit px-14 py-4 rounded-full font-bricolage font-semibold text-4xl transition-all delay-100 duration-300 hover:scale-110 cursor-pointer"
      >
        Buy Template
      </button>
      <p className="font-bricolage text-white mt-10">
        → Cryptocurrency Trading Risk Policy
      </p>
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
