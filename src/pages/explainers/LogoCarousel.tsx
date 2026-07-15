// Explainers — trust bar. Reuses the shared marquee so motion stays in sync
// with LP1/LP2. Logos limited to the brand assets already in /public.
import LogoMarquee, { type LogoItem } from '../../shared/LogoMarquee';

const logos: LogoItem[] = [
  { src: '/siemens-logo.svg',     alt: 'Siemens',                       aspect: 300 / 60 },
  { src: '/logo-bestwestern.svg', alt: 'Best Western Hotels & Resorts', aspect: 196 / 38.9635 },
  { src: '/logo-cisco.svg',       alt: 'Cisco',                         aspect: 116 / 62 },
  { src: '/cms-logo.png',         alt: 'CMS law tax future',            aspect: 330 / 175 },
  { src: '/logo-electrolux.svg',  alt: 'Electrolux Professional',       aspect: 191 / 44 },
];

export default function LogoCarousel() {
  return (
    <LogoMarquee
      heading="Trusted by teams at"
      logos={logos}
      headingClassName="font-heading font-semibold text-[20px] leading-[28px] text-[#201e26] text-center px-6 xl:px-0"
    />
  );
}
