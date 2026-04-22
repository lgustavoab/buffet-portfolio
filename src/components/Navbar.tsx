"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { COMPANY_NAME, whatsappLink } from "@/lib/data";
import { trackWhatsAppClick } from "@/lib/gtm";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Materiais", href: "#materiais" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleWhatsAppClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    button_name: string
  ) => {
    e.preventDefault();

    trackWhatsAppClick({
      location: "navbar",
      button_name,
      page_path: window.location.pathname,
    });

    setTimeout(() => {
      window.open(whatsappLink(), "_blank", "noopener,noreferrer");
    }, 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-3 group cursor-pointer"
            aria-label="Voltar ao topo"
          >
            <Image
              src="/logo.png"
              alt="Buffet Aparecida"
              width={65}
              height={65}
              className="w-11 h-11 md:w-14 md:h-14 object-contain shrink-0"
            />

            <span
              className={`font-bold tracking-tight transition-colors duration-300 text-xl md:text-2xl ${scrolled ? "text-stone-900" : "text-white"
                }`}
              style={{
                fontFamily: "var(--font-serif)",
                textShadow: scrolled ? "none" : "0 2px 10px rgba(0,0,0,0.35)",
              }}
            >
              {COMPANY_NAME}
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${scrolled
                    ? "text-stone-600 hover:text-amber-700"
                    : "text-white/90 hover:text-white"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleWhatsAppClick(e, "navbar_cta_desktop")}
            className="hidden md:inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-md"
          >
            Solicitar Orçamento
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors ${scrolled
                ? "text-stone-700 hover:text-amber-700"
                : "text-white hover:text-white/80"
              }`}
            aria-label="Abrir menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } bg-white border-t border-stone-100`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-stone-700 hover:text-amber-700 text-sm font-medium py-2.5 px-3 rounded-lg hover:bg-stone-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleWhatsAppClick(e, "navbar_cta_mobile")}
            className="mt-3 bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold px-5 py-3 rounded-full text-center transition-colors"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </header>
  );
}