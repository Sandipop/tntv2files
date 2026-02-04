import React, { useEffect } from 'react';

import thumbnail from '../../assets/rainForest-assets/rainforest-thumbnail.webp';
import userjourney from '../../assets/rainForest-assets/rainforest-userjourney.webp';
import wireframe from '../../assets/rainForest-assets/rainforest-wireframe.webp';
import designstyle from '../../assets/rainForest-assets/rainforest-Designstyle.webp';
import uicomponent from '../../assets/rainForest-assets/rainforest-UIComponent &Design.webp';
import uicomponent2 from '../../assets/rainForest-assets/rainforest-UIComponent &Design2.webp';
import colorpalette from '../../assets/rainForest-assets/rainforest-colorstyle.jpg';

import Header from '../../components/casestudy/Header';
import Summary from '../../components/casestudy/Summary';
import Showcase from '../../components/casestudy/Showcase';
import ProblemAndSolution from '../../components/casestudy/ProblemAndSolution';
import Process from '../../components/casestudy/Process';
import ImageSection from '../../components/casestudy/ImageSection';
import Gallery from '../../components/casestudy/Gallery';
import Outcome from '../../components/casestudy/Outcome';

const RainforestAi = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const summaryText = [
        "Rainforest emerged from a growing need among creators, marketers, and designers for a simplified, engaging way to harness AI for visual storytelling. It offers an intuitive platform where users can generate, customize, and explore high-quality images through natural language prompts—without needing deep technical expertise.",

        "Rainforest transforms the AI image creation experience by making it accessible, inspiring, and community-driven. With features like guided prompting, public galleries, and creative reuse, it empowers users to explore new ideas, express their creativity, and learn through interaction.",

        "By blending user-centered design with powerful AI capabilities, Rainforest redefines visual creativity—turning complex technology into an approachable tool for everyday imagination. More than just a generator, it’s a launchpad for creative exploration in the age of AI."
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
                { title: "Lack of Creative Guidance:", description: "Many users struggled to write effective prompts or understand how to use AI creatively without trial and error." },

                { title: "Cluttered Interfaces:", description: "The early UI lacked visual hierarchy and clear structure, increasing cognitive load and making the creative process frustrating." },

                { title: "Overwhelming Technology:", description: "First-time users, especially novices, found the AI image generation process intimidating and hard to approach with confidence." }
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
                { title: "User Research:", description: "Conducted discovery workshops and interviews with creatives, hobbyists, and marketers to understand user goals, frustrations, and use cases." },

                { title: "User Journey Mapping:", description: "Mapped the end-to-end journey—from prompt creation to image generation and exploration—to identify friction points and emotional highs/lows." },
                { title: "Prototyping and Testing:", description: "Built low-to-high fidelity prototypes and conducted usability testing to validate navigation, user flow, and interface clarity." }
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
                { title: "Guided Prompting & Inspiration:", description: "Introduced pre-defined prompts, style suggestions, and a visual gallery to spark creativity and support prompt writing" },

                { title: "Simplified UI & Navigation:", description: "Built tools to generate, schedule, and export stakeholder-specific reports in formats like PDF, Excel, and CSV." },

                { title: "Community and Learning Features:", description: "Added public galleries, image reuse options, and embedded educational content to promote creativity, discovery, and continuous learning." }
            ]
        }
    ];

    return (
        <div className="pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <Header
                    category="UI/UX Design & Development"
                    title="RainforestAi"
                    subtitle="An intuitive platform where ideas become visuals—faster, smarter, and more creatively than ever before."
                />

                <Summary
                    summaryText={summaryText}
                    services="Strategy, Visual Identity, Illustration, Web design and development"
                    liveLink="https://rainforest.zone"
                    liveLinkText="rainforest.zone"
                    year="2024"
                />

                <Showcase
                    image={thumbnail}
                    altText="RanforestAi Dashboard Interface"
                />

                <ProblemAndSolution
                    problem="With the growing demand for creative tools and visual content in today’s digital age, Rainforest.zone aims to provide an accessible AI-powered image generation platform. The challenge lies in simplifying the complexities of AI technology while inspiring creativity across a diverse user base, from professionals to casual creators. Rainforest.zone seeks to create an intuitive and engaging platform that encourages exploration, fosters creativity, and empowers users to leverage AI for their visual storytelling needs."

                    challenges="The key challenge is to design an AI-powered image generation platform that empowers users of all skill levels—from complete beginners to creative professionals—to effortlessly create high-quality visuals. The platform must strike a balance between advanced functionality and intuitive usability, ensuring the creative process feels accessible, inspiring, and enjoyable. It should encourage exploration and experimentation, spark creativity, and provide learning opportunities without overwhelming users with technical complexity. By fostering a supportive and engaging environment, the platform can help users fully realize the creative potential of AI-generated visuals."
                />

                <Process phases={processPhases} />

                <ImageSection
                    title="User Journey"
                    image={userjourney}
                    altText="User Journey Diagram"
                />

                <ImageSection
                    title="Wireframes"
                    description="Our primary goal was to demystify the AI image generation process, transforming it from a technical task into an intuitive creative experience. We structured the wireframes to prioritize visual exploration and ease of use, designing dedicated spaces for prompting, gallery browsing, and image customization. By introducing a clean, distraction-free interface with guided onboarding, we reduced the cognitive load for new users, allowing them to focus on their ideas rather than the tools. The layout ensures that inspiration is always within reach, fostering a seamless flow from initial concept to final visual masterpiece."
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
                    outcomes="The Rainforest AI platform transformed how users engage with AI-generated visuals by making the creative process more accessible, intuitive, and enjoyable. Through simplified prompting, interactive galleries, and structured user flows, it enabled users—from beginners to professionals—to generate high-quality images with ease. The user-centric interface reduced the learning curve, encouraging exploration and creativity without overwhelming users. Integrated tips, reusable content, and inspiration features fostered continuous learning and engagement. As a result, Rainforest not only elevated the quality of visual storytelling but also built user confidence and trust in AI, making advanced technology feel human, approachable, and creatively empowering."

                    impact="Rainforest AI made a measurable impact on how users interact with AI-generated visual content. It lowered the barrier to entry by turning complex image generation into an intuitive and enjoyable experience. Users could produce professional-quality visuals faster and with greater confidence, thanks to guided prompts and streamlined workflows. The platform encouraged creative exploration, reuse, and learning, leading to higher engagement across a wide range of users—from casual creators to design professionals. By fostering a transparent, community-driven environment, Rainforest strengthened trust in AI tools and contributed to a more inclusive and innovative creative ecosystem."
                />

            </div>
        </div>
    );
}

export default RainforestAi;
