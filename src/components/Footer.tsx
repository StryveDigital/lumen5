export default function Footer() {
  return (
    <div className="bg-[#201e26] border-t border-[#fafafa] border-solid flex h-[80px] items-center justify-between px-[120px] py-6 w-full">
      <div className="flex items-center gap-2">
        <svg width="20" height="26" viewBox="0 0 28 36" fill="none">
          <path d="M16 0L0 20h12L9 36 28 14H16L16 0z" fill="#5645f5"/>
        </svg>
        <span className="font-heading font-bold text-[18px] text-[#fafafa] tracking-tight">lumen5</span>
      </div>
      <p className="font-body font-normal text-[16px] leading-normal text-[#fafafa] whitespace-nowrap">
        © 2026 Lumen5
      </p>
    </div>
  );
}
