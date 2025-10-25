"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

type Project = {
  image?: string | any;
  title: string;
  category: string;
  year?: string | number;
  area?: string;
};

interface PortfolioSectionProps {
  projects: Project[];
}

function PortfolioSection({ projects }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Filtrar proyectos por categoría
  useEffect(() => {
    if (activeCategory === "Todos") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((item) => item.category === activeCategory)
      );
    }
  }, [activeCategory, projects]);

  return (
    <section id="estudio" className="py-20 px-2 lg:px-8">
      <div className="lg:max-w-6xl 2xl:max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-6 lg:mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-neutral-900 dark:text-white">
            Estudio
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg">
            Explora algunos de nuestros proyectos más destacados
          </p>
        </div>

        {/* Botones de categorías */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 lg:mb-12">
          {[
            "Todos",
            "Residencial",
            "Comercial",
            "Interiorismo",
            "Remodelación",
            "Corporativo",
          ].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={clsx(
                "px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 transition-colors text-xs sm:text-sm font-medium cursor-pointer",
                activeCategory === category
                  ? "bg-blue-700 border-blue-700 text-white dark:bg-blue-500 dark:border-blue-500"
                  : "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carrusel de proyectos */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {filteredProjects.map((item, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] px-4 pb-6"
                >
                  <div className="group relative cursor-pointer rounded-2xl bg-white dark:bg-neutral-800 border border-black shadow-[8px_8px_0_#000] p-5 lg:p-8">
                    <div className="rounded-2xl h-80 2xl:h-120 mb-4 overflow-clip flex items-center justify-center">
                      {item.image}
                    </div>
                    <h3 className="text-xl font-medium mb-2 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors dark:text-white">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                      <span>{item.category}</span>
                      <span>•</span>
                      <span>{item.year}</span>
                      <span>•</span>
                      <span>{item.area}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flechas (solo escritorio/tablet) */}
          <div className="hidden sm:flex absolute inset-y-0 -left-13 justify-between items-center lg:w-[1260px] 2xl:w-[1400px]">
            <Button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={prevBtnDisabled}
              className={clsx(
                "rounded-full shadow w-9 h-9 2xl:w-12 2xl:h-12 bg-blue-600 hover:dark:bg-gray-950 cursor-pointer",
                prevBtnDisabled && "opacity-50 cursor-not-allowed"
              )}
            >
              <FaArrowLeft className="w-6 h-6 dark:text-white" />
            </Button>

            <Button
              onClick={() => emblaApi?.scrollNext()}
              disabled={nextBtnDisabled}
              className={clsx(
                "rounded-full shadow w-9 h-9 2xl:w-12 2xl:h-12 bg-blue-600 hover:dark:bg-gray-950 cursor-pointer",
                nextBtnDisabled && "opacity-50 cursor-not-allowed"
              )}
            >
              <FaArrowRight className="w-6 h-6 dark:text-white" />
            </Button>
          </div>

          {/* Puntos (solo móvil) */}
          <div className="flex sm:hidden justify-center gap-2">
            {filteredProjects.map((item, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === selectedIndex
                    ? "bg-blue-600 dark:bg-blue-400 w-4"
                    : "bg-neutral-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
