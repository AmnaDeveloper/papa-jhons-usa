import { Metadata } from 'next';
import Link from 'next/link';
import posts from '../../data/posts.json';
import menuItems from '../../data/menu-items.json';
import { generatePageSEO } from '../../lib/seo-config';
import { ArrowRight, Star, Clock, MapPin, Tag, Menu } from 'lucide-react';
import { getMonthYear } from '../../../lib/utils/date';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Papa Johns Full Menu 2026 — All Items, Prices & Categories | USA Guide",
        description: "Browse the complete Papa Johns menu for 2026 — all pizzas, wings, Papadias, sides, desserts & drinks with prices. Click any category to see full details. Updated April 2026 for USA.",
        alternates: {
            canonical: "https://papajohns-menus.us/posts/papa-johns-menu-prices-guide"
        }
    };
}

// User Defined Categories
const targetCategories = [
    "Pizza Menu",
    "Papadias",
    "Papa Bites",
    "Papa Menu",
    "Sides",
    "Papa Bowls"
];

// Map old categories to new target categories
const categoryMap: Record<string, string> = {
    "Classic Pizzas": "Pizza Menu",
    "Specialty Pizzas": "Pizza Menu",
    "Super Loaded": "Pizza Menu",
    "Super Loaded Specialty Pizzas": "Pizza Menu",
    "Papadias": "Papadias",
    "Papadia": "Papadias",
    "Papa Bites": "Papa Bites",
    "Menu & Prices Guide": "Papa Menu",
    "Pizza Delivery": "Papa Menu",
    "Menu Guides": "Papa Menu",
    "Drinks Menu": "Papa Menu",
    "Sides & Dips": "Sides",
    "Sides": "Sides",
    "Papa Bowls": "Papa Bowls"
};

