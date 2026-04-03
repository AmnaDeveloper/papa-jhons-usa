'use client';

import Link from 'next/link';
import { Mail, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
    const [legalOpen, setLegalOpen] = useState(false);
    const legalRef = useRef<HTMLDivElement>(null);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Menu & Prices', href: '/menus-prices' },
        { name: 'Store Locator', href: '/store-locator' },
        { name: 'Meal Planner', href: '/meal-planner' },
        { name: 'All Blogs', href: '/posts' },
        { name: 'Hours', href: '/hours' },
        { name: 'Contact', href: '/contact' },
    ];

    const legalLinks = [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms & Condition', href: '/terms' },
        { name: 'Cookies', href: '/cookies' },
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (legalRef.current && !legalRef.current.contains(event.target as Node)) {
                setLegalOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const linkStyle = {
        fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif',
    };

    return (
        <header className="sticky top-0 z-50 w-full shadow-2xl font-sans">
            {/* 1. PREMIUM TOP HEADER (Green) */}
            <div className="w-full bg-[#1A3D17] text-white py-4 border-b-2 border-green-900 shadow-lg">
                <div className="container mx-auto px-4 flex items-center justify-between gap-6">

                    {/* Brand Logo */}
                    <Link href="/" className="flex-shrink-0 group">
                        <div className="flex flex-col items-start leading-none">
                            <h1
                                className="text-2xl md:text-3xl font-black italic tracking-tighter text-white uppercase"
                                style={{ ...linkStyle, textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
                            >
                                <span className="text-[#CCEE18]">PAPA</span> JOHNS
                            </h1>

                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center justify-center gap-x-3 xl:gap-x-5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[11px] xl:text-[12px] font-black uppercase tracking-wider hover:text-[#CCEE18] transition-all pb-1 border-b-2 border-transparent hover:border-[#CDEE17] whitespace-nowrap"
                                style={linkStyle}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Legal Pages Dropdown */}
                        <div className="relative" ref={legalRef}>
                            <button
                                onClick={() => setLegalOpen(!legalOpen)}
                                className="text-[11px] xl:text-[12px] font-black uppercase tracking-wider hover:text-[#CCEE18] transition-all pb-1 border-b-2 border-transparent hover:border-[#CDEE17] whitespace-nowrap flex items-center gap-1"
                                style={linkStyle}
                            >
                                Legal Pages
                                <ChevronDown
                                    size={12}
                                    strokeWidth={3}
                                    className={`transition-transform duration-200 ${legalOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            {/* Dropdown Menu */}
                            {legalOpen && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '100%',
                                        right: 0,
                                        marginTop: '12px',
                                        backgroundColor: '#1A3D17',
                                        border: '1px solid #2d5a27',
                                        borderRadius: '8px',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                                        padding: '8px 0',
                                        minWidth: '240px',
                                        zIndex: 60,
                                    }}
                                >
                                    {legalLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setLegalOpen(false)}
                                            style={linkStyle}
                                            className="block px-6 py-3 text-[12px] font-black uppercase tracking-[0.05em] text-white whitespace-nowrap transition-all duration-200 hover:text-[#CCEE18] hover:bg-[#1e5019]"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </nav>

                    {/* Contact Button */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/contact"
                            className="bg-[#CCEE18] hover:bg-white text-[#1A3D17] font-black py-2.5 px-6 rounded-full flex items-center gap-2 transition-all transform hover:scale-105 shadow-xl uppercase text-xs md:text-sm border-2 border-[#CCEE18] hover:border-white"
                        >
                            <Mail size={16} strokeWidth={3} />
                            <span>Contact Us</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* 2. RED CATEGORY HEADER */}
            <div className="w-full bg-[#cc0000] border-b-4 border-[#8b0000] py-2">
                <div className="max-w-[1280px] mx-auto px-4 overflow-x-auto">
                    <nav className="flex items-center justify-center gap-6 whitespace-nowrap min-w-max h-10">
                        {[
                            { name: "Papa's Rewards", href: '/papa-johns-rewards' },
                            { name: 'Super Loaded', href: '/posts/super-loaded' },
                            { name: 'Classic Pizzas', href: '/posts/classic-pizzas' },
                            { name: 'Sides', href: '/posts/sides' },
                            { name: 'Dips', href: '/menus-prices/dips' },
                            { name: 'Pastas', href: '/menus-prices/pastas' },
                            { name: 'Drinks', href: '/menus-prices/drinks' },
                            { name: 'Junior', href: '/menus-prices/junior' },
                            { name: 'Desserts', href: '/posts/papa-johns-desserts' },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="hover:text-[#CCEE18] transition-all pb-1 text-[11px] font-black uppercase tracking-[0.05em] text-white whitespace-nowrap border-b-2 border-transparent"
                                style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}
