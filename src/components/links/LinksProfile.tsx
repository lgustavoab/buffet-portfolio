import Image from "next/image";

type LinksProfileProps = {
    profileImage: string;
    profileAlt: string;
    handle: string;
    subtitle: string;
    headline: string;
};

export default function LinksProfile({
    profileImage,
    profileAlt,
    handle,
    subtitle,
    headline,
}: LinksProfileProps) {
    return (
        <section className="relative overflow-hidden px-5 pt-12 pb-6 text-center sm:px-6 sm:pt-14">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-[-90px] h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,146,43,0.22),transparent_68%)] blur-2xl" />
                <div className="absolute left-1/2 top-[-70px] h-[180px] w-[180px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent_70%)] blur-2xl" />
            </div>

            <div className="relative mx-auto">
                <div className="absolute left-1/2 top-[-8px] h-[140px] w-[140px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,146,43,0.25),transparent_65%)] blur-xl" />

                <div className="premium-gold-ring relative mx-auto flex h-[108px] w-[108px] items-center justify-center rounded-full bg-white/5 p-[4px] backdrop-blur-md">
                    <div className="overflow-hidden rounded-full border border-white/10">
                        <Image
                            src={profileImage}
                            alt={profileAlt}
                            width={100}
                            height={100}
                            priority
                            className="rounded-full"
                        />
                    </div>
                </div>

                <h1 className="mt-6 text-[2.1rem] font-bold leading-tight tracking-tight text-white">
                    {handle}
                </h1>

                <p className="mx-auto mt-2 max-w-[300px] text-sm leading-relaxed text-white/70">
                    {subtitle}
                </p>

                <div className="mx-auto mt-6 h-[1px] w-20 bg-[linear-gradient(90deg,transparent,rgba(201,146,43,1),transparent)]" />

                <p className="mx-auto mt-5 max-w-[300px] text-[13px] font-semibold uppercase tracking-[0.22em] text-white/90">
                    {headline}
                </p>
            </div>
        </section>
    );
}