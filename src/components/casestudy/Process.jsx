import React from 'react';

const Process = ({ phases }) => {
    return (
        <div className="bg-[#] rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-20">Our Process</h2>

            {phases.map((phase, index) => (
                <div
                    key={index}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start ${index === 0 ? 'border-b border-white/10 pb-16 mb-16' : ''
                        } ${index === phases.length - 1 && index !== 0 ? 'border-t border-white/10 pt-16 mt-16' : ''
                        }`}
                >
                    <div className="lg:col-span-4">
                        <h3 className="text-2xl font-semibold text-white flex items-center gap-4">
                            <span className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center text-blue-400">
                                {phase.icon}
                            </span>
                            {phase.title}
                        </h3>
                    </div>
                    <div className="lg:col-span-8 space-y-8">
                        {phase.items.map((item, idx) => (
                            <div key={idx}>
                                <h4 className="text-xl font-medium text-white mb-2">{item.title}</h4>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Process;
