import Banner from './Banner'
import LogoCarousel from './LogoCarousel'
import TestimonialStats from './TestimonialStats'
import Steps from './Steps'
import SmallCta from './SmallCta'
import CalendarModule from './CalendarModule'
import CtaModule from './CtaModule'
import Footer from '../../shared/Footer'

export default function Lp1() {
  return (
    <div className="w-full">
      <Banner />
      <LogoCarousel />
      <TestimonialStats />
      <Steps />
      <SmallCta />
      <CalendarModule />
      <CtaModule />
      <Footer />
    </div>
  )
}
