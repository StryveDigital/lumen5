// LP2 — "Repurposing webinars at"
// Mirrors LP1 LogoCarousel layout (5 logos, grayscale grid) with the LP2 heading.
// Figma node: 57:1264 — the design intends a horizontal marquee scroll, but for
// the first pass we render the static 5-logo lineup that matches the export PNG.
// TODO(follow-up): implement marquee scroll using the extra logos (Emerson, SwissRe)
// from the Figma source.

const imgSiemens     = "/siemens-logo.svg";
const imgBestWestern = "https://www.figma.com/api/mcp/asset/8c265300-354b-43c7-89a7-4396e7b47044";
const imgCisco       = "https://www.figma.com/api/mcp/asset/89b34976-7a64-4021-9463-6223ae140b75";
const imgCMS         = "/cms-logo.png";
const imgElectrolux  = "https://www.figma.com/api/mcp/asset/cd3d2dbd-d0be-49fa-be24-e87428d6bb94";

// Figma's SVG exports use preserveAspectRatio="none" — pin each logo's true aspect
// so the browser doesn't stretch them to fit any box.
const TARGET_H = 60;
const MAX_W = 220;

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
    <div className="bg-[#fafafa] flex flex-col gap-7 items-center justify-center py-14 relative w-full">
      <p className="font-heading font-semibold text-[16px] leading-[24px] text-[#201e26] text-center whitespace-nowrap">
        Repurposing webinars at
      </p>
      <div className="grid grid-cols-5 w-full max-w-[1280px] px-16">
        {logos.map(logo => {
          const { width, height } = logoSize(logo.aspect);
          return (
            <div key={logo.alt} className="flex h-[80px] items-center justify-center">
              <img alt={logo.alt} src={logo.src} width={width} height={height} className="grayscale block" style={{ width, height }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
