import Header from "@/app/components/Header";
import About from "@/app/sections/about";
import Hero from "@/app/sections/hero";
import Projects from "@/app/sections/projects";
import Services from "@/app/sections/services";
import Testimonials from "@/app/sections/textimonials";
import Footer from "@/app/components/Footer"
import TestCanvas from "@/app/components/TestCanvas";
import LongCubesBackground from "@/app/components/LongCubesBackground"
import Contact from "@/app/sections/contact";
import Particles from "@/app/components/Particles";

import LogoStrip from '@/app/components/LogoStrip';




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
