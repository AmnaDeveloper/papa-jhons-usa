import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import menuItems from '../../../data/menu-items.json';
import ContactFeedbackSection from '../../../components/ContactFeedbackSection';
import { Heart, ArrowRight, Info } from 'lucide-react';
import { getTodayFormatted, getMonthYear } from '../../../../lib/utils/date';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const item = menuItems.find((i) => i.slug === slug);

    if (!item) return { title: 'Item Not Found' };

    const date = getTodayFormatted();
    const month = getMonthYear();

    let dynamicTitle = item.title;
    let dynamicDescription = item.description;

    // Apply dynamic patterns for the top menu articles
    if (slug === 'pepperoni-pizza') {
        dynamicTitle = `Papa Johns Pepperoni Pizza Menu with Prices (${month})`;
        dynamicDescription = `The definitive guide to Papa Johns Pepperoni Pizza in ${month}. Explore 2026 USA price list, calories, and crust options — updated ${date}.`;
    } else if (slug === 'cheese-pizza') {
        dynamicTitle = `Papa Johns Cheese Pizza 2026: Price, Calories & Review (${month})`;
        dynamicDescription = `Full guide to Papa Johns Cheese Pizza in ${month}. Prices ($11.49–$18.99), calories, vegetarian info & ordering guide — updated ${date}.`;
    } else if (slug === 'the-works-pizza') {
        dynamicTitle = `Papa Johns The Works™ Pizza: Prices & Calories (${month})`;
        dynamicDescription = `Complete guide to The Works™ pizza in ${month}. Prices, ingredient breakdown & comparison with The Meats — updated ${date}.`;
    } else if (slug === 'philly-cheesesteak-papadia') {
        dynamicTitle = `Papa Johns Philly Cheesesteak Papadia: Price & Review (${month})`;
        dynamicDescription = `Everything about the Philly Cheesesteak Papadia in ${month}. Prices, calories, sauce pairings & honest review — updated ${date}.`;
    } else {
        // Default dynamic pattern for any other menu items
        dynamicTitle = `${item.title.split(' 2026')[0]} (${month})`;
        dynamicDescription = `${item.description.split(' — updated')[0]} — Updated ${date}.`;
    }

    return {
        title: dynamicTitle,
        description: dynamicDescription,
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
    
    const menuItemSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
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

    const month = getMonthYear();

    return (
        <div className="bg-[#fcfaf8] min-h-screen font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuItemSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* ── 1. HERO BANNER ── */}
            <div className="bg-[#1A3D17] border-b-8 border-[#cc0000] text-white py-16 md:py-24 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CCEE18] rounded-full -mr-64 -mt-64 opacity-5 pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <span className="inline-block bg-[#CCEE18] text-[#1A3D17] font-black uppercase tracking-[0.4em] text-[10px] px-6 py-2.5 rounded-full mb-6">
                         Verified Menu & Price Guide {month.split(' ')[1]}
                    </span>
                    <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4" style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}>
                        {item.title.split(' 2026')[0]} ({month})
                    </h1>
                     <p className="text-lg md:text-xl font-bold max-w-3xl mx-auto mb-8 text-white/90">
                        {item.description}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-[10px] font-black uppercase tracking-widest text-[#1A3D17]">
                        <span className="bg-white px-4 py-1.5 rounded-full shadow-lg">🔥 Approx {item.calories} Cals</span>
                        <span className="bg-[#cc0000] text-white px-4 py-1.5 rounded-full shadow-lg">⭐ {item.rating} Rating</span>
                        <span className="bg-[#CCEE18] px-4 py-1.5 rounded-full shadow-lg">⚡ {item.reviewCount} Reviews</span>
                    </div>
                    <Link href="/store-locator" className="bg-[#CCEE18] hover:bg-white text-[#1A3D17] font-black py-4 px-10 rounded-full transition-all uppercase tracking-widest text-sm shadow-xl active:scale-95 inline-block">
                        Order from Nearest Branch
                    </Link>
                </div>
            </div>

            {/* ── 2. MAIN CONTENT GRID ── */}
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-16">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    <div className="lg:w-5/12 lg:sticky lg:top-32 lg:self-start">
                        <div className="bg-white rounded-[2rem] p-3 shadow-2xl relative border border-gray-100 overflow-hidden group mb-10">
                            <div className="relative w-full h-[350px] lg:h-[450px] rounded-3xl overflow-hidden shadow-inner flex items-center justify-center bg-gray-50">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>

                        {slug === 'drinks' && (
                            <div className="mt-0 mb-10">
                                <Link href="/posts/papa-johns-mountain-dew-drink" className="bg-white rounded-[2rem] p-6 shadow-md hover:shadow-2xl hover:border-[#CCEE18] border-2 border-dashed border-[#1A3D17]/10 transition-all duration-300 group flex flex-col relative overflow-hidden bg-gradient-to-br from-white to-[#fcfaf8]">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCEE18] rounded-bl-full -mr-16 -mt-16 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                    <div className="aspect-[16/9] bg-gray-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden shadow-inner font-sans">
                                        <div className="absolute top-3 left-3 z-10 bg-[#cc0000] text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                                            Featured Guide
                                        </div>
                                        <img src="/papa-johns-mountain-dew.png" alt="Papa Johns Mountain Dew Guide" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <h3 className="text-xl font-black text-[#1A3D17] uppercase leading-tight mb-2 group-hover:text-[#cc0000] transition-colors">
                                        Papa Johns Mountain Dew Guide 2026
                                    </h3>
                                    <p className="text-gray-500 text-xs font-bold mb-4 leading-relaxed tracking-tight underline decoration-[#CCEE18] decoration-2 underline-offset-4">
                                        Prices, Calories, Sizes & Pizza Pairings. Discover the #1 soda pairing for Papa Johns fans.
                                    </p>
                                    <div className="border-t border-gray-100 pt-4 flex items-center justify-between text-[#1A3D17] text-[10px] font-black uppercase tracking-widest group-hover:text-[#cc0000] transition-colors">
                                        Read Article
                                        <span className="bg-[#CCEE18] text-[#1A3D17] p-2 rounded-full group-hover:bg-[#cc0000] group-hover:text-white transition-colors">
                                            <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        )}
                        <div className="bg-white border hover:border-[#CCEE18] transition-colors rounded-2xl p-8 shadow-sm mb-10">
                            <h3 className="text-xl font-black text-[#1A3D17] uppercase tracking-tighter mb-6 border-b border-gray-100 pb-4">Premium Ingredients</h3>
                            <ul className="space-y-4">
                                {item.ingredients?.map(ing => (
                                    <li key={ing} className="flex items-center gap-3 text-sm font-bold text-gray-600 border-b border-gray-50 pb-3 uppercase">
                                        <span className="text-[#CCEE18] bg-[#1A3D17] w-6 h-6 rounded-full flex items-center justify-center text-[10px]">✓</span> {ing}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="lg:w-7/12 space-y-10 text-left">
                        <div>
                            <h2 className="text-3xl font-black text-[#1A3D17] mb-6 uppercase tracking-tighter">{item.title.split(' 2026')[0]} Guide 2026</h2>
                            <div className="prose prose-lg text-gray-700 leading-relaxed max-w-none font-bold space-y-6 blog-content mt-4">
                                <div dangerouslySetInnerHTML={{ __html: item.fullContent || item.description }} />
                            </div>
                        </div>
                        <div className="bg-[#cc0000] rounded-3xl p-8 shadow-2xl text-white">
                             <h3 className="text-2xl font-black text-[#CCEE18] uppercase mb-8 flex items-center gap-3 italic"><Info size={24} /> Current Price List (USD)</h3>
                             <table className="w-full text-left">
                                 <thead className="text-[10px] font-black uppercase text-white/40 border-b border-white/10">
                                     <tr><th className="pb-4">Product Specification / Size</th><th className="pb-4 text-right">Standard Price</th></tr>
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
                             <p className="mt-8 text-[10px] font-black text-white/40 uppercase tracking-widest text-center italic leading-relaxed">*Pricing data updated for 2026. Regional variations may apply.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── 3. ALLERGEN INFORMATION ── */}
            <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-12">
                <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-xl border-2 border-gray-50 relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 text-left">
                        <div className="md:w-1/3">
                            <span className="inline-block bg-[#cc0000] text-white font-black uppercase tracking-widest text-[10px] px-6 py-2 rounded-full mb-4">Safety & Health</span>
                            <h2 className="text-3xl md:text-5xl font-black text-[#1A3D17] uppercase tracking-tighter mb-6">Allergen <span className="text-[#cc0000]">Information</span></h2>
                            <p className="text-gray-500 font-bold leading-relaxed">We prioritize your safety. Here is the official allergen breakdown for **{item.title}**.</p>
                        </div>
                        <div className="md:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                            {(item.allergens || []).map((allergen) => (
                                <div key={allergen.name} className={`p-6 rounded-3xl border-2 transition-all ${allergen.present ? 'bg-[#fff5f5] border-[#ffcccc]' : 'bg-[#f7faf7] border-[#ccffcc]'}`}>
                                    <div className="flex items-center justify-between mb-3 leading-none">
                                        <span className={`text-xs font-black uppercase tracking-widest ${allergen.present ? 'text-[#cc0000]' : 'text-[#1A3D17]'}`}>{allergen.name}</span>
                                        <div className={`w-3 h-3 rounded-full ${allergen.present ? 'bg-[#cc0000]' : 'bg-[#28a745]'}`}></div>
                                    </div>
                                    <p className="text-[10px] font-bold text-gray-600">{allergen.note}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── 4. FAQ SECTION ── */}
            <div className="bg-gray-100 py-24 border-y border-gray-200">
                <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
                     <div className="mb-14 text-center">
                        <h2 className="text-3xl md:text-5xl font-black text-[#1A3D17] uppercase tracking-tighter mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-500 font-bold">Expert answers regarding {item.title}.</p>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-6">
                        {item.faqs?.map((faq, idx) => (
                            <div key={idx} className="bg-white hover:bg-[#1A3D17] group transition-colors duration-300 p-8 rounded-3xl shadow-md border border-gray-100 text-left">
                                <h4 className="font-black text-gray-900 group-hover:text-white transition-colors mb-2 text-xl">{faq.question}</h4>
                                <p className="text-gray-500 group-hover:text-gray-300 transition-colors leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── 5. POPULAR ITEMS ── */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-[#1A3D17] uppercase tracking-tighter italic mb-16">POPULAR <span className="text-[#cc0000]">MENU ITEMS</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                        {menuItems.filter(i => i.id !== item.id).slice(0, 4).map((pi) => (
                            <Link key={pi.id} href={`/menus-prices/${pi.slug}`} className="group block bg-white rounded-[2rem] border-2 border-gray-50 hover:border-[#CCEE18] p-6 transition-all duration-500 hover:-translate-y-3 shadow-sm hover:shadow-2xl overflow-hidden relative">
                                <div className="relative h-48 w-full mb-6 overflow-hidden rounded-2xl bg-gray-50 flex items-center justify-center">
                                    <img src={pi.image} alt={pi.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <h3 className="text-lg font-black text-[#1A3D17] uppercase mb-4">{pi.title.split(' Price')[0]}</h3>
                                <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                                     <span className="text-[#CCEE18] bg-[#1A3D17] px-4 py-1.5 rounded-full font-black text-xs">${pi.price}</span>
                                     <span className="text-[#cc0000] font-black text-[10px] uppercase tracking-widest flex items-center gap-2">View Guide <ArrowRight size={14} /></span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <div className="max-w-[1000px] mx-auto px-4 pb-20"><ContactFeedbackSection /></div>
        </div>
    );
}
