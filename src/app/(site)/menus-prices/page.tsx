import { Metadata } from 'next';
import Link from 'next/link';
import posts from '../../data/posts.json';
import menuItems from '../../data/menu-items.json';
import { generatePageSEO } from '../../lib/seo-config';
import { ArrowRight, Star } from 'lucide-react';
import { getMonthYear } from '../../../lib/utils/date';

export async function generateMetadata(): Promise<Metadata> {
    const month = getMonthYear();
    return generatePageSEO(
        `Papa John's Full Menu with Prices (April 2026)`,
        `Welcome to the most complete Papa Johns menu with prices guide for the USA — updated April 2026. High-quality guide for Classic Pizzas, Super Loaded, Papadias, Sides & Dips, Desserts, Pastas, Drinks, and the Junior Menu.`,
        "/menus-prices"
    );
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
        // Override for Papadias specifically
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
        // Force Papadias and others into categories if title/slug matches
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
                    "text": "The Papa Johns full menu in 2026 includes Classic Pizzas, Super Loaded Specialty Pizzas, Papadias, Garlic Knots, Breadsticks, Cheesesticks, Chicken Wings, Papa Bites, Desserts, Papa Bowls, Drinks, and dipping sauces."
                }
            }
        ]
    };

    return (
        <div className="bg-[#fcfaf8] min-h-screen font-sans pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            
            {/* ── SINGLE UNIFIED HERO BANNER (NO DUPLICATES) ── */}
            <div className="bg-[#1A3D17] border-b-8 border-[#cc0000] text-white py-16 md:py-20 text-center relative overflow-hidden mb-12">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CCEE18] rounded-full -mr-64 -mt-64 opacity-5 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#cc0000] rounded-full -ml-40 -mb-40 opacity-5 pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <span className="inline-block bg-[#CCEE18] text-[#1A3D17] font-black uppercase tracking-[0.4em] text-[10px] px-6 py-2.5 rounded-full mb-6 shadow-lg">
                        Verified {month.split(' ')[1]} USA Edition
                    </span>
                    <h1
                        className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8"
                        style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}
                    >
                        Menus &amp; <span className="text-[#CCEE18]">Prices</span> ({month})
                    </h1>
                    
                    <div className="text-base text-white/90 font-medium max-w-4xl mx-auto space-y-4 leading-relaxed bg-black/10 p-6 rounded-[2rem] border border-white/5 backdrop-blur-sm">
                        <p>
                            Welcome to the most complete <Link href="/" className="text-[#CCEE18] underline font-black">Papa Johns menu with prices guide</Link> for the USA — updated April 2026. Get verified pricing and details for <Link href="/posts/classic-pizzas" className="text-[#CCEE18] underline font-black">Classic Pizzas</Link>, <Link href="/menus-prices/philly-cheesesteak-papadia" className="text-[#CCEE18] underline font-black">Papadias</Link>, <Link href="/posts/sides" className="text-[#CCEE18] underline font-black">Sides</Link>, and more.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── DYNAMIC CATEGORY SECTIONS ── */}
            <div className="max-w-[1400px] mx-auto px-4 pb-20">
                {targetCategories.map((category) => {
                    const { items, posts: catPosts } = groupedContent[category];
                    
                    // Unified listing: merge items and posts (filtering duplicates)
                    const unifiedContent = [
                        ...items.map(i => ({ ...i, type: 'item' })),
                        ...catPosts
                            .filter(p => !items.some(i => i.slug === p.slug))
                            .map(p => ({ ...p, type: 'post' }))
                    ];

                    // ONLY HIDE IF BOTH ARE EMPTY
                    if (unifiedContent.length === 0) return null;

                    return (
                        <section 
                            key={category} 
                            id={category.toLowerCase().replace(/\s+/g, '-')}
                            className="mb-16"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="flex-shrink-0">
                                    <h2 className="bg-[#cc0000] text-white font-black uppercase tracking-[0.2em] text-xs md:text-sm px-6 py-2.5 rounded-full shadow-lg">
                                        {category}
                                    </h2>
                                </div>
                                <div className="flex-1 h-[2px] bg-gradient-to-r from-[#cc0000]/20 to-transparent rounded-full"></div>
                            </div>

                            {/* Unified Grid: 5 Columns */}
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
