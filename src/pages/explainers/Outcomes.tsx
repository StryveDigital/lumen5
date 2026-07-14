// Explainers — "It's not about making a video. It's about what it does."
// The webinar's ROI-by-team, reframed as outcomes. Absorbs the old use-case
// strip so the story doesn't repeat itself.

type Outcome = {
  badge: string;
  badgeBg: string;
  title: string;
  body: string;
  uses: string;
};

const outcomes: Outcome[] = [
  {
    badge: "Sales & Marketing",
    badgeBg: "#46e378",
    title: "Shorten the sales cycle",
    body: "Top-of-funnel explainers, competitive differentiators, and event content that answer “what do you do again?” before the call.",
    uses: "Awareness · Differentiators · Email · Trade shows",
  },
  {
    badge: "Customer Success",
    badgeBg: "#3bd9eb",
    title: "Cut tickets and churn",
    body: "Onboarding walkthroughs and how-to videos customers actually watch, so they adopt faster and open fewer tickets.",
    uses: "Onboarding · Feature adoption · FAQ · What’s new",
  },
  {
    badge: "People, L&D & Comms",
    badgeBg: "#e5e250",
    title: "Ramp people faster, everywhere",
    body: "New-hire onboarding, compliance, and change management that lands the same way in every office, in every language.",
    uses: "Onboarding · Compliance · Change mgmt · Soft skills",
  },
];

export default function Outcomes() {
  return (
    <div className="bg-[#fafafa] flex flex-col gap-12 md:gap-16 items-center justify-center px-6 md:px-16 py-[72px] md:py-[104px] w-full">
      {/* Heading */}
      <div className="flex flex-col gap-3 items-center text-center w-full max-w-[860px]">
        <p className="font-heading font-semibold text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] text-[#201e26]">
          One tool, every team
        </p>
        <h2 className="font-heading font-semibold text-[28px] leading-[36px] md:text-[42px] md:leading-[60px] text-[#201e26]">
          It&rsquo;s not about making a video. It&rsquo;s about what the video does.
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-[1232px]">
        {outcomes.map(o => (
          <div key={o.title} className="bg-white flex flex-col gap-6 items-start px-6 py-8 rounded-2xl w-full">
            <span className="flex items-center justify-center px-4 py-2 rounded-full" style={{ backgroundColor: o.badgeBg }}>
              <span className="font-heading font-semibold text-[14px] leading-[21px] text-[#201e26] whitespace-nowrap">
                {o.badge}
              </span>
            </span>
            <div className="flex flex-col gap-[15px] w-full flex-1">
              <h3 className="font-heading font-semibold text-[24px] leading-[32px] text-[#201e26]">{o.title}</h3>
              <p className="font-body font-normal text-[18px] leading-[30px] text-[#201e26]">{o.body}</p>
            </div>
            <div className="pt-4 border-t border-[#e4e1d8] w-full">
              <p className="font-body font-normal text-[13px] leading-[20px] text-[#6c6a78]">{o.uses}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
