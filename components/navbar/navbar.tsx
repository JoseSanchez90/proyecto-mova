"use client";

import clsx from "clsx";
import NavbarDesktop from "./navbarDesktop";
import NavbarMobile from "./navbarMobile";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIscrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIscrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-50">
        <nav
          className={clsx(
            "rounded-full bg-neutral-100 dark:bg-neutral-900 transition-all duration-500",
            isScrolled ? "bg-white border mx-auto max-w-5xl dark:bg-neutral-950 2xl:max-w-[900px] mt-2 shadow-lg shadow-black/10 dark:shadow-white/10" : "mx-auto max-w-5xl 2xl:max-w-[1000px] mt-8"
          )}
        >
          <NavbarDesktop />
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="block md:hidden fixed top-0 left-0 right-0 z-50">
        <nav className="bg-neutral-50 dark:bg-neutral-900 shadow-md transition-all duration-500 ease-in-out">
          <NavbarMobile />
        </nav>
      </div>
    </>
  );
}
