import React from 'react';

const UniqueApproaches = () => {
    return (
        <section className="bg-[#060010] text-white py-24 px-4">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-7 flex flex-col gap-8 h-full justify-between">
                    <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
                        Our unique approaches <br /> to build your dream
                    </h2>

                    {/* Testimonial Card */}
                    <div className="bg-emerald-900/10 border border-emerald-500/10 px-10 py-12 rounded-3xl relative backdrop-blur-sm hover:border-emerald-500/20 transition-colors duration-300 group">


                        <p className="mt-8 text-gray-300 relative z-10 leading-relaxed text-lg group-hover:text-white transition-colors">
                            "Hired them for a product launch and loved their creative visuals and strategy. A bit slow during busy times, but the end result was worth it."
                        </p>

                        <div className="mt-8 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                                    alt="Michael Richards"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Michael Richards</h4>
                                <p className="text-sm text-gray-400">Founder of TypeStack</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Grid */}
                <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Item 1: Image */}
                    <div className="rounded-3xl overflow-hidden aspect-square relative group border border-white/5">
                        <img
                            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
                            alt="Working at desk"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                    </div>

                    {/* Item 2: Stat Card (Yellow) */}
                    <div className="bg-yellow-900/10 border border-yellow-500/10 backdrop-blur-sm rounded-3xl p-8 flex flex-col justify-center items-center text-center aspect-square hover:border-yellow-500/30 transition-all duration-300 hover:-translate-y-1">
                        <h3 className="text-4xl font-bold text-yellow-500 mb-3">15+</h3>
                        <p className="text-gray-300 font-medium">Years of Experience</p>
                    </div>

                    {/* Item 3: Stat Card (Blue) */}
                    <div className="bg-blue-900/10 border border-blue-500/10 backdrop-blur-sm rounded-3xl p-8 flex flex-col justify-center items-center text-center aspect-square hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
                        <h3 className="text-4xl font-bold text-blue-500 mb-3">100+</h3>
                        <p className="text-gray-300 font-medium">Happy Clients</p>
                    </div>

                    {/* Item 4: Image */}
                    <div className="rounded-3xl overflow-hidden aspect-square relative group border border-white/5">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
                            alt="Team meeting"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UniqueApproaches;
