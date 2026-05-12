import Banner from './components/Banner'
import LogoCarousel from './components/LogoCarousel'
import TestimonialStats from './components/TestimonialStats'
import Steps from './components/Steps'
import SmallCta from './components/SmallCta'
import CtaModule from './components/CtaModule'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="w-full">
      <Banner />
      <LogoCarousel />
      <TestimonialStats />
      <Steps />
      <SmallCta />
      <CtaModule />
      <Footer />
    </div>
  )
}
