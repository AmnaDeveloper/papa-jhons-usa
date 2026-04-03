'use client';

import Link from 'next/link';
import { ExternalLink, AlertTriangle, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        setSubscribeStatus('loading');
        setTimeout(() => {
            setSubscribeStatus('success');
        }, 1200);
    };

    return (
        <footer className="bg-black text-gray-300 font-sans border-t-[3px] border-[#cc0000]">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 pt-16 pb-10">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 mb-12">
                    {/* Newsletter Col */}
                    <div className="md:col-span-5 lg:col-span-4 space-y-6">
                        <Link href="/" className="inline-block mb-2">
                            <h2 className="text-3xl font-black italic tracking-tighter uppercase leading-none" style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}>
                                <span className="text-[#CCEE18]">PAPA</span> <span className="text-white">JOHNS</span>
                            </h2>
                        </Link>

                        <div>
                            {subscribeStatus === 'success' ? (
                                <div className="space-y-4 animate-fade-in pr-4">
                                    <h3 className="
                                    text-[#CCEE18] text-xl font-bold flex items-center gap-2">
                                        <Mail size={22} strokeWidth={2.5} /> 🎉 Thanks for subscribing!
                                    </h3>
                                    <div className="bg-[#241a14] border border-[#36271e] p-5 rounded-md space-y-4">
                                        <p className="text-gray-200 font-bold flex items-center gap-2 text-[13px]">
                                            ✉️ Check your inbox for a welcome email!
                                        </p>
                                        <p className="text-gray-400 text-xs">
                                            Want instant notifications for new menu items and deals?
                                        </p>
                                        <button
                                            onClick={() => alert("Push notifications enabled!")}
                                            className="w-full bg-[#36271e]  text-[#CCEE18] hover:bg-[#f39c12] hover:text-black font-black uppercase tracking-wider py-3 rounded text-xs transition-colors border border-[#f39c12]/30 shadow-inner"
                                        >
                                            🔔 ENABLE PUSH NOTIFICATIONS
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-[#CCEE18] text-lg font-bold mb-2">Stay Updated</h3>
                                    <p className="text-sm text-gray-400 mb-5 leading-relaxed pr-4">
                                        Get the latest menu updates, special offers, and food news delivered to your inbox.
                                    </p>
                                    <form className="space-y-3 w-max-[320px] max-w-sm" onSubmit={handleSubscribe}>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full bg-[#878787] text-white placeholder-gray-300 px-4 py-3 rounded-md border border-transparent focus:outline-none focus:border-[#CCEE18] transition-colors"
                                            required
                                            disabled={subscribeStatus === 'loading'}
                                        />
                                        <button
                                            type="submit"
                                            disabled={subscribeStatus === 'loading'}
                                            className="w-full bg-[#CCEE18] text-black font-black uppercase tracking-wider py-3 rounded-md hover:bg-white transition-colors disabled:opacity-50"
                                        >
                                            {subscribeStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Spacer for large screens */}
                    <div className="hidden lg:block lg:col-span-1"></div>

                    {/* Menu Links */}
                    <div className="md:col-span-3 lg:col-span-2">
                        <h3 className=" text-[#CCEE18] text-lg font-bold mb-6">Menu</h3>
                        <ul className="space-y-4 text-[13px]">
                            <li><Link href="/menus-prices" className="hover:text-white transition-colors">All Menus</Link></li>
                            <li><Link href="/menus-prices/classic-pizzas" className="hover:text-white transition-colors">Classic Pizzas</Link></li>
                            <li><Link href="/menus-prices/super-loaded" className="hover:text-white transition-colors">Super Loaded</Link></li>
                            <li><Link href="/menus-prices/sides" className="hover:text-white transition-colors">Sides & Dips</Link></li>
                            <li><Link href="/menus-prices/pastas" className="hover:text-white transition-colors">Pastas</Link></li>
                            <li><Link href="/menus-prices/drinks" className="hover:text-white transition-colors">Drinks</Link></li>
                            <li><Link href="/posts/papa-johns-desserts" className="hover:text-white transition-colors">Desserts</Link></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="md:col-span-2 lg:col-span-2">
                        <h3 className="text-[#CCEE18] text-lg font-bold mb-6">Company</h3>
                        <ul className="space-y-4 text-[13px]">
                            <li><Link href="/contact" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/store-locator" className="hover:text-white transition-colors">Store Locator</Link></li>
                            <li><Link href="/hours" className="hover:text-white transition-colors">Store Hours</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/coupons" className="hover:text-white transition-colors">Coupons & Deals</Link></li>
                        </ul>
                    </div>

                    {/* Legal & Official Links */}
                    <div className="md:col-span-2 lg:col-span-2">
                        <h3 className="text-[#CCEE18] text-lg font-bold mb-6">Legal</h3>
                        <ul className="space-y-4 text-[13px] mb-8">
                            <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                            <li><Link href="/cookies" className="hover:text-white transition-colors">Cookies Policy</Link></li>
                        </ul>

                        <h3 className="text-[#CCEE18] text-lg font-bold mb-6">Official Site</h3>
                        <ul className="space-y-4 text-[13px]">
                            <li>
                                <a href="https://www.papajohns.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                                    Papa John's <ExternalLink size={12} className="text-gray-500 group-hover:text-white transition-colors" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#2a1f18] my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
                    {/* Copyright & Disclaimer Logo area */}
                    <div className="flex items-center gap-4 text-[11px] text-gray-300">
                        <Link href="/" className="flex-shrink-0 opacity-80 hover:opacity-100 transition-all">
                            <span className="text-xl font-black italic tracking-tighter uppercase leading-none" style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}>
                                <span className="text-[#CCEE18]">PAPA</span> <span className="text-white">JOHNS</span>
                            </span>
                        </Link>
                        <p>
                            &copy; {currentYear} PapaJohns-Menu.us — An Independent Fan Guide. Not affiliated with Papa John's.
                        </p>
                    </div>

                    {/* Disclaimer Box & Small Links */}
                    <div className="w-full lg:w-auto flex flex-col lg:items-end gap-3">
                        {/* Small inline links above box */}
                        <div className="flex gap-4 text-[10px] text-gray-400 mb-1">
                            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
                            <Link href="/cookies" className="hover:text-white transition-colors">Cookies Policy</Link>
                        </div>

                        <div className="bg-[#241a14] border border-[#36271e] p-5 rounded-md text-[11px] text-gray-300 max-w-xl flex items-start gap-3">
                            <AlertTriangle size={14} className="text-[#f39c12] flex-shrink-0 mt-0.5" />
                            <p className="leading-relaxed">
                                <span className="text-[#f39c12]">Disclaimer:</span> Papa John's Menu is an independent informational site. We are <span className="text-gray-500">not affiliated with or endorsed by Papa John's.</span> All menu items, prices, and nutritional information are for reference only.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
