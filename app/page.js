import Image from "next/image";
import Navbar from "@/common_components/home/Navbar";
import Hero from "@/common_components/home/Hero";
import Scroll from "@/common_components/home/Scroll";
import About from "@/common_components/home/About";
import MemCoin from "@/common_components/home/MemCoin";
import FAQ from "@/common_components/home/FAQ";

export default function Home() {
  return (
    <div>
      {/* <Navbar />
      <Hero />
      <Scroll />
      <About /> */}
      <FAQ />
      <MemCoin />
    </div>
  );
}
