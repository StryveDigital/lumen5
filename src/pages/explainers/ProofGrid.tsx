// Explainers — "Don't take our word for it. Take ours."
// Cashes the hero claim: the launch video, and every tile here, was made in
// Lumen5. Examples are real beta-customer explainers from the launch webinar.
// Tiles render a styled play slot; drop the real still/embed per tile later.

type Example = {
  tag: string;
  title: string;
  who: string;
  gradient: string;
};

const examples: Example[] = [
  {
    tag: "Partnership PR",
    title: "Ontario's energy future, explained",
    who: "Siemens",
    gradient: "linear-gradient(135deg, #2f3ac9 0%, #5645f5 55%, #3bd9eb 100%)",
  },
  {
    tag: "From a report",
    title: "What social listening actually is",
    who: "Hootsuite",
    gradient: "linear-gradient(135deg, #b3163b 0%, #f95580 60%, #fac775 100%)",
  },
  {
    tag: "Research made watchable",
    title: "How the brain holds a conversation",
    who: "NYU Langone Health",
    gradient: "linear-gradient(135deg, #0f7a5a 0%, #2fb083 55%, #9fe1cb 100%)",
  },
];

function PlayBadge() {
  return (
    <span className="flex items-center justify-center w-[54px] h-[54px] rounded-full bg-white/95 shadow-md transition-transform group-hover:scale-105">
      <svg width="18" height="21" viewBox="0 0 18 21" fill="none" className="ml-[3px]">
        <path d="M0 1.9C0 0.7 1.3 0 2.3 0.6l14.5 8.6c1 0.6 1 2 0 2.5L2.3 20.4C1.3 21 0 20.3 0 19.1V1.9Z" fill="#5645f5" />
      </svg>
    </span>
  );
}

export default function ProofGrid() {
  return (
    <div className="bg-white flex flex-col gap-12 md:gap-14 items-center justify-center px-6 md:px-16 py-[72px] md:py-[104px] w-full">
      {/* Heading */}
      <div className="flex flex-col gap-3 items-center text-center w-full max-w-[800px]">
        <p className="font-heading font-semibold text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] text-[#5645f5]">
          Proof, not promises
        </p>
        <h2 className="font-heading font-semibold text-[28px] leading-[36px] md:text-[42px] md:leading-[60px] text-[#201e26]">
          Don&rsquo;t take our word for it. Take ours.
        </h2>
        <p className="font-body font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-[#201e26]">
          The video up top was made in Lumen5. So was every one of these &mdash; by real teams, from a blog,
          a report, or a research paper.
        </p>
      </div>

      {/* Example videos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-[1232px]">
        {examples.map(ex => (
          <div key={ex.title} className="group flex flex-col gap-4">
            <div
              className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-sm cursor-pointer"
              style={{ background: ex.gradient }}
            >
              {/* scene strips */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-45">
                <span className="h-[6px] flex-1 rounded-full bg-white/80" />
                <span className="h-[6px] flex-1 rounded-full bg-white/60" />
                <span className="h-[6px] flex-1 rounded-full bg-white/40" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayBadge />
              </div>
              <span className="absolute top-4 left-4 font-heading font-semibold text-[12px] leading-[18px] tracking-[0.06em] uppercase text-white/90 bg-black/25 px-3 py-1 rounded-full backdrop-blur-sm">
                {ex.tag}
              </span>
            </div>
            <div className="flex flex-col gap-1 px-1">
              <p className="font-heading font-semibold text-[18px] leading-[26px] text-[#201e26]">
                {ex.title}
              </p>
              <p className="font-body font-normal text-[15px] leading-[22px] text-[#6c6a78]">
                {ex.who}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
