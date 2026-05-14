const imgSiemens     = "/siemens-logo.svg";
const imgBestWestern = "https://www.figma.com/api/mcp/asset/0bfeda42-1f44-4e8f-92a0-20c9d51dede5";
const imgCisco       = "https://www.figma.com/api/mcp/asset/b2de9c82-10e3-4367-a20f-a21f1a7e4469";
const imgCMS         = "/cms-logo.png";
const imgElectrolux  = "https://www.figma.com/api/mcp/asset/2a5294b8-db76-4c2c-a713-b99e09977318";

const logos = [
  { src: imgSiemens,     alt: "Siemens" },
  { src: imgBestWestern, alt: "Best Western Hotels & Resorts" },
  { src: imgCisco,       alt: "Cisco" },
  { src: imgCMS,         alt: "CMS law tax future" },
  { src: imgElectrolux,  alt: "Electrolux Professional" },
];

export default function LogoCarousel() {
  return (
    <div className="bg-[#fafafa] flex flex-col gap-5 items-center justify-center py-6 relative w-full">
      <p className="font-heading font-semibold text-[14px] leading-[21px] text-[#201e26] text-center whitespace-nowrap">
        Trusted by marketing teams at
      </p>
      <div className="flex items-center justify-between w-full max-w-[1280px] px-16">
        {logos.map(logo => (
          <div key={logo.alt} className="flex h-[70px] items-center justify-center">
            <img alt={logo.alt} className="max-h-[60px] max-w-[180px] object-contain grayscale" src={logo.src} />
          </div>
        ))}
      </div>
    </div>
  );
}
