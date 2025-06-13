import Image from "next/image";

export default function () {
  return (
    <div className="container p-4">
      <h1 className="text-center mt-10 font-dela text-[75px] text-green">
        WHAT IS THIS ABOUT?
      </h1>
      {/* <div className="bg-amber-500 flex justify-center">
        <div className=" bg-red-600 w-80 h-100 bg-cream flex   p-8 font-dela text-[25px]">
          <h1 className="text-start">
            NOTHING IS <br /> IMPOSSIBLE <br /> WITH MEMECOIN
          </h1>
        </div>
        <div className=" w-40 h-100 bg-red-500">
          <h1>ijfwfwoefvnn</h1>
        </div>

        <div className=" w-40 h-40 bg-green-600">
          <h1>Sidvdfzkbn</h1>
        </div>
      </div> */}
      <div className="min-h-screen bg-[#3d4f44] flex justify-center items-center px-4 py-10">
        <div className="flex flex-col md:flex-row gap-6 max-w-7xl w-full">
          {/* Left Panel */}
          <div className="bg-[#f1f1e7] rounded-3xl shadow-lg flex-1 p-6 flex flex-col justify-between text-black">
            <div className="font-black text-2xl md:text-3xl tracking-wide leading-tight">
              NOTHING IS <br /> IMPOSSIBLE <br /> WITH MEMECOIN
            </div>
            <div className="mt-6">
              {/* <Image
                src="/rocket.png"
                alt="Rocket"
                width={300}
                height={300}
                className="mx-auto"
              /> */}
            </div>
          </div>

          {/* Middle Panel */}
          <div className="bg-[#1f352b] text-white rounded-3xl shadow-lg flex-1 p-6 leading-relaxed font-medium">
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

          {/* Right Panel */}
          <div className="bg-[#f1f1e7] rounded-3xl shadow-lg flex-1 p-6 relative">
            <p className="text-black font-semibold mb-3 flex items-center gap-2">
              <span className="inline-block w-4 h-4 bg-black rounded-full flex items-center justify-center text-white text-xs">
                ▶
              </span>
              Watch the video
            </p>
            <Image
              src="/video-art.png"
              alt="Video"
              width={400}
              height={400}
              className="rounded-2xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
