import LinksButtonCard from "./LinksButtonCard";

type ButtonItem = {
    id: string;
    title: string;
    description: string;
    href: string;
    icon: string;
    highlight?: boolean;
};

type LinksButtonListProps = {
    items: ButtonItem[];
};

export default function LinksButtonList({ items }: LinksButtonListProps) {
    return (
        <section className="space-y-3 px-5 pb-8 sm:px-6 sm:space-y-3.5 sm:pb-10">
            {items.map((item) => (
                <LinksButtonCard key={item.id} item={item} />
            ))}
        </section>
    );
}