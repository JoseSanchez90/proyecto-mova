"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import {
  Menu,
  X,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Award,
  Users,
  Target,
  Lightbulb,
  CheckCircle2,
  Building2,
  Home,
  Pencil,
  Compass,
  Shield,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  zoomIn,
} from "@/components/animations";
import CardNav from "@/components/CardNav";
import Navbar from "@/components/navbar/navbar";

function HomePage() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="inicio" className="min-h-screen">

      {/* Hero Section */}
      <section className="w-full h-full pt-24 py-16 px-2 lg:px-12">
        <div className="relative h-160 md:h-120 2xl:h-200 overflow-hidden rounded-2xl">
          <video
            src="/videos/portada-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 lg:bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-4xl md:text-5xl 2xl:text-7xl text-white font-bold :scale-y-[1.1] mb-6">
              Diseñamos espacios que inspiran
            </h1>
            <p className="max-w-4xl text-xl md:text-2xl 2xl:text-3xl text-gray-200 mb-8 font-semibold">
              Arquitectura contemporánea con enfoque en la funcionalidad,
              estética minimalista y sostenibilidad.
            </p>
            <button
              onClick={() => scrollToSection("contacto")}
              className="group pl-8 pr-2 py-2 rounded-full bg-gray-100 text-base font-semibold text-black transition-colors inline-flex items-center gap-4 cursor-pointer hover:bg-gray-300"
            >
              Iniciar proyecto
              <div className="w-10 h-10 flex items-center justify-center bg-black rounded-full">
                <ArrowRight className="transition-all duration-300 text-white group-hover:-rotate-45" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section - NUEVA */}
      <section className="py-12 sm:py-16 lg:py-20 my-12 px-4 sm:px-6 lg:px-8 bg-gray-200 dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 dark:text-white">
                150+
              </div>
              <div className="text-sm sm:text-base text-gray-500 dark:text-neutral-400">
                Proyectos Completados
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 dark:text-white">
                15+
              </div>
              <div className="text-sm sm:text-base text-gray-500 dark:text-neutral-400">
                Años de Experiencia
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 dark:text-white">
                100%
              </div>
              <div className="text-sm sm:text-base text-gray-500 dark:text-neutral-400">
                Clientes Satisfechos
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 dark:text-white">
                25+
              </div>
              <div className="text-sm sm:text-base text-gray-500 dark:text-neutral-400">
                Premios Ganados
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - NUEVA */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-4 dark:text-white">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base">
              Transformamos visiones en realidad con profesionalismo y
              creatividad
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:shadow-lg dark:hover:shadow-neutral-800/50 transition-all">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-neutral-900 dark:bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white dark:text-black" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 dark:text-white">
                Excelencia
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                Calidad superior en cada detalle de nuestros proyectos
              </p>
            </div>

            <div className="text-center p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:shadow-lg dark:hover:shadow-neutral-800/50 transition-all">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-neutral-900 dark:bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-white dark:text-black" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 dark:text-white">
                Innovación
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                Diseños vanguardistas con tecnología de última generación
              </p>
            </div>

            <div className="text-center p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:shadow-lg dark:hover:shadow-neutral-800/50 transition-all">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-neutral-900 dark:bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white dark:text-black" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 dark:text-white">
                Colaboración
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                Trabajo conjunto con el cliente en cada fase
              </p>
            </div>

            <div className="text-center p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:shadow-lg dark:hover:shadow-neutral-800/50 transition-all">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-neutral-900 dark:bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white dark:text-black" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 dark:text-white">
                Precisión
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                Entrega puntual y cumplimiento de objetivos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-4 dark:text-white">
              Servicios
            </h2>
            <p className="text-gray-300 dark:text-neutral-400 max-w-2xl">
              Ofrecemos soluciones integrales de arquitectura adaptadas a las
              necesidades de cada cliente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Diseño Arquitectónico",
                description:
                  "Proyectos residenciales y comerciales desde el concepto hasta la ejecución.",
              },
              {
                icon: Home,
                title: "Interiorismo",
                description:
                  "Diseño de interiores funcionales que reflejan la identidad de cada espacio.",
              },
              {
                icon: Pencil,
                title: "Remodelaciones",
                description:
                  "Renovación y optimización de espacios existentes con visión contemporánea.",
              },
              {
                icon: Compass,
                title: "Consultoría",
                description:
                  "Asesoría técnica y acompañamiento en todas las fases del proyecto.",
              },
              {
                icon: CheckCircle2,
                title: "Supervisión de obra",
                description:
                  "Control y seguimiento detallado para garantizar la calidad del proyecto.",
              },
              {
                icon: Shield,
                title: "Diseño sostenible",
                description:
                  "Arquitectura consciente con el medio ambiente y eficiencia energética.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl hover:shadow-lg transition-shadow bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 group"
              >
                <div className="w-14 h-14 bg-neutral-900 dark:bg-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white dark:text-black" />
                </div>
                <h3 className="text-xl font-medium mb-3 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed dark:text-neutral-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - NUEVA */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-4 dark:text-white">
              Nuestro Proceso
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base">
              Un enfoque metódico para garantizar resultados excepcionales
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "Consulta Inicial",
                desc: "Reunión para entender tu visión y necesidades",
              },
              {
                step: "02",
                title: "Diseño Conceptual",
                desc: "Desarrollo de propuestas y bocetos iniciales",
              },
              {
                step: "03",
                title: "Desarrollo Técnico",
                desc: "Planos detallados y especificaciones técnicas",
              },
              {
                step: "04",
                title: "Construcción",
                desc: "Supervisión y ejecución del proyecto",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-neutral-200 dark:text-neutral-800 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                  {item.desc}
                </p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-neutral-200 dark:bg-neutral-800"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="rounded-3xl h-96 lg:h-[500px] flex items-center justify-center bg-neutral-200 dark:bg-neutral-800">
              <div className="text-neutral-400 dark:text-neutral-600 text-sm">
                Imagen About
              </div>
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-6 dark:text-white">
                Nosotros
              </h2>
              <p className="mb-6 leading-relaxed dark:text-neutral-400">
                Somos un estudio de arquitectura dedicado a crear espacios que
                combinan funcionalidad, estética y sostenibilidad. Nuestro
                enfoque se basa en entender profundamente las necesidades de
                nuestros clientes para traducirlas en diseños únicos y
                atemporales.
              </p>
              <p className="mb-8 leading-relaxed dark:text-neutral-400">
                Cada proyecto es una oportunidad para innovar y explorar nuevas
                posibilidades, manteniendo siempre el equilibrio entre forma y
                función.
              </p>
              <button
                onClick={() => scrollToSection("contacto")}
                className="border-2 border-neutral-900 dark:border-white px-8 py-3 rounded-full text-sm hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors dark:text-white"
              >
                Conocer más
              </button>
            </div>
          </div>

          {/* Team Values - NUEVA SUBSECCIÓN */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 dark:text-white">
                Misión
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Crear arquitectura que mejore la calidad de vida de las
                personas, respetando el entorno y las necesidades individuales
                de cada cliente.
              </p>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 dark:text-white">
                Visión
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Ser reconocidos como líderes en diseño arquitectónico sostenible
                e innovador, transformando espacios en Latinoamérica.
              </p>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 dark:text-white">
                Valores
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Integridad, creatividad, compromiso con la excelencia y respeto
                por el medio ambiente en cada proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="estudio"
        className="py-20 px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-4 dark:text-white">
              Estudio
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">
              Explora algunos de nuestros proyectos más destacados
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                id: 1,
                title: "Casa Moderna Minimalista",
                category: "Residencial",
                year: "2024",
                area: "350m²",
              },
              {
                id: 2,
                title: "Edificio Corporativo Sustentable",
                category: "Comercial",
                year: "2024",
                area: "1200m²",
              },
              {
                id: 3,
                title: "Loft Industrial Renovado",
                category: "Interiorismo",
                year: "2023",
                area: "180m²",
              },
              {
                id: 4,
                title: "Complejo Residencial Premium",
                category: "Residencial",
                year: "2023",
                area: "2500m²",
              },
            ].map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="bg-neutral-200 dark:bg-neutral-800 rounded-2xl h-80 mb-4 overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300">
                  <div className="text-neutral-400 dark:text-neutral-600 text-sm">
                    Proyecto {item.id}
                  </div>
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
            ))}
          </div>

          {/* Project Categories - NUEVA SUBSECCIÓN */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
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
                className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-white hover:bg-neutral-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors text-xs sm:text-sm font-medium dark:text-white"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - NUEVA */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-4 dark:text-white">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "María González",
                role: "Propietaria",
                text: "La atención al detalle y profesionalismo de mwtrazo superó todas nuestras expectativas. Nuestro hogar es exactamente como lo soñamos.",
              },
              {
                name: "Carlos Ramírez",
                role: "Director Ejecutivo",
                text: "Transformaron nuestras oficinas en un espacio moderno y funcional. El equipo fue excepcional en todo momento.",
              },
              {
                name: "Ana Torres",
                role: "Inversionista",
                text: "Su enfoque sostenible y diseños innovadores hicieron de nuestro proyecto residencial un éxito total. Altamente recomendados.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                <div>
                  <div className="font-semibold dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-6 dark:text-white">
                Comencemos tu proyecto
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed">
                Estamos listos para escuchar tus ideas y convertirlas en
                realidad. Contáctanos y agenda una consulta sin compromiso.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-full">
                    <Mail size={20} className="dark:text-white" />
                  </div>
                  <div>
                    <p className="font-medium mb-1 dark:text-white">Email</p>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      contacto@mwtrazo.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-full">
                    <Phone size={20} className="dark:text-white" />
                  </div>
                  <div>
                    <p className="font-medium mb-1 dark:text-white">Teléfono</p>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      +51 999 999 999
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-full">
                    <MapPin size={20} className="dark:text-white" />
                  </div>
                  <div>
                    <p className="font-medium mb-1 dark:text-white">
                      Ubicación
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Lima, Perú
                    </p>
                  </div>
                </div>
              </div>

              {/* Horario - NUEVA SUBSECCIÓN */}
              <div className="mt-8 sm:mt-12 p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <h3 className="font-semibold mb-3 sm:mb-4 dark:text-white text-base sm:text-lg">
                  Horario de atención
                </h3>
                <div className="space-y-2 text-sm sm:text-base">
                  <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                    <span>Lunes - Viernes</span>
                    <span className="font-medium dark:text-white">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                    <span>Sábados</span>
                    <span className="font-medium dark:text-white">
                      10:00 AM - 2:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                    <span>Domingos</span>
                    <span className="font-medium dark:text-white">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 rounded-2xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors"
                    placeholder="+51 999 999 999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">
                    Tipo de proyecto
                  </label>
                  <select className="w-full px-4 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors">
                    <option>Selecciona una opción</option>
                    <option>Diseño Arquitectónico</option>
                    <option>Interiorismo</option>
                    <option>Remodelación</option>
                    <option>Consultoría</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-3xl border border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                <button className="w-full bg-neutral-900 dark:bg-white text-white dark:text-black py-4 rounded-full text-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors font-semibold">
                  Enviar mensaje
                </button>

                <p className="text-xs sm:text-sm text-center text-neutral-500 dark:text-neutral-500">
                  Al enviar este formulario, aceptas nuestra política de
                  privacidad
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - NUEVA */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-900 dark:bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white dark:text-black">
            ¿Listo para transformar tu espacio?
          </h2>
          <p className="text-lg sm:text-xl text-neutral-300 dark:text-neutral-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Convierte tu visión en realidad. Agenda una consulta gratuita con
            nuestro equipo de expertos.
          </p>
          <button
            onClick={() => scrollToSection("contacto")}
            className="group pl-6 sm:pl-8 pr-2 py-2 sm:py-3 rounded-full bg-white dark:bg-black text-black dark:text-white text-sm sm:text-base font-semibold transition-colors inline-flex items-center gap-3 sm:gap-4 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800"
          >
            Agendar consulta gratuita
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-black dark:bg-white rounded-full">
              <ArrowRight className="transition-all duration-300 text-white dark:text-black group-hover:-rotate-45 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 dark:bg-black text-white py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-light mb-4">mwtrazo</h3>
              <p className="text-neutral-400 text-sm mb-6">
                Arquitectura que inspira y transforma espacios
              </p>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full bg-neutral-800 dark:bg-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-800 transition-colors flex items-center justify-center">
                  <span className="text-sm">in</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-neutral-800 dark:bg-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-800 transition-colors flex items-center justify-center">
                  <span className="text-sm">fb</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-neutral-800 dark:bg-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-800 transition-colors flex items-center justify-center">
                  <span className="text-sm">ig</span>
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Servicios</h4>
              <div className="space-y-2 text-sm">
                <button className="block text-neutral-400 hover:text-white transition-colors">
                  Diseño Arquitectónico
                </button>
                <button className="block text-neutral-400 hover:text-white transition-colors">
                  Interiorismo
                </button>
                <button className="block text-neutral-400 hover:text-white transition-colors">
                  Remodelaciones
                </button>
                <button className="block text-neutral-400 hover:text-white transition-colors">
                  Consultoría
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Empresa</h4>
              <div className="space-y-2 text-sm">
                <button
                  onClick={() => scrollToSection("nosotros")}
                  className="block text-neutral-400 hover:text-white transition-colors"
                >
                  Sobre nosotros
                </button>
                <button
                  onClick={() => scrollToSection("estudio")}
                  className="block text-neutral-400 hover:text-white transition-colors"
                >
                  Portafolio
                </button>
                <button className="block text-neutral-400 hover:text-white transition-colors">
                  Carrera
                </button>
                <button className="block text-neutral-400 hover:text-white transition-colors">
                  Blog
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Contacto</h4>
              <div className="space-y-2 text-sm text-neutral-400">
                <p>contacto@mwtrazo.com</p>
                <p>+51 999 999 999</p>
                <p>Lima, Perú</p>
                <button className="text-neutral-400 hover:text-white transition-colors">
                  Ver en mapa →
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
            <p>© 2024 mwtrazo. Todos los derechos reservados.</p>
            <div className="flex gap-6 text-xs sm:text-sm">
              <button className="hover:text-white transition-colors">
                Política de Privacidad
              </button>
              <button className="hover:text-white transition-colors">
                Términos y Condiciones
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
