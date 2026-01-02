import React from 'react';

const ServiceCard = ({ icon, tag, title, description }) => {
    return (
        <div className="group relative w-full h-full px-8 py-14 rounded-2xl bg-[#060010] cursor-pointer border border-white/10 hover:border-white/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            {/* Subtle Gradient Background on Hover */}
            <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-start h-full">
                {/* Icon */}
                <div className="mb-8 p-0 text-white group-hover:scale-110 group-hover:text-blue-400 transition-all duration-300">
                    {/* If icon is a component, render it, or just generic styles if passed as generic node */}
                    <div className='w-12 h-12 [&>svg]:w-full [&>svg]:h-full'>
                        {icon}
                    </div>
                </div>

                {/* Tag Text */}
                <span className="mb-3 text-sm font-medium text-gray-500 tracking-wider uppercase group-hover:text-gray-400 transition-colors duration-300">
                    {tag}
                </span>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-bold text-white tracking-tight group-hover:text-white/90 transition-colors duration-300">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-base font-light">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ServiceCard;
