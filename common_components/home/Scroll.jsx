import Image from "next/image";
import MovingCrads from "./MovingCrads";
import Container from "../Container";

export default function () {
  return (
    <div className="bg-darkGreen">
      <Container>
        <div className="flex  mt-60 border-4 rounded-[100px] p-8 bg-[#f8ffe8] relative flex-col">
          <div>
            <h1 className="text-[80px] font-dela">
              GET IT <br /> NOW ON:
            </h1>
          </div>
          <div className="bg-bg-green absolute mt-[-88px] ml-[50px] border-t-4 border-l-4 border-r-4 rounded-t-xl p-3">
            <h1 className="text-[16px] font-bold">
              Token Address: 0x532f27101965dd16442E59d40670FaF5eBB142E4
            </h1>
          </div>
          <div className="absolute ml-[700px] -top-[180px]">
            <Image
              src="https://framerusercontent.com/images/ooRONwQzwvXKsgs8PuYZ5IZ98.svg"
              alt="logo"
              width={300}
              height={300}
              priority
            />
          </div>

          {/* Moving Cards now part of main content at bottom */}
          <div className="mt-10 w-full">
            <MovingCrads />
          </div>
        </div>
      </Container>
    </div>
  );
}
