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
        `Papa John's Full Menu with Prices (${month})`,
        `Explore the complete Papa John's menu with prices for 2026. Updated ${month} with Classic Pizzas, Super Loaded, Papadias, Sides, and more.`,
        "/menus-prices"
    );
}

const categoryOrder = [
    "Menu & Prices Guide",
    "Classic Pizzas",
    "Specialty Pizzas",
    "Papadias",
    "Sides & Dips",
    "Pizza Delivery",
];

export default function MenusAndPricesPage() {
    const month = getMonthYear();
    // 1. Group Blog Posts
    const groupedBlog: Record<string, typeof posts> = {};
    for (const cat of categoryOrder) {
        const catPosts = posts.filter((p) => p.category === cat);
        if (catPosts.length > 0) groupedBlog[cat] = catPosts;
    }

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
    },
    {
      "@type": "Question",
      "name": "Does Papa Johns have a kids menu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Papa Johns does not have a dedicated kids menu, but offers a Junior Pizza section with smaller, simpler options suitable for children. Small Classic Pizzas also work well for kids and are available with mild toppings like Cheese or light Pepperoni."
      }
    },
    {
      "@type": "Question",
      "name": "What desserts does Papa Johns offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Papa Johns desserts in 2026 include Chocolate Chip Cookie ($5.99), Double Chocolate Brownie ($5.99), Cinnamon Pull-Aparts, and Oreo Cookie Papa Bites. All desserts are baked fresh and available for delivery or carryout."
      }
    },
    {
      "@type": "Question",
      "name": "Does Papa Johns offer pasta or non-pizza items?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Papa Johns offers pasta dishes at select locations, as well as Papadias (flatbread sandwiches), Papa Bowls (pizza toppings over salad base), Chicken Wings, Breadsticks, and various desserts — providing options beyond traditional pizza."
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
                    
                    <Link href="#pizza-menu" className="bg-[#cc0000] hover:bg-white hover:text-[#1A3D17] text-white font-black py-4 px-10 rounded-full transition-all uppercase tracking-widest text-xs shadow-xl active:scale-95">
                        Jump to Menu Items ↓
                    </Link>
                </div>
            </div>

            {/* ── SECTION 1: DYNAMIC MENU ITEMS (New Item-Level SEO) ── */}
            <section id="pizza-menu" className="max-w-[1280px] mx-auto px-4 mb-24">
                 <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-black text-[#1A3D17] uppercase tracking-tighter mb-4" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                        Browse Full <span className="text-[#cc0000]">Pizza Menu</span>
                    </h2>
                    <p className="text-gray-500 font-bold max-w-xl mx-auto">
                        Each item below contains detailed pricing for all sizes (Small to XL), calorie counts, and ingredients.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {menuItems.map((item) => (
                        <Link 
                            key={item.id} 
                            href={`/menus-prices/${item.slug}`}
                            className="bg-white rounded-[2rem] p-6 shadow-sm border-2 border-gray-50 hover:border-[#CCEE18] hover:shadow-xl transition-all group flex flex-col relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#CCEE18] rounded-bl-full -mr-12 -mt-12 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                            
                            {/* Actual Product Image (Smaller) */}
                            <div className="h-48 w-full bg-[#fcfaf8] rounded-2xl mb-5 relative overflow-hidden border border-gray-100 shadow-inner group-hover:shadow-md transition-shadow flex items-center justify-center">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                />
                            </div>

                            <div className="flex items-center justify-between mb-3 text-left">
                                <span className="bg-[#1A3D17] text-[#CCEE18] font-black text-[9px] px-3 py-1 rounded-full uppercase tracking-widest">
                                    {item.category}
                                </span>
                                <div className="flex items-center gap-1 text-yellow-500 text-[10px] font-black">
                                    <Star size={10} fill="currentColor" /> {item.rating}
                                </div>
                            </div>

                            <h3 className="text-xl font-black text-[#1A3D17] uppercase leading-tight mb-4 group-hover:text-[#cc0000] transition-colors text-left" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                {item.slug.split('-').join(' ')}
                            </h3>

                            <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                                <div className="flex flex-col text-left">
                                    <span className="text-gray-400 text-[9px] font-bold uppercase tracking-widest leading-none mb-1">Price from</span>
                                    <span className="text-xl font-black text-[#1A3D17] group-hover:text-[#cc0000] transition-colors">${item.price}</span>
                                </div>
                                <div className="bg-[#CCEE18] p-2.5 rounded-full group-hover:bg-[#cc0000] group-hover:text-white transition-colors">
                                    <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                    
                    {/* 4th Item Added Manually per request */}
                    <Link 
                        href="/posts/papa-johns-wings"
                        className="bg-white rounded-[2rem] p-6 shadow-sm border-2 border-gray-50 hover:border-[#CCEE18] hover:shadow-xl transition-all group flex flex-col relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#CCEE18] rounded-bl-full -mr-12 -mt-12 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        <div className="h-48 w-full bg-[#fcfaf8] rounded-2xl mb-5 relative overflow-hidden border border-gray-100 shadow-inner group-hover:shadow-md transition-shadow flex items-center justify-center">
                            <img src="/papa-johns-wings-flavors.webp" alt="Papa Johns Wings" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="flex items-center justify-between mb-3 text-left">
                            <span className="bg-[#1A3D17] text-[#CCEE18] font-black text-[9px] px-3 py-1 rounded-full uppercase tracking-widest">Sides & Dips</span>
                            <div className="flex items-center gap-1 text-yellow-500 text-[10px] font-black"><Star size={10} fill="currentColor" /> 4.8</div>
                        </div>
                        <h3 className="text-xl font-black text-[#1A3D17] uppercase leading-tight mb-4 group-hover:text-[#cc0000] transition-colors text-left" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                            Papa Johns Wings
                        </h3>
                        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                            <div className="flex flex-col text-left">
                                <span className="text-gray-400 text-[9px] font-bold uppercase tracking-widest leading-none mb-1">Price from</span>
                                <span className="text-xl font-black text-[#1A3D17] group-hover:text-[#cc0000] transition-colors">$8.49</span>
                            </div>
                            <div className="bg-[#CCEE18] p-2.5 rounded-full group-hover:bg-[#cc0000] group-hover:text-white transition-colors">
                                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                            </div>
                        </div>
                    </Link>

                    {/* 5th Item Added Manually per request */}
                    <Link 
                        href="/posts/papa-johns-bbq-chicken-bacon-pizza"
                        className="bg-white rounded-[2rem] p-6 shadow-sm border-2 border-gray-50 hover:border-[#CCEE18] hover:shadow-xl transition-all group flex flex-col relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#CCEE18] rounded-bl-full -mr-12 -mt-12 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        <div className="h-48 w-full bg-[#fcfaf8] rounded-2xl mb-5 relative overflow-hidden border border-gray-100 shadow-inner group-hover:shadow-md transition-shadow flex items-center justify-center">
                            <img src="/bbq-chicken-bacon-pizza.png" alt="Papa Johns BBQ Chicken Bacon Pizza" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="flex items-center justify-between mb-3 text-left">
                            <span className="bg-[#1A3D17] text-[#CCEE18] font-black text-[9px] px-3 py-1 rounded-full uppercase tracking-widest">Super Loaded Specialty Pizzas</span>
                            <div className="flex items-center gap-1 text-yellow-500 text-[10px] font-black"><Star size={10} fill="currentColor" /> 4.7</div>
                        </div>
                        <h3 className="text-xl font-black text-[#1A3D17] uppercase leading-tight mb-4 group-hover:text-[#cc0000] transition-colors text-left" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                            Papa Johns BBQ Chicken Bacon Pizza
                        </h3>
                        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                            <div className="flex flex-col text-left">
                                <span className="text-gray-400 text-[9px] font-bold uppercase tracking-widest leading-none mb-1">Price from</span>
                                <span className="text-xl font-black text-[#1A3D17] group-hover:text-[#cc0000] transition-colors">$14.49</span>
                            </div>
                            <div className="bg-[#CCEE18] p-2.5 rounded-full group-hover:bg-[#cc0000] group-hover:text-white transition-colors">
                                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* ── SECTION 2: BLOG GUIDES ── */}
            <div className="max-w-[1280px] mx-auto px-4">
                <div className="text-center mb-14">
                    <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tighter mb-4" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                        In-Depth <span className="text-[#cc0000]">Menu Guides</span>
                    </h2>
                </div>
                {Object.entries(groupedBlog).map(([category, catPosts]) => (
                    <section
                        key={category}
                        id={category.toLowerCase().replace(/\s+/g, '-')}
                        className="mb-20"
                    >
                        <div className="flex items-center gap-5 mb-10">
                            <div className="flex-shrink-0">
                                <div className="bg-[#cc0000] text-white font-black uppercase tracking-[0.25em] text-[11px] px-6 py-2.5 rounded-full shadow-md">
                                    {category}
                                </div>
                            </div>
                            <div className="flex-1 h-[2px] bg-gradient-to-r from-[#cc0000]/30 to-transparent rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {catPosts.map((post) => (
                                <Link
                                    href={`/posts/${post.slug}`}
                                    key={post.id}
                                    className="bg-white rounded-[2rem] p-6 shadow-md hover:shadow-2xl hover:border-[#CCEE18] border-2 border-transparent transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
                                >
                                    <div className="aspect-[16/9] bg-gray-100 rounded-xl mb-6 relative overflow-hidden shadow-inner">
                                        <div className="absolute top-3 left-3 z-10 bg-[#cc0000] text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                                            {post.category}
                                        </div>
                                        <img
                                            src={post.image}
                                            alt={post.imageAlt || post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <h2 className="text-xl font-black text-[#1A3D17] uppercase leading-tight mb-4 group-hover:text-[#cc0000] transition-colors" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-500 text-sm font-medium mb-8 flex-1 leading-relaxed line-clamp-3 italic">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto border-t border-gray-100 pt-5 flex items-center justify-between text-[#1A3D17] text-xs font-black uppercase tracking-widest group-hover:text-[#cc0000] transition-colors">
                                        Read Category Guide
                                        <span className="bg-[#CCEE18] text-[#1A3D17] p-2 rounded-full group-hover:bg-[#cc0000] group-hover:text-white transition-colors">
                                            <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
