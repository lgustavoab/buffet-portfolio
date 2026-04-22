"use client";

import { MessageCircle, UtensilsCrossed, Package } from "lucide-react";
import { services, whatsappLink } from "@/lib/data";
import { trackWhatsAppClick } from "@/lib/gtm";

const iconMap: Record<string, React.ElementType> = {
  UtensilsCrossed,
  Package,
};

export default function ServicesSection() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    trackWhatsAppClick({
      location: "landing_page",
      button_name: "services_cta",
      page_path: window.location.pathname,
    });

    setTimeout(() => {
      window.open(whatsappLink(), "_blank", "noopener,noreferrer");
    }, 150);
  };

  return (
    <section id="servicos" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-amber-700 text-sm font-semibold uppercase tracking-widest mb-3">
            Nossos Serviços
          </p>
          <div className="w-10 h-[2px] bg-amber-700 mx-auto mb-6" />
          <h2
            className="text-3xl sm:text-4xl font-bold text-stone-900"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Tudo para o seu evento em um só lugar
          </h2>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto text-lg leading-relaxed">
            Oferecemos soluções completas: buffet de qualidade e locação de
            materiais elegantes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Package;
            const isBuffet = i === 0;

            return (
              <div
                key={service.id}
                className={`rounded-3xl p-8 lg:p-10 flex flex-col gap-6 border transition-shadow hover:shadow-xl ${isBuffet
                    ? "bg-stone-900 text-white border-stone-800"
                    : "bg-white text-stone-900 border-stone-100"
                  }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isBuffet ? "bg-amber-600" : "bg-amber-50"
                    }`}
                >
                  <Icon
                    className={`w-7 h-7 ${isBuffet ? "text-white" : "text-amber-700"
                      }`}
                  />
                </div>

                <div>
                  <h3
                    className={`text-2xl font-bold mb-3 ${isBuffet ? "text-white" : "text-stone-900"
                      }`}
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`leading-relaxed ${isBuffet ? "text-stone-300" : "text-stone-500"
                      }`}
                  >
                    {service.description}
                  </p>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm">
                      <span
                        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isBuffet ? "bg-amber-400" : "bg-amber-600"
                          }`}
                      />
                      <span
                        className={
                          isBuffet ? "text-stone-200" : "text-stone-600"
                        }
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="flex items-center justify-center gap-2.5 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-base px-8 sm:px-10 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center"
          >
            <MessageCircle className="w-5 h-5" />
            Solicitar orçamento para meu evento
          </a>
        </div>
      </div>
    </section>
  );
}