export default function MenusAndPricesPage() {
    const month = getMonthYear();

    // Grouping everything into the 6 target categories
    const groupedContent: Record<string, { items: any[], posts: any[] }> = {};
    
    // Initialize groups
    targetCategories.forEach(cat => {
        groupedContent[cat] = { items: [], posts: [] };
    });

    // Sort menu items into groups
    menuItems.forEach(item => {
        let targetCat = categoryMap[item.category] || "Papa Menu";
        if (item.slug.toLowerCase().includes('papadia')) {
            targetCat = "Papadias";
        }
        if (groupedContent[targetCat]) {
            groupedContent[targetCat].items.push(item);
        }
    });

    // Sort blog posts into groups
    posts.forEach(post => {
        let targetCat = categoryMap[post.category] || "Papa Menu";
        if (post.slug.toLowerCase().includes('papadia')) targetCat = "Papadias";
        if (post.slug.toLowerCase().includes('papa-bites')) targetCat = "Papa Bites";
        if (post.slug.toLowerCase().includes('papa-bowls')) targetCat = "Papa Bowls";
        
        if (groupedContent[targetCat]) {
            groupedContent[targetCat].posts.push(post);
        }
    });

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is on the Papa Johns full menu in 2026?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Papa Johns full menu in 2026 includes Classic Pizzas, Super Loaded Specialty Pizzas, Papadias, Garlic Knots, Breadsticks, Cheesesticks, Chicken Wings, Papa Bites, Desserts, Papa Bowls, Drinks, and the new Pan Pizza."
                }
            },
            {
                "@type": "Question",
                "name": "Does Papa Johns serve Coca-Cola or Pepsi?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Papa Johns is a PepsiCo partner as of 2026. They exclusively serve Pepsi, Diet Pepsi, Mountain Dew, Starry, and Aquafina products. Coca-Cola is not available."
                }
            }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://papajohns-menus.us/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Menus & Prices",
                "item": "https://papajohns-menus.us/menus-prices"
            }
        ]
    };

    return (
        <div className="bg-[#fcfaf8] min-h-screen font-sans pb-20 scroll-smooth">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            
            {/* ── HERO SECTION ── */}
            <div className="bg-[#1A3D17] border-b-8 border-[#cc0000] text-white py-16 md:py-20 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CCEE18] rounded-full -mr-64 -mt-64 opacity-5 pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <span className="inline-block bg-[#CCEE18] text-[#1A3D17] font-black uppercase tracking-[0.4em] text-[10px] px-6 py-2.5 rounded-full mb-6 shadow-lg">
                        Official 2026 USA Directory
                    </span>
                    <h1
                        className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4"
                        style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}
                    >
                        Menus &amp; <span className="text-[#CCEE18]">Prices</span> (2026)
                    </h1>
                </div>
            </div>

            {/* ── BANNER DESCRIPTION (Internal Links Restored) ── */}
            <div className="max-w-[1200px] mx-auto px-4 mt-12 mb-12">
                <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border border-gray-100 relative -mt-20 z-20">
                    <div className="text-lg text-gray-700 font-medium max-w-4xl mx-auto space-y-6 text-center leading-relaxed">
                        <p>
                            Welcome to the complete <Link href="/" className="text-[#cc0000] underline font-black">Papa Johns menu directory</Link> for the USA — updated April 2026. Every pizza, side, drink, and specialty item is listed below with its current price and nutritional profile.
                        </p>
                        <p>
                            Our data is verified across 5,000+ US locations to ensure you have the most accurate information before you order. Whether you&apos;re checking prices for a <Link href="/menus-prices/pepperoni-pizza" className="text-[#cc0000] underline font-black">Large Pepperoni Pizza</Link> ($17.99) or the new <Link href="/posts/papa-johns-pan-pizza" className="text-[#cc0000] underline font-black">Pan Pizza</Link> ($11.99), we have it all. Visit our <Link href="/coupons" className="text-[#cc0000] underline font-black">coupons page</Link> for the latest deals.
                        </p>
                    </div>

                    {/* ── STATS BAR ── */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-12 border-t border-gray-100">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-black text-[#cc0000]">100+</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Menu Items</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-black text-[#1A3D17]">2026</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Price Verified</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-black text-[#cc0000]">50+</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">US Cities</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-black text-[#1A3D17]">Pepsi</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Exclusive Partner</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── QUICK NAVIGATION (Fixed Anchor Links) ── */}
            <div className="max-w-[1200px] mx-auto px-4 mb-20 scroll-mt-20">
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#cc0000] p-2 rounded-lg text-white">
                        <Menu size={20} />
                    </div>
                    <h2 className="text-xl font-black uppercase text-[#1A3D17] tracking-tighter">Browse Categories</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {targetCategories.map((cat) => (
                        <a 
                            key={cat}
                            href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`}
                            className="bg-white border border-gray-200 hover:border-[#cc0000] hover:text-[#cc0000] text-[#1A3D17] font-black text-xs uppercase py-4 px-2 rounded-2xl text-center transition-all shadow-sm hover:shadow-md active:scale-95 flex items-center justify-center whitespace-nowrap"
                        >
                            {cat}
                        </a>
                    ))}
                </div>
            </div>

            {/* ── DYNAMIC CATEGORY SECTIONS ── */}
            <div className="max-w-[1400px] mx-auto px-4 pb-20">
                {targetCategories.map((category) => {
                    const { items, posts: catPosts } = groupedContent[category];
                    
                    const unifiedContent = [
                        ...items.map(i => ({ ...i, type: 'item' })),
                        ...catPosts
                            .filter(p => !items.some(i => i.slug === p.slug))
                            .map(p => ({ ...p, type: 'post' }))
                    ];

                    if (unifiedContent.length === 0) return null;

                    return (
                        <section 
                            key={category} 
                            id={category.toLowerCase().replace(/\s+/g, '-')}
                            className="mb-20 scroll-mt-24"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="flex-shrink-0">
                                    <h2 className="bg-[#cc0000] text-white font-black uppercase tracking-[0.2em] text-xs md:text-sm px-6 py-2.5 rounded-full shadow-lg flex items-center gap-2">
                                        <Tag size={14} /> {category}
                                    </h2>
                                </div>
                                <div className="flex-1 h-[2px] bg-gradient-to-r from-[#cc0000]/20 to-transparent rounded-full"></div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                {unifiedContent.map((item: any) => (
                                    <Link 
                                        key={item.id} 
                                        href={item.type === 'item' ? `/menus-prices/${item.slug}` : `/posts/${item.slug}`}
                                        className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 hover:border-[#CCEE18] hover:shadow-lg transition-all group flex flex-col relative overflow-hidden"
                                    >
                                        <div className="aspect-video w-full bg-[#fcfaf8] rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center">
                                            <img 
                                                src={item.image} 
                                                alt={item.title} 
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                            />
                                        </div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[#1A3D17] font-black text-[8px] uppercase tracking-widest opacity-60">
                                                {item.type === 'item' ? 'Official Menu' : 'Guide'}
                                            </span>
                                            {item.rating && (
                                                <div className="flex items-center gap-0.5 text-yellow-500 text-[9px] font-black">
                                                    <Star size={8} fill="currentColor" /> {item.rating}
                                                </div>
                                            )}
                                        </div>
                                        <h3 className="text-sm font-black text-[#1A3D17] uppercase leading-tight mb-3 group-hover:text-[#cc0000] transition-colors line-clamp-2" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                            {item.type === 'item' ? item.slug.split('-').join(' ') : item.title}
                                        </h3>
                                        <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
                                            <span className="text-base font-black text-[#1A3D17] group-hover:text-[#cc0000] transition-colors">
                                                {item.price ? `$${item.price}` : 'view'}
                                            </span>
                                            <div className="bg-[#CCEE18] p-1.5 rounded-full group-hover:bg-[#cc0000] group-hover:text-white transition-colors">
                                                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>
        </div>
    );
}


export const revalidate = 86400; // 24 hours ISR
