// LP2 — Webinars hero
// Figma node: 57:1214 (Banner 1) / 83:1857 (Banner image)
// Asset URLs below come from Figma MCP and expire ~7 days after generation.
// Re-run get_design_context on the banner image node to refresh if any break.

import { CTA } from '../../shared/cta-urls';

const imgBgShape    = "https://www.figma.com/api/mcp/asset/87c51d73-811f-4d16-a734-982480b585b0"; // big green blob behind cards
const imgArrowDown  = "https://www.figma.com/api/mcp/asset/597c0906-d6f1-4df5-92df-09c05ef2090f"; // curved arrow (bottom)
const imgArrowUp    = "https://www.figma.com/api/mcp/asset/fc1a109d-dd65-4afb-83eb-af02106497bc"; // curved arrow (top)
const imgStarBurst1 = "https://www.figma.com/api/mcp/asset/0fed3b83-8062-48d0-8c2e-3d38020914db"; // big white star burst (top-right)
const imgStarBurst2 = "https://www.figma.com/api/mcp/asset/b6f7add1-9be2-4d85-8b62-914765ff62dc"; // small white star burst
const imgStarBurst3 = "https://www.figma.com/api/mcp/asset/ebd0d8ee-f22d-40bb-9bb3-497883a65d65"; // white star burst (under card 1)
const imgLightning  = "https://www.figma.com/api/mcp/asset/ca87d589-fc26-469d-8396-03d7e4a8c1bd"; // yellow lightning bolt (bottom-right)

// Card 1 content (3 colorful stars + slider bar ornament)
const imgStarsCard  = "https://www.figma.com/api/mcp/asset/91057ffc-b49b-423e-99ee-b781ab06bb2b"; // 3 stars composite (pink / yellow / green)
const imgSliderBar  = "https://www.figma.com/api/mcp/asset/04ed704a-de43-4a35-9717-feeb16a35bf5"; // horizontal video-progress bar with knob

// Card 2 content (3 clip thumbnails repeating)
const imgClipThumb  = "https://www.figma.com/api/mcp/asset/f0afc76a-b416-47e2-b2d3-218f545a6a0e"; // play-with-lightning thumbnail art
const imgLike       = "https://www.figma.com/api/mcp/asset/8525993b-c878-4336-a474-be01a542316d";
const imgHeart      = "https://www.figma.com/api/mcp/asset/e2312473-82ec-491a-acbc-67b21d61719c";
const imgSupport    = "https://www.figma.com/api/mcp/asset/c1ad53a5-1b71-4d55-b1a1-54d44e32e15a";
const imgStarAvatar = "https://www.figma.com/api/mcp/asset/e15158e2-5bb5-4668-a701-63f37d1eebcf"; // small star "profile" icon

function Logo() {
  return (
    <img alt="Lumen5" src="/lumen5-logo.svg" width={181} height={48} className="block" />
  );
}

// One small clip thumbnail used 3x inside Card 2.
function ClipThumb() {
  return (
    <div className="bg-[#ccc8fe] border-4 border-[#201e26] border-solid h-[209px] rounded-2xl w-[108px] overflow-hidden relative">
      {/* Star avatar (top-left) */}
      <img alt="" src={imgStarAvatar} width={20} height={20} className="absolute left-[10px] top-[10px] block" />
      {/* Clip thumbnail content (lightning play button) */}
      <img alt="" src={imgClipThumb} width={94} height={91} className="absolute left-[3px] top-[60px] block" />
      {/* Reactions row (overlapping circles) */}
      <div className="absolute left-[10px] bottom-[14px] flex items-center">
        <div className="bg-[#3bd9eb] flex items-center justify-center rounded-full size-[20px] z-30 relative">
          <img alt="" src={imgLike} width={12} height={12} className="block" />
        </div>
        <div className="bg-[#f95580] flex items-center justify-center rounded-full size-[20px] -ml-[6px] z-20 relative">
          <img alt="" src={imgHeart} width={12} height={11} className="block" />
        </div>
        <div className="bg-[#46e378] flex items-center justify-center rounded-full size-[20px] -ml-[6px] z-10 relative">
          <img alt="" src={imgSupport} width={12} height={10} className="block" />
        </div>
      </div>
    </div>
  );
}

