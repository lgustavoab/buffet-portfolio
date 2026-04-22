"use client";

import Image from "next/image";
import { MessageCircle, ChevronDown } from "lucide-react";
import { whatsappLink } from "@/lib/data";
import { trackWhatsAppClick } from "@/lib/gtm";

export default function HeroSection() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    trackWhatsAppClick({
      location: "landing_page",
      button_name: "hero_cta",
      page_path: window.location.pathname,
    });

    setTimeout(() => {
      window.open(whatsappLink(), "_blank", "noopener,noreferrer");
    }, 150);
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1753298208357-5b42dcada5b2?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Buffet para eventos em Penápolis com mesa posta e decoração elegante"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/75 via-stone-900/60 to-stone-900/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-medium px-4 py-2 rounded-full mb-8 tracking-wider uppercase">
          Buffet & Locação de Materiais para eventos
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Buffet completo em{" "}
          <span className="text-amber-400">Penápolis e região</span>{" "}
          para o seu evento
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Atendemos{" "}
          <strong className="text-white">
            casamentos, aniversários e eventos corporativos
          </strong>{" "}
          em Penápolis, Birigui, Araçatuba e cidades próximas. Cuidamos de tudo,
          do cardápio à montagem, para você aproveitar sem preocupação.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="flex items-center gap-2.5 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            Solicitar orçamento no WhatsApp
          </a>

          <a
            href="#servicos"
            className="flex items-center gap-2 text-white/90 hover:text-white border border-white/30 hover:border-white/60 font-medium text-base px-8 py-4 rounded-full transition-all duration-200 backdrop-blur-sm w-full sm:w-auto justify-center"
          >
            Ver opções
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { value: "+5.000", label: "Eventos Realizados" },
            { value: "5★", label: "Avaliação Média" },
            { value: "+30", label: "Anos de Experiência" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-2xl sm:text-3xl font-bold text-amber-400"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {stat.value}
              </p>
              <p className="text-white/60 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/50" />
      </div>
    </section>
  );
}