"use client";

import {
  Layers,
  Utensils,
  GlassWater,
  Circle,
  Flower2,
  MessageCircle,
  Armchair,
} from "lucide-react";
import { materialCategories, whatsappLink } from "@/lib/data";
import { trackWhatsAppClick } from "@/lib/gtm";

const iconMap: Record<string, React.ElementType> = {
  ArmchairIcon: Armchair,
  Layers,
  Utensils,
  GlassWater,
  Circle,
  Flower2,
};

export default function MaterialsSection() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const href = whatsappLink(
      "Olá! Gostaria de saber mais sobre a locação de materiais para eventos."
    );

    trackWhatsAppClick({
      location: "landing_page",
      button_name: "materials_cta",
      page_path: window.location.pathname,
    });

    setTimeout(() => {
      window.open(href, "_blank", "noopener,noreferrer");
    }, 150);
  };

  return (
    <section id="materiais" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-amber-700 text-sm font-semibold uppercase tracking-widest mb-3">
            Locação de Materiais
          </p>
          <div className="w-10 h-[2px] bg-amber-700 mx-auto mb-6" />
          <h2
            className="text-3xl sm:text-4xl font-bold text-stone-900"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Elegância em cada detalhe
          </h2>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto text-lg leading-relaxed">
            Disponibilizamos tudo que você precisa para montar um evento bonito e bem organizado.
            Materiais cuidados, higienizados e entregues no prazo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {materialCategories.map((cat) => {
            const Icon = iconMap[cat.icon] ?? Layers;
            return (
              <div
                key={cat.id}
                className="group p-6 rounded-2xl border border-stone-100 hover:border-amber-200 bg-stone-50 hover:bg-amber-50 transition-all duration-300 hover:shadow-md cursor-default text-center sm:text-left"
              >
                <div className="w-12 h-12 mx-auto sm:mx-0 rounded-xl bg-white border border-stone-100 group-hover:border-amber-200 flex items-center justify-center mb-4 transition-colors duration-300 shadow-sm">
                  <Icon className="w-5 h-5 text-amber-700" />
                </div>
                <h3 className="font-semibold text-stone-800 mb-2 text-base">
                  {cat.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {cat.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="rounded-3xl bg-stone-900 p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-xl sm:text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Quer verificar disponibilidade ou montar um orçamento?
            </h3>
            <p className="text-stone-400 text-sm">
              Entre em contato e receba uma lista completa dos materiais disponíveis.
            </p>
          </div>

          <a
            href={whatsappLink(
              "Olá! Gostaria de saber mais sobre a locação de materiais para eventos."
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="flex items-center gap-2.5 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg whitespace-nowrap flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            Consultar Materiais
          </a>
        </div>
      </div>
    </section>
  );
}