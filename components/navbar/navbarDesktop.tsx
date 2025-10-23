"use client";
import Image from "next/image";
import Logo from "/public/images/mwtrazo-logo.png";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { useEffect } from "react";

export default function NavbarDesktop() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); // Se ejecuta cuando cambia la URL

  return (
    <section className="flex items-center justify-between px-8 py-4">
      {/* Logo */}
      <Image src={Logo} alt="Logo" className="w-14" />

      {/* Enlaces */}
      <div className="flex items-center gap-8 text-[15px] font-medium">
        <button onClick={() => scrollToSection("inicio")}>Inicio</button>
        <button onClick={() => scrollToSection("servicios")}>Servicios</button>
        <button onClick={() => scrollToSection("nosotros")}>Nosotros</button>
        <button onClick={() => scrollToSection("estudio")}>Estudio</button>
      </div>

      {/* Botón + Toggle */}
      <div className="flex items-center gap-4">
        <AnimatedThemeToggler />
        <button
          onClick={() => scrollToSection("contacto")}
          className="rounded-full bg-black dark:bg-white text-white dark:text-black px-6 py-3 font-semibold transition-all duration-300"
        >
          Contacto
        </button>
      </div>
    </section>
  );
}
