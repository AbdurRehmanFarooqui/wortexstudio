'use client'
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function Header() {
  const [navstate, setNavState] = useState(false)
  return (
    <header className="bg-black/90 backdrop-blur-sm fixed w-full top-0 left-0 z-50 px-8 h-20 font-quantico max-w-screen shadow-md shadow-black/20">
      <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
        <div className="text-white flex items-center text-xl"><img src="./logo2.png" alt="" className="h-20" />Wortex</div>

        <nav className="text-white gap-6 hidden md:flex">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </nav>

        <nav style={{ visibility: navstate ? "visible" : "hidden" }} className="flex flex-col md:flex-row text-white md:gap-6 gap-4 fixed top-20 left-0 px-8 py-4 bg-black/70 h-screen w-screen z-49" onClick={()=>{setNavState(!navstate)}} >
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <span className="text-white md:hidden cursor-pointer" onClick={()=>{setNavState(!navstate)}}>
          {!navstate && <Menu />}
          {navstate && <X/>}
        </span>
      </div>
    </header>
  );
}