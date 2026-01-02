import React from 'react';
import logo from '../assets/images/tntlogo-white.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'X',
            href: '#',
            icon: (
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            href: '#',
            icon: (
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            )
        },
        {
            name: 'Website',
            href: '#',
            icon: (
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S12 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S12 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
            )
        },
        {
            name: 'Instagram',
            href: '#',
            icon: (
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            )
        }
    ];

    const sitemapLinks = [
        { name: 'Contact us', href: '#' },
        { name: 'About us', href: '#' },
        { name: 'Work', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Pricing', href: '#' },
    ];

    const otherPageLinks = [
        
        { name: 'Terms & Conditions', href: '#' },
        { name: 'Privacy Policy', href: '#' },
    ];

    return (
        <footer className="bg-[#060010] text-gray-400 py-16 px-4 relative overflow-hidden border-t border-white/5">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10">
                {/* Column 1: Brand (Takes up 2 cols on LG) */}
                <div className="space-y-6 lg:col-span-2">
                    <img src={logo} alt="Tagntarget" className="w-40 h-auto" />
                    <p className="text-sm leading-relaxed max-w-xs">
                        Empowering businesses with innovative solutions. Let's create something amazing together.
                    </p>
                    <div className="flex gap-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/10"
                                aria-label={link.name}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Columns 2-4 Wrapper (Takes up 3 cols on LG) */}
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
                    {/* Column 2: Sitemap */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Sitemap</h3>
                        <ul className="space-y-4">
                            {sitemapLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Other Pages */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Other Pages</h3>
                        <ul className="space-y-4">
                            {otherPageLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Details */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Contact Details</h3>
                        <ul className="space-y-6 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="opacity-80 leading-relaxed">
                                    81 Rivington Street London EC2A 3AY
                                </span>
                            </li>
                            <li>
                                <a href="mailto:info@tagntarget.com" className="hover:text-white transition-colors duration-300">
                                    info@tagntarget.com
                                </a>
                            </li>
                            <li>
                                <p className="hover:text-white transition-colors duration-300">
                                    INDIA +91 6304375810
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center md:text-left">
                <p className="text-sm text-gray-500">
                    ©{currentYear} Tagntarget. All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
