import Banner from './Banner'
import LogoCarousel from './LogoCarousel'
import Features from './Features'
import SmallCta from './SmallCta'
import StatsModule from './StatsModule'
import SecurityCompliance from './SecurityCompliance'
import TwoCardCta from './TwoCardCta'
import Footer from '../../shared/Footer'

export default function Lp3() {
  return (
    <div className="w-full">
      <Banner />
      <LogoCarousel />
      <Features />
      <SmallCta />
      <StatsModule />
      <SecurityCompliance />
      <TwoCardCta />
      <Footer />
    </div>
  )
}
