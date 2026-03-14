import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  imageUrl: string;
  imageHint: string;
  href: string;
}

export function ServiceCard({ title, imageUrl, imageHint, href }: ServiceCardProps) {
  const plainTitle = title.replace(/<br\s*\/?>/g, ' ');

  return (
    <Link href={href} className="block group relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
      <Image
        src={imageUrl}
        alt={plainTitle}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
        data-ai-hint={imageHint}
      />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="bg-card/30 backdrop-blur-lg rounded-xl p-6 flex items-center justify-between">
          <h3
            className="text-xl font-serif font-medium text-primary"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div className="h-10 w-10 rounded-full bg-white/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#003f47] flex-shrink-0">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
