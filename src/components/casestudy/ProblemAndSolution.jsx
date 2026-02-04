import React from 'react';

const ProblemAndSolution = ({ problem, challenges }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl mb-12">
            <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                    <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    The Problem
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                    {problem}
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
                    {challenges}
                </p>
            </div>
        </div>
    );
};

export default ProblemAndSolution;
