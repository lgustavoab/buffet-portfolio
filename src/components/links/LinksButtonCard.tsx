"use client";

import Link from "next/link";
import {
    Facebook,
    Globe,
    Instagram,
    MapPin,
    MessageCircle,
} from "lucide-react";
import { trackWhatsAppClick } from "@/lib/gtm";

type ButtonItem = {
    id: string;
    title: string;
    description: string;
    href: string;
    icon: string;
    highlight?: boolean;
};

type LinksButtonCardProps = {
    item: ButtonItem;
};

const iconMap = {
    Instagram,
    Facebook,
    Globe,
    MessageCircle,
    MapPin,
};

export default function LinksButtonCard({ item }: LinksButtonCardProps) {
    const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Globe;

    const handleClick = () => {
        if (item.id === "whatsapp") {
            trackWhatsAppClick({
                location: "links_page",
                button_name: "whatsapp_primary",
                page_path: "/links",
            });
        }
    };

    return (
        <Link
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className={`group relative flex items-center justify-center overflow-hidden rounded-[22px] px-4 py-5 text-white transition-all duration-300 ${item.highlight
                ? "border border-[var(--premium-gold-border)] bg-[linear-gradient(135deg,#15803d_0%,#16a34a_38%,#22c55e_100%)] shadow-[0_18px_45px_rgba(22,163,74,0.32)] hover:-translate-y-[2px] hover:shadow-[0_22px_55px_rgba(22,163,74,0.38)]"
                : "premium-glass premium-glass-hover"
                }`}
        >
            {item.highlight && (
                <>
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.02)_35%,transparent_70%)]" />
                    <div className="pointer-events-none absolute -top-10 left-1/2 h-24 w-32 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_70%)] blur-xl" />
                    <div className="pointer-events-none absolute inset-0 rounded-[22px] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]" />
                </>
            )}

            {!item.highlight && (
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%)]" />
            )}

            <div
                className={`absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-xl ${item.highlight
                    ? "bg-white/14 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]"
                    : "bg-white/10"
                    }`}
            >
                <Icon className="h-5 w-5" />
            </div>

            <h3 className="relative z-10 text-center text-base font-semibold tracking-tight">
                {item.title}
            </h3>
        </Link>
    );
}