"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Facebook,
    Globe,
    Instagram,
    MapPin,
    MessageCircle,
} from "lucide-react";
import { trackWhatsAppClick } from "@/lib/gtm";
import { MouseEvent } from "react";

type SocialItem = {
    id: string;
    platform: string;
    href: string;
    icon: string;
};

type LinksSocialRowProps = {
    items: SocialItem[];
};

const iconMap = {
    Instagram,
    Facebook,
    Globe,
    MessageCircle,
    MapPin,
};

export default function LinksSocialRow({ items }: LinksSocialRowProps) {
    const pathname = usePathname();

    const handleClick = (item: SocialItem, e: MouseEvent<HTMLAnchorElement>) => {
        const isWhatsApp =
            item.platform?.toLowerCase().trim() === "whatsapp";

        if (!isWhatsApp) return;

        // segura navegação pra garantir envio do evento
        e.preventDefault();

        trackWhatsAppClick({
            location: "links_page",
            button_name: "whatsapp_icon",
            page_path: pathname || "/",
        });

        // pequena espera pra garantir dispatch
        setTimeout(() => {
            window.open(item.href, "_blank", "noopener,noreferrer");
        }, 150);
    };

    return (
        <section className="px-5 pb-6 sm:px-6">
            <div className="flex items-center justify-center gap-3">
                {items.map((item) => {
                    const Icon =
                        iconMap[item.icon as keyof typeof iconMap] ?? Globe;

                    return (
                        <Link
                            key={item.id}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={item.platform}
                            onClick={(e) => handleClick(item, e)}
                            className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-[2px] hover:border-white/20 hover:bg-white/10"
                        >
                            <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_65%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            <Icon className="relative z-10 h-5 w-5 opacity-90 transition-transform duration-300 group-hover:scale-110" />
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}