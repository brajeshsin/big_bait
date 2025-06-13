"use client";
import { IconPlus } from "@tabler/icons-react";
import React, { useState } from "react";
import Container from "../Container";

const FAQ = () => {
  const [selectedIndex, setSelectedIndex] = useState();
  return (
    <div
      className="bg-darkGreen flex items-center justify-center flex-col overflow-hidden py-20"
      // style={{
      //   backgroundImage: 'url("/plus.svg")',
      // }}
      style={{
        backgroundImage: "url(/grain.svg)",
        backgroundRepeat: "repeat",
      }}
    >
      <p className="font-dela text-customgreen text-3xl lg:text-9xl text-center">
        GOT SOME FAQ?
      </p>
      <Container>
        <div className="grid grid-cols-12 gap-4 lg:gap-10">
          {faqData?.map((item, idx) => {
            return (
              <div
                className={`col-span-12 2xl:col-span-6 ${
                  selectedIndex == idx ? "bg-[#e7eeda]" : "bg-bg-cream"
                } min-h-64 flex justify-center items-center gap-8 px-10 lg:px-20 rounded-4xl group cursor-pointer transition-all delay-100 duration-300 `}
                key={idx}
                onClick={() => {
                  if (selectedIndex == idx) {
                    setSelectedIndex();
                  } else {
                    setSelectedIndex(idx);
                  }
                }}
              >
                <div
                  className={`bg-darkGreen w-fit rounded-sm p-1 hidden md:flex ${
                    selectedIndex == idx ? "rotate-45" : "group-hover:rotate-90"
                  } transition-all delay-100 duration-300 ease-linear`}
                >
                  <IconPlus className="text-bg-cream" size={30} />
                </div>
                <div className="relative w-full min-h-36 overflow-clip transition-all duration-300 delay-300bg-orange-600 flex items-center justify-center">
                  <p
                    className={`text-darkGreen font-dela text-xl absolute transition-all duration-300 delay-300 ${
                      selectedIndex == idx ? "bottom-96" : "bottom-10"
                    }`}
                  >
                    {item.label}
                  </p>
                  <p
                    className={`text-darkGreen font-bricolage text-sm absolute transition-all duration-300 delay-300 ${
                      selectedIndex != idx ? "bottom-96" : "bottom-12"
                    }`}
                  >
                    {item.ans}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default FAQ;

const faqData = [
  {
    label: "What is memecoin and how does it work?",
    ans: "Memecoin is a fictional cryptocurrency that is showcased in this Framer template.",
  },
  {
    label: "What is memecoin and how does it work?",
    ans: "Memecoin is a fictional cryptocurrency that is showcased in this Framer template.",
  },
  {
    label: "What is memecoin and how does it work?",
    ans: "Memecoin is a fictional cryptocurrency that is showcased in this Framer template.",
  },
  {
    label: "What is memecoin and how does it work?",
    ans: "Memecoin is a fictional cryptocurrency that is showcased in this Framer template.",
  },
  {
    label: "What is memecoin and how does it work?",
    ans: "Memecoin is a fictional cryptocurrency that is showcased in this Framer template.",
  },
  {
    label: "What is memecoin and how does it work?",
    ans: "Memecoin is a fictional cryptocurrency that is showcased in this Framer template.",
  },
];
