const imgShapeLeft  = "https://www.figma.com/api/mcp/asset/3dc2b1f2-76d1-416f-b915-ba94cd520903";
const imgShapeRight = "https://www.figma.com/api/mcp/asset/9d3a1f06-cd84-4bbc-b23b-f24216545a20";

export default function CtaModule() {
  return (
    <div className="bg-[#201e26] relative w-full" style={{ minHeight: 432 }}>
      {/* Centered content */}
      <div className="absolute flex flex-col gap-3 items-center justify-center left-16 right-16 top-[104px]">
        <h2 className="font-heading font-semibold text-[36px] leading-[60px] text-[#fafafa] text-center w-[788px]">
          Your blog post is already half a video
        </h2>
        <p className="font-body font-normal text-[20px] leading-[36px] text-[#fafafa] text-center w-[669px] overflow-hidden text-ellipsis">
          Make the other half in the time it takes to make coffee.
        </p>
        <button className="bg-[#5645f5] flex items-center justify-center px-6 py-4 rounded-full shrink-0 hover:opacity-90 transition-opacity mt-3">
          <p className="font-heading font-bold text-[16px] leading-[30px] text-[#fafafa] whitespace-nowrap">
            Make my next video
          </p>
        </button>
        <p className="font-body font-normal text-[18px] leading-[30px] text-[#fafafa] text-center w-[669px] opacity-70">
          Free plan • No credit card required
        </p>
      </div>
      {/* Decorative shapes */}
      <img alt="" className="absolute h-[294px] left-[-107px] top-[77px] w-[281px] pointer-events-none" src={imgShapeLeft} />
      <img alt="" className="absolute h-[231px] left-[1258px] top-[139px] w-[273px] pointer-events-none" src={imgShapeRight} />
    </div>
  );
}
