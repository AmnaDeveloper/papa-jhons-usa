import { Metadata } from 'next';
import { generatePageSEO } from '../../lib/seo-config';
import InternalLinks from '../../components/seo/InternalLinks';
import Link from 'next/link';

export const metadata: Metadata = generatePageSEO(
    "About Us - Your #1 Unofficial Guide to Papa Johns Menu, Prices & Deals",
    "Welcome to papajohns-menus.us — an independent, unofficial fan website dedicated to helping Papa Johns customers across the United States find accurate menu information.",
    "/about",
    "About Papa Johns menu, independent fan site, pizza menu guide, Papa Johns unofficial"
);

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Page Header */}
            <div className="bg-[#1A3D17] py-16 md:py-24 text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-[#CCEE18] text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4" style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}>
                        About Us
                    </h1>
                    <p className="text-white text-lg md:text-xl font-medium opacity-90 italic">
                        Your #1 Unofficial Guide to Papa Johns Menu, Prices & Deals in the USA
                    </p>
                    <div className="mt-6 flex justify-center items-center gap-2 text-[#CCEE18] text-sm font-bold tracking-widest uppercase">
                        <span>Last Updated:</span>
                        <span className="bg-white/10 px-3 py-1 rounded-full">May 2026</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-[1000px] mx-auto px-4 md:px-8 py-16">
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-12">
                    
                    <section>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-6 border-l-4 border-[#cc0000] pl-4">
                            Who We Are
                        </h2>
                        <p>
                            Welcome to <strong>papajohns-menus.us</strong> — an independent, unofficial fan website dedicated to helping Papa Johns customers across the United States find accurate menu information, updated prices, current deals, and nutritional details all in one place.
                        </p>
                        <p>
                            We are pizza lovers, just like you. We built this site because finding up-to-date Papa Johns menu prices, current coupons, and nutritional information was scattered and time-consuming. Our goal is simple: give every Papa Johns fan a fast, reliable, and easy-to-use resource — for free.
                        </p>
                    </section>

                    <section className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-8">
                            What We Offer
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">🍕</span>
                                <div>
                                    <strong className="block text-[#1A3D17] uppercase text-sm">Complete Menu</strong>
                                    <p className="text-sm">Papa Johns Menu with Prices — updated regularly for 2026</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">💰</span>
                                <div>
                                    <strong className="block text-[#1A3D17] uppercase text-sm">Coupons & Deals</strong>
                                    <p className="text-sm">Verified deals updated daily by our team</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">🏪</span>
                                <div>
                                    <strong className="block text-[#1A3D17] uppercase text-sm">Store Locator</strong>
                                    <p className="text-sm">Find your nearest Papa Johns location instantly</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">🥗</span>
                                <div>
                                    <strong className="block text-[#1A3D17] uppercase text-sm">Nutrition Guide</strong>
                                    <p className="text-sm">Full calories, macros, and allergen information</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">⭐</span>
                                <div>
                                    <strong className="block text-[#1A3D17] uppercase text-sm">Honest Reviews</strong>
                                    <p className="text-sm">Real breakdowns of every popular menu item</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">📍</span>
                                <div>
                                    <strong className="block text-[#1A3D17] uppercase text-sm">Location Guides</strong>
                                    <p className="text-sm">City-specific information across the USA</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-6 border-l-4 border-[#cc0000] pl-4">
                            Our Mission
                        </h2>
                        <p>
                            Our mission is to save Papa Johns customers time and money. Whether you want to know the price of a large pepperoni pizza, find a working promo code before checkout, or check the calories in your favorite wings — we have it all in one place, always updated.
                        </p>
                    </section>

                    <section className="bg-[#fff5f5] p-8 rounded-[2rem] border border-[#ffcccc]">
                        <h2 className="text-2xl font-black text-[#cc0000] uppercase tracking-tight mb-4">
                            Important Disclaimer
                        </h2>
                        <div className="text-sm space-y-4 text-gray-700 font-medium">
                            <p>
                                <strong>papajohns-menus.us</strong> is an independent fan website and is not affiliated with, endorsed by, sponsored by, or officially connected to Papa Johns International, Inc. in any way.
                            </p>
                            <p>
                                All Papa Johns trademarks, logos, and brand names are the property of Papa Johns International, Inc. and its subsidiaries. All other trademarks are the property of their respective owners.
                            </p>
                            <p>
                                Menu prices, availability, and deals listed on this site are estimates based on publicly available information and may vary by location. For the most accurate and current pricing, please visit the official Papa Johns website at <a href="https://www.papajohns.com" target="_blank" rel="noopener noreferrer" className="text-[#cc0000] underline">papajohns.com</a>.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-6 border-l-4 border-[#cc0000] pl-4">
                            Our Content Standards
                        </h2>
                        <ul className="list-disc pl-6 space-y-4 font-medium">
                            <li><strong>Regularly updated:</strong> We review and update prices and menu items monthly.</li>
                            <li><strong>Independently researched:</strong> Our team verifies information from multiple sources.</li>
                            <li><strong>Honest:</strong> We give real reviews and comparisons, not paid promotions.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-6 border-l-4 border-[#cc0000] pl-4">
                            Privacy & Advertising
                        </h2>
                        <p>
                            This website uses <strong>Google AdSense</strong> to display advertisements. Google AdSense may use cookies to serve ads based on your prior visits to this website or other websites. You can opt out of personalized advertising by visiting Google's Ads Settings.
                        </p>
                        <p>
                            For full details on how we collect and use data, please read our <Link href="/privacy-policy" className="text-[#cc0000] font-bold hover:underline">Privacy Policy</Link>.
                        </p>
                    </section>

                    <section className="border-2 border-dashed border-gray-200 p-8 rounded-[2rem]">
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-6">
                            Contact Us
                        </h2>
                        <p className="mb-6">
                            Have a question, found incorrect information, or want to suggest a correction? We'd love to hear from you.
                        </p>
                        <div className="space-y-3 font-bold">
                            <p className="flex items-center gap-3">📧 Email: <span className="text-[#cc0000]">contact@papajohns-menus.us</span></p>
                            <p className="flex items-center gap-3">🌐 Website: <Link href="/" className="text-[#cc0000]">papajohns-menus.us</Link></p>
                        </div>
                        <p className="mt-6 text-sm italic text-gray-500">
                            We aim to respond to all inquiries within 48 hours.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-black text-[#1A3D17] uppercase tracking-tight mb-8">
                            Most Popular Guides
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <Link href="/menus-prices" className="bg-gray-50 p-4 rounded-xl text-[10px] font-black uppercase text-center hover:bg-[#CCEE18] transition-colors">Menu & Prices</Link>
                            <Link href="/coupons" className="bg-gray-50 p-4 rounded-xl text-[10px] font-black uppercase text-center hover:bg-[#CCEE18] transition-colors">Coupons & Deals</Link>
                            <Link href="/store-locator" className="bg-gray-50 p-4 rounded-xl text-[10px] font-black uppercase text-center hover:bg-[#CCEE18] transition-colors">Store Locator</Link>
                            <Link href="/posts/papa-johns-nutrition-guide" className="bg-gray-50 p-4 rounded-xl text-[10px] font-black uppercase text-center hover:bg-[#CCEE18] transition-colors">Nutrition Guide</Link>
                            <Link href="/posts/papa-johns-wings" className="bg-gray-50 p-4 rounded-xl text-[10px] font-black uppercase text-center hover:bg-[#CCEE18] transition-colors">Wings Menu</Link>
                            <Link href="/posts/papa-johns-stuffed-crust-pizza" className="bg-gray-50 p-4 rounded-xl text-[10px] font-black uppercase text-center hover:bg-[#CCEE18] transition-colors">Stuffed Crust</Link>
                            <Link href="/posts/papa-johns-desserts" className="bg-gray-50 p-4 rounded-xl text-[10px] font-black uppercase text-center hover:bg-[#CCEE18] transition-colors">Desserts Menu</Link>
                            <Link href="/papa-johns-rewards" className="bg-gray-50 p-4 rounded-xl text-[10px] font-black uppercase text-center hover:bg-[#CCEE18] transition-colors">Rewards Program</Link>
                        </div>
                    </section>
                </div>

                <div className="mt-20 pt-10 border-t border-gray-100">
                    <InternalLinks />
                </div>
            </div>

            {/* Footer Simple CTA */}
            <div className="bg-[#1A3D17] text-white py-12 px-4 text-center">
                <p className="mb-4 font-bold text-[#CCEE18] uppercase tracking-widest text-sm">Hungry for something else?</p>
                <Link href="/menus-prices" className="inline-block bg-[#cc0000] text-white font-black px-8 py-3 rounded-full hover:bg-white hover:text-[#1A3D17] transition-all shadow-lg transform hover:scale-105">
                    Explore Full Menu →
                </Link>
            </div>
        </div>
    );
}
