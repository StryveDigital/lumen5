// Shared logo marquee used by LP1 and LP2.
// On mount, scrolls at INITIAL_PX_PER_SEC and decays over DECAY_DURATION_MS
// to STEADY_PX_PER_SEC, then cruises at that pace indefinitely. Position
// wrapping is modulo the width of one full logo set so the second duplicated
// set fills in for a seamless loop. Respects prefers-reduced-motion.

import { useEffect, useRef } from 'react';

// Tuning knobs for the marquee motion. Start fast, settle slow.
const INITIAL_PX_PER_SEC = 260;   // ~1 logo per second at the start
const STEADY_PX_PER_SEC  = 55;    // gentle cruise (~1 logo per ~5s)
const DECAY_DURATION_MS  = 3200;  // how long to ease from fast to slow

// Figma's SVG exports use preserveAspectRatio="none" — pin each logo's true
// aspect so the browser doesn't stretch them to fit any box.
const TARGET_H = 60;
const MAX_W = 220;

function logoSize(aspect: number) {
  if (aspect >= MAX_W / TARGET_H) return { width: MAX_W, height: MAX_W / aspect };
  return { width: TARGET_H * aspect, height: TARGET_H };
}

export type LogoItem = { src: string; alt: string; aspect: number };

interface Props {
  heading: string;
  logos: LogoItem[];
  headingClassName?: string;
}

const DEFAULT_HEADING_CLASS =
  'font-heading font-semibold text-[16px] leading-[24px] text-[#201e26] text-center px-6 xl:px-0';

export default function LogoMarquee({ heading, logos, headingClassName = DEFAULT_HEADING_CLASS }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track: HTMLDivElement | null = trackRef.current;
    if (!track) return;
    // Narrowed alias — preserves non-null inside closure callbacks below.
    const t: HTMLDivElement = track;

    // Respect reduced-motion preference.
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let position = 0;
    let startTime: number | null = null;
    let lastTime: number | null = null;
    let raf = 0;
    // The track contains the logos N times; one "set" is scrollWidth / N. More
    // copies = the wrap-around point is further out, so it never visibly resets.
    const REPEAT = 5;
    let setWidth = t.scrollWidth / REPEAT;

    const measure = () => {
      setWidth = t.scrollWidth / REPEAT;
    };
    window.addEventListener('resize', measure);

    function tick(now: number) {
      if (startTime === null) startTime = now;
      if (lastTime === null) lastTime = now;
      const dtSec = (now - lastTime) / 1000;
      const elapsed = now - startTime;

      // Ease-out cubic from initial → steady, then clamp at steady.
      const progress = Math.min(elapsed / DECAY_DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const velocity = INITIAL_PX_PER_SEC * (1 - eased) + STEADY_PX_PER_SEC * eased;

      position -= velocity * dtSec;
      // Wrap so we never reveal the end of the second set.
      if (setWidth > 0) {
        position = position % setWidth;
        if (position > 0) position -= setWidth;
      }

      t.style.transform = `translate3d(${position}px, 0, 0)`;
      lastTime = now;
      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', measure);
    };
  }, []);

  return (
    <div className="bg-[#fafafa] flex flex-col gap-7 items-center justify-center py-10 md:py-14 relative w-full">
      <p className={headingClassName}>
        {heading}
      </p>
      <div
        className="w-full overflow-hidden"
        // Soft fade at the left/right edges so logos drift in/out instead of popping.
        style={{
          maskImage: 'linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)',
        }}
      >
        <div
          ref={trackRef}
          className="flex items-center gap-16 w-max will-change-transform"
        >
          {/* 5 copies of the logo set — keep this in sync with REPEAT in the
              effect above so the wrap math (scrollWidth / REPEAT) is correct. */}
          {Array.from({ length: 5 }, () => logos).flat().map((logo, i) => {
            const { width, height } = logoSize(logo.aspect);
            return (
              <div key={`${logo.alt}-${i}`} className="flex h-[80px] items-center justify-center shrink-0" style={{ width: MAX_W }}>
                <img
                  alt={i < logos.length ? logo.alt : ''}
                  aria-hidden={i >= logos.length ? true : undefined}
                  src={logo.src}
                  width={width}
                  height={height}
                  className="grayscale block"
                  style={{ width, height }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
