import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { RiInformationOffFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import Container from "../Container";

export default function () {
  return (
    <div className="px-4 bg-darkGreen">
      <Container>
        <div
          className="flex  py-2 mt-8  scroll-py-1.5 md:py-2 px-3 bg-amber-50 border-4 border-black rounded-full  "
          style={{ boxShadow: "1px 1px #000000" }}
        >
          <div className="w-1/2 flex text-center">
            <h1 className="text-[30px] text-[#000000] font-dela">$MMC</h1>
          </div>
          <div className="w-1/2  flex justify-end items-center gap-4">
            <div className="hidden md:flex gap-4 ">
              <FaTelegramPlane className="size-7 cursor-pointer duration-300 ease-in hover:scale-130" />
              <FaDiscord className="size-7 cursor-pointer duration-300 ease-in hover:scale-130" />
              <RiInformationOffFill className="size-7 cursor-pointer duration-300 ease-in hover:scale-130" />
              <BsTwitterX className="size-7 cursor-pointer transition duration-300 ease-in hover:scale-130" />
            </div>
            <button className="bg-[#FCFAC2] px-5 py-2 md:px-8 md:py-3 border-3 border-black cursor-pointer rounded-full duration-300 ease-in hover:scale-110">
              Buy
            </button>
            <div className="bg-black w-12 h-12  md:w-13 md:h-13 rounded-full flex items-center justify-center duration-300 ease-in hover:scale-110 cursor-pointer">
              <IoMenu className="text-white size-8" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
