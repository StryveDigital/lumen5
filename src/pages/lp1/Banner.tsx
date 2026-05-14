import { CTA } from '../../shared/cta-urls';

const imgShape3    = "https://www.figma.com/api/mcp/asset/51b8efd9-f7d3-4f66-b602-cfa5654d334d";
const imgMountains = "https://www.figma.com/api/mcp/asset/beddb354-6ffb-4f39-84e9-9eff4df118d7";
const imgSun       = "https://www.figma.com/api/mcp/asset/f53b1001-fdb6-4d96-9daa-dead4b798761";
const imgProfile   = "https://www.figma.com/api/mcp/asset/b720845e-dc7e-4c2f-872f-7a58b4f9ae03";
const imgVideo     = "https://www.figma.com/api/mcp/asset/48a21f44-e7cc-44a6-9394-dec907b7ea96";
const imgLike      = "https://www.figma.com/api/mcp/asset/a3a3d778-e23a-4402-99ef-bae09f0307a8";
const imgHeart     = "https://www.figma.com/api/mcp/asset/8b5b7da1-81ae-4d46-a278-6f185d4b9fa0";
const imgSupport   = "https://www.figma.com/api/mcp/asset/59f3608b-0cab-458b-a7f8-f25a27790812";
const imgArrow1    = "https://www.figma.com/api/mcp/asset/067486a0-a876-4869-a4c9-6421b75a7a6d";
const imgArrow2    = "https://www.figma.com/api/mcp/asset/248a006e-24b9-4081-b65f-cab79a873a29";
const imgStar1     = "https://www.figma.com/api/mcp/asset/c56e7a1a-498f-481e-b4d7-a7ca7efd32fd";
const imgStar2     = "https://www.figma.com/api/mcp/asset/2b220b1d-3912-40c0-adea-030d5d2da5b9";

function Logo() {
  return (
    <img alt="Lumen5" src="/lumen5-logo.svg" width={181} height={48} className="block" />
  );
}

