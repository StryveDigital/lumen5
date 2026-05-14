// LP3 — "The features your compliance team actually wants"
// Figma node: 71:1751 (Features). 2x2 grid of cards, each with a colored pill badge.

type Card = {
  badge: string;
  badgeBg: string;
  title: string;
  body: string;
};

const cards: Card[] = [
  {
    badge: "01 - Brand Control",
    badgeBg: "#46e378", // spring green
    title: "Locked brand kit",
    body: "Logo placement, fonts, colour palette, watermark, motion templates: all locked at the org level. Regional teams can’t override without admin approval.",
  },
  {
    badge: "02 - Workflow",
    badgeBg: "#3bd9eb", // dark turquoise
    title: "Approved workflows",
    body: "Multi-stage review with names approvers, audit trail, timestamped sign-off. Frankfurt can’t ship until London approves. Governance lives in the product, not in a Slack thread.",
  },
  {
    badge: "03 - Access",
    badgeBg: "#e5e250", // mustard yellow
    title: "Roles and permissions",
    body: "Granular access control: creator, reviewer, admin, viewer. SSO with your idP. Set it once, audit forever.",
  },
  {
    badge: "04 - Scale",
    badgeBg: "#f95580", // carmine pink
    title: "20+ languages, one click",
    body: "Localize voiceovers, captions, on-screen text. Same source video, twenty regional versions, every one of them on-brand.",
  },
];

export default function Features() {
  return (
    <div className="bg-white flex flex-col gap-16 items-center justify-center px-16 py-[104px] w-full">
      {/* Header */}
      <div className="flex flex-col gap-3 items-center text-center w-[985px]">
        <p className="font-heading font-semibold text-[20px] leading-[30px] text-[#201e26]">
          Built for governance
        </p>
        <h2 className="font-heading font-semibold text-[36px] leading-[60px] text-[#201e26]">
          The features your compliance team actually wants
        </h2>
        <p className="font-body font-normal text-[20px] leading-[36px] text-[#201e26]">
          Not just &ldquo;enterprise as a pricing tier.&rdquo; Real controls &mdash; built into the product, not bolted on.
        </p>
      </div>

      {/* 2x2 card grid */}
      <div className="grid grid-cols-2 gap-8">
        {cards.map(card => (
          <div key={card.title} className="bg-[#fafafa] flex flex-col h-[261px] items-start px-6 py-8 rounded-2xl w-[600px]">
            <div className="flex flex-col gap-6 items-start w-[552px] flex-1">
              <span
                className="flex items-center justify-center px-4 py-2 rounded-full"
                style={{ backgroundColor: card.badgeBg }}
              >
                <span className="font-heading font-semibold text-[14px] leading-[21px] text-[#201e26] whitespace-nowrap">
                  {card.badge}
                </span>
              </span>
              <div className="flex flex-col gap-[15px] w-full">
                <p className="font-heading font-semibold text-[26px] leading-none text-[#201e26]">
                  {card.title}
                </p>
                <p className="font-body font-normal text-[18px] leading-[30px] text-[#201e26]">
                  {card.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
