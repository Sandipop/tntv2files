import React from 'react';

const Showcase = ({ image, altText }) => {
    return (
        <div className="mb-22 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
            <div className="bg-linear-to-b from-gray-800 to-[#060010] p-12 flex items-center justify-center min-h-[500px]">
                <img
                    src={image}
                    alt={altText}
                    className="w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-[1.01] transition-transform duration-700"
                />
            </div>
        </div>
    );
};

export default Showcase;
