import React, { useEffect } from 'react';
import arrow from '../assets/images/arrow.svg'

const CollaborateButton = ({ className = '', mobile = false, variant = 'black' }) => {

    useEffect(() => {
        (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
        Cal("init", "30min", { origin: "https://app.cal.com" });
        Cal.ns["30min"]("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    }, []);

    if (mobile) {
        return (
            <div
                className={`group bg-white text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 mt-4 cursor-pointer hover:bg-gray-100 transition-colors ${className}`}
                data-cal-link="tagntargetmeet/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view"}'
            >
                Let's Collaborate
                {/* Arrow on white background -> Black arrow */}
                <img src={arrow} alt="->" className="w-4 h-4 " />
            </div>
        )
    }

    const isWhite = variant === 'white';

    // Base styles
    // Base styles
    // Updated White Variant to be Glassmorphic (Transparent Blurry) like Navbar
    const containerClasses = isWhite
        ? "bg-white/10 backdrop-blur-lg shadow-xl text-white hover:bg-white/10"
        : "bg-black text-white hover:bg-neutral-800";

    const circleClasses = isWhite
        ? "bg-white"
        : "bg-white";

    // If variant is white (now glass), circle is white -> need black arrow
    // If variant is black, circle is white -> need black arrow
    // Both now use black arrow inside white circle
    const arrowClasses = "w-4 h-4 transition-transform duration-300 group-hover:rotate-45";

    return (
        <div
            className={`${containerClasses} relative overflow-hidden group transition-all duration-300 cursor-pointer rounded-[50px] px-4 py-2 w-[190px] flex justify-between items-center hover:-translate-y-1 ${className}`}
            data-cal-link="tagntargetmeet/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view"}'
        >
            {/* Shine effect - Diagonal */}
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-[30deg] transition-all duration-700 ease-in-out group-hover:left-[200%] z-0" />

            <p className="text-sm font-medium m-0 pl-2 relative z-10">Let’s Collaborate</p>
            <div className={`h-8 w-8 ${circleClasses} rounded-full flex justify-center items-center relative z-10`}>
                <img src={arrow} alt="->" className={arrowClasses} />
            </div>
        </div>
    );
};

export default CollaborateButton;
