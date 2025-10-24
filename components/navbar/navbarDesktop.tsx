"use client";

import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { pacifico } from "@/lib/fonts";

export default function NavbarDesktop() {
  const [activeSection, setActiveSection] = useState("inicio");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Lista de secciones que quieres observar
    const sectionIds = [
      "inicio",
      "servicios",
      "nosotros",
      "estudio",
      "contacto",
    ];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          root: null, // viewport
          threshold: 0.5, // 50% visible
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="flex items-center justify-between px-8 py-4">
      {/* Logo */}
      <button
        onClick={() => scrollToSection("inicio")}
        className="cursor-pointer"
      >
        <p className={clsx("text-xl tracking-tighte font-bold [text-shadow:3px_3px_4px_rgba(0,0,0,0.4)] dark:[text-shadow:3px_3px_4px_rgba(255,255,255,0.3)] text-blue-700 dark:text-blue-500", pacifico.className)}>MOVA</p>
      </button>

      {/* Enlaces */}
      <div className="flex items-center gap-8 text-[15px] font-medium">
        {[
          { id: "inicio", label: "Inicio" },
          { id: "servicios", label: "Servicios" },
          { id: "nosotros", label: "Nosotros" },
          { id: "estudio", label: "Estudio" },
        ].map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={`cursor-pointer transition-colors duration-300 ${
              activeSection === link.id
                ? "text-blue-500 font-semibold"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-400"
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Botón + Toggle */}
      <div className="flex items-center gap-10">
        <AnimatedThemeToggler />
        <button
          onClick={() => scrollToSection("contacto")}
          className={`rounded-full px-8 py-3 transition-all duration-300 cursor-pointer font-semibold
            ${
              activeSection === "contacto"
                ? "bg-blue-400 text-white"
                : "bg-blue-600 text-white hover:bg-blue-500 hover:text-white"
            }`}
        >
          Contacto
        </button>
      </div>
    </section>
  );
}
