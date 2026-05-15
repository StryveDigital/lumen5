// LP3 — dark CTA strip between Features and StatsModule
// Figma node: 66:2490
import { CTA } from '../../shared/cta-urls';

export default function SmallCta() {
  return (
    <div className="bg-[#201e26] flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 md:gap-12 px-6 md:px-16 py-10 md:py-16 w-full">
      <p className="font-heading font-semibold text-[24px] leading-[36px] md:text-[36px] md:leading-[60px] text-[#fafafa] w-full max-w-[829px]">
        Your governance shouldn&rsquo;t live in a Slack thread. See it run on your own content.
      </p>
      <div className="flex flex-wrap gap-3 md:gap-5 items-center shrink-0">
        <a href={CTA.signup} className="bg-[#5645f5] flex items-center justify-center px-6 py-4 rounded-full hover:opacity-90 transition-opacity">
          <span className="font-heading font-bold text-[16px] leading-[30px] text-[#fafafa] whitespace-nowrap">
            Try with brand assets
          </span>
        </a>
        <a href={CTA.demo} className="bg-[#fafafa] flex items-center justify-center px-6 py-4 rounded-full hover:opacity-90 transition-opacity">
          <span className="font-heading font-bold text-[16px] leading-[30px] text-[#5645f5] whitespace-nowrap">
            Talk to us
          </span>
        </a>
      </div>
    </div>
  );
}
