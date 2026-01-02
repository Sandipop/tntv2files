import React, { useState, useEffect } from 'react';
import CollaborateButton from './CollaborateButton';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');
    const [hoveredLink, setHoveredLink] = useState(null);

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
        <nav
            className={`fixed top-4 left-[10%] w-[80%] z-50 transition-all duration-300 rounded-[50px]
            ${scrolled ? 'py-3' : 'py-3'}
            flex justify-between items-center px-4 md:px-6 flex-wrap
            bg-white/1 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]`}
            data-aos="fade-down"
            data-aos-delay="50"
        >
            {/* Logo */}
            <a href="/" className="shrink-0">
                <img src="/assets/tntlogo.png" alt="TNT Logo" className="hidden md:block w-40 object-contain" />
                <img src="/assets/tntlogo_mobile.png" alt="TNT Logo" className="block md:hidden w-12 object-contain" />
            </a>

            {/* Hamburger Icon */}
            <button
                className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer z-50 group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center items-center h-[50px] bg-[#1B1D1E14] rounded-[30px] relative px-2">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        onMouseEnter={() => setHoveredLink(item.name)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className={`relative z-10 px-8 py-2 text-[15px] font-semibold transition-colors duration-300 rounded-[50px]
                        ${hoveredLink === item.name || (!hoveredLink && activeLink === item.name) ? 'text-black' : 'text-[#e0e0e0] hover:text-white'}`}
                    >
                        {item.name}
                        {/* Hover/Active Pill Background */}
                        {(hoveredLink === item.name || (!hoveredLink && activeLink === item.name)) && (
                            <span className="absolute inset-0 bg-white rounded-[50px] -z-10 transition-all duration-300 ease-out layout-id-pill" />
                        )}
                    </a>
                ))}
            </div>

            {/* CTA Button */}
            <CollaborateButton className="hidden lg:flex" />

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-[80px] left-0 w-full bg-[#141414]/95 backdrop-blur-xl rounded-[20px] p-8 flex flex-col items-center gap-6 md:hidden border border-white/10 shadow-2xl animate-in slide-in-from-top-5">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                    <CollaborateButton mobile />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
