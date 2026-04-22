"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/data";
import { trackWhatsAppClick } from "@/lib/gtm";

export default function FloatingWhatsApp() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    trackWhatsAppClick({
      location: "floating_button",
      button_name: "whatsapp_floating",
      page_path: window.location.pathname,
    });

    setTimeout(() => {
      window.open(whatsappLink(), "_blank", "noopener,noreferrer");
    }, 150);
  };

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-semibold text-sm px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 group"
    >
      <MessageCircle className="w-5 h-5 flex-shrink-0" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}