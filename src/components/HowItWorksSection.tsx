import { steps } from "@/lib/data";

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-700 text-sm font-semibold uppercase tracking-widest mb-3">
            Processo
          </p>
          <div className="w-10 h-[2px] bg-amber-700 mx-auto mb-6" />
          <h2
            className="text-3xl sm:text-4xl font-bold text-stone-900"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Como funciona?
          </h2>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto text-lg">
            Do primeiro contato até o dia do evento — simples, claro e sem complicação.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-stone-200 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={step.number} className="flex flex-col items-center text-center group">
                {/* Number circle */}
                <div className="w-20 h-20 rounded-full bg-white border-2 border-stone-200 group-hover:border-amber-400 flex items-center justify-center mb-5 transition-colors duration-300 shadow-sm">
                  <span
                    className="text-xl font-bold text-amber-700"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {step.number}
                  </span>
                </div>
                <h3 className="font-semibold text-stone-800 text-sm mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-stone-500 text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
