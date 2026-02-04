import React from 'react';

const Outcome = ({ outcomes, impact }) => {
    return (
        <div className="rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold mb-4 text-white">Outcomes</h2>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        {outcomes}
                    </p>
                </div>
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold mb-4 text-white">Impact</h2>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        {impact}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Outcome;
