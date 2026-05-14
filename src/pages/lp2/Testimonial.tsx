// LP2 — CMS testimonial (quote box, no stats)
// Figma node: 89:1897 (Testimonial 2)

// The Figma asset for the CMS card is a vector placeholder that exports empty,
// so we render the actual CMS office photo from /public/ (cropped from a Figma
// node screenshot, mirrors the bw-hotel.png approach LP1 uses).
const imgCmsCard = "/cms-card.png";

// Stylized double-quote glyph: two curl shapes side-by-side, in Lumen5 purple.
// Previously this rendered as two halves of a single Figma asset URL, but both
// URLs returned the same single-curl SVG, producing a 12% horizontal gap. Now
// inlined so it's deploy-stable (no Figma URL expiry) and tightly grouped.
const CURL_PATH = "M40.4767 0L46.4645 9.742C46.4645 9.742 20.6157 21.8944 18.3035 47.6977C18.3035 47.6977 30.9582 41.6891 42.2496 49.7473C42.2496 49.7473 50.9041 55.7559 52.4972 65.0369C54.0903 74.3178 49.0564 85.468 41.1659 89.3367C41.1659 89.3367 23.7519 99.9858 9.73887 83.8744C-4.28418 67.768 -9.86244 26.1641 40.4767 0Z";

function QuoteGlyph({ width, height }: { width: number; height: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="-10 0 122 100"
      fill="#5645F5"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d={CURL_PATH} />
      <path d={CURL_PATH} transform="translate(55 0)" />
    </svg>
  );
}

export default function Testimonial() {
  return (
    <div className="bg-white flex flex-col items-center py-[104px] w-full">
      <div className="bg-[#fafafa] flex gap-12 items-start p-12 rounded-2xl w-[1120px]">
        {/* Quote + CMS branded square (the CMS-logo square sits inside the quote slot) */}
        <div className="relative shrink-0">
          <img alt="CMS law tax future" src={imgCmsCard} width={197} height={198} className="block ml-[43px] mt-[27px]" />
          <div className="absolute top-0 left-0">
            <QuoteGlyph width={89} height={69} />
          </div>
        </div>
        {/* Quote + creds */}
        <div className="flex flex-col gap-6 items-start flex-1 min-w-0 w-[709px]">
          <p className="font-body font-normal text-[20px] leading-[36px] text-[#201e26]">
            Producing the video from start to &lsquo;go live&rsquo; used to take us about a week for a short one. Longer videos were even more time-consuming. We were no longer happy with this timeframe. Now creating 29 videos per month vs. fewer than 10 per year before. LinkedIn followers up 47%. Leads up 14%.
          </p>
          <div className="h-[52px]">
            <p className="font-heading font-semibold text-[20px] leading-[30px] text-[#201e26]">Amsal Alihodzic</p>
            <p className="font-body font-normal text-[16px] leading-[24px] text-[#201e26]">Senior Online Marketing Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}
