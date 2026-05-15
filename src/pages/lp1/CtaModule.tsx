import { CTA } from '../../shared/cta-urls';

const imgShapeLeft  = "https://www.figma.com/api/mcp/asset/3dc2b1f2-76d1-416f-b915-ba94cd520903";
const imgShapeRight = "https://www.figma.com/api/mcp/asset/9d3a1f06-cd84-4bbc-b23b-f24216545a20";

export default function CtaModule() {
  return (
    <div className="bg-[#201e26] relative w-full overflow-hidden" style={{ minHeight: 432 }}>
      {/* Centered content */}
      <div className="flex flex-col gap-3 items-center justify-center py-[72px] md:py-[104px] px-6 md:px-16 relative z-10">
        <h2 className="font-heading font-semibold text-[32px] leading-[42px] md:text-[42px] md:leading-[60px] text-[#fafafa] text-center w-full max-w-[800px]">
          Your blog post is already half a video
        </h2>
        <p className="font-body font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-[#fafafa] text-center w-full max-w-[669px]">
          Make the other half in the time it takes to make coffee.
        </p>
        <a href={CTA.signup} className="bg-[#5645f5] flex items-center justify-center px-8 py-5 rounded-full shrink-0 hover:opacity-90 transition-opacity mt-4">
          <span className="font-heading font-bold text-[18px] leading-[30px] text-[#fafafa] whitespace-nowrap">
            Make my next video
          </span>
        </a>
        <p className="font-body font-normal text-[16px] leading-[24px] text-[#fafafa] text-center opacity-70 mt-2">
          Free plan • No credit card required
        </p>
      </div>
      {/* Decorative shapes — peek in from the edges (hidden on mobile) */}
      <img alt="" className="hidden md:block absolute h-[294px] left-[-107px] top-[77px] w-[281px] pointer-events-none" src={imgShapeLeft} />
      <img alt="" className="hidden md:block absolute h-[231px] right-[-107px] top-[139px] w-[273px] pointer-events-none" src={imgShapeRight} />
    </div>
  );
}
