// Explainers — style range + the "not an avatar" objection kill. Rather than
// describe the styles, this shows them: a big cinema preview cross-fades across
// real frames from eight actual Lumen5 styles, with clickable chips and a
// thumbnail strip. Auto-advances (unless reduced-motion). Dark treatment so the
// frames pop like a reel.

import { useEffect, useState } from 'react';
import { useInView, prefersReducedMotion } from './useInView';

const STYLES = [
  { name: 'Lucid',    desc: '3D CGI · natural light',        src: '/explainers/lucid-city.webp' },
  { name: 'Claymo',   desc: 'Hand-built clay · matte',       src: '/explainers/claymo-airbnb-driving.webp' },
  { name: 'Kiro',     desc: 'Semi-real anime · cell-shaded', src: '/explainers/anime-yoga.webp' },
  { name: 'Serenity', desc: 'Soft airbrush · warm',          src: '/explainers/serenity-snow.webp' },
  { name: 'Bauhz',    desc: 'Geometric · Bauhaus palette',   src: '/explainers/bauhaus-city.webp' },
  { name: 'Minimal',  desc: 'Flat editorial · clean line',   src: '/explainers/flat-office.webp' },
  { name: 'Korb',     desc: 'Hand-drawn · illustrated',      src: '/explainers/comic-hoops.webp' },
  { name: 'Glow',     desc: 'Isometric · glowing',           src: '/explainers/iso-security.webp' },
];

export default function StyleShowcase() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const [active, setActive] = useState(0);
  // Once a visitor picks a style themselves, stop the auto-cycle so their
  // selection is never yanked away mid-look.
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!inView || paused || prefersReducedMotion()) return;
    const id = setInterval(() => setActive((n) => (n + 1) % STYLES.length), 3200);
    return () => clearInterval(id);
  }, [inView, active, paused]);

  const pick = (n: number) => {
    setPaused(true);
    setActive(n);
  };

  const current = STYLES[active];

  return (
    <div ref={ref} className="bg-[#201e26] w-full px-6 md:px-16 py-[72px] md:py-[104px]">
      <div className="mx-auto max-w-[1180px] 2xl:max-w-[1320px]">
        {/* heading */}
        <div className="flex flex-col gap-3 items-center text-center max-w-[820px] mx-auto mb-12">
          <h2 className="font-heading font-semibold text-[28px] leading-[36px] md:text-[42px] md:leading-[54px] text-[#fafafa]">
            Most AI video looks like a robot made it. This doesn’t.
          </h2>
          <p className="font-body font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-[#fafafa]">
            Real motion-design-grade animation, not a stock avatar reading a script. A wide range of
            styles, your brand colors, any aspect ratio. Same script, a completely different video.
          </p>
        </div>

        {/* big preview */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-black">
          {STYLES.map((s, n) => (
            <img
              key={s.name}
              src={s.src}
              alt={n === active ? `${s.name} style` : ''}
              aria-hidden={n !== active}
              className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ease-in-out ${
                n % 2 === 0 ? 'motion-safe:animate-kenburns' : 'motion-safe:animate-kenburns-alt'
              }`}
              style={{ opacity: n === active ? 1 : 0 }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {/* current style label */}
          <div className="absolute left-5 bottom-5">
            <p className="font-heading font-semibold text-[22px] md:text-[26px] leading-none text-white">{current.name}</p>
            <p className="font-body text-[13px] md:text-[14px] text-white/70 mt-1.5 uppercase tracking-[0.08em]">{current.desc}</p>
          </div>
        </div>

        {/* chips */}
        <div className="flex flex-wrap justify-center gap-2.5 mt-8">
          {STYLES.map((s, n) => (
            <button
              key={s.name}
              onClick={() => pick(n)}
              className={`font-heading font-semibold text-[14px] leading-none px-4 py-2.5 rounded-full transition-colors ${
                n === active
                  ? 'bg-[#5645f5] text-white'
                  : 'bg-white/5 text-white/60 ring-1 ring-white/10 hover:bg-white/10 hover:text-white/90'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* thumbnail strip */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2.5 mt-8">
          {STYLES.map((s, n) => (
            <button
              key={s.name}
              onClick={() => pick(n)}
              aria-label={`Preview ${s.name} style`}
              className={`relative aspect-video rounded-lg overflow-hidden transition-all ${
                n === active ? 'ring-2 ring-[#5645f5] opacity-100' : 'ring-1 ring-white/10 opacity-55 hover:opacity-90'
              }`}
            >
              <img src={s.src} alt="" aria-hidden className="absolute inset-0 size-full object-cover" />
            </button>
          ))}
        </div>

        <p className="text-center font-body text-[14px] leading-[22px] text-[#fafafa]/45 italic mt-10">
          No talking avatars were used in the making of this video.
        </p>
      </div>
    </div>
  );
}
