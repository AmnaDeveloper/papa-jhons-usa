import posts from '../../../data/posts.json';
import { notFound } from 'next/navigation';
import { generateArticleSEO } from '../../../lib/seo-config';
import { generateArticleSchema, generateBreadcrumbSchema } from '../../../lib/seo/schema';
import InternalLinks from '../../../components/seo/InternalLinks';
import Link from 'next/link';
import ContactFeedbackSection from '../../../components/ContactFeedbackSection';
import { Heart, Share2, Info, Navigation, ArrowRight, Star } from 'lucide-react';

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

    return generateArticleSEO(
        post.title,
        post.excerpt,
        post.slug,
        post.author
    );
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = posts.find((p) => p.slug === resolvedParams.slug);
    if (!post) return notFound();

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
        post.title,
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
        { name: post.title, url: postUrl }
    ]);

    // Mock Data for "Popular Items"
    const popularItems = [
        { name: "Epic Stuffed Crust", price: "$18.99", cals: "350 cal", img: "/epic-stuffed-crust-pizza.png", alt: "Papa Johns Epic Stuffed Crust Pizza with gooey cheese" },
        { name: "Garlic Parmesan Breadsticks", price: "$6.99", cals: "150 cal", img: "/garlic-parmesan-breadsticks.png", alt: "Papa Johns Garlic Parmesan Breadsticks baked golden brown" },
        { name: "Oreo Cookie Papa Bites", price: "$5.99", cals: "110 cal", img: "/oreo-cookie-papa-bites.png", alt: "Papa Johns Oreo Cookie Papa Bites sweet dessert" },
        { name: "Super Hawaiian Pizza", price: "$16.99", cals: "280 cal", img: "/super-hawaiian-pizza.png", alt: "Papa Johns Super Hawaiian Pizza with pineapple and ham" }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            
            <div className="bg-white min-h-screen font-sans">
                {/* ── 1. DARK RED HERO BANNER ── */}
                <div className="bg-[#1A3D17] border-b-8 border-[#cc0000] text-white py-12 md:py-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CCEE18] rounded-full -mr-64 -mt-64 opacity-5 pointer-events-none"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <h1 
                            className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4" 
                            style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}
                        >
                            {post.title}
                        </h1>
                        <p className="text-xl md:text-2xl font-bold text-[#CCEE18] mb-2 tracking-wide">
                            {post.price || '$15.99'} | Updated {formattedDate}
                        </p>
                        <p className="text-gray-300 font-medium mb-8 max-w-2xl mx-auto italic">
                            {post.excerpt}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-[10px] font-black uppercase tracking-widest text-[#1A3D17]">
                            <span className="bg-[#CCEE18] px-4 py-1.5 rounded-full shadow-lg">🔥 Popular Choice</span>
                            <span className="bg-white px-4 py-1.5 rounded-full shadow-lg">⚡ {post.calories || '670 Calories'}</span>
                            <span className="bg-[#cc0000] text-white px-4 py-1.5 rounded-full shadow-lg">⭐ Top Rated</span>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link 
                                href="/store-locator" 
                                className="w-full sm:w-auto bg-[#CCEE18] hover:bg-white text-[#1A3D17] font-black py-4 px-10 rounded-full transition-all uppercase tracking-widest text-sm shadow-xl active:scale-95 border-2 border-[#CCEE18] hover:border-white"
                            >
                                Find Location & Order
                            </Link>
                            <Link 
                                href="/menus-prices" 
                                className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1A3D17] font-black py-4 px-10 rounded-full transition-all uppercase tracking-widest text-sm shadow-xl active:scale-95"
                            >
                                View Full Menu
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ── 2. MAIN LAYOUT GRID ── */}
                <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-16">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                        
                        {/* LEFT COLUMN: IMAGE & ACTIONS */}
                        <div className="lg:w-5/12">
                            <div className="bg-white rounded-[2rem] p-3 shadow-2xl relative border border-gray-200 overflow-hidden group">
                                <div className="absolute top-5 left-5 z-10 bg-[#CCEE18] text-[#1A3D17] text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                                    ⭐ Popular
                                </div>
                                <div className="absolute top-5 right-5 z-10 bg-[#cc0000] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                                    New
                                </div>
                                <div className="relative w-full h-[350px] lg:h-[450px] rounded-3xl overflow-hidden shadow-inner border border-gray-100">
                                    <img 
                                        src={post.image || '/logo.png'} 
                                        alt={post.imageAlt || post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                                </div>
                            </div>
                            
                            <div className="flex justify-center gap-4 mt-8">
                                <button className="flex-1 bg-gray-50 hover:bg-red-50 text-gray-500 hover:text-[#cc0000] font-black uppercase tracking-widest py-4 rounded-2xl transition-all flex items-center justify-center gap-3 border border-gray-100 hover:border-red-100 text-xs shadow-sm">
                                    <Heart size={16} /> Favorite
                                </button>
                                <button className="flex-1 bg-gray-50 hover:bg-[#CCEE18]/10 text-gray-500 hover:text-[#1A3D17] font-black uppercase tracking-widest py-4 rounded-2xl transition-all flex items-center justify-center gap-3 border border-gray-100 hover:border-[#CCEE18]/30 text-xs shadow-sm">
                                    <Share2 size={16} /> Share
                                </button>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: DETAILS */}
                        <div className="lg:w-7/12 space-y-10">
                            <div>
                                <h2 className="text-3xl font-black text-[#1A3D17] mb-6 uppercase tracking-tighter" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                    Papa John's {post.title} - Complete Menu Information
                                </h2>
                                <div className="blog-content prose prose-lg !max-w-none 
                                    text-gray-700 leading-relaxed font-semibold
                                    prose-h2:text-4xl prose-h2:md:text-5xl prose-h2:font-black prose-h2:text-[#1A3D17] prose-h2:uppercase prose-h2:tracking-tighter prose-h2:mb-8 prose-h2:mt-16 prose-h2:border-l-[12px] prose-h2:border-[#CCEE18] prose-h2:pl-8
                                    prose-h3:text-2xl prose-h3:font-black prose-h3:text-[#cc0000] prose-h3:uppercase prose-h3:mt-12 prose-h3:mb-6 prose-h3:border-b-2 prose-h3:border-gray-100 prose-h3:pb-4
                                    prose-p:mb-8 prose-p:text-lg prose-p:leading-8 prose-p:text-gray-600
                                    prose-li:font-bold prose-li:text-gray-800 prose-li:mb-4
                                    prose-strong:text-[#111827] prose-strong:font-black prose-strong:bg-[#CCEE18]/30 prose-strong:px-1
                                    prose-a:text-[#cc0000] prose-a:font-black prose-a:underline hover:prose-a:text-[#1A3D17]">
                                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                                </div>
                            </div>

                            {/* Explore More Box */}
                            <div className="bg-[#1A3D17]/5 border-2 border-[#1A3D17]/10 rounded-2xl p-8">
                                <h3 className="text-lg font-black text-[#1A3D17] uppercase tracking-tighter mb-6 flex items-center gap-2">
                                    <Navigation size={18} className="text-[#CCEE18]" /> Explore More Papa John's Menu Options
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                                    <div className="space-y-3 text-sm font-bold text-gray-600">
                                        <p className="text-[#cc0000] lowercase italic">Popular Menu Categories:</p>
                                        <ul className="space-y-2 list-disc pl-5 marker:text-[#CCEE18]">
                                            <li><Link href="/menus-prices/classic-pizzas" className="hover:text-[#1A3D17]">Classic Pizzas</Link></li>
                                            <li><Link href="/menus-prices/super-loaded" className="hover:text-[#1A3D17]">Super Loaded</Link></li>
                                            <li><Link href="/menus-prices/sides" className="hover:text-[#1A3D17]">Sides & Dips</Link></li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3 text-sm font-bold text-gray-600 mt-4 sm:mt-0">
                                        <p className="text-[#cc0000] lowercase italic">More Information:</p>
                                        <ul className="space-y-2 list-disc pl-5 marker:text-[#CCEE18]">
                                            <li><Link href="/coupons" className="hover:text-[#1A3D17]">Current Deals</Link></li>
                                            <li><Link href="/hours" className="hover:text-[#1A3D17]">Store Hours</Link></li>
                                            <li><Link href="/store-locator" className="hover:text-[#1A3D17]">Find Nearest Location</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Nutrition Box */}
                            <div className="bg-white border hover:border-[#CCEE18] transition-colors rounded-2xl p-8 shadow-sm hover:shadow-xl">
                                <h3 className="text-xl font-black text-[#1A3D17] uppercase tracking-tighter mb-8 border-b border-gray-100 pb-4">
                                    Quick Details
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6 text-sm font-bold">
                                    <div>
                                        <span className="text-gray-400 uppercase text-[10px] tracking-widest block mb-1">Price</span>
                                        <span className="text-2xl text-[#cc0000] font-black">{post.price || '$15.99'}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-400 uppercase text-[10px] tracking-widest block mb-1">Serves</span>
                                        <span className="text-gray-900">{post.serves || '1-2 Person(s)'}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-400 uppercase text-[10px] tracking-widest block mb-1">Calories</span>
                                        <span className="text-gray-900">{post.calories || '670'}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-400 uppercase text-[10px] tracking-widest block mb-1">Prep Time</span>
                                        <span className="text-gray-900">{post.prepTime || '10-15 mins'}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-400 uppercase text-[10px] tracking-widest block mb-1">Category</span>
                                        <span className="text-gray-900">{post.category}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-400 uppercase text-[10px] tracking-widest block mb-1">Rating</span>
                                        <span className="text-[#CCEE18] flex text-lg">★★★★★</span>
                                    </div>
                                </div>
                            </div>

                            {/* Ingredients & What's Included Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white border rounded-2xl p-8 shadow-sm">
                                    <h3 className="text-lg font-black text-[#1A3D17] uppercase tracking-tighter mb-6">
                                        Features & Spotlight
                                    </h3>
                                    <div className="space-y-4">
                                        <div>
                                            <span className="text-[#cc0000] text-[10px] font-black uppercase tracking-widest block mb-2">Highlights</span>
                                            <ul className="text-sm font-medium text-gray-600 space-y-1 list-disc pl-4 marker:text-[#CCEE18]">
                                                {post.ingredients ? (
                                                    post.ingredients.map((ing: string, idx: number) => <li key={idx}>{ing}</li>)
                                                ) : (
                                                    <><li>Fresh dough</li><li>Signature Sauce</li></>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white border rounded-2xl p-8 shadow-sm">
                                    <h3 className="text-lg font-black text-[#1A3D17] uppercase tracking-tighter mb-6">
                                        What You'll Discover
                                    </h3>
                                    <ul className="space-y-3 list-none">
                                        {post.included ? (
                                            post.included.map((item: string, i: number) => (
                                                <li key={i} className="flex items-start gap-3 text-sm font-medium text-gray-600">
                                                    <span className="text-[#CCEE18] mt-0.5">✦</span>
                                                    {item}
                                                </li>
                                            ))
                                        ) : (
                                            <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                                                <span className="text-[#CCEE18] mt-0.5">✦</span>
                                                Legendary Papa John's Quality
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── 3. FAQs & PRICING SECTION ── */}
                <div className="bg-gray-50 py-24 border-y border-gray-200">
                    <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            
                            {/* LEFT: FAQ Accordions */}
                            <div>
                                <div className="mb-10">
                                    <span className="inline-block bg-[#cc0000]/10 text-[#cc0000] font-black uppercase tracking-[0.3em] text-[10px] px-6 py-2 rounded-full mb-4">
                                        Got Questions?
                                    </span>
                                    <h2 className="text-3xl md:text-5xl font-black text-[#1A3D17] uppercase tracking-tighter mb-4" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                        Frequently Asked Questions
                                    </h2>
                                    <p className="text-gray-500 font-bold text-lg">
                                        Everything you need to know about <span className="text-[#cc0000]">{post.title}</span>.
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
                                    <h2 className="text-3xl md:text-5xl font-black text-[#cc0000] uppercase tracking-tighter mb-4" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                        Current Pricing
                                    </h2>
                                    <p className="text-gray-500 font-bold text-lg">
                                        Detailed estimated prices for popular items.
                                    </p>
                                </div>
                                
                                <div className="bg-white rounded-[2rem] border border-gray-200 shadow-xl overflow-hidden md:mt-8">
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
                            <Link href="/posts/classic-pizzas" className="bg-white rounded-[2rem] p-6 shadow-md border hover:border-[#CCEE18] transition-all group hover:shadow-xl">
                                <div className="aspect-video bg-gray-100 rounded-xl mb-4 overflow-hidden relative">
                                    <img src="/best-pizza-delivery-near-me.jpg" alt="Classic Pizzas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <h4 className="font-black text-[#1A3D17] uppercase text-xl mb-2">Classic Pizzas</h4>
                                <div className="flex justify-between items-center text-sm font-bold text-gray-500">
                                    <span>From $10.99</span>
                                    <span className="text-[#cc0000] flex items-center gap-1">View Details <ArrowRight size={14} /></span>
                                </div>
                            </Link>

                            <Link href="/posts/super-loaded" className="bg-white rounded-[2rem] p-6 shadow-md border hover:border-[#CCEE18] transition-all group hover:shadow-xl">
                                <div className="aspect-video bg-gray-100 rounded-xl mb-4 overflow-hidden relative">
                                    <img src="/papa-johns-menu-prices-guide.png" alt="Super Loaded Pizzas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <h4 className="font-black text-[#1A3D17] uppercase text-xl mb-2">Super Loaded</h4>
                                <div className="flex justify-between items-center text-sm font-bold text-gray-500">
                                    <span>From $15.99</span>
                                    <span className="text-[#cc0000] flex items-center gap-1">View Details <ArrowRight size={14} /></span>
                                </div>
                            </Link>
                            
                            <Link href="/posts/sides" className="bg-white rounded-[2rem] p-6 shadow-md border hover:border-[#CCEE18] transition-all group hover:shadow-xl">
                                <div className="aspect-video bg-gray-100 rounded-xl mb-4 overflow-hidden relative">
                                    <img src="/new-papadias-flavors-2026.jpg" alt="Sides and Dips" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <h4 className="font-black text-[#1A3D17] uppercase text-xl mb-2">Sides & Dips</h4>
                                <div className="flex justify-between items-center text-sm font-bold text-gray-500">
                                    <span>From $4.99</span>
                                    <span className="text-[#cc0000] flex items-center gap-1">View Details <ArrowRight size={14} /></span>
                                </div>
                            </Link>
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
                                Ready to Experience <span className="text-[#CCEE18]">{post.title}</span>?
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
                                <Link href={`/posts/${guide.slug}`} key={guide.id} className="bg-white rounded-[2rem] p-6 shadow-md hover:shadow-xl transition-shadow group flex flex-col h-full">
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
            
        </>
    );
}
