// Demo page — hero: headline + anchor nav + request form.
// Figma node: 508:2017 ("Form Banner")
import DemoForm from './DemoForm';

const imgShape = '/demo-hero-shape.svg';

// Anchor targets not specified in the design (labeled "Anchor Link button" with no href) —
// mapped to this page's own sections in the same order the buttons appear.
const ANCHORS = [
  { label: 'See every feature', href: '#power' },
  { label: 'Perfect for your brand', href: '#brand-governance' },
  { label: 'Every tool, one platform', href: '#features' },
  { label: 'Get support', href: '#resources' },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Banner() {
  return (
    <div className="bg-[#201e26] relative w-full overflow-hidden">
      <img
        alt=""
        src={imgShape}
        aria-hidden
        className="hidden xl:block absolute pointer-events-none"
        style={{ right: -260, top: -180, width: 480, transform: 'rotate(-60.54deg)' }}
      />

      <div className="relative px-6 md:px-16 xl:px-[104px] py-16 md:py-24">
      <div className="mx-auto max-w-[1232px] flex flex-col xl:flex-row items-start justify-between gap-14 xl:gap-10">
        {/* Copy + anchor nav */}
        <div className="flex flex-col gap-12 items-start w-full max-w-[648px]">
          <div className="flex flex-col gap-8 items-start w-full">
            <h1 className="font-heading font-semibold text-[36px] leading-[44px] md:text-[52px] md:leading-[66px] text-[#fafafa] w-full">
              Chat with the Lumen5 team
            </h1>
            <p className="font-body font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-white w-full">
              Blog posts, webinars, decks, PDF's — you're already creating so much content that
              you can turn into video. Let our creative team show you how Lumen5 can find the
              video hiding inside what you've already made, and how to keep every video on-brand
              and on budget.
            </p>
          </div>

          <div className="flex flex-col gap-6 items-start w-full max-w-[504px]">
            <div className="grid grid-cols-2 gap-6 w-full">
              {ANCHORS.slice(0, 2).map(a => (
                <button
                  key={a.label}
                  type="button"
                  onClick={() => scrollToId(a.href.slice(1))}
                  className="bg-white/[0.13] flex items-center justify-center p-[15px] rounded-2xl w-full cursor-pointer hover:bg-[#3c30ac] transition-colors"
                >
                  <span className="font-heading font-semibold text-[18px] leading-9 text-white whitespace-nowrap">
                    {a.label}
                  </span>
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-6 w-full">
              {ANCHORS.slice(2, 4).map(a => (
                <button
                  key={a.label}
                  type="button"
                  onClick={() => scrollToId(a.href.slice(1))}
                  className="bg-white/[0.13] flex items-center justify-center p-[15px] rounded-2xl w-full cursor-pointer hover:bg-[#3c30ac] transition-colors"
                >
                  <span className="font-heading font-semibold text-[18px] leading-9 text-white whitespace-nowrap">
                    {a.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="w-full xl:w-[518px] xl:shrink-0 flex justify-center xl:justify-end">
          <DemoForm />
        </div>
      </div>
      </div>
    </div>
  );
}
