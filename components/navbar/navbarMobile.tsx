"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { AuroraText } from "../ui/aurora-text";
import clsx from "clsx";
import { pacifico } from "@/lib/fonts";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";

export default function NavbarMobile() {
  const items = [
    { label: "inicio", href: "#inicio" },
    { label: "servicios", href: "#servicios" },
    { label: "nosotros", href: "#nosotros" },
    { label: "estudio", href: "#estudio" },
    { label: "contacto", href: "#contacto" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      // actualizamos inmediatamente (mejora percepción)
      setActiveId(targetId);
    }
  };

  // IntersectionObserver para detectar la sección activa
  useEffect(() => {
    if (typeof window === "undefined") return;
    const ids = items.map((it) => it.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    let observer: IntersectionObserver | null = null;

    // Callback: selecciona la sección con mayor intersectionRatio
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      // Ordenar por intersectionRatio descendente y tomar la mayor
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length > 0) {
        const id = visible[0].target.id;
        setActiveId(id);
      }
    };

    observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // ajusta cuándo se considera "visible"
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });

    sections.forEach((s) => observer?.observe(s));

    return () => {
      if (observer) {
        sections.forEach((s) => observer?.unobserve(s));
        observer.disconnect();
      }
    };
  }, [items]);

  return (
    <nav className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[95%]">
      {/* Navbar container */}
      <div className="flex items-center justify-between bg-white dark:bg-neutral-900 rounded-2xl px-5 py-3 shadow-md shadow-black/20 dark:shadow-white/10 border border-neutral-200/40 dark:border-neutral-700/50 transition-colors">
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="text-neutral-800 dark:text-white focus:outline-none transition-transform"
        >
          {isOpen ? (
            <HiX className="w-7 h-7" />
          ) : (
            <HiOutlineMenuAlt4 className="w-7 h-7" />
          )}
        </button>

        <h1
          className={clsx(
            "text-xl font-semibold text-neutral-900 dark:text-white tracking-tight",
            pacifico.className
          )}
        >
          <AuroraText>MOVA</AuroraText>
        </h1>

        <AnimatedThemeToggler />
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 6 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700/50 shadow-lg shadow-black/30 dark:shadow-white/10 rounded-2xl py-4"
          >
            <ul className="flex flex-col items-center gap-3">
              {items.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = activeId === id;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleScrollToSection(e, item.href)}
                      className={clsx(
                        "block text-lg font-medium capitalize px-4 py-2 rounded-xl transition-colors duration-200",
                        isActive
                          ? "bg-blue-700 text-white dark:bg-blue-500 dark:text-white"
                          : "text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-800"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
