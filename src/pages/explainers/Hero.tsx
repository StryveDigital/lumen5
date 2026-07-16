// Explainers — launch hero. Left: launch headline + CTA. Right: a playable
// film slot. The facade is a crossfading showreel of real explainer
// screengrabs; pressing play runs Lumen5's own meta-explainer (an animated
// explainer about animated explainers, made in the product). When the real
// host-announces launch film is shot, swap VIDEO_SRC and the runtime chip.

import { useEffect, useState } from 'react';
import { CTA } from '../../shared/cta-urls';
import { prefersReducedMotion } from './useInView';

// Real screengrabs pulled from actual Lumen5 animated explainers (mixed styles).
const REEL = [
  '/explainers/lucid-office.png',
  '/explainers/cgi-health-anatomy.jpg',
  '/explainers/claymo-airbnb-resolved.jpg',
  '/explainers/soft-womenshealth-consult.jpg',
];

const VIDEO_SRC = '/explainers/videos/lumen5-hero-explainer.mp4';

function LaunchVideo() {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (playing || prefersReducedMotion()) return;
    const id = setInterval(() => setI((n) => (n + 1) % REEL.length), 2600);
    return () => clearInterval(id);
  }, [playing]);

  if (playing) {
    return (
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-black">
        <video
          className="absolute inset-0 size-full object-cover"
          src={VIDEO_SRC}
          controls
          autoPlay
          playsInline
          preload="none"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label="Play: an animated explainer about animated explainers, made in Lumen5"
      className="group relative block w-full aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-black cursor-pointer"
    >
      {REEL.map((src, n) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden
          className="absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity: n === i ? 1 : 0 }}
        />
      ))}
      {/* Cinematic vignette so the play glyph reads on any frame */}
      <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />

      {/* Play affordance */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex items-center justify-center size-[74px] rounded-full bg-white/95 shadow-lg backdrop-blur-sm transition-transform group-hover:scale-105">
          <svg width="26" height="30" viewBox="0 0 26 30" fill="none" aria-hidden>
            <path d="M25 13.27a2 2 0 0 1 0 3.46L3 29.4A2 2 0 0 1 0 27.66V2.34A2 2 0 0 1 3 .6l22 12.67Z" fill="#201e26" />
          </svg>
        </span>
      </span>

      {/* Label + runtime chip */}
      <span className="absolute left-4 top-4 flex items-center rounded-full bg-[#ffffff] px-3 py-1.5">
        <span className="font-heading font-semibold text-[12px] leading-none text-[#201e26] tracking-wide">
          Made in Lumen5
        </span>
      </span>
      <span className="absolute right-4 bottom-4 rounded-md bg-black/55 backdrop-blur-sm px-2 py-1">
        <span className="font-body text-[12px] leading-none text-white/90 tabular-nums">0:39</span>
      </span>
    </button>
  );
}

export default function Hero() {
  return (
    <div className="bg-[#201e26] w-full">
      <div className="mx-auto max-w-[1440px] 2xl:max-w-[1600px] px-6 md:px-16 xl:px-[110px] pt-8 md:pt-10 pb-[64px] md:pb-[96px]">
        {/* Logo */}
        <img alt="Lumen5" src="/lumen5-logo.svg" width={160} height={42} className="block mb-10 md:mb-14" />

        <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-16 2xl:gap-20">
          {/* Copy */}
          <div className="flex-1 xl:flex-[0.9] min-w-0 w-full max-w-[560px] xl:max-w-[600px]">
            <p className="font-heading font-semibold text-[20px] leading-none text-[#fafafa] mb-6">
              New · Animated explainers
            </p>
            <h1 className="font-heading font-semibold text-[38px] leading-[46px] md:text-[58px] md:leading-[68px] xl:text-[48px] xl:leading-[58px] 2xl:text-[58px] 2xl:leading-[68px] text-[#fafafa]">
              Finally. Explainer videos anyone can make.
            </h1>
            <p className="font-body font-normal text-[18px] leading-[30px] md:text-[22px] md:leading-[36px] text-[#fafafa] mt-6">
              The kind that used to cost thousands and take a month. Turn your most complex idea into
              a video people actually watch. Make your first one today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={CTA.signup}
                className="bg-[#5645f5] px-8 py-5 rounded-full font-heading font-semibold text-[16px] leading-[30px] text-[#fafafa] whitespace-nowrap hover:opacity-90 transition-opacity"
              >
                Try it out now for free
              </a>
              <span className="font-body text-[16px] leading-[22px] text-[#fafafa]">
                Free plan · no credit card
              </span>
            </div>
          </div>

          {/* Launch video — takes the larger share of the row on desktop */}
          <div className="flex-1 xl:flex-[1.1] min-w-0 w-full max-w-[720px] xl:max-w-none">
            <LaunchVideo />
          </div>
        </div>
      </div>
    </div>
  );
}
