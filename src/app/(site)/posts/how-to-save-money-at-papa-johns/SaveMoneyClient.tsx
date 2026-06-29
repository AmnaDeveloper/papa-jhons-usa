"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
    ArrowRight, Star,
    Percent, Clock, DollarSign, CheckCircle2,
    ChevronDown, ChevronUp, Calculator, ShieldAlert, Award,
    ExternalLink, ClipboardCheck, ReceiptText
} from 'lucide-react';

export default function SaveMoneyClient() {
    // Calculator States
    const [orderType, setOrderType] = useState<'carryout' | 'delivery'>('carryout');
    const [subtotal, setSubtotal] = useState<number>(30);
    const [isRewardsMember, setIsRewardsMember] = useState<boolean>(true);

    // FAQ States
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    // Calculate Savings
    const calculateSavings = () => {
        let savings = 0;
        let breakdown = {
            carryoutDiscount: 0,
            deliveryFee: 0,
            tip: 0,
            rewardsValue: 0
        };

        if (orderType === 'carryout') {
            // Assume 50% discount on 80% of order value (since sides/drinks aren't discounted)
            breakdown.carryoutDiscount = subtotal * 0.8 * 0.5;
            // Delivery fee saved
            breakdown.deliveryFee = 4.99;
            // Tip saved (15% of subtotal)
            breakdown.tip = subtotal * 0.15;
        }

        if (isRewardsMember) {
            // 75 points = $10 rewards. So 1 point = $0.133 value. $1 spent = 1 point.
            breakdown.rewardsValue = subtotal * 0.133;
        }

        savings = breakdown.carryoutDiscount + breakdown.deliveryFee + breakdown.tip + breakdown.rewardsValue;
        return {
            total: Math.max(0, savings).toFixed(2),
            breakdown: {
                carryoutDiscount: breakdown.carryoutDiscount.toFixed(2),
                deliveryFee: breakdown.deliveryFee.toFixed(2),
                tip: breakdown.tip.toFixed(2),
                rewardsValue: breakdown.rewardsValue.toFixed(2)
            }
        };
    };

    const savingsData = calculateSavings();

    const faqData = [
        {
            q: "Does Papa Johns always offer a carryout discount?",
            a: "In most locations, yes — the carryout discount on regular menu-priced pizzas is a standing offer, not a limited-time promo. That said, availability can vary slightly by franchise location, so it's worth checking at checkout before you finalize your order."
        },
        {
            q: "Is Papa Rewards free to join?",
            a: "Yes, there's no cost to sign up. You earn points based on how much you spend, and those points can be redeemed for free menu items down the line."
        },
        {
            q: "Do bundle deals change often?",
            a: "Yes, bundle offers in the app rotate fairly regularly. Checking the Deals section before placing your order takes about ten seconds and can occasionally turn up a better deal than you'd get building the order manually."
        }
    ];

    const savingsExampleRows = [
        { label: "Large specialty pizza menu price", delivery: "$18.91", carryout: "$8.99", note: "Example pricing from this guide; real store prices can vary." },
        { label: "Estimated delivery fee", delivery: "$4.99", carryout: "$0.00", note: "Delivery fees vary by store, platform, and distance." },
        { label: "Estimated 15% tip", delivery: "$2.84", carryout: "$0.00", note: "Tip amount is optional and depends on your order." },
        { label: "Estimated total before tax", delivery: "$26.74", carryout: "$8.99", note: "Tax and local fees are not included." },
    ];

    const verificationSteps = [
        "Check the Papa Johns app or website first because deals can be regional.",
        "Compare the same pizza as delivery and carryout before you pay.",
        "Open the Deals section before building a custom cart from scratch.",
        "Sign in to Papa Rewards so available Papa Dough can apply at checkout.",
        "Confirm taxes, fees, and final total on the checkout screen."
    ];

    const officialResources = [
        { label: "Official Papa Johns Deals", href: "https://www.papajohns.com/deals/" },
        { label: "Official Papa Rewards", href: "https://www.papajohns.com/rewards/" },
        { label: "Official Nutrition Info", href: "https://www.papajohns.com/nutrition/" },
        { label: "Official Papa Johns Home", href: "https://www.papajohns.com/" },
    ];

    const relatedGuides = [
        { label: "Best Pizzas for Families", href: "/posts/best-papa-johns-pizzas-for-families", text: "Sarah Jenkins shares the family pizza order that handles picky eaters, big appetites, and sides." },
        { label: "Papa Johns Coupons", href: "/coupons", text: "Check active coupon and deal pages before checkout." },
        { label: "Papa Rewards Guide", href: "/papa-johns-rewards", text: "Learn how Papa Dough and member rewards work." },
        { label: "Menu Prices Guide", href: "/posts/papa-johns-menu-prices-guide", text: "Compare current menu prices before choosing a bundle." },
        { label: "Free Delivery Codes", href: "/posts/papa-johns-free-delivery", text: "See what to know before chasing delivery-code lists." },
        { label: "Nutrition Guide", href: "/posts/papa-johns-nutrition-guide", text: "Check calories and allergens before ordering." },
        { label: "Store Locator", href: "/store-locator", text: "Find nearby stores when carryout is the cheaper option." },
    ];

    const toggleFaq = (idx: number) => {
        setOpenFaq(openFaq === idx ? null : idx);
    };

    return (
        <div className="bg-[#f7f4ee] min-h-screen text-[#143414]">
            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-white/70 z-50">
                <div className="bg-[#cc0000] h-full" style={{ width: '100%' }}></div>
            </div>

            <header className="relative bg-[#143414] text-white px-4 pt-16 pb-8 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(135deg,#ffffff_0_1px,transparent_1px_24px)] pointer-events-none"></div>
                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Breadcrumbs */}
                    <nav className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase text-white/60 mb-8">
                        <Link href="/" className="hover:text-[#CCEE18] transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/posts" className="hover:text-[#CCEE18] transition-colors">Guides</Link>
                        <span>/</span>
                        <span className="text-white">Save Money Guide</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <span className="inline-flex items-center gap-2 bg-[#CCEE18] text-[#143414] text-xs font-extrabold uppercase px-4 py-2 rounded-full shadow-md">
                                <Percent size={14} /> Coupons &amp; Deals
                            </span>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95]" style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}>
                                How to Save Money at Papa Johns <span className="text-[#CCEE18] block mt-2">(Without Hunting for Fake Codes)</span>
                            </h1>

                            <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed max-w-2xl">
                                Most &quot;how to save money&quot; articles focus on codes that may not work. This guide shows practical checkout checks that can help you compare the final total before paying.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
                                <div className="bg-white/10 border border-white/15 rounded-2xl p-4">
                                    <DollarSign className="text-[#CCEE18] mb-2" size={20} />
                                    <p className="text-2xl font-black">Up to 50%</p>
                                    <p className="text-xs font-bold text-white/60 uppercase">Carryout savings</p>
                                </div>
                                <div className="bg-white/10 border border-white/15 rounded-2xl p-4">
                                    <CheckCircle2 className="text-[#CCEE18] mb-2" size={20} />
                                    <p className="text-2xl font-black">5</p>
                                    <p className="text-xs font-bold text-white/60 uppercase">Tested habits</p>
                                </div>
                                <div className="bg-white/10 border border-white/15 rounded-2xl p-4">
                                    <Clock className="text-[#CCEE18] mb-2" size={20} />
                                    <p className="text-2xl font-black">June 2026</p>
                                    <p className="text-xs font-bold text-white/60 uppercase">Updated guide</p>
                                </div>
                            </div>

                            {/* Author Card */}
                            <div className="flex items-center gap-4 pt-4">
                                <div className="w-14 h-14 bg-[#CCEE18] rounded-full flex items-center justify-center text-[#143414] font-black text-xl border-2 border-white shadow-lg">
                                    MW
                                </div>
                                <div>
                                    <p className="text-sm text-white/50 font-bold uppercase">Written By</p>
                                    <p className="text-lg font-extrabold text-white">Marcus Webb</p>
                                    <p className="text-xs text-[#CCEE18] font-bold">Deals &amp; Coupons Researcher • Updated June 2026</p>
                                    <Link href="/team" className="text-xs text-white/70 hover:text-[#CCEE18] font-bold underline underline-offset-4 mt-1 inline-block">
                                        View editorial team
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="lg:col-span-5">
                            <div className="bg-white p-3 rounded-[2rem] shadow-2xl border border-white/10 relative">
                                <div className="absolute top-6 left-6 z-10 bg-[#cc0000] text-white text-[10px] font-black uppercase px-4 py-2 rounded-full shadow-lg flex items-center gap-1">
                                    <Star size={12} fill="currentColor" /> Featured Guide
                                </div>
                                <div className="rounded-[1.5rem] overflow-hidden aspect-square relative bg-gray-50 border border-gray-100">
                                    <img
                                        src="/how-to-save-money-at-papa-johns.png"
                                        alt="How to Save Money at Papa Johns Pizza"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Grid */}
            <main className="max-w-6xl mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* Left side: Interactive Calculator & Sidebar (Sticky) */}
                    <div className="lg:col-span-4 lg:order-2 space-y-6 lg:sticky lg:top-8 self-start">

                        {/* 1. Interactive Savings Calculator */}
                        <div className="bg-white rounded-[1.5rem] p-6 shadow-xl border border-black/5 relative overflow-hidden">
                            <div className="absolute inset-x-0 top-0 h-1.5 bg-[#cc0000]"></div>
                            <h3 className="text-lg font-black uppercase mb-6 flex items-center gap-2 border-b border-gray-100 pb-3">
                                <Calculator className="text-[#cc0000]" size={20} /> Live Savings Calculator
                            </h3>

                            <div className="space-y-6">
                                {/* Order Type */}
                                <div>
                                    <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-2">Order Method</label>
                                    <div className="grid grid-cols-2 gap-2 bg-gray-100 p-1 rounded-2xl">
                                        <button
                                            onClick={() => setOrderType('carryout')}
                                            className={`py-3 px-4 rounded-xl font-extrabold text-xs uppercase transition-all ${orderType === 'carryout' ? 'bg-[#143414] text-white shadow-sm' : 'text-gray-600 hover:bg-white/70'}`}
                                        >
                                            Carryout
                                        </button>
                                        <button
                                            onClick={() => setOrderType('delivery')}
                                            className={`py-3 px-4 rounded-xl font-extrabold text-xs uppercase transition-all ${orderType === 'delivery' ? 'bg-[#143414] text-white shadow-sm' : 'text-gray-600 hover:bg-white/70'}`}
                                        >
                                            Delivery
                                        </button>
                                    </div>
                                </div>

                                {/* Slider for subtotal */}
                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-xs font-extrabold uppercase tracking-wider text-gray-500">Order Subtotal</label>
                                        <span className="text-sm font-black text-[#143414] bg-[#CCEE18]/40 px-3 py-0.5 rounded-full">${subtotal}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="15"
                                        max="100"
                                        step="5"
                                        value={subtotal}
                                        onChange={(e) => setSubtotal(Number(e.target.value))}
                                        className="w-full accent-[#1A3D17]"
                                    />
                                    <div className="flex justify-between text-[10px] text-gray-400 font-bold mt-1">
                                        <span>$15</span>
                                        <span>$50</span>
                                        <span>$100</span>
                                    </div>
                                </div>

                                {/* Papa Rewards Toggle */}
                                <div className="flex items-center justify-between p-4 bg-[#f7f4ee] rounded-2xl border border-black/5">
                                    <div>
                                        <span className="block text-xs font-black uppercase text-gray-700">Papa Rewards Member</span>
                                        <span className="text-[10px] text-gray-400 font-bold block">Earn points on every order</span>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={isRewardsMember}
                                        onChange={(e) => setIsRewardsMember(e.target.checked)}
                                        className="w-5 h-5 accent-[#1A3D17]"
                                    />
                                </div>

                                {/* Savings Result Display */}
                                <div className="bg-[#143414] text-white rounded-2xl p-6 text-center shadow-lg relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none"></div>
                                    <span className="block text-xs uppercase tracking-widest text-[#CCEE18] font-black">Estimated Savings</span>
                                    <span className="block text-4xl md:text-5xl font-black text-white my-2 tracking-tight">${savingsData.total}</span>

                                    <div className="border-t border-white/10 pt-4 mt-4 text-left space-y-2 text-xs font-bold text-gray-300">
                                        {orderType === 'carryout' && (
                                            <>
                                                <div className="flex justify-between">
                                                    <span>Carryout discount (50% avg):</span>
                                                    <span className="text-white">${savingsData.breakdown.carryoutDiscount}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Delivery fee waived:</span>
                                                    <span className="text-white">${savingsData.breakdown.deliveryFee}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Estimated tip saved:</span>
                                                    <span className="text-white">${savingsData.breakdown.tip}</span>
                                                </div>
                                            </>
                                        )}
                                        {isRewardsMember && (
                                            <div className="flex justify-between">
                                                <span>Papa Dough value earned:</span>
                                                <span className="text-[#CCEE18]">${savingsData.breakdown.rewardsValue}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Author Trust Box */}
                        <div className="bg-white border border-black/5 rounded-[1.5rem] p-6 space-y-4 shadow-sm">
                            <h3 className="text-base font-black uppercase text-[#143414] flex items-center gap-2">
                                <Award className="text-[#cc0000]" size={18} /> Editorial Guarantee
                            </h3>
                            <p className="text-xs text-gray-600 font-bold leading-relaxed">
                                Our deals researcher reviews Papa Johns public offers, rewards terms, menu-price examples, and checkout guidance for planning purposes. We receive no sponsorship from Papa Johns, and readers should confirm final prices and discounts in the official checkout before ordering.
                            </p>
                        </div>

                        <div className="bg-[#143414] text-white rounded-[1.5rem] p-6 shadow-lg">
                            <h3 className="text-sm font-black uppercase mb-4">Quick Jump</h3>
                            <div className="space-y-3 text-sm font-bold text-white/80">
                                <a href="#quick-answer" className="flex items-center justify-between hover:text-[#CCEE18] transition-colors">Quick Answer <ArrowRight size={14} /></a>
                                <a href="#savings-math" className="flex items-center justify-between hover:text-[#CCEE18] transition-colors">Savings Math <ArrowRight size={14} /></a>
                                <a href="#carryout" className="flex items-center justify-between hover:text-[#CCEE18] transition-colors">Carryout Discount <ArrowRight size={14} /></a>
                                <a href="#sides" className="flex items-center justify-between hover:text-[#CCEE18] transition-colors">Order Sides Together <ArrowRight size={14} /></a>
                                <a href="#rewards" className="flex items-center justify-between hover:text-[#CCEE18] transition-colors">Papa Rewards <ArrowRight size={14} /></a>
                                <a href="#bundles" className="flex items-center justify-between hover:text-[#CCEE18] transition-colors">Bundle Deals <ArrowRight size={14} /></a>
                                <a href="#off-peak" className="flex items-center justify-between hover:text-[#CCEE18] transition-colors">Off-Peak Orders <ArrowRight size={14} /></a>
                                <a href="#faq" className="flex items-center justify-between hover:text-[#CCEE18] transition-colors">FAQs <ArrowRight size={14} /></a>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Main Article Content (Structured Layout) */}
                    <div className="lg:col-span-8 lg:order-1 space-y-8">

                        {/* Article Intro */}
                        <div className="bg-white rounded-[1.5rem] p-7 md:p-8 shadow-md border border-black/5 relative overflow-hidden">
                            {/* Quote Icon Background */}
                            <div className="absolute top-6 right-8 text-gray-100 font-serif text-8xl leading-none select-none pointer-events-none">“</div>

                            <p className="text-lg leading-relaxed text-gray-700 font-bold relative z-10">
                                Let's be honest — many &quot;how to save money at Papa Johns&quot; articles online say the exact same thing. They list a bunch of promo codes, some of which may already be expired, and call it a day. After reviewing Papa Johns pricing patterns, rewards terms, and checkout examples for this site, the practical takeaway is that codes are often the least reliable part of the whole equation.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700 font-bold mt-6">
                                So instead of giving you another list of codes that might not work by the time you read this, I want to walk you through the actual habits and order choices that consistently save money — the stuff that works whether or not there's a promo code floating around.
                            </p>
                        </div>

                        <section id="quick-answer" className="bg-white rounded-[1.5rem] p-7 md:p-8 shadow-sm border border-black/5 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#cc0000] text-white font-black flex items-center justify-center shadow shrink-0">
                                    <CheckCircle2 size={20} />
                                </div>
                                <div>
                                    <span className="text-[#cc0000] text-xs font-black uppercase">Fastest answer</span>
                                    <h2 className="text-2xl md:text-3xl font-black uppercase leading-tight mt-1" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                        The Cheapest Papa Johns Order Path
                                    </h2>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-[#f7f4ee] rounded-2xl p-5 border border-black/5">
                                    <p className="text-sm font-black text-[#143414] uppercase mb-2">1. Start With Carryout</p>
                                    <p className="text-sm text-gray-600 font-bold leading-relaxed">
                                        Compare carryout first because it can remove delivery fees and often unlock lower pizza pricing. If you are checking nearby options, use our <Link href="/store-locator" className="text-[#cc0000] underline font-black">Papa Johns store locator</Link>.
                                    </p>
                                </div>
                                <div className="bg-[#f7f4ee] rounded-2xl p-5 border border-black/5">
                                    <p className="text-sm font-black text-[#143414] uppercase mb-2">2. Check Deals Before Cart</p>
                                    <p className="text-sm text-gray-600 font-bold leading-relaxed">
                                        The app&apos;s Deals section can be cheaper than building the same pizza item by item. You can also compare our <Link href="/coupons" className="text-[#cc0000] underline font-black">Papa Johns coupons</Link> page before checkout.
                                    </p>
                                </div>
                                <div className="bg-[#f7f4ee] rounded-2xl p-5 border border-black/5">
                                    <p className="text-sm font-black text-[#143414] uppercase mb-2">3. Use Papa Rewards</p>
                                    <p className="text-sm text-gray-600 font-bold leading-relaxed">
                                        Sign in before checkout so any eligible Papa Dough or member-only offer is visible. Our <Link href="/papa-johns-rewards" className="text-[#cc0000] underline font-black">Papa Rewards guide</Link> explains how points and Papa Dough work.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <Link href="/coupons" className="inline-flex items-center gap-2 bg-[#143414] text-white font-black text-xs uppercase px-5 py-3 rounded-full hover:bg-[#cc0000] transition-colors">
                                    Active Coupons <ArrowRight size={14} />
                                </Link>
                                <Link href="/papa-johns-rewards" className="inline-flex items-center gap-2 bg-[#CCEE18] text-[#143414] font-black text-xs uppercase px-5 py-3 rounded-full hover:bg-white transition-colors border border-[#143414]/10">
                                    Papa Rewards Guide <ArrowRight size={14} />
                                </Link>
                            </div>
                        </section>

                        <section id="savings-math" className="bg-white rounded-[1.5rem] p-7 md:p-8 shadow-sm border border-black/5 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#143414] text-[#CCEE18] font-black flex items-center justify-center shadow shrink-0">
                                    <ReceiptText size={20} />
                                </div>
                                <div>
                                    <span className="text-[#cc0000] text-xs font-black uppercase">Transparent estimate</span>
                                    <h2 className="text-2xl md:text-3xl font-black uppercase leading-tight mt-1" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                        Example Delivery vs Carryout Savings Math
                                    </h2>
                                </div>
                            </div>

                            <p className="text-gray-600 font-bold leading-relaxed">
                                This is an example calculation based on the pricing pattern discussed in this guide. Papa Johns prices, delivery fees, taxes, and promotions vary by store, city, and checkout time, so compare the final cart total with our <Link href="/posts/papa-johns-menu-prices-guide" className="text-[#cc0000] underline font-black">Papa Johns menu prices guide</Link> before placing your order.
                            </p>

                            <div className="overflow-x-auto rounded-2xl border border-black/10">
                                <table className="w-full text-left text-sm bg-white min-w-[640px]">
                                    <thead className="bg-[#143414] text-[#CCEE18] uppercase">
                                        <tr>
                                            <th className="p-4">Cost Item</th>
                                            <th className="p-4">Delivery Example</th>
                                            <th className="p-4">Carryout Example</th>
                                            <th className="p-4">Accuracy Note</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {savingsExampleRows.map((row, idx) => (
                                            <tr key={row.label} className={idx % 2 === 0 ? "border-b border-gray-100" : "border-b border-gray-100 bg-[#f7f4ee]"}>
                                                <td className="p-4 font-black text-[#143414]">{row.label}</td>
                                                <td className="p-4 font-bold text-gray-700">{row.delivery}</td>
                                                <td className="p-4 font-bold text-[#cc0000]">{row.carryout}</td>
                                                <td className="p-4 text-gray-500 font-medium">{row.note}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-[#CCEE18]/30 border border-[#CCEE18] rounded-2xl p-5">
                                <p className="text-[#143414] font-black uppercase text-sm mb-1">Estimated difference before tax</p>
                                <p className="text-gray-700 font-bold text-sm leading-relaxed">
                                    In this example, carryout is about <strong>$17.75 cheaper</strong> before tax. Your actual result may be higher or lower depending on local menu pricing, active deals, delivery fees, and tip.
                                </p>
                            </div>
                        </section>

                        <section className="bg-white rounded-[1.5rem] p-7 md:p-8 shadow-sm border border-black/5 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#143414] text-[#CCEE18] font-black flex items-center justify-center shadow shrink-0">
                                    <ClipboardCheck size={20} />
                                </div>
                                <div>
                                    <span className="text-[#cc0000] text-xs font-black uppercase">How we keep this useful</span>
                                    <h2 className="text-2xl md:text-3xl font-black uppercase leading-tight mt-1" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                        How to Verify the Best Deal Before You Order
                                    </h2>
                                </div>
                            </div>

                            <ol className="space-y-3">
                                {verificationSteps.map((step, idx) => (
                                    <li key={step} className="flex items-start gap-3 text-gray-700 font-bold leading-relaxed">
                                        <span className="w-7 h-7 rounded-full bg-[#CCEE18] text-[#143414] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                                            {idx + 1}
                                        </span>
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ol>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {officialResources.map((resource) => (
                                    <a
                                        key={resource.href}
                                        href={resource.href}
                                        target="_blank"
                                        rel="noopener noreferrer nofollow"
                                        className="flex items-center justify-between gap-3 rounded-2xl border border-black/10 bg-[#f7f4ee] p-4 text-sm font-black text-[#143414] hover:border-[#cc0000] hover:text-[#cc0000] transition-colors"
                                    >
                                        {resource.label}
                                        <ExternalLink size={15} />
                                    </a>
                                ))}
                            </div>
                        </section>

                        <section className="bg-white rounded-[1.5rem] p-7 md:p-8 shadow-sm border border-black/5 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#cc0000] text-white font-black flex items-center justify-center shadow shrink-0">
                                    <ArrowRight size={20} />
                                </div>
                                <div>
                                    <span className="text-[#cc0000] text-xs font-black uppercase">Related internal guides</span>
                                    <h2 className="text-2xl md:text-3xl font-black uppercase leading-tight mt-1" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                        Helpful Pages to Check Before Ordering
                                    </h2>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {relatedGuides.map((guide) => (
                                    <Link
                                        key={guide.href}
                                        href={guide.href}
                                        className="group rounded-2xl border border-black/10 bg-[#f7f4ee] p-5 hover:border-[#cc0000] hover:bg-white transition-colors"
                                    >
                                        <div className="flex items-center justify-between gap-3 mb-2">
                                            <h3 className="text-sm font-black uppercase text-[#143414] group-hover:text-[#cc0000] transition-colors">
                                                {guide.label}
                                            </h3>
                                            <ArrowRight size={16} className="text-[#cc0000]" />
                                        </div>
                                        <p className="text-sm text-gray-600 font-bold leading-relaxed">
                                            {guide.text}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </section>

                        {/* Section 1: Carryout */}
                        <section id="carryout" className="bg-white rounded-[1.5rem] p-7 md:p-8 shadow-sm border border-black/5 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#143414] text-white font-black flex items-center justify-center text-lg shadow shrink-0">
                                    1
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black uppercase leading-tight pt-1" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                    The Carryout Discount Is the One Thing Most People Skip
                                </h2>
                            </div>

                            <div className="pl-0 md:pl-14 space-y-6 text-gray-600 font-bold text-base leading-relaxed">
                                <p>
                                    Here's the thing nobody really talks about enough: if you choose carryout instead of delivery, Papa Johns automatically knocks the price down on regular menu-priced pizzas. No code, no app gymnastics, nothing to type in. You just pick &quot;carryout&quot; when you're checking out and the discount shows up on its own. For more location planning, use our <Link href="/store-locator" className="text-[#cc0000] underline font-black">store locator</Link> before you order.
                                </p>

                                <div className="bg-red-50 border-l-4 border-[#cc0000] p-6 rounded-r-2xl my-6">
                                    <h4 className="text-sm font-black text-[#cc0000] uppercase tracking-wider mb-2 flex items-center gap-2">
                                        <ShieldAlert size={16} /> Checkout Comparison Note
                                    </h4>
                                    <p className="text-sm text-gray-700 italic">
                                        Delivery is convenient, but carryout can be meaningfully cheaper once delivery fees, service fees, and tips are included. Before paying, compare the same cart as delivery and carryout in the official checkout. The exact savings depend on your store, cart, distance, and current offers.
                                    </p>
                                </div>

                                <p>
                                    If saving money is genuinely your priority and you have time to pick up, carryout is often the first option worth checking. It is not flashy, but it removes several fees that can make delivery more expensive.
                                </p>
                            </div>
                        </section>

                        {/* Section 2: Sides */}
                        <section id="sides" className="bg-white rounded-[1.5rem] p-7 md:p-8 shadow-sm border border-black/5 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#143414] text-white font-black flex items-center justify-center text-lg shadow shrink-0">
                                    2
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black uppercase leading-tight pt-1" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                    Stop Ordering Sides Separately
                                </h2>
                            </div>

                            <div className="pl-0 md:pl-14 space-y-6 text-gray-600 font-bold text-base leading-relaxed">
                                <p>
                                    This one drives me a little crazy because it's such an easy fix. A lot of people order their pizza, then go back later (or the next day) and order breadsticks or cheesesticks separately because they forgot, or because they wanted to &quot;keep the order simple.&quot;
                                </p>
                                <p>
                                    Don't do that. Every time you place a separate order, you may pay a separate delivery fee, service fee, or tip. If you know you want breadsticks, add them to the same cart. You can compare side options in our <Link href="/posts/sides" className="text-[#cc0000] underline font-black">Papa Johns sides guide</Link>. It sounds obvious, but it is an easy mistake when people build orders quickly.
                                </p>
                            </div>
                        </section>

                        {/* Section 3: Loyalty Program */}
                        <section id="rewards" className="bg-white rounded-[1.5rem] p-7 md:p-8 shadow-sm border border-black/5 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#143414] text-white font-black flex items-center justify-center text-lg shadow shrink-0">
                                    3
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black uppercase leading-tight pt-1" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                    Papa Rewards Is Actually Worth Signing Up For
                                </h2>
                            </div>

                            <div className="pl-0 md:pl-14 space-y-6 text-gray-600 font-bold text-base leading-relaxed">
                                <p>
                                    Loyalty programs are easy to ignore if you only order once. But if you order Papa Johns repeatedly, Papa Rewards is worth checking because points and account-specific offers may change the final value.
                                </p>
                                <p>
                                    Papa Rewards is free to join, and eligible orders can earn points toward future rewards. If you order Papa Johns more than occasionally, check whether signing in changes your available deals or reward balance before paying. You can also read our full <Link href="/papa-johns-rewards" className="text-[#cc0000] underline font-black">Papa Rewards breakdown</Link>.
                                </p>
                                <p>
                                    Some accounts may also receive birthday or targeted offers, but availability can vary by account and current program terms.
                                </p>
                            </div>
                        </section>

                        {/* Section 4: Bundles */}
                        <section id="bundles" className="bg-white rounded-[1.5rem] p-7 md:p-8 shadow-sm border border-black/5 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#143414] text-white font-black flex items-center justify-center text-lg shadow shrink-0">
                                    4
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black uppercase leading-tight pt-1" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                    Watch for Limited-Time Bundle Deals (Not the Same as Codes)
                                </h2>
                            </div>

                            <div className="pl-0 md:pl-14 space-y-6 text-gray-600 font-bold text-base leading-relaxed">
                                <p>
                                    This is a distinction that trips a lot of people up. Promo codes come and go constantly, and honestly, tracking every single one is a losing battle — they're often regional, they expire fast, and what works in one city might not work in another.
                                </p>
                                <p>
                                    But Papa Johns also runs bundle-style deals that show up directly in the app or on the website — things like a large pizza plus a side and a drink for one combined price. These tend to be more stable than individual promo codes because they're built into the ordering flow itself, not something you have to remember to type in. Before you build your order from scratch, it's worth scrolling through the &quot;Deals&quot; section in the app first, then checking our <Link href="/coupons" className="text-[#cc0000] underline font-black">active coupons page</Link>. Sometimes the bundle ends up cheaper than building the same order item-by-item, even without any code at all.
                                </p>
                            </div>
                        </section>

                        {/* Section 5: Off-Peak Times */}
                        <section id="off-peak" className="bg-white rounded-[1.5rem] p-7 md:p-8 shadow-sm border border-black/5 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#143414] text-white font-black flex items-center justify-center text-lg shadow shrink-0">
                                    5
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black uppercase leading-tight pt-1" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                    Order During Off-Peak Times If You Can
                                </h2>
                            </div>

                            <div className="pl-0 md:pl-14 space-y-6 text-gray-600 font-bold text-base leading-relaxed">
                                <p>
                                    This won't save you money directly, but it indirectly helps — especially with delivery. Ordering during peak dinner rush (think Friday and Saturday evenings between 6 and 8 PM) often means longer wait times, and in my experience, that's also when delivery fees tend to be on the higher end due to demand-based pricing that some delivery platforms use. If timing matters, our <Link href="/hours" className="text-[#cc0000] underline font-black">Papa Johns hours guide</Link> can help you plan earlier pickup.
                                </p>
                                <p>
                                    If your schedule is flexible at all, ordering a little earlier — say 4 or 5 PM — can mean a smoother experience and sometimes a slightly lower delivery cost, depending on your area.
                                </p>
                            </div>
                        </section>

                        {/* Section 6: Bottom Line */}
                        <section className="bg-[#143414] text-white rounded-[1.5rem] p-7 md:p-8 shadow-xl space-y-6">
                            <h2 className="text-2xl md:text-3xl font-black uppercase" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                The Bottom Line
                            </h2>
                            <div className="space-y-6 text-white/80 font-bold text-base leading-relaxed">
                                <p>
                                    If I had to boil this down to one piece of advice, it'd be this: <strong>carryout plus Papa Rewards is the combination that actually moves the needle.</strong> Everything else — codes, bundles, timing — is more of a bonus layer on top. For a broader price check, see our <Link href="/posts/papa-johns-menu-prices-guide" className="text-[#CCEE18] underline font-black">complete Papa Johns menu prices guide</Link>.
                                </p>
                                <p>
                                    We update this guide when public offers, rewards terms, or checkout patterns change. If you notice a local pricing issue or outdated deal note, send it through our contact page so we can review it.
                                </p>
                            </div>
                        </section>

                        <section className="bg-white rounded-[1.5rem] p-7 md:p-8 shadow-sm border border-black/5 space-y-5">
                            <h2 className="text-2xl md:text-3xl font-black uppercase text-[#143414]" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                Editorial Note and Independence
                            </h2>
                            <p className="text-gray-600 font-bold leading-relaxed">
                                PapaJohns-Menus.us is an independent informational guide and is not affiliated with, endorsed by, or sponsored by Papa Johns International. Prices, fees, rewards, and promotions can change by location and time, so this guide is meant to help you compare options before checkout rather than replace the official ordering screen.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Link href="/about" className="inline-flex items-center gap-2 text-[#143414] bg-[#f7f4ee] border border-black/10 font-black text-xs uppercase px-5 py-3 rounded-full hover:border-[#cc0000] hover:text-[#cc0000] transition-colors">
                                    About Our Site <ArrowRight size={14} />
                                </Link>
                                <Link href="/team" className="inline-flex items-center gap-2 text-[#143414] bg-[#f7f4ee] border border-black/10 font-black text-xs uppercase px-5 py-3 rounded-full hover:border-[#cc0000] hover:text-[#cc0000] transition-colors">
                                    Editorial Team <ArrowRight size={14} />
                                </Link>
                                <Link href="/privacy-policy" className="inline-flex items-center gap-2 text-[#143414] bg-[#f7f4ee] border border-black/10 font-black text-xs uppercase px-5 py-3 rounded-full hover:border-[#cc0000] hover:text-[#cc0000] transition-colors">
                                    Privacy Policy <ArrowRight size={14} />
                                </Link>
                            </div>
                        </section>

                        {/* ── 3. FAQs SECTION (Interactive Accordion) ── */}
                        <div id="faq" className="bg-white rounded-[1.5rem] p-7 md:p-10 shadow-xl border border-black/5">
                            <span className="inline-block bg-[#cc0000]/10 text-[#cc0000] font-extrabold uppercase tracking-[0.2em] text-[10px] px-6 py-2 rounded-full mb-4">
                                Frequently Asked Questions
                            </span>
                            <h2 className="text-2xl md:text-4xl font-black uppercase mb-8" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                Money-Saving FAQs
                            </h2>

                            <div className="space-y-4">
                                {faqData.map((faq, idx) => (
                                    <div
                                        key={idx}
                                        className="border-b border-gray-100 pb-4"
                                    >
                                        <button
                                            onClick={() => toggleFaq(idx)}
                                            className="w-full flex items-center justify-between text-left py-4 focus:outline-none group"
                                        >
                                            <h4 className="font-extrabold text-gray-900 group-hover:text-[#cc0000] transition-colors text-lg md:text-xl leading-snug pr-4">
                                                {faq.q}
                                            </h4>
                                            <span className="shrink-0 bg-gray-50 text-[#1A3D17] p-2 rounded-full shadow-sm group-hover:bg-[#CCEE18]/30 transition-colors">
                                                {openFaq === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                            </span>
                                        </button>

                                        <div
                                            className={`transition-all duration-300 overflow-hidden ${openFaq === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
                                        >
                                            <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed pt-2">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Call to action card */}
                        <div className="bg-[#cc0000] rounded-[1.5rem] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
                            <div className="relative z-10 space-y-6">
                                <h3 className="text-2xl md:text-4xl font-black uppercase" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                    Ready to Order and Save?
                                </h3>
                                <p className="text-white/80 font-bold max-w-xl mx-auto text-sm md:text-base">
                                    Put these strategies to test. Head over to our Store Locator to find your closest store and order carryout now!
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                    <Link
                                        href="/store-locator"
                                        className="w-full sm:w-auto bg-[#CCEE18] hover:bg-white text-[#1A3D17] font-black py-4 px-10 rounded-full transition-all uppercase tracking-widest text-xs shadow-xl active:scale-95"
                                    >
                                        Find Nearest Location
                                    </Link>
                                    <Link
                                        href="/coupons"
                                        className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-[#1A3D17] text-white font-black py-4 px-10 rounded-full transition-all uppercase tracking-widest text-xs shadow-xl active:scale-95"
                                    >
                                        Browse Active Coupons
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </main>
        </div>
    );
}
