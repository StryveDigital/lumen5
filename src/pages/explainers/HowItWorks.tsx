// Explainers — "How it works", rebuilt as three large, alternating product
// frames instead of small cards. Each row pairs a step with a big faux-app
// window modeled on the real Lumen5 flow, animated on scroll:
//   1. Generate a script  — a document types itself into the editor
//   2. Choose a style      — real style thumbnails + brand-locked ingredients
//   3. Storyboard          — real frames render in a grid + plain-English prompt
// The prompt copy is lifted verbatim from the product webinar.

import { useEffect, useState, type ReactNode } from 'react';
import { CTA } from '../../shared/cta-urls';
import { useInView, prefersReducedMotion } from './useInView';

/* ------------------------------- app chrome ------------------------------- */

function AppWindow({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="w-full rounded-2xl bg-white ring-1 ring-black/[0.07] shadow-[0_30px_60px_-25px_rgba(32,30,38,0.35)] overflow-hidden">
      <div className="flex items-center gap-2 h-10 px-4 bg-[#f4f3f7] border-b border-black/[0.06]">
        <span className="size-3 rounded-full bg-[#e0dde6]" />
        <span className="size-3 rounded-full bg-[#e0dde6]" />
        <span className="size-3 rounded-full bg-[#e0dde6]" />
        <div className="mx-auto flex items-center gap-2 rounded-md bg-white px-3 py-1 ring-1 ring-black/5">
          <span className="size-1.5 rounded-full bg-[#5645f5]" />
          <span className="font-body text-[12px] leading-none text-[#201e26]/70">{title}</span>
        </div>
        <span className="w-9" />
      </div>
      <div className="p-5 md:p-6">{children}</div>
    </div>
  );
}

/* ---------------------------- 1 · script panel ---------------------------- */

const SCRIPT_TABS = ['Describe it', 'Paste text', 'Import a URL', 'Upload a doc'];
const SCRIPT_TEXT =
  'Sales used to control the whole buying journey. The rep held all the answers, so buyers had to start there. But three forces now pull the buyer toward content before sales ever enters the room.';

function useTypewriter(text: string, active: boolean, cps = 55) {
  const [out, setOut] = useState('');
  useEffect(() => {
    if (!active) return;
    if (prefersReducedMotion()) {
      setOut(text);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, 1000 / cps);
    return () => clearInterval(id);
  }, [text, active, cps]);
  return out;
}

