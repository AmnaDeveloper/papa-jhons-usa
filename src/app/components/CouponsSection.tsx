'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Coupon {
    id: number;
    discount: string;
    title: string;
    code: string;
    description: string;
}

const FAQ_ITEMS = [
    {
        q: "Does Papa John's have promo code examples today?",
        a: "Papa John's may show promo codes, app offers, rewards deals, and store-level specials. Availability changes by location and date, so test each code in the official checkout before ordering."
    },
    {
        q: "How do I use a Papa John's coupon code online?",
        a: "To use a code, go to the official Papa Johns website or app, add your items, and enter the promo code during checkout. Confirm the discount appears in the order summary before paying."
    }
];

export default function CouponsSection() {
    const [currentDate, setCurrentDate] = useState('');
    const [mounted, setMounted] = useState(false);
    const [revealedCodes, setRevealedCodes] = useState<Record<number, boolean>>({});

    useEffect(() => {
        setMounted(true);
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
        setCurrentDate(date.toLocaleDateString('en-US', options));
    }, []);

    const coupons: Coupon[] = [
        {
            id: 1,
            discount: '25%',
            title: '25% Off Regular Menu Price Example',
            description: 'This Papa John\'s promo code example may reduce eligible regular menu price items when active for your store. Combine with our [Menu & Prices](/menus-prices) to compare value before checkout.',
            code: 'CHECKOUT'
        },
        {
            id: 2,
            discount: '50%',
            title: 'BOGO-Style Pizza Offer',
            description: 'BOGO-style pizza deals may discount a second pizza when the offer is active for your local store. Check [official terms](https://www.papajohns.com) for current availability.',
            code: 'VERIFY'
        },
        {
            id: 3,
            discount: '$10',
            title: '$10 Off $30+ Example',
            description: 'This example may reduce an eligible cart when the minimum order and local terms are met. Discover more [Featured Items](/#featured) while comparing your checkout total.',
            code: 'CHECKCART'
        },
        {
            id: 4,
            discount: 'FREE',
            title: 'Free Side Example with Eligible Pizza',
            description: 'Some promotions include a side item with an eligible pizza purchase. Use the official checkout to confirm whether this offer is active for your store.',
            code: 'SEEAPP'
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
                            Review Papa Johns coupon examples, pizza deal notes, and discount-code tips before checking your official delivery or carryout cart.
                        </h1>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-6">
                            <span className="bg-[#eefcf2] text-[#1A3D17] text-xs font-black px-4 py-1.5 rounded-full border border-[#1A3D17]/10 flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                REVIEWED NOTES — {currentDate.toUpperCase()}
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
                                                     <span className="bg-[#1A3D17] text-[#CCEE18] text-[9px] font-black px-2 py-0.5 rounded-sm tracking-widest uppercase">Example Deal</span>
                                                     <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest leading-none">Check Terms</span>
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

                                        {/* Checkout note */}
                                        <div className="bg-[#f2fcf4] px-8 py-3 flex items-center justify-between border-t border-[#e2f5e6]">
                                            <p className="text-[#1A3D17] text-xs font-bold italic flex items-center gap-2">
                                                <span className="inline-flex h-2 w-2 rounded-full bg-[#1A3D17]"></span>
                                                Test this example in the official checkout before ordering; availability can change by store, account, and date.
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
                                     { label: 'Examples Reviewed:', val: '4' },
                                     { label: 'Deal Types:', val: 'Codes + Bundles' },
                                     { label: 'Best Next Step:', val: 'Check Cart' },
                                     { label: 'Savings Rule:', val: 'Confirm First' },
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
                                Check our latest [Rewards Program](/papa-johns-rewards) guide or visit the [Papa Johns Special Offers](https://www.papajohns.com/order/specials) page for regional discounts.
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
