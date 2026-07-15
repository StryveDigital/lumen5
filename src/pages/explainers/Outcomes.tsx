// Explainers — "what it does for you". The webinar's department-by-department
// ROI, reframed as outcomes rather than features. Content drawn directly from
// the beta-customer use-case survey Pius presented.

const columns = [
  {
    accent: 'bg-[#46e378]',
    team: 'Sales & Marketing',
    uses: ['Top-of-funnel explainers', 'Competitive differentiators', 'Email & outbound', 'Trade shows & events'],
    outcome: 'Shorten the sales cycle and cut the “what do you do again?” calls.',
  },
  {
    accent: 'bg-[#3bd9eb]',
    team: 'Customer Success',
    uses: ['Onboarding walkthroughs', 'Feature-adoption videos', 'How-to & FAQ', '“What’s new” releases'],
    outcome: 'Lower support tickets and reduce churn with videos people actually watch.',
  },
  {
    accent: 'bg-[#e5e250]',
    team: 'People, L&D & Comms',
    uses: ['New-hire onboarding', 'Compliance & training', 'Change management', 'Soft-skill programs'],
    outcome: 'Ramp people faster, with consistent messaging everywhere at once.',
  },
];

export default function Outcomes() {
  return (
    <div className="bg-[#fafafa] w-full px-6 md:px-16 py-[72px] md:py-[104px]">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-col gap-3 items-center text-center max-w-[820px] mx-auto mb-14">
          <p className="font-heading font-semibold text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] text-[#5645f5]">
            The best teams put explainers to work
          </p>
          <h2 className="font-heading font-semibold text-[28px] leading-[36px] md:text-[42px] md:leading-[54px] text-[#201e26]">
            Don’t just make a video. Give it a job.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {columns.map(({ accent, team, uses, outcome }) => (
            <div key={team} className="bg-white rounded-2xl p-8 flex flex-col gap-6 ring-1 ring-black/[0.04]">
              <div className="flex items-center gap-3">
                <span className={`${accent} size-3 rounded-full`} />
                <h3 className="font-heading font-semibold text-[22px] leading-[28px] text-[#201e26]">{team}</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {uses.map((u) => (
                  <li key={u} className="flex items-center gap-2.5 font-body text-[16px] leading-[24px] text-[#201e26]/75">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0">
                      <path d="M3 8.5l3 3 7-7.5" stroke="#5645f5" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {u}
                  </li>
                ))}
              </ul>
              <p className="font-body text-[15px] leading-[24px] text-[#201e26]/60 border-t border-black/[0.06] pt-5 mt-auto">
                {outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
