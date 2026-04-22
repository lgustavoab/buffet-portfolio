import LinksButtonList from "@/components/links/LinksButtonList";
import LinksMediaCarousel from "@/components/links/LinksMediaCarousel";
import LinksProfile from "@/components/links/LinksProfile";
import LinksSocialRow from "@/components/links/LinksSocialRow";
import LinksFooter from "@/components/links/LinksFooter";
import { COMPANY_NAME, linksPage } from "@/lib/data";

export const metadata = {
    title: `Links | ${COMPANY_NAME}`,
    description:
        "Acesse os canais oficiais do Buffet Aparecida e acompanhe nossos serviços, redes sociais e formas de contato.",
};

export default function LinksPage() {
    return (
        <main className="min-h-screen bg-[var(--premium-bg)] px-3 py-6 sm:px-6">
            <section className="premium-shell mx-auto w-full max-w-[430px] overflow-hidden rounded-[36px] border border-white/10 shadow-[var(--shadow-premium-lg)]">

                <LinksProfile
                    profileImage={linksPage.profileImage}
                    profileAlt={linksPage.profileAlt}
                    handle={linksPage.handle}
                    subtitle={linksPage.subtitle}
                    headline={linksPage.headline}
                />

                <LinksSocialRow items={linksPage.socialLinks} />

                <LinksMediaCarousel items={linksPage.featuredMedia} />

                <LinksButtonList items={linksPage.buttons} />

                {/* espaçamento antes do fechamento */}
                <div className="pt-2">
                    <LinksFooter />
                </div>

            </section>
        </main>
    );
}