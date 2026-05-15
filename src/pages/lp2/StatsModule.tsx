// LP2 — Siemens customer case study + stats + quote
// Figma node: 61:1755 (Testimonial + stats module).
// Stats animate from 0 → target on scroll-into-view (the Figma prototype
// ticks each number up through a sequence; we approximate it with a
// requestAnimationFrame ease-out cubic count-up).

import { useEffect, useRef, useState } from 'react';
import QuoteGlyph from './QuoteGlyph';

// Case study image — frame with rounded corners, notched bottom-right, and
// green leaf decoration extending above-left (all baked into the PNG).
const imgSiemensCase = "/siemens-case.png";

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
    <div className="bg-white flex flex-col gap-16 md:gap-[97px] items-center justify-center py-[72px] md:py-[104px] w-full px-6 xl:px-0">
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
        {/* Image + Stats — stacked on mobile, side-by-side flex on desktop with vertical centering */}
        <div ref={ref} className="relative w-full flex flex-col xl:flex-row gap-10 xl:gap-[120px] items-center xl:items-center xl:justify-center xl:max-w-[1230px]">
          {/* Case study image with rounded corners, notched bottom-right, and leaf baked in */}
          <img
            alt="Siemens headquarters"
            src={imgSiemensCase}
            className="block shrink-0 w-[280px] h-[282px] sm:w-[360px] sm:h-[362px] xl:w-[535px] xl:h-[539px] object-contain"
          />
          {/* Stats */}
          <div className="flex flex-col gap-6 xl:gap-10 items-start w-full max-w-[544px] xl:w-[544px]">
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
      <div className="bg-[#fafafa] flex flex-col xl:flex-row gap-6 md:gap-12 items-start p-8 md:p-12 rounded-2xl w-full max-w-[1120px]">
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
