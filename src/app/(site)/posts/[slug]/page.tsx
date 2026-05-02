import posts from '../../../data/posts.json';
import { notFound } from 'next/navigation';
import { generateArticleSEO } from '../../../lib/seo-config';
import { generateArticleSchema, generateBreadcrumbSchema } from '../../../lib/seo/schema';
import InternalLinks from '../../../components/seo/InternalLinks';
import Link from 'next/link';
import exactFaqSchemas from '../../../data/faq-schemas.json';
import ContactFeedbackSection from '../../../components/ContactFeedbackSection';
import { Heart, Share2, Info, Navigation, ArrowRight, Star } from 'lucide-react';
import { getTodayFormatted, getMonthYear } from '../../../../lib/utils/date';
import LastUpdated from '../../../components/LastUpdated';

// Generate static params for all posts
export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// Generate SEO metadata dynamically for the post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = posts.find((p) => p.slug === resolvedParams.slug);
    if (!post) return notFound();

    const date = getTodayFormatted();
    const month = getMonthYear();

    switch (post.slug) {
        case 'best-pizza-delivery-near-me':
            return {
                title: `Best Pizza Delivery Near Me — ${month} Guide`,
                description: `Find the best pizza delivery near you in ${month}. Papa Johns delivery times, fees, ordering guide & deals — updated ${date}.`,
            };
        case 'papa-johns-menu-prices-guide':
            return {
                title: `Papa Johns Menu with Prices (${month}): Complete Guide to Every Item`,
                description: `Full Papa Johns menu with prices updated ${date}. All pizzas, sides, desserts, Papadias & drinks with exact pricing. 2026 deals inside.`,
            };
        case 'papa-johns-nutrition-guide':
            return {
                title: `Papa Johns Nutrition Guide: Full Calories & Allergens (${month})`,
                description: `Complete Papa Johns nutrition facts updated ${date}. Calories per slice, protein, sodium, allergens for every menu item.`,
            };
        case 'classic-pizzas':
            return {
                title: `Papa Johns Classic Pizzas: Every Flavor Ranked & Priced (${month})`,
                description: `All Papa Johns classic pizzas in ${month} — Pepperoni, Cheese, Sausage. Full prices, calories, honest reviews & which one to order.`,
            };
        case 'super-loaded':
            return {
                title: `Papa Johns Super Loaded Pizzas: All Flavors & Prices (${month})`,
                description: `Every Papa Johns Super Loaded Pizza in ${month} — The Works, The Meats, BBQ Chicken Bacon. Full prices, calories & ordering tips.`,
            };
        case 'sides':
            return {
                title: `Papa Johns Sides & Dips: Complete Guide (${month})`,
                description: `Every Papa Johns side item in ${month} — Garlic Knots, Breadsticks, Wings, Papa Bites. Full prices, calories & reviews.`,
            };
        case 'papa-johns-pan-pizza':
            return {
                title: `Papa Johns Pan Pizza (${month}): Price, Toppings, Calories & Honest Review`,
                description: `Papa Johns Pan Pizza is back with 6 cheeses & garlic parmesan crust. Full review, price ($11.99), calories per slice, toppings list & Pizza Hut comparison — updated ${date}.`,
            };
        case 'papa-johns-wings':
            return {
                title: `Papa Johns Wings: Flavors, Prices & Review (${month})`,
                description: `All 8 Papa Johns wings flavors in ${month} — Buffalo, BBQ, Garlic Parm & more. Full pricing, spicy levels, calories & blue cheese pairing — updated ${date}.`,
            };
        case 'papa-johns-garlic-knots':
            return {
                title: `Papa Johns Garlic Knots (${month}): Price, Calories & Dipping Guide`,
                description: `Papa Johns Garlic Knots guide updated ${date}. Order of 8 for $6.99, 110 calories per knot, side-by-side breadstick comparison & top 5 dipping sauces ranked.`,
            };
        case 'papa-johns-vs-dominos':
            return {
                title: `Papa Johns vs Dominos (${month}): Which Pizza Chain Is Actually Better?`,
                description: `Papa Johns vs Dominos comparison updated ${date}. We compare crust, sauce, price, delivery speed, app experience & rewards.`,
            };
                case 'papa-johns-bbq-chicken-bacon-pizza':
            return {
                title: `Papa Johns BBQ Chicken Bacon Pizza (${month}): Toppings, Price, Calories & Honest Review`,
                description: `Full guide to the sweet and smoky Papa Johns BBQ Chicken Bacon Pizza. Exact prices, calorie comparisons, ingredient breakdown, and best crus... updated ${date}.`,
            };
        case 'papa-johns-desserts':
            return {
                title: `Papa Johns Desserts Menu: Every Sweet Treat, Price & Calorie ((${month}))`,
                description: `Discover every Papa Johns dessert in ${month}   Chocolate Chip Cookie, Double Chocolate Brownie, Cinnamon Pull Aparts & Oreo Papa Bites. Pri... updated ${date}.`,
            };
        case 'new-papadias-flavors-2026':
            return {
                title: `Papa Johns Papadias: All Flavors, Prices & Which One to Order in (${month})`,
                description: `Our famous flatbread sandwiches just got a massive upgrade. Explore the mouth-watering Papadias flavors launching this year.... updated ${date}.`,
            };
        case 'papa-johns-order':
            return {
                title: `Papa Johns Order Online (${month}) — Delivery, Carryout & App Guide`,
                description: `Learn exactly how to place a Papa Johns order in ${month} — online, via app, phone, or DoorDash. Compare delivery vs carryout... updated ${date}.`,
            };
        case 'papa-johns-small-pizza':
            return {
                title: `Papa Johns Small Pizza Price 2026: Cost, Size & Is It Worth It? (${month})`,
                description: `Papa Johns small pizza (10") costs $8.99–$12.99 in ${month} 2026. Get exact prices by topping, calories per slice, size comparison vs medium & large, and best deals.`,
            };
        case 'papa-johns-stuffed-crust-pizza':
            return {
                title: `Papa Johns Stuffed Crust Pizza: Price, Calories & Review (${month})`,
                description: `Everything about Papa Johns Stuffed Crust Pizza in ${month} — Epic vs Garlic vs Cheesy Calzone, exact prices, calories per slice, review... updated ${date}.`,
            };
        case 'papa-johns-spicy-italian-pizza':
            return {
                title: `Papa Johns Spicy Italian Pizza: Price, Calories & Review (${month})`,
                description: `Full guide to Papa Johns Spicy Italian Pizza ${month} toppings, exact prices by size, calories per slice, spice level, honest review & best crust to order it on. Updated ${date}.`,
            };
        case 'papa-johns-mountain-dew-drink':
            return {
                title: `Papa Johns Mountain Dew Guide 2026: Price, Calories & Review (${month})`,
                description: `Discover everything about Papa Johns Mountain Dew in ${month}. Complete price list for 20 oz and 2-Liter bottles, calories, caffeine content & best pizza pairings — updated ${date}.`,
            };
        case 'papa-johns-pepsi-drink':
            return {
                title: `Papa Johns Pepsi Price 2026: $2.99 | Calories, Sizes & Review (${month})`,
                description: `Papa Johns Pepsi costs $2.99 (20oz) or $3.49-$3.99 (2L) in 2026. Full nutrition facts, 250 calories, caffeine content, allergen info, and best pizza pairings. Updated ${date}.`,
            };
        case 'papa-johns-papadias-discontinued-2026':
            return {
                title: `PAPA JOHNS PAPADIAS DISCONTINUED 2026: Why They Were Removed & Fan Reactions (${month})`,
                description: `Papa Johns discontinued Papadias in ${month} 2026. Discover why they were removed, what replaced them, and fan reactions — updated ${date}.`,
            };
        case 'papa-johns-50-off-deal':
            return {
                title: `Papa Johns 50% Off Deal — How to Get It Today (${month})`,
                description: `Get Papa Johns 50% off deals today in ${month} — carryout special, BOGO pizza, promo codes, and every way to save 50% on your order. Updated ${date}.`,
            };
default:
            return generateArticleSEO(
                `${post.title} (${month})`,
                `${post.excerpt} — updated ${date}.`,
                post.slug,
                post.author
            );
    }
}

