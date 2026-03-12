import { agents } from '@/lib/data';
import { AgentCard } from '@/components/cards/AgentCard';
import { Section, SectionLabel } from '../layout/Section';

export function AgentsSection() {
  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto">
        <SectionLabel>Our Experts</SectionLabel>
        <h2>Meet the LP Realty Team</h2>
        <p className="mt-4 text-base text-neutral-mid">
          A dedicated team of professionals who are passionate about real estate and committed to your success.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </Section>
  );
}
