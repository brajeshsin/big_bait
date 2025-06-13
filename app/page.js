import Image from "next/image";
import Navbar from "@/common_components/home/Navbar";
import Hero from "@/common_components/home/Hero";
import Scroll from "@/common_components/home/Scroll";
import About from "@/common_components/home/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Scroll />
      <About />
    </>
  );
}
