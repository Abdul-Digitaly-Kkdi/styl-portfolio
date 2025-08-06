import React from 'react'
import Services from './Services'
import WeOffer from "../Home/components/WeOffer"
import Values from '../ourTeam/OurValues'
import Status from "../aboutus/Status"
import HeroWithHighlights from "../Home/components/HeroWithHighlights"
import DigitalExcellence from './DigitalExcellence'

function Index() {
  return (
    <>
    <Services />
    <DigitalExcellence />
    <WeOffer />
    <Values />
    {/* <Status />
    <HeroWithHighlights /> */}
    </>
  )
}

export default Index