import Footer from '../../shared/Footer'

export default function Lp3() {
  return (
    <div className="w-full min-h-screen bg-[#fafafa] flex flex-col">
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="max-w-[640px] text-center">
          <p className="font-heading font-semibold text-[14px] leading-[21px] text-[#5645f5] mb-3 tracking-wider uppercase">
            Landing Page 3
          </p>
          <h1 className="font-heading font-semibold text-[42px] leading-[60px] text-[#201e26]">
            Waiting on Figma
          </h1>
          <p className="font-body font-normal text-[18px] leading-[30px] text-[#201e26] opacity-70 mt-4">
            Drop the PNG export, Figma link, and any new brand assets and we'll fill this in.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
