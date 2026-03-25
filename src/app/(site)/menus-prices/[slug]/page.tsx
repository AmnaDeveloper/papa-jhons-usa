import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import menuItems from '../../../data/menu-items.json';
import posts from '../../../data/posts.json'; // For sidebar links
import ContactFeedbackSection from '../../../components/ContactFeedbackSection';
import { Heart, Share2, Navigation, ArrowRight, Star, Info } from 'lucide-react';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const item = menuItems.find((i) => i.slug === slug);

    if (!item) return { title: 'Item Not Found' };

    return {
        title: item.title,
        description: item.description,
        alternates: {
            canonical: `https://papajohns-menus.us/menus-prices/${slug}`,
        },
    };
}

export async function generateStaticParams() {
    return menuItems.map((item) => ({
        slug: item.slug,
    }));
}

export default async function MenuItemBlogPage({ params }: Props) {
    const { slug } = await params;
    const item = menuItems.find((i) => i.slug === slug);

    if (!item) notFound();

    const baseUrl = 'https://papajohns-menus.us';
    
    // ── ADVANCED SCHEMA 1: MenuItem ──
    const menuItemSchema = {
        "@context": "https://schema.org",
        "@type": "MenuItem",
        "name": item.title,
        "description": item.description,
        "image": `${baseUrl}${item.image}`,
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": item.sizes?.[0]?.price || item.price,
            "highPrice": item.sizes?.[item.sizes.length - 1]?.price || item.price,
            "offerCount": item.sizes?.length || 1
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": item.rating,
          "reviewCount": item.reviewCount
        }
    };

    // ── ADVANCED SCHEMA 2: FAQ ──
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": (item.faqs || []).map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.answer
            }
        }))
    };

    return (
        <div className="bg-[#fcfaf8] min-h-screen font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuItemSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* ── 1. BLOG-STYLE HERO BANNER (Enhanced) ── */}
            <div className="bg-[#1A3D17] border-b-8 border-[#cc0000] text-white py-16 md:py-24 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CCEE18] rounded-full -mr-64 -mt-64 opacity-5 pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <span className="inline-block bg-[#CCEE18] text-[#1A3D17] font-black uppercase tracking-[0.4em] text-[10px] px-6 py-2.5 rounded-full mb-6">
                         Verified Menu & Price Guide 2026
                    </span>
                    <h1 
                        className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4" 
                        style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}
                    >
                        {item.title}
                    </h1>
                    <p className="text-xl md:text-2xl font-bold text-[#CCEE18] mb-6 tracking-wide italic">
                        USA Regional Pricing Data Incorporated
                    </p>
                    
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-[10px] font-black uppercase tracking-widest text-[#1A3D17]">
                        <span className="bg-white px-4 py-1.5 rounded-full shadow-lg">🔥 Approx {item.calories} Cals</span>
                        <span className="bg-[#cc0000] text-white px-4 py-1.5 rounded-full shadow-lg">⭐ {item.rating} Rating</span>
                        <span className="bg-[#CCEE18] px-4 py-1.5 rounded-full shadow-lg">⚡ {item.reviewCount} Reviews</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/store-locator" className="bg-[#CCEE18] hover:bg-white text-[#1A3D17] font-black py-4 px-10 rounded-full transition-all uppercase tracking-widest text-sm shadow-xl active:scale-95">
                            Order from Nearest Branch
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── 2. MAIN BLOG-LIKE GRID ── */}
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-16">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    
                    {/* LEFT COLUMN: IMAGE & INFO */}
                    <div className="lg:w-5/12">
                        <div className="bg-white rounded-[2rem] p-3 shadow-2xl relative border border-gray-100 overflow-hidden group mb-10">
                            <div className="absolute top-5 left-5 z-10 bg-[#CCEE18] text-[#1A3D17] text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                                 ⭐ Top Selling
                            </div>
                            <div className="relative w-full h-[350px] lg:h-[450px] rounded-3xl overflow-hidden shadow-inner flex items-center justify-center bg-gray-50">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                />
                            </div>
                        </div>

                        {/* Ingredients Card */}
                        <div className="bg-white border hover:border-[#CCEE18] transition-colors rounded-2xl p-8 shadow-sm mb-10">
                            <h3 className="text-xl font-black text-[#1A3D17] uppercase tracking-tighter mb-6 border-b border-gray-100 pb-4">
                                Premium Ingredients
                            </h3>
                            <ul className="space-y-4">
                                {item.ingredients?.map(ing => (
                                    <li key={ing} className="flex items-center gap-3 text-sm font-bold text-gray-600 border-b border-gray-50 pb-3">
                                        <span className="text-[#CCEE18] bg-[#1A3D17] w-6 h-6 rounded-full flex items-center justify-center text-[10px]">✓</span> {ing}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: CORE CONTENT */}
                    <div className="lg:w-7/12 space-y-10">
                        <div>
                            <h2 className="text-3xl font-black text-[#1A3D17] mb-6 uppercase tracking-tighter" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                Papa John's {item.slug.replace(/-/g, ' ')} Blog Guide & Prices 2026
                            </h2>
                            <div 
                                className="prose prose-lg text-gray-700 leading-relaxed max-w-none font-bold space-y-6"
                                dangerouslySetInnerHTML={{ __html: item.fullContent || item.description }}
                            />
                        </div>

                        {/* PRICING TABLE (Enhanced Red Design) */}
                        <div className="bg-[#cc0000] rounded-3xl p-8 shadow-2xl text-white">
                             <h3 className="text-2xl font-black text-[#CCEE18] uppercase mb-8 flex items-center gap-3 italic">
                                 <Info size={24} /> Current Price List (USD)
                             </h3>
                             <table className="w-full text-left">
                                 <thead className="text-[10px] font-black uppercase text-white/40 border-b border-white/10">
                                     <tr>
                                         <th className="pb-4">Product Specification / Size</th>
                                         <th className="pb-4 text-right">Standard Price</th>
                                     </tr>
                                 </thead>
                                 <tbody className="divide-y divide-white/10">
                                     {item.sizes?.map(size => (
                                         <tr key={size.size} className="hover:bg-white/10 transition-colors">
                                             <td className="py-5 font-bold">{size.size}</td>
                                             <td className="py-5 text-right font-black text-[#CCEE18] text-xl">${size.price}</td>
                                         </tr>
                                     ))}
                                 </tbody>
                             </table>
                             <p className="mt-8 text-[10px] font-black text-white/40 uppercase tracking-widest text-center italic leading-relaxed">
                                  *Pricing data updated for 2026. Includes standard Papa Rewards earning potential.
                             </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── 3. DETAILED FAQ SECTION (Same as Blog) ── */}
            <div className="bg-gray-100 py-24 border-y border-gray-200">
                <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
                     <div className="mb-14 text-center">
                        <span className="inline-block bg-[#1A3D17] text-[#CCEE18] font-black uppercase tracking-[0.3em] text-[10px] px-6 py-2 rounded-full mb-4">
                             Common Questions
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-[#1A3D17] uppercase tracking-tighter mb-4" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-500 font-bold">Expert answers regarding {item.title}.</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {item.faqs?.map((faq, idx) => (
                            <div key={idx} className="bg-white hover:bg-[#1A3D17] group transition-colors duration-300 p-8 rounded-3xl shadow-md border border-gray-100">
                                <div className="flex items-start gap-5 text-left">
                                    <div className="w-12 h-12 shrink-0 bg-[#CCEE18] text-[#1A3D17] rounded-full flex items-center justify-center font-black text-xl shadow-inner">
                                        ?
                                    </div>
                                    <div>
                                        <h4 className="font-black text-gray-900 group-hover:text-white transition-colors mb-2 text-xl leading-snug">
                                            {faq.question}
                                        </h4>
                                        <p className="text-gray-500 group-hover:text-gray-300 transition-colors text-base leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── 4. NEWSLETTER & FINAL INFO ── */}
            <div className="max-w-[1000px] mx-auto px-4 py-20">
                <ContactFeedbackSection />
            </div>
        </div>
    );
}
