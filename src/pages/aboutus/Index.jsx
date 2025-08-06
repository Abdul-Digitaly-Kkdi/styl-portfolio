import React from 'react'
import About from "./About";
import WhoWeAre from "./WhoWeAre";
import BusinessPartner from "./BusinessPartner";
import OurVvm from "./OurVvm";
import Status from "./Status";
import OurTeam from "../ourTeam/OurTeam";
// import OurTeam from "./OurTeam";
import Marquee from "./Marquee";
import Who from '../Home/components/Who';
import VisionMissionValues from '../Home/components/Values';


function Index() {
  return (
    <>
    <About />
    <Who />
    {/* <WhoWeAre /> */}
    <BusinessPartner />
    {/* <OurVvm /> */}
    <VisionMissionValues />
    <Status />
    <OurTeam />
    <Marquee />

    
    </>
  )
}

export default Index