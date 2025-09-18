import { useState } from "react"
import HeroSection from "./Hero"
import CompanyLogos from "./CompanyLogos"
import ValueProposition from "./ValueProposition"
import StatsSection from "./Stats"
import TestimonialsSection from "./Testimonial"
import CTASection from "./CTASection"
import VideoModal from "./VideoModal"


const LandingPage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const handleWatchDemo = () => {
    setIsVideoPlaying(true)
  }

  const handleCloseVideo = () => {
    setIsVideoPlaying(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <HeroSection onWatchDemo={handleWatchDemo} />
      <CompanyLogos />
      <ValueProposition />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <VideoModal isOpen={isVideoPlaying} onClose={handleCloseVideo} />
    </div>
  )
}

export default LandingPage