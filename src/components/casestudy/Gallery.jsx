import React from 'react';

const Gallery = ({ title, images, backgroundClass = "bg-linear-to-b from-white to-gray-200" }) => {
    return (
        <div className="mb-22">
            <h2 className="text-4xl md:text-5xl font-medium text-center text-white mb-5">{title}</h2>

            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                {images.map((img, index) => (
                    <div key={index} className={`${backgroundClass} p-8 flex items-center justify-center min-h-[500px]`}>
                        <img
                            src={img.src}
                            alt={img.alt || title}
                            className="w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-[1.01] transition-transform duration-700"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
