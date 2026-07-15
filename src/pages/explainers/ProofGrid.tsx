// Explainers — "cash the claim". The hero says anyone can make these; this
// block proves it with the real videos shown in the product webinar, playable
// inline. Facade pattern: poster still + play glyph until clicked, then a
// self-hosted <video> with controls (preload="none" so nothing downloads
// until someone presses play). Only one tile plays at a time.

import { useState } from 'react';

const tiles = [
  {
    video: '/explainers/videos/nyu-langone-mouse.mp4',
    poster: '/explainers/nyu-langone-brain.jpg',
    topic: 'The science of a conversation',
    tag: 'NYU Langone Health · Beta customer',
    duration: '1:43',
  },
  {
    video: '/explainers/videos/airbnb-cohosting.mp4',
    poster: '/explainers/claymo-airbnb-resolved.jpg',
    topic: 'Co-hosting, explained',
    tag: 'Topic demo · Claymation',
    duration: '2:02',
  },
  {
    video: '/explainers/videos/fruit-health.mp4',
    poster: '/explainers/cgi-health-avocado.jpg',
    topic: 'How your body actually uses fruit',
    tag: 'Topic demo · Lucid 3D',
    duration: '2:07',
  },
];

function PlayGlyph() {
  return (
    <div className="flex items-center justify-center size-[54px] rounded-full bg-white/90 shadow-md transition-transform group-hover:scale-105">
      <svg width="18" height="21" viewBox="0 0 18 21" fill="none" aria-hidden>
        <path d="M17 9.13a1.6 1.6 0 0 1 0 2.74l-14.4 8.3A1.6 1.6 0 0 1 0 18.8V2.2A1.6 1.6 0 0 1 2.6.8L17 9.13Z" fill="#201e26" />
      </svg>
    </div>
  );
}

export default function ProofGrid() {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <div className="bg-[#fafafa] flex flex-col gap-12 items-center px-6 md:px-16 py-[72px] md:py-[104px] w-full">
      <div className="flex flex-col gap-3 items-center text-center w-full max-w-[820px]">
        <h2 className="font-heading font-semibold text-[28px] leading-[36px] md:text-[42px] md:leading-[54px] text-[#201e26]">
          Don’t take our word for it. Press play.
        </h2>
        <p className="font-body font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-[#201e26]/70">
          Real explainers, made in Lumen5, from nothing but a script. Voiceover, animation,
          captions and all.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1180px]">
        {tiles.map(({ video, poster, topic, tag, duration }, i) => (
          <figure key={topic} className="flex flex-col">
            <div className="relative aspect-video rounded-2xl overflow-hidden ring-1 ring-black/5 bg-black">
              {playing === i ? (
                <video
                  className="absolute inset-0 size-full object-cover"
                  src={video}
                  poster={poster}
                  controls
                  autoPlay
                  playsInline
                  preload="none"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(i)}
                  aria-label={`Play: ${topic}`}
                  className="group absolute inset-0 block w-full cursor-pointer"
                >
                  <img
                    src={poster}
                    alt={topic}
                    className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <PlayGlyph />
                  </span>
                  <span className="absolute right-3 bottom-3 rounded-md bg-black/55 backdrop-blur-sm px-2 py-1">
                    <span className="font-body text-[12px] leading-none text-white/90 tabular-nums">{duration}</span>
                  </span>
                </button>
              )}
            </div>
            <figcaption className="mt-4">
              <p className="font-heading font-semibold text-[18px] leading-[26px] text-[#201e26]">{topic}</p>
              <p className="font-body font-normal text-[13px] leading-[20px] text-[#201e26]/55 mt-1 uppercase tracking-[0.08em]">
                {tag}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
