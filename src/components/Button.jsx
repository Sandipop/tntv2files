import React from 'react';

const Button = ({ text = "Read More", className = "", ...props }) => {
    return (
        <button
            className={`group relative px-8 py-3 rounded-full bg-white cursor-pointer text-black font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] ${className}`}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">
                {text}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </span>
        </button>
    );
};

export default Button;
