import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar2 from '../../components/Navbar2';
import Footer from '../../components/Footer';
import thumbnail from '../../assets/HelioExpect-assets/helioExp.webp';
import userjourney from '../../assets/HelioExpect-assets/user-journey.webp';
import wireframe from '../../assets/HelioExpect-assets/helio-wireframe.webp';
import designstyle from '../../assets/HelioExpect-assets/helio-DesignStyle.webp';
import uicomponent from '../../assets/HelioExpect-assets/helio-UI Component & Design.webp';
import uicomponent2 from '../../assets/HelioExpect-assets/helio-UI Component & Design2.webp';
import colorpalette from '../../assets/HelioExpect-assets/helio-colorstyle.webp';

const HelioExpect = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#060010] min-h-screen text-white font-sans selection:bg-blue-500/30">
            <Navbar2 />

            <main className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                    <Link
                        to="/work"
                        className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 group"
                    >
                        <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                    </Link>

                    {/* Header Section */}
                    <div className="mb-10">
                        <span className="text-blue-400 font-medium tracking-wider uppercase mb-3 block">UI/UX Design</span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            HelioExpect
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light">
                            Next-Generation Centralized Solar Performance Intelligence Platform
                        </p>
                    </div>

                    {/* Summary Card */}
                    <div className="bg-[#] rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl mb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Left Column: Project Summary */}
                            <div className="lg:col-span-2 space-y-4">
                                <h2 className="text-2xl font-semibold mb-6 text-white border-b border-white/10 pb-4 inline-block">Project Summary</h2>

                                <p className="text-gray-400 leading-relaxed text-lg">
                                    HelioExpect emerged from a critical need identified by solar plant operators and industry experts—to streamline performance monitoring, reduce downtime, and enhance energy efficiency across solar infrastructures.
                                </p>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    HelioExpect delivers a centralized, intuitive platform that standardizes how solar plant data is visualized, forecasted, and acted upon. It empowers plant managers, technicians, and stakeholders with real-time insights and predictive analytics to drive smarter operations.
                                </p>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    By combining user-centered design with robust data systems, HelioExpect promotes transparency, operational clarity, and informed decision-making. More than just a dashboard, it’s a catalyst for renewable energy excellence—enabling a future where solar operations are smarter, faster, and more resilient.
                                </p>
                            </div>

                            {/* Right Column: Services & Links */}
                            <div className="lg:col-span-1 space-y-6 border-l border-white/10 lg:pl-10">
                                <div>
                                    <h3 className="text-xl font-medium text-white mb-2">Services</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Strategy, Visual Identity, Illustration, Web design and development
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-medium text-white mb-2">Live Website</h3>
                                    <a
                                        href="https://helioexpect.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-blue-400 transition-colors underline decoration-blue-500/50 hover:decoration-blue-500 underline-offset-4 text-lg inline-flex items-center group"
                                    >
                                        helioexpect.com
                                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>

                                <div>
                                    <h3 className="text-xl font-medium text-white mb-2">Project Year</h3>
                                    <p className="text-gray-400">2024</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual Showcase */}

                    <div className=" mb-22 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                        <div className="bg-linear-to-b from-gray-800 to-[#060010] p-12 flex items-center justify-center min-h-[500px]">
                            <img
                                src={thumbnail}
                                alt="HelioExpect Dashboard Interface"
                                className="w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-[1.01] transition-transform duration-700"
                            />
                        </div>
                    </div>


                    {/* Deep Dive Sections */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl mb-12">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                The Problem
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Solar plant operators and managers struggle to efficiently monitor and forecast solar plant performance across multiple locations, leading to operational inefficiencies, untimely maintenance, and potential loss in generation capacity. A centralized system is needed to ensure real-time monitoring, predictive analytics, and actionable alerts to optimize performance and reduce downtime.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                The Challenges
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Data Complexity: Solar plants produce a large volume of data from various components such as inverters, panels, and weather monitoring systems. Managing and visualizing this data in a meaningful way is complex. Real-time Monitoring: Ensuring real-time data feeds and live monitoring across multiple plants while avoiding delays or downtime. Predictive Forecasting: Accurately forecasting energy generation, both short-term and long-term, using complex models that integrate weather and historical data. Proactive Alerts: Providing meaningful and timely alerts to users, ensuring that issues are flagged before they escalate, and categorizing them based on severity. User Experience: Ensuring the interface is intuitive for users, from plant operators to management, who may have varying levels of technical expertise.
                            </p>
                        </div>
                    </div>


                    {/* Our Process Section */}
                    {/* Pain Points */}
                    <div className="bg-[#] rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-20">Our Process</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-white/10 pb-16 mb-16">
                            <div className="lg:col-span-4">
                                <h3 className="text-2xl font-semibold text-white flex items-center gap-4">
                                    <span className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center text-blue-400">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                    Pain Points
                                </h3>
                            </div>
                            <div className="lg:col-span-8 space-y-8">
                                <div>
                                    <h4 className="text-xl font-medium text-white mb-2">Data Complexity:</h4>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        Users struggled to manage and interpret massive volumes of data from various solar plant components like inverters, panels, and weather systems.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-medium text-white mb-2">Inefficient Forecasting:</h4>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        Existing tools lacked the ability to generate accurate short-term and long-term energy forecasts using weather and historical data.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-medium text-white mb-2">Limited Alerts & Notifications:</h4>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        There was no efficient way to receive timely alerts, making it difficult to prevent issues or prioritize maintenance tasks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* User Research */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                            <div className="lg:col-span-4">
                                <h3 className="text-2xl font-semibold text-white flex items-center gap-4">
                                    <span className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center text-blue-400">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </span>
                                    User Research:
                                </h3>
                            </div>
                            <div className="lg:col-span-8 space-y-8">
                                <div>
                                    <h4 className="text-xl font-medium text-white mb-2">User Research:</h4>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        Conducted interviews and gathered insights from plant operators and managers to understand real-world needs and daily workflows.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-medium text-white mb-2">User Journey Mapping:</h4>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        Outlined the entire platform journey—from plant setup to live monitoring and alert management—to highlight gaps and improve usability
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-medium text-white mb-2">Prototyping and Testing:</h4>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        Developed wireframes and high-fidelity prototypes focused on simplifying data presentation. Conducted iterative testing to refine interactions and enhance clarity.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Implementation */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-white/10 pt-16 mt-16">
                            <div className="lg:col-span-4">
                                <h3 className="text-2xl font-semibold text-white flex items-center gap-4">
                                    <span className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center text-blue-400">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                    Implementation
                                </h3>
                            </div>
                            <div className="lg:col-span-8 space-y-8">
                                <div>
                                    <h4 className="text-xl font-medium text-white mb-2">Simplified Dashboards:</h4>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        Designed a high-level overview screen showcasing real-time generation, total output, efficiency, and trends for quick decision-making.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-medium text-white mb-2">Customizable Reports:</h4>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        Built tools to generate, schedule, and export stakeholder-specific reports in formats like PDF, Excel, and CSV.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-medium text-white mb-2">Configurable Alerts:</h4>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        Developed a smart notification system with threshold-based alerts categorized by priority and delivered via email, SMS, or in-app.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* User Journey Section */}
                    <div className="mb-22">
                        <h2 className="text-4xl md:text-5xl font-medium text-center text-white mb-5">User Journey</h2>
                        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                            <div className="bg-linear-to-b from-gray-800 to-[#060010] p-8 flex items-center justify-center min-h-[500px]">
                                <img
                                    src={userjourney}
                                    alt="User Journey Diagram"
                                    className="w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-[1.01] transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Wireframes*/}
                    <div className="mb-22">
                        <h2 className="text-4xl md:text-5xl font-medium text-center text-white mb-5">Wireframes</h2>
                        <p className="text-gray-400 text-lg leading-relaxed text-center mb-12 max-w-6xl mx-auto">
                            Our focus was on breaking down the complexity of solar plant data into a format that was easy to understand and navigate. We designed dedicated sections for each key function—monitoring, forecasting, reporting, and alerts—allowing users to engage with one feature at a time without feeling overwhelmed. Providing clearly structured onboarding screens and intuitive layouts was a significant advantage for first-time users. Through our wireframes, we ensured that users received comprehensive insights into plant performance, system components, and alert mechanisms, which helped build transparency and trust with operators and stakeholders alike.


                        </p>
                        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                            <div className="bg-linear-to-b from-gray-800 to-[#060010] p-8 flex items-center justify-center min-h-[500px]">
                                <img
                                    src={wireframe}
                                    alt="User Journey Diagram"
                                    className="w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-[1.01] transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Designstyle*/}
                    <div className="mb-22">
                        <h2 className="text-4xl md:text-5xl font-medium text-center text-white mb-5">Design Style</h2>

                        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                            <div className="bg-linear-to-b from-gray-800 to-[#060010] p-8 flex items-center justify-center min-h-[500px]">
                                <img
                                    src={designstyle}
                                    alt="User Journey Diagram"
                                    className="w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-[1.01] transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                    {/* colorpalette*/}
                    <div className="mb-22">
                        <h2 className="text-4xl md:text-5xl font-medium text-center text-white mb-5">Color Palette</h2>

                        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                            <div className="bg-linear-to-b from-gray-800 to-[#060010] p-8 flex items-center justify-center min-h-[500px]">
                                <img
                                    src={colorpalette}
                                    alt="User Journey Diagram"
                                    className="w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-[1.01] transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                    {/* UI Component & Design*/}
                    <div className="mb-22">
                        <h2 className="text-4xl md:text-5xl font-medium text-center text-white mb-5">UI Component & Design</h2>

                        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                            <div className="bg-linear-to-b from-white to-gray-200 p-8 flex items-center justify-center min-h-[500px]">
                                <img
                                    src={uicomponent}
                                    alt="User Journey Diagram"
                                    className="w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-[1.01] transition-transform duration-700"
                                />
                            </div>
                            <div className="bg-linear-to-b from-white to-gray-200 p-8 flex items-center justify-center min-h-[500px]">
                                <img
                                    src={uicomponent2}
                                    alt="User Journey Diagram"
                                    className="w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-[1.01] transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Outcomes and Impact Section */}
                    <div className="bg-[#] rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl mb-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold mb-4 text-white">Outcomes</h2>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    The HelioExpect platform significantly enhanced the way solar plant operators manage and interpret complex data. By delivering real-time monitoring, simplified dashboards, and predictive forecasting tools, it enabled quicker decision-making and proactive maintenance. The user-centric design ensured that individuals with varying technical expertise could easily navigate the platform, reducing friction and improving adoption. Customizable reports and priority-based alerts empowered teams to stay informed and plan ahead more effectively. As a result, HelioExpect not only streamlined daily operations but also built greater trust among stakeholders by promoting transparency, reliability, and efficiency in solar energy management.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold mb-4 text-white">Impact</h2>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    HelioExpect created a measurable impact across multiple levels of solar plant operations. It reduced downtime by enabling faster issue detection through real-time monitoring and smart alerts. The predictive analytics tools allowed for better maintenance scheduling and energy forecasting, leading to increased efficiency in energy generation. The user-friendly interface improved onboarding and engagement, even for non-technical users, fostering a more inclusive workflow. Furthermore, the platform enhanced data transparency and accountability, strengthening trust among stakeholders and paving the way for smarter, more sustainable energy practices.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </main>


        </div>
    );
}

export default HelioExpect;