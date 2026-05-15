// LP1 — Blogs hero. Right-side illustration is a single designer-provided SVG
// (replaces the previous composite of ~12 Figma MCP asset URLs).

import { CTA } from '../../shared/cta-urls';

const imgBannerIllustration = "/lp1-banner.svg";

function Logo() {
  return (
    <img alt="Lumen5" src="/lumen5-logo.svg" width={181} height={48} className="block" />
  );
}

export default function Banner() {
  return (
    <div className="flex flex-col xl:flex-row items-stretch relative bg-[#201e26]">
      {/* Left */}
      <div className="bg-[#201e26] flex flex-col gap-8 items-start px-6 xl:pl-[110px] xl:pr-0 py-[72px] md:py-[104px] flex-[1_0_0] min-w-0">
        <Logo />
        <div className="flex flex-col gap-6 items-start w-full max-w-[530px]">
          <h1 className="font-heading font-semibold text-[36px] leading-[44px] md:text-[58px] md:leading-[72px] text-[#fafafa]">
            Built for the marketer who has to press publish
          </h1>
          <p className="font-body font-normal text-[18px] leading-[30px] md:text-[22px] md:leading-[38px] text-[#fafafa]">
            Turn the blog you already wrote into a video that's on-brand and ready to ship in minutes.
          </p>
          <a href={CTA.signup} className="bg-[#5645f5] px-8 py-5 rounded-full font-heading font-semibold text-[18px] leading-[30px] text-[#fafafa] whitespace-nowrap hover:opacity-90 transition-opacity">
            Make my next video
          </a>
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
