const imgStep1 = "/step-1.png";
const imgStep2 = "/step-2.png";
const imgStep3 = "/step-3.png";

const steps = [
  {
    badge: "Step 1", badgeColor: "bg-[#46e378]",
    title: "Paste the link",
    desc: "Drop in a blog post URL, a webinar replay, or a podcast episode. Lumen5 reads it, finds the moments that matter, and writes the script.",
    img: imgStep1,
  },
  {
    badge: "Step 2", badgeColor: "bg-[#3bd9eb]",
    title: "Your brand stays locked",
    desc: "Logo, fonts, colors, motion templates: all applied automatically. Every video looks like your team made it.",
    img: imgStep2,
  },
  {
    badge: "Step 3", badgeColor: "bg-[#e5e250]",
    title: "Publish-ready, today",
    desc: "Download in any aspect ratio, translate to another language, or share to LinkedIn.",
    img: imgStep3,
  },
];

export default function Steps() {
  return (
    <div className="bg-[#fafafa] flex flex-col gap-16 items-center justify-center px-16 py-[104px] w-full">
      {/* Heading */}
      <div className="flex flex-col gap-3 items-center text-center w-[736px]">
        <p className="font-heading font-semibold text-[20px] leading-[30px] text-[#201e26]">
          For marketers who own a weekly cadence
        </p>
        <h2 className="font-heading font-semibold text-[36px] leading-[60px] text-[#201e26]">
          Three steps, one afternoon
        </h2>
        <p className="font-body font-normal text-[20px] leading-[36px] text-[#201e26]">
          No scripts to write. No editor to learn. No video team required.
        </p>
      </div>
      {/* Cards */}
      <div className="flex gap-8 items-stretch justify-center">
        {steps.map(({ badge, badgeColor, title, desc, img }) => (
          <div key={title} className="bg-white flex flex-col justify-between gap-[41px] items-start px-6 py-8 rounded-2xl w-[352px]">
            <div className="flex flex-col gap-6 items-start w-full">
              <div className={`${badgeColor} flex items-center justify-center px-4 py-2 rounded-full shrink-0`}>
                <p className="font-heading font-semibold text-[14px] leading-[21px] text-[#201e26] whitespace-nowrap">{badge}</p>
              </div>
              <div className="flex flex-col gap-[15px] items-start w-full">
                <h3 className="font-heading font-semibold text-[26px] leading-normal text-[#201e26] w-full">{title}</h3>
                <p className="font-body font-normal text-[18px] leading-[30px] text-[#201e26] w-full">{desc}</p>
              </div>
            </div>
            <div className="aspect-[352/198] relative rounded-2xl w-full overflow-hidden">
              <img alt={title} className="absolute inset-0 size-full object-cover" src={img} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
