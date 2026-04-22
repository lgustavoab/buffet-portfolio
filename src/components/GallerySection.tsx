import { Instagram } from "lucide-react";
import { galleryImages, INSTAGRAM_HANDLE } from "@/lib/data";

export default function GallerySection() {
  const visibleImages = galleryImages.slice(0, 5);

  return (
    <section id="galeria" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center sm:items-end sm:text-left sm:flex-row sm:justify-between mb-12 gap-4">
          <div className="sm:text-left text-center">
            <p className="text-amber-700 text-sm font-semibold uppercase tracking-widest mb-3">
              Galeria
            </p>
            <div className="w-12 h-[2px] bg-amber-700 mb-6 mx-auto sm:mx-0" />
            <h2
              className="text-3xl sm:text-4xl font-bold text-stone-900"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Momentos que criamos juntos
            </h2>
          </div>

          <a
            href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-stone-600 hover:text-amber-700 font-medium text-sm transition-colors flex-shrink-0"
          >
            <Instagram className="w-4 h-4" />
            Ver no Instagram
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 items-stretch">
          {visibleImages.map((image, i) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl bg-stone-200 ${i === 0 ? "col-span-2" : ""
                }`}
            >
              <div
                className={
                  i === 0
                    ? "w-full aspect-[16/10] sm:aspect-[4/3]"
                    : i === 1
                      ? "w-full aspect-square md:h-full md:aspect-auto"
                      : "w-full aspect-square"
                }
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${i === 0 ? "object-top" : "object-center"
                    }`}
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-10">
          <a
            href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-stone-200 hover:border-amber-300 text-stone-700 hover:text-amber-700 font-medium text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:bg-amber-50"
          >
            <Instagram className="w-4 h-4" />
            Veja mais fotos no nosso Instagram
          </a>
        </div>
      </div>
    </section>
  );
}