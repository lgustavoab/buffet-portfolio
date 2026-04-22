import {
  Heart,
  Shield,
  Clock,
  ClipboardList,
  Star,
  CheckCircle,
} from "lucide-react";
import { differentials } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Shield,
  Clock,
  ClipboardList,
  Star,
  CheckCircle,
};

export default function DifferentialsSection() {
  return (
    <section id="diferenciais" className="py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-700 text-sm font-semibold uppercase tracking-widest mb-3">
            Por que nos escolher
          </p>
          <div className="w-10 h-[2px] bg-amber-700 mx-auto mb-6" />
          <h2
            className="text-3xl sm:text-4xl font-bold text-stone-900"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Nossos Diferenciais
          </h2>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto text-lg">
            Cada detalhe do nosso trabalho é pensado para que o seu evento seja perfeito.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((diff) => {
            const Icon = iconMap[diff.icon] ?? CheckCircle;
            return (
              <div
                key={diff.title}
                className="bg-white rounded-2xl p-7 border border-amber-100 hover:border-amber-300 hover:shadow-md transition-all duration-300 group text-center sm:text-left"
              >
                <div className="w-12 h-12 mx-auto sm:mx-0 rounded-xl bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="font-semibold text-stone-800 text-base mb-2">
                  {diff.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {diff.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}