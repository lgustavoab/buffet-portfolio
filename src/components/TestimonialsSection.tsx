import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  const googleRating = "4,8";
  const googleReviewsCount = 16;

  return (
    <section id="depoimentos" className="py-24 bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Depoimentos
          </p>

          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            O que nossos clientes dizem
          </h2>

          <p className="mt-4 text-stone-400 max-w-xl mx-auto text-lg">
            A satisfação dos nossos clientes é o nosso maior resultado.
          </p>

          <div className="mt-6 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>

            <p className="text-white font-semibold text-base sm:text-lg">
              {googleRating} no Google
            </p>

            <p className="text-stone-400 text-sm">
              Baseado em {googleReviewsCount} avaliações reais
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-stone-800 rounded-2xl p-6 border border-stone-700 hover:border-amber-600/40 transition-colors duration-300 flex flex-col gap-4"
            >
              <Quote className="w-6 h-6 text-amber-600/60 flex-shrink-0" />

              <p className="text-stone-300 text-sm leading-relaxed flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              <div className="pt-2 border-t border-stone-700">
                <p className="font-semibold text-white text-sm">{t.name}</p>
                <p className="text-stone-500 text-xs mt-0.5">{t.event}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://g.page/r/CS7BP2RtYqivEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300"
          >
            ⭐ Veja nossas avaliações no Google ⭐
          </a>
        </div>
      </div>
    </section>
  );
}