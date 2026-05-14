// LP3 — Enterprise banner: "AI video without the brand risk"
// Figma node: 66:1790

const imgLogo = "/lumen5-logo.svg";

// Decorative assets from Figma MCP. These URLs expire ~7 days after generation;
// the page degrades to text + buttons if the right-side illustration assets 404.
const imgVideoPhoto   = "https://www.figma.com/api/mcp/asset/8c2afd60-6c3c-45a3-ad67-5aae8fc72078"; // video preview
const imgVideoMask    = "https://www.figma.com/api/mcp/asset/767530f5-310f-46f1-9e3b-b7f40e261207"; // mask shape
const imgShape3       = "https://www.figma.com/api/mcp/asset/c5893685-f0c9-4725-98ac-321a52236dd7"; // large bg blob
const imgFrame21      = "https://www.figma.com/api/mcp/asset/d1e590f4-62bc-48aa-8f16-ee4464ccc0e8"; // 3-circles card
const imgLightning    = "https://www.figma.com/api/mcp/asset/f07d74ca-0cb6-4741-9bf3-59e3f83d669d"; // lightning bolt
const imgProfile      = "https://www.figma.com/api/mcp/asset/dc1addb5-a576-450a-9b37-54dbfb2d1cb2"; // profile star
const imgVector4      = "https://www.figma.com/api/mcp/asset/1085f590-ac31-48be-8f49-77ddc5425a92"; // small decoration
const imgBrandUnion   = "https://www.figma.com/api/mcp/asset/ba38d2c8-a90e-4fda-ad38-179677c750b3"; // Brand voice card illustration
const imgBrandFrame   = "https://www.figma.com/api/mcp/asset/f1caa9ce-4f68-419a-9387-d9a7cac363da"; // Brand voice frame

export default function Banner() {
  return (
    <div className="bg-[#201e26] flex items-stretch w-full overflow-hidden">
      {/* Left: Logo + heading + buttons */}
      <div className="flex-1 flex flex-col gap-12 items-start justify-center pl-[160px] py-[104px] min-w-px">
        <img alt="Lumen5" src={imgLogo} width={200} height={53} className="block" />
        <div className="flex flex-col gap-8 items-start w-[503px]">
          <p className="font-heading font-semibold text-[22px] leading-[48px] text-[#fafafa]">
            For enterprise brand teams
          </p>
          <h1 className="font-heading font-semibold text-[52px] leading-[66px] text-[#fafafa]">
            AI video without the brand risk
          </h1>
          <p className="font-body font-normal text-[20px] leading-[36px] text-[#fafafa]">
            Locked brand kits. Multi-stage approval workflows. Regional rollouts that don&rsquo;t end in a CMO email.
          </p>
          <div className="flex gap-[18px] items-start mt-2">
            <button className="bg-[#5645f5] flex items-center justify-center px-6 py-4 rounded-full hover:opacity-90 transition-opacity">
              <span className="font-heading font-bold text-[16px] leading-[30px] text-[#fafafa] whitespace-nowrap">
                Get a demo
              </span>
            </button>
            <button className="bg-[#fafafa] flex items-center justify-center px-6 py-4 rounded-full hover:opacity-90 transition-opacity">
              <span className="font-heading font-bold text-[16px] leading-[30px] text-[#5645f5] whitespace-nowrap">
                Talk to sales
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Right: video illustration with decorative cards */}
      <div className="relative shrink-0 w-[800px] h-[705px] overflow-hidden">
        {/* Large purple blob behind everything */}
        <img alt="" src={imgShape3} className="absolute pointer-events-none" style={{ width: 920, height: 110, left: 10, top: 600, transform: 'rotate(-81.86deg)', transformOrigin: 'top left' }} />

        {/* Tilted LinkedIn post card with video preview */}
        <div className="absolute" style={{ left: 110, top: 112, transform: 'rotate(-5.31deg)', transformOrigin: 'center' }}>
          <div className="bg-[#5645f5] absolute" style={{ width: 540, height: 325, top: 24, left: 20, borderRadius: 16, border: '4px solid #201e26' }} />
          <div className="bg-[#fafafa] relative flex flex-col items-center pb-9 pt-6 px-4" style={{ width: 540, height: 331, borderRadius: 16, border: '4px solid #201e26' }}>
            <div className="bg-[#ccc8fe] overflow-hidden relative" style={{ width: 497, height: 280, borderRadius: 16, border: '4px solid #201e26' }}>
              <img alt="" src={imgVideoPhoto} className="absolute inset-0 size-full object-cover" />
              <img alt="" src={imgVideoMask} className="absolute inset-0 size-full opacity-0" />
            </div>
          </div>
        </div>

        {/* Top: 3 profile/star cards (rotated) */}
        <div className="absolute" style={{ left: 53, top: 33, transform: 'rotate(-15.63deg)', transformOrigin: 'center' }}>
          <div className="bg-white flex gap-3 items-center px-[25px] py-[18px] rounded-[16px]" style={{ border: '4px solid #201e26' }}>
            <img alt="" src={imgProfile} width={70} height={70} className="block shrink-0" />
            <img alt="" src={imgProfile} width={70} height={70} className="block shrink-0" />
            <img alt="" src={imgProfile} width={70} height={70} className="block shrink-0" />
          </div>
        </div>

        {/* Bottom-left: 3-circles card (rotated +7deg) */}
        <img alt="" src={imgFrame21} className="absolute pointer-events-none" style={{ left: 53, top: 461, width: 254, height: 89, transform: 'rotate(7.31deg)', transformOrigin: 'center' }} />

        {/* Top-right: lightning bolt (rotated -14.5deg) */}
        <img alt="" src={imgLightning} className="absolute pointer-events-none" style={{ left: 612, top: 157, width: 89, height: 92, transform: 'rotate(-14.56deg)', transformOrigin: 'center' }} />

        {/* Small floating decoration */}
        <img alt="" src={imgVector4} className="absolute pointer-events-none" style={{ left: 287, top: 555, width: 57, height: 58, transform: 'rotate(-2.8deg)', transformOrigin: 'center' }} />

        {/* Bottom-right: "Brand voice" card (rotated +9.6deg) */}
        <div className="absolute" style={{ left: 477, top: 330, transform: 'rotate(9.6deg)', transformOrigin: 'center' }}>
          <div className="bg-white relative" style={{ width: 237, height: 281, borderRadius: 16, border: '4px solid #201e26' }}>
            <img alt="" src={imgBrandUnion} className="absolute" style={{ left: 25, top: 30, width: 186, height: 173 }} />
            <img alt="" src={imgBrandFrame} className="absolute" style={{ left: 78, top: 60, width: 127, height: 66 }} />
            <p className="font-heading font-semibold text-[26px] leading-[35px] text-black absolute" style={{ left: 35, top: 220, width: 157 }}>
              Brand voice
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
