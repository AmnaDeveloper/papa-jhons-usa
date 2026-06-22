import { Metadata } from 'next';
import { generatePageSEO } from '../../lib/seo-config';
import InternalLinks from '../../components/seo/InternalLinks';
import Link from 'next/link';
import Image from 'next/image';
import FAQJsonLd from '../../components/FAQJsonLd';

export const metadata: Metadata = generatePageSEO(
    "About Us: The Team Behind PapaJohns-Menus.us",
    "Meet the real people behind papajohns-menus.us, an independent pizza guide run by food writers and deal hunters helping Americans save money on every Papa Johns order since 2024.",
    "/about",
    "About Papa Johns menu, independent fan site, pizza menu guide, Papa Johns unofficial, team behind"
);

const aboutFaqs = [
    {
        question: "Is PapaJohns-Menus.us affiliated with Papa Johns?",
        answer: "No. PapaJohns-Menus.us is an independent informational guide and is not affiliated with, endorsed by, or sponsored by Papa Johns International, Inc.",
    },
    {
        question: "How does this site verify Papa Johns menu prices?",
        answer: "Our team checks prices against public menu information, the official ordering flow, location pages, and reader reports. Final prices can still vary by store, delivery type, tax, and promotion.",
    },
    {
        question: "Who writes the Papa Johns guides on this site?",
        answer: "The site is written by an independent editorial team focused on menu research, coupon verification, nutrition notes, and practical ordering advice.",
    },
    {
        question: "How often is PapaJohns-Menus.us updated?",
        answer: "Major menu guides and coupon pages are reviewed regularly, with important price, availability, and deal changes updated when confirmed.",
    },
];

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            <FAQJsonLd faqs={aboutFaqs} />
            {/* Page Header */}
            <div className="bg-[#1A3D17] py-16 md:py-24 text-center px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#CCEE18_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-[#CCEE18] text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4" style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}>
                        About Us
                    </h1>
                    <p className="text-white text-xl md:text-2xl font-bold uppercase tracking-tight max-w-2xl mx-auto mb-6">
                        The Team Behind PapaJohns-Menus.us
                    </p>
                    <div className="flex justify-center items-center gap-2 text-[#CCEE18] text-sm font-bold tracking-widest uppercase">
                        <span>Last Updated:</span>
                        <span className="bg-white/10 px-3 py-1 rounded-full text-white">May 2026</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-[1000px] mx-auto px-4 md:px-8 py-16">
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-16">
                    
                    {/* Why We Built This Site */}
                    <section className="bg-gradient-to-br from-[#1A3D17]/5 to-[#CCEE18]/5 p-8 md:p-12 rounded-[2.5rem] border border-[#1A3D17]/10">
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-6 flex items-center gap-3">
                            <span className="text-[#cc0000]">💡</span> Why We Built This Site
                        </h2>
                        <div className="space-y-4 text-lg">
                            <p className="font-semibold text-gray-800">
                                If you have ever opened the Papa Johns app at 7 PM trying to find the best deal, only to end up confused by expired coupons, outdated prices, and scattered information, you know exactly why we built this site.
                            </p>
                            <p>
                                <strong>PapaJohns-Menus.us</strong> was started in 2024 by a small team of food writers, budget-conscious families, and pizza fans who wanted one place to compare Papa Johns menu prices, coupon notes, nutrition references, and ordering tips before checkout.
                            </p>
                            <p className="font-medium text-[#1A3D17]">
                                So we built it ourselves.
                            </p>
                        </div>
                    </section>

                    {/* Who We Are */}
                    <section>
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-4">
                                Who We Are
                            </h2>
                            <p className="text-gray-600 text-lg">
                                We are an independent editorial team, not affiliated with Papa Johns International in any way. We are everyday Americans who genuinely love pizza and believe that finding good food at a fair price should be simple.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Sarah */}
                            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#cc0000] to-[#ff4d4d]"></div>
                                <div className="flex items-center gap-4 mb-6 mt-2">
                                    <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                                        <Image
                                            src="/sarah-jenkins.png"
                                            alt="Sarah Jenkins, Editor in Chief"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-gray-900 text-lg leading-tight group-hover:text-[#cc0000] transition-colors">Sarah Jenkins</h3>
                                        <span className="text-[#cc0000] text-xs font-bold uppercase tracking-wider">Editor in Chief</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                                    Sarah has been writing about food, restaurants, and consumer deals for over 6 years. Based in Austin, Texas, she has personally visited and reviewed dozens of Papa Johns locations across the country. She leads our editorial team and ensures every article meets our quality and accuracy standards.
                                </p>
                            </div>

                            {/* Marcus */}
                            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#1A3D17] to-[#2e6e29]"></div>
                                <div className="flex items-center gap-4 mb-6 mt-2">
                                    <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                                        <Image
                                            src="/marcus-webb.png"
                                            alt="Marcus Webb, Deals and Coupons Researcher"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-gray-900 text-lg leading-tight group-hover:text-[#1A3D17] transition-colors">Marcus Webb</h3>
                                        <span className="text-[#1A3D17] text-xs font-bold uppercase tracking-wider">Deals and Coupons</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                                    Marcus is obsessed with saving money on food. He monitors Papa Johns promotions, app deals, and loyalty program updates daily. If there is a working promo code out there, Marcus has already found it.
                                </p>
                            </div>

                            {/* Linda */}
                            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#CCEE18] to-[#99b312]"></div>
                                <div className="flex items-center gap-4 mb-6 mt-2">
                                    <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                                        <Image
                                            src="/linda-torres.png"
                                            alt="Linda Torres, Nutrition and Menu Specialist"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-gray-900 text-lg leading-tight group-hover:text-[#99b312] transition-colors">Linda Torres</h3>
                                        <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Nutrition and Menu</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                                    Linda holds a background in nutrition science and reviews all calorie, macro, and allergen information on our site. She makes sure health-conscious pizza lovers have the facts they need before every order.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* What Makes Us Different */}
                    <section className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100">
                        <div className="text-center max-w-2xl mx-auto mb-10">
                            <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-3">
                                What Makes Us Different
                            </h2>
                            <p className="text-gray-600">
                                There are dozens of menu listing sites out there. Here is what sets us apart:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                                <div className="text-2xl bg-green-50 p-3 rounded-xl text-green-600">✅</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg uppercase mb-1">We Update Daily</h3>
                                    <p className="text-gray-600 text-sm">
                                        Prices, deals, and menu items change constantly. Our team checks for updates every single day, especially coupons and limited-time offers.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                                <div className="text-2xl bg-green-50 p-3 rounded-xl text-green-600">✅</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg uppercase mb-1">We Are Honest</h3>
                                    <p className="text-gray-600 text-sm">
                                        We do not get paid by Papa Johns. We write honest comparisons, real reviews, and genuine opinions. If something is not worth your money, we will say so.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                                <div className="text-2xl bg-green-50 p-3 rounded-xl text-green-600">✅</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg uppercase mb-1">We Are Independent</h3>
                                    <p className="text-gray-600 text-sm">
                                        This is a fan-run informational guide. We have no business relationship with Papa Johns International. Our only loyalty is to our readers.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                                <div className="text-2xl bg-green-50 p-3 rounded-xl text-green-600">✅</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg uppercase mb-1">We Research Thoroughly</h3>
                                    <p className="text-gray-600 text-sm">
                                        Every article is written after real research, visiting locations, checking the official app, comparing competitor pricing, and reading customer feedback from real users.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Our Editorial Standards */}
                    <section className="border-l-4 border-[#cc0000] pl-6 md:pl-8 space-y-6">
                        <div>
                            <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-2">
                                Our Editorial Standards
                            </h2>
                            <p className="text-gray-600 text-lg">
                                We take accuracy seriously. Here is how we maintain quality:
                            </p>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Menu prices are reviewed against public Papa Johns menu information and official checkout details where available",
                                "Nutritional information is cross-checked with official Papa Johns nutrition data",
                                "Coupon codes are tested before being listed on our Deals page",
                                "Articles are reviewed and updated at least once per month",
                                "Any significant price changes are updated within 48 hours of being confirmed"
                            ].map((standard, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-700 font-medium">
                                    <span className="text-[#cc0000] font-black text-lg mt-0.5">•</span>
                                    <span>{standard}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Our Mission */}
                    <section className="bg-[#1A3D17] text-white p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
                        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px]"></div>
                        <div className="relative z-10 space-y-6">
                            <h2 className="text-3xl font-black text-[#CCEE18] uppercase tracking-tight">
                                Our Mission
                            </h2>
                            <p className="text-2xl font-black leading-tight border-b border-white/10 pb-6">
                                To save every Papa Johns customer time, money, and frustration by putting everything they need in one honest, well-researched, and easy-to-use place.
                            </p>
                            <p className="text-lg text-white/90">
                                Whether you are a daily pizza lover, a parent planning a birthday party, or someone just trying to find the cheapest large pizza deal this weekend, this site is for you.
                            </p>
                        </div>
                    </section>

                    {/* Important Disclaimer */}
                    <section className="bg-[#fff5f5] p-8 rounded-3xl border border-[#ffcccc]">
                        <h2 className="text-xl font-black text-[#cc0000] uppercase tracking-tight mb-4 flex items-center gap-2">
                            ⚠️ Important Disclaimer
                        </h2>
                        <div className="text-sm space-y-4 text-gray-700 font-medium">
                            <p>
                                <strong>PapaJohns-Menus.us</strong> is an independent informational website. We are not affiliated with, endorsed by, sponsored by, or officially connected to Papa Johns International, Inc. in any way.
                            </p>
                            <p>
                                All Papa Johns trademarks, logos, and brand names are the property of Papa Johns International, Inc. Menu prices, availability, and deals listed on this site are based on publicly available information and may vary by location. For official and legally binding information, please visit <a href="https://www.papajohns.com" target="_blank" rel="noopener noreferrer" className="text-[#cc0000] underline font-bold hover:text-[#990000] transition-colors">papajohns.com</a>.
                            </p>
                        </div>
                    </section>

                    {/* Get In Touch */}
                    <section className="border-2 border-dashed border-gray-200 p-8 rounded-[2.5rem] bg-gray-50/50">
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-4">
                            Get In Touch
                        </h2>
                        <p className="text-gray-600 mb-6 font-medium">
                            We love hearing from our readers. Whether you spotted an error, want to suggest a topic, or just want to say hello, reach out anytime.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-bold text-gray-800">
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center gap-3">
                                <span className="text-2xl">📧</span>
                                <div>
                                    <span className="block text-xs uppercase text-gray-400 font-bold">Email</span>
                                    <a href="mailto:contact@papajohns-menus.us" className="text-[#cc0000] hover:underline">contact@papajohns-menus.us</a>
                                </div>
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center gap-3">
                                <span className="text-2xl">🌐</span>
                                <div>
                                    <span className="block text-xs uppercase text-gray-400 font-bold">Website</span>
                                    <Link href="/" className="text-[#cc0000] hover:underline">papajohns-menus.us</Link>
                                </div>
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center gap-3">
                                <span className="text-2xl">⏱️</span>
                                <div>
                                    <span className="block text-xs uppercase text-gray-400 font-bold">Response Time</span>
                                    <span className="text-gray-700">Within 48 hours</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Most Popular Guides */}
                    <section>
                        <h3 className="text-2xl font-black text-[#1A3D17] uppercase tracking-tight mb-8">
                            Most Popular Guides
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <Link href="/menus-prices" className="bg-gray-50 p-4 rounded-xl text-[10px] font-black uppercase text-center hover:bg-[#CCEE18] transition-colors">Menu and Prices</Link>
                            <Link href="/coupons" className="bg-gray-50 p-4 rounded-xl text-[10px] font-black uppercase text-center hover:bg-[#CCEE18] transition-colors">Coupons and Deals</Link>
                            <Link href="/store-locator" className="bg-gray-50 p-4 rounded-xl text-[10px] font-black uppercase text-center hover:bg-[#CCEE18] transition-colors">Store Locator</Link>
                            <Link href="/posts/papa-johns-nutrition-guide" className="bg-gray-50 p-4 rounded-xl text-[10px] font-black uppercase text-center hover:bg-[#CCEE18] transition-colors">Nutrition Guide</Link>
                            <Link href="/posts/papa-johns-wings" className="bg-gray-50 p-4 rounded-xl text-[10px] font-black uppercase text-center hover:bg-[#CCEE18] transition-colors">Wings Menu</Link>
                            <Link href="/posts/papa-johns-stuffed-crust-pizza" className="bg-gray-50 p-4 rounded-xl text-[10px] font-black uppercase text-center hover:bg-[#CCEE18] transition-colors">Stuffed Crust</Link>
                            <Link href="/posts/papa-johns-desserts" className="bg-gray-50 p-4 rounded-xl text-[10px] font-black uppercase text-center hover:bg-[#CCEE18] transition-colors">Desserts Menu</Link>
                            <Link href="/papa-johns-rewards" className="bg-gray-50 p-4 rounded-xl text-[10px] font-black uppercase text-center hover:bg-[#CCEE18] transition-colors">Rewards Program</Link>
                        </div>
                    </section>

                    <section className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm">
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-8">
                            About This Site FAQs
                        </h2>
                        <div className="space-y-6">
                            {aboutFaqs.map((faq) => (
                                <div key={faq.question} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                                    <h3 className="text-lg font-black text-[#1A3D17] mb-2">{faq.question}</h3>
                                    <p className="text-gray-600 font-medium">{faq.answer}</p>
                                </div>
                            ))}
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
                    Explore Full Menu
                </Link>
            </div>
        </div>
    );
}
