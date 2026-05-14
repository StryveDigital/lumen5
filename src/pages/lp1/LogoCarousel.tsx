// LP1 — "Trusted by marketing teams at"
// Uses the shared marquee component so LP1 and LP2 stay in sync.
import LogoMarquee, { type LogoItem } from '../../shared/LogoMarquee';

const imgSiemens     = "/siemens-logo.svg";
const imgBestWestern = "https://www.figma.com/api/mcp/asset/0bfeda42-1f44-4e8f-92a0-20c9d51dede5";
const imgCisco       = "https://www.figma.com/api/mcp/asset/b2de9c82-10e3-4367-a20f-a21f1a7e4469";
const imgCMS         = "/cms-logo.png";
const imgElectrolux  = "https://www.figma.com/api/mcp/asset/2a5294b8-db76-4c2c-a713-b99e09977318";

const logos: LogoItem[] = [
  { src: imgSiemens,     alt: "Siemens",                       aspect: 300 / 60 },
  { src: imgBestWestern, alt: "Best Western Hotels & Resorts", aspect: 196 / 38.9635 },
  { src: imgCisco,       alt: "Cisco",                         aspect: 116 / 62 },
  { src: imgCMS,         alt: "CMS law tax future",            aspect: 330 / 175 },
  { src: imgElectrolux,  alt: "Electrolux Professional",       aspect: 191 / 44 },
];

export default function LogoCarousel() {
  return <LogoMarquee heading="Trusted by marketing teams at" logos={logos} />;
}
