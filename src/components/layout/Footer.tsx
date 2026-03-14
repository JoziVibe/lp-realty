import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

type FooterProps = React.ComponentProps<'footer'> & {
	children: React.ReactNode;
};

export function Footer({ className, ...props }: Omit<FooterProps, 'children'>) {
	return (
		<footer
			className={cn(
				'border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]',
				className,
			)}
			{...props}
		>
			<div className="relative container px-0">
				<div className="grid grid-cols-1 border-x md:grid-cols-4 md:divide-x">
					<div>
						<SocialCard title="Facebook" href="#" />
						<LinksGroup
							title="Company"
							links={[
								{ title: 'Home', href: '#' },
								{ title: 'About', href: '#' },
								{ title: 'Properties', href: '#' },
								{ title: 'Contact Us', href: '#' },
								{ title: 'Sell Your Home', href: '#' },
							]}
						/>
					</div>
					<div>
						<SocialCard title="Youtube" href="#" />
						<LinksGroup
							title="Properties"
							links={[
								{ title: 'Johannesburg', href: '#' },
								{ title: 'Cape Town', href: '#' },
								{ title: 'Knysna', href: '#' },
								{ title: 'Hartbeespoort', href: '#' },
								{ title: 'Paarl', href: '#' },
							]}
						/>
					</div>

					<div>
						<SocialCard title="TikTok" href="#" />
						<LinksGroup
							title="Services"
							links={[
								{ title: 'Media', href: '#' },
								{ title: 'Sales', href: '#' },
								{ title: 'Brokerage', href: '#' },
								{ title: 'Events', href: '#' },
								{ title: 'Listings', href: '#' },
							]}
						/>
					</div>
					<div>
						<SocialCard title="Instagram" href="#" />
						<LinksGroup
							title="Legal"
							links={[
								{ title: 'Cookie Policy', href: '#' },
								{ title: 'Terms of Use', href: '#' },
								{ title: 'Privacy Policy', href: '#' },
								{ title: 'POPIA', href: '#' },
								{ title: 'IEASA', href: '#' },
							]}
						/>
					</div>
				</div>
			</div>
			<div className="flex justify-center border-t p-3">
				<p className="text-muted-foreground text-xs">
					© {new Date().getFullYear()} LP Realty. All rights reserved.
				</p>
			</div>
		</footer>
	);
}

interface LinksGroupProps {
	title: string;
	links: { title: string; href: string }[];
}
function LinksGroup({ title, links }: LinksGroupProps) {
	return (
		<div className="p-2">
			<h3 className="text-foreground/75 mt-2 mb-4 text-xs font-medium tracking-wider uppercase">
				{title}
			</h3>
			<ul>
				{links.map((link) => (
					<li key={link.title}>
						<a
							href={link.href}
							className="text-muted-foreground hover:text-foreground text-xs"
						>
							{link.title}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

function SocialCard({ title, href }: { title: string; href: string }) {
	return (
		<a
			href={href}
			className="hover:bg-accent hover:text-accent-foreground flex items-center justify-between border-t border-b p-2 text-sm md:border-t-0"
		>
			<span className="font-medium">{title}</span>
			<ArrowRight className="h-4 w-4 transition-colors" />
		</a>
	);
}
