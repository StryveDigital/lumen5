export default function Footer() {
  return (
    <div className="bg-[#201e26] border-t border-[#fafafa] border-solid flex h-[80px] items-center justify-between px-6 md:px-[120px] py-6 w-full">
      <img alt="Lumen5" src="/lumen5-logo.svg" width={120} height={32} className="block" />
      <p className="font-body font-normal text-[16px] leading-normal text-[#fafafa] whitespace-nowrap">
        © 2026 Lumen5
      </p>
    </div>
  );
}
