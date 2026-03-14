import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  videoUrl: string;
  imageHint: string;
  href: string;
}

export function ServiceCard({ title, videoUrl, imageHint, href }: ServiceCardProps) {
  const plainTitle = title.replace(/<br\s*\/?>/g, ' ');

  return (
    <Link href={href} className="block group relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
      <video
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        data-ai-hint={imageHint}
        aria-label={plainTitle}
      >
          Your browser does not support the video tag.
      </video>
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="bg-card/30 backdrop-blur-lg rounded-xl p-6 flex items-center justify-between">
          <h3
            className="text-3xl font-serif font-medium text-foreground"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div className="h-10 w-10 rounded-full bg-white/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-primary flex-shrink-0">
            <ArrowUpRight className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>
    </Link>
  );
}
