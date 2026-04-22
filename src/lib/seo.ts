export const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "LocalBusiness",
            name: "Buffet Aparecida",
            url: "https://buffet-aparecida.vercel.app",
            telephone: "+551836523310",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Penápolis",
                addressRegion: "SP",
                addressCountry: "BR",
            },
            areaServed: [
                {
                    "@type": "City",
                    name: "Penápolis",
                },
                {
                    "@type": "AdministrativeArea",
                    name: "Região de Penápolis",
                },
            ],
            sameAs: [
                "https://www.instagram.com/buffet.aparecida",
                "https://www.google.com/maps/place/Buffet+Nossa+Senhora+Aparecida",
            ],
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "16",
            },
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Vocês atendem apenas Penápolis?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Atendemos Penápolis e toda a região. Entre em contato para verificar disponibilidade na sua cidade.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Qual o valor de um buffet em Penápolis?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "O valor varia conforme o tipo de evento, número de convidados e serviços escolhidos. Solicite um orçamento personalizado para receber valores detalhados.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Vocês fazem buffet para casamento?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Sim. Trabalhamos com casamentos, aniversários, eventos corporativos e outras ocasiões especiais.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Vocês oferecem locação de materiais para festas?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Sim. Além do buffet, também trabalhamos com locação de materiais para eventos, trazendo mais praticidade para a organização.",
                    },
                },
            ],
        },
    ],
};