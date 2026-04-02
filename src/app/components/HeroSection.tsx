'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HeroSection() {
    const [mounted, setMounted] = useState(false);
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        setMounted(true);
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        setCurrentDate(new Date().toLocaleDateString('en-US', options));
    }, []);

    return (
        <section className="relative  w-full  h-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-background.jpeg"
                    alt="Papa Johns Hero Background"
                    fill
                    priority
                    className="object-cover object-center brightness-[0.6]"
                />
                {/* Overlay for better readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A3D17]/60 via-transparent to-[#1A3D17]/80 pointer-events-none"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center text-white mt-12">

                {/* Dynamic Date Button */}
                <div
                    className="mb-8 inline-flex items-center gap-2 bg-[#CCEE18] text-[#1A3D17] font-black uppercase tracking-[0.15em] text-xs md:text-sm py-2 px-6 rounded-full shadow-[0_0_20px_rgba(204,238,24,0.3)] transition-all hover:scale-105 cursor-default"
                >
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
                    <span>UPDATED AT: {mounted ? currentDate : '...'}</span>
                </div>

                {/* Main Heading */}
                <h1
                    className="text-3xl md:text-5xl lg:text-6xl font-black italic tracking-tighter uppercase mb-4"
                    style={{
                        fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif',
                        textShadow: '3px 3px 0px rgba(0,0,0,0.8), 6px 6px 20px rgba(0,0,0,0.5)'
                    }}
                >
                    Papa John’s Menu Deals<br />
                    with Prices <span className="text-[#CCEE18]">(Updated 2026)</span>
                </h1>

                {/* Content Paragraph — SEO Optimized */}
                <p className="text-base md:text-lg lg:text-xl font-bold mb-8 max-w-4xl leading-relaxed text-gray-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Welcome to the ultimate guide for <strong>Papa John's menu deals, promo codes, and prices in USA for 2026</strong>. Whether you're searching for{' '}
                    <Link href="/posts/best-pizza-delivery-near-me" className="text-[#CCEE18] underline font-bold hover:text-white transition-colors">Papa John's pizza delivery near you</Link>,
                    {' '}looking to save with verified{' '}
                    <Link href="/coupons" className="text-[#CCEE18] underline font-bold hover:text-white transition-colors">Papa Johns promo codes</Link>,
                    {' '}or exploring a fresh{' '}
                    <Link href="/menus-prices" className="text-[#CCEE18] underline font-bold hover:text-white transition-colors">Papa John's full menu with prices</Link>
                    {' '}— you're in the right place. Earn free food every time you order with{' '}
                    <Link href="/papa-johns-rewards" className="text-[#CCEE18] underline font-bold hover:text-white transition-colors">Papa Rewards®</Link>,
                    {' '}discover our crowd-favorite{' '}
                    <Link href="/posts/classic-pizzas" className="text-[#CCEE18] underline font-bold hover:text-white transition-colors">Classic Pizzas</Link>
                    {' '}and new{' '}
                    <Link href="/posts/new-papadias-flavors-2026" className="text-[#CCEE18] underline font-bold hover:text-white transition-colors">Papadias Flavors 2026</Link>,
                    {' '}or locate your nearest branch instantly on the{' '}
                    <Link href="/store-locator" className="text-[#CCEE18] underline font-bold hover:text-white transition-colors">Papa John's Store Locator</Link>.
                    {' '}With{' '}
                    <a href="https://www.papajohns.com/" target="_blank" rel="noopener noreferrer" className="text-[#CCEE18] underline font-bold hover:text-white transition-colors">Better Ingredients. Better Pizza.®</a>
                    {' '}as our promise, every bite is a special occasion.
                </p>

                {/* Two Large Buttons */}
                <div className="flex flex-col pb-10 sm:flex-row gap-6 w-full justify-center items-center">
                    <Link
                        href="/store-locator"
                        className="w-full sm:w-auto text-center bg-[#cc0000] hover:bg-[#990000] text-white font-black py-4 px-10 rounded-full text-sm md:text-lg uppercase tracking-wider transition-all transform hover:-translate-y-1 shadow-[0_8px_20px_rgba(204,0,0,0.4)] hover:shadow-[0_12px_25px_rgba(204,0,0,0.6)] border-2 border-transparent hover:border-white"
                        style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}
                    >
                        Find Papa Johns Near You
                    </Link>

                    <Link
                        href="/menus-prices"
                        className="w-full sm:w-auto text-center bg-[#CCEE18] hover:bg-white text-[#1A3D17] font-black py-4 px-10 rounded-full text-sm md:text-lg uppercase tracking-wider transition-all transform hover:-translate-y-1 shadow-[0_8px_20px_rgba(204,238,24,0.3)] hover:shadow-[0_12px_25px_rgba(204,238,24,0.5)] border-2 border-transparent hover:border-[#1A3D17]"
                        style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}
                    >
                        View Full Menu
                    </Link>
                </div>

            </div>
        </section>
    );
}
