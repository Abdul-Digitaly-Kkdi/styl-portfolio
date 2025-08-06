import React from 'react'
import HeroSection from '../components/HeroSection'
import CoreService from '../components/CoreService'
import CreativePortfolio from '../components/CreativePortfolio'
import OrganicGrowthMarketing from '../components/OrganicGrowthMarketing'
import PaidPerformanceMarketing from '../components/PaidPerformanceMarketing'
import WebDevelopmentPortfolio from '../components/WebDevelopmentPortfolio'
import KeyDifferentiators from '../components/KeyDifferentiators'
import About from '../components/About'
import ContactSection from '../components/ContactInformation'
import MarqueeAds from '../../aboutus/Marquee'



const Index = () => {
  return (
    <>
      <HeroSection />
      <About />
      <CoreService />
      <OrganicGrowthMarketing />
      <CreativePortfolio />
      <PaidPerformanceMarketing />
      <WebDevelopmentPortfolio />
      <MarqueeAds />
      <KeyDifferentiators />
      <ContactSection />
    </>
  )
}

export default Index