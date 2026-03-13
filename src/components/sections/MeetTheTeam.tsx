import { agents } from '@/lib/data';
import { Section } from '../layout/Section';
import { TeamSlider } from '../ui/team-slider';

export function MeetTheTeam() {
  return (
    <Section id="team" className="bg-secondary" removePadding>
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-medium text-foreground">Meet Our <span className="italic text-primary">Expert Agents</span></h2>
          <p className="mt-2 text-lg text-muted-foreground">
            The driving force behind our success. A collective of passionate, dedicated, and knowledgeable real estate professionals committed to achieving your goals.
          </p>
        </div>
        <TeamSlider agents={agents} />
      </div>
    </Section>
  );
}
