import React, { useState, useEffect } from 'react';
import CollaborateButton from './CollaborateButton';
import logo from '../assets/images/tntlogo-white.png'
import mobileLogo from '../assets/images/tntlogo_mobile.png'


const Navbar2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Work', href: '/work' },
        { name: 'Services', href: '/services' },
        { name: 'About us', href: '/aboutus' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Courses', href: '/courses' }
    ];

    return (
        <>
            <nav
                className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out
                ${scrolled ? 'w-[95%] lg:w-[60%] py-3 px-5 top-3' : 'w-[95%] lg:w-[60%] py-3 px-5 top-3 md:top-6'}
                rounded-full flex justify-between items-center
                bg-white/5 backdrop-blur-2xl border border-white/5 shadow-lg group hover:bg-white/10`}
            >
                {/* Logo */}
                <a href="/" className="shrink-0 hover:opacity-100 transition-opacity">
                    <img src={logo} alt="TNT Logo" className="hidden md:block w-32 object-contain" />
                    <img src={mobileLogo} alt="TNT Logo" className="block md:hidden w-10 object-contain" />
                </a>

                {/* Desktop Navigation - Clean & Simple */}
                <div className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-white hover:text-white transition-all duration-300 relative group/link"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover/link:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    {/* Desktop Collaborate Button */}
                    <div className="hidden xl:block transform hover: transition-transform duration-300">
                        <CollaborateButton className="" />
                    </div>

                    {/* Hamburger Icon */}
                    <button
                        className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer z-50"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Sibling to Nav so it can be truly full screen */}
            {/* We use z-40 to sit BEHIND the z-50 navbar pill */}
            <div className={`fixed inset-0 bg-black/95 backdrop-blur-3xl z-40 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center gap-8
                ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
            >
                {navItems.map((item, index) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="text-2xl font-light text-white/80 hover:text-white hover:scale-110 transition-all duration-300"
                        style={{ transitionDelay: `${index * 50}ms` }}
                        onClick={() => setIsOpen(false)}
                    >
                        {item.name}
                    </a>
                ))}
                <div className="mt-8 scale-110">
                    <CollaborateButton mobile />
                </div>
            </div>
        </>
    );
};

export default Navbar2;
