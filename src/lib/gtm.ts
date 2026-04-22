declare global {
    interface Window {
        dataLayer: Record<string, unknown>[];
    }
}

type WhatsAppClickParams = {
    location: string;
    button_name: string;
    page_path: string;
};

export function trackWhatsAppClick(params: WhatsAppClickParams) {
    if (typeof window === "undefined") return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: "whatsapp_click",
        ...params,
    });
}