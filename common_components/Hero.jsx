import { FaArrowRightLong } from "react-icons/fa6";

export default function () {
  return (
    <div className="mt-20">
      <div className="flex  flex-col w-[300px] md:w-[1200px] mx-auto justify-center text-center  py-3 overflow-hidden">
        <p className="text-cream text-[17px] md:text-[20px] font-bold">
          INTRODUCING
        </p>
        <h1 className="text-[48px] md:text-[100px] font-dela text-green">
          MEMECOIN
        </h1>
        <p className="font-bold text-cream text-[17px] md:text-[20px]">
          The only cryptocurrency you will HODL till the next bear run.
        </p>
        <div className="mt-10 flex flex-col lg:flex-row items-center gap-4 justify-center text-center  overflow-hidden">
          <div className="flex justify-between ">
            {/* <button className="text-[20px] font-bold px-8 py-2 lg:px-16 border-4 border-black lg:py-3 bg-cream rounded-full duration-300 ease-in hover:scale-105 cursor-pointer box-shadow: 3px 3px #fafafa">
              Buy Template
            </button> */}
            <button
              className="text-[20px] font-bold px-8 py-2 lg:px-16 border-4 border-black lg:py-3 bg-cream rounded-full duration-300 ease-in hover:scale-105 cursor-pointer"
              style={{ boxShadow: "1px 1px #000000" }}
            >
              Buy Template
            </button>
          </div>
          <div className="flex justify-between gap-2 overflow-hidden relative ">
            <FaArrowRightLong className=" text-[24px] text-cream cursor-pointer" />
            <p className="text-[18px] text-cream">dextools chart</p>
          </div>
        </div>
      </div>
    </div>
  );
}