export const revalidate = 86400; // 24 hours


export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = posts.find((p) => p.slug === resolvedParams.slug);
    if (!post) return notFound();

    const month = getMonthYear();
    const dynamicTitle = post.slug === 'papa-johns-50-off-deal' 
        ? `Papa Johns 50% Off Deal — Complete Guide (${month})` 
        : post.title;
    
    const dynamicContent = post.slug === 'papa-johns-50-off-deal'
        ? post.content.replace(/May 2026/g, month)
        : post.content;

    const baseUrl = 'https://papajohns-menus.us';
    const postUrl = `${baseUrl}/posts/${post.slug}`;

    // Format Date
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    // Generating schema layers
    const articleSchema = generateArticleSchema(
        dynamicTitle,
        post.excerpt,
        `${baseUrl}${post.image}`,
        post.date,
        post.author,
        postUrl
    );

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Blog", url: `${baseUrl}/posts` },
        { name: post.category, url: `${baseUrl}/posts` },
        { name: dynamicTitle, url: postUrl }
    ]);

    // Mock Data for "Popular Items"
    const popularItems = [
        { name: "Epic Stuffed Crust", price: "$18.99", cals: "350 cal", img: "/epic-stuffed-crust-pizza.png", alt: "Papa Johns Epic Stuffed Crust Pizza with gooey cheese" },
        { name: "Garlic Parmesan Breadsticks", price: "$6.99", cals: "150 cal", img: "/garlic-parmesan-breadsticks.png", alt: "Papa Johns Garlic Parmesan Breadsticks baked golden brown" },
        { name: "Oreo Cookie Papa Bites", price: "$5.99", cals: "110 cal", img: "/oreo-cookie-papa-bites.png", alt: "Papa Johns Oreo Cookie Papa Bites sweet dessert" },
        { name: "Super Hawaiian Pizza", price: "$16.99", cals: "280 cal", img: "/super-hawaiian-pizza.png", alt: "Papa Johns Super Hawaiian Pizza with pineapple and ham" }
    ];

    const faqSchema = post.faqs ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": post.faqs.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer.replace(/<[^>]*>?/gm, '') // Remove HTML tags for cleaner schema
            }
        }))
    } : null;

    return (
        <div className="bg-[#fcfaf8] min-h-screen">
            {/* SEO & JSON-LD Scripts */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
            {(exactFaqSchemas as Record<string, any>)[post.slug] ? (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify((exactFaqSchemas as Record<string, any>)[post.slug]) }}
                />
            ) : null}

            {/* ── 1. HERO SECTION ── */}
            <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src={post.image} 
                        alt={post.imageAlt || post.title} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A3D17] via-[#1A3D17]/40 to-transparent"></div>
                </div>
                
                <div className="relative z-10 max-w-[1280px] mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="h-[2px] w-12 bg-[#CCEE18]"></span>
                        <span className="text-[#CCEE18] font-black uppercase tracking-[0.4em] text-xs">
                            {post.category}
                        </span>
                        <span className="h-[2px] w-12 bg-[#CCEE18]"></span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-8" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                        {dynamicTitle}
                    </h1>
                    <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm font-bold">
                        <span className="flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-[#cc0000] flex items-center justify-center text-[10px] text-white">PJ</span>
                            BY {post.author.toUpperCase()}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[#CCEE18]"></span>
                        <span>{formattedDate}</span>
                        <span className="w-1 h-1 rounded-full bg-[#CCEE18]"></span>
                        <span className="flex items-center gap-2">
                            <Star size={14} className="text-[#CCEE18]" fill="currentColor" /> 4.9/5 RATING
                        </span>
                    </div>
                </div>
            </div>

            {/* ── 2. CONTENT AREA ── */}
            <div className="max-w-[1280px] mx-auto px-4 -mt-20 relative z-20">
                <div className="flex flex-col lg:flex-row gap-12">
                    
                    {/* LEFT COLUMN: SIDEBAR */}
                    <div className="lg:w-[28%] space-y-8 order-2 lg:order-1">
                        
                        {/* Article Progress / Meta Box */}
                        <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#cc0000]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#1A3D17]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#CCEE18]"></div>
                                </div>
                                <Share2 size={20} className="text-gray-300 hover:text-[#cc0000] cursor-pointer transition-colors" />
                            </div>
                            <h3 className="text-lg font-black text-[#1A3D17] uppercase tracking-tighter mb-6 flex items-center gap-2">
                                <Info size={18} className="text-[#CCEE18]" /> Nutrition Stats
                            </h3>
                            <div className="grid grid-cols-2 gap-y-8 gap-x-6">
                                <div>
                                    <span className="text-white/40 uppercase text-[9px] font-black tracking-[0.2em] block mb-1">Calories</span>
                                    <span className="text-xl font-black text-[#CCEE18]">{post.calories || '670 kcal'}</span>
                                </div>
                                <div>
                                    <span className="text-white/40 uppercase text-[9px] font-black tracking-[0.2em] block mb-1">Est. Price</span>
                                    <span className="text-xl font-black text-white">{post.price || '$15.99'}</span>
                                </div>
                                <div>
                                    <span className="text-white/40 uppercase text-[9px] font-black tracking-[0.2em] block mb-1">Serving</span>
                                    <span className="text-sm font-black text-white/90">Per Portion</span>
                                </div>
                                <div>
                                    <span className="text-white/40 uppercase text-[9px] font-black tracking-[0.2em] block mb-1">User Rating</span>
                                    <div className="flex text-[#CCEE18] text-sm"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
                                </div>
                            </div>
                        </div>

                        {/* Explore More Sidebar Box */}
                        <div className="bg-[#fcfaf8] border-2 border-dashed border-[#1A3D17]/10 rounded-[2rem] p-8">
                            <h3 className="text-lg font-black text-[#1A3D17] uppercase tracking-tighter mb-6 flex items-center gap-2">
                                <Navigation size={18} className="text-[#cc0000]" /> Related Links
                            </h3>
                            <ul className="space-y-4">
                                <li><Link href="/store-locator" className="flex items-center justify-between group text-sm font-black text-gray-700 hover:text-[#cc0000] transition-colors uppercase italic"><span>Find Store</span> <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></Link></li>
                                <li><Link href="/coupons" className="flex items-center justify-between group text-sm font-black text-gray-700 hover:text-[#cc0000] transition-colors uppercase italic"><span>Best Deals</span> <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></Link></li>
                                <li><Link href="/hours" className="flex items-center justify-between group text-sm font-black text-gray-700 hover:text-[#cc0000] transition-colors uppercase italic"><span>Store Hours</span> <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: MAIN ARTICLE CONTENT */}
                    <div className="lg:w-[52%] space-y-10">
                        <div>
                            <h2 className="text-3xl font-black text-[#1A3D17] mb-4 uppercase tracking-tighter leading-tight" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                {dynamicTitle}
                            </h2>
                            <LastUpdated />
                            <div className="blog-content mt-4">
                                <div dangerouslySetInnerHTML={{ __html: dynamicContent }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── 3. FAQs & PRICING SECTION ── */}
            <div id="faq" className="bg-gray-50 py-24 border-y border-gray-200">
                <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        
                        {/* LEFT: FAQ Accordions */}
                        <div>
                            <div className="mb-10">
                                <span className="inline-block bg-[#cc0000]/10 text-[#cc0000] font-black uppercase tracking-[0.3em] text-[10px] px-6 py-2 rounded-full mb-4">
                                    Got Questions?
                                </span>
                                <h2 className="text-2xl md:text-4xl font-black text-[#1A3D17] uppercase tracking-tighter mb-4" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-gray-500 font-bold text-lg">
                                    Everything you need to know about <span className="text-[#cc0000]">{dynamicTitle}</span>.
                                </p>
                            </div>

                            <div className="space-y-6 text-left">
                                {post.faqs && post.faqs.map((faq: any, idx: number) => (
                                    <div key={idx} className="bg-white hover:bg-[#1A3D17] group transition-colors duration-300 p-8 rounded-3xl shadow-md border border-gray-100">
                                        <div className="flex items-start gap-5">
                                            <div className="w-12 h-12 shrink-0 bg-[#CCEE18] text-[#1A3D17] rounded-full flex items-center justify-center font-black text-xl shadow-inner">
                                                ?
                                            </div>
                                            <div>
                                                <h4 className="font-black text-gray-900 group-hover:text-white transition-colors mb-2 text-xl leading-snug">
                                                    {faq.question}
                                                </h4>
                                                <p 
                                                    className="text-gray-500 group-hover:text-gray-300 transition-colors text-base leading-relaxed font-medium"
                                                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: Pricing Table */}
                        <div>
                            <div className="mb-10 lg:text-right">
                                <span className="inline-block bg-[#1A3D17]/10 text-[#1A3D17] font-black uppercase tracking-[0.3em] text-[10px] px-6 py-2 rounded-full mb-4">
                                    Menu Value
                                </span>
                                <h2 className="text-2xl md:text-4xl font-black text-[#cc0000] uppercase tracking-tighter mb-4" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                    Current Pricing
                                </h2>
                                <p className="text-gray-500 font-bold text-lg">
                                    Detailed estimated prices for popular items.
                                </p>
                            </div>
                            
                            <div className="w-full bg-[#fcfaf8] rounded-[3rem] p-6 md:p-12 border-2 border-[#1A3D17]/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#CCEE18]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                                
                                <div className="relative z-10 overflow-x-auto">
                                    <div className="min-w-[500px]">
                                        <div className="flex items-center gap-4 mb-10">
                                            <div className="w-14 h-14 bg-[#1A3D17] rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3">
                                                <span className="text-2xl">📊</span>
                                            </div>
                                            <div>
                                                <h2 className="text-2xl md:text-3xl font-black text-[#1A3D17] uppercase tracking-tighter leading-none">
                                                    Data & Insights
                                                </h2>
                                                <p className="text-[#1A3D17]/60 text-xs font-bold uppercase tracking-widest mt-1">Live Nutrition & Deals</p>
                                            </div>
                                        </div>
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-[#1A3D17] text-[#CCEE18] uppercase text-[10px] tracking-widest font-black">
                                                    <th className="py-5 px-6 md:px-8">Item / Size</th>
                                                    <th className="py-5 px-6 md:px-8 text-right">Price</th>
                                                    <th className="py-5 px-6 md:px-8 text-center hidden sm:table-cell">Calories</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-base font-bold divide-y divide-gray-100">
                                                {post.pricing && post.pricing.map((row: any, idx: number) => (
                                                    <tr key={idx} className={`hover:bg-gray-50 transition-colors ${row.popular ? 'bg-[#CCEE18]/10 group' : ''}`}>
                                                        <td className={`py-6 px-6 md:px-8 font-bold flex items-center gap-4 ${row.popular ? 'text-[#1A3D17]' : 'text-gray-800'}`}>
                                                            <span className={`text-2xl p-2 rounded-xl shadow-sm ${row.popular ? 'bg-white group-hover:scale-110 transition-transform' : 'bg-gray-100'}`}>
                                                                {row.icon || '🍕'}
                                                            </span> 
                                                            <div>
                                                                {row.item}
                                                                {row.popular && <span className="block text-[10px] text-[#cc0000] uppercase tracking-widest mt-1">Most Popular</span>}
                                                            </div>
                                                        </td>
                                                        <td className="py-6 px-6 md:px-8 font-black text-[#cc0000] text-right text-lg">{row.price}</td>
                                                        <td className="py-6 px-6 md:px-8 text-gray-400 text-center font-medium hidden sm:table-cell">{row.calories}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                            <tfoot className="bg-gray-50 text-[10px] text-gray-400 font-bold text-center border-t border-gray-200">
                                                <tr>
                                                    <td colSpan={3} className="py-6 px-8 italic">
                                                        *Prices and calories are estimated and may vary by specific location, taxes, or ingredient customizations.
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── 4. MORE FROM CATEGORY & POPULAR ── */}
            <div className="max-w-[1280px] mx-auto px-4 py-20">
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-black text-[#1A3D17] uppercase tracking-tighter mb-2" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                            More from {post.category}
                        </h2>
                        <p className="text-gray-400 font-bold text-sm">Discover other delicious options in this category</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {post.category === 'Drinks' ? (
                            <>
                                <Link href="/posts/papa-johns-mountain-dew-drink" className="bg-white rounded-[2rem] p-6 shadow-md border hover:border-[#CCEE18] transition-all group hover:shadow-xl">
                                    <div className="aspect-video bg-gray-100 rounded-xl mb-4 overflow-hidden relative">
                                        <img src="/papa-johns-mountain-dew.png" alt="Papa Johns Mountain Dew Price and Calories 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <h4 className="font-black text-[#1A3D17] uppercase text-xl mb-2">Mountain Dew</h4>
                                    <div className="flex justify-between items-center text-sm font-bold text-gray-500">
                                        <span>From $2.99</span>
                                        <span className="text-[#cc0000] flex items-center gap-1">View Details <ArrowRight size={14} /></span>
                                    </div>
                                </Link>

                                <Link href="/drinks" className="bg-white rounded-[2rem] p-6 shadow-md border hover:border-[#CCEE18] transition-all group hover:shadow-xl">
                                    <div className="aspect-video bg-gray-100 rounded-xl mb-4 overflow-hidden relative">
                                        <img src="/papa-johns-drinks-menu.png" alt="Papa Johns Drinks Menu 2026 all beverages" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <h4 className="font-black text-[#1A3D17] uppercase text-xl mb-2">All Drinks Menu</h4>
                                    <div className="flex justify-between items-center text-sm font-bold text-gray-500">
                                        <span>From $2.99</span>
                                        <span className="text-[#cc0000] flex items-center gap-1">View Details <ArrowRight size={14} /></span>
                                    </div>
                                </Link>

                                <Link href="/posts/classic-pizzas" className="bg-white rounded-[2rem] p-6 shadow-md border hover:border-[#CCEE18] transition-all group hover:shadow-xl">
                                    <div className="aspect-video bg-gray-100 rounded-xl mb-4 overflow-hidden relative">
                                        <img src="/best-pizza-delivery-near-me.jpg" alt="Papa Johns Classic Pizzas to pair with drinks" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <h4 className="font-black text-[#1A3D17] uppercase text-xl mb-2">Classic Pizzas</h4>
                                    <div className="flex justify-between items-center text-sm font-bold text-gray-500">
                                        <span>From $10.99</span>
                                        <span className="text-[#cc0000] flex items-center gap-1">View Details <ArrowRight size={14} /></span>
                                    </div>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href="/posts/classic-pizzas" className="bg-white rounded-[2rem] p-6 shadow-md border hover:border-[#CCEE18] transition-all group hover:shadow-xl">
                                    <div className="aspect-video bg-gray-100 rounded-xl mb-4 overflow-hidden relative">
                                        <img src="/best-pizza-delivery-near-me.jpg" alt="Classic Pizzas" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <h4 className="font-black text-[#1A3D17] uppercase text-xl mb-2">Classic Pizzas</h4>
                                    <div className="flex justify-between items-center text-sm font-bold text-gray-500">
                                        <span>From $10.99</span>
                                        <span className="text-[#cc0000] flex items-center gap-1">View Details <ArrowRight size={14} /></span>
                                    </div>
                                </Link>

                                <Link href="/posts/super-loaded" className="bg-white rounded-[2rem] p-6 shadow-md border hover:border-[#CCEE18] transition-all group hover:shadow-xl">
                                    <div className="aspect-video bg-gray-100 rounded-xl mb-4 overflow-hidden relative">
                                        <img src="/papa-johns-menu-prices-guide.png" alt="Super Loaded Pizzas" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <h4 className="font-black text-[#1A3D17] uppercase text-xl mb-2">Super Loaded</h4>
                                    <div className="flex justify-between items-center text-sm font-bold text-gray-500">
                                        <span>From $15.99</span>
                                        <span className="text-[#cc0000] flex items-center gap-1">View Details <ArrowRight size={14} /></span>
                                    </div>
                                </Link>
                                
                                <Link href="/posts/sides" className="bg-white rounded-[2rem] p-6 shadow-md border hover:border-[#CCEE18] transition-all group hover:shadow-xl">
                                    <div className="aspect-video bg-gray-100 rounded-xl mb-4 overflow-hidden relative">
                                        <img src="/new-papadias-flavors-2026.jpg" alt="Sides and Dips" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <h4 className="font-black text-[#1A3D17] uppercase text-xl mb-2">Sides & Dips</h4>
                                    <div className="flex justify-between items-center text-sm font-bold text-gray-500">
                                        <span>From $4.99</span>
                                        <span className="text-[#cc0000] flex items-center gap-1">View Details <ArrowRight size={14} /></span>
                                    </div>
                                </Link>
                            </>
                        )}
                    </div>
                </div>

                <div>
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-black text-[#1A3D17] uppercase tracking-tighter mb-2" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                            Popular Menu Items
                        </h2>
                        <p className="text-gray-400 font-bold text-sm">Customer favorites you might also enjoy</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {popularItems.map((item, i) => (
                            <div key={i} className="bg-white rounded-3xl p-5 shadow-md border hover:border-[#CCEE18] transition-colors group">
                                <div className="aspect-[4/3] w-full bg-gray-100 rounded-2xl mb-4 overflow-hidden relative group-hover:shadow-md transition-shadow">
                                    <img src={item.img} alt={item.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                                </div>
                                <h4 className="font-black text-[#1A3D17] uppercase text-sm mb-2 h-10">{item.name}</h4>
                                <div className="flex justify-between items-center text-xs font-bold text-gray-400 border-t border-gray-100 pt-3">
                                    <span>{item.cals}</span>
                                    <span className="text-[#cc0000] text-sm">{item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── 5. RED CTA BANNER ── */}
            <div className="max-w-[1100px] mx-auto px-4 mb-20">
                <div className="bg-[#cc0000] rounded-[3rem] p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b0000] rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8b0000] rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
                    
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                            Ready to Experience <span className="text-[#CCEE18]">{dynamicTitle}</span>?
                        </h2>
                        <p className="text-white/80 font-bold text-lg max-w-2xl mx-auto mb-10">
                            Find your nearest Papa John's location and taste the legend for yourself!
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link 
                                href="/store-locator" 
                                className="bg-[#CCEE18] hover:bg-white text-[#1A3D17] font-black py-4 px-10 rounded-full transition-all uppercase tracking-widest text-xs shadow-xl active:scale-95"
                            >
                                Find Location & Order
                            </Link>
                            <Link 
                                href="/coupons" 
                                className="bg-[#8b0000] border-2 border-[#8b0000] hover:border-white hover:bg-transparent text-white font-black py-4 px-10 rounded-full transition-all uppercase tracking-widest text-xs shadow-xl"
                            >
                                Get Coupons Offers
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── 6. MORE GUIDES LATEST POSTS ── */}
            <div className="bg-[#f0ece6] py-20">
                <div className="max-w-[1280px] mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tighter mb-4" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                        More Papa John's Guides
                    </h2>
                    <p className="text-gray-500 font-bold mb-12">Discover more helpful guides and insider tips.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
                        {posts.slice(0, 3).map((guide) => (
                            <Link href={guide.slug === 'best-pizza-delivery-near-me' ? `/${guide.slug}` : `/posts/${guide.slug}`} key={guide.id} className="bg-white rounded-[2rem] p-6 shadow-md hover:shadow-xl transition-shadow group flex flex-col h-full">
                                <div className="aspect-[16/9] bg-gray-200 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute top-3 left-3 z-10 bg-[#cc0000] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow">{guide.category}</div>
                                    <img src={guide.image} alt={guide.imageAlt || guide.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                    <span>⏰ {new Date(guide.date).toLocaleDateString()}</span>
                                </div>
                                <h4 className="text-lg font-black text-[#1A3D17] uppercase leading-snug mb-3 group-hover:text-[#cc0000] transition-colors">
                                    {guide.title}
                                </h4>
                                <p className="text-gray-500 text-sm font-medium mb-6 line-clamp-2">
                                    {guide.excerpt}
                                </p>
                                <div className="mt-auto flex items-center justify-between text-[#cc0000] text-xs font-black uppercase tracking-widest">
                                    Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                    
                    <Link 
                        href="/posts" 
                        className="inline-flex items-center gap-3 bg-[#CCEE18] hover:bg-[#1A3D17] hover:text-white text-[#1A3D17] font-black py-4 px-10 rounded-full transition-all uppercase tracking-widest text-[10px] shadow-lg"
                    >
                        View All Important Guides <ArrowRight size={14} />
                    </Link>
                </div>
            </div>

            {/* ── 7. CUSTOMER REVIEWS/FEEDBACK ── */}
            <div className="max-w-[1000px] mx-auto px-4 pb-20 pt-10">
                <ContactFeedbackSection />
            </div>
        </div>
    );
}