export default function Banner() {
  return (
    <div className="flex items-stretch relative bg-[#201e26]">
      {/* Left */}
      <div className="bg-[#201e26] flex flex-col gap-8 items-start pl-[110px] py-[104px] flex-[1_0_0] min-w-0">
        <Logo />
        <div className="flex flex-col gap-6 items-start w-[530px]">
          <h1 className="font-heading font-semibold text-[58px] leading-[72px] text-[#fafafa]">
            Built for the marketer who has to press publish
          </h1>
          <p className="font-body font-normal text-[22px] leading-[38px] text-[#fafafa]">
            Turn the blog you already wrote into a video that's on-brand and ready to ship in minutes.
          </p>
          <a href={CTA.signup} className="bg-[#5645f5] px-8 py-5 rounded-full font-heading font-bold text-[18px] leading-[30px] text-[#fafafa] whitespace-nowrap hover:opacity-90 transition-opacity">
            Make my next video
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="bg-[#201e26] h-[705px] overflow-clip relative shrink-0 w-[800px]">
        {/* Pink blob */}
        <img alt="" className="absolute block max-w-none h-[797px] w-[942px] left-[38px] top-[-140px]" src={imgShape3} />

        {/* Blog card shadow */}
        <div className="absolute flex h-[433.87px] items-center justify-center left-[123px] top-[48px] w-[353.632px]">
          <div className="flex-none rotate-[-6.2deg]">
            <div className="bg-[#5645f5] border-4 border-[#201e26] border-solid h-[402.541px] rounded-2xl w-[312px]" />
          </div>
        </div>

        {/* LinkedIn card shadow */}
        <div className="absolute flex h-[539.682px] items-center justify-center left-[356px] top-[110px] w-[420.746px]">
          <div className="flex-none rotate-[6.15deg]">
            <div className="bg-[#5645f5] border-4 border-[#201e26] border-solid h-[503.061px] rounded-2xl w-[369px]" />
          </div>
        </div>

        {/* Blog card */}
        <div className="absolute flex h-[433.87px] items-center justify-center left-[108px] top-[34.34px] w-[353.632px]">
          <div className="flex-none rotate-[-6.2deg]">
            <div className="bg-[#fafafa] border-4 border-[#201e26] border-solid flex flex-col gap-6 items-end px-6 py-8 rounded-2xl w-[312px]">
              {/* Card image */}
              <div className="aspect-[278/176] bg-[#c4f3fa] border-4 border-[#201e26] border-solid overflow-clip relative rounded-2xl w-full">
                <img alt="" className="absolute bottom-0 left-[-4px] max-w-none w-[105%]" src={imgMountains} />
                <img alt="" className="absolute left-[90px] size-[44px] top-[27px]" src={imgSun} />
              </div>
              {/* Card content */}
              <div className="flex flex-col gap-6 items-start w-full">
                <div className="bg-[#3bd9eb] flex items-center justify-center px-4 py-2 rounded-full shrink-0">
                  <p className="font-heading font-semibold text-[14px] leading-[21px] text-[#201e26] whitespace-nowrap">1,400 words</p>
                </div>
                <p className="font-heading font-semibold leading-[35px] text-[#201e26] text-[26px] w-full">
                  The blog post nobody finished reading.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow down */}
        <div className="absolute flex h-[99.781px] items-center justify-center left-[196px] top-[498px] w-[126.322px]">
          <div className="-scale-y-100 flex-none rotate-[91.16deg]">
            <img alt="" className="block h-[124.378px] w-[97.283px]" src={imgArrow1} />
          </div>
        </div>

        {/* Arrow up */}
        <div className="absolute flex h-[158.699px] items-center justify-center left-[453.82px] top-[-10px] w-[152.586px]">
          <div className="flex-none rotate-[-35.87deg]">
            <img alt="" className="block h-[125.092px] w-[97.842px]" src={imgArrow2} />
          </div>
        </div>

        {/* LinkedIn card */}
        <div className="absolute flex h-[526.316px] items-center justify-center left-[343.94px] top-[94.69px] w-[419.307px]">
          <div className="flex-none rotate-[6.15deg]">
            <div className="bg-[#fafafa] border-4 border-[#201e26] border-solid flex flex-col gap-6 items-start px-4 py-6 rounded-2xl w-[369px]">
              {/* Profile header */}
              <div className="flex gap-4 items-center shrink-0">
                <div className="relative shrink-0 size-[70px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full rounded-full object-cover" src={imgProfile} />
                </div>
                <div className="flex flex-col gap-[2px] items-start justify-center">
                  <p className="font-heading font-semibold text-[20px] leading-[30px] text-black">Your company</p>
                  <div className="bg-[#e5e250] flex items-center justify-center px-4 py-2 rounded-full shrink-0">
                    <p className="font-heading font-semibold text-[14px] leading-[21px] text-[#201e26] whitespace-nowrap">Posted just now</p>
                  </div>
                </div>
              </div>
              {/* Heading */}
              <p className="font-heading font-semibold leading-[35px] text-black text-[26px] w-full">
                The video they'll actually finish watching.
              </p>
              {/* Video thumb */}
              <div className="aspect-[355/224] bg-[#ccc8fe] border-4 border-[#201e26] border-solid overflow-clip relative rounded-2xl w-full">
                <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgVideo} />
              </div>
              {/* Reactions — overlapping horizontal row */}
              <div className="flex items-center shrink-0">
                <div className="bg-[#3bd9eb] flex items-center justify-center rounded-full size-[40px] z-30 relative">
                  <img alt="" className="size-[22px] object-contain" src={imgLike} />
                </div>
                <div className="bg-[#f95580] flex items-center justify-center rounded-full size-[40px] -ml-[10px] z-20 relative">
                  <img alt="" className="size-[22px] object-contain" src={imgHeart} />
                </div>
                <div className="bg-[#46e378] flex items-center justify-center rounded-full size-[40px] -ml-[10px] z-10 relative">
                  <img alt="" className="size-[22px] object-contain" src={imgSupport} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stars */}
        <img alt="" className="absolute h-[92px] left-[653px] top-[91px] w-[89px]" src={imgStar1} />
        <div className="absolute flex h-[60.716px] items-center justify-center left-[527px] top-[579px] w-[59.766px]">
          <div className="flex-none rotate-[-2.8deg]">
            <img alt="" className="block h-[58px] w-[57px]" src={imgStar2} />
          </div>
        </div>
      </div>
    </div>
  );
}
