"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
    Heart, Share2, Info, ArrowRight, Star, 
    Percent, Clock, User, DollarSign, CheckCircle2, 
    ChevronDown, ChevronUp, Calculator, ShieldAlert, Award
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

    const toggleFaq = (idx: number) => {
        setOpenFaq(openFaq === idx ? null : idx);
    };

    return (
        <div className="bg-[#FAF8F5] min-h-screen text-[#1A3D17]">
            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
                <div className="bg-[#cc0000] h-full" style={{ width: '100%' }}></div>
            </div>

            {/* Premium Header/Hero */}
            <header className="relative bg-[#1A3D17] text-white pt-16 pb-24 px-4 overflow-hidden border-b-8 border-[#cc0000]">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#CCEE18]/5 rounded-full -mr-32 -mt-32 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#cc0000]/5 rounded-full -ml-64 -mb-64 pointer-events-none"></div>

                <div className="max-w-6xl mx-auto">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 mb-8">
                        <Link href="/" className="hover:text-[#CCEE18] transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/posts" className="hover:text-[#CCEE18] transition-colors">Guides</Link>
                        <span>/</span>
                        <span className="text-white">Save Money Guide</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <span className="inline-flex items-center gap-2 bg-[#CCEE18] text-[#1A3D17] text-xs font-extrabold uppercase px-4 py-1.5 rounded-full shadow-md">
                                <Percent size={14} /> Coupons &amp; Deals
                            </span>

                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none" style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}>
                                How to Save Money at Papa Johns <span className="text-[#CCEE18] block mt-2">(Without Hunting for Fake Codes)</span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed max-w-2xl">
                                Let's be honest — most &quot;how to save money&quot; articles are full of expired codes. Here is the actual guide on how to slash your bill every single time.
                            </p>

                            {/* Author Card */}
                            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                                <div className="w-14 h-14 bg-[#CCEE18] rounded-full flex items-center justify-center text-[#1A3D17] font-black text-xl border-2 border-white shadow-lg">
                                    MW
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Written By</p>
                                    <p className="text-lg font-extrabold text-white">Marcus Webb</p>
                                    <p className="text-xs text-[#CCEE18] font-bold">Deals &amp; Coupons Researcher • Updated June 2026</p>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="lg:col-span-5">
                            <div className="bg-white p-3 rounded-[2.5rem] shadow-2xl border border-white/10 relative transform hover:rotate-1 transition-all duration-500">
                                <div className="absolute top-6 left-6 z-10 bg-[#cc0000] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                                    ★ Featured Guide
                                </div>
                                <div className="rounded-[2rem] overflow-hidden aspect-square relative bg-gray-50 border border-gray-100">
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
            <main className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Left side: Interactive Calculator & Sidebar (Sticky) */}
                    <div className="lg:col-span-4 lg:order-2 space-y-8">
                        
                        {/* 1. Interactive Savings Calculator */}
                        <div className="bg-white rounded-[2rem] p-6 shadow-xl border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#CCEE18]/10 rounded-full -mr-12 -mt-12"></div>
                            
                            <h3 className="text-lg font-black uppercase tracking-tighter mb-6 flex items-center gap-2 border-b border-gray-100 pb-3">
                                <Calculator className="text-[#cc0000]" size={20} /> Live Savings Calculator
                            </h3>

                            <div className="space-y-6">
                                {/* Order Type */}
                                <div>
                                    <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-2">Order Method</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button 
                                            onClick={() => setOrderType('carryout')}
                                            className={`py-3 px-4 rounded-xl font-extrabold text-xs uppercase transition-all shadow-sm ${orderType === 'carryout' ? 'bg-[#1A3D17] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                        >
                                            Carryout
                                        </button>
                                        <button 
                                            onClick={() => setOrderType('delivery')}
                                            className={`py-3 px-4 rounded-xl font-extrabold text-xs uppercase transition-all shadow-sm ${orderType === 'delivery' ? 'bg-[#1A3D17] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                        >
                                            Delivery
                                        </button>
                                    </div>
                                </div>

                                {/* Slider for subtotal */}
                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-xs font-extrabold uppercase tracking-wider text-gray-500">Order Subtotal</label>
                                        <span className="text-sm font-black text-[#1A3D17] bg-[#CCEE18]/30 px-3 py-0.5 rounded-full">${subtotal}</span>
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
                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
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
                                <div className="bg-[#1A3D17] text-white rounded-2xl p-6 text-center shadow-lg relative overflow-hidden">
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
                        <div className="bg-[#FAF4EE] border-2 border-dashed border-[#1A3D17]/10 rounded-[2rem] p-6 space-y-4">
                            <h3 className="text-base font-black uppercase text-[#1A3D17] tracking-tight flex items-center gap-2">
                                <Award className="text-[#cc0000]" size={18} /> Editorial Guarantee
                            </h3>
                            <p className="text-xs text-gray-600 font-bold leading-relaxed">
                                Our deals researcher, Marcus Webb, manually tests orders at Papa Johns every week. We receive no sponsorship from Papa Johns. Every tip shared here is based on real purchase tests.
                            </p>
                        </div>
                    </div>

                    {/* Right side: Main Article Content (Structured Layout) */}
                    <div className="lg:col-span-8 lg:order-1 space-y-12">
                        
                        {/* Article Intro */}
                        <div className="bg-white rounded-[2rem] p-8 shadow-md border border-gray-100 relative">
                            {/* Quote Icon Background */}
                            <div className="absolute top-6 right-8 text-gray-100 font-serif text-8xl leading-none select-none pointer-events-none">“</div>
                            
                            <p className="text-lg leading-relaxed text-gray-700 font-bold relative z-10">
                                Let's be honest — most &quot;how to save money at Papa Johns&quot; articles online say the exact same thing. They list a bunch of promo codes, half of which expired months ago, and call it a day. I've spent the last two years tracking Papa Johns pricing for this site, and I can tell you that the codes are honestly the least reliable part of the whole equation.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700 font-bold mt-6">
                                So instead of giving you another list of codes that might not work by the time you read this, I want to walk you through the actual habits and order choices that consistently save money — the stuff that works whether or not there's a promo code floating around.
                            </p>
                        </div>

                        {/* Section 1: Carryout */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#1A3D17] text-white font-black flex items-center justify-center text-lg shadow">
                                    1
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none pt-1" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                    The Carryout Discount Is the One Thing Most People Skip
                                </h2>
                            </div>
                            
                            <div className="pl-0 md:pl-14 space-y-6 text-gray-600 font-bold text-base leading-relaxed">
                                <p>
                                    Here's the thing nobody really talks about enough: if you choose carryout instead of delivery, Papa Johns automatically knocks the price down on regular menu-priced pizzas. No code, no app gymnastics, nothing to type in. You just pick &quot;carryout&quot; when you're checking out and the discount shows up on its own.
                                </p>
                                
                                <div className="bg-red-50 border-l-4 border-[#cc0000] p-6 rounded-r-2xl my-6">
                                    <h4 className="text-sm font-black text-[#cc0000] uppercase tracking-wider mb-2 flex items-center gap-2">
                                        <ShieldAlert size={16} /> Real Test Result
                                    </h4>
                                    <p className="text-sm text-gray-700 italic">
                                        &quot;I know, I know — delivery is convenient. But if you live within a five or ten minute drive of your local Papa Johns (and honestly, most people do at this point, there's one on practically every corner), the gas you spend driving over is usually less than what you'd pay in delivery fees and tip anyway. I tested this myself a few months back — ordered the same large specialty pizza twice, once for delivery and once for carryout. The carryout order came out to roughly half the price. Same pizza, same toppings, same store.&quot;
                                    </p>
                                </div>

                                <p>
                                    If saving money is genuinely your priority and you've got the time to swing by, carryout is the move. It's not flashy, but it works every single time.
                                </p>
                            </div>
                        </div>

                        {/* Section 2: Sides */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#1A3D17] text-white font-black flex items-center justify-center text-lg shadow">
                                    2
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none pt-1" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                    Stop Ordering Sides Separately
                                </h2>
                            </div>

                            <div className="pl-0 md:pl-14 space-y-6 text-gray-600 font-bold text-base leading-relaxed">
                                <p>
                                    This one drives me a little crazy because it's such an easy fix. A lot of people order their pizza, then go back later (or the next day) and order breadsticks or cheesesticks separately because they forgot, or because they wanted to &quot;keep the order simple.&quot;
                                </p>
                                <p>
                                    Don't do that. Every time you place a separate order, you're paying a separate delivery fee — and depending on where you live, that's anywhere from four to six bucks just to get a side dish to your door. If you know you want breadsticks, add them to the same cart. It sounds obvious when I say it out loud, but I've watched people in my own family do this exact thing more times than I can count.
                                </p>
                            </div>
                        </div>

                        {/* Section 3: Loyalty Program */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#1A3D17] text-white font-black flex items-center justify-center text-lg shadow">
                                    3
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none pt-1" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                    Papa Rewards Is Actually Worth Signing Up For
                                </h2>
                            </div>

                            <div className="pl-0 md:pl-14 space-y-6 text-gray-600 font-bold text-base leading-relaxed">
                                <p>
                                    I'll admit, loyalty programs usually feel like a waste of time. You sign up, you forget about it, six months later you delete the app because it's just sitting there taking up space on your phone.
                                </p>
                                <p>
                                    Papa Rewards is a little different, mainly because there's zero cost to join and the points actually add up faster than you'd expect. Every dollar you spend earns points (Papa Johns calls this &quot;Papa Dough&quot;), and once you hit a certain threshold, you can redeem it for free pizza, sides, or desserts. If you're already ordering Papa Johns once or twice a month — and let's face it, if you're reading this, you probably are — you're leaving free food on the table by not signing up.
                                </p>
                                <p>
                                    There's also a birthday perk. It's not life-changing, but hey, free dessert on your birthday is free dessert on your birthday.
                                </p>
                            </div>
                        </div>

                        {/* Section 4: Bundles */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#1A3D17] text-white font-black flex items-center justify-center text-lg shadow">
                                    4
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none pt-1" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                    Watch for Limited-Time Bundle Deals (Not the Same as Codes)
                                </h2>
                            </div>

                            <div className="pl-0 md:pl-14 space-y-6 text-gray-600 font-bold text-base leading-relaxed">
                                <p>
                                    This is a distinction that trips a lot of people up. Promo codes come and go constantly, and honestly, tracking every single one is a losing battle — they're often regional, they expire fast, and what works in one city might not work in another.
                                </p>
                                <p>
                                    But Papa Johns also runs bundle-style deals that show up directly in the app or on the website — things like a large pizza plus a side and a drink for one combined price. These tend to be more stable than individual promo codes because they're built into the ordering flow itself, not something you have to remember to type in. Before you build your order from scratch, it's worth scrolling through the &quot;Deals&quot; section in the app first. Sometimes the bundle ends up cheaper than building the same order item-by-item, even without any code at all.
                                </p>
                            </div>
                        </div>

                        {/* Section 5: Off-Peak Times */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#1A3D17] text-white font-black flex items-center justify-center text-lg shadow">
                                    5
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none pt-1" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                    Order During Off-Peak Times If You Can
                                </h2>
                            </div>

                            <div className="pl-0 md:pl-14 space-y-6 text-gray-600 font-bold text-base leading-relaxed">
                                <p>
                                    This won't save you money directly, but it indirectly helps — especially with delivery. Ordering during peak dinner rush (think Friday and Saturday evenings between 6 and 8 PM) often means longer wait times, and in my experience, that's also when delivery fees tend to be on the higher end due to demand-based pricing that some delivery platforms use.
                                </p>
                                <p>
                                    If your schedule is flexible at all, ordering a little earlier — say 4 or 5 PM — can mean a smoother experience and sometimes a slightly lower delivery cost, depending on your area.
                                </p>
                            </div>
                        </div>

                        {/* Section 6: Bottom Line */}
                        <div className="space-y-6 border-t border-gray-200 pt-10">
                            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                The Bottom Line
                            </h2>
                            <div className="space-y-6 text-gray-600 font-bold text-base leading-relaxed">
                                <p>
                                    If I had to boil this down to one piece of advice, it'd be this: **carryout plus Papa Rewards is the combination that actually moves the needle.** Everything else — codes, bundles, timing — is more of a bonus layer on top.
                                </p>
                                <p>
                                    I'll keep updating this guide as I come across new patterns worth sharing, but the core advice above has held up consistently every time I've tested it. If you've found something that's worked well for you, feel free to reach out — I genuinely read every email that comes through our contact page, and reader tips are honestly one of the best sources for this kind of content.
                                </p>
                            </div>
                        </div>

                        {/* ── 3. FAQs SECTION (Interactive Accordion) ── */}
                        <div id="faq" className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100">
                            <span className="inline-block bg-[#cc0000]/10 text-[#cc0000] font-extrabold uppercase tracking-[0.2em] text-[10px] px-6 py-2 rounded-full mb-4">
                                Frequently Asked Questions
                            </span>
                            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-8" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
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
                        <div className="bg-[#cc0000] rounded-[2.5rem] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
                            
                            <div className="relative z-10 space-y-6">
                                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
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
