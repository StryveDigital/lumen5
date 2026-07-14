// Explainers — "From a doc to a done video, in three steps"
// Mirrors the real platform flow (script → style + ingredients → storyboard →
// publish) using abstracted product motion instead of raw screenshots, per the
// wireframe. Each visual is built in CSS so nothing here expires.

type Step = {
  badge: string;
  badgeColor: string;
  title: string;
  desc: string;
  caption: string;
  visual: React.ReactNode;
};

// Step 1 — a few lines of text flowing into colored scenes.
function VisualScript() {
  return (
    <div className="flex items-center justify-center gap-4 h-full">
      <div className="flex flex-col gap-[6px]">
        <span className="h-[4px] w-[46px] rounded-full bg-[#9a98a6]" />
        <span className="h-[4px] w-[34px] rounded-full bg-[#9a98a6]" />
        <span className="h-[4px] w-[42px] rounded-full bg-[#9a98a6]" />
        <span className="h-[4px] w-[28px] rounded-full bg-[#9a98a6]" />
      </div>
      <span className="text-[#5645f5] text-[20px]">&rarr;</span>
      <div className="flex gap-[5px]">
        <span className="w-[18px] h-[26px] rounded-[3px] bg-[#CECBF6]" />
        <span className="w-[18px] h-[26px] rounded-[3px] bg-[#9FE1CB]" />
        <span className="w-[18px] h-[26px] rounded-[3px] bg-[#F5C4B3]" />
      </div>
    </div>
  );
}

// Step 2 — the same "ingredient" holding consistent across scenes.
function VisualIngredients() {
  return (
    <div className="flex items-center justify-center gap-3 h-full">
      {[0, 1, 2].map(i => (
        <div key={i} className="flex flex-col items-center gap-[6px]">
          <span className="w-[38px] h-[24px] rounded-[4px] bg-[#EEEDFE] border border-[#d9d5f7]" />
          <span className="w-[16px] h-[16px] rounded-full bg-[#5645f5]" />
        </div>
      ))}
    </div>
  );
}

// Step 3 — a storyboard grid filling in.
function VisualStoryboard() {
  const cells = ['#CECBF6', '#9FE1CB', '#CECBF6', '#FAC775', '#F5C4B3', '#e4e1d8'];
  return (
    <div className="flex items-center justify-center h-full">
      <div className="grid grid-cols-3 gap-[5px] w-[104px]">
        {cells.map((c, i) => (
          <span key={i} className="aspect-video rounded-[3px]" style={{ background: c }} />
        ))}
      </div>
    </div>
  );
}

const steps: Step[] = [
  {
    badge: "Step 1", badgeColor: "bg-[#46e378]",
    title: "Paste a doc, or just describe it",
    desc: "A sentence or a whole blog, report, or white paper. Lumen5 writes the script — the part that does the heavy lifting — and builds a scene for every line.",
    caption: "Accepts: a description, pasted text, a URL, or a document",
    visual: <VisualScript />,
  },
  {
    badge: "Step 2", badgeColor: "bg-[#3bd9eb]",
    title: "Pick a style. Your brand stays locked",
    desc: "Choose from 15+ animation styles, then add ingredients — a character, a product, a logo — that stay consistent across every single scene.",
    caption: "Ingredients keep people, products & brand consistent",
    visual: <VisualIngredients />,
  },
  {
    badge: "Step 3", badgeColor: "bg-[#e5e250]",
    title: "Generate. Edit scene by scene. Publish today",
    desc: "Lumen5 builds the storyboard, you fine-tune any scene, then export in any aspect ratio and ship it the same afternoon.",
    caption: "Any aspect ratio • 30+ languages • ready today",
    visual: <VisualStoryboard />,
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-[#fafafa] flex flex-col gap-12 md:gap-16 items-center justify-center px-6 md:px-16 py-[72px] md:py-[104px] w-full">
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

      {/* Cards */}
      <div className="flex flex-col xl:flex-row gap-8 items-stretch justify-center w-full md:w-auto">
        {steps.map(({ badge, badgeColor, title, desc, caption, visual }) => (
          <div key={title} className="bg-white flex flex-col justify-between gap-[41px] items-start px-6 py-8 rounded-2xl w-full xl:w-[352px]">
            {/* Top: tag + heading + body */}
            <div className="flex flex-col gap-6 items-start w-full">
              <div className={`${badgeColor} flex items-center justify-center px-4 py-2 rounded-full shrink-0`}>
                <p className="font-heading font-semibold text-[14px] leading-[21px] text-[#201e26] whitespace-nowrap">{badge}</p>
              </div>
              <div className="flex flex-col gap-[15px] items-start w-full">
                <h3 className="font-heading font-semibold text-[26px] leading-normal text-[#201e26] w-full">{title}</h3>
                <p className="font-body font-normal text-[18px] leading-[30px] text-[#201e26] w-full">{desc}</p>
              </div>
            </div>
            {/* Bottom: abstracted product visual + caption pill */}
            <div className="flex flex-col gap-4 items-start w-full">
              <div className="aspect-[352/140] relative rounded-2xl w-full overflow-hidden bg-[#faf9f5]">
                <div className="absolute inset-0">{visual}</div>
              </div>
              <div className="bg-[#efecff] flex items-center px-3 py-[6px] rounded-full max-w-full">
                <p className="font-body font-normal text-[12px] leading-[21px] text-[#201e26]">{caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
