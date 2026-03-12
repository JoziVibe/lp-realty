import { Section, SectionLabel } from '../layout/Section';

const SocialCard = ({ platform, handle, content, embedUrl }: { platform: string; handle: string; content: string; embedUrl: string }) => (
    <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <div className="p-4 border-b border-neutral-light flex justify-between items-center">
            <span className="font-sans font-semibold text-sm">{platform}</span>
            <span className="font-mono text-xs text-neutral-mid">@{handle}</span>
        </div>
        <div className="aspect-w-9 aspect-h-16">
            <iframe
                src={embedUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                title={`${platform} embed`}
            ></iframe>
        </div>
        <div className="p-4">
            <p className="font-sans text-xs text-neutral-charcoal">{content}</p>
        </div>
    </div>
);

export function SocialProof() {
    // Note: These are example embed URLs. Replace with actual content.
    const socialContent = [
        { platform: 'YouTube', handle: 'LPrealtyTV', content: 'House Tour: R85M Fresnaye Mansion...', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { platform: 'Instagram', handle: 'lprealty', content: 'Just Listed! This Clifton gem won\'t last long.', embedUrl: 'https://www.instagram.com/p/C4c_1Y5oZbX/embed' },
        { platform: 'TikTok', handle: 'lprealty.co.za', content: '3 Things to look for in a luxury home...', embedUrl: 'https://www.tiktok.com/embed/v2/7109503160002137349' },
    ];
    return (
        <Section className="bg-neutral-pale">
            <div className="text-center max-w-2xl mx-auto">
                <SectionLabel>Media-First Advantage</SectionLabel>
                <h2>Taking South Africa to the World</h2>
                <p className="mt-4 text-base text-neutral-mid">
                    With over 500,000 followers, we don't just list properties; we launch them. Our in-house media team creates cinematic content that captivates a global audience of qualified buyers.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {socialContent.map(item => <SocialCard key={item.platform} {...item} />)}
            </div>
        </Section>
    );
}
