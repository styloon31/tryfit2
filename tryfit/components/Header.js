import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between text-lg border border-solid border-white/15 rounded-[25px] text-white mt-6 mx-4 sm:mx-12 h-16 backdrop-blur-lg bg-white/10">
      <div className="flex justify-start ml-4 sm:ml-9 w-10 sm:w-14 h-10 sm:h-14">
        <img src="/images/logo.png" alt="logo" className="w-full h-full object-contain" />
      </div>

      <nav className="hidden ml-24 sm:flex gap-x-4 sm:gap-x-9">
        <Link href="/catalogue"className="text-white hover:text-gray-300">Catalogue</Link>
        <Link href="/about" className="text-white hover:text-gray-300">About</Link>
        <Link href="/OurTeam" className="text-white hover:text-gray-300">Our Team</Link>
      </nav>

      <div className="flex justify-end mr-4 sm:mr-9">
        <Link href="/Contact" className="flex items-center justify-center border-2 text-base sm:text-xl border-btn_border rounded-lg py-1 px-4 sm:px-8 hover:border-green-500">
            Contact Us
  
        </Link>
      </div>
    </header>
  );
}
