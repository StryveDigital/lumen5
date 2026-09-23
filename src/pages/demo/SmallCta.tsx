// Demo page — small CTA strip. Figma node: 508:2020 ("Small CTA")
// "Book a demo" is annotated in the design as scrolling to the top of the page (where the
// request form lives).
export default function SmallCta() {
  return (
    <div className="bg-[#201e26] flex items-center justify-center px-6 md:px-16 py-10 md:py-16 w-full">
      <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 md:gap-12 w-full max-w-[1232px]">
        <p className="font-heading font-semibold text-[24px] leading-[36px] md:text-[36px] md:leading-[60px] text-[#fafafa] w-full max-w-[829px]">
          Ready? Let's book your demo.
        </p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-[#5645f5] flex items-center justify-center px-6 py-4 rounded-full shrink-0 hover:bg-[#3c30ac] transition-colors cursor-pointer"
        >
          <span className="font-heading font-semibold text-[16px] leading-[30px] text-[#fafafa] whitespace-nowrap">
            Book a demo
          </span>
        </button>
      </div>
    </div>
  );
}
