import Header from "@/components/Header";
import About from "@/sections/about";
import Hero from "@/sections/hero";
import Projects from "@/sections/projects";
import Services from "@/sections/services";
import Testimonials from "@/sections/textimonials";
import Footer from "@/components/Footer"
import TestCanvas from "@/components/TestCanvas";

export default function Home() {
  return (

    <div className="">
       <Header/>
      <Hero/>
     <About/>
     <Services/>
       <Projects/>
       <Testimonials/>
       <Footer/>
     </div>
  );
}
