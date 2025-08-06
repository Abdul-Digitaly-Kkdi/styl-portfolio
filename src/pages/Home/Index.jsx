import React from 'react'
import Landing from './components/Landing'
import Who from './components/Who'
import VisionMissionValues from './components/Values'
import StatsSection from './components/Statesection'
import StackedScrollCards from './components/Cards'
import Status from "../aboutus/Status"
import WeOffer from './components/WeOffer'
import HowItWorks from './components/HowItWorks'
import HeroWithHighlights from './components/HeroWithHighlights'
import DigitalExcellence from './components/DigitalExcellence'
import Testimonials from './components/Testimonials'
import MarqueeAds from '../aboutus/Marquee'
import ResponsiveVideo from './components/Video'

const Home = () => {
    return (
        <div>
            <Landing />
            <Who />
            <VisionMissionValues />
            {/* <StatsSection /> */}
            <ResponsiveVideo />
            <Status />
            <WeOffer />
            {/* <HowItWorks /> */}
            <HeroWithHighlights />
            <DigitalExcellence />
            <Testimonials />
            <MarqueeAds />

            {/* <StackedScrollCards /> */}
        </div>
    )
}

export default Home
