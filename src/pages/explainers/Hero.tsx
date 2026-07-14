// Explainers — launch hero (locked concept from the client thread).
// Dark banner, launch framing on the left, the launch video on the right.
// The video is a real host-announces → animated-clip-plays film; until the
// final cut is dropped in, this renders a styled play slot. Swap the inner
// markup of <VideoSlot/> for the embed when the film is ready.

import { CTA } from '../../shared/cta-urls';

function Logo() {
  return (
    <img alt="Lumen5" src="/lumen5-logo.svg" width={181} height={48} className="block" />
  );
}

// Launch-video placeholder. Styled to read as an intentional player, not a
// missing asset: dark frame, brand-purple glow, large play button, caption.
function VideoSlot() {
  return (
    <a
      href={CTA.signup}
      className="group relative block aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-2xl"
      aria-label="Watch the launch video"
    >
      {/* soft brand glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 120% at 30% 20%, rgba(86,69,245,0.55) 0%, rgba(59,217,235,0.18) 40%, rgba(12,11,16,0.9) 100%)',
        }}
      />
      {/* faint scene strips to suggest an animated explainer underneath */}
      <div className="absolute bottom-5 left-5 right-5 flex gap-2 opacity-40">
        <span className="h-2 flex-1 rounded-full bg-[#CECBF6]" />
        <span className="h-2 flex-1 rounded-full bg-[#3bd9eb]" />
        <span className="h-2 flex-1 rounded-full bg-[#46e378]" />
        <span className="h-2 flex-1 rounded-full bg-[#e5e250]" />
      </div>
      {/* play button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <span className="flex items-center justify-center w-[76px] h-[76px] rounded-full bg-white/95 shadow-lg transition-transform group-hover:scale-105">
          <svg width="26" height="30" viewBox="0 0 26 30" fill="none" className="ml-1">
            <path d="M0 2.6C0 1 1.8 0 3.2 0.9l21 12.4c1.3 0.8 1.3 2.7 0 3.5l-21 12.4C1.8 30 0 29 0 27.4V2.6Z" fill="#5645f5" />
          </svg>
        </span>
        <span className="font-heading font-semibold text-[15px] leading-[24px] text-white/90">
          Watch the 90-second launch
        </span>
      </div>
    </a>
  );
}

export default function Hero() {
  return (
    <div className="flex flex-col xl:flex-row items-stretch relative bg-[#201e26]">
      {/* Left */}
      <div className="bg-[#201e26] flex flex-col gap-8 items-start px-6 xl:pl-[110px] xl:pr-0 py-[72px] md:py-[104px] flex-[1_0_0] min-w-0">
        <Logo />
        <div className="flex flex-col gap-6 items-start w-full max-w-[560px]">
          <span className="flex items-center gap-2">
            <span className="flex items-center justify-center px-3 py-[6px] rounded-full bg-[#5645f5]">
              <span className="font-heading font-semibold text-[13px] leading-[18px] tracking-[0.08em] uppercase text-[#fafafa]">
                New — Animated Explainers
              </span>
            </span>
          </span>
          <h1 className="font-heading font-semibold text-[38px] leading-[46px] md:text-[58px] md:leading-[70px] text-[#fafafa]">
            Finally. Explainer videos anyone can make.
          </h1>
          <p className="font-body font-normal text-[18px] leading-[30px] md:text-[22px] md:leading-[38px] text-[#fafafa]">
            The kind that used to cost $50,000 and take a month. Turn your most complex idea into a video
            people actually finish &mdash; and make your first one today. No crew. No editor. No agency.
          </p>
          <a
            href={CTA.signup}
            className="bg-[#5645f5] px-8 py-5 rounded-full font-heading font-semibold text-[18px] leading-[30px] text-[#fafafa] whitespace-nowrap hover:opacity-90 transition-opacity"
          >
            Try it out now for free
          </a>
          <p className="font-body font-normal text-[15px] leading-[24px] text-[#fafafa] opacity-70">
            Free plan &bull; No credit card required
          </p>
        </div>
      </div>

      {/* Right — launch video */}
      <div className="flex items-center xl:w-[720px] shrink-0 px-6 pb-[72px] xl:px-0 xl:pr-[110px] xl:py-0">
        <VideoSlot />
      </div>
    </div>
  );
}
