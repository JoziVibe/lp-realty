import { Section } from '../layout/Section';

const Stat = ({ value, label, isHero = false }: { value: string; label: string; isHero?: boolean; }) => {
    const valueClass = isHero ? "text-white" : "text-brand-teal";
    const labelClass = isHero ? "text-white/70" : "text-neutral-mid";
    
    return (
        <div className={`text-center ${isHero ? 'bg-brand-teal rounded-xl p-5' : ''}`}>
            <p className={`font-serif font-black text-4xl leading-none ${valueClass}`}>{value}</p>
            <p className={`font-sans text-xs mt-1 ${labelClass}`}>{label}</p>
        </div>
    );
};

export function StatsStrip() {
    return (
        <Section className="border-b border-neutral-light">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <Stat value="R500M+" label="In transactions" isHero />
                <Stat value="500K+" label="Social Followers" />
                <Stat value="20+" label="Years of Experience" />
                <Stat value="Top 1%" label="Of Agents Nationwide" />
            </div>
        </Section>
    );
}
