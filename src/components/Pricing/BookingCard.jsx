import React from 'react';

const BookingCard = () => {
    return (
        <div className="bg-[#060010] rounded-2xl border border-white/20 p-8 md:p-10 relative overflow-hidden h-full min-h-[300px]">
            <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                    <div className="flex items-center gap-4 mb-3">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150"
                                alt="Arka"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-3xl md:text-3xl text-white font-medium tracking-tight">
                            Book an intro call
                        </h3>
                    </div>

                    <p className="text-gray-400 text-lg mb-2">
                        Time to get introduced and explore how TNT can help.
                    </p>

                    <div className="flex justify-center w-full">
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors group"
                        >
                            Book a call
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="mt-auto">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-400 text-sm">Do you prefer email communication?</span>
                            <a href="mailto:arka@tagntarget.com" className="text-white hover:underline font-medium">arka@tagntarget.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;
