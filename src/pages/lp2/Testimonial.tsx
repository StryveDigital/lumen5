// LP2 — CMS testimonial (quote box, no stats)
// Figma node: 89:1897 (Testimonial 2)

// CMS office photo with the purple double-quote glyph and notched bottom-right
// frame all composited into a single PNG (designer-provided, replaces the
// previous photo + separate QuoteGlyph overlay that was cutting off).
const imgCmsQuote = "/cms-quote.png";

export default function Testimonial() {
  return (
    <div className="bg-white flex flex-col items-center py-[72px] md:py-[104px] w-full px-6 xl:px-0">
      <div className="bg-[#fafafa] flex flex-col xl:flex-row gap-8 md:gap-12 items-start p-8 md:p-12 rounded-2xl w-full max-w-[1120px]">
        {/* CMS photo + quote glyph composited into one image */}
        <img
          alt="CMS law tax future"
          src={imgCmsQuote}
          width={240}
          height={225}
          className="block shrink-0"
        />
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
