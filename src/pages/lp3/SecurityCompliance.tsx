// LP3 — two-column "Security and compliance" section
// Figma node: 185:2235

import { CTA } from '../../shared/cta-urls';

const imgPrivacy = "/security-privacy.png";
const imgArrow   = "/arrow-right.svg";

export default function SecurityCompliance() {
  return (
    <div className="bg-[#fafafa] flex flex-col xl:flex-row items-center justify-between gap-10 md:gap-0 px-6 md:px-[160px] py-[72px] md:py-[104px] w-full">
      {/* Left: illustration */}
      <img alt="" src={imgPrivacy} className="block shrink-0 w-full max-w-[598px] xl:w-[598px] xl:h-[424px] object-cover" />

      {/* Right: heading + description + buttons */}
      <div className="flex-1 flex flex-col gap-6 items-start md:ml-12 min-w-px w-full">
        <h2 className="font-heading font-semibold text-[28px] leading-[36px] md:text-[36px] md:leading-[60px] text-[#201e26]">
          Security and compliance
        </h2>
        <div className="font-body font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-[#201e26]">
          <p>
            Security isn&rsquo;t an afterthought at Lumen5, it&rsquo;s foundational. We meet the highest standards in security, compliance, and AI governance, so your team can create with confidence.
          </p>
          <ul className="list-disc ms-[30px] mt-2">
            <li>SSO and role-based access controls</li>
            <li>Data encryption in transit and at rest</li>
            <li>7+ years partnering with enterprise legal and privacy teams</li>
            <li>AI governance controls to meet your compliance requirements</li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-3 md:gap-5 items-center mt-2">
          <a href={CTA.trust} className="bg-[#5645f5] flex items-center justify-center px-6 py-4 rounded-full hover:opacity-90 transition-opacity">
            <span className="font-heading font-semibold text-[16px] leading-[30px] text-[#fafafa] whitespace-nowrap">
              Visit our trust center
            </span>
          </a>
          <a href={CTA.demo} className="flex gap-[10px] items-center justify-center px-2 py-4 rounded-full hover:opacity-80 transition-opacity">
            <span className="font-heading font-semibold text-[16px] leading-[30px] text-[#5645f5] whitespace-nowrap">
              Request Demo
            </span>
            <img alt="" src={imgArrow} width={11.5} height={8} className="block" />
          </a>
        </div>
      </div>
    </div>
  );
}
