"use client";

import {
  MessageCircle,
  Phone,
  Instagram,
  MapPin,
} from "lucide-react";
import {
  COMPANY_ADDRESS,
  COMPANY_PHONE,
  INSTAGRAM_HANDLE,
  whatsappLink,
} from "@/lib/data";
import TrackedWhatsAppLink from "@/components/TrackedWhatsAppLink";

export default function ContactSection() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — CTA */}
          <div className="text-center lg:text-left">
            <p className="text-amber-700 text-sm font-semibold uppercase tracking-widest mb-4">
              Contato
            </p>
            <div className="w-12 h-[2px] bg-amber-700 mb-6 mx-auto lg:mx-0" />

            <h2
              className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Pronto para fazer seu evento{" "}
              <span className="text-amber-700">acontecer?</span>
            </h2>

            <p className="text-stone-500 text-lg leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              Entre em contato pelo WhatsApp e receba um atendimento rápido e
              personalizado. Estamos prontos para entender seu evento e enviar
              um orçamento sem compromisso.
            </p>

            {/* Botões principais */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">

              {/* WhatsApp — principal */}
              <TrackedWhatsAppLink
                href={whatsappLink()}
                location="landing_page"
                button_name="contact_section_cta"
                className="flex-1 flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold text-lg px-8 py-5 rounded-2xl transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                ariaLabel="Falar pelo WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
                Falar pelo WhatsApp
              </TrackedWhatsAppLink>

              {/* Mapa — secundário */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  COMPANY_ADDRESS
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 border border-stone-300 hover:border-amber-500 text-stone-700 hover:text-amber-700 font-semibold text-lg px-8 py-5 rounded-2xl transition-all duration-200 hover:bg-amber-50"
              >
                <MapPin className="w-6 h-6" />
                Ver rota no mapa
              </a>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-4">

              {/* Telefone */}
              <a
                href={`tel:${COMPANY_PHONE}`}
                className="flex items-center justify-center lg:justify-start gap-3 text-stone-600 hover:text-amber-700 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-stone-50 group-hover:bg-amber-50 flex items-center justify-center transition-colors shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">{COMPANY_PHONE}</span>
              </a>

              {/* Instagram */}
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-start gap-3 text-stone-600 hover:text-amber-700 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-stone-50 group-hover:bg-amber-50 flex items-center justify-center transition-colors shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">@{INSTAGRAM_HANDLE}</span>
              </a>

              {/* Localização */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  COMPANY_ADDRESS
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-start gap-3 text-stone-600 hover:text-amber-700 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-stone-50 group-hover:bg-amber-50 flex items-center justify-center transition-colors shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>

                <div className="flex flex-col text-center lg:text-left">
                  <span className="text-sm font-medium">{COMPANY_ADDRESS}</span>
                  <span className="text-xs text-amber-700">Ver no mapa</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right — Visual card */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden bg-stone-900 p-8 sm:p-10">

              {/* Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `radial-gradient(circle, #c9922b 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>

              <div className="relative z-10 text-center">
                <h3
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Solicite um orçamento sem compromisso
                </h3>

                <p className="text-stone-400 text-sm mb-8">
                  Nos conte sobre o seu evento e receba uma proposta personalizada.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: "Buffet para Eventos", desc: "Cardápios sob medida" },
                    { label: "Locação de Materiais", desc: "Tudo para a montagem" },
                    { label: "Atendimento Rápido", desc: "Resposta em minutos" },
                    { label: "Orçamento Grátis", desc: "Sem compromisso" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-stone-800 rounded-xl p-4 border border-stone-700 text-center"
                    >
                      <p className="text-amber-400 font-semibold text-xs mb-1">
                        {item.label}
                      </p>
                      <p className="text-stone-400 text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <p className="text-stone-300 text-sm leading-relaxed text-center">
                  Atendimento rápido pelo WhatsApp para tirar dúvidas, verificar
                  disponibilidade e montar seu orçamento com mais praticidade.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}