export default function Banner() {
  return (
    <div className="flex flex-col md:flex-row items-stretch relative bg-[#201e26]">
      {/* Left */}
      <div className="bg-[#201e26] flex flex-col gap-8 items-start px-6 md:pl-[110px] md:pr-0 py-[72px] md:py-[104px] flex-[1_0_0] min-w-0">
        <Logo />
        <div className="flex flex-col gap-6 items-start w-full max-w-[530px]">
          <h1 className="font-heading font-semibold text-[36px] leading-[44px] md:text-[58px] md:leading-[72px] text-[#fafafa]">
            Turn your webinar into a marketing machine
          </h1>
          <p className="font-body font-normal text-[18px] leading-[30px] md:text-[22px] md:leading-[38px] text-[#fafafa]">
            The 43 people who watched it live were never the point. The 12 LinkedIn posts you&apos;ll publish from it are.
          </p>
          <a href={CTA.signup} className="bg-[#5645f5] px-8 py-5 rounded-full font-heading font-bold text-[18px] leading-[30px] text-[#fafafa] whitespace-nowrap hover:opacity-90 transition-opacity">
            Build my clip pack
          </a>
        </div>
      </div>

      {/* Right — hidden on mobile */}
      <div className="hidden md:block bg-[#201e26] h-[705px] overflow-clip relative shrink-0 w-[800px]">
        {/* Green blob backdrop */}
        <div className="absolute flex h-[1213px] items-center justify-center left-[-168px] top-[-337px] w-[1224px] pointer-events-none">
          <div className="flex-none rotate-[-49.87deg]">
            <img alt="" src={imgBgShape} className="block h-[911px] w-[819px]" />
          </div>
        </div>

        {/* Curved arrow (top, points down-right) */}
        <div className="absolute flex h-[149px] items-center justify-center left-[452px] top-[91px] w-[132px] pointer-events-none">
          <div className="flex-none rotate-[-17.91deg]">
            <img alt="" src={imgArrowUp} className="block h-[125px] w-[98px]" />
          </div>
        </div>

        {/* Star burst — top-right */}
        <div className="absolute flex h-[108px] items-center justify-center left-[633px] top-[112px] w-[105px] pointer-events-none">
          <div className="flex-none rotate-[-11.32deg]">
            <img alt="" src={imgStarBurst1} className="block h-[92px] w-[89px]" />
          </div>
        </div>

        {/* Small star burst — right of card 1 */}
        <div className="absolute flex h-[68px] items-center justify-center left-[686px] top-[202px] w-[69px] pointer-events-none">
          <div className="flex-none rotate-[-55.73deg]">
            <img alt="" src={imgStarBurst2} className="block h-[50px] w-[49px]" />
          </div>
        </div>

        {/* Card 1: "The webinar nobody finished watching" */}
        <div className="absolute flex h-[458px] items-center justify-center left-[21px] top-[27px] w-[417px]">
          <div className="flex-none rotate-[-7.36deg]">
            {/* Purple offset shadow */}
            <div className="absolute inset-0 translate-x-[15px] translate-y-[14px] bg-[#5645f5] border-4 border-[#201e26] border-solid rounded-2xl" />
            {/* Card itself */}
            <div className="relative bg-[#fafafa] border-4 border-[#201e26] border-solid flex flex-col gap-6 items-start px-6 py-8 rounded-2xl w-[368px] h-[414px]">
              {/* 3 colorful stars composite */}
              <img alt="" src={imgStarsCard} className="block w-full rounded-lg" style={{ aspectRatio: "344/261" }} />
              {/* Slider bar */}
              <img alt="" src={imgSliderBar} className="block w-full h-[19px]" style={{ width: 315 }} />
              {/* Heading */}
              <p className="font-heading font-semibold text-[26px] leading-[35px] text-black">
                The webinar nobody finished watching.
              </p>
            </div>
          </div>
        </div>

        {/* Curved arrow (bottom, points right) */}
        <div className="absolute flex h-[123px] items-center justify-center left-[151px] top-[511px] w-[143px] pointer-events-none">
          <div className="-scale-y-100 flex-none rotate-[76.91deg]">
            <img alt="" src={imgArrowDown} className="block h-[124px] w-[97px]" />
          </div>
        </div>

        {/* White star burst — bottom under card 1 */}
        <div className="absolute flex h-[61px] items-center justify-center left-[527px] top-[579px] w-[60px] pointer-events-none">
          <div className="flex-none rotate-[-2.8deg]">
            <img alt="" src={imgStarBurst3} className="block h-[58px] w-[57px]" />
          </div>
        </div>

        {/* Card 2: "The content everyone wants to watch" — 3 clip stack */}
        <div className="absolute flex h-[430px] items-center justify-center left-[305px] top-[218px] w-[462px]">
          <div className="flex-none rotate-[13.94deg]">
            {/* Purple offset shadow */}
            <div className="absolute inset-0 translate-x-[6px] translate-y-[10px] bg-[#5645f5] border-4 border-[#201e26] border-solid rounded-2xl" />
            {/* Card */}
            <div className="relative bg-white border-4 border-[#201e26] border-solid rounded-2xl w-[390px] h-[346px] px-5 py-5 flex flex-col gap-3">
              {/* Three clip thumbnails in a row */}
              <div className="flex gap-[10px]">
                <ClipThumb />
                <ClipThumb />
                <ClipThumb />
              </div>
              {/* Heading */}
              <p className="font-heading font-semibold text-[26px] leading-[35px] text-black mt-1">
                The content everyone wants to watch.
              </p>
            </div>
          </div>
        </div>

        {/* Yellow lightning bolt — bottom-right */}
        <div className="absolute flex h-[127px] items-center justify-center left-[641px] top-[548px] w-[128px] pointer-events-none">
          <div className="flex-none rotate-[-49.83deg]">
            <img alt="" src={imgLightning} className="block h-[92px] w-[89px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
