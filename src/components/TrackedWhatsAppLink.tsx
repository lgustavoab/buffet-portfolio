"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { trackWhatsAppClick } from "@/lib/gtm";

type TrackedWhatsAppLinkProps = {
    href: string;
    location: string;
    button_name: string;
    className?: string;
    children: ReactNode;
    target?: "_blank" | "_self";
    rel?: string;
    ariaLabel?: string;
};

export default function TrackedWhatsAppLink({
    href,
    location,
    button_name,
    className,
    children,
    target = "_blank",
    rel = "noopener noreferrer",
    ariaLabel,
}: TrackedWhatsAppLinkProps) {
    const pathname = usePathname();

    const handleClick = () => {
        trackWhatsAppClick({
            location,
            button_name,
            page_path: pathname || "/",
        });
    };

    return (
        <Link
            href={href}
            target={target}
            rel={rel}
            aria-label={ariaLabel}
            onClick={handleClick}
            className={className}
        >
            {children}
        </Link>
    );
}