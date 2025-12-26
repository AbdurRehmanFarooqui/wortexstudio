import Header from "@/components/Header";
import About from "@/sections/about";
import Hero from "@/sections/hero";
import Projects from "@/sections/projects";
import Services from "@/sections/services";
import Testimonials from "@/sections/textimonials";
import Footer from "@/components/Footer"
import TestCanvas from "@/components/TestCanvas";
import LongCubesBackground from "@/components/LongCubesBackground"
import Contact from "@/sections/contact";
import Particles from "@/components/Particles";

import LogoStrip from '@/components/LogoStrip';




export default function Home() {
  return (

    <div className="bg-black">
      {/* <LongCubesBackground/> */}
      <Hero />
      {/* <div className="w-full h-full m-0 p-0 backdrop-blur-sm"> */}
      {/* <About /> */}
      <Services />
      <Projects />
      <LogoStrip />
      <Testimonials />
      <Contact />
      {/* <Contact /> */}
      {/* </div> */}
    </div>
  );
}
