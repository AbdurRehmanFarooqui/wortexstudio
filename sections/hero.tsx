import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";
import ParticleBackground from "@/components/ParticleBackground";
import SpheresBackground from "@/components/SpheresBackground";
import TestCanvas from "@/components/TestCanvas";
import TestCanvas2 from "@/components/TestCanvas2";


export default function Hero() {
  return (
    <main className="relative h-screen overflow-hidden flex flex-col bg-gray-100">

      {/* 3D background */}
      {/* <HeroBackground /> */}
      <SpheresBackground/>
      {/* <ParticleBackground /> */}
      {/* <TestCanvas/> */}
      {/* <TestCanvas2/> */}

      {/* Center content */}
      <div className="flex-1 flex items-center justify-center pointer-events-none z-1">
        <h1 className="text-9xl font-bold flex flex-col text-center font-orbitron text-black select-none">
          WORTEX
          <span className="text-4xl tracking-[24px] mt-4">STUDIO</span>
        </h1>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 px-24 py-16 w-full font-quantico flex">
        <span className="w-full flex justify-center">
          <Link
            href="#"
            className="border px-8 py-4 pointer-events-auto"
          >
            Let's Build Together
          </Link>
        </span>

        <span className="w-full flex justify-center items-center text-xl">
          Where Imagination Meets Innovation
        </span>

        <span className="w-full" />
      </div>
    </main>
  );
}
