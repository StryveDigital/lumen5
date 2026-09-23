// Demo page — "Brand Governance" two-column image + checklist.
// Figma node: 424:2278 ("Two Column with Bullet Check Marks")
const imgGovernance = '/demo-brand-governance.png';

const CHECKLIST = [
  'Follows your Brand Guidelines',
  'Allows for Easy Edits',
  'Automate Logos, Colors & Watermarks',
  'Consistent Branding Across All Platforms',
  'Publish with Consistency',
];

export default function BrandGovernance() {
  return (
    <div id="brand-governance" className="flex items-center justify-center px-6 md:px-16 xl:px-[104px] pb-16 md:pb-[104px] w-full scroll-mt-6">
      <div className="flex flex-col xl:flex-row items-center gap-10 md:gap-16 w-full max-w-[1232px]">
        <div className="bg-[#201e26] rounded-2xl shrink-0 w-full xl:w-[568px] h-[320px] md:h-[575px] overflow-hidden">
          <img alt="" src={imgGovernance} className="block size-full object-contain" />
        </div>

        <div className="flex flex-col gap-8 md:gap-[47px] items-start w-full">
          <div className="flex flex-col gap-3 items-start w-full">
            <h2 className="font-heading font-semibold text-[28px] leading-[36px] md:text-[36px] md:leading-[60px] text-[#201e26]">
              Brand Governance
            </h2>
            <p className="font-body font-normal text-[18px] leading-[27px] md:text-[24px] md:leading-9 text-[#333]">
              Control your brand, your voice and your messaging - all with the power of
              personalized brand toolkit made just for you
            </p>
          </div>

          <div className="flex flex-col gap-4 items-start w-full">
            {CHECKLIST.map(text => (
              <div key={text} className="flex gap-6 items-center">
                <img alt="" src="/check-icon.svg" width={24} height={24} className="block shrink-0" />
                <p className="font-body font-normal text-[18px] leading-[30px] text-[#201e26]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
