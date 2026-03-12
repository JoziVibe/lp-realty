import type { Agent } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail } from 'lucide-react';

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="bg-white border border-neutral-light rounded-2xl p-6 text-center hover:border-brand-amber hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <Avatar className="w-20 h-20 mx-auto bg-teal-gradient">
        <AvatarImage src={agent.imageUrl} alt={agent.name} data-ai-hint={agent.imageHint} />
        <AvatarFallback className="bg-transparent font-serif text-2xl font-bold text-white">
          {agent.initials}
        </AvatarFallback>
      </Avatar>
      <h3 className="font-serif font-bold text-brand-teal text-lg mt-4">{agent.name}</h3>
      <p className="font-mono text-[10px] text-brand-amber uppercase tracking-[0.15em] mt-1">{agent.role}</p>
      <Button asChild variant="ghost" className="w-full mt-4 border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white rounded-sm">
        <Link href={`mailto:${agent.email}`}>
            <Mail className="mr-2 h-4 w-4" /> Email
        </Link>
      </Button>
    </div>
  );
}
