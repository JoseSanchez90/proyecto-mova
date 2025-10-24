"use client";

import CardNav from "../CardNav";


export default function NavbarMobile() {
  const items = [
    {
      label: "Menu",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "inicio", href: "#inicio", ariaLabel: "Inicio" },
        { label: "servicios", href: "#servicios", ariaLabel: "Servicios" },
        { label: "nosotros", href: "#nosotros", ariaLabel: "Nosotros" },
        { label: "estudio", href: "#estudio", ariaLabel: "Estudio" },
        { label: "contacto", href: "#contacto", ariaLabel: "Contacto" },
      ],
    },
  ];

  return (
    <CardNav
      logo=""
      logoAlt="MWTRAZO Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
}
