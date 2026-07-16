// Explainers — workflow comparison. Sets the fragmented traditional pipeline
// (an agency plus freelancers plus a stack of disconnected AI tools) against
// Lumen5's single guided flow. Pairs with OldWayVsNow directly below it: this
// section is the resource/workflow contrast, that one is the cost/time math.

import { useInView } from './useInView';

type Step = { label: string; tool?: string };

const OLD_STEPS: Step[] = [
  { label: 'Write a creative brief' },
  { label: 'Brief an agency or freelancer' },
  { label: 'Draft the script', tool: 'ChatGPT' },
  { label: 'Build a storyboard', tool: 'Slides & docs' },
  { label: 'Illustrate every scene', tool: 'Nano Banana 2' },
  { label: 'Animate the scenes', tool: 'Kling 3.0' },
  { label: 'Record the voiceover', tool: 'ElevenLabs' },
  { label: 'Stitch, review, revise' },
];

const NEW_STEPS: Step[] = [
  { label: 'Describe your idea, or paste a script' },
  { label: 'Pick a style' },
  { label: 'Generate the storyboard' },
  { label: 'Direct, animate, and publish' },
];

const OLD_STATS = [
  { k: 'Timeline', v: '3+ weeks' },
  { k: 'Budget', v: 'Thousands' },
  { k: 'Stack', v: '4+ tools & vendors' },
];
const NEW_STATS = [
  { k: 'Timeline', v: 'An afternoon' },
  { k: 'Budget', v: 'One subscription' },
  { k: 'Stack', v: 'One system' },
];

function Stepper({ steps, highlight }: { steps: Step[]; highlight: boolean }) {
  return (
    <ol className="flex flex-col">
      {steps.map((s, i) => (
        <li key={s.label} className="relative flex gap-3.5 pb-5 last:pb-0">
          {/* connector rail */}
          {i < steps.length - 1 && (
            <span
              className={`absolute left-[15px] top-8 -bottom-0 w-px ${
                highlight ? 'bg-white/20' : 'border-l border-dashed border-black/15'
              }`}
              aria-hidden
            />
          )}
          <span
            className={`relative z-10 shrink-0 flex items-center justify-center size-8 rounded-full font-heading font-semibold text-[13px] ${
              highlight ? 'bg-[#5645f5] text-white' : 'bg-[#e9e7ef] text-[#201e26]/60'
            }`}
          >
            {i + 1}
          </span>
          <div className="pt-1 min-w-0">
            <p
              className={`font-body text-[15px] leading-[22px] ${
                highlight ? 'text-[#fafafa]' : 'text-[#201e26]'
              }`}
            >
              {s.label}
            </p>
            {s.tool && (
              <span className="inline-flex items-center gap-1.5 mt-2 rounded-full bg-white px-2.5 py-1 ring-1 ring-black/[0.08]">
                <span className="size-1.5 rounded-full bg-[#c9c5d6]" aria-hidden />
                <span className="font-body text-[12px] leading-none text-[#201e26]/55">{s.tool}</span>
              </span>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

function Stats({ stats, highlight }: { stats: { k: string; v: string }[]; highlight: boolean }) {
  return (
    <div className={`grid grid-cols-3 gap-2 mt-7 pt-6 border-t ${highlight ? 'border-white/12' : 'border-black/[0.08]'}`}>
      {stats.map(({ k, v }) => (
        <div key={k} className="flex flex-col gap-1">
          <span className={`font-body text-[11px] leading-none uppercase tracking-[0.1em] ${highlight ? 'text-[#8b7fff]' : 'text-[#201e26]/45'}`}>
            {k}
          </span>
          <span className={`font-heading font-semibold text-[15px] md:text-[17px] leading-[22px] ${highlight ? 'text-[#fafafa]' : 'text-[#201e26]'}`}>
            {v}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function WorkflowCompare() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <div className="bg-[#fafafa] w-full px-6 md:px-16 py-[72px] md:py-[104px]">
      <div ref={ref} className="mx-auto max-w-[1020px]">
        <div className="flex flex-col gap-3 items-center text-center max-w-[820px] mx-auto mb-12">
          <p className="font-heading font-semibold text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] text-[#201e26]">
            Old workflow vs. new
          </p>
          <h2 className="font-heading font-semibold text-[28px] leading-[36px] md:text-[42px] md:leading-[54px] text-[#201e26]">
            Eight tools and three weeks. Or one system and an afternoon.
          </h2>
          <p className="font-body font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-[#201e26]">
            A traditional explainer bounces between agencies, freelancers, and a stack of
            disconnected AI tools. Lumen5 collapses the whole pipeline into one guided flow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-stretch gap-5 lg:gap-4">
          {/* old way */}
          <div
            className={`bg-white rounded-2xl ring-1 ring-black/[0.06] p-7 md:p-8 flex flex-col transition-all duration-700 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="font-heading font-semibold text-[13px] uppercase tracking-[0.1em] text-[#201e26]/50">
                The traditional way
              </span>
            </div>
            <Stepper steps={OLD_STEPS} highlight={false} />
            <Stats stats={OLD_STATS} highlight={false} />
          </div>

          {/* vs divider */}
          <div className="flex lg:flex-col items-center justify-center gap-3">
            <span className="hidden lg:block w-px flex-1 bg-black/[0.08]" aria-hidden />
            <span className="flex items-center justify-center size-11 rounded-full bg-[#201e26] font-heading font-semibold text-[13px] text-[#fafafa] shrink-0">
              vs
            </span>
            <span className="hidden lg:block w-px flex-1 bg-black/[0.08]" aria-hidden />
          </div>

          {/* new way */}
          <div
            className={`bg-[#201e26] rounded-2xl p-7 md:p-8 flex flex-col shadow-[0_30px_60px_-25px_rgba(32,30,38,0.5)] transition-all duration-700 ease-out delay-150 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center gap-1.5 rounded-full bg-[#5645f5] px-3 py-1.5">
                <span className="size-1.5 rounded-full bg-white" aria-hidden />
                <span className="font-heading font-semibold text-[12px] leading-none text-white uppercase tracking-[0.08em]">
                  With Lumen5
                </span>
              </span>
            </div>
            <Stepper steps={NEW_STEPS} highlight />
            <p className="font-body text-[13.5px] leading-[20px] text-[#fafafa]/70 mt-5 rounded-xl bg-white/[0.06] ring-1 ring-white/10 px-4 py-3">
              Script, illustration, animation, and voiceover — all built in. One login, no handoffs.
            </p>
            <Stats stats={NEW_STATS} highlight />
          </div>
        </div>
      </div>
    </div>
  );
}
