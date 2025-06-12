import Image from "next/image";
import Navbar from "@/my_components/Navbar";
import Hero from "@/my_components/Hero";
import Scroll from "@/my_components/Scroll";
import MovingCrads from "@/my_components/MovingCrads";
import About from "@/my_components/About";

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
