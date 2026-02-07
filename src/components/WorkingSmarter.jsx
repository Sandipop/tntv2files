import React from 'react';
import Button from './Button';

const WorkingSmarter = ({
    imageSrc = "https://placehold.co/800x800/1a1033/FFF?text=Team+Working",
    title = <>Working Smarter, Not <br className="hidden md:block" /> Harder in Every Task</>,
    features = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
            ),
            title: "Remote and Flexible Work",
            description: "With the advancement of digital communication tools and project management software.",
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
    ],
    alignment = "left" // "left" or "right" (image position)
}) => {

    // Determine the flex direction based on alignment
    // Defaults to image on left (flex-row), if right then flex-row-reverse
    const flexDirectionClass = alignment === "right" ? "lg:flex-row-reverse" : "lg:flex-row";

    return (
        <section className="bg-[#060010] text-white py-16 px-4 relative overflow-hidden">
            <div className={`max-w-7xl mx-auto flex flex-col ${flexDirectionClass} items-center gap-16`}>

                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group h-full self-stretch">
                    <div className="relative rounded-2xl overflow-hidden h-full min-h-[500px] w-full bg-gray-900 border border-white/20 shadow-2xl">
                        {/* Image */}
                        <img
                            src={imageSrc}
                            alt="Working Smarter"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                        {/* Overlay Tag */}

                    </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                        {title}
                    </h2>

                    <div className="h-px w-full bg-linear-to-r from-white/20 via-white/5 to-transparent mb-10"></div>

                    <div className="space-y-10">
                        {features.map((feature, index) => {
                            // Dynamic color logic
                            const hoverBg = feature.hoverColorClass === 'purple' ? 'group-hover:bg-purple-600' : 'group-hover:bg-blue-600';
                            const hoverBorder = feature.hoverColorClass === 'purple' ? 'group-hover:border-purple-500' : 'group-hover:border-blue-600';
                            const hoverShadow = feature.hoverColorClass === 'purple' ? 'group-hover:shadow-purple-500/25' : 'group-hover:shadow-blue-500/25';
                            const hoverText = feature.hoverColorClass === 'purple' ? 'group-hover:text-purple-400' : 'group-hover:text-blue-400';

                            return (
                                <div key={index} className="group flex gap-5">
                                    <div className={`shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white ${hoverBg} ${hoverBorder} transition-all duration-300 shadow-inner ${hoverShadow}`}>
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className={`text-xl font-bold mb-2 ${hoverText} transition-colors`}>{feature.title}</h3>
                                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-12">
                        {/* <Button /> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkingSmarter;
