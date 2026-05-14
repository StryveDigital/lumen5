// LP3 — Swiss Re customer case study + stats + quote
// Figma node: 66:1843 (Testimonial + stats module).
// Stats animate from 0 → target on scroll-into-view (LP2's count-up pattern).

import { useEffect, useRef, useState } from 'react';
import QuoteGlyph from '../lp2/QuoteGlyph';

const imgSwissReBuilding = "/swissre-building.png";
// Green leaf decoration. Figma asset URL expires ~7 days; keep an eye on it.
const imgLeaf = "https://www.figma.com/api/mcp/asset/cc850674-7ee7-4bb1-aa7a-9a0f17ca7e8b";

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

// Format helper: show 2-decimal precision while small (matches Figma start frame
// 0.06 / 0.43), drop to integer once the value crosses 1 (cleaner end frame).
const smartFmt = (v: number) => (v >= 1 ? Math.round(v).toString() : v.toFixed(2));

const STATS = [
  { target: 4,   format: smartFmt, label: "Years using Lumen5" },
  { target: 551, format: (v: number) => Math.round(v).toLocaleString(), label: "Videos creating in a single year" },
  { target: 30,  format: smartFmt, label: "Minutes average video creation time" },
];

export default function StatsModule() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const v1 = useCountUp(STATS[0].target, inView);
  const v2 = useCountUp(STATS[1].target, inView);
  const v3 = useCountUp(STATS[2].target, inView);
  const values = [v1, v2, v3];

  return (
    <div className="bg-white flex flex-col gap-[97px] items-center justify-center py-[104px] w-full">
      {/* Heading + Image + Stats */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 items-center text-center w-[736px] mb-12">
          <p className="font-heading font-semibold text-[20px] leading-[30px] text-[#201e26]">
            A real customer&rsquo;s machine
          </p>
          <h2 className="font-heading font-semibold text-[36px] leading-[60px] text-[#201e26]">
            Swiss Re Banked on Lumen5 for Social Engagement
          </h2>
        </div>
        <div ref={ref} className="h-[594px] relative w-[1230px]">
          {/* Swiss Re photo with separate green leaf decoration peeking above-left */}
          <div className="absolute left-[56px] size-[479px] top-[115px]">
            <img
              alt=""
              className="absolute -top-[40px] -left-[30px] w-[210px] h-[150px] z-0 pointer-events-none"
              src={imgLeaf}
            />
            <img
              alt="Swiss Re headquarters"
              className="relative z-10 block size-full object-cover rounded-2xl"
              src={imgSwissReBuilding}
            />
          </div>
          {/* Stats column */}
          <div className="absolute flex flex-col gap-10 items-start left-[633px] top-[153px] w-[544px]">
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
      <div className="bg-[#fafafa] flex gap-12 items-start p-12 rounded-2xl w-[1120px]">
        <div className="shrink-0">
          <QuoteGlyph width={120} height={93} />
        </div>
        <div className="flex flex-col gap-6 flex-1 min-w-0">
          <p className="font-body font-normal text-[20px] leading-[36px] text-[#201e26]">
            Lumen5 was ultimately the best fit for our needs. Other tools were either too complicated or far too limited in scope. Its artificial intelligence and text-to-video features caught the interest of everyone in communications.
          </p>
          <div className="h-[52px]">
            <p className="font-heading font-semibold text-[20px] leading-[30px] text-[#201e26]">Annie Wu</p>
            <p className="font-body font-normal text-[16px] leading-[24px] text-[#201e26]">Creative &amp; Digital Assets Manager, Corporate Voice, Swiss Re</p>
          </div>
        </div>
      </div>
    </div>
  );
}
