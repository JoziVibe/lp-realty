import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from 'next/image';

export function Hero() {
  const locationChips = ["Sea Point", "Sandton", "Clifton"];

  return (
    <section className="relative min-h-screen flex items-center bg-brand-teal-dark text-white overflow-hidden">
      <Image
        src="https://picsum.photos/seed/hero-bg/1920/1080"
        alt="Luxury home background"
        fill
        className="object-cover"
        priority
        data-ai-hint="luxury house pool"
      />
      <div className="absolute inset-0 bg-hero-gradient" />
      
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: 'linear-gradient(rgba(236,144,64,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(236,144,64,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative container z-10">
        <div className="max-w-xl text-center md:text-left">
          <span className="font-mono text-[11px] font-medium text-brand-amber uppercase tracking-[0.25em] mb-3 block">
            South Africa's Media-First Agency
          </span>
          <h1 className="font-serif font-black text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-white">
            We Build <span className="italic text-brand-amber">Community</span>
          </h1>
          <p className="mt-6 text-base lg:text-lg font-light leading-relaxed text-white/80">
            Backed by 500,000+ followers and an in-house film studio — we don't just market homes, we position them in front of qualified buyers.
          </p>
          
          <div className="mt-8 backdrop-blur-md bg-white/15 border border-white/25 rounded-2xl p-2 shadow-[0_8px_32px_rgba(0,0,0,0.2)] flex flex-col sm:flex-row items-center gap-2">
            <Select>
              <SelectTrigger className="w-full sm:w-auto bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 font-sans text-sm outline-none focus:bg-white/20 focus:border-white/40 transition-all duration-200">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cape-town">Cape Town</SelectItem>
                <SelectItem value="johannesburg">Johannesburg</SelectItem>
              </SelectContent>
            </Select>
            <Input 
              type="text" 
              placeholder="Search by suburb..." 
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 font-sans text-sm outline-none focus:bg-white/20 focus:border-white/40 transition-all duration-200"
            />
            <Button className="w-full sm:w-auto flex-shrink-0 bg-brand-amber text-white font-sans font-semibold text-xs uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-brand-amber-light transition-colors">
              Search
            </Button>
          </div>

          <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
            {locationChips.map(chip => (
              <button key={chip} className="backdrop-blur-sm bg-white/10 border border-white/20 text-white/80 font-mono text-[10px] uppercase tracking-[0.12em] px-4 py-1.5 rounded-full cursor-pointer hover:bg-white/25 hover:text-white transition-all">
                {chip}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
