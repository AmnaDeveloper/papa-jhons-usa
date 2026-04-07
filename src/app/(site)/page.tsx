import Image from "next/image";
import Link from "next/link";
import posts from "../data/posts.json";
import { ArrowRight } from "lucide-react";
import HeroSection from "../components/HeroSection";
import RestaurantHoursSection from "../components/RestaurantHoursSection";
import CouponsSection from "../components/CouponsSection";

import { generateFAQSchema } from "../lib/seo/schema"; // kept if needed elsewhere, otherwise safe to ignore
import { getTodayFormatted, getMonthYear } from '@/lib/utils/date';

export const revalidate = 86400; // 24 hours ISR

export async function generateMetadata() {
  const date = getTodayFormatted()
  const month = getMonthYear()
  
  return {
    title: `Papa Johns Menu with Prices ${month}: Complete Guide`,
    description: `Discover the complete Papa Johns menu with prices, updated ${date}. Classic Pizzas from $10.99, Super Loaded from $14.99. Deals, coupons & nutrition guide.`,
    openGraph: {
      title: `Papa Johns Menu with Prices ${month}: Complete Guide`,
      description: `Updated ${date} — Full Papa Johns menu, prices, deals & store locator.`,
    }
  }
}

export default function Home() {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is on the Papa John's menu with prices in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Papa John's menu in 2026 includes Classic Pizzas starting from $10.99, Super Loaded Specialty Pizzas from $14.99, Papadias from $8.99, Sides & Dips from $4.99, and Desserts from $5.99. All pizzas are available in Small (10\"), Medium (12\"), Large (14\"), and Extra Large (16\") sizes. You can view the complete Papa John's menu with prices at papajohns-menus.us/menus-prices."
          }
        },
        {
          "@type": "Question",
          "name": "What are Papa John's hours of operation near me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most Papa John's locations in the USA are open Monday through Thursday from 10:00 AM to 11:00 PM, and Friday through Saturday from 10:00 AM to 1:00 AM. Sunday hours are typically 10:00 AM to 11:00 PM. Hours vary by location — use the Papa John's store locator to find exact hours near you."
          }
        },
        {
          "@type": "Question",
          "name": "How do I find a Papa John's near me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can find the nearest Papa John's location using the Papa John's store locator at papajohns-menus.us/store-locator. Enter your ZIP code or city name to instantly see nearby locations with addresses, phone numbers, hours, and directions. Papa John's currently operates over 3,200 locations across the United States."
          }
        },
        {
          "@type": "Question",
          "name": "What are the latest Papa John's promo codes and deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Papa John's regularly offers promo codes including 25% off your entire order, BOGO (Buy One Get One) pizza deals, and $10 off orders over $30. The best way to get active promo codes is to join Papa Rewards, check the Papa John's app, or visit papajohns-menus.us/coupons for verified deals updated daily."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Papa John's delivery fee in the USA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Papa John's delivery fee in the USA typically ranges from $3.99 to $5.99 depending on your location and order total. Papa John's offers free delivery on orders over $40 at most locations. Note that the delivery fee does not go to the driver — tipping separately is recommended."
          }
        },
        {
          "@type": "Question",
          "name": "How does Papa Rewards work at Papa John's?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Papa Rewards is Papa John's free loyalty program. You earn Papa Dough points on every order, which can be redeemed toward free food and pizza. Members also receive a birthday reward (usually a free dessert), exclusive promo codes, and early access to new menu items. Sign up for free at papajohns-menus.us/papa-johns-rewards."
          }
        },
        {
          "@type": "Question",
          "name": "Does Papa John's offer a gluten-free pizza crust?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Papa John's offers a gluten-free Ancient Grains crust made with sorghum, teff, amaranth, and quinoa for an additional $2 charge. However, it is prepared in the same kitchen as regular pizzas, so it is not recommended for individuals with Celiac Disease due to potential cross-contamination. It is suitable for those with gluten sensitivity."
          }
        },
        {
          "@type": "Question",
          "name": "What crust options are available at Papa John's?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Papa John's offers five crust options in 2026: Original Crust (classic hand-tossed style), Thin Crust (light and crispy), New York Style Crust (large foldable slices), Epic Stuffed Crust (mozzarella cheese baked into the edge, +$3.00), and Garlic Stuffed Crust (garlic herb butter and cheese baked into the edge, +$3.50). Gluten-Free Ancient Grains Crust is also available for an extra charge."
          }
        },
        {
          "@type": "Question",
          "name": "What are Papa John's most popular pizzas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Papa John's most popular pizzas in 2026 are The Works (pepperoni, sausage, Canadian bacon, onions, green peppers, mushrooms), The Meats (four premium meats), Pepperoni Pizza, BBQ Chicken Bacon, and the Fiery Buffalo Chicken. The Works is consistently the #1 best-seller across all US locations."
          }
        },
        {
          "@type": "Question",
          "name": "Does Papa John's have vegetarian or vegan pizza options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Papa John's offers several vegetarian pizzas including Garden Fresh Pizza (fresh green peppers, onions, mushrooms, spinach, Roma tomatoes), Fresh Spinach & Tomato Alfredo, and Tuscan Six Cheese Pizza. For vegan options, you can order any pizza without cheese and use the original dough and tomato sauce, which are vegan-friendly."
          }
        },
        {
          "@type": "Question",
          "name": "How do I track my Papa John's delivery order?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can track your Papa John's order in real-time using the Papa Track feature available on the Papa John's website and the Papa John's app (available on iOS and Android). Papa Track shows you every stage of your order — from dough preparation to out for delivery — so you always know exactly when your pizza will arrive."
          }
        },
        {
          "@type": "Question",
          "name": "What payment methods does Papa John's accept?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Papa John's in the USA accepts multiple payment methods including major credit and debit cards (Visa, Mastercard, American Express, Discover), Apple Pay, Google Pay, PayPal, Papa John's gift cards, and cash for carryout orders. Online and app orders support all digital payment options."
          }
        },
        {
          "@type": "Question",
          "name": "Is Papa John's open on holidays like Christmas and Thanksgiving?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most Papa John's locations are closed on Christmas Day and Thanksgiving Day. On Christmas Eve and New Year's Eve, many locations close earlier than usual. Hours vary significantly by location during holidays — use the Papa John's store locator or call your local branch to confirm holiday hours before ordering."
          }
        },
        {
          "@type": "Question",
          "name": "How many calories are in a Papa John's pizza slice?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Calories in a Papa John's pizza slice vary by size and toppings. A large Pepperoni pizza slice has approximately 300 calories, while a Cheese pizza slice has around 260 calories. Super Loaded Pizzas like The Meats range from 360–460 calories per slice. For full nutrition details, visit papajohns-menus.us/posts/papa-johns-nutrition-guide."
          }
        },
        {
          "@type": "Question",
          "name": "Can I order Papa John's pizza online or through an app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Papa John's offers online ordering through their official website and the Papa Johns Pizza app, available on both iOS (App Store) and Android (Google Play). The app lets you order delivery or carryout, track your order with Papa Track, earn Papa Rewards points, save favorite orders, and access exclusive app-only deals and promo codes."
          }
        }
      ]
    };

    return (
        <div className="w-full">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <HeroSection />

            {/* Complete Menu PDF Viewer */}
            <section className="py-12 md:py-24 bg-gray-50 w-full overflow-hidden">
                <div className="w-full max-w-[1400px] mx-auto px-4">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10 pt-4">
                        {/* Download PDF Button */}
                        <a
                            href="/papajohns_openbook.pdf"
                            download
                            className="mb-8 inline-flex items-center gap-2 bg-[#CCEE18] text-[#1A3D17] font-black uppercase tracking-[0.1em] text-[10px] md:text-sm py-2.5 px-6 rounded-full shadow-lg transition-all hover:scale-105"
                        >
                            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                            <span>DOWNLOAD PDF</span>
                        </a>

                        {/* Updated Heading */}
                        <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none px-2" style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif', color: '#cc0000' }}>
                            OUR FULL <span className="text-[#1A3D17]">MENU PDF</span>
                        </h2>

                        {/* SEO Optimized Paragraph */}
                        <p className="text-gray-700 text-sm md:text-lg font-medium leading-relaxed px-4 max-w-2xl">
                            Looking for the ultimate <Link href="/menus-prices" className="text-[#cc0000] hover:underline font-bold">Papa John's Full Menu</Link>? View or download the complete <strong>Papa John's Menu PDF</strong> to explore our <Link href="/menus-prices/classic-pizzas" className="text-[#cc0000] hover:underline font-bold">Classic Pizzas</Link> and sweets.
                        </p>
                    </div>

                    <div className="w-full bg-white rounded-3xl shadow-2xl p-2 md:p-8 border border-gray-100">
                        {/* Responsive PDF Viewer Container */}
                        <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-[900px] rounded-2xl overflow-hidden bg-gray-200">
                            <iframe
                                src="/papajohns_openbook.pdf#view=FitW"
                                className="absolute inset-0 w-full h-full border-none"
                                title="Papa Johns Complete Menu PDF"
                                loading="lazy"
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-12 pb-8 px-4">
                            <a href="/papajohns_openbook.pdf" download className="w-full sm:w-auto text-center bg-[#cc0000] hover:bg-red-800 text-white font-black py-4 px-10 rounded-2xl transition-all shadow-xl uppercase tracking-widest text-[11px]" >
                                Download Menu PDF
                            </a>
                            <a href="/papajohns_openbook.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center bg-white hover:bg-gray-50 text-[#cc0000] font-black py-4 px-10 rounded-2xl transition-all shadow-md border-2 border-[#cc0000] uppercase tracking-widest text-[11px]">
                                Open Full View
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Papa Rewards Booklet Viewer */}
            <section className="py-12 md:py-24 bg-white w-full overflow-hidden">
                <div className="w-full max-w-[1400px] mx-auto px-4">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10 pt-4">
                        <a
                            href="/papa_rewards_openbook.pdf"
                            download
                            className="mb-8 inline-flex items-center gap-2 bg-[#1A3D17] text-[#CCEE18] font-black uppercase tracking-[0.1em] text-[10px] md:text-sm py-2.5 px-6 rounded-full shadow-lg transition-all hover:scale-105"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#CCEE18] animate-pulse"></span>
                            <span>PAPAS BOOKLET</span>
                        </a>

                        <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none px-2" style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif', color: '#1A3D17' }}>
                            PAPA <span className="text-[#cc0000]">REWARDS</span>
                        </h2>

                        <p className="text-gray-700 text-sm md:text-lg font-medium leading-relaxed px-4 max-w-2xl">
                            Unlock exclusive savings and earn free food across our entire menu with the <Link href="/papa-johns-rewards" className="text-[#cc0000] hover:underline font-bold">Papa Rewards program</Link>.
                        </p>
                    </div>

                    <div className="w-full bg-[#fcfaf8] rounded-3xl shadow-2xl p-2 md:p-8 border border-gray-100">
                        <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-[900px] rounded-2xl overflow-hidden bg-gray-200">
                            <iframe
                                src="/papa_rewards_openbook.pdf#view=FitW"
                                className="absolute inset-0 w-full h-full border-none"
                                title="Papa Rewards Booklet PDF"
                                loading="lazy"
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-12 pb-8 px-4">
                            <Link href="/papa-johns-rewards" className="w-full sm:w-auto text-center bg-[#1A3D17] hover:bg-[#112a0f] text-white font-black py-4 px-10 rounded-2xl transition-all shadow-xl uppercase tracking-widest text-[11px]">
                                Join Now
                            </Link>
                            <a href="/papa_rewards_openbook.pdf" download className="w-full sm:w-auto text-center bg-[#CCEE18] hover:bg-[#b8d615] text-[#1A3D17] font-black py-4 px-10 rounded-2xl transition-all shadow-xl uppercase tracking-widest text-[11px]">
                                Download PDF
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Papa Johns Guides & Blogs Section */}
            <section className="py-16 bg-[#fcfaf8] w-full">
                <div className="w-full max-w-[1280px] mx-auto px-4">
                    <div className="text-center mb-12 pt-10">
                        <span className="inline-block bg-[#cc0000] text-white font-black uppercase tracking-[0.2em] text-[10px] px-6 py-2 rounded-full mb-4 shadow-md">
                            Discover More
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-[#1A3D17] uppercase tracking-tighter mb-4" style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}>
                            Papa John's <span className="text-[#CCEE18]">Guides & News</span>
                        </h2>
                        <p className="text-gray-500 font-bold max-w-2xl mx-auto">
                            Explore our complete menu breakdowns, <Link href="/posts/best-pizza-delivery-near-me" className="text-[#cc0000] hover:underline">best pizza delivery near me</Link> guides, <Link href="/posts/papa-johns-menu-prices-guide" className="text-[#cc0000] hover:underline">Papa Johns menu with prices 2026</Link>, and the full <Link href="/posts/papa-johns-nutrition-guide" className="text-[#cc0000] hover:underline">Papa Johns nutrition guide</Link>. Check out our <Link href="/menus-prices" className="text-[#cc0000] hover:underline">Papa Johns full menu</Link> and find <Link href="/coupons" className="text-[#cc0000] hover:underline">Papa Johns promo codes 2026</Link>.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                        {posts.map((post) => (
                            <Link href={`/posts/${post.slug}`} key={post.id} className="bg-white rounded-[2rem] p-6 shadow-md hover:shadow-2xl hover:border-[#CCEE18] border-2 border-transparent transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCEE18] rounded-bl-full -mr-16 -mt-16 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                
                                <div className="aspect-[16/9] bg-gray-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden shadow-inner">
                                    <div className="absolute top-3 left-3 z-10 bg-[#cc0000] text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                                        {post.category}
                                    </div>
                                    <Image
                                        src={post.image}
                                        alt={post.imageAlt || post.title}
                                        fill
                                        loading="lazy"
                                        quality={75}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                
                                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <span>⏰ {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                    <span>•</span>
                                    <span>{post.author}</span>
                                </div>
                                
                                <h2 className="text-xl font-black text-[#1A3D17] uppercase leading-tight mb-4 group-hover:text-[#cc0000] transition-colors" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                    {post.title}
                                </h2>
                                
                                <p className="text-gray-500 text-sm font-medium mb-8 flex-1 leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>
                                
                                <div className="mt-auto border-t border-gray-100 pt-5 flex items-center justify-between text-[#1A3D17] text-xs font-black uppercase tracking-widest group-hover:text-[#cc0000] transition-colors">
                                    {(() => {
                                        switch(post.slug) {
                                            case 'best-pizza-delivery-near-me': return "Best Pizza Delivery Near Me — 2026 Guide";
                                            case 'papa-johns-menu-prices-guide': return "Papa Johns Menu with Prices 2026";
                                            case 'papa-johns-nutrition-guide': return "Papa Johns Nutrition Guide — Full Calories";
                                            case 'classic-pizzas': return "Papa Johns Classic Pizzas — Every Flavor Ranked";
                                            case 'super-loaded': return "Papa Johns Super Loaded Pizzas — All Flavors";
                                            case 'sides': return "Papa Johns Sides & Dips — Complete Guide";
                                            default: return "Read Full Guide";
                                        }
                                    })()}
                                    <span className="bg-[#CCEE18] text-[#1A3D17] p-2 rounded-full group-hover:bg-[#cc0000] group-hover:text-white transition-colors">
                                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Restaurant Hours Section */}
            <RestaurantHoursSection />

            {/* Papa Johns Coupon Section */}
            <CouponsSection />

            {/* ── SEO FAQ SECTION ── */}
            <section className="py-20 bg-white">
                <div className="max-w-[1000px] mx-auto px-4">
                    <div className="text-center mb-14">
                        <span className="inline-block bg-[#cc0000]/10 text-[#cc0000] font-black uppercase tracking-[0.3em] text-[10px] px-6 py-2 rounded-full mb-4">
                            Frequently Asked Questions
                        </span>
                        <h2
                            className="text-3xl md:text-5xl font-black text-[#1A3D17] uppercase tracking-tighter mb-4"
                            style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}
                        >
                            Papa John's <span className="text-[#cc0000]">FAQ</span>
                        </h2>
                        <p className="text-gray-500 font-bold max-w-xl mx-auto">
                            Everything you need to know about ordering, promo codes, locations, and more.
                        </p>
                    </div>
                    <div className="space-y-5">
                        {[
                            {
                                q: "What is on the Papa John's menu with prices in 2026?",
                                a: <>The Papa John's 2026 menu includes Classic Pizzas starting from $10.99, Super Loaded Specialty Pizzas from $14.99, Papadias from $8.99, Sides &amp; Dips from $4.99, and Desserts from $5.99. All pizzas are available in Small (10"), Medium (12"), Large (14"), and Extra Large (16"). <Link href="/menus-prices" className="text-[#cc0000] underline font-bold">View the complete Papa John's menu with prices &rarr;</Link></>,
                            },
                            {
                                q: "What desserts does Papa John's have?",
                                a: <>Papa John's offers fresh-baked desserts including the famous Chocolate Chip Cookie, Double Chocolate Chip Brownie, Cinnamon Pull Aparts, and Oreo Cookie Papa Bites. <Link href="/posts/papa-johns-desserts" className="text-[#cc0000] underline font-bold">View the full Papa John's Dessert Menu with Prices &rarr;</Link></>,
                            },
                            {
                                q: "What are Papa John's hours of operation near me?",
                                a: <>Most Papa John's locations in the USA are open:<br/><br/>Monday &ndash; Thursday: 10:00 AM &ndash; 11:00 PM<br/>Friday &ndash; Saturday: 10:00 AM &ndash; 1:00 AM<br/>Sunday: 10:00 AM &ndash; 11:00 PM<br/><br/>Hours vary by location. <Link href="/hours" className="text-[#cc0000] underline font-bold">Find exact hours for your nearest Papa John's &rarr;</Link></>,
                            },
                            {
                                q: "How do I find a Papa John's near me?",
                                a: <>Enter your ZIP code or city name in the <Link href="/store-locator" className="text-[#cc0000] underline font-bold">Papa John's Store Locator &rarr;</Link> to instantly find nearby locations with addresses, phone numbers, live hours, and driving directions. Papa John's currently operates over 3,200 locations across the United States.</>,
                            },
                            {
                                q: "What are the latest Papa John's promo codes and deals?",
                                a: <>Papa John's regularly offers promo codes including 25% off your entire order, BOGO pizza deals, and $10 off orders over $30. The best way to save is to join Papa Rewards, use the Papa John's app, or check our verified <Link href="/coupons" className="text-[#cc0000] underline font-bold">Papa John's coupons page &rarr;</Link> &mdash; updated daily for April 2026.</>,
                            },
                            {
                                q: "What is the Papa John's delivery fee in the USA?",
                                a: <>The delivery fee at Papa John's typically ranges from $3.99 to $5.99 depending on your location. Many locations offer free delivery on orders over $40. Note that the delivery fee is separate from the driver tip &mdash; tipping your driver directly is always recommended.</>,
                            },
                            {
                                q: "How does Papa Rewards work?",
                                a: <>Papa Rewards is Papa John's free loyalty program. Every dollar you spend earns Papa Dough points, which you can redeem toward free pizza, sides, and desserts. Rewards members also get a birthday reward (free dessert), exclusive promo codes, and early access to new menu items. <Link href="/papa-johns-rewards" className="text-[#cc0000] underline font-bold">Join Papa Rewards for free &rarr;</Link></>,
                            },
                            {
                                q: "Does Papa John's offer a gluten-free pizza crust?",
                                a: <>Yes. Papa John's offers an Ancient Grains Gluten-Free Crust made with sorghum, teff, amaranth, and quinoa for an extra $2.00 charge. Note: it is prepared in a shared kitchen and is not recommended for Celiac Disease &mdash; it is best suited for those with general gluten sensitivity.</>,
                            },
                            {
                                q: "What crust options does Papa John's offer?",
                                a: <>Papa John's has 5 crust options in 2026:<br/><br/>Original Crust &mdash; classic hand-tossed (included)<br/>Thin Crust &mdash; light and crispy (included)<br/>New York Style &mdash; large, foldable slices (included)<br/>Epic Stuffed Crust &mdash; mozzarella baked into the edge (+$3.00)<br/>Garlic Stuffed Crust &mdash; garlic herb butter + cheese in the crust (+$3.50)</>,
                            },
                            {
                                q: "What are Papa John's most popular pizzas in 2026?",
                                a: <>The top-selling Papa John's pizzas in 2026 are:<br/><br/>The Works &mdash; pepperoni, sausage, Canadian bacon, onions, green peppers, mushrooms<br/>The Meats &mdash; four premium proteins, extra cheese<br/>Pepperoni Pizza &mdash; the classic crowd favorite<br/>BBQ Chicken Bacon &mdash; smoky and bold with BBQ sauce base<br/>Fiery Buffalo Chicken &mdash; spicy buffalo sauce, grilled chicken, banana peppers<br/><br/><Link href="/posts/classic-pizzas" className="text-[#cc0000] underline font-bold">See all pizzas with prices and reviews &rarr;</Link></>,
                            },
                            {
                                q: "Does Papa John's have vegetarian or vegan options?",
                                a: <>Yes. Vegetarian options include Garden Fresh Pizza, Fresh Spinach &amp; Tomato Alfredo, and Tuscan Six Cheese Pizza. For vegan orders, request any pizza without cheese &mdash; the original dough and tomato sauce are vegan-friendly. Availability may vary by location.</>,
                            },
                            {
                                q: "How do I track my Papa John's delivery order?",
                                a: <>Use the Papa Track feature on the Papa John's website or app to follow your order in real-time &mdash; from dough preparation through baking, quality check, and out for delivery. The Papa John's app is available free on iOS and Android. <a href="https://www.papajohns.com/order/track" target="_blank" rel="noopener noreferrer" className="text-[#cc0000] underline font-bold">Download the Papa John's app &rarr;</a></>,
                            },
                            {
                                q: "What payment methods does Papa John's accept in the USA?",
                                a: <>Papa John's accepts Visa, Mastercard, American Express, Discover, Apple Pay, Google Pay, PayPal, Papa John's gift cards, and cash (for carryout orders). All digital payments are supported through the website and app.</>,
                            },
                            {
                                q: "Is Papa John's open on holidays?",
                                a: <>Papa John's is typically closed on Christmas Day and Thanksgiving Day. Hours are reduced on Christmas Eve and New Year's Eve. Hours vary by location &mdash; always <Link href="/hours" className="text-[#cc0000] underline font-bold">check your local store's hours &rarr;</Link> before ordering on a holiday.</>,
                            },
                            {
                                q: "How many calories are in a Papa John's pizza slice?",
                                a: <div className="mt-2 text-sm overflow-x-auto"><table className="w-full text-left border-collapse"><thead><tr className="bg-gray-100 text-[#1A3D17]"><th className="p-2 border">Pizza</th><th className="p-2 border">Calories Per Slice (Large)</th></tr></thead><tbody><tr><td className="p-2 border">Cheese Pizza</td><td className="p-2 border">~260 cal</td></tr><tr><td className="p-2 border">Pepperoni Pizza</td><td className="p-2 border">~300 cal</td></tr><tr><td className="p-2 border">The Works</td><td className="p-2 border">~360 cal</td></tr><tr><td className="p-2 border">The Meats</td><td className="p-2 border">~390 cal</td></tr><tr><td className="p-2 border">BBQ Chicken Bacon</td><td className="p-2 border">~310 cal</td></tr><tr><td className="p-2 border">Super Hawaiian</td><td className="p-2 border">~260 cal</td></tr></tbody></table><br/><Link href="/posts/papa-johns-nutrition-guide" className="text-[#cc0000] underline font-bold">View the full Papa John's Nutrition Guide &rarr;</Link></div>,
                            },
                            {
                                q: "Can I order Papa John's online or through an app?",
                                a: <>Yes. Order delivery or carryout online at papajohns.com or through the free Papa John's app (iOS &amp; Android). App features include Papa Track order tracking, saved favorites, Papa Rewards earning, and exclusive app-only promo codes not available anywhere else.</>,
                            }
                        ].map((faq, i) => (
                            <div
                                key={i}
                                className="bg-[#fcfaf8] hover:bg-[#1A3D17] group transition-colors duration-300 p-7 rounded-3xl shadow-sm border border-gray-100"
                            >
                                <div className="flex items-start gap-5">
                                    <div className="w-10 h-10 shrink-0 bg-[#CCEE18] text-[#1A3D17] rounded-full flex items-center justify-center font-black text-lg shadow-inner">
                                        ?
                                    </div>
                                    <div>
                                        <h3
                                            className="font-black text-gray-900 group-hover:text-white transition-colors mb-2 text-base leading-snug"
                                        >
                                            {faq.q}
                                        </h3>
                                        <div
                                            className="text-gray-500 group-hover:text-gray-300 transition-colors text-sm leading-relaxed font-medium [&_a]:text-[#cc0000] [&_a]:underline [&_a]:font-bold"
                                        >
                                            <p>{faq.a}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Papa Rewards CTA */}
            <section className="bg-red-700 text-white py-16">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-4xl font-bold mb-4">Papa Rewards®</h2>
                    <p className="text-lg mb-8">Earn Papa Dough® toward free pizza, sides, and more.</p>
                    <Link href="/papa-johns-rewards" className="bg-white text-red-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors inline-block text-lg">
                        Join Now
                    </Link>
                </div>
            </section>
        </div>
    );
}
