// LP1 — Best Western customer case study + stats + quote
// Figma node: 51:763 (Testimonial + stats module).
// Stats animate from 0 → target on scroll-into-view (matches LP2/LP3 pattern).

import { useEffect, useRef, useState } from 'react';

// Case study image — frame with rounded corners, notched bottom-right, and
// green leaf decoration extending above-left (all baked into the PNG).
const imgBW      = "/best-western-case.png";
const imgQuoteL  = "https://www.figma.com/api/mcp/asset/d032e11d-26f5-440a-8529-8d97763555d1";
const imgQuoteR  = "https://www.figma.com/api/mcp/asset/bf236df1-57c5-4add-8f2b-422d84e9e661";

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
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return value;
}

const STATS = [
  { target: 97,  format: (v: number) => `${Math.round(v)}%`, label: "Reduced time to create videos." },
  { target: 480, format: (v: number) => `${Math.round(v)}+`, label: "Videos created in one year." },
  { target: 94,  format: (v: number) => `${Math.round(v)}%`, label: "Cost reduction compared to agency prices" },
];

export default function TestimonialStats() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const v1 = useCountUp(STATS[0].target, inView);
  const v2 = useCountUp(STATS[1].target, inView);
  const v3 = useCountUp(STATS[2].target, inView);
  const values = [v1, v2, v3];

  return (
    <div className="bg-white flex flex-col gap-16 md:gap-[120px] items-center justify-center py-[80px] md:py-[140px] w-full px-6 xl:px-0">
      {/* Heading + Image + Stats */}
      <div className="flex flex-col items-center w-full">
        {/* Heading */}
        <div className="flex flex-col gap-3 items-center text-center w-full max-w-[800px] mb-12">
          <p className="font-heading font-semibold text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] text-[#201e26]">
            A real customer's machine
          </p>
          <p className="font-heading font-semibold text-[28px] leading-[36px] md:text-[42px] md:leading-[60px] text-[#201e26]">
            How Best Western Hotels transformed its video marketing
          </p>
        </div>
        {/* Image + Stats — stacked on mobile, side-by-side flex on desktop with vertical centering */}
        <div ref={ref} className="relative w-full flex flex-col xl:flex-row gap-10 xl:gap-[120px] items-center xl:items-center xl:justify-center xl:max-w-[1230px]">
          {/* Case study image with rounded corners, notched bottom-right, and leaf baked in */}
          <img
            alt="Best Western Hotels"
            src={imgBW}
            className="block shrink-0 w-[280px] h-[282px] sm:w-[360px] sm:h-[362px] xl:w-[535px] xl:h-[539px] object-contain"
          />
          {/* Stats */}
          <div className="flex flex-col gap-6 xl:gap-10 items-start w-full max-w-[544px] xl:w-[544px]">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center w-full">
                <div className="h-[71px] overflow-clip relative shrink-0 w-[150px]">
                  <p className="font-heading font-semibold text-[52px] leading-[66px] text-[#201e26] whitespace-nowrap tabular-nums">
                    {stat.format(values[i])}
                  </p>
                </div>
                <p className="font-['Inter',sans-serif] font-normal text-[20px] leading-[36px] text-[#201e26] flex-1 min-w-0">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial quote */}
      <div className="bg-[#fafafa] flex flex-col xl:flex-row gap-6 md:gap-12 items-start p-8 md:p-12 rounded-2xl w-full max-w-[1120px]">
        <div className="h-[93px] overflow-clip relative shrink-0 w-[120px]">
          <div className="absolute inset-[0_0_0.23%_56.01%]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgQuoteL} />
          </div>
          <div className="absolute inset-[0.23%_56%_0_0]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgQuoteR} />
          </div>
        </div>
        <div className="flex flex-col gap-6 flex-1 min-w-0 w-full">
          <p className="font-['Inter',sans-serif] font-normal text-[20px] leading-[36px] text-[#201e26]">
            Lumen5 cuts down on countless hours of work, and it's also fun to use. It doesn't feel like an addition to anyone's workload, and users are proud of what they're creating.
          </p>
          <div className="h-[52px]">
            <p className="font-heading font-semibold text-[20px] leading-[30px] text-[#201e26]">Robert Schaub</p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#201e26]">Marketing Program Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}
