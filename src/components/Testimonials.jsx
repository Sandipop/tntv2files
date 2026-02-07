import React, { useState, useEffect } from 'react';
import client1 from '../assets/images/client1-img.webp'
import client2 from '../assets/images/client2-img.webp'
import client4 from '../assets/images/client4-img.png'
import client6 from '../assets/images/client6-img.png'
import client7 from '../assets/images/client7-img.png'

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            quote: "Focusing on UX that boosted sales.",
            name: "Vijay Roy",
            role: "Founder of Loomerang",
            image: client1,
            text: "They designed our e-commerce platform, focusing on UX that boosted sales. Great team, very responsive, and flexible. Highly recommend!"
        },
        {
            id: 2,
            quote: "Nailed our brand redesign, capturing our vision perfectly.",
            name: "Navita Pareek",
            role: "Founder of Rainforest AI",
            image: client2,
            text: "They nailed our brand redesign, capturing our vision perfectly. Their work on our logo and website was fantastic. Truly creative and detail-oriented!"
        },
        {
            id: 3,
            quote: "Creating a product that both our users and team love.",
            name: "Shaharyar Shamshi",
            role: "Founder of HelioExpect",
            image: client7,
            text: "The team revamped our UI/UX, creating a product that both our users and team love. Great communication and execution throughout the project!"
        },
        {
            id: 4,
            quote: "Exceeded our expectations with fresh and modern website design.",
            name: "Dainel Bunting",
            role: "Founder of Howzat",
            image: client4,
            text: "This agency exceeded our expectations with fresh and modern website design. They really understood our brand and delivered on time."
        },
        {
            id: 5,
            quote: "Loved their creative visuals and strategy.",
            name: "David Wilson",
            role: "Product Manager, Enterprise Co",
            image: client6,
            text: "Hired them for a product launch and loved their creative visuals and strategy. A bit slow during busy times, but the end result was worth it."
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Auto-play
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-[#060010] text-white py-24 px-4 overflow-hidden relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-">
                    <span className="text-blue-400 font-medium tracking-wider uppercase mb-3 block">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        What People Are Saying
                    </h2>
                </div>

                <div className="relative flex items-center justify-center">
                    {/* Previous Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 z-20 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 transition-all backdrop-blur-sm hidden md:block"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 z-20 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 transition-all backdrop-blur-sm hidden md:block"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                    {/* Carousel Container */}
                    <div className="w-full max-w-5xl h-[400px] md:h-[350px] relative perspective-1000">
                        {testimonials.map((testimonial, index) => {
                            // Calculate position relative to current index
                            let position = 'hidden';
                            if (index === currentIndex) {
                                position = 'active';
                            } else if (index === (currentIndex - 1 + testimonials.length) % testimonials.length) {
                                position = 'prev';
                            } else if (index === (currentIndex + 1) % testimonials.length) {
                                position = 'next';
                            }

                            // Base styles
                            const baseStyles = "absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out px-4";

                            // Transform styles based on position
                            let transformStyles = "";
                            let opacityStyles = "opacity-0 pointer-events-none";

                            if (position === 'active') {
                                transformStyles = "translate-x-0 scale-100 z-10";
                                opacityStyles = "opacity-100 pointer-events-auto";
                            } else if (position === 'prev') {
                                transformStyles = "-translate-x-full md:-translate-x-[60%] scale-90 z-0 blur-[2px]";
                                opacityStyles = "opacity-10 pointer-events-none";
                            } else if (position === 'next') {
                                transformStyles = "translate-x-full md:translate-x-[60%] scale-90 z-0 blur-[2px]";
                                opacityStyles = "opacity-10 pointer-events-none";
                            }

                            return (
                                <div
                                    key={testimonial.id}
                                    className={`${baseStyles} ${transformStyles} ${opacityStyles} flex justify-center items-center`}
                                >
                                    <div className="bg-white/5 border border-white/20 backdrop-blur-md p-8 md:p-12 rounded-2xl w-full max-w-3xl flex h-full flex-col justify-between relative group hover:bg-white/10 transition-colors">

                                        <blockquote className="relative z-10 text-xl md:text-2xl font-medium leading-relaxed">
                                            "{testimonial.quote}"
                                        </blockquote>

                                        <p className="relative z-10 text-gray-400 line-clamp-3 mb-12">
                                            {testimonial.text}
                                        </p>

                                        <div className="flex items-center gap-4 relative z-10">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/50"
                                            />
                                            <div>
                                                <h4 className="font-bold text-white">{testimonial.name}</h4>
                                                <p className="text-sm text-blue-300">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Dots Pagination */}
                <div className="flex justify-center gap-2 mt-10">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? "bg-blue-500 w-8"
                                : "bg-white/20 hover:bg-white/40"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
