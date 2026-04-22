"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 400); // aparece depois do hero
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!show) return null;

    return (
        <button
            onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
            }
            aria-label="Voltar ao topo"
            className="
        fixed 
        bottom-30 right-6   /* acima do WhatsApp */
        z-50 

        flex items-center justify-center

        w-10 h-10           /* mobile */
        sm:w-12 sm:h-12     /* desktop */

        bg-stone-900/40
        hover:bg-amber-600/90

        text-white 
        rounded-full 

        shadow-lg 
        transition-all duration-300 

        hover:-translate-y-1
        hover:shadow-xl
      "
        >
            <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
    );
}