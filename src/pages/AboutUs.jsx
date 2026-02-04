import React from 'react'
import NextHero from '../components/NextHero.jsx'
import WorkingSmarter from '../components/WorkingSmarter.jsx'
import UniqueApproaches from '../components/UniqueApproaches.jsx'
import CTA from '../components/CTA.jsx'

const AboutUs = () => {
    return (
        <div>
            <NextHero
                title="About"
                subtext="“Tagntarget is a creative-driven agency blending strategy, design, and technology to help brands thrive in a fast-changing digital world.”"
            />

            <WorkingSmarter
                alignment="Left"
                imageSrc="..."
                title="..."
                features={[
                    {
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                            </svg>
                        ),
                        title: "Abcd",
                        description: "abcd",
                        hoverColorClass: "blue"
                    },
                    {
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.746 3.746 0 0 1 21 12Z" />
                            </svg>
                        ),
                        title: "Integrated Multichannel Marketing",
                        description: "To create a seamless and consistent brand experiences for customers across all digital touchpoints.",
                        hoverColorClass: "purple"
                    }
                ]}
            />

            <UniqueApproaches />



            <CTA />
        </div>
    )
}

export default AboutUs