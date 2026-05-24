'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Services", href: "/services", type: "text" },
  { name: "Portfolio", href: "/portfolio", type: "text" },
  { name: "/logo2.png", href: "/", type: "image" },
  { name: "About", href: "/about", type: "text" },
  { name: "Contact", href: "/contact", type: "text" },
];

function LinkItem({ name, href, className = "" }: { name: string, href: string, className?: string}) {

  return (
    <Link
      className={`text-xl italic md:text-base text-white/70 hover:text-white hover:scale-105 duration-200 tracking-[0.15em] ${className}`}
      href={href}
    >
      {name}
    </Link>
  );
}
function LinkImage({ src, href, className = "" }: { src: string, href: string, className?: string}) {

  return (
    <Link
      className={`hover:scale-105 duration-200 cursor-pointer ${className}`}
      href={href}
    >
      <img src={src} alt="" className="h-20" />
    </Link>
  );
}

export default function Header() {
  const [navstate, setNavState] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  // PREVENT SCROLL LOGIC
  useEffect(() => {
    if (navstate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup if component unmounts
    return () => { document.body.style.overflow = "unset"; };
  }, [navstate]);

  // HIDE ON SCROLL LOGIC
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const threshold = 180;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > threshold) {
        if (currentScrollY > lastScrollY) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
      } else {
        setShowHeader(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter text-only links for mobile menu
  const mobileLinks = navigation.filter(item => item.type !== "image");

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 px-8 h-18 font-quantico
      bg-black/80 shadow-xl shadow-black/10 backdrop-blur-md
      transition-all duration-300 ease-in-out
      ${showHeader ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}
    >
      <div className="flex items-center justify-between md:justify-center h-full max-w-7xl mx-auto">

        {/* Logo and Branding */}
        <div className="block md:hidden text-white flex items-center text-xl cursor-pointer">
          <img src="./logo2.png" alt="" className="h-16" />
          {/* Wortex */}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-around text-sm w-[600px]">
          {navigation.map((item) => (
            <div key={item.name} className="md:flex items-center flex-1 justify-center">
              {item.type !== "image" ? (
                <LinkItem name={item.name} href={item.href} />
              ) : (
                <LinkImage src={item.name}  href={item.href} />
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Overlay */}
        <nav
          className={`flex flex-col items-center justify-center text-white fixed top-18 left-0 px-8 pt-6 pb-24 bg-black/95 h-[calc(100vh-4.5rem)] w-screen z-40 transition-all duration-500 ease-in-out
          ${navstate ? "translate-x-0 opacity-100 visible" : "-translate-x-full opacity-0 invisible"}
          `}
          onClick={() => setNavState(false)}
        >
          <div className="flex flex-col gap-8 items-center">
            {/* Staggered Fade-in items */}
            <div
              style={{
                transitionDelay: navstate ? "100ms" : "0ms",
              }}
              className={`transition-all duration-500 transform ${navstate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            >
              <LinkItem name="Home" href="/"  />
            </div>
            {mobileLinks.map((item, index) => (
              <div
                key={item.name}
                style={{
                  transitionDelay: navstate ? `${++index * 100}ms` : "0ms",
                }}
                className={`transition-all duration-500 transform ${navstate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
              >
                <LinkItem name={item.name} href={item.href} />
              </div>
            ))}
          </div>
        </nav>

        {/* Hamburger Icon */}
        <span
          className="text-white md:hidden cursor-pointer z-50"
          onClick={() => setNavState(!navstate)}
        >
          {navstate ? <X size={32} className="animate-[spin_0.5s_ease-in-out_1]"/> : <Menu size={32} className="animate-[spin_0.5s_ease-in-out_1]"/>}
        </span>
        {/* <span
          className="absolute bg-white text-black hidden md:flex justify-center items-center cursor-pointer z-50 right-3 px-10 py-2 transition-all hover:text-[17px] duration-200" 
        >
          Get a Quote
        </span> */}
      </div>
    </header>
  );
}