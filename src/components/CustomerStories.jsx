import React from 'react';

const CustomerStories = () => {
    return (
        <section className="bg-[#060010] text-white py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <span className="text-blue-400 font-medium tracking-wider uppercase mb-3 block">Stories</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        What our satisfied customers <br className="hidden md:block" />are saying about us
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">

                    {/* Card 1: Large Dark Card with Image Background (Top Left) */}
                    <div className="group md:col-span-2 relative rounded-2xl overflow-hidden bg-gray-900 border border-white/10 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
                            alt="Customer Story"
                            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#060010] via-[#060010]/50 to-transparent"></div>
                        <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
                            <span className="text-sm font-medium text-purple-300 tracking-wide">Customer stories</span>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-medium mb-6 leading-snug text-white">
                                    "Tagtarget expertise transformed my vision into success with creativity, precision, and a deep understanding of my goals."
                                </h3>
                                <div>
                                    <p className="font-bold text-sm text-white">Sarah Mitchell</p>
                                    <p className="text-gray-400 text-xs">Founder of Chipsland</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Stat Card (Top Right) */}
                    <div className="group md:col-span-1 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col justify-between hover:shadow-2xl hover:shadow-purple-500/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm ">
                        <span className="text-sm font-medium text-purple-300 tracking-wide opacity-80">Facts & numbers</span>
                        <div>
                            <h3 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">91%</h3>
                            <p className="text-xl font-medium text-gray-300 leading-snug">
                                "clients recommend our design services."
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Dark Card with Small Image (Bottom Left) */}
                    <div className="group md:col-span-1 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:shadow-2xl hover:shadow-purple-500/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                        <div className="mb-6">
                            <span className="text-sm font-medium text-purple-300 tracking-wide block mb-4">Customer stories</span>
                            <h3 className="text-xl font-medium leading-relaxed text-gray-200">
                                Their creativity and attention to detail transformed our brand completely!
                            </h3>
                        </div>
                        <div className="h-48 w-full rounded-2xl overflow-hidden relative border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?q=80&w=2670&auto=format&fit=crop"
                                alt="Project Detail"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Card 4: Quote Card (Bottom Right) */}
                    <div className="group md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col justify-center hover:shadow-2xl hover:shadow-purple-500/10 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm">
                        <span className="text-sm font-medium text-purple-300 tracking-wide mb-auto">Customer stories</span>
                        <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed max-w-3xl my-10">
                            "Tangtarget Design Agency brought our ideas to life with exceptional creativity and precision, exceeding expectations."
                        </blockquote>
                        <div className="mt-auto">
                            <p className="font-bold text-sm text-white">Sarah Mitchell</p>
                            <p className="text-gray-400 text-xs">Marketing Head at TalentConnect</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CustomerStories;
