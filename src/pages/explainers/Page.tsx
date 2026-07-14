import Hero from './Hero'
import LogoCarousel from './LogoCarousel'
import ProofGrid from './ProofGrid'
import HowItWorks from './HowItWorks'
import StyleShowcase from './StyleShowcase'
import Outcomes from './Outcomes'
import ScaleBand from './ScaleBand'
import OldWayVsNow from './OldWayVsNow'
import CustomerProof from './CustomerProof'
import CtaModule from './CtaModule'
import Footer from '../../shared/Footer'

export default function Explainers() {
  return (
    <div className="w-full">
      <Hero />
      <LogoCarousel />
      <ProofGrid />
      <HowItWorks />
      <StyleShowcase />
      <Outcomes />
      <ScaleBand />
      <OldWayVsNow />
      <CustomerProof />
      <CtaModule />
      <Footer />
    </div>
  )
}
