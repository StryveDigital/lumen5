// Explainers — launch landing page for the Animated Explainers release.
// Ad-driven campaign page. Structure follows the LP2/LP3 shell (dark hero,
// shared marquee, alternating light modules, dark CTA breaks, shared footer)
// with launch-specific content built from the launch concept + webinar.
//
// Narrative spine: hero claim → trust → cash the claim → how → objection kill
// → what it does per team → scale → cost reframe → real proof → close.

import Hero from './Hero'
import LogoCarousel from './LogoCarousel'
import ProofGrid from './ProofGrid'
import HowItWorks from './HowItWorks'
import StyleRange from './StyleRange'
import Outcomes from './Outcomes'
import ScaleBand from './ScaleBand'
import OldWayVsNow from './OldWayVsNow'
import CustomerProof from './CustomerProof'
import FinalCta from './FinalCta'
import Footer from '../../shared/Footer'

export default function Explainers() {
  return (
    <div className="w-full">
      <Hero />
      <LogoCarousel />
      <ProofGrid />
      <HowItWorks />
      <StyleRange />
      <Outcomes />
      <ScaleBand />
      <OldWayVsNow />
      <CustomerProof />
      <FinalCta />
      <Footer />
    </div>
  )
}
