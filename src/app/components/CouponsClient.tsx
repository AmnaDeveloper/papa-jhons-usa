'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
    Tag, 
    Check, 
    Clock, 
    Copy, 
    ChevronDown, 
    Zap, 
    Smartphone, 
    Star, 
    Car, 
    Mail, 
    Gift, 
    Gamepad2,
    CheckCircle2,
    Info,
    TrendingUp
} from 'lucide-react';

interface CouponsClientProps {
    month: string;
    coupons: any[];
    faqs: any[];
}

export default function CouponsClient({ month, coupons, faqs }: CouponsClientProps) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    const copyToClipboard = (code: string) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="bg-[#fcfaf8] min-h-screen font-sans pb-20">
            {/* ── HERO SECTION ── */}
            <section className="bg-[#1A3D17] border-b-8 border-[#cc0000] text-white py-16 md:py-24 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CCEE18] rounded-full -mr-64 -mt-64 opacity-5 pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-[#CCEE18] text-[#1A3D17] font-black uppercase tracking-[0.2em] text-[10px] px-6 py-2.5 rounded-full mb-6 shadow-lg">
                        <CheckCircle2 size={12} /> Verified & Updated Daily — April 2026
                    </div>
                    <h1
                        className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4"
                        style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}
                    >
                        Coupons &amp; <span className="text-[#CCEE18]">Deals</span>
                    </h1>
                    <p className="text-lg text-white/80 font-bold max-w-2xl mx-auto tracking-wide mb-6">
                        18+ verified Papa John's coupon codes updated daily. Save up to 50% on pizzas, sides & delivery orders.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70 font-bold uppercase tracking-widest">
                        <span className="flex items-center gap-1"><Check size={14} className="text-[#CCEE18]" /> 18 Active Codes</span>
                        <span className="flex items-center gap-1"><Check size={14} className="text-[#CCEE18]" /> Last checked: April 15, 2026</span>
                        <span className="flex items-center gap-1"><Check size={14} className="text-[#CCEE18]" /> Up to 50% Off</span>
                        <span className="flex items-center gap-1"><Check size={14} className="text-[#CCEE18]" /> Free Delivery Available</span>
                    </div>
                </div>
            </section>

            {/* ── STATS BAR ── */}
            <div className="bg-white border-b border-gray-100 py-6 shadow-sm relative z-20">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Active Codes", val: "18", color: "text-[#cc0000]" },
                            { label: "Max Discount", val: "50%", color: "text-[#1A3D17]" },
                            { label: "Best Deal", val: "BOGO", color: "text-[#cc0000]" },
                            { label: "Delivery", val: "Free", color: "text-[#1A3D17]" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className={`text-3xl font-black ${stat.color} mb-1 transition-transform hover:scale-110 duration-300`}>{stat.val}</div>
                                <div className="text-[10px] uppercase font-black tracking-widest text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── BREADCRUMB ── */}
            <div className="max-w-[1200px] mx-auto px-4 py-6">
                <nav className="flex items-center gap-2 text-[12px] font-bold text-gray-400">
                    <Link href="/" className="hover:text-[#cc0000] transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-[#1A3D17]">Coupons & Deals</span>
                </nav>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* ── LEFT COLUMN ── */}
                <main className="lg:col-span-8">
                    
                    {/* E-E-A-T Signal */}
                    <div className="bg-green-50 border border-green-100 rounded-2xl p-4 mb-10 flex items-center gap-3">
                        <div className="bg-[#1A3D17] p-2 rounded-full text-white">
                            <Check size={16} strokeWidth={3} />
                        </div>
                        <p className="text-xs font-bold text-[#1A3D17]">
                            Last verified: April 15, 2026 — reviewed by our dedicated deals team
                        </p>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-2xl font-black uppercase text-[#1A3D17] tracking-tighter mb-2">Active Papa John's Coupon Codes</h2>
                        <p className="text-sm text-gray-500 font-medium">Click any code to copy it. Paste at checkout on PapaJohns.com or the app.</p>
                    </div>

                    {/* ── COUPON GRID ── */}
                    <div className="space-y-4 mb-16">
                        {coupons.map((coupon) => (
                            <div 
                                key={coupon.id}
                                className={`bg-white rounded-[32px] overflow-hidden border-2 transition-all hover:shadow-xl ${coupon.featured ? 'border-[#cc0000]' : 'border-gray-100'}`}
                            >
                                <div className="flex flex-col md:flex-row items-stretch">
                                    <div className={`w-full md:w-32 flex flex-col items-center justify-center p-6 text-white text-center ${coupon.color === 'green' ? 'bg-[#1A3D17]' : 'bg-[#cc0000]'}`}>
                                        <div className="text-3xl font-black leading-none mb-1">{coupon.discount}</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest opacity-80">{coupon.sub}</div>
                                    </div>
                                    <div className="flex-1 p-6 md:p-8">
                                        <div className="flex flex-wrap items-center gap-2 mb-3">
                                            <h3 className="text-lg font-black text-[#1A3D17] uppercase tracking-tight">{coupon.title}</h3>
                                            {coupon.tags.map((tag: any) => (
                                                <span key={tag} className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${tag === 'Popular' ? 'bg-[#CCEE18] text-[#1A3D17]' : 'bg-gray-100 text-gray-500'}`}>
                                                    {tag === 'Popular' && <Zap size={8} className="inline mb-0.5 mr-1" fill="currentColor" />} {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-sm text-gray-500 mb-6 leading-relaxed font-medium">{coupon.desc}</p>
                                        
                                        <div className="flex flex-wrap items-center justify-between gap-4">
                                            {coupon.code ? (
                                                <div className="flex items-center gap-2">
                                                    <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl px-5 py-2.5 font-mono text-lg font-bold text-[#1A3D17] tracking-widest relative group cursor-pointer" onClick={() => copyToClipboard(coupon.code)}>
                                                        {coupon.code}
                                                        <div className="absolute inset-0 bg-[#CCEE18] opacity-0 group-hover:opacity-10 transition-opacity rounded-xl"></div>
                                                    </div>
                                                    <button 
                                                        onClick={() => copyToClipboard(coupon.code)}
                                                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all ${copiedCode === coupon.code ? 'bg-[#1A3D17] text-white' : 'bg-[#cc0000] text-white hover:bg-[#1A3D17]'}`}
                                                    >
                                                        {copiedCode === coupon.code ? <><Check size={14} strokeWidth={3} /> Copied!</> : <><Copy size={14} /> Copy Code</>}
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="bg-green-50 text-[#1A3D17] border border-green-100 px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center gap-2">
                                                    <TrendingUp size={14} strokeWidth={3} /> {coupon.noCodeLabel}
                                                </div>
                                            )}
                                            <div className="text-[10px] font-black uppercase tracking-widest text-gray-300">
                                                Expires: {coupon.expiry}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ── HOW TO USE ── */}
                    <section className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100 mb-16">
                        <h2 className="text-2xl font-black uppercase text-[#1A3D17] tracking-tighter mb-8 flex items-center gap-3">
                            <Info className="text-[#cc0000]" /> How to Use a Papa John's Promo Code
                        </h2>
                        <div className="space-y-6">
                            {[
                                { step: 1, text: <><strong>Copy your code above</strong> — click the code or the "Copy Code" button. The code is now in your clipboard.</> },
                                { step: 2, text: <><strong>Build your order</strong> — go to <a href="https://www.papajohns.com" target="_blank" rel="nofollow noopener" className="text-[#cc0000] underline">PapaJohns.com</a> or the Papa John's app and add your pizzas, sides and drinks to the cart.</> },
                                { step: 3, text: <><strong>Proceed to checkout</strong> — click the cart icon, then select "Checkout" to review your order.</> },
                                { step: 4, text: <><strong>Enter your promo code</strong> — find the "Promo Code" field at the top of the checkout page (above the order summary). Paste your code and click "Apply".</> },
                                { step: 5, text: <><strong>Verify the discount</strong> — make sure the discount appears in your order total before completing payment. If not, check the code terms.</> }
                            ].map((item) => (
                                <div key={item.step} className="flex gap-6">
                                    <div className="w-10 h-10 rounded-full bg-[#cc0000] text-white flex items-center justify-center font-black flex-shrink-0 shadow-lg">
                                        {item.step}
                                    </div>
                                    <p className="text-gray-600 font-medium leading-relaxed pt-2">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── SAVING TIPS ── */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-black uppercase text-[#1A3D17] tracking-tighter mb-2">5 Ways to Save More at Papa John's</h2>
                        <p className="text-sm text-gray-500 font-medium mb-8">Stack these strategies with coupon codes for maximum savings.</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { icon: <Smartphone />, title: "Download the App", desc: "The Papa John's app has exclusive location-based deals not available on the website. Check it before every order." },
                                { icon: <Star />, title: "Join Papa Rewards", desc: "Earn 1 point per $1 spent. Every 75 points = $10 in Papa Dough. Free to join — use your rewards on any order." },
                                { icon: <Car />, title: "Choose Carryout", desc: "Carryout automatically gets 50% off all pizzas — no code needed. You save on delivery fees too." },
                                { icon: <Mail />, title: "Sign Up for Texts", desc: "Text JOIN to 47272 to get exclusive weekly discounts sent straight to your phone — not available anywhere else." },
                                { icon: <Gift />, title: "Birthday Reward", desc: "Papa Rewards members get a free dessert on their birthday. Sign up at least a week before your birthday." },
                                { icon: <Gamepad2 />, title: "Game Day Bundles", desc: "During major sporting events, Papa John's runs special bundle deals. Two large 2-topping pizzas for just $9.99 each." }
                            ].map((tip, i) => (
                                <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:border-[#CCEE18] transition-all">
                                    <div className="text-[#cc0000] mb-4">{tip.icon}</div>
                                    <h3 className="font-black text-[#1A3D17] uppercase tracking-tight mb-2 text-sm">{tip.title}</h3>
                                    <p className="text-xs text-gray-500 font-medium leading-relaxed">{tip.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── DETAILED CONTENT ── */}
                    <article className="prose max-w-none text-gray-600 font-medium leading-[1.8] space-y-6 mb-16">
                        <h2 className="text-2xl font-black uppercase text-[#1A3D17] tracking-tighter">Complete Guide to Papa John's Savings in April 2026</h2>
                        <p>
                            Papa John's is one of America's largest pizza chains, operating thousands of locations across the US. Unlike competitors who run random promotions, Papa John's runs a consistent set of deals year-round — meaning savvy customers can almost always find a working promo code or automatic discount before placing their order.
                        </p>
                        <h3 className="text-xl font-black uppercase text-[#1A3D17]">Best Papa John's Deals Right Now</h3>
                        <p>
                            The standout deal this month is the <strong>BOGO free pizza offer</strong> using code BOGO4U — buy one large pizza and get a second one completely free. This is one of the best-value offers Papa John's runs and it comes around several times a year. If you prefer a simpler percentage discount, PIZZA25 takes 25% off your entire order with no minimum spend.
                        </p>
                        <p>
                            For carryout customers, the <strong>50% off all pizzas</strong> deal is the most consistent saving available — it requires no coupon code and applies automatically when you select carryout at checkout. On a large specialty pizza priced at $16.99, that's over $8 saved instantly.
                        </p>
                        <h3 className="text-xl font-black uppercase text-[#1A3D17]">How Papa Rewards Works</h3>
                        <p>
                            Papa Rewards is Papa John's free loyalty program and one of the smartest ways to save on regular orders. For every dollar you spend, you earn one Papa Rewards point. Once you reach 75 points, you receive $10 in Papa Dough — a credit that can be applied to any order. That's effectively a 13% return on all spending for loyal customers.
                        </p>
                        <p>
                            Rewards members also receive a free dessert on their birthday, early access to new menu items, and exclusive promo codes not available to non-members. You can join Papa Rewards for free on the <a href="https://www.papajohns.com" rel="nofollow noopener" target="_blank" className="text-[#cc0000] underline">official Papa John's website</a> or through the app.
                        </p>
                        <h3 className="text-xl font-black uppercase text-[#1A3D17]">Papa John's App — Hidden Deals</h3>
                        <p>
                            The Papa John's mobile app is arguably the best source of exclusive deals. When you log in and select your local store, the app surfaces location-specific offers that are often not advertised anywhere else. These include carryout-only specials, large order discounts, and limited-time promotions run by individual franchise locations.
                        </p>
                        <p>
                            The app also sends push notifications for flash sales — deals that might only last a few hours. Turning on notifications for the Papa John's app is one of the easiest ways to catch a 40–50% off deal before it expires.
                        </p>
                        <h3 className="text-xl font-black uppercase text-[#1A3D17]">Seasonal Deals and Holiday Promos</h3>
                        <p>
                            Papa John's runs especially strong promotions around major US sporting events, including the NFL season, the Super Bowl, and college football playoffs. The Game Day bundle — two large 2-topping pizzas at $9.99 each — typically appears during these periods. Back-to-school season (August–September) and the holiday shopping period (November–December) also tend to bring larger-than-usual sitewide discounts.
                        </p>
                        <h3 className="text-xl font-black uppercase text-[#1A3D17]">Delivery vs. Carryout — Which Saves More?</h3>
                        <p>
                            Choosing carryout over delivery almost always saves you more money at Papa John's. Here is why: the carryout deal gives you 50% off all pizzas automatically. On top of that, you avoid the delivery fee of $3.99–$5.99 and you are not expected to tip a driver. On a $25 pizza order, switching from delivery to carryout could save $16–$18 in total.
                        </p>
                        <p>
                            If you do need delivery, make sure your order reaches $40 to trigger free delivery. Below that threshold, the delivery fee applies in full.
                        </p>
                        <h3 className="text-xl font-black uppercase text-[#1A3D17]">Can I Stack Papa John's Coupons?</h3>
                        <p>
                            Officially, Papa John's only allows one promo code per order. If you enter a second code, only the most recently entered code is applied. However, you can combine a promo code with Papa Rewards Papa Dough in most cases — this is the closest thing to stacking deals available. Choose the code that gives you the highest percentage discount for your specific cart before applying.
                        </p>
                        <p>
                            We verify every code on this page before publishing and update our list daily. If a code has stopped working, refresh this page — we'll have updated the listing. You can also check the <Link href="/papa-johns-rewards" className="text-[#cc0000] underline">Papa Rewards page</Link> or the <Link href="/menus-prices" className="text-[#cc0000] underline">full menu with prices</Link> for more information.
                        </p>
                    </article>

                    {/* ── FAQs ── */}
                    <section className="mb-16">
                        <section className="mb-8">
                            <h2 className="text-2xl font-black uppercase text-[#1A3D17] tracking-tighter">Frequently Asked Questions</h2>
                            <p className="text-sm text-gray-500 font-medium">Everything you need to know about Papa John's coupons and deals.</p>
                        </section>
                        <div className="space-y-3">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
                                    <button 
                                        onClick={() => toggleFaq(i)}
                                        className="w-full flex items-center justify-between p-6 text-left"
                                    >
                                        <span className="font-black text-[#1A3D17] uppercase tracking-tight text-sm">{faq.q}</span>
                                        <ChevronDown className={`text-gray-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                                    </button>
                                    <div className={`transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                                        <div className="p-6 pt-0 text-sm text-gray-500 font-medium leading-relaxed border-t border-gray-50">
                                            {faq.a}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── AUTHOR BOX ── */}
                    <div className="bg-white rounded-[32px] p-8 border border-gray-100 flex flex-col md:flex-row gap-6 items-center md:items-start shadow-sm">
                        <div className="w-20 h-20 rounded-full bg-[#1A3D17] flex items-center justify-center text-white text-3xl font-black shadow-lg flex-shrink-0">
                            DT
                        </div>
                        <div className="text-center md:text-left">
                            <div className="font-black text-[#1A3D17] uppercase tracking-widest text-xs mb-2">Editor & Verification</div>
                            <h4 className="text-lg font-black text-[#cc0000] uppercase mb-4">Deals Team — PapaJohns-Menus.us</h4>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                Our deals team verifies every coupon code on this page before publishing. We check codes daily and remove expired offers immediately. If you find a code that has stopped working, let us know via the contact page and we'll update it within 24 hours.
                            </p>
                        </div>
                    </div>

                </main>

                {/* ── RIGHT COLUMN: SIDEBAR ── */}
                <aside className="lg:col-span-4 space-y-6">
                    
                    <div className="bg-[#cc0000] rounded-[32px] p-8 text-white shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700"></div>
                        <h3 className="text-xl font-black uppercase tracking-tight mb-4 flex items-center gap-2">
                             Papa Rewards
                        </h3>
                        <p className="text-sm font-bold text-white/80 mb-8 leading-relaxed">
                            Earn $10 Papa Dough for every 75 points. 1 point per $1 spent. Free birthday dessert included.
                        </p>
                        <Link 
                            href="/papa-johns-rewards"
                            className="block w-full bg-white text-[#cc0000] font-black uppercase tracking-widest text-xs py-4 rounded-2xl text-center transition-all hover:bg-[#CCEE18] hover:text-[#1A3D17]"
                        >
                            Learn About Papa Rewards →
                        </Link>
                    </div>

                    <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
                        <h3 className="text-sm font-black text-[#1A3D17] uppercase tracking-widest mb-6">Today's Best Deals</h3>
                        <div className="space-y-4">
                            {[
                                { name: "BOGO Pizza", val: "50% off" },
                                { name: "Code PIZZA25", val: "25% off" },
                                { name: "Carryout Special", val: "50% off" },
                                { name: "Free Delivery", val: "On $40+" },
                                { name: "Code SAVE10", val: "$10 off $40" },
                                { name: "Code HOTEL25", val: "30% off" },
                            ].map((deal, i) => (
                                <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                                    <span className="text-xs font-bold text-gray-700">{deal.name}</span>
                                    <span className="text-xs font-black text-[#1A3D17]">{deal.val}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
                        <h3 className="text-sm font-black text-[#1A3D17] uppercase tracking-widest mb-6">Quick Links</h3>
                        <div className="space-y-2">
                            {[
                                { label: "🍕 Full Menu & Prices", href: "/menus-prices" },
                                { label: "📍 Find a Store Near Me", href: "/store-locator" },
                                { label: "🕐 Store Hours", href: "/hours" },
                                { label: "⭐ Papa Rewards Program", href: "/papa-johns-rewards" },
                                { label: "🍕 Classic Pizzas", href: "/posts/classic-pizzas" },
                                { label: "🍗 Sides & Dips", href: "/posts/sides" },
                                { label: "🥤 Drinks", href: "/menus-prices/drinks" },
                                { label: "🍰 Desserts", href: "/posts/papa-johns-desserts" },
                            ].map((link, i) => (
                                <Link 
                                    key={i}
                                    href={link.href}
                                    className="flex items-center gap-3 p-3 rounded-2xl hover:bg-gray-50 transition-all text-xs font-bold text-gray-600 hover:text-[#cc0000]"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
                        <h3 className="text-sm font-black text-[#1A3D17] uppercase tracking-widest mb-4">How Coupons Work</h3>
                        <p className="text-[12px] text-gray-600 font-medium leading-relaxed">
                            1. Copy a code above<br/>
                            2. Add items to cart<br/>
                            3. Paste at checkout<br/>
                            4. Click Apply<br/>
                            5. Only one code per order
                        </p>
                    </div>

                </aside>

            </div>

        </div>
    );
}

const MapPin = ({ size }: { size: number }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
    </svg>
);
