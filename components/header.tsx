import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-white fixed w-full top-0 left-0 shadow-md z-50 px-8 h-16">
        <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
        <div className="text-gray-900">Logo</div>

        <nav className="flex text-gray-900 gap-6">
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