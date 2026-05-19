// LP1 — "Trusted by marketing teams at"
// Uses the shared marquee component so LP1 and LP2 stay in sync.
import LogoMarquee, { type LogoItem } from '../../shared/LogoMarquee';

const imgSiemens     = "/siemens-logo.svg";
const imgBestWestern = "/logo-bestwestern.svg";
const imgCisco       = "/logo-cisco.svg";
const imgCMS         = "/cms-logo.png";
const imgElectrolux  = "/logo-electrolux.svg";

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
