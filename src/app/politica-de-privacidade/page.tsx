import Link from "next/link";

export const metadata = {
    title: "Política de Privacidade | Buffet Aparecida",
    description:
        "Saiba como o Buffet Aparecida coleta, utiliza e protege os dados dos usuários em seu site.",
};

export default function PoliticaDePrivacidadePage() {
    return (
        <main className="bg-white text-neutral-800">
            <section className="mx-auto max-w-4xl px-6 py-16 md:px-8 md:py-20">

                {/* BOTÃO DE VOLTAR */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 mb-6"
                >
                    ← Voltar para o site
                </Link>

                <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
                    Política de Privacidade
                </h1>

                <p className="mt-4 text-base leading-7 text-neutral-600">
                    Esta Política de Privacidade explica como o Buffet Aparecida coleta,
                    utiliza e protege os dados dos usuários que acessam este site.
                </p>

                <div className="mt-10 space-y-10">
                    <section>
                        <h2 className="text-2xl font-semibold text-neutral-900">
                            1. Coleta de informações
                        </h2>
                        <p className="mt-3 leading-7 text-neutral-700">
                            Podemos coletar informações fornecidas diretamente pelo usuário,
                            como nome, telefone e outros dados enviados por meio de contato
                            via WhatsApp ou formulários, quando disponíveis.
                        </p>
                        <p className="mt-3 leading-7 text-neutral-700">
                            Também podemos coletar informações de navegação, como endereço IP,
                            tipo de dispositivo, navegador, páginas acessadas e interações
                            realizadas no site, com a finalidade de melhorar a experiência do
                            usuário e analisar o desempenho da plataforma.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-neutral-900">
                            2. Uso das informações
                        </h2>
                        <p className="mt-3 leading-7 text-neutral-700">
                            As informações coletadas podem ser utilizadas para:
                        </p>
                        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-neutral-700">
                            <li>atender solicitações de contato e orçamento;</li>
                            <li>melhorar a navegação e a usabilidade do site;</li>
                            <li>analisar acessos, cliques e interações;</li>
                            <li>aprimorar nossos serviços, conteúdos e canais de atendimento.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-neutral-900">
                            3. Cookies e tecnologias de rastreamento
                        </h2>
                        <p className="mt-3 leading-7 text-neutral-700">
                            Este site pode utilizar cookies e tecnologias semelhantes para
                            melhorar a experiência de navegação, entender o comportamento dos
                            visitantes e medir a efetividade de campanhas e canais de contato.
                        </p>
                        <p className="mt-3 leading-7 text-neutral-700">
                            Cookies são pequenos arquivos armazenados no dispositivo do usuário
                            e podem ser utilizados para lembrar preferências, analisar métricas
                            de acesso e apoiar funcionalidades do site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-neutral-900">
                            4. Compartilhamento de dados
                        </h2>
                        <p className="mt-3 leading-7 text-neutral-700">
                            Os dados poderão ser tratados por ferramentas e plataformas de
                            terceiros utilizadas para hospedagem, análise de navegação,
                            gerenciamento de métricas, contato e comunicação, sempre dentro
                            dos limites necessários para a operação do site e dos serviços
                            oferecidos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-neutral-900">
                            5. Links para terceiros
                        </h2>
                        <p className="mt-3 leading-7 text-neutral-700">
                            Este site pode conter links para canais e plataformas externas,
                            como WhatsApp e redes sociais. Ao acessar esses ambientes, o
                            usuário estará sujeito também às políticas de privacidade e aos
                            termos de uso das respectivas plataformas.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-neutral-900">
                            6. Segurança das informações
                        </h2>
                        <p className="mt-3 leading-7 text-neutral-700">
                            Adotamos medidas adequadas para proteger as informações tratadas
                            pelo site, buscando reduzir riscos de acesso não autorizado,
                            uso indevido, alteração ou divulgação indevida de dados.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-neutral-900">
                            7. Direitos do usuário
                        </h2>
                        <p className="mt-3 leading-7 text-neutral-700">
                            O usuário poderá solicitar informações sobre o tratamento de seus
                            dados, bem como pedir atualização, correção ou exclusão, quando
                            aplicável, nos termos da legislação vigente.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-neutral-900">
                            8. Alterações nesta política
                        </h2>
                        <p className="mt-3 leading-7 text-neutral-700">
                            Esta Política de Privacidade poderá ser atualizada a qualquer
                            momento para refletir melhorias no site, ajustes operacionais ou
                            mudanças legais. Recomendamos a consulta periódica desta página.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-neutral-900">
                            9. Contato
                        </h2>
                        <p className="mt-3 leading-7 text-neutral-700">
                            Em caso de dúvidas sobre esta Política de Privacidade ou sobre o
                            tratamento de dados realizado por este site, entre em contato pelos
                            canais oficiais de atendimento do Buffet Aparecida.
                        </p>
                    </section>
                </div>

                <p className="mt-12 text-sm text-neutral-500">
                    Última atualização: abril de 2026
                </p>
            </section>
        </main>
    );
}