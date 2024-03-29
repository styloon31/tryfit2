import Link from "next/link";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Header() {
  const router = useRouter();
  const [refreshPage, setRefreshPage] = useState(false);

  useEffect(() => {
    if (refreshPage) {
      router.reload();
    }
  }, [refreshPage, router]);

  const handleClick = () => {
    setRefreshPage(true);
  };

  return (
    <header className="flex items-center justify-between text-lg border border-solid border-white/15 rounded-[25px] text-white mt-6 mx-4 sm:mx-12 h-16 backdrop-blur-lg bg-white/10">
      <div className="flex justify-start ml-4 sm:ml-9 w-10 sm:w-14 h-10 sm:h-14">
        <img src="/images/logo.png" alt="logo" className="w-full h-full object-contain" />
      </div>

      <nav className="hidden xl:ml-24 sm:flex md:gap-x-4 lg:gap-x-6 gap-x-4 sm:gap-x-9">
        <a href="/" className="text-white hover:text-gray-300" onClick={handleClick}>Home</a>
        <a href="/OurTeam" className="text-white hover:text-gray-300" onClick={handleClick}>About Us</a>
        <a href="/catalogue" className="text-white hover:text-gray-300" onClick={handleClick}>Catalogue</a>
        <a href="/location" className="text-white hover:text-gray-300" onClick={handleClick}>Location</a>
      </nav>

      <div className="flex justify-end mr-4 sm:mr-9">
        <a href="/Contact" className="flex items-center justify-center border-2 md:text-lg sm:text-xl border-btn_border rounded-lg xl:py-1 xl:px-4 sm:px-8 hover:border-green-500" onClick={handleClick}>
          Contact Us
        </a>
      </div>
    </header>
  );
}
