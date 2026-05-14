import Banner from './Banner'
import LogoCarousel from './LogoCarousel'
import Testimonial from './Testimonial'
import Steps from './Steps'
import SmallCta from './SmallCta'
import StatsModule from './StatsModule'
import CtaModule from './CtaModule'
import Footer from '../../shared/Footer'

export default function Lp2() {
  return (
    <div className="w-full">
      <Banner />
      <LogoCarousel />
      <Testimonial />
      <Steps />
      <SmallCta />
      <StatsModule />
      <CtaModule />
      <Footer />
    </div>
  )
}
