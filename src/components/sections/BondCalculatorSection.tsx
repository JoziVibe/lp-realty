import { Section, SectionLabel } from '../layout/Section';
import { BondCalculator } from './BondCalculator';

export function BondCalculatorSection() {
  return (
    <Section className="bg-brand-teal-dark">
      <div className="text-center max-w-3xl mx-auto">
        <SectionLabel>Financial Tools</SectionLabel>
        <h2 className="text-white">South African Bond Calculator</h2>
        <p className="mt-4 text-base text-white/65">
          Estimate your monthly repayment based on the current SA prime rate (11.75%)
        </p>
      </div>
      <div className="max-w-3xl mx-auto mt-12">
        <BondCalculator />
      </div>
    </Section>
  );
}
