const imgSiemens     = "/siemens-logo.svg";
const imgBestWestern = "https://www.figma.com/api/mcp/asset/0bfeda42-1f44-4e8f-92a0-20c9d51dede5";
const imgCisco       = "https://www.figma.com/api/mcp/asset/b2de9c82-10e3-4367-a20f-a21f1a7e4469";
const imgCMS         = "/cms-logo.png";
const imgElectrolux  = "https://www.figma.com/api/mcp/asset/2a5294b8-db76-4c2c-a713-b99e09977318";

// Figma's SVG exports use preserveAspectRatio="none", so the browser stretches
// them to fill any box the CSS gives. We pin each logo's real intrinsic aspect
// here and render explicit width/height to keep them in proportion.
const TARGET_H = 44;
const MAX_W = 180;

function logoSize(aspect: number) {
  if (aspect >= MAX_W / TARGET_H) return { width: MAX_W, height: MAX_W / aspect };
  return { width: TARGET_H * aspect, height: TARGET_H };
}

const logos = [
  { src: imgSiemens,     alt: "Siemens",                       aspect: 300 / 60 },
  { src: imgBestWestern, alt: "Best Western Hotels & Resorts", aspect: 196 / 38.9635 },
  { src: imgCisco,       alt: "Cisco",                         aspect: 116 / 62 },
  { src: imgCMS,         alt: "CMS law tax future",            aspect: 330 / 175 },
  { src: imgElectrolux,  alt: "Electrolux Professional",       aspect: 191 / 44 },
];

export default function LogoCarousel() {
  return (
    <div className="bg-[#fafafa] flex flex-col gap-5 items-center justify-center py-6 relative w-full">
      <p className="font-heading font-semibold text-[14px] leading-[21px] text-[#201e26] text-center whitespace-nowrap">
        Trusted by marketing teams at
      </p>
      <div className="flex items-center justify-between w-full max-w-[1280px] px-16">
        {logos.map(logo => {
          const { width, height } = logoSize(logo.aspect);
          return (
            <div key={logo.alt} className="flex h-[70px] items-center justify-center">
              <img alt={logo.alt} src={logo.src} width={width} height={height} className="grayscale block" style={{ width, height }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
