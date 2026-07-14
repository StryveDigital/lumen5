// Explainers — inline dark CTA strip / "do more with less" scale beat.
// Rhythm break between the outcomes and the cost reframe.
import { CTA } from '../../shared/cta-urls';

export default function ScaleBand() {
  return (
    <div className="bg-[#201e26] flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 md:gap-0 px-6 md:px-16 py-10 md:py-14 w-full">
      <p className="font-heading font-semibold text-[24px] leading-[32px] md:text-[32px] md:leading-[44px] text-[#fafafa]">
        Make one. Or make a hundred.
        <span className="block font-body font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[34px] text-[#CECBF6] mt-2">
          Same team. Same afternoon. No new headcount.
        </span>
      </p>
      <a href={CTA.signup} className="bg-[#5645f5] flex items-center justify-center px-8 py-5 rounded-full shrink-0 hover:opacity-90 transition-opacity">
        <span className="font-heading font-semibold text-[18px] leading-[30px] text-[#fafafa] whitespace-nowrap">
          Try it out now for free
        </span>
      </a>
    </div>
  );
}
