export default function SmallCta() {
  return (
    <div className="bg-[#201e26] flex items-center justify-between px-16 py-7 w-full">
      <p className="font-heading font-semibold text-[24px] leading-[36px] text-[#fafafa]">
        Your blog post is already half a video
      </p>
      <button className="bg-[#5645f5] flex items-center justify-center px-6 py-3 rounded-full shrink-0 hover:opacity-90 transition-opacity">
        <p className="font-heading font-bold text-[16px] leading-[24px] text-[#fafafa] whitespace-nowrap">
          Make my next video
        </p>
      </button>
    </div>
  );
}
