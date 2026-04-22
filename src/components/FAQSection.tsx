"use client";

import { useState } from "react";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Vocês atendem apenas Penápolis?",
            answer:
                "Atendemos Penápolis e toda a região. Entre em contato para verificar disponibilidade na sua cidade.",
        },
        {
            question: "Qual o valor de um buffet em Penápolis?",
            answer:
                "O valor varia conforme o tipo de evento, número de convidados e serviços escolhidos. Solicite um orçamento personalizado para receber valores detalhados.",
        },
        {
            question: "Vocês fazem buffet para casamento?",
            answer:
                "Sim! Trabalhamos com casamentos, aniversários, eventos corporativos e outras ocasiões especiais, sempre adaptando o serviço ao perfil do cliente.",
        },
        {
            question: "Quantas pessoas o buffet atende?",
            answer:
                "Atendemos desde eventos menores até grandes celebrações. Nossa equipe é preparada para adaptar o serviço conforme a quantidade de convidados.",
        },
        {
            question: "O buffet inclui montagem e organização?",
            answer:
                "Sim, oferecemos soluções completas, incluindo montagem, organização e atendimento durante o evento.",
        },
        {
            question: "Com quanto tempo de antecedência devo contratar?",
            answer:
                "Recomendamos contratar com antecedência, principalmente para datas concorridas. Quanto antes, maior a chance de garantir disponibilidade.",
        },
        {
            question: "Vocês oferecem locação de materiais?",
            answer:
                "Sim, além do buffet também trabalhamos com locação de materiais para eventos, trazendo mais praticidade para o cliente.",
        },
        {
            question: "Atendem eventos corporativos?",
            answer:
                "Sim, atendemos eventos empresariais, confraternizações e outras demandas corporativas com soluções personalizadas.",
        },
    ];

    return (
        <section className="py-20 bg-[#fafafa]">
            <div className="max-w-4xl mx-auto px-4">

                <h2 className="text-3xl font-bold text-center mb-10">
                    Perguntas Frequentes
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg bg-white shadow-sm"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center p-4 text-left font-medium"
                            >
                                <span>{faq.question}</span>
                                <span className="text-xl">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>

                            {openIndex === index && (
                                <div className="px-4 pb-4 text-gray-600">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}