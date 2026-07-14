// Explainers — "Trusted by teams at"
// Reuses the shared marquee so it stays in sync with the other LPs. Uses the
// logos we have brand assets for (same set as LP2).
import LogoMarquee, { type LogoItem } from '../../shared/LogoMarquee';

const logos: LogoItem[] = [
  { src: "/siemens-logo.svg",     alt: "Siemens",                       aspect: 300 / 60 },
  { src: "/logo-bestwestern.svg", alt: "Best Western Hotels & Resorts", aspect: 196 / 38.9635 },
  { src: "/logo-cisco.svg",       alt: "Cisco",                         aspect: 116 / 62 },
  { src: "/cms-logo.png",         alt: "CMS law tax future",            aspect: 330 / 175 },
  { src: "/logo-electrolux.svg",  alt: "Electrolux Professional",       aspect: 191 / 44 },
];

export default function LogoCarousel() {
  return <LogoMarquee heading="Trusted by teams at" logos={logos} />;
}
