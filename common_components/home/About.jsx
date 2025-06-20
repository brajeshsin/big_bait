import Image from "next/image";
import { RiVideoFill } from "react-icons/ri";
import Container from "../Container";

export default function () {
  return (
    <div
      className=" bg-bgGreen py-20"
      style={{
        backgroundImage: "url(/grain.svg)",
        backgroundRepeat: "repeat",
      }}
    >
      <h1 className="text-center  font-dela text-2xl md:text-6xl text-customgreen">
        WHAT IS THIS ABOUT?
      </h1>
      <Container>
        <div className="grid grid-cols-12 w-full my-30">
          <div className="col-span-12 lg:col-span-4 bg-customcream md:rounded-l-3xl md:rounded-r-none shadow-lg flex-1 flex flex-col justify-between text-black border-t-4 border-l-4 border-b-4 border-black  min-h-40 lg:gap-10 pt-4 pl-4 relative rounded-t-4xl">
            <div className="font-dela text-2xl tracking-wide leading-tight">
              NOTHING IS <br /> IMPOSSIBLE <br /> WITH BigBait
            </div>
            <div className="flex justify-center lg:mt-10  z-30 absolute -top-10 right-0  lg:relative">
              <img
                src="/rocket.svg"
                alt="Rocket"
                className="w-20 lg:w-96 lg:h-96"
              />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 bg-[#0F2C23] text-customgreen shadow-lg  p-8 leading-relaxed font-bricolage lg:rounded-3xl   flex-col border-4 border-black relative  lg:scale-125 text-sm font-semibold px-4 2xl:px-14 z-20 overflow-hidden ">
            <p>
              In the vibrant and ever-evolving world of cryptocurrency, where
              innovation and creativity reign supreme, there emerged a
              phenomenon that captured the hearts and minds of digital
              enthusiasts everywhere: BigBait.
            </p>
            <br />
            <p>
              It all began with a spark of inspiration, a playful nod to the
              internet culture that thrived on humor and satire. A group of
              visionary developers and meme enthusiasts came together with a
              shared passion for both cryptocurrency and the art of internet
              Bigbait. They envisioned a platform that would combine these two
              seemingly disparate worlds into a harmonious symphony of laughter
              and digital currency.
            </p>
            <br />
            <p>
              Thus, BigBait was born – a revolutionary platform that empowered
              creators to unleash their imagination and bring their wildest
              meme-inspired dreams to life. It wasn't just about trading coins;
              it was about building communities, sparking conversations, and
              spreading joy through the power of Bigbait.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4 bg-[#f1f1e7] lg:rounded-r-3xl md:rounded-l-none shadow-lg flex-1  flex flex-col border-t-4 border-r-4 border-b-4 border-black relative overflow-hidden">
            <p className="text-black font-semibold mb-3 flex items-center gap-2 cursor-pointer duration-300 ease-in hover:scale-105 absolute left-16">
              <RiVideoFill className="w-10 h-10 cursor-pointer rounded-full" />
              Watch the video
            </p>
            <img
              src="/about.svg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center mt-40">
          <button
            style={{
              borderColor: "rgb(0, 0, 0)",
              boxShadow: "rgb(0, 0, 0) 2px 4px 0px 0px",
              backgroundColor: "rgb(252, 250, 194)",
              borderBottomWidth: "1px",
              borderRightWidth: "2px",
              borderTopWidth: "3px",
              borderLeftWidth: "2px",

              borderStyle: "solid",
            }}
            className="min-w-fit px-10 py-3 rounded-full font-bricolage font-semibold text-[17px] transition-all delay-100 duration-300 hover:scale-110 cursor-pointer"
          >
            Play Bigbait
          </button>
        </div>
      </Container>
    </div>
  );
}
