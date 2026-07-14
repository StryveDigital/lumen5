// Explainers — "cash the claim". The hero says anyone can make these; this
// block proves it with real screengrabs from actual Lumen5 explainers, pulled
// directly from the beta examples shown in the product webinar. NYU Langone
// Health is named explicitly in the webinar as a real beta customer; the
// other two are shown as topic demonstrations, not customer claims.

const tiles = [
  {
    src: '/explainers/nyu-langone-brain.jpg',
    topic: 'The science of a conversation',
    tag: 'NYU Langone Health · Beta customer',
  },
  {
    src: '/explainers/claymo-airbnb-resolved.jpg',
    topic: 'Co-hosting, explained',
    tag: 'Topic demo · Claymation',
  },
  {
    src: '/explainers/cgi-health-avocado.jpg',
    topic: 'How your body actually uses fruit',
    tag: 'Topic demo · Lucid 3D',
  },
];

function PlayGlyph() {
  return (
    <div className="flex items-center justify-center size-[54px] rounded-full bg-white/90 shadow-md">
      <svg width="18" height="21" viewBox="0 0 18 21" fill="none" aria-hidden>
        <path d="M17 9.13a1.6 1.6 0 0 1 0 2.74l-14.4 8.3A1.6 1.6 0 0 1 0 18.8V2.2A1.6 1.6 0 0 1 2.6.8L17 9.13Z" fill="#201e26" />
      </svg>
    </div>
  );
}

export default function ProofGrid() {
  return (
    <div className="bg-[#fafafa] flex flex-col gap-12 items-center px-6 md:px-16 py-[72px] md:py-[104px] w-full">
      <div className="flex flex-col gap-3 items-center text-center w-full max-w-[820px]">
        <h2 className="font-heading font-semibold text-[28px] leading-[36px] md:text-[42px] md:leading-[54px] text-[#201e26]">
          Don’t take our word for it. Take ours.
        </h2>
        <p className="font-body font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-[#201e26]/70">
          The film up top was made in Lumen5. So was every one of these, each from a paragraph of
          text to a finished, on-brand explainer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1180px]">
        {tiles.map(({ src, topic, tag }) => (
          <figure key={topic} className="group flex flex-col">
            <div className="relative aspect-video rounded-2xl overflow-hidden ring-1 ring-black/5 bg-black">
              <img
                src={src}
                alt={topic}
                className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayGlyph />
              </div>
            </div>
            <figcaption className="mt-4">
              <p className="font-heading font-semibold text-[18px] leading-[26px] text-[#201e26]">{topic}</p>
              <p className="font-body font-normal text-[13px] leading-[20px] text-[#201e26]/55 mt-1 uppercase tracking-[0.08em]">
                {tag}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
