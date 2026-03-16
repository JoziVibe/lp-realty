'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScrollTrigger } from '@/components/ui/use-scroll';
import { ArrowUpRight } from 'lucide-react';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScrollTrigger(10);

	const links = [
		{
			label: 'Home',
			href: '#',
		},
		{
			label: 'About',
			href: '#',
		},
		{
			label: 'Properties',
			href: '#',
		},
    {
			label: 'Contact Us',
			href: '#',
		},
	];

	React.useEffect(() => {
		if (open) {
			// Disable scroll
			document.body.style.overflow = 'hidden';
		} else {
			// Re-enable scroll
			document.body.style.overflow = '';
		}

		// Cleanup when component unmounts (important for Next.js)
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn(
				'sticky top-0 z-50 mx-auto w-full max-w-5xl border-b border-transparent md:border md:transition-all md:ease-out md:mt-2',
				{
					'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg md:top-4 md:max-w-4xl md:shadow md:rounded-full':
						scrolled && !open,
					'bg-background/90': open,
				},
			)}
		>
			<nav
				className={cn(
					'flex h-16 w-full items-center justify-between px-4 md:h-20 md:transition-all md:ease-out',
					{
						'md:px-6 md:h-16': scrolled,
					},
				)}
			>
				<Link href="/" className="flex items-center h-full py-2">
					<div className={cn("relative w-36 h-12", { "w-28 h-10": scrolled })}>
						<Image
							src="/logo.png"
							alt="LP Realty"
							fill
							className="object-contain object-left"
							priority
						/>
					</div>
				</Link>
				<div className="hidden items-center gap-2 md:flex">
					{links.map((link) => (
						<a key={link.label} className={buttonVariants({ variant: 'ghost', className: 'text-foreground' })} href={link.href}>
							{link.label}
						</a>
					))}
          <Button asChild className="rounded-full bg-[#003f47] text-primary-foreground hover:bg-[#003f47]/90">
            <Link href="#">
              Sell Your Home
              <ArrowUpRight />
            </Link>
          </Button>
				</div>
				<Button size="icon" variant="outline" onClick={() => setOpen(!open)} className="md:hidden">
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>

			<div
				className={cn(
					'bg-background/95 backdrop-blur-xl fixed top-16 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden md:hidden',
					open ? 'block' : 'hidden',
				)}
			>
				<div
					data-slot={open ? 'open' : 'closed'}
					className={cn(
						'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
						'flex h-full w-full flex-col justify-center items-center gap-y-12 p-8 pb-32',
					)}
				>
					<div className="flex flex-col items-center gap-y-8 w-full">
						{links.map((link) => (
							<a
								key={link.label}
								className={cn(
									"text-foreground hover:text-primary transition-colors text-[28px] font-serif font-medium",
								)}
								href={link.href}
							>
								{link.label}
							</a>
						))}
					</div>
					
                    <div className="flex justify-start w-full max-w-[280px] absolute bottom-12 left-6">
						<Button asChild className="rounded-full bg-[#003f47] text-primary-foreground hover:bg-[#003f47]/90 px-6 py-6 shadow-xl">
							<Link href="#">
                                Sell Your Home
                                <ArrowUpRight className="ml-2 w-5 h-5" />
                            </Link>
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
