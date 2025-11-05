"use client";

import { useEffect, useState, useRef } from "react";
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

  // Referencias para el menú y el botón de hamburguesa
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
      setActiveId(targetId);
    }
  };

  // Efecto para cerrar el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      // Si el menú está abierto y el clic fue fuera del menú y del botón
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Efecto para prevenir el scroll del body cuando el menú está abierto
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Agregar event listeners para mouse y touch
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // IntersectionObserver para detectar la sección activa
  useEffect(() => {
    if (typeof window === "undefined") return;
    const ids = items.map((it) => it.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    let observer: IntersectionObserver | null = null;

    const handleIntersect: IntersectionObserverCallback = (entries) => {
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
      rootMargin: "-20% 0px -60% 0px",
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
    <nav className="fixed z-50 w-full">
      {/* Navbar container */}
      <div className="flex items-center justify-between bg-white dark:bg-neutral-900 px-8 py-4 shadow-md shadow-black/20 dark:shadow-white/10 border-b border-neutral-200/40 dark:border-neutral-700/50 transition-colors">
        <button
          ref={buttonRef}
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
          <a
            href="#inicio"
            onClick={(e) => handleScrollToSection(e, "#inicio")}
          >
            <AuroraText>MOVA</AuroraText>
          </a>
        </h1>

        <AnimatedThemeToggler />
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: 2 }}
            animate={{ opacity: 1, y: 6 }}
            exit={{ opacity: 0, y: 2 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="-mt-1.5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700/50 shadow-lg shadow-black/30 dark:shadow-white/10 py-6"
          >
            <ul className="flex flex-col items-center gap-6">
              {items.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = activeId === id;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleScrollToSection(e, item.href)}
                      className={clsx(
                        "block text-lg font-medium capitalize rounded-xl transition-colors duration-200",
                        isActive
                          ? "text-blue-700 dark:text-blue-500"
                          : "text-neutral-800 dark:text-neutral-200 hover:text-blue-500 dark:hover:text-blue-400"
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
