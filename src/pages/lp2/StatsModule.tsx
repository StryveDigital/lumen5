// LP2 — Siemens customer case study + stats + quote
// Figma node: 61:1755 (Testimonial + stats module).
// Stats animate from 0 → target on scroll-into-view (the Figma prototype
// ticks each number up through a sequence; we approximate it with a
// requestAnimationFrame ease-out cubic count-up).

import { useEffect, useRef, useState } from 'react';
import QuoteGlyph from './QuoteGlyph';

// Siemens HQ photo (clean, no decoration baked in) + separate green leaf
// shape that peeks above and to the left of the photo, matching Figma.
const imgSiemensBuilding = "/siemens-building.png";
const imgSiemensLeaf = "/siemens-leaf.png";

function useInView<T extends HTMLElement>(threshold = 0.3) {
  const [inView, setInView] = useState(false);
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold });
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, threshold]);
  return { inView, ref };
}

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) {
      setValue(0);
      return;
    }
    const start = performance.now();
    let raf = 0;
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return value;
}

// Display values at rest = the FIRST value in the Figma animation array
// (12, 0%, 0.4x). The animation in the Figma prototype ticks each number up to:
// 4,360 videos / 98.3% faster / 25x cheaper.
const STATS = [
  { target: 4360, format: (v: number) => Math.round(v).toLocaleString(), label: "Videos created in the last 12 months." },
  { target: 98.3, format: (v: number) => `${v.toFixed(1)}%`, label: "Faster turnaround times." },
  { target: 25,   format: (v: number) => `${v.toFixed(1)}x`, label: "Cheaper than using an agency." },
];

export default function StatsModule() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const v1 = useCountUp(STATS[0].target, inView);
  const v2 = useCountUp(STATS[1].target, inView);
  const v3 = useCountUp(STATS[2].target, inView);
  const values = [v1, v2, v3];

  return (
    <div className="bg-white flex flex-col gap-16 md:gap-[97px] items-center justify-center py-[72px] md:py-[104px] w-full px-6 md:px-0">
      {/* Heading + Image + Stats */}
      <div className="flex flex-col items-center w-full">
        {/* Heading */}
        <div className="flex flex-col gap-3 items-center text-center w-full max-w-[800px] mb-12">
          <p className="font-heading font-semibold text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] text-[#201e26]">
            A real customer&rsquo;s machine
          </p>
          <h2 className="font-heading font-semibold text-[28px] leading-[36px] md:text-[42px] md:leading-[60px] text-[#201e26]">
            Siemens transformed digital communication with Lumen5
          </h2>
        </div>
        {/* Image + Stats — stack on mobile, absolute Figma layout on desktop */}
        <div ref={ref} className="relative w-full flex flex-col gap-10 items-center md:block md:h-[594px] md:w-[1230px] md:max-w-[1230px]">
          {/* Siemens HQ photo + green leaf decoration */}
          <div className="relative size-[280px] sm:size-[360px] md:absolute md:left-[56px] md:size-[479px] md:top-[115px]">
            <img
              alt=""
              className="absolute -top-[28px] -left-[18px] w-[140px] h-[96px] md:-top-[42px] md:-left-[28px] md:w-[220px] md:h-[152px] z-0 pointer-events-none"
              src={imgSiemensLeaf}
            />
            <img
              alt="Siemens headquarters"
              className="relative z-10 block size-full object-cover rounded-2xl"
              src={imgSiemensBuilding}
            />
          </div>
          {/* Stats */}
          <div className="flex flex-col gap-6 md:gap-10 items-start w-full max-w-[544px] md:absolute md:left-[633px] md:top-[153px] md:w-[544px]">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center w-full gap-[17px]">
                <div className="h-[71px] overflow-hidden relative shrink-0 w-[157px]">
                  <p className="font-heading font-semibold text-[52px] leading-[66px] text-[#201e26] whitespace-nowrap tabular-nums">
                    {stat.format(values[i])}
                  </p>
                </div>
                <p className="font-body font-normal text-[20px] leading-[36px] text-[#201e26] flex-1 min-w-0">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial quote */}
      <div className="bg-[#fafafa] flex flex-col md:flex-row gap-6 md:gap-12 items-start p-8 md:p-12 rounded-2xl w-full max-w-[1120px]">
        <div className="shrink-0">
          <QuoteGlyph width={120} height={93} />
        </div>
        <div className="flex flex-col gap-6 flex-1 min-w-0 w-full">
          <p className="font-body font-normal text-[20px] leading-[36px] text-[#201e26]">
            With the traditional agency, the time is usually about one week. But with Lumen5, it&apos;s cut down from weeks to hours. Before, we heavily relied on third-party agencies to create video content &mdash; it&apos;s time-consuming and costs a lot. Using Lumen5, we can do this internally, and it&apos;s faster and cheaper.
          </p>
          <div className="h-[52px]">
            <p className="font-heading font-semibold text-[20px] leading-[30px] text-[#201e26]">Michelle Hsiao</p>
            <p className="font-body font-normal text-[16px] leading-[24px] text-[#201e26]">Visual Content Director</p>
          </div>
        </div>
      </div>
    </div>
  );
}
