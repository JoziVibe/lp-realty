import { Section } from "../layout/Section";

const stats = [
    { value: "100%", label: "Satisfaction Rate" },
    { value: "500+", label: "Property Sales" },
    { value: "150+", label: "Countries / Cities" },
    { value: "2,00+", label: "Positive Reviews" }
];

export function Stats() {
    return (
        <Section className="bg-secondary">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                        <p className="text-4xl md:text-5xl font-bold text-[#003f47]">{stat.value}</p>
                        <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                ))}
            </div>
        </Section>
    )
}
