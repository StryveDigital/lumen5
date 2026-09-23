import Banner from './Banner'
import PowerTabs from './PowerTabs'
import BrandGovernance from './BrandGovernance'
import SmallCta from './SmallCta'
import Features from './Features'
import Resources from './Resources'
import CtaModuleWithCards from './CtaModuleWithCards'
import Footer from '../../shared/Footer'

export default function Demo() {
  return (
    <div className="w-full">
      <Banner />
      <PowerTabs />
      <BrandGovernance />
      <SmallCta />
      <Features />
      <Resources />
      <CtaModuleWithCards />
      <Footer />
    </div>
  )
}
