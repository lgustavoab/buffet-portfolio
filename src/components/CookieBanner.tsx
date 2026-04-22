"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");

        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    function handleAccept() {
        localStorage.setItem("cookie_consent", "accepted");
        window.dispatchEvent(new Event("cookie-consent-accepted"));
        setIsVisible(false);
    }

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-50">
            <div className="mx-auto max-w-5xl rounded-2xl border border-neutral-200 bg-white p-4 shadow-xl md:p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="text-sm leading-6 text-neutral-700">
                        Utilizamos cookies para melhorar sua experiência no site. Ao continuar
                        navegando, você concorda com nossa{" "}
                        <Link
                            href="/politica-de-privacidade"
                            className="font-semibold text-neutral-900 underline underline-offset-2"
                        >
                            Política de Privacidade
                        </Link>
                        .
                    </div>

                    <div className="flex shrink-0">
                        <button
                            onClick={handleAccept}
                            className="rounded-xl bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                        >
                            Aceitar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}