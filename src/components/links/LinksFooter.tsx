export default function LinksFooter() {
    return (
        <section className="px-5 pb-8 pt-6 text-center sm:px-6">

            {/* linha elegante */}
            <div className="mx-auto mb-6 h-[1px] w-24 bg-[linear-gradient(90deg,transparent,rgba(201,146,43,0.7),transparent)]" />

            {/* mensagem */}
            <p className="mx-auto max-w-[260px] text-sm leading-relaxed text-white/70">
                Atendimento rápido e suporte completo para o seu evento.
            </p>

            {/* reforço */}
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/40">
                Buffet Aparecida
            </p>

        </section>
    );
}