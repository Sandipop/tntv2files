import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ category, title, subtitle }) => {
    return (
        <>
            <Link
                to="/work"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 group"
            >
                <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
            </Link>

            <div className="mb-10">
                <span className="text-blue-400 font-medium tracking-wider uppercase mb-3 block">{category}</span>
                <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-full leading-relaxed font-light">
                    {subtitle}
                </p>
            </div>
        </>
    );
};

export default Header;
