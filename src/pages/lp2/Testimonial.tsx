// LP2 — CMS testimonial (quote box, no stats)
// Figma node: 89:1897 (Testimonial 2)

import QuoteGlyph from './QuoteGlyph';

// The Figma asset for the CMS card is a vector placeholder that exports empty,
// so we render the actual CMS office photo from /public/ (cropped from a Figma
// node screenshot, mirrors the bw-hotel.png approach LP1 uses).
const imgCmsCard = "/cms-card.png";

export default function Testimonial() {
  return (
    <div className="bg-white flex flex-col items-center py-[72px] md:py-[104px] w-full px-6 xl:px-0">
      <div className="bg-[#fafafa] flex flex-col xl:flex-row gap-8 md:gap-12 items-start p-8 md:p-12 rounded-2xl w-full max-w-[1120px]">
        {/* Quote + CMS branded square (the CMS-logo square sits inside the quote slot) */}
        <div className="relative shrink-0">
          <img alt="CMS law tax future" src={imgCmsCard} width={197} height={198} className="block ml-[43px] mt-[27px]" />
          <div className="absolute top-0 left-0">
            <QuoteGlyph width={89} height={69} />
          </div>
        </div>
        {/* Quote + creds */}
        <div className="flex flex-col gap-6 items-start flex-1 min-w-0 w-full md:max-w-[709px]">
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
