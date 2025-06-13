import Image from "next/image";
import Navbar from "@/common_components/home/Navbar";
import Hero from "@/common_components/home/Hero";
import Scroll from "@/common_components/home/Scroll";
import About from "@/common_components/home/About";
import MemCoin from "@/common_components/home/MemCoin";
import FAQ from "@/common_components/home/FAQ";
import HowToBuy from "@/common_components/home/HowToBuy";
import RoadMap from "@/common_components/home/RoadMap";
import Tokenomics from "@/common_components/home/Tokenomics";

export default function Home() {
  return (
    <div>
      {/* <Navbar />
      <Hero />
      <Scroll />
      <About /> */}
      <Tokenomics />
      <RoadMap />
      <HowToBuy />
      <FAQ />
      <MemCoin />
    </div>
  );
}
