import { IconPlus } from "@tabler/icons-react";
import React from "react";
import Container from "../Container";

const FAQ = () => {
  return (
    <div
      className="bg-darkGreen flex items-center justify-center flex-col overflow-hidden"
      style={{
        backgroundImage: 'url("/plus.svg")',
      }}
    >
      <p className="font-dela text-customgreen text-9xl">GOT SOME FAQ?</p>
      <Container>
        <div className="bg-orange-50 grid grid-cols-12">
          {faqData?.map((item, idx) => {
            return (
              <div className="col-span-6" key={idx}>
                <IconPlus />
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
