// Demo page — closing two-card CTA. Figma node: 424:2281 ("CTA Module with Cards")
import { CTA } from '../../shared/cta-urls';

const imgShapePink = '/demo-shape-pink-small.svg';
const imgShapeMustard = '/demo-shape-mustard.svg';

export default function CtaModuleWithCards() {
  return (
    <div className="bg-[#201e26] relative w-full overflow-hidden py-16 md:py-[104px] px-6 md:px-16">
      <img
        alt=""
        src={imgShapePink}
        aria-hidden
        className="hidden xl:block absolute pointer-events-none"
        style={{ left: -60, top: 30, width: 180, transform: 'rotate(94.9deg)' }}
      />
      <img
        alt=""
        src={imgShapeMustard}
        aria-hidden
        className="hidden xl:block absolute pointer-events-none"
        style={{ right: -100, top: 90, width: 260, transform: 'rotate(124.41deg)' }}
      />

      <div className="relative flex flex-col gap-9 items-center z-10">
        <div className="flex flex-col xl:flex-row gap-7 items-stretch xl:items-center w-full max-w-[1232px]">
          <div className="bg-[#fafafa] relative flex flex-col justify-between h-auto min-h-[251px] w-full rounded-2xl p-8">
            <div className="flex flex-col gap-[15px] items-start w-full">
              <p className="font-heading font-semibold text-[26px] leading-none text-[#201e26]">
                Ready to hop in?
              </p>
              <p className="font-body font-normal text-[20px] leading-9 text-[#201e26] w-full">
                book a demo and see just what Lumen5 can do for you.
              </p>
            </div>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-[#5645f5] flex items-center justify-center px-6 py-4 rounded-full shrink-0 hover:bg-[#3c30ac] transition-colors cursor-pointer mt-6 self-start"
            >
              <span className="font-heading font-semibold text-[16px] leading-[30px] text-[#fafafa] whitespace-nowrap">
                Book a demo
              </span>
            </button>
          </div>

          <div className="bg-[#fafafa] relative flex flex-col justify-between h-auto min-h-[251px] w-full rounded-2xl p-8">
            <div className="flex flex-col gap-[15px] items-start w-full">
              <p className="font-heading font-semibold text-[26px] leading-none text-[#201e26]">
                Want to try it yourself?
              </p>
              <p className="font-body font-normal text-[20px] leading-9 text-[#201e26] w-full">
                Get a trial of Lumen5's basic features with a free sign up.
              </p>
            </div>
            <a
              href={CTA.signup}
              className="bg-[#5645f5] flex items-center justify-center px-6 py-4 rounded-full shrink-0 hover:bg-[#3c30ac] transition-colors mt-6 self-start"
            >
              <span className="font-heading font-semibold text-[16px] leading-[30px] text-[#fafafa] whitespace-nowrap">
                Sign up
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
