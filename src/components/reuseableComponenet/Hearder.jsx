"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Menu } from "lucide-react";
import { useState } from "react";
import Navbar  from "./Navbar";
import Image from "next/image";
import Container from "./Container";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();
  const border = pathname === '/';

  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
    
  ];
  const toggleSheet = () => {
    setIsSheetOpen(!isSheetOpen);
  };

  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  return (
        
        <header className={`sm:flex sm:justify-between  px-4 absolute top-0 left-0 z-10 bg-transparent w-[100%] pt-4 `}>
   <Container>
      <div className="relative  sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full z-50">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-3xl font-valky text-[#351120] font-bold">
              <Image src="/images/Logo.png" width={100} height={100}/>
            </h1>
          </Link>
        </div>

        <div className="hidden md:flex items-center">
          <Navbar/>
        </div>

        <div className="flex">
          
            <div className="relative">
              <button
                    className="hidden md:block  rounded-lg bg-bgblue text-[#fff] px-6 py-2 font-normal text-base 2xl:text-lg"
                    aria-label="login"
                  >
                    Live Chat
                  </button>
             
            </div>
          

          <div className="relative">
            <button onClick={toggleSheet} className="h-8 w-8 md:hidden text-white">
              <Menu />
            </button>
            {isSheetOpen && (
              <div className="fixed right-0 top-0 w-full h-screen bg-white shadow-lg z-50 md:hidden">
              
                <div className="relative p-4">
                <button
                    className=" rounded-lg bg-bgblue text-[#fff] px-6 py-2 font-normal text-base 2xl:text-lg"
                    aria-label="login"
                  >
                    Live Chat
                  </button>
                  
                </div>
                
                <div className="h-screen flex justify-center items-center">
                  <nav className="flex flex-col justify-center items-center gap-4">
                    {routes.map((route, i) => (
                      <Link
                        key={i}
                        href={route.href}
                        onClick={closeSheet}
                        className="block px-2 py-1 text-sm"
                      >
                        {route.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      </Container>
    </header>
    
  );
};

export default Header;