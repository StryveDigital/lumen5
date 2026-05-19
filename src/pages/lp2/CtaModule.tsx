// LP2 — final dark CTA module
// Figma node: 57:1269

import { CTA } from '../../shared/cta-urls';

const imgShapeLeft  = "/shape-cta-pink.svg";  // pink decorative shape
const imgShapeRight = "/shape-cta-green.svg"; // green decorative shape

export default function CtaModule() {
  return (
    <div className="bg-[#201e26] relative w-full overflow-hidden" style={{ minHeight: 432 }}>
      {/* Centered content */}
      <div className="flex flex-col gap-3 items-center justify-center py-[72px] md:py-[104px] px-6 md:px-16 relative z-10">
        <h2 className="font-heading font-semibold text-[28px] leading-[36px] md:text-[42px] md:leading-[60px] text-[#fafafa] text-center xl:whitespace-nowrap w-full max-w-full xl:max-w-none">
          Every webinar in your library can do more
        </h2>
        <p className="font-body font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-[#fafafa] text-center w-full max-w-[669px]">
          Twenty minutes from upload to schedule clip pack.
        </p>
        <a href={CTA.signup} className="bg-[#5645f5] flex items-center justify-center px-8 py-5 rounded-full shrink-0 hover:opacity-90 transition-opacity mt-4">
          <span className="font-heading font-semibold text-[18px] leading-[30px] text-[#fafafa] whitespace-nowrap">
            Build my clip pack
          </span>
        </a>
        <p className="font-body font-normal text-[16px] leading-[24px] text-[#fafafa] text-center opacity-70 mt-2">
          Free plan • No credit card required
        </p>
      </div>
      {/* Decorative shapes — peek in from the edges (hidden on mobile) */}
      <img alt="" className="hidden xl:block absolute h-[294px] left-[-107px] top-[77px] w-[281px] pointer-events-none" src={imgShapeLeft} />
      <img alt="" className="hidden xl:block absolute h-[231px] right-[-107px] top-[139px] w-[273px] pointer-events-none" src={imgShapeRight} />
    </div>
  );
}
