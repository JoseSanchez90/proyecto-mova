"use client";

import NavbarDesktop from "./navbarDesktop";
import NavbarMobile from "./navbarMobile";


export default function Navbar() {
  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-5xl 2xl:max-w-[1000px] mt-5">
          <nav className="rounded-full bg-white dark:bg-[#0a0a0a] shadow-md transition-all duration-500 ease-in-out">
            <NavbarDesktop />
          </nav>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="block md:hidden fixed top-0 left-0 right-0 z-50">
        <nav className="bg-white dark:bg-[#0a0a0a] shadow-md transition-all duration-500 ease-in-out">
          <NavbarMobile />
        </nav>
      </div>
    </>
  );
}
