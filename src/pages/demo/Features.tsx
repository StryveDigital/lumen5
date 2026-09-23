// Demo page — "The features your compliance team actually wants" card grid.
// Figma node: 424:2279 ("Features"). Distinct content/layout from lp3/Features.tsx
// (no badges here, 2-then-3 card grid instead of a 2x2 grid).
type Card = { title: string; body: string };

const ROW_ONE: Card[] = [
  {
    title: 'Script writing',
    body: 'Turn a topic, outline, or existing article into a full video script in seconds — ready to edit, or hand straight to production.',
  },
  {
    title: 'Custom branding',
    body: "Lock your fonts, colors, and logo into every template so nothing ships off-brand — no matter who's making it.",
  },
];

const ROW_TWO: Card[] = [
  {
    title: 'Automatic translation',
    body: 'Publish the same video in 20+ languages without re-recording, re-editing, or re-briefing anyone.',
  },
  {
    title: 'Video collaboration',
    body: 'Comment, review, and approve videos in one place — no more feedback scattered across email threads and Slack DMs.',
  },
  {
    title: 'Video blueprints',
    body: 'Save your best-performing video structure as a blueprint, so your team can repeat what works instead of starting from a blank page every time.',
  },
];

function FeatureCard({ card }: { card: Card }) {
  return (
    <div className="bg-[#fafafa] flex flex-col items-start px-6 py-8 rounded-2xl w-full">
      <div className="flex flex-col gap-[15px] items-start w-full">
        <p className="font-heading font-semibold text-[26px] leading-none text-[#201e26]">
          {card.title}
        </p>
        <p className="font-body font-normal text-[18px] leading-[30px] text-[#333]">
          {card.body}
        </p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <div id="features" className="bg-white flex flex-col gap-12 md:gap-16 items-center justify-center px-6 md:px-16 xl:px-[104px] py-16 md:py-[104px] w-full scroll-mt-6">
      <div className="flex flex-col gap-3 items-center text-center w-full max-w-[985px]">
        <h2 className="font-heading font-semibold text-[28px] leading-[36px] md:text-[36px] md:leading-[60px] text-[#201e26]">
          The features your compliance team actually wants
        </h2>
        <p className="font-body font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-[#201e26]">
          Not just &ldquo;enterprise&rdquo; as a pricing tier. Real controls — built into the
          product, not bolted on.
        </p>
      </div>

      <div className="flex flex-col gap-8 items-center w-full max-w-[1232px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          {ROW_ONE.map(card => <FeatureCard key={card.title} card={card} />)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {ROW_TWO.map(card => <FeatureCard key={card.title} card={card} />)}
        </div>
      </div>
    </div>
  );
}
