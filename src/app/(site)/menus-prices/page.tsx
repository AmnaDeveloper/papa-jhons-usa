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
        const targetCat = categoryMap[item.category] || "Papa Menu";
        if (groupedContent[targetCat]) {
            groupedContent[targetCat].items.push(item);
        }
    });

    // Sort blog posts into groups
    posts.forEach(post => {
        const targetCat = categoryMap[post.category] || "Papa Menu";
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
                    "text": "The Papa Johns full menu in 2026 includes Classic Pizzas, Super Loaded Specialty Pizzas, Papadias, Garlic Knots, Breadsticks, Cheesesticks, Chicken Wings, Papa Bites, Desserts (Chocolate Chip Cookies, Brownies, Cinnamon Pull-Aparts), Drinks, and dipping sauces. All items are customizable."
                }
            },
            {
                "@type": "Question",
                "name": "What are the Papa Johns pizza prices for 2026?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Papa Johns pizza prices in 2026: Small (10\") from $10.99, Medium (12\") from $12.99, Large (14\") from $14.99, Extra Large (16\") from $16.99 for Classic Pizzas. Super Loaded Specialty Pizzas start at $14.99 for small and go up to $23.99 for extra large."
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
            {/* ── PREMIUM HERO BANNER ── */}
            <div className="bg-[#1A3D17] border-b-8 border-[#cc0000] text-white py-16 md:py-24 text-center relative overflow-hidden mb-16">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CCEE18] rounded-full -mr-64 -mt-64 opacity-5 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#cc0000] rounded-full -ml-40 -mb-40 opacity-5 pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <span className="inline-block bg-[#CCEE18] text-[#1A3D17] font-black uppercase tracking-[0.4em] text-[10px] px-6 py-2.5 rounded-full mb-6 shadow-lg">
                        Verified {month.split(' ')[1]} USA Edition
                    </span>
                    <h1
                        className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4"
                        style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}
                    >
                        Menus &amp; <span className="text-[#CCEE18]">Prices</span> ({month})
                    </h1>
                    <p className="text-xl text-white/80 font-bold max-w-2xl mx-auto tracking-wide mb-10">
                        The ultimate Papa John's menu directory. Precise pricing, nutritional facts, and direct ordering links for every item.
                    </p>
                </div>
            </div>

            {/* ── DYNAMIC CATEGORY SECTIONS ── */}
            <div className="max-w-[1280px] mx-auto px-4">
                {targetCategories.map((category) => {
                    const { items, posts: catPosts } = groupedContent[category];
                    if (items.length === 0 && catPosts.length === 0) return null;

                    return (
                        <section 
                            key={category} 
                            id={category.toLowerCase().replace(/\s+/g, '-')}
                            className="mb-24"
                        >
                            <div className="flex items-center gap-5 mb-12">
                                <div className="flex-shrink-0">
                                    <h2 className="bg-[#cc0000] text-white font-black uppercase tracking-[0.25em] text-sm md:text-lg px-8 py-3 rounded-full shadow-xl">
                                        {category}
                                    </h2>
                                </div>
                                <div className="flex-1 h-[3px] bg-gradient-to-r from-[#cc0000]/40 to-transparent rounded-full"></div>
                            </div>

                            {/* Menu Items Grid */}
                            {items.length > 0 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                                    {items.map((item) => (
                                        <Link 
                                            key={item.id} 
                                            href={`/menus-prices/${item.slug}`}
                                            className="bg-white rounded-[2rem] p-6 shadow-sm border-2 border-gray-50 hover:border-[#CCEE18] hover:shadow-xl transition-all group flex flex-col relative overflow-hidden"
                                        >
                                            <div className="h-48 w-full bg-[#fcfaf8] rounded-2xl mb-5 relative overflow-hidden border border-gray-100 flex items-center justify-center">
                                                <img 
                                                    src={item.image} 
                                                    alt={item.title} 
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                                />
                                            </div>
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="bg-[#1A3D17] text-[#CCEE18] font-black text-[9px] px-3 py-1 rounded-full uppercase tracking-widest">
                                                    Official Guide
                                                </span>
                                                <div className="flex items-center gap-1 text-yellow-500 text-[10px] font-black">
                                                    <Star size={10} fill="currentColor" /> {item.rating}
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-black text-[#1A3D17] uppercase leading-tight mb-4 group-hover:text-[#cc0000] transition-colors" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                                {item.slug.split('-').join(' ')}
                                            </h3>
                                            <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                                                <div className="flex flex-col">
                                                    <span className="text-gray-400 text-[9px] font-bold uppercase tracking-widest leading-none mb-1">Price from</span>
                                                    <span className="text-xl font-black text-[#1A3D17] group-hover:text-[#cc0000] transition-colors">${typeof item.price === 'number' ? item.price : item.price}</span>
                                                </div>
                                                <div className="bg-[#CCEE18] p-2.5 rounded-full group-hover:bg-[#cc0000] group-hover:text-white transition-colors">
                                                    <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}

                            {/* Articles Grid (smaller, more minimal) */}
                            {catPosts.length > 0 && (
                                <>
                                    <h4 className="text-sm font-black text-[#1A3D17]/50 uppercase tracking-[0.2em] mb-6 pl-2">
                                        Related Articles & Guides
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {catPosts.map((post) => (
                                            <Link
                                                href={`/posts/${post.slug}`}
                                                key={post.id}
                                                className="bg-white rounded-[2rem] p-5 shadow-md hover:shadow-2xl hover:border-[#CCEE18] border-2 border-transparent transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
                                            >
                                                <div className="aspect-[16/9] bg-gray-100 rounded-xl mb-6 relative overflow-hidden shadow-inner">
                                                    <img
                                                        src={post.image}
                                                        alt={post.imageAlt || post.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                </div>
                                                <h3 className="text-lg font-black text-[#1A3D17] uppercase leading-tight mb-3 group-hover:text-[#cc0000] transition-colors" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                                    {post.title}
                                                </h3>
                                                <p className="text-gray-500 text-xs font-medium mb-6 flex-1 line-clamp-3 italic">
                                                    {post.excerpt}
                                                </p>
                                                <div className="mt-auto border-t border-gray-100 pt-4 flex items-center justify-between text-[#1A3D17] text-[10px] font-black uppercase tracking-widest group-hover:text-[#cc0000] transition-colors">
                                                    View Details
                                                    <ArrowRight size={14} />
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            )}
                        </section>
                    );
                })}
            </div>
        </div>
    );
}
