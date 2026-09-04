import Hero from './Hero'
import LogoCarousel from './LogoCarousel'
import ProofGrid from './ProofGrid'
import HowItWorks from './HowItWorks'
import StyleShowcase from './StyleShowcase'
import Outcomes from './Outcomes'
import ScaleBand from './ScaleBand'
import WorkflowCompare from './WorkflowCompare'
import OldWayVsNow from './OldWayVsNow'
import WebinarSection from './WebinarSection'
import CtaModule from './CtaModule'
import Footer from '../../shared/Footer'

export default function Explainers() {
  return (
    <div className="w-full">
      <Hero />
      <Outcomes />
      <LogoCarousel />
      <WorkflowCompare />
      <ScaleBand />
      <HowItWorks />
      <StyleShowcase />
      <ProofGrid />
      <Footer />
      {/* <OldWayVsNow />
      <WebinarSection />
      <CtaModule /> */}
    </div>
  )
}
