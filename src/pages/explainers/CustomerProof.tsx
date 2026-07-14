// Explainers — real customer proof. Siemens is a genuine beta customer (they
// turned blog posts into branded explainers in the webinar), so the existing
// Siemens case image, count-up stats, and Michelle Hsiao quote all carry over
// truthfully. Stats animate 0 → target on scroll-into-view.

import { useEffect, useState } from 'react';
import { useInView } from './useInView';
import QuoteGlyph from '../lp2/QuoteGlyph';

const imgSiemensCase = '/siemens-case.png';

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
      const progress = Math.min((now - start) / duration, 1);
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
  { target: 4360, format: (v: number) => Math.round(v).toLocaleString(), label: 'Videos created in the last 12 months.' },
  { target: 98.3, format: (v: number) => `${v.toFixed(1)}%`, label: 'Faster turnaround times.' },
  { target: 25,   format: (v: number) => `${v.toFixed(1)}x`, label: 'Cheaper than using an agency.' },
];

export default function CustomerProof() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const v1 = useCountUp(STATS[0].target, inView);
  const v2 = useCountUp(STATS[1].target, inView);
  const v3 = useCountUp(STATS[2].target, inView);
  const values = [v1, v2, v3];

  return (
    <div className="bg-white flex flex-col gap-16 md:gap-[97px] items-center justify-center py-[72px] md:py-[104px] w-full px-6 xl:px-0">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col gap-3 items-center text-center w-full max-w-[820px] mb-12">
          <p className="font-heading font-semibold text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] text-[#5645f5]">
            A beta customer’s machine
          </p>
          <h2 className="font-heading font-semibold text-[28px] leading-[36px] md:text-[42px] md:leading-[54px] text-[#201e26]">
            Siemens turns blog posts into branded explainers
          </h2>
        </div>

        <div ref={ref} className="relative w-full flex flex-col xl:flex-row gap-10 xl:gap-[120px] items-center xl:justify-center xl:max-w-[1230px]">
          <img
            alt="Siemens headquarters"
            src={imgSiemensCase}
            className="block shrink-0 w-[280px] h-[282px] sm:w-[360px] sm:h-[362px] xl:w-[535px] xl:h-[539px] object-contain"
          />
          <div className="flex flex-col gap-6 xl:gap-10 items-start w-full max-w-[544px] xl:w-[544px]">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center w-full gap-[17px]">
                <div className="h-[71px] overflow-hidden relative shrink-0 w-[157px]">
                  <p className="font-heading font-semibold text-[52px] leading-[66px] text-[#201e26] whitespace-nowrap tabular-nums">
                    {stat.format(values[i])}
                  </p>
                </div>
                <p className="font-body font-normal text-[20px] leading-[36px] text-[#201e26] flex-1 min-w-0">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#fafafa] flex flex-col xl:flex-row gap-6 md:gap-12 items-start p-8 md:p-12 rounded-2xl w-full max-w-[1120px]">
        <div className="shrink-0">
          <QuoteGlyph width={120} height={93} />
        </div>
        <div className="flex flex-col gap-6 flex-1 min-w-0 w-full">
          <p className="font-body font-normal text-[20px] leading-[36px] text-[#201e26]">
            With the traditional agency, the time is usually about one week. But with Lumen5, it&apos;s cut down from
            weeks to hours. Before, we heavily relied on third-party agencies to create video content &mdash; it&apos;s
            time-consuming and costs a lot. Using Lumen5, we can do this internally, and it&apos;s faster and cheaper.
          </p>
          <div className="h-[52px]">
            <p className="font-heading font-semibold text-[20px] leading-[30px] text-[#201e26]">Michelle Hsiao</p>
            <p className="font-body font-normal text-[16px] leading-[24px] text-[#201e26]">Visual Content Director, Siemens</p>
          </div>
        </div>
      </div>
    </div>
  );
}
