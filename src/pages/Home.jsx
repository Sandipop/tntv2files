import React from 'react'
import Hero from '../components/Hero.jsx'
import LogoLoop from '../components/LogoLoop.jsx'

import Services from '../components/Services.jsx'
import WorkingSmarter from '../components/WorkingSmarter.jsx'
import LatestProjects from '../components/LatestProjects.jsx'
import CustomerStories from '../components/CustomerStories.jsx'
import Testimonials from '../components/Testimonials.jsx'
import FAQ from '../components/FAQ.jsx'
import CTA from '../components/CTA.jsx'
import workingimg from '../assets/images/workingimg.png'

const Home = () => {
    
    return (
        <>
            <div >

                <Hero />
                <LogoLoop />
                <Services />
                <WorkingSmarter imageSrc={workingimg} />
                <LatestProjects  showHeading={true} showFilter={true} projectCount={6} />
                <CustomerStories />
                <Testimonials />
                <FAQ />
                <CTA />
            </div>

        </>
    )
}

export default Home