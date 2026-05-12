const imgShape8  = "https://www.figma.com/api/mcp/asset/af56884b-636b-4dc2-a517-0de6972fe38a";
const imgBW      = "https://www.figma.com/api/mcp/asset/ffe15b16-3f04-4a2e-99c0-ee08fe373c99";
const imgQuoteL  = "https://www.figma.com/api/mcp/asset/88442435-9ad6-4d15-8632-cb92a99f8b9d";
const imgQuoteR  = "https://www.figma.com/api/mcp/asset/1e0667b7-dd00-4f1e-b23c-825ea96ed4ec";

const stats = [
  { value: "97%",  label: "Reduced time to create videos." },
  { value: "480+", label: "Videos created in one year." },
  { value: "94%",  label: "Cost reduction compared to agency prices" },
];

export default function TestimonialStats() {
  return (
    <div className="bg-white flex flex-col gap-[97px] items-center justify-center py-[104px] px-[160px] w-full">
      {/* Heading + Stats */}
      <div className="flex flex-col items-center w-full">
        {/* Heading */}
        <div className="flex flex-col gap-3 items-center text-center w-[736px] mb-12">
          <p className="font-heading font-semibold text-[20px] leading-[30px] text-[#201e26]">
            A real customer's machine
          </p>
          <h2 className="font-heading font-semibold text-[36px] leading-[60px] text-[#201e26]">
            How Best Western Hotels transformed its video marketing
          </h2>
        </div>
        {/* Image + Stats */}
        <div className="flex items-center gap-16 w-full max-w-[1230px]">
          {/* Image */}
          <div className="relative shrink-0">
            <div className="absolute flex h-[256.107px] items-center justify-center left-[-55px] top-0 w-[270.891px] pointer-events-none">
              <div className="flex-none rotate-[72.91deg]">
                <img alt="" className="block h-[222px] w-[200px]" src={imgShape8} />
              </div>
            </div>
            <img alt="Best Western Hotels" className="relative z-10 size-[479px] object-cover rounded-3xl" src={imgBW} />
          </div>
          {/* Stats */}
          <div className="flex flex-col gap-10 flex-1">
            {stats.map(({ value, label }) => (
              <div key={value} className="flex items-center gap-6">
                <div className="h-[71px] overflow-clip relative shrink-0 w-[150px]">
                  <p className="font-heading font-semibold text-[52px] leading-[66px] text-[#201e26] whitespace-nowrap">
                    {value}
                  </p>
                </div>
                <p className="font-body font-normal text-[20px] leading-[36px] text-[#201e26] flex-1">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial quote */}
      <div className="bg-[#fafafa] flex gap-12 items-start p-12 rounded-2xl w-[1120px]">
        <div className="h-[93px] overflow-clip relative shrink-0 w-[120px] flex">
          <img alt="" className="w-1/2 h-auto object-contain" src={imgQuoteR} />
          <img alt="" className="w-1/2 h-auto object-contain" src={imgQuoteL} />
        </div>
        <div className="flex flex-col gap-6 flex-1">
          <p className="font-body font-normal text-[20px] leading-[36px] text-[#201e26]">
            Lumen5 cuts down on countless hours of work, and it's also fun to use. It doesn't feel like an addition to anyone's workload, and users are proud of what they're creating.
          </p>
          <div className="flex flex-col gap-[2px]">
            <p className="font-heading font-semibold text-[20px] leading-[30px] text-[#201e26]">Robert Schaub</p>
            <p className="font-body font-normal text-[16px] leading-[24px] text-[#201e26]">Marketing Program Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}
