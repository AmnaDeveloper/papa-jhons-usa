import { Metadata } from 'next';
import { generatePageSEO } from '../../lib/seo-config';
import InternalLinks from '../../components/seo/InternalLinks';
import ContactForm from '../../components/ContactForm';
import ContactFeedbackSection from '../../components/ContactFeedbackSection';
import Link from 'next/link';

export const metadata: Metadata = generatePageSEO(
    "Contact Us - Official Papa John's Menu Support & Feedback",
    "Have questions? Contact Papa John's for support regarding our menu, promo codes, or your recent orders. We're here to help you get the best pizza experience.",
    "/contact",
    "Papa Johns contact, customer support, pizza feedback, help desk, contact info"
);

export default function ContactPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How do I contact Papa Johns customer service?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can contact Papa Johns customer service by calling their national support line at 1-800-PAPA-JOHNS (1-800-727-2564) or by using the contact form on their official website. Support is available 24/7 for order-related inquiries and feedback."
                }
            },
            {
                "@type": "Question",
                "name": "How do I report an issue with my Papa Johns order?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For immediate issues with a current order, it's best to call the specific Papa Johns store where the order was placed. For general feedback or unresolved issues, you can submit a request through the 'Contact Us' page on the Papa Johns website."
                }
            },
            {
                "@type": "Question",
                "name": "Can I contact Papa Johns directly via the app?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, the Papa Johns mobile app includes a 'Help' or 'Contact Us' section where you can find store phone numbers, track your orders in real-time, and submit feedback directly to the support team."
                }
            },
            {
                "@type": "Question",
                "name": "What is the phone number for Papa Johns corporate office?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Papa Johns corporate headquarters is located in Louisville, Kentucky. You can reach the corporate offices by calling their main line at 1-800-727-2564 for corporate inquiries, franchising, and high-level support."
                }
            },
            {
                "@type": "Question",
                "name": "How do I provide feedback on a recent Papa Johns experience?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can provide feedback by completing the online survey at papajohns.com/feedback or by filling out the contact form on the 'Contact Us' page. Your feedback helps Papa Johns maintain their 'Better Ingredients. Better Pizza.' standard."
                }
            }
        ]
    };

    return (
        <div className="bg-[#fafafa] min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {/* ── Fixed Gap for Sticky Header Removed for Seamless Look ── */}

            {/* ── Premium Hero Header ── */}
            <div className="bg-[#1A3D17] py-16 md:py-24 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#CCEE18] rounded-full -mr-72 -mt-72 opacity-[0.08] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#cc0000] rounded-full -ml-48 -mb-48 opacity-[0.08]"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block bg-[#CCEE18] text-[#1A3D17] font-black uppercase tracking-[0.4em] text-[10px] px-6 py-2.5 rounded-full mb-8 shadow-lg">
                        Support Center
                    </span>
                    <h1
                        className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6"
                        style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}
                    >
                        Contact <span className="text-[#CCEE18]">Us</span>
                    </h1>
                    <p className="text-white/80 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-bold tracking-tight">
                        Got questions? We're all ears! Whether it's about our <Link href="/menus-prices" className="text-[#CCEE18] hover:underline decoration-2 underline-offset-8 transition-all">Menu</Link>, <Link href="/coupons" className="text-[#CCEE18] hover:underline decoration-2 underline-offset-8 transition-all">Promo Codes</Link>, or your <Link href="/papa-rewards" className="text-[#CCEE18] hover:underline decoration-2 underline-offset-8 transition-all">Rewards</Link>, our pizza experts are here 24/7.
                    </p>
                </div>
            </div>

            {/* ── Main Content Area (Form & Sidebar) ── */}
            <div className="max-w-[1440px] mx-auto px-4 md:px-12 -mt-12 pb-32 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* LEFT: Contact Info Sidebar */}
                    <div className="lg:col-span-4 space-y-10">

                        {/* Instant Help Card */}
                        <div className="bg-[#1A3D17] text-white p-10 md:p-14 rounded-[3rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden ring-1 ring-white/10 hover:ring-[#CCEE18]/30 transition-all duration-500 group">
                            <div className="relative z-10">
                                <h3 className="text-3xl font-black mb-10 uppercase tracking-tighter flex items-center gap-4" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                    <span className="bg-[#CCEE18] text-[#1A3D17] w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-lg ring-4 ring-[#CCEE18]/20">💬</span>
                                    Instant Help
                                </h3>

                                <div className="space-y-12">
                                    <div className="group/item">
                                        <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mb-4 ml-1 flex items-center gap-2">
                                            <span className="w-4 h-[1px] bg-[#CCEE18]/30"></span> Customer Support
                                        </p>
                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-3xl group-hover/item:bg-[#CCEE18] group-hover/item:text-[#1A3D17] transition-all duration-500 shadow-inner group-hover/item:scale-110">📞</div>
                                            <div>
                                                <a href="tel:1800727256" className="text-3xl font-black text-[#CCEE18] group-hover/item:text-white transition-colors tracking-tighter">1-800-PAPA</a>
                                                <p className="text-[10px] text-white/20 mt-2 uppercase font-black tracking-widest">Available 24 Hours</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group/item">
                                        <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mb-4 ml-1 flex items-center gap-2">
                                            <span className="w-4 h-[1px] bg-[#CCEE18]/30"></span> Write An Email
                                        </p>
                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-3xl group-hover/item:bg-[#CCEE18] group-hover/item:text-[#1A3D17] transition-all duration-500 shadow-inner group-hover/item:scale-110">📧</div>
                                            <div>
                                                <a href="mailto:support@papajohns.com" className="text-2xl font-black text-white group-hover/item:text-[#CCEE18] transition-colors break-all tracking-tighter">help@papajohns.us</a>
                                                <p className="text-[10px] text-white/20 mt-2 uppercase font-black tracking-widest">Global Support Team</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Store Locator Banner */}
                        <div className="bg-white p-10 rounded-[2.5rem] border-2 border-gray-100 shadow-2xl group hover:border-[#CCEE18] transition-all duration-500 relative overflow-hidden">
                            <h4 className="text-2xl font-black text-[#1A3D17] mb-3 uppercase tracking-tighter" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>Store Issues?</h4>
                            <p className="text-gray-500 text-sm mb-8 font-bold leading-relaxed">For immediate help with your current pizza order, please contact your local Papa John's branch directly.</p>
                            <Link href="/store-locator" className="flex items-center justify-center gap-4 bg-[#1A3D17] text-white py-5 rounded-2xl transition-all font-black uppercase text-[10px] tracking-[0.3em] hover:bg-[#cc0000] shadow-xl transform active:scale-95">
                                Open Store Locator <span className="text-xl">📍</span>
                            </Link>
                        </div>

                        {/* Official Social Links (Premium Icons) */}
                        <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl border-2 border-gray-100">
                            <p className="text-[#1A3D17] font-black uppercase text-[10px] tracking-[0.4em] mb-8 text-center flex items-center justify-center gap-3">
                                <span className="h-[1px] w-8 bg-gray-200"></span> Official Channels <span className="h-[1px] w-8 bg-gray-200"></span>
                            </p>
                            <div className="grid grid-cols-4 gap-6">
                                {[
                                    { name: 'FB', url: 'https://www.facebook.com/papajohns', color: '#1877F2' },
                                    { name: 'IG', url: 'https://www.instagram.com/papajohns', color: '#E4405F' },
                                    { name: 'TW', url: 'https://twitter.com/papajohns', color: '#1DA1F2' },
                                    { name: 'YT', url: 'https://www.youtube.com/user/papajohns', color: '#FF0000' }
                                ].map((s) => (
                                    <a
                                        key={s.name}
                                        href={s.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full aspect-square rounded-2xl bg-gray-50 flex items-center justify-center text-xs font-black text-[#1A3D17] border border-gray-100 hover:text-white hover:bg-[#1A3D17] transition-all transform hover:-translate-y-2 hover:shadow-2xl shadow-sm"
                                    >
                                        {s.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Contact Form & Feedback Feed */}
                    <div className="lg:col-span-8 space-y-16">
                        <ContactForm />

                        {/* ── REAL-TIME COMMENTS & FEEDBACK SECTION ── */}
                        <div className="bg-white rounded-[3rem] p-4 md:p-8 shadow-2xl border-2 border-gray-100">
                            <ContactFeedbackSection />
                        </div>
                    </div>
                </div>

                <div className="mt-32 pt-16 border-t-2 border-gray-100">
                    <InternalLinks />
                </div>
            </div>
        </div>
    );
}
