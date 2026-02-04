import React from 'react';

const ImageSection = ({ title, description, image, altText, backgroundClass = "bg-linear-to-b from-gray-800 to-[#060010]" }) => {
    return (
        <div className="mb-22">
            <h2 className="text-4xl md:text-5xl font-medium text-center text-white mb-5">{title}</h2>
            {description && (
                <p className="text-gray-400 text-lg leading-relaxed text-center mb-12 max-w-6xl mx-auto">
                    {description}
                </p>
            )}
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <div className={`${backgroundClass} p-8 flex items-center justify-center min-h-[500px]`}>
                    <img
                        src={image}
                        alt={altText}
                        className="w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-[1.01] transition-transform duration-700"
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageSection;
