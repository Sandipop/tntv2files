import React, { useEffect } from 'react';
import arrow from '../assets/images/arrow.svg'; // Reuse arrow if available, else omit

const CTA = () => {

    useEffect(() => {
        (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
        Cal("init", "15min", { origin: "https://app.cal.com" });
        Cal.ns["15min"]("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    }, []);

    return (
        <section className="bg-[#060010] py-24 px-4 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="relative rounded-3xl overflow-hidden p-[1px] group">
                    {/* Border Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-30 group-hover:opacity-60 transition-opacity duration-700 block"></div>

                    {/* Card Content */}
                    <div className="bg-[#0A051A] bg-opacity-90 backdrop-blur-xl relative rounded-3xl px-8 py-20 md:py-28 text-center overlow-hidden">

                        {/* Background Splashes */}
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>

                        {/* Title */}
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 leading-tight relative z-10 tracking-tight">
                            Let's build something <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">awesome together!</span>
                        </h2>

                        {/* Button */}
                        <div className="relative z-10">
                            <button
                                data-cal-link="tagntargetmeet/15min"
                                data-cal-namespace="15min"
                                data-cal-config='{"layout":"month_view"}'
                                className="bg-white text-black px-8 py-4 rounded-full font-bold text-md cursor-pointer hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(255,255,255,0.4)] flex items-center gap-3 mx-auto group/btn">
                                Let's craft together
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
