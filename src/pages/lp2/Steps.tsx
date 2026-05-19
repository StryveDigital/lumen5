// LP2 — "One webinar, ten weeks of content"
// Figma node: 57:1266 (Steps module). New vs LP1: each card has a small
// purple-tinted caption pill below the illustration.

// Step illustrations come from Figma MCP and expire in ~7 days. Re-pull
// design context on node 57:1266 to refresh.
const imgStep1 = "/step-upload.png";  // upload arrow + cloud
const imgStep2 = "/step-ai.png";       // AI scissors / clips
const imgStep3 = "/step-publish.png";  // calendar / send

const steps = [
  {
    badge: "Step 1", badgeColor: "bg-[#46e378]",
    title: "Upload the recording",
    desc: "Webinar, podcast, all-hands, panel. MP4, Zoom, Vimeo, Riverside. Lumen5 transcribes and analyzes the full hour.",
    caption: "Accepts: MP4, Zoom, Vimeo, Riverside, YouTube",
    img: imgStep1,
  },
  {
    badge: "Step 2", badgeColor: "bg-[#3bd9eb]",
    title: "AI finds the clips that deserve to be clips",
    desc: "Lumen5 surfaces the strong quotes, the data points, the punchlines, and previews them in your branding.",
    caption: "Average: 8–14 clips per 60-minute recording",
    img: imgStep2,
  },
  {
    badge: "Step 3", badgeColor: "bg-[#e5e250]",
    title: "Schedule ten weeks of content in twenty minutes",
    desc: "Download in any aspect ratio, translate to another language, and share to LinkedIn.",
    caption: "Direct schedule: LinkedIn, X, YouTube Shorts",
    img: imgStep3,
  },
];

export default function Steps() {
  return (
    <div className="bg-[#fafafa] flex flex-col gap-12 md:gap-16 items-center justify-center px-6 md:px-16 py-[72px] md:py-[104px] w-full">
      {/* Heading */}
      <div className="flex flex-col gap-3 items-center text-center w-full max-w-[800px]">
        <p className="font-heading font-semibold text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] text-[#201e26]">
          For demand gen teams shipping more from less
        </p>
        <h2 className="font-heading font-semibold text-[28px] leading-[36px] md:text-[42px] md:leading-[60px] text-[#201e26]">
          One webinar, ten weeks of content
        </h2>
        <p className="font-body font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-[#201e26]">
          Built for the demand gen team that runs 20 webinars a year and ships content from maybe two of them.
        </p>
      </div>
      {/* Cards */}
      <div className="flex flex-col xl:flex-row gap-8 items-stretch justify-center w-full md:w-auto">
        {steps.map(({ badge, badgeColor, title, desc, caption, img }) => (
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
            {/* Bottom: illustration + caption pill */}
            <div className="flex flex-col gap-4 items-start w-full">
              <div className="aspect-[352/198] relative rounded-2xl w-full overflow-hidden bg-[#fafafa]">
                <img alt={title} className="absolute inset-0 size-full object-contain" src={img} />
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
