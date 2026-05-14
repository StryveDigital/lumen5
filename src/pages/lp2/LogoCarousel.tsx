// LP2 — "Repurposing webinars at"
// Uses the shared marquee component so LP1 and LP2 stay in sync.
import LogoMarquee, { type LogoItem } from '../../shared/LogoMarquee';

const imgSiemens     = "/siemens-logo.svg";
const imgBestWestern = "https://www.figma.com/api/mcp/asset/8c265300-354b-43c7-89a7-4396e7b47044";
const imgCisco       = "https://www.figma.com/api/mcp/asset/89b34976-7a64-4021-9463-6223ae140b75";
const imgCMS         = "/cms-logo.png";
const imgElectrolux  = "https://www.figma.com/api/mcp/asset/cd3d2dbd-d0be-49fa-be24-e87428d6bb94";

const logos: LogoItem[] = [
  { src: imgSiemens,     alt: "Siemens",                       aspect: 300 / 60 },
  { src: imgBestWestern, alt: "Best Western Hotels & Resorts", aspect: 196 / 38.9635 },
  { src: imgCisco,       alt: "Cisco",                         aspect: 116 / 62 },
  { src: imgCMS,         alt: "CMS law tax future",            aspect: 330 / 175 },
  { src: imgElectrolux,  alt: "Electrolux Professional",       aspect: 191 / 44 },
];

export default function LogoCarousel() {
  return <LogoMarquee heading="Repurposing webinars at" logos={logos} />;
}
