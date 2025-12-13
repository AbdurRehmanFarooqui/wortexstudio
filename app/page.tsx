import Header from "@/components/header";
import About from "@/sections/about";
import Hero from "@/sections/hero";
import Projects from "@/sections/projects";
import Services from "@/sections/services";


export default function Home() {
  return (
    <div className="bg-white">
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
    </div>
  );
}
