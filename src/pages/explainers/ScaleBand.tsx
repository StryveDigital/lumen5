// Explainers — dark scale strip (rhythm break + repeat CTA), mirrors the
// SmallCta pattern from LP2.
import { CTA } from '../../shared/cta-urls';

export default function ScaleBand() {
  return (
    <div className="bg-[#201e26] flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 md:gap-8 px-6 md:px-16 py-12 md:py-14 w-full">
      <p className="font-heading font-semibold text-[24px] leading-[32px] md:text-[32px] md:leading-[42px] text-[#fafafa]">
        Make one. Or make a hundred.{' '}
        <span className="text-[#fafafa]/60 font-normal font-body block md:inline text-[20px] md:text-[24px] mt-1 md:mt-0">
          Same team. No new headcount.
        </span>
      </p>
      <a
        href={CTA.signup}
        className="bg-[#5645f5] flex items-center justify-center px-8 py-5 rounded-full shrink-0 hover:opacity-90 transition-opacity"
      >
        <span className="font-heading font-semibold text-[18px] leading-[30px] text-[#fafafa] whitespace-nowrap">
          Try it out now for free
        </span>
      </a>
    </div>
  );
}
