// LP3 — final two-card CTA: "Two ways to see it work"
// Figma node: 77:2088
import { CTA } from '../../shared/cta-urls';

const imgShape6 = "https://www.figma.com/api/mcp/asset/20ca6685-919c-47fc-bdd4-168eea659567"; // right-edge shape (pink/orange)
const imgShape8 = "https://www.figma.com/api/mcp/asset/73a1329d-2708-41d3-95ab-539c25dfc8ec"; // left-edge shape (green)

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
    title: "Talk to sales",
    body: "A quick walkthrough of the platform. If it’s a fit, we’ll book a deeper demo with the right team for your rollout.",
    cta: "Talk to sales",
    href: CTA.demo,
  },
];

export default function TwoCardCta() {
  return (
    <div className="bg-[#201e26] relative w-full overflow-hidden py-[72px] md:py-[104px] px-6 md:px-16">
      {/* Decorative shapes peeking from edges (hidden on mobile) */}
      <img alt="" src={imgShape8} className="hidden xl:block absolute pointer-events-none" style={{ left: -36, top: 63, width: 200, height: 222, transform: 'rotate(94.9deg)' }} />
      <img alt="" src={imgShape6} className="hidden xl:block absolute pointer-events-none" style={{ right: -120, top: 380, width: 281, height: 294, transform: 'rotate(124.41deg)' }} />

      {/* Content */}
      <div className="relative flex flex-col gap-3 items-center justify-center z-10">
        <h2 className="font-heading font-semibold text-[28px] leading-[36px] md:text-[36px] md:leading-[60px] text-[#fafafa] text-center w-full max-w-[788px]">
          Two ways to see it work
        </h2>
        <div className="flex flex-col gap-9 items-center w-full">
          <p className="font-body font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-[#fafafa] text-center w-full max-w-[996px]">
            Try it on your own content right now. Or talk to sales &mdash; they&rsquo;ll walk you through the platform in five minutes and book a deeper demo if it&rsquo;s a fit.
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
                  <span className="font-heading font-bold text-[16px] leading-[30px] text-[#fafafa] whitespace-nowrap">
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
