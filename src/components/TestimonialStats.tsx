const imgShape8  = "https://www.figma.com/api/mcp/asset/f13670d4-4371-427e-8d29-37ce5f191469";
const imgBW      = "/bw-hotel.png";
const imgQuoteL  = "https://www.figma.com/api/mcp/asset/d032e11d-26f5-440a-8529-8d97763555d1";
const imgQuoteR  = "https://www.figma.com/api/mcp/asset/bf236df1-57c5-4add-8f2b-422d84e9e661";

const stats = [
  { value: "0%",  label: "Reduced time to create videos." },
  { value: "1+",  label: "Videos created in one year." },
  { value: "0%",  label: "Cost reduction compared to agency prices" },
];

export default function TestimonialStats() {
  return (
    <div className="bg-white flex flex-col gap-[120px] items-center justify-center py-[140px] w-full">
      {/* Heading + Image + Stats */}
      <div className="flex flex-col items-center shrink-0">
        {/* Heading */}
        <div className="flex flex-col gap-3 items-start text-center w-[736px] mb-12">
          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[30px] text-[#201e26] w-full">
            A real customer's machine
          </p>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] leading-[60px] text-[#201e26] w-full">
            How Best Western Hotels transformed its video marketing
          </p>
        </div>
        {/* Image + Stats — matches Figma absolute layout */}
        <div className="h-[594px] relative shrink-0 w-[1230px]">
          {/* Green blob shape */}
          <div className="absolute flex h-[256px] items-center justify-center left-[-55px] top-0 w-[271px]">
            <div className="flex-none rotate-[72.91deg]">
              <img alt="" className="block h-[222px] w-[200px]" src={imgShape8} />
            </div>
          </div>
          {/* Hotel photo */}
          <div className="absolute left-[56px] size-[479px] top-[115px]">
            <div className="absolute inset-0 rounded-3xl bg-[#e2e8f0] overflow-hidden">
              <img alt="Best Western Hotels" className="absolute block inset-0 max-w-none size-full object-cover" src={imgBW} />
            </div>
          </div>
          {/* Stats */}
          <div className="absolute flex flex-col gap-10 items-start left-[633px] top-[153px] w-[544px]">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex items-center w-full">
                <div className="h-[71px] overflow-clip relative shrink-0 w-[150px]">
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[52px] leading-[66px] text-[#201e26] whitespace-nowrap">
                    {value}
                  </p>
                </div>
                <p className="font-['Inter',sans-serif] font-normal text-[20px] leading-[36px] text-[#201e26] flex-1 min-w-0">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial quote */}
      <div className="bg-[#fafafa] flex gap-12 items-start p-12 rounded-2xl shrink-0 w-[1120px]">
        <div className="h-[93px] overflow-clip relative shrink-0 w-[120px]">
          <div className="absolute inset-[0_0_0.23%_56.01%]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgQuoteL} />
          </div>
          <div className="absolute inset-[0.23%_56%_0_0]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgQuoteR} />
          </div>
        </div>
        <div className="flex flex-col gap-6 flex-1 min-w-0">
          <p className="font-['Inter',sans-serif] font-normal text-[20px] leading-[36px] text-[#201e26]">
            Lumen5 cuts down on countless hours of work, and it's also fun to use. It doesn't feel like an addition to anyone's workload, and users are proud of what they're creating.
          </p>
          <div className="h-[52px]">
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[30px] text-[#201e26]">Robert Schaub</p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#201e26]">Marketing Program Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}
