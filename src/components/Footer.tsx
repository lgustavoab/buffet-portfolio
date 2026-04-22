"use client";

import Link from "next/link";
import { Instagram, MessageCircle, Phone } from "lucide-react";
import {
  COMPANY_NAME,
  COMPANY_TAGLINE,
  COMPANY_PHONE,
  INSTAGRAM_HANDLE,
  whatsappLink,
} from "@/lib/data";
import { trackWhatsAppClick } from "@/lib/gtm";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Materiais", href: "#materiais" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

const services = [
  "Buffet para Eventos",
  "Locação de Mesas e Cadeiras",
  "Locação de Louças",
  "Locação de Talheres",
  "Locação de Taças",
  "Decoração e Itens Extras",
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleWhatsAppClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    button_name: string
  ) => {
    e.preventDefault();

    trackWhatsAppClick({
      location: "footer",
      button_name,
      page_path: window.location.pathname,
    });

    setTimeout(() => {
      window.open(whatsappLink(), "_blank", "noopener,noreferrer");
    }, 150);
  };

  return (
    <footer className="relative bg-stone-900 border-t border-stone-800 overflow-hidden">
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[260px] lg:left-0 lg:translate-x-0 lg:w-[340px] pointer-events-none z-0 flex items-center justify-center">
        <img
          src="/logo2.png"
          alt=""
          className="w-full h-auto object-contain opacity-30"
        />
      </div>

      <div className="absolute inset-0 bg-stone-900/80 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:hidden gap-10">
            <div className="text-center">
              <div className="mb-4">
                <span
                  className="text-white font-bold text-xl tracking-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {COMPANY_NAME}
                </span>
              </div>

              <p className="text-stone-400 text-sm leading-relaxed mb-5 max-w-sm mx-auto">
                Buffet completo em Penápolis e região, especializado em
                casamentos, aniversários e eventos corporativos.{" "}
                {COMPANY_TAGLINE}.
              </p>
              <p className="text-stone-500 text-xs leading-relaxed">
                📍 Penápolis - SP e região
                <br />
                Atendimento em Birigui, Araçatuba e cidades próximas
              </p>
              <br />

              <div className="flex justify-center gap-3">
                <a
                  href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-amber-700 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-stone-300" />
                </a>

                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleWhatsAppClick(e, "footer_whatsapp_icon")}
                  className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-green-600 flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-stone-300" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 items-start">
              <div className="text-center">
                <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
                  Navegação
                </h4>
                <ul className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-stone-400 hover:text-amber-400 text-sm transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
                  Serviços
                </h4>
                <ul className="flex flex-col gap-3">
                  {services.map((s) => (
                    <li key={s}>
                      <span className="text-stone-400 text-sm">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
                Contato
              </h4>
              <div className="flex flex-col gap-4 items-center">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleWhatsAppClick(e, "footer_whatsapp_cta")}
                  className="flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chamar no WhatsApp
                </a>

                <a
                  href={`tel:${COMPANY_PHONE}`}
                  className="flex items-center gap-2 text-stone-400 hover:text-amber-400 text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  {COMPANY_PHONE}
                </a>

                <a
                  href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-stone-400 hover:text-amber-400 text-sm transition-colors"
                >
                  <Instagram className="w-4 h-4 shrink-0" />@{INSTAGRAM_HANDLE}
                </a>
              </div>
            </div>
          </div>

          <div className="hidden lg:grid lg:grid-cols-4 gap-10">
            <div className="text-left">
              <div className="mb-4">
                <span
                  className="text-white font-bold text-xl tracking-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {COMPANY_NAME}
                </span>
              </div>

              <p className="text-stone-400 text-sm leading-relaxed mb-5 max-w-sm">
                {COMPANY_TAGLINE}. Buffet completo em Penápolis e região,
                especializado em casamentos, aniversários e eventos
                corporativos. Qualidade, organização e praticidade para o seu
                evento.
              </p>
              <p className="text-stone-500 text-xs leading-relaxed">
                📍 Penápolis - SP e região
                <br />
                Atendimento em Birigui, Araçatuba e cidades próximas.
              </p>
              <br />

              <div className="flex justify-start gap-3">
                <a
                  href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-amber-700 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-stone-300" />
                </a>

                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleWhatsAppClick(e, "footer_whatsapp_icon")}
                  className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-green-600 flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-stone-300" />
                </a>
              </div>
            </div>

            <div className="text-left">
              <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
                Navegação
              </h4>
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-stone-400 hover:text-amber-400 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-left">
              <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
                Serviços
              </h4>
              <ul className="flex flex-col gap-3">
                {services.map((s) => (
                  <li key={s}>
                    <span className="text-stone-400 text-sm">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-left">
              <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
                Contato
              </h4>
              <div className="flex flex-col gap-4 items-start">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleWhatsAppClick(e, "footer_whatsapp_cta")}
                  className="flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chamar no WhatsApp
                </a>

                <a
                  href={`tel:${COMPANY_PHONE}`}
                  className="flex items-center gap-2 text-stone-400 hover:text-amber-400 text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  {COMPANY_PHONE}
                </a>

                <a
                  href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-stone-400 hover:text-amber-400 text-sm transition-colors"
                >
                  <Instagram className="w-4 h-4 shrink-0" />@{INSTAGRAM_HANDLE}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-stone-500 text-xs text-center sm:text-left">
            <p>
              © {year} Buffet Nossa Senhora Aparecida. Todos os direitos
              reservados.
            </p>
            <p className="mt-1">CNPJ: 04.358.127/0001-38</p>
          </div>

          <div className="flex flex-col items-center gap-2 sm:items-end">
            <Link
              href="/politica-de-privacidade"
              className="text-stone-500 hover:text-amber-400 text-xs transition-colors"
            >
              Política de Privacidade
            </Link>

            <p className="text-stone-600 text-xs text-center sm:text-right">
              Feito com cuidado para eventos especiais.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}