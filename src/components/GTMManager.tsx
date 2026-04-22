"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GTM_ID = "GTM-NKXKK9CQ";

export default function GTMManager() {
    const [hasConsent, setHasConsent] = useState(false);

    useEffect(() => {
        // garante que dataLayer existe, mas vazio
        if (typeof window !== "undefined") {
            window.dataLayer = window.dataLayer || [];
        }

        // verifica consentimento salvo
        const consent = localStorage.getItem("cookie_consent");

        if (consent === "accepted") {
            setHasConsent(true);
        }

        // escuta aceite do banner
        const handleConsentGranted = () => {
            setHasConsent(true);
        };

        window.addEventListener("cookie-consent-accepted", handleConsentGranted);

        return () => {
            window.removeEventListener(
                "cookie-consent-accepted",
                handleConsentGranted
            );
        };
    }, []);

    // não carrega GTM sem consentimento
    if (!hasConsent) return null;

    return (
        <>
            {/* Script principal do GTM */}
            <Script id="gtm-script" strategy="afterInteractive">
                {`
                (function(w,d,s,l,i){
                    w[l]=w[l]||[];
                    w[l].push({
                        'gtm.start': new Date().getTime(),
                        event:'gtm.js'
                    });
                    var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                    j.async=true;
                    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                    f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
                `}
            </Script>

            {/* Fallback sem JS */}
            <noscript>
                <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                    height="0"
                    width="0"
                    style={{ display: "none", visibility: "hidden" }}
                />
            </noscript>
        </>
    );
}