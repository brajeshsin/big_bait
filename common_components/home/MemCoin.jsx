import React from "react";

const MemCoin = () => {
  return (
    <div
      className="flex items-center justify-center flex-col bg-bgGreen overflow-hidden "
      style={{
        backgroundImage: "url(/grain.svg)",
        backgroundRepeat: "repeat",
      }}
    >
      <p className="text-customgreen text-4xl lg:text-9xl 2xl:text-[12rem] font-dela">
        BigBait
      </p>
      <div className="w-full xl:w-[80%] my-12 grid grid-cols-12">
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
        Play Bigbait
      </button>
      <p className="font-bricolage text-white mt-10 mb-20">
        → Cryptocurrency Trading Risk Policy
      </p>
      <div className="grid grid-cols-12 relative overflow-clip min-h-96 lg:gap-30">
        <img
          src="/bottomAvatar.svg"
          alt=""
          className="absolute h-[32rem] right-1/3 -bottom-50 z-10 lg:flex hidden"
        />
        <div className=" hidden lg:col-span-6 lg:flex items-end relative">
          <p className="absolute z-10 right-56 bottom-12 font-dela text-white text-xs">
            BigBait, 2025
          </p>
          <img src="/left.svg" alt="" className="absolute " />
        </div>
        <div className="col-span-12 lg:col-span-6 flex justify-center items-center lg:items-end relative flex-col lg:flex-row ">
          <p className="lg:absolute z-10 left-32 bottom-12 font-dela text-white text-xs lg:flex hidden">
            WITH LOVE FOR Bigbait
          </p>
          <img
            src="/right.svg"
            alt=""
            className="absolute  lg:h-auto lg:flex hidden"
          />
          <img
            src="/bottomAvatar.svg"
            alt=""
            className="h-64 z-10 flex lg:hidden "
          />
          <div className="mt-10 lg:hidden flex flex-col gap-4 items-center">
            <p className=" z-10 font-dela text-white text-xs">BigBait, 2025</p>
            <p className="font-dela text-white text-xs">
              WITH LOVE FOR Bigbait
            </p>
          </div>
        </div>
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
