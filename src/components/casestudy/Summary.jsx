import React from 'react';

const Summary = ({ summaryText, services, liveLink, liveLinkText, year }) => {
    return (
        <div className="bg-[#] rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Column: Project Summary */}
                <div className="lg:col-span-2 space-y-4">
                    <h2 className="text-2xl font-semibold mb-6 text-white border-b border-white/10 pb-4 inline-block">Project Summary</h2>
                    {summaryText.map((text, index) => (
                        <p key={index} className="text-gray-400 leading-relaxed text-lg">
                            {text}
                        </p>
                    ))}
                </div>

                {/* Right Column: Services & Links */}
                <div className="lg:col-span-1 space-y-6 border-l border-white/10 lg:pl-10">
                    <div>
                        <h3 className="text-xl font-medium text-white mb-2">Services</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {services}
                        </p>
                    </div>

                    {liveLink && (
                        <div>
                            <h3 className="text-xl font-medium text-white mb-2">Live Website</h3>
                            <a
                                href={liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-400 transition-colors underline decoration-blue-500/50 hover:decoration-blue-500 underline-offset-4 text-lg inline-flex items-center group"
                            >
                                {liveLinkText || liveLink}
                                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    )}

                    <div>
                        <h3 className="text-xl font-medium text-white mb-2">Project Year</h3>
                        <p className="text-gray-400">{year}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;
