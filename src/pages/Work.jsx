import React from 'react'
import CTA from '../components/CTA.jsx'
import NextHero from '../components/NextHero.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import LatestProjects from '../components/LatestProjects.jsx'

const Work = () => {
    return (
        <div>
            <NextHero
                title="Works"
                subtext="“Explore how we’ve helped ambitious businesses transform ideas into intuitive designs, engaging brands, and successful digital experiences.”"
            />
            <LatestProjects headerAlign="center" showHeading={false} showFilter={true} />



            <CTA />
        </div>
    )
}

export default Work