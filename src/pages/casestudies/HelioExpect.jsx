import React from 'react';

import thumbnail from '../../assets/HelioExpect-assets/helioExp.webp';
import userjourney from '../../assets/HelioExpect-assets/user-journey.webp';
import wireframe from '../../assets/HelioExpect-assets/helio-wireframe.webp';
import designstyle from '../../assets/HelioExpect-assets/helio-DesignStyle.webp';
import uicomponent from '../../assets/HelioExpect-assets/helio-UI Component & Design.webp';
import uicomponent2 from '../../assets/HelioExpect-assets/helio-UI Component & Design2.webp';
import colorpalette from '../../assets/HelioExpect-assets/helio-colorstyle.webp';

import Header from '../../components/casestudy/Header';
import Summary from '../../components/casestudy/Summary';
import Showcase from '../../components/casestudy/Showcase';
import ProblemAndSolution from '../../components/casestudy/ProblemAndSolution';
import Process from '../../components/casestudy/Process';
import ImageSection from '../../components/casestudy/ImageSection';
import Gallery from '../../components/casestudy/Gallery';
import Outcome from '../../components/casestudy/Outcome';

const HelioExpect = () => {


    const summaryText = [
        "HelioExpect emerged from a critical need identified by solar plant operators and industry experts—to streamline performance monitoring, reduce downtime, and enhance energy efficiency across solar infrastructures.",
        "HelioExpect delivers a centralized, intuitive platform that standardizes how solar plant data is visualized, forecasted, and acted upon. It empowers plant managers, technicians, and stakeholders with real-time insights and predictive analytics to drive smarter operations.",
        "By combining user-centered design with robust data systems, HelioExpect promotes transparency, operational clarity, and informed decision-making. More than just a dashboard, it’s a catalyst for renewable energy excellence—enabling a future where solar operations are smarter, faster, and more resilient."
    ];

    const processPhases = [
        {
            title: "Pain Points",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            items: [
                { title: "Data Complexity:", description: "Users struggled to manage and interpret massive volumes of data from various solar plant components like inverters, panels, and weather systems." },
                { title: "Inefficient Forecasting:", description: "Existing tools lacked the ability to generate accurate short-term and long-term energy forecasts using weather and historical data." },
                { title: "Limited Alerts & Notifications:", description: "There was no efficient way to receive timely alerts, making it difficult to prevent issues or prioritize maintenance tasks." }
            ]
        },
        {
            title: "User Research:",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            ),
            items: [
                { title: "User Research:", description: "Conducted interviews and gathered insights from plant operators and managers to understand real-world needs and daily workflows." },
                { title: "User Journey Mapping:", description: "Outlined the entire platform journey—from plant setup to live monitoring and alert management—to highlight gaps and improve usability" },
                { title: "Prototyping and Testing:", description: "Developed wireframes and high-fidelity prototypes focused on simplifying data presentation. Conducted iterative testing to refine interactions and enhance clarity." }
            ]
        },
        {
            title: "Implementation",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            items: [
                { title: "Simplified Dashboards:", description: "Designed a high-level overview screen showcasing real-time generation, total output, efficiency, and trends for quick decision-making." },
                { title: "Customizable Reports:", description: "Built tools to generate, schedule, and export stakeholder-specific reports in formats like PDF, Excel, and CSV." },
                { title: "Configurable Alerts:", description: "Developed a smart notification system with threshold-based alerts categorized by priority and delivered via email, SMS, or in-app." }
            ]
        }
    ];

    return (
        <div className="pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <Header
                    category="UI/UX Design"
                    title="HelioExpect"
                    subtitle="Next-Generation Centralized Solar Performance Intelligence Platform"
                />

                <Summary
                    summaryText={summaryText}
                    services="Strategy, Visual Identity, Illustration, Web design and development"
                    liveLink="https://helioexpect.com"
                    liveLinkText="helioexpect.com"
                    year="2024"
                />

                <Showcase
                    image={thumbnail}
                    altText="HelioExpect Dashboard Interface"
                />

                <ProblemAndSolution
                    problem="Solar plant operators and managers struggle to efficiently monitor and forecast solar plant performance across multiple locations, leading to operational inefficiencies, untimely maintenance, and potential loss in generation capacity. A centralized system is needed to ensure real-time monitoring, predictive analytics, and actionable alerts to optimize performance and reduce downtime."
                    challenges="Data Complexity: Solar plants produce a large volume of data from various components such as inverters, panels, and weather monitoring systems. Managing and visualizing this data in a meaningful way is complex. Real-time Monitoring: Ensuring real-time data feeds and live monitoring across multiple plants while avoiding delays or downtime. Predictive Forecasting: Accurately forecasting energy generation, both short-term and long-term, using complex models that integrate weather and historical data. Proactive Alerts: Providing meaningful and timely alerts to users, ensuring that issues are flagged before they escalate, and categorizing them based on severity. User Experience: Ensuring the interface is intuitive for users, from plant operators to management, who may have varying levels of technical expertise."
                />

                <Process phases={processPhases} />

                <ImageSection
                    title="User Journey"
                    image={userjourney}
                    altText="User Journey Diagram"
                />

                <ImageSection
                    title="Wireframes"
                    description="Our focus was on breaking down the complexity of solar plant data into a format that was easy to understand and navigate. We designed dedicated sections for each key function—monitoring, forecasting, reporting, and alerts—allowing users to engage with one feature at a time without feeling overwhelmed. Providing clearly structured onboarding screens and intuitive layouts was a significant advantage for first-time users. Through our wireframes, we ensured that users received comprehensive insights into plant performance, system components, and alert mechanisms, which helped build transparency and trust with operators and stakeholders alike."
                    image={wireframe}
                    altText="Wireframes"
                />

                <ImageSection
                    title="Design Style"
                    image={designstyle}
                    altText="Design Style"
                />

                <ImageSection
                    title="Color Palette"
                    image={colorpalette}
                    altText="Color Palette"
                />

                <Gallery
                    title="UI Component & Design"
                    images={[
                        { src: uicomponent, alt: "UI Component 1" },
                        { src: uicomponent2, alt: "UI Component 2" }
                    ]}
                />

                <Outcome
                    outcomes="The HelioExpect platform significantly enhanced the way solar plant operators manage and interpret complex data. By delivering real-time monitoring, simplified dashboards, and predictive forecasting tools, it enabled quicker decision-making and proactive maintenance. The user-centric design ensured that individuals with varying technical expertise could easily navigate the platform, reducing friction and improving adoption. Customizable reports and priority-based alerts empowered teams to stay informed and plan ahead more effectively. As a result, HelioExpect not only streamlined daily operations but also built greater trust among stakeholders by promoting transparency, reliability, and efficiency in solar energy management."
                    impact="HelioExpect created a measurable impact across multiple levels of solar plant operations. It reduced downtime by enabling faster issue detection through real-time monitoring and smart alerts. The predictive analytics tools allowed for better maintenance scheduling and energy forecasting, leading to increased efficiency in energy generation. The user-friendly interface improved onboarding and engagement, even for non-technical users, fostering a more inclusive workflow. Furthermore, the platform enhanced data transparency and accountability, strengthening trust among stakeholders and paving the way for smarter, more sustainable energy practices."
                />

            </div>
        </div>
    );
}

export default HelioExpect;