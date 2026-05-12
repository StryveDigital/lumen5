const imgSiemens     = "https://www.figma.com/api/mcp/asset/f14de191-1664-44aa-9ed8-27b9183b6235";
const imgBestWestern = "https://www.figma.com/api/mcp/asset/0bfeda42-1f44-4e8f-92a0-20c9d51dede5";
const imgCisco       = "https://www.figma.com/api/mcp/asset/b2de9c82-10e3-4367-a20f-a21f1a7e4469";
const imgElectrolux  = "https://www.figma.com/api/mcp/asset/2a5294b8-db76-4c2c-a713-b99e09977318";
const imgEmerson     = "https://www.figma.com/api/mcp/asset/b848339c-1884-428e-9c1a-60820bc26e0f";

const logos = [
  { src: imgSiemens,     alt: "Siemens" },
  { src: imgBestWestern, alt: "Best Western" },
  { src: imgCisco,       alt: "Cisco" },
  { src: imgElectrolux,  alt: "Electrolux Professional" },
  { src: imgEmerson,     alt: "Emerson" },
];

export default function LogoCarousel() {
  return (
    <div className="bg-[#fafafa] flex flex-col gap-10 h-[328px] items-center justify-center overflow-clip py-[104px] relative w-full">
      <p className="font-heading font-semibold text-[20px] leading-[30px] text-[#201e26] text-center whitespace-nowrap">
        Trusted by marketing teams at
      </p>
      <div className="h-[110px] relative shrink-0 w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fafafa] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fafafa] to-transparent z-10 pointer-events-none" />
        {/* Scrolling track — duplicated for seamless loop */}
        <div className="flex items-center animate-scroll-logos w-max">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex flex-col h-[110px] items-center justify-center w-[256px] shrink-0 px-8">
              <img alt={logo.alt} className="max-h-[70px] max-w-[190px] object-contain grayscale opacity-70" src={logo.src} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
