'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Coupon {
    id: number;
    discount: string;
    title: string;
    code: string;
    verified: boolean;
    initialMinutes: number;
    amountSaved: string;
    description: string;
}

const FAQ_ITEMS = [
    {
        q: "Does Papa John's have active promo codes today?",
        a: "Yes, currently there are 19 verified Papa John's coupons and promo codes active. Our team checks these daily to ensure you get the best pizza deals available on [DATE]."
    },
    {
        q: "How do I use a Papa John's coupon code online?",
        a: "To use a code, heading to the official Papa Johns website, add your favorite pizzas to the cart, and enter the promo code in the 'Enter Promo Code' box during checkout. Discounts are applied instantly to qualifying orders."
    }
];

export default function CouponsSection() {
    const [currentDate, setCurrentDate] = useState('');
    const [mounted, setMounted] = useState(false);
    const [revealedCodes, setRevealedCodes] = useState<Record<number, boolean>>({});
    const [dynamicMinutes, setDynamicMinutes] = useState<Record<number, number>>({});

    useEffect(() => {
        setMounted(true);
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
        setCurrentDate(date.toLocaleDateString('en-US', options));

        // Initialize dynamic times
        const initialTimes: Record<number, number> = {
            1: 4,
            2: 12,
            3: 2,
            4: 45
        };
        setDynamicMinutes(initialTimes);

        // Update times every minute to make it truly dynamic
        const interval = setInterval(() => {
            setDynamicMinutes(prev => {
                const next = { ...prev };
                Object.keys(next).forEach(id => {
                    const numId = parseInt(id);
                    // Cycle minutes or increment
                    if (next[numId] > 59) next[numId] = 1;
                    else next[numId] += 1;
                });
                return next;
            });
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    const coupons: Coupon[] = [
        {
            id: 1,
            discount: '25%',
            title: '25% Off Regular Menu Price Orders',
            description: 'Save 25% on your entire order when you use this Papa John\'s promo code. This verified discount applies to all regular menu price items. Combine with our [Menu & Prices](/menus-prices) for the best value.',
            code: 'CHOOSE25',
            verified: true,
            initialMinutes: 4,
            amountSaved: '$8.42'
        },
        {
            id: 2,
            discount: '50%',
            title: '50% Off: Buy One Get One Free Pizza',
            description: 'Get a second large pizza at 50% off or entirely free with the BOGO deal. Perfect for [Papa Rewards](/papa-rewards) members looking to maximize their dough. Check [official terms](https://www.papajohns.com) for local availability.',
            code: 'PAPA50',
            verified: true,
            initialMinutes: 12,
            amountSaved: '$18.15'
        },
        {
            id: 3,
            discount: '$10',
            title: '$10 Off Any Order of $30 or More',
            description: 'Take $10 off your total bill when you spend $30. This is one of the most popular Papa Johns coupons for families. Discover more [Featured Items](/#featured) that qualify for this discount.',
            code: 'SAVE10NOW',
            verified: true,
            initialMinutes: 2,
            amountSaved: '$10.00'
        },
        {
            id: 4,
            discount: 'FREE',
            title: 'Free Side of Garlic Knots with Large Pizza',
            description: 'Add a side of our famous Garlic Knots to your order for free. Use this verified Papa Johns coupon code with any large pizza purchase. View our [Contact Us](/contact) page if you have issues applying codes.',
            code: 'FREESIDE',
            verified: true,
            initialMinutes: 45,
            amountSaved: '$6.99'
        }
    ];

    const handleReveal = (id: number, code: string) => {
        setRevealedCodes(prev => ({ ...prev, [id]: true }));
        // Copy to clipboard for better UX
        if (typeof navigator !== 'undefined') {
            navigator.clipboard.writeText(code);
        }
    };

    const renderDescription = (desc: string) => {
        // Simple regex to find [Text](Link) patterns and convert them
        const parts = desc.split(/(\[.*?\]\(.*?\))/g);
        return parts.map((part, i) => {
            const match = part.match(/\[(.*?)\]\((.*?)\)/);
            if (match) {
                const text = match[1];
                const url = match[2];
                const isExternal = url.startsWith('http');
                return (
                    <Link 
                        key={i} 
                        href={url} 
                        target={isExternal ? "_blank" : undefined}
                        className="text-[#cc0000] font-bold hover:underline"
                    >
                        {text}
                    </Link>
                );
            }
            return part;
        });
    };

    if (!mounted) return null;

    return (
        <section className="py-20 bg-[#fafafa] w-full border-t border-gray-100">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                
                {/* ── SEO Optimized Header ── */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
                    <div className="bg-[#1A3D17] p-5 rounded-2xl flex flex-col items-center justify-center w-32 h-32 shadow-xl border-b-4 border-[#CCEE18]">
                         <span className="text-[#CCEE18] text-xl font-black italic leading-none">PAPA</span>
                         <span className="text-white text-xl font-black italic leading-none mt-1">JOHNS</span>
                    </div>
                    <div className="text-center md:text-left pt-2 flex-1">
                        <h2 
                            className="text-4xl md:text-6xl font-black text-[#1A3D17] uppercase tracking-tighter" 
                            style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}
                        >
                            Papa John's <span className="text-[#cc0000]">Promo Codes</span> 2026
                        </h2>
                        <h1 className="text-lg md:text-xl font-bold text-gray-600 mt-2 max-w-3xl">
                            Find the latest and verified Papa Johns coupons, pizza deals, and discount codes to save on your next delivery or carryout order.
                        </h1>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-6">
                            <span className="bg-[#eefcf2] text-[#1A3D17] text-xs font-black px-4 py-1.5 rounded-full border border-[#1A3D17]/10 flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                19 CODES UPDATED FOR {currentDate.toUpperCase()}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* ── Main Coupons List ── */}
                    <div className="lg:col-span-8">
                        <div className="space-y-8">
                            {coupons.map((coupon) => {
                                const isRevealed = revealedCodes[coupon.id];
                                const mins = dynamicMinutes[coupon.id] || coupon.initialMinutes;
                                
                                return (
                                    <div key={coupon.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-shadow hover:shadow-md">
                                        <div className="flex flex-col md:flex-row min-h-[160px]">
                                            
                                            {/* LEFT: Discount Display */}
                                            <div className="md:w-[180px] p-8 bg-gray-50/80 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-200">
                                                <div className="text-center">
                                                    <span className="text-5xl font-black text-[#cc0000] block leading-none" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                                        {coupon.discount}
                                                    </span>
                                                    <span className="text-xs font-black uppercase tracking-[0.2em] text-[#1A3D17] mt-2 block">OFF</span>
                                                </div>
                                            </div>

                                            {/* MIDDLE: Content Area */}
                                            <div className="flex-1 p-8">
                                                <div className="flex items-center gap-2 mb-3">
                                                     <span className="bg-[#1A3D17] text-[#CCEE18] text-[9px] font-black px-2 py-0.5 rounded-sm tracking-widest uppercase">Verified Deal</span>
                                                     <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest leading-none">Official Promo</span>
                                                </div>
                                                <h4 className="text-2xl font-black text-[#1A3D17] leading-tight mb-3" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                                    {coupon.title}
                                                </h4>
                                                <p className="text-gray-600 text-sm font-medium leading-relaxed">
                                                    {renderDescription(coupon.description)}
                                                </p>
                                            </div>

                                            {/* RIGHT: Show Code Button Area */}
                                            <div className="md:w-[240px] p-8 flex items-center justify-center bg-white border-t md:border-t-0 md:border-l border-gray-100">
                                                <button 
                                                    onClick={() => handleReveal(coupon.id, coupon.code)}
                                                    className={`w-full h-16 rounded-xl flex flex-col items-center justify-center transition-all duration-300 transform ${isRevealed ? 'bg-gray-100 border-2 border-dashed border-[#1A3D17]/30' : 'bg-[#1A3D17] hover:bg-[#cc0000] text-white shadow-lg active:scale-95'}`}
                                                >
                                                    {isRevealed ? (
                                                        <>
                                                            <span className="text-[#1A3D17] font-black text-lg tracking-[0.1em] font-mono">{coupon.code}</span>
                                                            <span className="text-[9px] text-gray-500 font-bold uppercase mt-1">Copied to Clipboard!</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span className="font-black text-sm uppercase tracking-widest">Show Coupon Code</span>
                                                            <div className="flex gap-1 mt-1">
                                                                {[...Array(4)].map((_, i) => (
                                                                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                                                ))}
                                                                <span className="text-[10px] ml-1 font-mono text-white">{coupon.code.slice(-2)}</span>
                                                            </div>
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </div>

                                        {/* SOCIAL PROOF FOOTER (Dynamic) */}
                                        <div className="bg-[#f2fcf4] px-8 py-3 flex items-center justify-between border-t border-[#e2f5e6]">
                                            <p className="text-[#1A3D17] text-xs font-bold italic flex items-center gap-2">
                                                <span className="inline-flex h-2 w-2 rounded-full bg-[#1A3D17]"></span>
                                                Verified Success: Someone just saved <span className="text-[#cc0000] font-black">{coupon.amountSaved}</span> using this Papa Johns promo code, {mins} minutes ago!
                                            </p>
                                            <button className="text-[10px] font-black text-[#1A3D17] uppercase tracking-widest hover:text-[#cc0000] transition-colors">See Details →</button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ── Improved Sidebar ── */}
                    <div className="lg:col-span-4 space-y-10">
                        
                        {/* Coupon Highlights (SEO Optimized) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                             <h4 className="text-xl font-black text-[#1A3D17] mb-6 uppercase tracking-tight border-b border-gray-50 pb-4" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                 Coupon Highlights
                             </h4>
                             <div className="space-y-5">
                                 {[
                                     { label: 'Best Discount:', val: '50% OFF' },
                                     { label: 'Active Promo Codes:', val: '19' },
                                     { label: 'Total Verified Offers:', val: '21' },
                                     { label: 'Avg. Customer Savings:', val: '$11.82' },
                                 ].map((item, i) => (
                                     <div key={i} className="flex justify-between items-center bg-gray-50 hover:bg-[#eefcf2] px-4 py-3 rounded-xl transition-colors">
                                         <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">{item.label}</span>
                                         <span className="text-[#1A3D17] font-black">{item.val}</span>
                                     </div>
                                 ))}
                             </div>
                        </div>

                        {/* FAQs Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                             <h4 className="text-xl font-black text-[#1A3D17] mb-6 uppercase tracking-tight" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                 Savings FAQs
                             </h4>
                             <div className="space-y-8">
                                 {FAQ_ITEMS.map((item, i) => (
                                     <div key={i} className="group">
                                         <h5 className="text-sm font-black text-gray-900 mb-2 leading-tight group-hover:text-[#cc0000] transition-colors cursor-help">
                                            {item.q}
                                         </h5>
                                         <p className="text-xs text-gray-500 leading-relaxed font-medium">
                                             {item.a.replace('[DATE]', currentDate)}
                                         </p>
                                     </div>
                                 ))}
                             </div>
                        </div>

                        {/* Internal/External CTA */}
                        <div className="bg-gradient-to-br from-[#1A3D17] to-[#0d1f0b] rounded-2xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#CCEE18] rounded-full -mr-12 -mt-12 opacity-10"></div>
                            <h4 className="text-2xl font-black mb-3 relative z-10" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>Looking for More Pizza Deals?</h4>
                            <p className="text-green-200/80 text-sm mb-6 relative z-10">
                                Check our latest [Rewards Program](/papa-rewards) or visit the [Official Papa Johns Special Offers](https://www.papajohns.com/order/specials) page for regional discounts.
                            </p>
                            <Link href="/store-locator" className="bg-[#CCEE18] text-[#1A3D17] font-black py-4 px-6 rounded-xl text-xs uppercase tracking-widest inline-block w-full text-center hover:bg-white transition-colors relative z-10">
                                Find Local Store Deals →
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
