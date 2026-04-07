'use client';

import Link from 'next/link';
import { Mail, ChevronDown, Menu, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
    const [legalOpen, setLegalOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
            <div className="w-full bg-[#1A3D17] text-white py-4 border-b-2 border-green-900 shadow-lg px-4 md:px-0">
                <div className="container mx-auto flex items-center justify-between gap-6">

                    {/* Brand Logo */}
                    <Link href="/" className="flex-shrink-0 group">
                        <div className="flex flex-col items-start leading-none">
                            <h1
                                className="text-xl md:text-3xl font-black italic tracking-tighter text-white uppercase"
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
                                    className="absolute top-full right-0 mt-3 bg-[#1A3D17] border border-green-800 rounded-lg shadow-2xl p-2 min-w-[240px] z-60"
                                >
                                    {legalLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setLegalOpen(false)}
                                            style={linkStyle}
                                            className="block px-6 py-3 text-[12px] font-black uppercase tracking-[0.05em] text-white whitespace-nowrap transition-all duration-200 hover:text-[#CCEE18] hover:bg-[#1e5019] rounded-md"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </nav>

                    {/* Right Action Buttons */}
                    <div className="flex items-center gap-2 md:gap-4">
                        {/* Contact Button (Responsive hidden label on mobile) */}
                        <Link
                            href="/contact"
                            className="bg-[#CCEE18] hover:bg-white text-[#1A3D17] font-black py-2 px-4 md:py-2.5 md:px-6 rounded-full flex items-center gap-2 transition-all transform hover:scale-105 shadow-xl uppercase text-[10px] md:text-sm border-2 border-[#CCEE18] hover:border-white"
                        >
                            <Mail size={16} strokeWidth={3} />
                            <span className="hidden sm:inline">Contact Us</span>
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 text-white hover:text-[#CCEE18] transition-colors"
                        >
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* 2. MOBILE MENU DROPDOWN (Shown on click) */}
            {mobileMenuOpen && (
                <div className="lg:hidden w-full bg-[#1A3D17] border-b-2 border-green-900 pb-6 animate-in slide-in-from-top duration-300">
                    <nav className="flex flex-col px-4 pt-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="py-4 text-sm font-black uppercase tracking-widest text-white border-b border-green-800/50 flex items-center justify-between"
                                style={linkStyle}
                            >
                                {link.name}
                                <ArrowRight size={14} className="text-[#CCEE18]" />
                            </Link>
                        ))}
                        {/* Mobile Legal Links Section */}
                        <div className="mt-4">
                             <p className="text-[10px] font-black text-green-700 uppercase tracking-[0.3em] mb-4 ml-1">Legal Information</p>
                             <div className="flex flex-wrap gap-3">
                                {legalLinks.map((link) => (
                                    <Link 
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="bg-green-900/30 text-[10px] font-black uppercase text-gray-400 px-4 py-2 rounded-full"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                             </div>
                        </div>
                    </nav>
                </div>
            )}

            {/* 3. RED CATEGORY HEADER (Scrollable on mobile) */}
            <div className="w-full bg-[#cc0000] border-b-4 border-[#8b0000] py-2">
                <div className="max-w-[1280px] mx-auto px-4 overflow-x-auto no-scrollbar">
                    <nav className="flex items-center lg:justify-center gap-6 whitespace-nowrap min-w-max h-10 pr-10 lg:pr-0">
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

const ArrowRight = ({ size, className }: { size: number, className?: string }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);
