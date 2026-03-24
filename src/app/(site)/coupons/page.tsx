'use client';

import CouponsSection from '../../components/CouponsSection';
import Link from 'next/link';

export default function CouponsPage() {
    return (
        <div className="bg-[#fcfaf8] min-h-screen font-sans pb-20">

            {/* ── HERO BANNER ── */}
            <div className="bg-[#1A3D17] border-b-8 border-[#cc0000] text-white py-16 md:py-24 text-center relative overflow-hidden mb-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CCEE18] rounded-full -mr-64 -mt-64 opacity-5 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#cc0000] rounded-full -ml-40 -mb-40 opacity-5 pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <span className="inline-block bg-[#CCEE18] text-[#1A3D17] font-black uppercase tracking-[0.4em] text-[10px] px-6 py-2.5 rounded-full mb-6 shadow-lg">
                        Verified &amp; Updated Daily
                    </span>
                    <h1
                        className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4"
                        style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}
                    >
                        Papa John's <span className="text-[#CCEE18]">Promo Codes</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 font-bold max-w-3xl mx-auto leading-relaxed">
                        Find the latest verified <strong className="text-[#CCEE18]">Papa John's coupons</strong> and{' '}
                        <strong className="text-[#CCEE18]">pizza deals</strong> for 2026. Save on{' '}
                        <Link href="/posts/classic-pizzas" className="text-[#CCEE18] underline hover:text-white transition-colors">
                            Classic Pizzas
                        </Link>
                        ,{' '}
                        <Link href="/posts/sides" className="text-[#CCEE18] underline hover:text-white transition-colors">
                            Sides &amp; Dips
                        </Link>
                        , and full delivery orders — straight from Pakistan's #1 pizza chain. Use our exclusive{' '}
                        <Link href="/papa-johns-rewards" className="text-[#CCEE18] underline hover:text-white transition-colors">
                            Papa Rewards®
                        </Link>{' '}
                        program or apply a promo code directly at{' '}
                        <a
                            href="https://www.papajohns.com/coupons/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#CCEE18] underline hover:text-white transition-colors"
                        >
                            checkout
                        </a>{' '}
                        for instant savings on every order!
                    </p>

                    {/* Quick links */}
                    <div className="flex flex-wrap justify-center gap-3 mt-10">
                        {[
                            { label: 'View Full Menu', href: '/menus-prices' },
                            { label: 'Papa Rewards', href: '/papa-johns-rewards' },
                            { label: 'Find a Store', href: '/store-locator' },
                            { label: 'Store Hours', href: '/hours' },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="bg-white/10 hover:bg-[#CCEE18] hover:text-[#1A3D17] text-white font-black uppercase tracking-widest text-[10px] px-5 py-2 rounded-full transition-all border border-white/20 hover:border-[#CCEE18]"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── ACTUAL COUPONS SECTION (same as home page) ── */}
            <CouponsSection />
        </div>
    );
}
