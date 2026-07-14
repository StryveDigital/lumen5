import Footer from '../../shared/Footer'

type Card = {
  eyebrow: string
  title: string
  desc: string
  href: string
  external?: boolean
}

const cards: Card[] = [
  {
    eyebrow: 'Campaign Plan',
    title: 'The explainer launch, end to end',
    desc: 'Positioning, ecosystem, production approach, storyboard, rollout, and open items in one place.',
    href: '/plan',
    external: true,
  },
  {
    eyebrow: 'Landing Page · Launch',
    title: 'Finally. Explainer videos anyone can make.',
    desc: 'Animated Explainers launch page: real style reel, three-step product demo, outcomes by team, and launch CTA.',
    href: '/explainers',
  },
  {
    eyebrow: 'Landing Page · 01',
    title: 'Built for the marketer who has to press publish',
    desc: 'Hero marketing page: case study, three-step demo, weekly cadence proof, and CTA.',
    href: '/lp1',
  },
  {
    eyebrow: 'Landing Page · 02',
    title: 'Turn your webinar into a marketing machine',
    desc: 'Webinar funnel pitch: repurposing flow, customer proof, and conversion CTA.',
    href: '/lp2',
  },
  {
    eyebrow: 'Landing Page · 03',
    title: 'AI video without the brand risk',
    desc: 'Enterprise positioning: brand safety, security and compliance, two-card sales CTA.',
    href: '/lp3',
  },
]

export default function VideoStrategy() {
  return (
    <div className="bg-[#201e26] min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-[60px] py-8">
        <img alt="Lumen5" src="/lumen5-logo.svg" width={150} height={40} className="block" />
        <p className="font-heading text-[12px] tracking-[0.18em] uppercase text-[#fafafa] opacity-60">
          Video Strategy · 2026
        </p>
      </div>

      {/* Hero */}
      <div className="px-[60px] pt-12 pb-16 max-w-[1280px] mx-auto w-full">
        <p className="font-heading font-semibold text-[14px] leading-[21px] text-[#5645f5] tracking-[0.15em] uppercase mb-6">
          Lumen5 · Explainer Campaign
        </p>
        <h1 className="font-heading font-semibold text-[56px] leading-[64px] text-[#fafafa] max-w-[820px]">
          The plan, and three pages to land it.
        </h1>
        <p className="font-body font-normal text-[20px] leading-[34px] text-[#fafafa] opacity-70 max-w-[640px] mt-6">
          Open the campaign plan for the strategy overview, or jump into any of the three landing pages
          we've built for the launch.
        </p>
      </div>

      {/* Card grid */}
      <div className="px-[60px] pb-24 max-w-[1280px] mx-auto w-full flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map(card => (
            <a
              key={card.href}
              href={card.href}
              target={card.external ? '_blank' : undefined}
              rel={card.external ? 'noopener noreferrer' : undefined}
              className="group block bg-[#fafafa] rounded-2xl px-9 py-10 transition-transform hover:-translate-y-1"
            >
              <p className="font-heading font-semibold text-[12px] leading-[18px] text-[#5645f5] tracking-[0.18em] uppercase mb-5">
                {card.eyebrow}
              </p>
              <h2 className="font-heading font-semibold text-[28px] leading-[34px] text-[#201e26] mb-3">
                {card.title}
              </h2>
              <p className="font-body font-normal text-[16px] leading-[26px] text-[#201e26] opacity-70 mb-8">
                {card.desc}
              </p>
              <span className="inline-flex items-center gap-2 font-heading font-semibold text-[14px] text-[#5645f5] uppercase tracking-[0.12em]">
                Open
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M1 6h17M13 1l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
