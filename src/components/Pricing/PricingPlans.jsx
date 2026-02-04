import React, { useState } from 'react';

const PricingPlans = () => {
    const [billingType, setBillingType] = useState('monthly');

    const plans = {
        monthly: {
            title: "Monthly Design Retainer",
            features: [
                "Ongoing design support for any project",
                "Custom development or no-code (limits apply)",
                "Clear timeline and milestone deliverables",
                "Expert project manager & weekly async updates"
            ],
            price: "$3000",
            period: "per month",
            billing: "billed monthly"
        },
        custom: {
            title: "Custom Design Project",
            features: [
                "Dedicated designer and direct Slack access",
                "Custom development or no-code",
                "Milestone-based delivery and clear deliverables",
                "Brand & storytelling strategy"
            ],
            price: "$5000",
            period: "per month",
            billing: "billed monthly"
        }
    };

    const activePlan = plans[billingType];

    return (
        <div className="flex flex-col gap-8">
            {/* Toggle Buttons */}
            <div className="flex gap-4">
                <button
                    onClick={() => setBillingType('monthly')}
                    className={`cursor-pointer flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all border ${billingType === 'monthly'
                        ? ' border-white/50 text-white '
                        : ' border-white/10 text-gray-400 hover:border-white/20 hover:text-white'
                        }`}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                        <path d="M3 3v5h5" />
                        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                        <path d="M16 16l5 5v-5" />
                    </svg>
                    Monthly <span className="opacity-50 font-normal">$3000/mo</span>
                </button>

                <button
                    onClick={() => setBillingType('custom')}
                    className={`cursor-pointer flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all border ${billingType === 'custom'
                        ? ' border-white/50 text-white '
                        : ' border-white/10 text-gray-400 hover:border-white/20 hover:text-white'
                        }`}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    Custom <span className="opacity-50 font-normal">$5000/mo</span>
                </button>
            </div>

            {/* Card */}
            <div className="bg-[#060010] rounded-2xl border border-white/20 p-10 md:p-12 relative overflow-hidden min-h-[450px] flex flex-col">
                {/* Gradient Overlay for Premium Look */}
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent pointer-events-none" />

                <div className="relative z-10 flex-1 flex flex-col justify-between">
                    <div>
                        <h3 className="text-4xl text-gray-200 font-medium mb-12">
                            {activePlan.title}
                        </h3>

                        <div className="space-y-5 mb-12">
                            {activePlan.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-gray-500/30 flex items-center justify-center shrink-0">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-400 text-lg font-light leading-snug">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-3">
                            <span className="text-5xl font-medium text-white/90">{activePlan.price}</span>
                            <div className="flex flex-col leading-none">
                                <span className="text-gray-300 font-medium">{activePlan.period}</span>
                                <span className="text-gray-500 text-sm">{activePlan.billing}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPlans;
