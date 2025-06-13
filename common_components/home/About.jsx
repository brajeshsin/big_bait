import Image from "next/image";
import { RiVideoFill } from "react-icons/ri";

export default function () {
  return (
    <div className="container p-4">
      <h1 className="text-center mt-10 font-dela text-[75px] text-customgreen">
        WHAT IS THIS ABOUT?
      </h1>
      <div className="min-h-screen  flex justify-center items-center px-4 ">
        <div className="flex flex-col md:flex-row max-w-7xl w-full">
          <div className="bg-customcream rounded-l-3xl md:rounded-r-none shadow-lg flex-1 p-6 flex flex-col justify-between text-black border-t-4 border-l-4 border-b-4">
            <div className="font-dela text-2xl  md:text-3xl tracking-wide leading-tight">
              NOTHING IS <br /> IMPOSSIBLE <br /> WITH MEMECOIN
            </div>
            <div className="mt-6 flex justify-center">
              <Image
                src="/rocket.png"
                alt="Rocket"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>

          <div className="  bg-[#0F2C23] text-customgreen shadow-lg flex-[1.2] p-8 leading-relaxed font-bricolage text-[18px] rounded-3xl   flex-col border-4 border-black  ">
            <p>
              In the vibrant and ever-evolving world of cryptocurrency, where
              innovation and creativity reign supreme, there emerged a
              phenomenon that captured the hearts and minds of digital
              enthusiasts everywhere: Memecoin.
            </p>
            <br />
            <p>
              It all began with a spark of inspiration, a playful nod to the
              internet culture that thrived on humor and satire. A group of
              visionary developers and meme enthusiasts came together with a
              shared passion for both cryptocurrency and the art of internet
              memes. They envisioned a platform that would combine these two
              seemingly disparate worlds into a harmonious symphony of laughter
              and digital currency.
            </p>
            <br />
            <p>
              Thus, Memecoin was born – a revolutionary platform that empowered
              creators to unleash their imagination and bring their wildest
              meme-inspired dreams to life. It wasn't just about trading coins;
              it was about building communities, sparking conversations, and
              spreading joy through the power of memes.
            </p>
          </div>

          {/* <div className="bg-[#f1f1e7] rounded-r-3xl md:rounded-l-none shadow-lg flex-1 p-6 relative flex flex-col border-t-4 border-r-4 border-b-4">
            <p className="text-black font-semibold mb-3 flex items-center gap-2">
              <span className="inline-block w-4 h-4 bg-black rounded-full flex items-center justify-center text-white text-xs">
                ▶
              </span>
              Watch the video
            </p>
            <div className="flex-1 flex items-center justify-center">
              <div className="aspect-w-50 aspect-h-9 w-full rounded-xl overflow-hidden">
                <iframe
                  src="https://player.vimeo.com/video/345945892?h=790722641c"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div> */}
          <div className="bg-[#f1f1e7] rounded-r-3xl md:rounded-l-none shadow-lg flex-1 p-6 relative flex flex-col border-t-4 border-r-4 border-b-4">
            <p className="text-black font-semibold mb-3 flex items-center gap-2 cursor-pointer duration-300 ease-in hover:scale-105">
              <span className="inline-block  flex items-center justify-center text-black text-xs">
                <RiVideoFill className="w-10 h-10 cursor-pointer" />
              </span>
              Watch the video
            </p>
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full h-full rounded-xl overflow-hidden">
                <iframe
                  src="https://player.vimeo.com/video/345945892?h=790722641c&autoplay=1&loop=1&muted=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
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
          Buy Template
        </button>
      </div>
    </div>
  );
}
