// Explainers — style showcase + the avatar objection, argued by demonstration.
// One scene, one script line, re-rendered live in each animation style. The
// styles auto-cycle and the chips are clickable — the section *behaves* like
// the style picker instead of describing it. Style names (Lucid, Claymation,
// Anime, Serenity) are the real ones from the platform.

import { useEffect, useState } from 'react';

type StyleDef = {
  name: string;
  sky: string;          // scene background gradient
  sun: string;
  hillBack: string;
  hillFront: string;
  charHead: string;
  charBody: string;
  accent: string;
  headRadius: string;   // shape language per style (clay = blobby, anime = sharp)
  bodyRadius: string;
};

const STYLES: StyleDef[] = [
  {
    name: 'Lucid',
    sky: 'linear-gradient(160deg, #2b2668 0%, #5645f5 100%)',
    sun: '#e5e250', hillBack: '#26215C', hillFront: '#3C3489',
    charHead: '#CECBF6', charBody: '#ADA7F0', accent: '#3bd9eb',
    headRadius: '50%', bodyRadius: '18px',
  },
  {
    name: 'Claymation',
    sky: 'linear-gradient(160deg, #f6e3d0 0%, #efb98a 100%)',
    sun: '#fff6ea', hillBack: '#a05a2c', hillFront: '#c97b46',
    charHead: '#f2cc8f', charBody: '#e07a5f', accent: '#81b29a',
    headRadius: '46% 54% 50% 50%', bodyRadius: '46% 54% 42% 58%',
  },
  {
    name: 'Anime',
    sky: 'linear-gradient(160deg, #e6f1fb 0%, #9fc7f0 100%)',
    sun: '#f95580', hillBack: '#2f4a7a', hillFront: '#4f6fae',
    charHead: '#ffe0d1', charBody: '#26215C', accent: '#ffffff',
    headRadius: '50%', bodyRadius: '6px',
  },
  {
    name: 'Serenity',
    sky: 'linear-gradient(160deg, #0f7a5a 0%, #2fb083 100%)',
    sun: '#E1F5EE', hillBack: '#0a4a37', hillFront: '#0f6b50',
    charHead: '#E1F5EE', charBody: '#9FE1CB', accent: '#e5e250',
    headRadius: '50%', bodyRadius: '24px',
  },
  {
    name: "Your brand's own",
    sky: 'linear-gradient(160deg, #201e26 0%, #3C3489 100%)',
    sun: '#3bd9eb', hillBack: '#14121a', hillFront: '#2a2734',
    charHead: '#fafafa', charBody: '#5645f5', accent: '#46e378',
    headRadius: '50%', bodyRadius: '14px',
  },
];

const CYCLE_MS = 3200;

// One fully-drawn scene per style; the active one crossfades in. Same
// composition + same caption in every style — that's the point.
function Scene({ s, active }: { s: StyleDef; active: boolean }) {
  return (
    <div
      aria-hidden={!active}
      className={`absolute inset-0 transition-opacity duration-700 ease-out ${active ? 'opacity-100' : 'opacity-0'}`}
      style={{ background: s.sky }}
    >
      {/* sun */}
      <span className="absolute rounded-full" style={{ background: s.sun, width: '10%', paddingBottom: '10%', top: '12%', right: '13%' }} />
      {/* hills */}
      <span className="absolute rounded-[50%]" style={{ background: s.hillBack, width: '90%', height: '52%', bottom: '-24%', left: '-18%' }} />
      <span className="absolute rounded-[50%]" style={{ background: s.hillFront, width: '85%', height: '46%', bottom: '-20%', right: '-15%' }} />
      {/* character — the same character, restyled */}
      <div className="motion-safe-only absolute left-[20%] bottom-[20%] animate-[floaty_4.5s_ease-in-out_infinite]">
        <span className="block mx-auto" style={{ background: s.charHead, width: 'clamp(22px, 3.2vw, 38px)', height: 'clamp(22px, 3.2vw, 38px)', borderRadius: s.headRadius }} />
        <span className="block mt-[4px]" style={{ background: s.charBody, width: 'clamp(34px, 4.8vw, 58px)', height: 'clamp(42px, 6vw, 72px)', borderRadius: s.bodyRadius }} />
      </div>
      {/* floating accents */}
      <span className="motion-safe-only absolute animate-[floaty_5.5s_ease-in-out_infinite]" style={{ background: s.accent, width: 16, height: 16, borderRadius: s.headRadius, top: '30%', left: '56%', animationDelay: '0.8s' }} />
      <span className="motion-safe-only absolute animate-[floaty_6s_ease-in-out_infinite]" style={{ background: s.accent, width: 10, height: 10, borderRadius: s.headRadius, top: '48%', left: '70%', animationDelay: '1.6s', opacity: 0.7 }} />
      {/* style name chip */}
      <span className="absolute top-4 left-4 px-3 py-[6px] rounded-full bg-black/30 backdrop-blur-sm font-heading font-semibold text-[12px] tracking-[0.06em] uppercase text-white/95">
        {s.name}
      </span>
      {/* the constant: same script line in every style */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 md:bottom-5 w-max max-w-[88%] bg-white/95 rounded-2xl md:rounded-full px-5 py-[9px] shadow-md">
        <p className="font-body text-[13px] md:text-[14px] leading-[20px] text-[#201e26] text-center">
          &ldquo;Three forces now pull the buyer toward content.&rdquo;
        </p>
      </div>
    </div>
  );
}

export default function StyleRange() {
  const [active, setActive] = useState(0);

  // Auto-cycle; restarting on every change keeps a full beat after a click.
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setActive(a => (a + 1) % STYLES.length), CYCLE_MS);
    return () => clearInterval(id);
  }, [active]);

  return (
    <div className="bg-[#201e26] flex flex-col xl:flex-row items-center justify-center gap-12 xl:gap-20 px-6 md:px-16 py-[72px] md:py-[104px] w-full">
      {/* Copy + style chips */}
      <div className="flex flex-col gap-6 items-start w-full max-w-[560px] xl:w-[40%] shrink-0">
        <p className="font-heading font-semibold text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] text-[#3bd9eb]">
          15+ animation styles. Zero avatars.
        </p>
        <h2 className="font-heading font-semibold text-[28px] leading-[36px] md:text-[42px] md:leading-[54px] text-[#fafafa]">
          Same script. A completely different film.
        </h2>
        <p className="font-body font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-[#fafafa]">
          Real motion-design animation &mdash; not a stock avatar reading your script into a webcam.
          Pick a look, keep your brand colors, export in any aspect ratio. And if you want a style
          nobody else has, our creative team builds one for your brand alone.
        </p>
        {/* clickable style picker */}
        <div className="flex flex-wrap gap-2 mt-1">
          {STYLES.map((s, i) => (
            <button
              key={s.name}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={`px-5 py-[10px] rounded-full font-heading font-semibold text-[14px] leading-[20px] transition-colors ${
                i === active ? 'bg-[#5645f5] text-white' : 'bg-white/10 text-[#fafafa] hover:bg-white/20'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
        <p className="font-body text-[14px] leading-[22px] text-[#fafafa] opacity-50">
          + a dozen more in the style library
        </p>
      </div>

      {/* The scene */}
      <div className="w-full xl:flex-1 min-w-0 max-w-[760px] flex flex-col gap-4">
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
          {STYLES.map((s, i) => (
            <Scene key={s.name} s={s} active={i === active} />
          ))}
        </div>
        <p className="font-body italic text-[14px] leading-[22px] text-[#fafafa] opacity-50 text-center">
          No talking avatars were used in the making of this film.
        </p>
      </div>
    </div>
  );
}