function ScriptPanel() {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const typed = useTypewriter(SCRIPT_TEXT, inView);
  const done = typed.length >= SCRIPT_TEXT.length;
  return (
    <div ref={ref}>
      <AppWindow title="Generate a script">
        {/* tabs */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {SCRIPT_TABS.map((t) => (
            <span
              key={t}
              className={`font-body text-[12.5px] leading-none px-3 py-2 rounded-full ${
                t === 'Paste text'
                  ? 'bg-[#efecff] text-[#5645f5] font-medium'
                  : 'text-[#201e26]/55 ring-1 ring-black/[0.06]'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        {/* editor */}
        <div className="rounded-xl bg-[#faf9fc] ring-1 ring-black/[0.06] p-4 min-h-[132px]">
          <p className="font-body text-[15px] leading-[26px] text-[#201e26]">
            {typed}
            {!done && <span className="inline-block w-[2px] h-[18px] align-[-3px] bg-[#5645f5] ml-0.5 animate-pulse" />}
          </p>
        </div>
        {/* controls */}
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <span className="flex items-center gap-1.5 font-body text-[12.5px] text-[#201e26]/70 px-3 py-2 rounded-full ring-1 ring-black/[0.06]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden><path d="M6 1v10M3 3.5v5M9 3.5v5" stroke="#5645f5" strokeWidth="1.4" strokeLinecap="round"/></svg>
            AI voice · Natural
          </span>
          <span className="font-body text-[12.5px] text-[#201e26]/70 px-3 py-2 rounded-full ring-1 ring-black/[0.06]">Target · 90 sec</span>
          <span className="font-body text-[12.5px] text-[#5645f5] font-medium px-3 py-2 rounded-full bg-[#efecff]">Rewrite as explainer</span>
          <span className="ml-auto font-heading font-semibold text-[13px] text-white px-4 py-2.5 rounded-full bg-[#5645f5] shadow-sm">
            Generate script
          </span>
        </div>
      </AppWindow>
    </div>
  );
}

/* ----------------------------- 2 · style panel ---------------------------- */

const STYLE_THUMBS = [
  { src: '/explainers/lucid-office.png', name: 'Lucid', on: true },
  { src: '/explainers/serenity-airport.png', name: 'Serenity', on: false },
  { src: '/explainers/claymo-airbnb-driving.jpg', name: 'Claymo', on: false },
  { src: '/explainers/anime-yoga.png', name: 'Kiro', on: false },
];

function StylePanel() {
  return (
    <AppWindow title="Choose a style">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {STYLE_THUMBS.map(({ src, name, on }) => (
          <div key={name} className="flex flex-col gap-1.5">
            <div
              className={`relative aspect-video rounded-lg overflow-hidden ${
                on ? 'ring-2 ring-[#5645f5]' : 'ring-1 ring-black/[0.08]'
              }`}
            >
              <img src={src} alt={name} className="absolute inset-0 size-full object-cover" />
              {on && (
                <span className="absolute top-1.5 right-1.5 flex items-center justify-center size-5 rounded-full bg-[#5645f5]">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden><path d="M1 4l2.5 2.5L9 1" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              )}
            </div>
            <span className={`font-body text-[12px] leading-none ${on ? 'text-[#5645f5] font-medium' : 'text-[#201e26]/55'}`}>{name}</span>
          </div>
        ))}
      </div>

      {/* ingredients — brand-locked consistency */}
      <div className="mt-5 pt-5 border-t border-black/[0.07]">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-heading font-semibold text-[12px] uppercase tracking-[0.1em] text-[#201e26]/60">Ingredients</span>
          <span className="font-body text-[12px] text-[#201e26]/45">locked across every scene</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 rounded-full bg-[#efecff] pl-1.5 pr-3 py-1.5">
            <span className="size-6 rounded-full bg-[#5645f5] flex items-center justify-center text-white font-heading font-semibold text-[11px]">M</span>
            <span className="font-body text-[12.5px] text-[#5645f5] font-medium">Maya · character</span>
          </span>
          <span className="flex items-center gap-2 rounded-full bg-[#e9f9f0] px-3 py-1.5">
            <span className="size-3 rounded-[3px] bg-[#46e378]" />
            <span className="font-body text-[12.5px] text-[#201e26]/70">Brand kit</span>
          </span>
          <span className="hidden sm:flex items-center gap-2 rounded-full bg-[#eafcff] px-3 py-1.5">
            <span className="size-3 rounded-full bg-[#3bd9eb]" />
            <span className="font-body text-[12.5px] text-[#201e26]/70">Product logo</span>
          </span>
        </div>
      </div>
    </AppWindow>
  );
}

/* --------------------------- 3 · storyboard panel ------------------------- */

// One scene of the buyer's-journey video (continues the Step 1 script), being
// directed in plain English. Single consistent style — the range lives in the
// Style Showcase, not here. Scene rail stays within one style, mid-render.
const SCENE_SCRIPT = 'Sales used to control the whole buying journey. Buyers had to start there.';
const EDIT_PROMPT = 'Add two people at the table, and some plants. Who doesn’t like plants?';

type RailScene = { src?: string; label: string; state: 'active' | 'ready' | 'animating' | 'generating' };
const RAIL: RailScene[] = [
  { src: '/explainers/lucid-office.png', label: '1', state: 'active' },
  { src: '/explainers/lucid-city.png', label: '2', state: 'ready' },
  { src: '/explainers/lucid-factory.png', label: '3', state: 'ready' },
  { label: '4', state: 'animating' },
  { label: '5', state: 'generating' },
  { label: '6', state: 'generating' },
];

function StoryboardPanel() {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const typed = useTypewriter(EDIT_PROMPT, inView, 42);
  const done = typed.length >= EDIT_PROMPT.length;
  return (
    <div ref={ref}>
      <AppWindow title="Storyboard · Scene 1 of 16">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* active scene reference image */}
          <div className="lg:flex-[1.5] min-w-0">
            <div className="flex items-center justify-between mb-2">
              <span className="font-heading font-semibold text-[11px] uppercase tracking-[0.1em] text-[#201e26]/50">Reference image</span>
              <span className="font-body text-[11px] text-[#5645f5] bg-[#efecff] px-2.5 py-1 rounded-full">Scene 1</span>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden ring-2 ring-[#5645f5]/60">
              <img src="/explainers/lucid-office.png" alt="Reference scene" className="absolute inset-0 size-full object-cover" />
              <div
                className="absolute left-2 bottom-2 flex items-center gap-1.5 rounded-full bg-[#201e26]/80 backdrop-blur-sm px-2.5 py-1 transition-opacity duration-500"
                style={{ opacity: done ? 1 : 0 }}
              >
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden><path d="M1 4.5l3 3 6-6.5" stroke="#46e378" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span className="font-body text-[11px] text-white">Reference updated</span>
              </div>
            </div>
          </div>

          {/* script + plain-English direction */}
          <div className="lg:flex-1 min-w-0 flex flex-col">
            <span className="font-heading font-semibold text-[11px] uppercase tracking-[0.1em] text-[#201e26]/50 mb-1.5">Script</span>
            <p className="font-body text-[13.5px] leading-[21px] text-[#201e26]/80">{SCENE_SCRIPT}</p>

            <div className="border-t border-black/[0.07] my-4" />

            <span className="font-body text-[12.5px] text-[#201e26]/55 mb-2">Would you like to change this image?</span>
            <div className="rounded-lg bg-[#faf9fc] ring-1 ring-black/[0.07] px-3 py-2.5 min-h-[60px]">
              <p className="font-body text-[13px] leading-[20px] text-[#201e26] italic">
                {typed}
                {!done && <span className="inline-block w-[2px] h-[15px] align-[-2px] bg-[#5645f5] ml-0.5 animate-pulse" />}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <span className="font-heading font-semibold text-[12.5px] text-[#201e26]/70 px-3.5 py-2 rounded-full ring-1 ring-black/[0.1]">Edit image</span>
              <span
                className={`font-heading font-semibold text-[12.5px] text-white px-3.5 py-2 rounded-full bg-[#5645f5] inline-flex items-center gap-1.5 transition-shadow ${
                  done ? 'shadow-[0_0_0_4px_rgba(86,69,245,0.18)]' : ''
                }`}
              >
                Animate this image
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden><path d="M1 5h9M7 1.5 10.5 5 7 8.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </div>
          </div>
        </div>

        {/* scene list — one style, mid-render */}
        <div className="mt-5 pt-4 border-t border-black/[0.07]">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="font-heading font-semibold text-[11px] uppercase tracking-[0.1em] text-[#201e26]/50">Scene list</span>
            <span className="font-body text-[11px] text-[#201e26]/40">3 of 16 animated</span>
          </div>
          <div className="grid grid-cols-6 gap-2">
            {RAIL.map(({ src, label, state }) => (
              <div
                key={label}
                className={`relative aspect-video rounded-md overflow-hidden bg-[#f1f0f4] ${
                  state === 'active' ? 'ring-2 ring-[#5645f5]' : 'ring-1 ring-black/[0.08]'
                }`}
              >
                {src && <img src={src} alt="" aria-hidden className="absolute inset-0 size-full object-cover" />}
                <span className="absolute top-0.5 left-1 font-body text-[9px] text-white/90 drop-shadow">{label}</span>
                {state === 'animating' && (
                  <div className="absolute inset-0 bg-[#201e26]/55 flex items-center justify-center px-1">
                    <span className="block h-1 w-4/5 rounded-full bg-white/25 overflow-hidden">
                      <span className="block h-full w-2/3 bg-[#3bd9eb] rounded-full animate-pulse" />
                    </span>
                  </div>
                )}
                {state === 'generating' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#efecff] to-[#f6f5fb] animate-pulse">
                    <span className="font-body text-[11px] text-[#201e26]/35">…</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </AppWindow>
    </div>
  );
}

/* --------------------------------- layout --------------------------------- */

const STEPS = [
  {
    badge: 'Step 1',
    badgeColor: 'bg-[#46e378]',
    title: 'Start with anything. Even just an idea.',
    desc: 'Paste text, import a URL, upload a document, or simply describe what you want and let the AI write the script for you. The script carries the video, and you shape it in a click.',
    panel: <ScriptPanel />,
  },
  {
    badge: 'Step 2',
    badgeColor: 'bg-[#3bd9eb]',
    title: 'Pick a style. Your brand stays locked.',
    desc: 'Choose from 15 animation styles, or get a custom one built just for your brand. Ingredients keep your characters, your mascot, even your CEO consistent across every scene.',
    panel: <StylePanel />,
  },
  {
    badge: 'Step 3',
    badgeColor: 'bg-[#e5e250]',
    title: 'Generate. Then direct it like a pro.',
    desc: 'Lumen5 builds a scene-by-scene storyboard. Refine any shot in plain English, animate it, then add music, captions, and translations in the Lumen5 editor. Publish the same day.',
    panel: <StoryboardPanel />,
  },
];

function Row({ step, index }: { step: (typeof STEPS)[number]; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  const reverse = index % 2 === 1;
  return (
    <div
      ref={ref}
      className={`flex flex-col ${reverse ? 'xl:flex-row-reverse' : 'xl:flex-row'} items-center gap-8 xl:gap-16 transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex-1 w-full max-w-[440px]">
        <div className={`${step.badgeColor} inline-flex items-center px-4 py-2 rounded-full mb-5`}>
          <span className="font-heading font-semibold text-[14px] leading-none text-[#201e26]">{step.badge}</span>
        </div>
        <h3 className="font-heading font-semibold text-[26px] leading-[32px] md:text-[32px] md:leading-[40px] text-[#201e26]">
          {step.title}
        </h3>
        <p className="font-body font-normal text-[17px] leading-[28px] md:text-[18px] md:leading-[30px] text-[#201e26]/70 mt-4">
          {step.desc}
        </p>
      </div>
      <div className="flex-1 w-full min-w-0">{step.panel}</div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <div className="bg-white w-full px-6 md:px-16 py-[72px] md:py-[104px]">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-col gap-3 items-center text-center max-w-[820px] mx-auto mb-14 md:mb-20">
          <p className="font-heading font-semibold text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] text-[#5645f5]">
            How it works
          </p>
          <h2 className="font-heading font-semibold text-[28px] leading-[36px] md:text-[42px] md:leading-[54px] text-[#201e26]">
            From an idea to a finished video, in three steps.
          </h2>
          <p className="font-body font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-[#201e26]/70">
            No crew. No motion designer. No agency timeline. A guided flow takes you from script to
            styled scenes to a finished film.
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {STEPS.map((step, i) => (
            <Row key={step.badge} step={step} index={i} />
          ))}
        </div>

        <div className="flex justify-center mt-16 md:mt-20">
          <a
            href={CTA.signup}
            className="bg-[#5645f5] px-8 py-5 rounded-full font-heading font-semibold text-[18px] leading-[30px] text-[#fafafa] hover:opacity-90 transition-opacity"
          >
            Try it out now for free
          </a>
        </div>
      </div>
    </div>
  );
}
