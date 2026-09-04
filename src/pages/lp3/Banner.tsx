// LP3 — Enterprise banner: "AI video without the brand risk"
// Right-side illustration is a single designer-provided SVG (replaces the
// previous composite of ~10 Figma MCP asset URLs).

import { CTA } from '../../shared/cta-urls';

const imgLogo = "/lumen5-logo.svg";
const imgBannerIllustration = "/lp3-banner.svg";

export default function Banner() {
  return (
    <div className="bg-[#201e26] flex flex-col xl:flex-row items-stretch w-full overflow-hidden">
      {/* Left: Logo + heading + buttons */}
      <div className="flex-1 flex flex-col gap-8 md:gap-12 items-start justify-center px-6 xl:pl-[110px] xl:pr-0 py-[72px] md:py-[104px] min-w-px">
        <img alt="Lumen5" src={imgLogo} width={200} height={53} className="block" />
        <div className="flex flex-col gap-6 md:gap-8 items-start w-full max-w-[503px]">
          <p className="font-heading font-semibold text-[18px] leading-[28px] md:text-[22px] md:leading-[48px] text-[#fafafa]">
            For enterprise brand teams
          </p>
          <h1 className="font-heading font-semibold text-[32px] leading-[40px] md:text-[52px] md:leading-[66px] text-[#fafafa]">
            AI video without the brand risk
          </h1>
          <p className="font-body font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-[#fafafa]">
            Locked brand kits. Multi-stage approval workflows. Regional rollouts that don&rsquo;t end in a CMO email.
          </p>
          <div className="flex flex-col gap-3 mt-2 w-full">
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <a href={CTA.signup} className="bg-[#5645f5] flex items-center justify-center px-6 py-4 rounded-full hover:opacity-90 transition-opacity w-fit">
                <span className="font-heading font-semibold text-[16px] leading-[30px] text-[#fafafa] whitespace-nowrap">
                  See it on your brand instantly
                </span>
              </a>
              <a href={CTA.demo} className="border border-[#fafafa]/40 flex items-center justify-center px-6 py-4 rounded-full hover:border-[#fafafa] transition-colors w-fit">
                <span className="font-heading font-semibold text-[16px] leading-[30px] text-[#fafafa] whitespace-nowrap">
                  Talk to our team
                </span>
              </a>
            </div>
            <p className="font-body font-normal text-[14px] leading-[22px] text-[#fafafa] opacity-70">
              Free plan &bull; No credit card required
            </p>
          </div>
        </div>
      </div>

      {/* Right illustration — hidden on mobile, full-width 800x705 SVG on desktop */}
      <img
        alt=""
        src={imgBannerIllustration}
        className="hidden xl:block shrink-0 w-[800px] h-[705px]"
      />
    </div>
  );
}
