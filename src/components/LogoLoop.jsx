import React from 'react';
import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.png';
import logo3 from '../assets/images/logo3.png';
import logo4 from '../assets/images/logo4.png';
import logo5 from '../assets/images/logo5.png';

// Placeholder logos - replace these with your actual imported images
const logos = [
    { id: 1, src: logo1, alt: "Brand 1" },
    { id: 2, src: logo2, alt: "Brand 2" },
    { id: 3, src: logo3, alt: "Brand 3" },
    { id: 4, src: logo4, alt: "Brand 4" },
    { id: 5, src: logo5, alt: "Brand 5" },
     // Adding one more to balance the loop length if needed
];

const LogoLoop = () => {
    return (
        <div className="w-full py-12 bg-[#060010] relative overflow-hidden flex flex-col justify-center items-center">
            

            <div className="relative w-full overflow-hidden">
                {/* Left Gradient Fade */}
                <div className="absolute top-0 left-0 h-full w-20 md:w-40 z-10 bg-gradient-to-r from-[#060010] to-transparent pointer-events-none"></div>

                {/* Right Gradient Fade */}
                <div className="absolute top-0 right-0 h-full w-20 md:w-40 z-10 bg-gradient-to-l from-[#060010] to-transparent pointer-events-none"></div>

                {/* Sliding Track */}
                <div className="flex w-max animate-infinite-scroll">
                    {/* First Set of Logos */}
                    {logos.map((logo, index) => (
                        <div key={`logo-1-${index}`} className="mx-8 md:mx-16 flex items-center justify-center min-w-[100px]">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-8 md:h-7 w-auto object-contain "
                            />
                        </div>
                    ))}

                    {/* Duplicate Set for Seamless Loop */}
                    {logos.map((logo, index) => (
                        <div key={`logo-2-${index}`} className="mx-8 md:mx-16 flex items-center justify-center min-w-[100px]">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-8 md:h-7 w-auto object-contain "
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes infinite-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .animate-infinite-scroll {
                    animation: infinite-scroll 25s linear infinite;
                }
                .hover\\:pause:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default LogoLoop;
