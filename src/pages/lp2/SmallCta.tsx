// LP2 — inline dark CTA strip between Steps and StatsModule
// Figma node: 66:2484
import { CTA } from '../../shared/cta-urls';

export default function SmallCta() {
  return (
    <div className="bg-[#201e26] flex items-center justify-between px-16 py-12 w-full">
      <p className="font-heading font-semibold text-[32px] leading-[44px] text-[#fafafa]">
        One webinar in. A whole quarter of clips out.
      </p>
      <a href={CTA.signup} className="bg-[#5645f5] flex items-center justify-center px-8 py-5 rounded-full shrink-0 hover:opacity-90 transition-opacity">
        <span className="font-heading font-bold text-[18px] leading-[30px] text-[#fafafa] whitespace-nowrap">
          Make my next video
        </span>
      </a>
    </div>
  );
}
