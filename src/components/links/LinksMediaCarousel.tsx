"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type MediaItem = {
    id: string;
    src: string;
    alt: string;
};

type LinksMediaCarouselProps = {
    items: MediaItem[];
};

export default function LinksMediaCarousel({
    items,
}: LinksMediaCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<"next" | "prev">("next");

    const goToPrevious = () => {
        setDirection("prev");
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setDirection("next");
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    const goToSlide = (index: number) => {
        setDirection(index > currentIndex ? "next" : "prev");
        setCurrentIndex(index);
    };

    if (!items.length) return null;

    const currentItem = items[currentIndex];

    return (
        <section className="px-5 pb-6 sm:px-6">
            <div className="premium-glass relative overflow-hidden rounded-[30px] p-3 shadow-[var(--shadow-premium-md)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_45%)]" />

                <div className="relative">
                    <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black/30 shadow-[0_12px_32px_rgba(0,0,0,0.28)]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentItem.id}
                                initial={{
                                    opacity: 0,
                                    x: direction === "next" ? 18 : -18,
                                    scale: 0.985,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    x: direction === "next" ? -18 : 18,
                                    scale: 0.985,
                                }}
                                transition={{
                                    duration: 0.32,
                                    ease: "easeOut",
                                }}
                                className="relative"
                            >
                                <div className="relative h-[240px] w-full sm:h-[280px]">
                                    <Image
                                        src={currentItem.src}
                                        alt={currentItem.alt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, 430px"
                                        className="object-cover"
                                        priority={currentIndex === 0}
                                    />
                                </div>

                                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_24%,transparent_72%,rgba(0,0,0,0.18))]" />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {items.length > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={goToPrevious}
                                aria-label="Imagem anterior"
                                className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur-md transition hover:bg-black/50"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>

                            <button
                                type="button"
                                onClick={goToNext}
                                aria-label="Próxima imagem"
                                className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur-md transition hover:bg-black/50"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </>
                    )}
                </div>

                {items.length > 1 && (
                    <div className="relative mt-4 flex items-center justify-center gap-2">
                        {items.map((item, index) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => goToSlide(index)}
                                aria-label={`Ir para imagem ${index + 1}`}
                                className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === index
                                    ? "w-6 bg-[var(--premium-gold)]"
                                    : "w-2.5 bg-white/25 hover:bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}