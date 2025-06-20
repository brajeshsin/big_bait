"use client";
import React, { useState } from "react";
import Container from "../Container";
import { IconArrowRight } from "@tabler/icons-react";

const HowToBuy = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div
      className="bg-bgGreen"
      style={{
        backgroundImage: "url(/grain.svg)",
        backgroundRepeat: "repeat",
      }}
    >
      <Container>
        <div className="grid grid-cols-12 w-full gap-4">
          <div className="col-span-12 lg:col-span-8 bg-darkGreen p-8 rounded-4xl">
            <p className="text-customgreen text-4xl lg:text-8xl font-dela text-center lg:text-start">
              HOW TO BUY?
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 bg-darkGreen p-8 rounded-4xl flex items-center justify-center">
            <img src="/how.svg" alt="how" className="h-52" />
          </div>
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
            <div className="p-8 bg-darkGreen text-customcream rounded-4xl flex flex-col items-center justify-center">
              <p>
                Have you gone through all of the steps before? Great! Then just
                hit the button down below and fill up your bag with BigBait
                right now.
              </p>
              <img src="/howto.svg" alt="" />
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
              className="min-w-full px-14 py-6 rounded-full font-bricolage font-semibold text-4xl transition-all delay-100 duration-300 hover:scale-110 cursor-pointer"
            >
              Play Bigbait
            </button>
          </div>
          <div className="col-span-12 lg:col-span-7 bg-darkGreen rounded-4xl relative overflow-hidden">
            <img
              src="/spiky.svg"
              alt="spike"
              className={`absolute -right-24 h-[550px] -bottom-32 -z-0 transition-all delay-150 duration-150 `}
              style={{
                rotate: `${cardCardData?.[selectedIndex]?.rotate * 10}deg`,
              }}
            />
            <div className="relative z-10 flex flex-col p-8 gap-4">
              <p className="font-dela text-customcream transition-all delay-150 duration-150">
                {cardCardData?.[selectedIndex]?.label}:{selectedIndex + 1}
              </p>
              <p className="text-2xl font-dela text-customgreen transition-all delay-150 duration-150">
                {cardCardData?.[selectedIndex]?.header}
              </p>
              <p className="text-md text-customcream transition-all delay-150 duration-150">
                {cardCardData?.[selectedIndex]?.desc}
              </p>
            </div>
            <div className="p-8 relative z-10">
              <button
                className="flex gap-2 text-customcream cursor-pointer"
                onClick={() => {
                  if (selectedIndex == cardCardData?.length - 1) {
                    setSelectedIndex(0);
                    return;
                  }
                  setSelectedIndex((e) => Number(e ?? 0) + 1);
                }}
              >
                <IconArrowRight />
                <p>Next Step</p>
              </button>
            </div>
            <div className="p-8 flex flex-row relative z-10 gap-2">
              {cardCardData?.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className={`h-4 w-16 rounded-full transition-all delay-150 duration-150 ${
                      selectedIndex == idx ? "bg-customgreen" : "bg-gray-600"
                    }`}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowToBuy;

const cardCardData = [
  {
    label: "STEP",
    header: "CHOOSE A CRYPTO-CURRENCY EXCHANGE:",
    desc: "Select a reputable exchange known for its security measures, user-friendly interface, and support for your specific cryptocurrency. Consider factors such as trading fees, available trading pairs, and customer support options to ensure the exchange meets your needs.",
    rotate: 1,
  },
  {
    label: "STEP",
    header: "CHOOSE A CRYPTO-CURRENCY EXCHANGE:",
    desc: "Select a reputable exchange known for its security measures, user-friendly interface, and support for your specific cryptocurrency. Consider factors such as trading fees, available trading pairs, and customer support options to ensure the exchange meets your needs.",
    rotate: 2,
  },
  {
    label: "STEP",
    header: "CHOOSE A CRYPTO-CURRENCY EXCHANGE:",
    desc: "Select a reputable exchange known for its security measures, user-friendly interface, and support for your specific cryptocurrency. Consider factors such as trading fees, available trading pairs, and customer support options to ensure the exchange meets your needs.",
    rotate: 3,
  },
  {
    label: "STEP",
    header: "CHOOSE A CRYPTO-CURRENCY EXCHANGE:",
    desc: "Select a reputable exchange known for its security measures, user-friendly interface, and support for your specific cryptocurrency. Consider factors such as trading fees, available trading pairs, and customer support options to ensure the exchange meets your needs.",
    rotate: 6,
  },
  {
    label: "STEP",
    header: "CHOOSE A CRYPTO-CURRENCY EXCHANGE:",
    desc: "Select a reputable exchange known for its security measures, user-friendly interface, and support for your specific cryptocurrency. Consider factors such as trading fees, available trading pairs, and customer support options to ensure the exchange meets your needs.",
    rotate: 1,
  },

  {
    label: "STEP",
    header: "CHOOSE A CRYPTO-CURRENCY EXCHANGE:",
    desc: "Select a reputable exchange known for its security measures, user-friendly interface, and support for your specific cryptocurrency. Consider factors such as trading fees, available trading pairs, and customer support options to ensure the exchange meets your needs.",
    rotate: 6,
  },
];
