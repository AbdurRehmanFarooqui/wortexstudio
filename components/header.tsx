import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-black fixed w-full top-0 left-0 z-50 px-8 h-20 font-quantico max-w-screen">
        <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
        <div className="text-white flex items-center text-xl"><img src="./logo2.png" alt="" className="h-20"/>Wortex</div>

        <nav className="flex text-white gap-6">
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Services</Link>
            <Link href="/">Portfolio</Link>
            <Link href="/">Contact</Link>
        </nav>
        </div>
    </header>
  );
}