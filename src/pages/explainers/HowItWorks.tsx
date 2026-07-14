// Explainers — "From a doc to a done video, in three steps"
// Big editorial rows: text column + a large animated product frame per step,
// modeled on the real Animated Explainers flow (script → style + ingredients →
// storyboard). The frames are faux-UI built in code — they animate on scroll,
// never expire, and never leak beta screenshots.

import { useInView } from './useInView';

/* ---------------------------------- shell ---------------------------------- */

// App-window chrome around each product visual.
function Frame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="w-full rounded-2xl bg-white border border-[#eceaf3] overflow-hidden shadow-[0_32px_70px_-24px_rgba(38,33,92,0.35)]">
      <div className="flex items-center gap-[7px] px-5 h-11 border-b border-[#f0eef6] bg-[#fbfaf8]">
        <span className="w-[10px] h-[10px] rounded-full bg-[#f95580]" />
        <span className="w-[10px] h-[10px] rounded-full bg-[#e5e250]" />
        <span className="w-[10px] h-[10px] rounded-full bg-[#46e378]" />
        <span className="ml-3 font-body text-[12px] text-[#9a98a6]">{label}</span>
      </div>
      <div className="p-5 md:p-7">{children}</div>
    </div>
  );
}

// Skeleton text line used across the panels.
function TextLine({ w, h = 10, color = '#dcd9ec', className = '', style = {} }: {
  w: string; h?: number; color?: string; className?: string; style?: React.CSSProperties;
}) {
  return (
    <span
      className={`block rounded-full ${className}`}
      style={{ width: w, height: h, background: color, ...style }}
    />
  );
}

/* ------------------------- step 1 — script writes itself ------------------------- */

