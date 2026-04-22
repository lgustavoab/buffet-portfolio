import Image from "next/image";
import { Award, Users, Clock } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <p className="text-amber-700 text-sm font-semibold uppercase tracking-widest mb-3">
              Sobre Nós
            </p>

            <div className="w-12 h-[2px] bg-amber-700 mb-6 mx-auto lg:mx-0" />

            <h2
              className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Há mais de 30 anos realizando eventos com
              <br />
              <span className="text-amber-700">qualidade, cuidado e confiança</span>
            </h2>

            <p className="text-[17px] text-stone-600 leading-[1.9] mb-4 max-w-2xl mx-auto lg:mx-0">
              Somos um buffet localizado em Penápolis, especializado em casamentos,
              aniversários e eventos corporativos. Também oferecemos locação de materiais
              para tornar cada evento mais prático, organizado e bem executado.
            </p>

            <p className="text-stone-600 leading-[1.9] mb-10 max-w-2xl mx-auto lg:mx-0">
              Atendemos Penápolis, Birigui, Araçatuba e cidades próximas, sempre com foco
              em pontualidade, estrutura completa e atenção aos detalhes. Do cardápio à
              montagem, trabalhamos para que cada evento aconteça com tranquilidade e deixe
              uma excelente impressão para todos os convidados.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Qualidade",
                  desc: "Buffet bem executado e materiais selecionados com cuidado para valorizar cada ocasião.",
                },
                {
                  icon: Users,
                  title: "Atendimento",
                  desc: "Acompanhamento próximo, comunicação clara e atenção em cada etapa do evento.",
                },
                {
                  icon: Clock,
                  title: "Pontualidade",
                  desc: "Compromisso com horários, montagem organizada e mais segurança para o seu planejamento.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-amber-700" />
                  </div>
                  <p className="font-semibold text-stone-800 text-base">{title}</p>
                  <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-stone-100">
              <Image
                src="/ft-sobre-nos.jpg"
                alt="Buffet em Penápolis com atendimento para casamentos, aniversários e eventos corporativos"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Floating card */}
            <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-xl p-5 border border-stone-100">
              <p
                className="text-3xl font-bold text-amber-700"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                +5.000
              </p>
              <p className="text-stone-500 text-sm mt-1">Eventos Realizados</p>
            </div>

            {/* Decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-50 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}