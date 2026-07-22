// Explainers — final dark CTA. Reuses the LP2 decorative edge shapes.
import { CTA } from '../../shared/cta-urls';

export default function CtaModule() {
  return (
    <div className="bg-[#201e26] relative w-full overflow-hidden" style={{ minHeight: 432 }}>
      <div className="flex flex-col gap-3 items-center justify-center py-[72px] md:py-[104px] px-6 md:px-16 relative z-10">
        <h2 className="font-heading font-semibold text-[28px] leading-[36px] md:text-[42px] md:leading-[54px] text-[#fafafa] text-center w-full max-w-[820px]">
          The complicated thing you’ve been putting off? Explain it today.
        </h2>
        <p className="font-body font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-[#fafafa] text-center w-full max-w-[620px]">
          Describe the idea, pick a style, and watch it become a video.
        </p>
        <a href={CTA.signup} className="bg-[#5645f5] flex items-center justify-center px-8 py-5 rounded-full shrink-0 hover:opacity-90 transition-opacity mt-4">
          <span className="font-heading font-semibold text-[16px] leading-[30px] text-[#fafafa] whitespace-nowrap">
            Try it out now with a Basic plan
          </span>
        </a>
      </div>
      <img alt="" className="hidden xl:block absolute h-[294px] left-[-107px] top-[77px] w-[281px] pointer-events-none" src="/shape-cta-pink.svg" />
      <img alt="" className="hidden xl:block absolute h-[231px] right-[-107px] top-[139px] w-[273px] pointer-events-none" src="/shape-cta-green.svg" />
    </div>
  );
}