function ScriptPanel() {
  const { ref, inView } = useInView<HTMLDivElement>(0.35);
  const bars = ['88%', '64%', '78%', '52%'];
  const anim = (i: number) =>
    inView
      ? { className: 'motion-safe-only origin-left animate-[growbar_0.9s_ease_both]', style: { animationDelay: `${0.25 + i * 0.4}s` } }
      : { className: 'opacity-0', style: {} };

  return (
    <div ref={ref}>
      <Frame label="lumen5 — animated explainers · generate a script">
        {/* input mode tabs, as in the product */}
        <div className="flex flex-wrap gap-2 mb-5">
          {['Describe it', 'Paste text', 'Import URL', 'Upload doc'].map((t, i) => (
            <span
              key={t}
              className={`px-4 py-[7px] rounded-full font-body text-[13px] ${i === 0 ? 'bg-[#5645f5] text-white font-medium' : 'bg-[#f2f0fa] text-[#6c6a78]'}`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* the doc, typing itself into a script */}
        <div className="rounded-xl bg-[#faf9f5] border border-[#efedf5] p-5 min-h-[132px]">
          <div className="flex flex-col gap-[13px]">
            {bars.map((w, i) => {
              const a = anim(i);
              return <TextLine key={i} w={w} className={a.className} style={a.style} />;
            })}
          </div>
          <span className="motion-safe-only inline-block mt-3 w-[2px] h-[16px] bg-[#5645f5] animate-[blink_1.1s_step-end_infinite]" />
        </div>

        {/* voice + duration + generate */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-5">
          <div className="flex gap-2">
            <span className="px-4 py-[7px] rounded-full bg-[#f2f0fa] font-body text-[13px] text-[#6c6a78]">Voice: Aria</span>
            <span className="px-4 py-[7px] rounded-full bg-[#f2f0fa] font-body text-[13px] text-[#6c6a78]">~90 seconds</span>
            <span className="px-4 py-[7px] rounded-full bg-[#f2f0fa] font-body text-[13px] text-[#6c6a78]">Rewrite as explainer</span>
          </div>
          <span className="motion-safe-only px-6 py-[10px] rounded-full bg-[#5645f5] font-heading font-semibold text-[14px] text-white animate-[pulseBtn_2.6s_ease-in-out_infinite]">
            Generate script
          </span>
        </div>
      </Frame>
    </div>
  );
}

/* --------------------- step 2 — styles + consistent ingredient --------------------- */

const STYLE_THUMBS = [
  { name: 'Lucid',      bg: 'linear-gradient(140deg, #5645f5 0%, #CECBF6 100%)', active: true },
  { name: 'Claymation', bg: 'linear-gradient(140deg, #e07a5f 0%, #f2cc8f 100%)' },
  { name: 'Anime',      bg: 'linear-gradient(140deg, #2f4a7a 0%, #9fc7f0 100%)' },
  { name: 'Serenity',   bg: 'linear-gradient(140deg, #0f7a5a 0%, #9FE1CB 100%)' },
];

function StylePanel() {
  const { ref, inView } = useInView<HTMLDivElement>(0.35);
  // The "ingredient" — one character, appearing in every scene.
  const Maya = ({ size = 26 }: { size?: number }) => (
    <span
      className="inline-block rounded-full shrink-0"
      style={{ width: size, height: size, background: 'linear-gradient(140deg, #5645f5 0%, #3bd9eb 100%)' }}
    />
  );

  return (
    <div ref={ref}>
      <Frame label="lumen5 — animated explainers · style & ingredients">
        {/* style picker */}
        <div className="grid grid-cols-4 gap-3">
          {STYLE_THUMBS.map((s, i) => (
            <div
              key={s.name}
              className={`${inView ? 'motion-safe-only animate-[popIn_0.5s_ease_both]' : 'opacity-0'}`}
              style={{ animationDelay: `${0.1 + i * 0.12}s` }}
            >
              <div
                className={`relative aspect-[4/3] rounded-lg ${s.active ? 'ring-2 ring-[#5645f5] ring-offset-2' : ''}`}
                style={{ background: s.bg }}
              >
                {s.active && (
                  <span className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 rounded-full bg-[#46e378]">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5l3.5 3.5L11 1" stroke="#201e26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                )}
              </div>
              <p className="mt-2 font-body text-[12px] text-[#6c6a78] text-center">{s.name}</p>
            </div>
          ))}
        </div>

        {/* ingredient, locked across scenes */}
        <div className="flex items-center gap-3 mt-6 mb-3">
          <Maya size={40} />
          <div>
            <p className="font-heading font-semibold text-[14px] leading-[20px] text-[#201e26]">Ingredient · Maya</p>
            <p className="font-body text-[12px] leading-[18px] text-[#9a98a6]">Locked into every scene, automatically</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { bg: '#EEEDFE', pos: 'justify-start' },
            { bg: '#E1F5EE', pos: 'justify-center' },
            { bg: '#FAECE7', pos: 'justify-end' },
          ].map((scene, i) => (
            <div
              key={i}
              className={`relative aspect-video rounded-lg p-3 flex items-end ${scene.pos} ${inView ? 'motion-safe-only animate-[popIn_0.5s_ease_both]' : 'opacity-0'}`}
              style={{ background: scene.bg, animationDelay: `${0.55 + i * 0.18}s` }}
            >
              <span className="absolute top-2 left-2 flex flex-col gap-[3px]">
                <TextLine w="34px" h={4} color="rgba(32,30,38,0.18)" />
                <TextLine w="24px" h={4} color="rgba(32,30,38,0.12)" />
              </span>
              <span className="motion-safe-only animate-[floaty_4.5s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.6}s` }}>
                <Maya />
              </span>
            </div>
          ))}
        </div>
      </Frame>
    </div>
  );
}

/* ----------------------- step 3 — storyboard builds itself ----------------------- */

const CELLS = ['#CECBF6', '#9FE1CB', '#F5C4B3', '#FAC775', '#EEEDFE', '#E6F1FB', '#FBEAF0', '#E1F5EE'];

function StoryboardPanel() {
  const { ref, inView } = useInView<HTMLDivElement>(0.35);
  return (
    <div ref={ref}>
      <Frame label="lumen5 — animated explainers · storyboard">
        <div className="grid grid-cols-4 gap-3">
          {CELLS.map((c, i) => (
            <div
              key={i}
              className={`relative aspect-video rounded-lg p-2 flex items-end ${i === 1 ? 'ring-2 ring-[#5645f5] ring-offset-2' : ''} ${inView ? 'motion-safe-only animate-[popIn_0.45s_ease_both]' : 'opacity-0'}`}
              style={{ background: c, animationDelay: `${0.1 + i * 0.14}s` }}
            >
              <TextLine w="70%" h={4} color="rgba(32,30,38,0.16)" />
              {i === 1 && (
                <span className="absolute -top-3 left-2 px-2 py-[2px] rounded-full bg-[#5645f5] font-body text-[10px] text-white">
                  Scene 02
                </span>
              )}
              {i === 7 && (
                <span
                  className="motion-safe-only absolute inset-0 rounded-lg animate-[shimmer_1.8s_linear_infinite]"
                  style={{ background: 'linear-gradient(100deg, transparent 30%, rgba(255,255,255,0.65) 50%, transparent 70%)', backgroundSize: '200% 100%' }}
                />
              )}
            </div>
          ))}
        </div>

        {/* per-scene prompt bar — the "describe what you want changed" moment */}
        <div
          className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-6 ${inView ? 'motion-safe-only animate-[fadeUp_0.6s_ease_both]' : 'opacity-0'}`}
          style={{ animationDelay: '1.3s' }}
        >
          <div className="flex-1 rounded-full bg-[#faf9f5] border border-[#efedf5] px-5 py-[10px]">
            <p className="font-body text-[13px] text-[#6c6a78] truncate">
              Add two people at the table, and plants — who doesn&rsquo;t like plants?
            </p>
          </div>
          <span className="px-6 py-[10px] rounded-full bg-[#5645f5] font-heading font-semibold text-[14px] text-white text-center whitespace-nowrap">
            Animate scene
          </span>
        </div>
      </Frame>
    </div>
  );
}

/* ----------------------------------- section ----------------------------------- */

type Step = {
  badge: string;
  badgeColor: string;
  title: string;
  desc: string;
  caption: string;
  panel: React.ReactNode;
  reverse?: boolean;
};

const steps: Step[] = [
  {
    badge: 'Step 1', badgeColor: 'bg-[#46e378]',
    title: 'Paste a doc, or just describe it',
    desc: 'A sentence or a whole blog, report, or white paper. Lumen5 writes the script — the part that does the heavy lifting — and builds a scene for every line.',
    caption: 'Accepts: a description, pasted text, a URL, or a document',
    panel: <ScriptPanel />,
  },
  {
    badge: 'Step 2', badgeColor: 'bg-[#3bd9eb]',
    title: 'Pick a style. Your brand stays locked',
    desc: 'Choose from 15+ animation styles, then add ingredients — a character, a product, a logo — that stay consistent across every single scene.',
    caption: 'Ingredients keep people, products & brand consistent',
    panel: <StylePanel />,
    reverse: true,
  },
  {
    badge: 'Step 3', badgeColor: 'bg-[#e5e250]',
    title: 'Direct every scene. Publish today',
    desc: 'Lumen5 builds the storyboard, one scene per line. Tell any scene what to do — in plain English — then export in any aspect ratio and ship it the same afternoon.',
    caption: 'Any aspect ratio • 30+ languages • ready today',
    panel: <StoryboardPanel />,
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-[#fafafa] flex flex-col gap-14 md:gap-20 items-center justify-center px-6 md:px-16 py-[72px] md:py-[104px] w-full">
      {/* Heading */}
      <div className="flex flex-col gap-3 items-center text-center w-full max-w-[800px]">
        <p className="font-heading font-semibold text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] text-[#201e26]">
          The script does the heavy lifting
        </p>
        <h2 className="font-heading font-semibold text-[28px] leading-[36px] md:text-[42px] md:leading-[60px] text-[#201e26]">
          From a doc to a done video, in three steps
        </h2>
        <p className="font-body font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-[#201e26]">
          If you&rsquo;ve used Lumen5 before, this will feel familiar. If you haven&rsquo;t, you&rsquo;ll finish your first one today.
        </p>
      </div>

      {/* Steps — alternating editorial rows */}
      <div className="flex flex-col gap-16 md:gap-24 w-full max-w-[1232px]">
        {steps.map(({ badge, badgeColor, title, desc, caption, panel, reverse }) => (
          <div
            key={title}
            className={`flex flex-col ${reverse ? 'xl:flex-row-reverse' : 'xl:flex-row'} items-center gap-8 xl:gap-16 w-full`}
          >
            {/* Text */}
            <div className="flex flex-col gap-5 items-start w-full xl:w-[38%] shrink-0">
              <div className={`${badgeColor} flex items-center justify-center px-4 py-2 rounded-full`}>
                <p className="font-heading font-semibold text-[14px] leading-[21px] text-[#201e26] whitespace-nowrap">{badge}</p>
              </div>
              <h3 className="font-heading font-semibold text-[26px] leading-[34px] md:text-[32px] md:leading-[42px] text-[#201e26]">{title}</h3>
              <p className="font-body font-normal text-[18px] leading-[30px] text-[#201e26]">{desc}</p>
              <div className="bg-[#efecff] flex items-center px-3 py-[6px] rounded-full max-w-full">
                <p className="font-body font-normal text-[12px] leading-[21px] text-[#201e26]">{caption}</p>
              </div>
            </div>
            {/* Product visual */}
            <div className="w-full xl:flex-1 min-w-0">{panel}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
