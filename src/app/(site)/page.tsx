import Image from "next/image";
import Link from "next/link";
import posts from "../data/posts.json";
import { ArrowRight, Calculator, MapPin, Percent, Search, ShieldCheck, Users } from "lucide-react";
import HeroSection from "../components/HeroSection";
import MenuGuideSection from "../components/MenuGuideSection";
import DynamicSections from "../components/DynamicSections";


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
    const primaryHomeGuide = {
        slug: "how-to-save-money-at-papa-johns",
        href: "/posts/how-to-save-money-at-papa-johns",
        title: "How to Save Money at Papa Johns (Without Hunting for Fake Codes)",
        excerpt: "Let's be honest - most online coupon lists are full of expired codes. Deals Researcher Marcus Webb shares the real, tested habits that cut your bill in half. Try our live savings calculator inside.",
        author: "Marcus Webb",
        updated: "Updated June 2026",
        image: "/how-to-save-money-at-papa-johns.png",
        imageAlt: "How to Save Money at Papa Johns",
        badge: "Featured Guide",
        tags: [
            { icon: Percent, label: "Coupons & Deals", tone: "lime" },
            { icon: Calculator, label: "Interactive Calculator", tone: "green" },
        ],
    };

    const featuredHomeGuides = [
        {
            slug: "best-papa-johns-pizzas-for-families",
            href: "/posts/best-papa-johns-pizzas-for-families",
            title: "Best Papa Johns Pizzas for Families (June 2026)",
            excerpt: "Sarah Jenkins shares what she would actually order for family pizza night, from The Works and build-your-own pies to stuffed crust and sides that stretch the meal.",
            author: "Sarah Jenkins",
            updated: "Updated June 2026",
            image: "/classic-pizzas.png",
            imageAlt: "Best Papa Johns Pizzas for Families",
            badge: "Family Guide",
            tags: [
                { icon: Users, label: "Family Orders", tone: "lime" },
                { icon: Calculator, label: "Meal Planning", tone: "green" },
            ],
        },
        {
            slug: "papa-johns-gluten-free-guide",
            href: "/posts/papa-johns-gluten-free-guide",
            title: "Papa Johns Gluten-Free Guide (June 2026)",
            excerpt: "Linda Torres explains the gluten-free crust, shared-kitchen cross-contact risk, celiac warning, safer ordering choices, and what to ask before ordering.",
            author: "Linda Torres",
            updated: "Updated June 2026",
            image: "/papa-johns-nutrition-guide-2026-calories-allergens.webp",
            imageAlt: "Papa Johns gluten-free guide with nutrition and allergen information",
            badge: "Dietary Guide",
            tags: [
                { icon: ShieldCheck, label: "Allergen Safety", tone: "lime" },
                { icon: Percent, label: "Nutrition Notes", tone: "green" },
            ],
        },
    ];

    const homepageGuideSections = [
        {
            ...primaryHomeGuide,
            eyebrow: "Save Before Checkout",
            heading: "Stop wasting time on fake promo-code lists",
            body: "Most people search for a Papa Johns coupon after the cart is already built. That is usually too late. This guide explains the habits that actually change the final total: comparing carryout with delivery, checking Papa Rewards, choosing bundle-friendly items, and avoiding separate side orders that add another fee.",
            bullets: [
                "Best for readers comparing carryout, delivery, rewards, and real checkout savings.",
                "Includes a savings calculator and plain-English deal strategy.",
                "Written as a practical ordering guide, not a recycled coupon-code page.",
            ],
        },
        {
            ...featuredHomeGuides[0],
            eyebrow: "Family Ordering",
            heading: "Build a family pizza order that avoids the usual arguments",
            body: "Family pizza night is rarely about one perfect pizza. Picky eaters, teenagers, adults who want flavor, and sides that stretch the meal all matter. This guide explains which Papa Johns pizzas work best for mixed tables and when adding sides is smarter than buying another full pizza.",
            bullets: [
                "Best for parents, larger households, movie nights, and group dinners.",
                "Covers safe picks, specialty pizzas, stuffed crust, and sides.",
                "Written from real family-order experience instead of generic rankings.",
            ],
        },
        {
            ...featuredHomeGuides[1],
            eyebrow: "Diet & Allergens",
            heading: "Understand the gluten-free crust before you order it",
            body: "Papa Johns has a gluten-free crust, but the important question is whether it fits your health needs. This guide explains the shared-kitchen cross-contact issue, who the crust may work for, who should avoid it, and what to ask your local store before ordering.",
            bullets: [
                "Best for gluten-sensitive readers and families ordering for dietary needs.",
                "Clearly separates preference-based gluten reduction from medical avoidance.",
                "Includes a safety-first reminder to verify official allergen information.",
            ],
        },
    ];

    const secondaryHomePosts = posts
        .filter((post) => ![
            'how-to-save-money-at-papa-johns',
            'best-papa-johns-pizzas-for-families',
            'papa-johns-gluten-free-guide',
        ].includes(post.slug))
        .slice(0, 8);

    const secondaryHomePostSections = [
        {
            eyebrow: "More Helpful Reads",
            title: "Comparisons & ordering decisions",
            description: "Use these guides when you are choosing between chains, comparing menu categories, or deciding what is actually worth ordering.",
            posts: secondaryHomePosts.slice(0, 4),
        },
        {
            eyebrow: "Menu Details",
            title: "Prices, deals & item guides",
            description: "These articles go deeper into prices, promos, calories, and specific Papa Johns menu items so readers can compare before checkout.",
            posts: secondaryHomePosts.slice(4, 8),
        },
    ];

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
            "text": "Papa John's may offer promo codes, BOGO-style deals, carryout specials, or minimum-spend discounts depending on your location and current checkout terms. The best way to save is to join Papa Rewards, check the Papa John's app, and compare current offers before paying."
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

            <section className="bg-white border-b border-gray-100 py-12 md:py-16">
                <div className="max-w-[1100px] mx-auto px-4 text-center">
                    <span className="inline-block bg-[#CCEE18] text-[#1A3D17] font-black uppercase tracking-[0.28em] text-[10px] px-5 py-2 rounded-full mb-5">
                        Full Price Guide
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-[#1A3D17] uppercase tracking-tight leading-none" style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}>
                        Papa Johns Complete Menu
                        <br />
                        <span className="text-[#cc0000]">with Prices 2026</span>
                    </h2>
                    <p className="mt-4 text-[11px] md:text-[13px] font-black uppercase tracking-[0.18em] text-[#cc0000]">
                        Last Updated: April 2026 | All prices in USD | papajohns-menus.us
                    </p>
                </div>
            </section>
            <MenuGuideSection />

            {/* Papa Johns Guides & Blogs Section */}
            <section className="pt-24 pb-16 bg-[#fcfaf8] w-full">
                <div className="w-full max-w-[1280px] mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="inline-block bg-[#cc0000] text-white font-black uppercase tracking-[0.2em] text-[10px] px-6 py-2 rounded-full mb-4 shadow-md">
                            Discover More
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A3D17] uppercase tracking-tight mb-4 leading-[0.95]" style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}>
                            Start With Our <span className="text-[#cc0000]">Most Helpful Guides</span>
                        </h2>
                        <p className="text-gray-600 font-bold max-w-3xl mx-auto leading-relaxed">
                            Pick one of these three practical guides first: saving money, feeding a family, or checking gluten-free safety before you order.
                        </p>
                    </div>

                    <div className="mt-12 mb-16 space-y-8">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-gray-200 pb-6">
                            <div>
                                <span className="inline-block bg-[#1A3D17] text-[#CCEE18] text-[10px] font-black uppercase tracking-[0.25em] px-4 py-2 rounded-full">
                                    Reader Guides
                                </span>
                                <h3 className="mt-4 text-2xl md:text-4xl font-black uppercase tracking-tight text-[#1A3D17]" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                    Helpful guides for better orders
                                </h3>
                            </div>
                            <p className="max-w-xl text-sm md:text-base font-bold leading-relaxed text-gray-500 md:text-right">
                                These sections answer real ordering questions before readers leave for checkout. Each one links to a deeper guide with more detail.
                            </p>
                        </div>

                        {homepageGuideSections.map((guide, index) => {
                            const isReversed = index % 2 === 1;

                            return (
                                <section
                                    key={guide.slug}
                                    className="bg-white border border-gray-200 rounded-[1.75rem] overflow-hidden shadow-sm"
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-12">
                                        <div className={`lg:col-span-7 p-6 md:p-10 flex flex-col justify-center ${isReversed ? "lg:order-2" : ""}`}>
                                            <div className="flex flex-wrap items-center gap-3">
                                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#cc0000] text-white text-sm font-black">
                                                    0{index + 1}
                                                </span>
                                                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#cc0000]">
                                                    {guide.eyebrow}
                                                </span>
                                            </div>

                                            <h3 className="mt-3 text-2xl md:text-4xl font-black uppercase tracking-tight text-[#1A3D17] leading-tight" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                                {guide.heading}
                                            </h3>
                                            <p className="mt-4 max-w-3xl text-gray-600 font-bold leading-relaxed">
                                                {guide.body}
                                            </p>

                                            <div className="mt-6 grid gap-3 md:grid-cols-3">
                                                {guide.bullets.map((item) => (
                                                    <div key={item} className="rounded-2xl bg-[#fcfaf8] border border-gray-100 p-4 text-sm font-bold text-gray-600 leading-relaxed">
                                                        <span className="mb-3 h-6 w-6 shrink-0 rounded-full bg-[#CCEE18] text-[#1A3D17] flex items-center justify-center text-[10px] font-black">✓</span>
                                                        <span>{item}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-gray-100 pt-5">
                                                <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">
                                                    By {guide.author} • {guide.updated}
                                                </span>
                                                <Link
                                                    href={guide.href}
                                                    className="inline-flex w-fit items-center justify-center gap-2 bg-[#1A3D17] hover:bg-[#cc0000] text-white font-black py-3 px-6 rounded-full transition-colors uppercase tracking-wider text-[10px] shadow"
                                                >
                                                    Read Full Guide <ArrowRight size={12} />
                                                </Link>
                                            </div>
                                        </div>

                                        <div className={`lg:col-span-5 bg-[#fcfaf8] p-5 md:p-7 flex items-center ${isReversed ? "lg:order-1" : ""}`}>
                                            <div className="w-full">
                                                <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-gray-100 shadow-sm">
                                                    <Image
                                                        src={guide.image}
                                                        alt={guide.imageAlt}
                                                        fill
                                                        sizes="(max-width: 1024px) 100vw, 35vw"
                                                        className="object-cover"
                                                    />
                                                    <div className="absolute left-4 top-4 bg-white/95 text-[#cc0000] text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow">
                                                        {guide.badge}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            );
                        })}
                    </div>

                    <div className="mb-14 rounded-[1.75rem] bg-white border border-gray-200 p-6 md:p-10 shadow-sm">
                        <span className="inline-block bg-[#cc0000] text-white font-black uppercase tracking-[0.2em] text-[10px] px-5 py-2 rounded-full mb-5">
                            Why These Guides Exist
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-[#1A3D17] uppercase tracking-tight mb-5 leading-tight" style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}>
                            Beyond the Menu: <span className="text-[#cc0000]">Guides, Comparisons &amp; Money-Saving Tips</span>
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-gray-700 font-bold leading-relaxed">
                            <p>
                                Anyone can list prices and call it a menu page. We wanted to go further. Our team has spent hours testing carryout deals against delivery orders, comparing Papa Johns side-by-side with other major pizza chains, digging into the{" "}
                                <Link href="/papa-johns-rewards" className="text-[#cc0000] hover:underline">
                                    Papa Rewards
                                </Link>{" "}
                                program to see if it's actually worth signing up for, and breaking down the{" "}
                                <Link href="/posts/papa-johns-nutrition-guide" className="text-[#cc0000] hover:underline">
                                    nutrition info
                                </Link>{" "}
                                so you know exactly what you're eating before you order.
                            </p>
                            <p>
                                These guides are written by real people on our team — Marcus handles deals and pricing breakdowns, Sarah covers comparisons and family-focused guides, and Linda takes care of nutrition and dietary information. Every article below is based on public menu research, official-source checks where available, checkout guidance, and the questions readers actually ask us.
                            </p>
                            <p>
                                Whether you're trying to stretch a tight budget, feeding a hungry family, managing dietary needs, or just curious how Papa Johns stacks up against the competition — there's a guide below for you.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6 mb-10">
                        {secondaryHomePostSections.map((section) => (
                            <div key={section.title} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {section.posts.map((post) => (
                                    <Link href={post.slug === 'best-pizza-delivery-near-me' ? `/${post.slug}` : `/posts/${post.slug}`} key={post.id} className="bg-white rounded-[1.35rem] border border-gray-100 shadow-sm hover:-translate-y-2 hover:border-[#CCEE18] hover:shadow-2xl transition-all duration-300 group overflow-hidden flex flex-col min-h-[455px]">
                                        <div className="relative aspect-[16/9] w-full bg-gray-100 overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.imageAlt || post.title}
                                                fill
                                                loading="lazy"
                                                quality={75}
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <span className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-white shadow-sm">
                                                {post.category}
                                            </span>
                                        </div>

                                        <div className="p-5 flex flex-col flex-1">
                                            <div className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-3 flex flex-wrap items-center gap-2">
                                                <span>{post.author}</span>
                                                <span>•</span>
                                                <span>Guide</span>
                                            </div>

                                            <h4 className="text-lg font-black text-[#1A3D17] uppercase leading-tight mb-3 group-hover:text-[#cc0000] transition-colors line-clamp-3" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                                {post.title}
                                            </h4>

                                            <p className="text-gray-600 text-sm font-bold leading-relaxed line-clamp-3">
                                                {post.excerpt}
                                            </p>

                                            <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between gap-4">
                                                <span className="text-[#cc0000] text-xl font-black tracking-tight">
                                                    2026
                                                </span>
                                                <span className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-center text-[#1A3D17] text-[10px] font-black uppercase tracking-widest transition-all duration-300 group-hover:bg-[#1A3D17] group-hover:text-white group-hover:shadow-lg">
                                                    View Guide
                                                    <ArrowRight size={13} />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Papa Johns Near You — Locations Section for Indexing */}
            <section className="py-14 bg-white border-y border-gray-100">
                <div className="max-w-[1180px] mx-auto px-4">
                    <div className="rounded-[1.5rem] border border-gray-200 bg-[#fcfaf8] p-5 md:p-8 shadow-sm">
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-5 lg:gap-8 items-center">
                            <div>
                                <span className="inline-flex items-center gap-2 rounded-full bg-[#CCEE18] text-[#1A3D17] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em]">
                                    <MapPin size={13} /> Local Store Guide
                                </span>
                                <h2 className="mt-4 text-3xl md:text-4xl font-black text-[#1A3D17] uppercase tracking-tight leading-tight" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                    Papa Johns Near You
                                </h2>
                                <p className="mt-2 max-w-2xl text-sm md:text-base font-bold text-gray-600 leading-relaxed">
                                    Pick a city to view local Papa Johns menu prices, delivery notes, carryout details, and nearby ordering tips.
                                </p>
                            </div>

                            <Link href="/store-locator" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#1A3D17] px-6 py-4 text-white text-[11px] font-black uppercase tracking-widest hover:bg-[#cc0000] transition-colors">
                                <Search size={16} />
                                Search All Locations
                                <ArrowRight size={15} />
                            </Link>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-gray-200 py-3 text-[10px] font-black uppercase tracking-widest text-gray-500">
                            <span><strong className="text-[#cc0000] text-sm">35+</strong> city guides</span>
                            <span><strong className="text-[#1A3D17] text-sm">3.2k</strong> US stores</span>
                            <span>Menu & prices by city</span>
                        </div>

                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                            {[
                                { name: 'New York, NY', slug: 'new-york-ny' },
                                { name: 'Los Angeles, CA', slug: 'los-angeles-ca' },
                                { name: 'Chicago, IL', slug: 'chicago-il' },
                                { name: 'Houston, TX', slug: 'houston-tx' },
                                { name: 'Phoenix, AZ', slug: 'phoenix-az' },
                                { name: 'Philadelphia, PA', slug: 'philadelphia-pa' },
                                { name: 'San Antonio, TX', slug: 'san-antonio-tx' },
                                { name: 'San Diego, CA', slug: 'san-diego-ca' },
                                { name: 'Dallas, TX', slug: 'dallas-tx' },
                                { name: 'Austin, TX', slug: 'austin-tx' },
                                { name: 'Miami, FL', slug: 'miami-fl' },
                                { name: 'Seattle, WA', slug: 'seattle-wa' },
                            ].map((loc) => (
                                <Link
                                    key={loc.slug}
                                    href={`/locations/${loc.slug}`}
                                    className="group flex min-h-12 items-center justify-between gap-3 rounded-full border border-gray-200 bg-white px-4 py-3 text-[#1A3D17] hover:border-[#CCEE18] hover:bg-[#CCEE18] transition-colors"
                                >
                                    <span className="flex min-w-0 items-center gap-2">
                                        <MapPin size={14} className="shrink-0 text-[#cc0000] group-hover:text-[#1A3D17]" />
                                        <span className="truncate text-sm font-black">{loc.name}</span>
                                    </span>
                                    <ArrowRight size={14} className="shrink-0 text-gray-300 group-hover:text-[#1A3D17] group-hover:translate-x-0.5 transition-all" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Dynamic Sections (Menu, Hours, Coupons) */}
            <DynamicSections />

            {/* Why People Use This Site */}
            <section className="py-16 bg-[#fcfaf8] border-t border-gray-100">
                <div className="max-w-[1000px] mx-auto px-4">
                    <div className="text-center mb-10">
                        <span className="inline-block bg-[#1A3D17] text-[#CCEE18] font-black uppercase tracking-[0.2em] text-[10px] px-6 py-2 rounded-full mb-4 shadow-md">
                            Why This Site
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-[#1A3D17] uppercase tracking-tighter mb-4" style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}>
                            Why People <span className="text-[#cc0000]">Use This Site</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: "🍕", title: "Price Planning", desc: "We review public menu and checkout information so readers know what to verify before ordering." },
                            { icon: "💰", title: "Working Deals Only", desc: "No expired coupons. Our deals researcher Marcus Webb personally tests every promo code before it goes live." },
                            { icon: "🥗", title: "Real Nutrition Info", desc: "Calories, macros, and allergen details for every menu item — reviewed by our nutrition specialist Linda Torres." },
                            { icon: "📍", title: "Local Store Info", desc: "Find your nearest Papa Johns with hours, address, and current local deals in seconds." },
                            { icon: "⭐", title: "Honest Reviews", desc: "We compare Papa Johns to competitors, break down value, and tell you what is actually worth ordering." },
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="text-3xl mb-3">{item.icon}</div>
                                <h3 className="font-black text-[#1A3D17] text-lg mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
                                a: <>Papa John's may offer promo codes, BOGO-style deals, carryout specials, or minimum-spend discounts depending on your location and current checkout terms. The best way to save is to join Papa Rewards, use the Papa John's app, and compare notes on our <Link href="/coupons" className="text-[#cc0000] underline font-bold">Papa John's coupons page &rarr;</Link> before paying.</>,
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
                                a: <div className="mt-2 text-sm">
                                    <div className="grid grid-cols-2 gap-2 bg-white/50 p-4 rounded-xl border border-gray-100 mb-4">
                                        <div className="font-bold">Cheese Pizza</div><div className="text-right">~260 cal</div>
                                        <div className="font-bold">Pepperoni Pizza</div><div className="text-right">~300 cal</div>
                                        <div className="font-bold">The Works</div><div className="text-right">~360 cal</div>
                                        <div className="font-bold">The Meats</div><div className="text-right">~390 cal</div>
                                        <div className="font-bold">BBQ Chicken Bacon</div><div className="text-right">~310 cal</div>
                                        <div className="font-bold">Super Hawaiian</div><div className="text-right">~260 cal</div>
                                    </div>
                                    <Link href="/posts/papa-johns-nutrition-guide" className="text-[#cc0000] underline font-bold">View the full Papa John's Nutrition Guide &rarr;</Link>
                                 </div>,
                            },
                            {
                                q: "Can I order Papa John's online or through an app?",
                                a: <>Yes. Order delivery or carryout online at papajohns.com or through the free Papa John's app (iOS &amp; Android). App features include Papa Track order tracking, saved favorites, Papa Rewards earning, and exclusive app-only promo codes not available anywhere else.</>,
                            }
                        ].slice(0, 8).map((faq, i) => (
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
