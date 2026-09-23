// Demo page — "Confused about something specific?" resources grid.
// Figma node: 424:2280 ("Resources").
// NOTE: the 4 "Read more" links have no destination in the design or in shared/cta-urls.ts
// (they point at specific Help Centre articles this repo doesn't have URLs for) — left as
// `#` placeholders rather than guessed. Swap in the real article links when known.
type Card = { image: string; title: string; body: string };

const CARDS: Card[] = [
  {
    image: '/demo-resource-1.png',
    title: 'Best practice guides',
    body: 'Our advice for creating stunning videos.',
  },
  {
    image: '/demo-resource-2.png',
    title: 'Publishing & downloading',
    body: 'Read more about rendering and downloading a complete video.',
  },
  {
    image: '/demo-resource-3.png',
    title: 'Video & scene controls',
    body: 'Changing the look and feel of your video and scenes.',
  },
  {
    image: '/demo-resource-4.png',
    title: 'Copyright, credit & attribution',
    body: 'All about licensing, copyright, and who owns videos and media.',
  },
];

export default function Resources() {
  return (
    <div id="resources" className="bg-[#fafafa] flex flex-col items-center px-6 md:px-16 xl:px-[104px] py-16 md:py-[104px] w-full scroll-mt-6">
      <div className="flex flex-col gap-10 md:gap-16 items-start w-full max-w-[1232px]">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center justify-between w-full">
          <div className="flex flex-col gap-3 items-start text-left w-full">
            <h2 className="font-heading font-semibold text-[28px] leading-[36px] md:text-[36px] md:leading-[60px] text-[#201e26]">
              Confused about something specific?
            </h2>
            <p className="font-body font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-[#201e26]">
              Look through our resources in the Help Centre.
            </p>
          </div>
          <a href="https://help.lumen5.com/en/" className="bg-[#5645f5] flex items-center justify-center px-6 py-4 rounded-full shrink-0 hover:bg-[#3c30ac] transition-colors">
            <span className="font-heading font-semibold text-[16px] leading-[30px] text-[#fafafa] whitespace-nowrap">
              Search now
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-10 w-full">
          {CARDS.map(card => (
            <div key={card.title} className="bg-white flex flex-col gap-6 items-start px-6 py-8 rounded-2xl w-full">
              <div className="aspect-[352/198] relative rounded-2xl shrink-0 w-full bg-[#fafafa] overflow-hidden">
                <img alt="" src={card.image} className="absolute inset-0 max-w-none object-contain rounded-2xl size-full" />
              </div>
              <div className="flex flex-col gap-[15px] items-start w-full">
                <p className="font-heading font-semibold text-[26px] leading-none text-[#201e26]">
                  {card.title}
                </p>
                <p className="font-body font-normal text-[18px] leading-[30px] text-[#201e26]">
                  {card.body}
                </p>
                <a href="#" className="flex gap-[10px] items-center justify-center rounded-full">
                  <span className="font-heading font-semibold text-[16px] leading-[30px] text-[#5645f5] whitespace-nowrap">
                    Read more
                  </span>
                  <img alt="" src="/demo-resource-arrow.svg" width={11.5} height={8} className="block" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
