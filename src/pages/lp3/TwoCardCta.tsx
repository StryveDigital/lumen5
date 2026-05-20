// LP3 — final two-card CTA: "Two ways to see it work"
// Figma node: 77:2088
import { CTA } from '../../shared/cta-urls';

const imgShapeLeft  = "/shape-lp3-pink.svg";   // top-left shape (pink wedge)
const imgShapeRight = "/shape-lp3-yellow.svg"; // right-edge shape (yellow chevron)

type Card = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  href: string;
};

const cards: Card[] = [
  {
    eyebrow: "Fastest",
    title: "Try it on your own content",
    body: "Free plan. No credit card. See your brand kit applied in real time.",
    cta: "Try now",
    href: CTA.signup,
  },
  {
    eyebrow: "5-min walkthrough",
    title: "Talk to us",
    body: "A quick walkthrough of the platform. If it’s a fit, we’ll book a deeper demo with the right team for your rollout.",
    cta: "Talk to us",
    href: CTA.demo,
  },
];

export default function TwoCardCta() {
  return (
    <div className="bg-[#201e26] relative w-full overflow-hidden py-[72px] md:py-[104px] px-6 md:px-16">
      {/* Decorative shapes peeking from edges (hidden on mobile) */}
      <img alt="" src={imgShapeLeft}  className="hidden xl:block absolute pointer-events-none" style={{ left: -80, top: 40, width: 239, height: 218 }} />
      <img alt="" src={imgShapeRight} className="hidden xl:block absolute pointer-events-none" style={{ right: -80, top: 360, width: 246, height: 295 }} />

      {/* Content */}
      <div className="relative flex flex-col gap-3 items-center justify-center z-10">
        <h2 className="font-heading font-semibold text-[28px] leading-[36px] md:text-[36px] md:leading-[60px] text-[#fafafa] text-center w-full max-w-[788px]">
          Two ways to see it work
        </h2>
        <div className="flex flex-col gap-9 items-center w-full">
          <p className="font-body font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-[#fafafa] text-center w-full max-w-[996px]">
            Try it on your own content right now. Or talk to us &mdash; we&rsquo;ll walk you through the platform in five minutes and book a deeper demo if it&rsquo;s a fit.
          </p>

          {/* Two cards */}
          <div className="flex flex-col xl:flex-row gap-7 items-stretch xl:items-center w-full md:w-auto">
            {cards.map(card => (
              <div key={card.title} className="bg-[#fafafa] relative h-[305px] w-full xl:w-[600px] rounded-2xl">
                <div className="absolute flex flex-col gap-[15px] items-start left-6 right-6 top-8">
                  <p className="font-heading font-semibold text-[20px] leading-[30px] text-black">
                    {card.eyebrow}
                  </p>
                  <p className="font-heading font-semibold text-[26px] leading-none text-[#201e26] w-full">
                    {card.title}
                  </p>
                  <p className="font-body font-normal text-[18px] leading-[30px] text-[#201e26] w-full">
                    {card.body}
                  </p>
                </div>
                <a href={card.href} className="absolute bg-[#5645f5] flex items-center justify-center left-6 top-[211px] px-6 py-4 rounded-full hover:opacity-90 transition-opacity">
                  <span className="font-heading font-semibold text-[16px] leading-[30px] text-[#fafafa] whitespace-nowrap">
                    {card.cta}
                  </span>
                </a>
              </div>
            ))}
          </div>

          <p className="font-body font-normal text-[18px] leading-[30px] text-[#fafafa] text-center w-[669px] opacity-80">
            Free plan &bull; No credit card required
          </p>
        </div>
      </div>
    </div>
  );
}
