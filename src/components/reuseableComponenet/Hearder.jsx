"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Menu } from "lucide-react";
import { useState } from "react";
import Navbar from "./Navbar";
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
                <Image src="/images/Logo.png" width={100} height={100} />
              </h1>
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <Navbar />
          </div>

          <div className="flex">

            <div className="relative">
              <button
                className="hidden md:flex items-center justify-center font-inter font-medium text-[16px] leading-[24px] rounded-lg bg-bgblue text-[#fff] px-6 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black hover:border-spacing-1 duration-300"
                aria-label="login"
              >
                <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M18.3265 0.127441H7.04062C5.654 0.127441 4.53013 1.25174 4.53013 2.63882V4.65736H2.51138C1.12408 4.65736 0 5.78144 0 7.16874V20.965C0 21.8214 1.07843 22.1997 1.61344 21.531L4.96534 17.3411H13.7963C15.1836 17.3411 16.3077 16.217 16.3077 14.8297V12.8112H18.3265C19.7138 12.8112 20.8378 11.6871 20.8378 10.2998V2.63882C20.8378 1.25152 19.7138 0.127441 18.3265 0.127441ZM19.0259 10.2998C19.0259 10.6864 18.713 10.9992 18.3265 10.9992H16.3079V7.16874C16.3079 5.78144 15.1838 4.65736 13.7965 4.65736H6.34211V2.63882C6.34211 2.25228 6.65489 1.93942 7.04062 1.93942H18.3264C18.713 1.93942 19.0258 2.25224 19.0258 2.63882L19.0259 10.2998Z" fill="white" />
                </svg>
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
                      className=" rounded-lg font-rethinkSans bg-bgblue text-[#fff] px-6 py-2 font-normal text-base 2xl:text-lg"
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
                          className="block px-2 py-1 text-sm font-rethinkSans"
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