import Image from 'next/image';
import { Section } from '../layout/Section';
import { partners } from '@/lib/data';

export function PartnersStrip() {
  return (
    <Section className="bg-neutral-pale">
        <div className="text-center">
            <h3 className="text-sm font-semibold text-neutral-mid tracking-wider uppercase">Trusted by industry leaders</h3>
            <div className="mt-8 flow-root">
                <div className="-mx-6 grid grid-cols-2 gap-0.5 md:mx-0 md:grid-cols-3 lg:grid-cols-6">
                {partners.map((partner) => (
                    <div key={partner.name} className="col-span-1 flex items-center justify-center bg-white py-8 px-8">
                    <Image
                        className="max-h-12 w-full object-contain"
                        src={partner.logoUrl}
                        alt={partner.name}
                        width={158}
                        height={48}
                        data-ai-hint={partner.imageHint}
                    />
                    </div>
                ))}
                </div>
            </div>
        </div>
    </Section>
  );
}
