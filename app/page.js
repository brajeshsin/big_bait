import Image from "next/image";
import Navbar from "@/common_components/Navbar";
import Hero from "@/common_components/Hero";
import Scroll from "@/common_components/Scroll";
import About from "@/common_components/About";

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
