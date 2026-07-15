// Explainers — webinar deep-dive before the final CTA. For visitors who want
// the full story: the product webinar with real beta customer videos and a
// live build. Click-to-load facade: the YouTube iframe (and its player JS)
// only loads if someone actually presses play, keeping the page fast.

import { useState } from 'react';

const VIDEO_ID = 'Sgas3FNXLa4';
const WATCH_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;

export default function WebinarSection() {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`);

  return (
    <div className="bg-[#fafafa] w-full px-6 md:px-16 py-[72px] md:py-[104px]">
      <div className="mx-auto max-w-[1020px]">
        <div className="flex flex-col gap-3 items-center text-center mb-10 md:mb-12">
          <p className="font-heading font-semibold text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] text-[#201e26]">
            Go deeper
          </p>
          <h2 className="font-heading font-semibold text-[28px] leading-[36px] md:text-[42px] md:leading-[54px] text-[#201e26]">
            Watch the full walkthrough
          </h2>
          <p className="font-body font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-[#201e26] max-w-[720px]">
            Real videos from beta customers, plus a live build from pasted text to a finished
            explainer. Watch it here, or share it with the person who needs convincing.
          </p>
        </div>

        <div className="relative aspect-video w-full rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-[0_30px_60px_-25px_rgba(32,30,38,0.35)] bg-black">
          {playing ? (
            <iframe
              className="absolute inset-0 size-full"
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title="Lumen5 Animated Explainers webinar"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label="Play the Animated Explainers webinar"
              className="group absolute inset-0 block w-full cursor-pointer"
            >
              <img
                src={thumb}
                alt="Lumen5 Animated Explainers webinar"
                className="absolute inset-0 size-full object-cover"
                onError={() => setThumb(`https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`)}
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex items-center justify-center size-[74px] rounded-full bg-white/95 shadow-lg transition-transform group-hover:scale-105">
                  <svg width="26" height="30" viewBox="0 0 26 30" fill="none" aria-hidden>
                    <path d="M25 13.27a2 2 0 0 1 0 3.46L3 29.4A2 2 0 0 1 0 27.66V2.34A2 2 0 0 1 3 .6l22 12.67Z" fill="#201e26" />
                  </svg>
                </span>
              </span>
              <span className="absolute left-4 top-4 flex items-center rounded-full bg-[#ffffff] px-3 py-1.5">
                <span className="font-heading font-semibold text-[12px] leading-none text-[#201e26] tracking-wide">
                  Product webinar
                </span>
              </span>
            </button>
          )}
        </div>

        <p className="text-center font-body text-[15px] leading-[24px] text-[#201e26] mt-6">
          Prefer a link you can send around?{' '}
          <a
            href={WATCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5645f5] font-medium hover:underline"
          >
            Watch it on YouTube
          </a>
        </p>
      </div>
    </div>
  );
}
