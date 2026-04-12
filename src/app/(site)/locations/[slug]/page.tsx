import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import locations from '../../../data/locations.json';
import CouponsSection from '../../../components/CouponsSection';

import { getTodayFormatted, getMonthYear } from '../../../../lib/utils/date';

type Props = {
    params: Promise<{ slug: string }>;
};

// Generate SEO metadata for each city — Dynamic Logic
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const location = locations.find((l) => l.slug === slug);
    if (!location) return { title: 'Location Not Found' };

    const month = getMonthYear(); // e.g. "April 2026"
    const date = getTodayFormatted(); // e.g. "April 6, 2026"

    if (slug === 'austin-tx') {
        return {
            title: "Papa Johns Austin TX 2026: Menu, Prices & All Locations",
            description: "Papa Johns Austin TX — full 2026 menu with prices, all 12 Austin locations, delivery areas, hours & exclusive Austin deals. Order online or find a store near you.",
            alternates: {
                canonical: `https://papajohns-menus.us/locations/${slug}`,
            },
        };
    }

    // Dynamic Title: Injecting current Month Year
    const dynamicTitle = `Papa John's ${location.city} Menu with Prices (${month}): Fast Delivery`;
    
    // Dynamic Description: Injecting Today's Date for freshness signal
    const dynamicDescription = `Check out the latest Papa John's menu prices in ${location.city}, ${location.state} for ${month}. Detailed pricing updated ${date}. Order delivery or carryout today!`;

    return {
        title: dynamicTitle,
        description: dynamicDescription,
        alternates: {
            canonical: `https://papajohns-menus.us/locations/${slug}`,
        },
    };
}

export const revalidate = 86400; // 24 hours

// Static regeneration for all locations
export async function generateStaticParams() {
    return locations.map((location) => ({
        slug: location.slug,
    }));
}

export default async function LocationPage({ params }: Props) {
    const { slug } = await params;
    const location = locations.find((l) => l.slug === slug);

    if (!location) notFound();

    const baseUrl = 'https://papajohns-menus.us';
    const month = getMonthYear();

    // ── AUSTIN CUSTOM CONTENT ──
    if (slug === 'austin-tx') {
        const austinFaqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How many Papa Johns locations are in Austin TX?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "There are 12+ Papa Johns locations across Austin, TX as of April 2026, covering Downtown, UT Campus, South Austin, North Austin, Northwest Austin, East Austin, and the Cedar Valley area."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the Papa Johns delivery area in Austin?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Papa Johns delivers across Austin and into neighboring areas including Cedar Park, Pflugerville, Manchaca, and Dripping Springs border areas."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Papa Johns Austin deliver to UT Campus?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. The MLK Jr. Boulevard location (411 W Martin Luther King Jr Blvd) delivers to most University of Texas campus buildings, dormitories, and West Campus apartments. Call (512) 474-6676 to confirm."
                    }
                }
            ]
        };

        return (
            <div className="bg-[#fcfaf8] min-h-screen font-sans pb-20">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(austinFaqSchema) }} />
                
                {/* ── HERO BANNER ── */}
                <div className="bg-[#1A3D17] border-b-8 border-[#cc0000] text-white py-16 md:py-24 text-center relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <span className="inline-block bg-[#CCEE18] text-[#1A3D17] font-black uppercase tracking-[0.4em] text-[10px] px-6 py-2.5 rounded-full mb-6 shadow-lg">
                            Local Austin Guide — Verified {month}
                        </span>
                        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                            Papa John's Austin TX — <span className="text-[#CCEE18]">Menu, Prices & Locations</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 font-medium max-w-4xl mx-auto leading-relaxed mb-8">
                            Looking for Papa John's in Austin, TX? You are in the right place. This page covers the complete <Link href="/menus-prices" className="text-[#CCEE18] underline font-black">Papa Johns menu with prices</Link> for Austin — including every pizza, side, dessert, and drink available in 2026 — plus all 12 Papa Johns locations across Austin with verified addresses, phone numbers, and hours.
                        </p>
                        
                        {/* ── STATS BAR ── */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-12">
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl">
                                <div className="text-[#CCEE18] text-3xl font-black mb-1">12+</div>
                                <div className="text-[10px] uppercase font-black tracking-widest text-white/60">Locations in Austin</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl text-[#cc0000]">
                                <div className="text-white text-3xl font-black mb-1">30–45 min</div>
                                <div className="text-[10px] uppercase font-black tracking-widest text-white/60">Avg Delivery Time</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl">
                                <div className="text-[#CCEE18] text-3xl font-black mb-1">$17.99</div>
                                <div className="text-[10px] uppercase font-black tracking-widest text-white/60">Large Pizza Start Price</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── INTRO CONTENT ── */}
                <section className="py-16 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="prose prose-lg text-gray-700 font-medium leading-relaxed">
                            <p>
                                Austin is one of Papa Johns' strongest Texas markets, with locations spread across every major neighborhood — from the MLK Jr. Boulevard store near UT to the Cedar Valley Village location off US Highway 290. Whether you are ordering delivery to Downtown Austin, UT Campus, South Congress, or the Domain, we have the fastest Papa Johns near you covered. Prices in Austin match the national 2026 standard, and most Austin locations offer both delivery and carryout seven days a week.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── LOCATIONS LIST ── */}
                <section className="py-20 bg-[#fcfaf8]">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <h2 className="text-3xl md:text-5xl font-black text-[#1A3D17] uppercase tracking-tighter mb-12 text-center">
                            All Austin <span className="text-[#cc0000]">Locations</span>
                        </h2>
                        
                        <div className="space-y-12">
                            {/* DT/UT */}
                            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100">
                                <h3 className="text-2xl font-black text-[#1A3D17] uppercase mb-6 flex items-center gap-3">
                                    <span className="bg-[#CCEE18] w-8 h-8 rounded-full flex items-center justify-center text-[12px]">1</span> 
                                    Downtown Austin / UT Campus Area
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <p className="font-bold text-[#1A3D17] text-lg leading-tight">411 W Martin Luther King Jr Blvd, Austin, TX 78701</p>
                                        <p className="text-[#cc0000] font-black">Phone: (512) 474-6676</p>
                                        <p className="text-sm text-gray-500 font-bold uppercase tracking-widest leading-relaxed">
                                            Hours: Mon–Thu 10AM–11PM | Fri–Sat 10AM–1AM | Sun 10AM–11PM
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 rounded-2xl p-6">
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Delivery Areas:</h4>
                                        <p className="text-sm font-bold text-[#1A3D17]">Downtown, UT Campus, Hyde Park, East Austin</p>
                                    </div>
                                </div>
                            </div>

                            {/* SOUTH AUSTIN */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: "South Austin / SoCo", addr: "2030 E. Oltorf St, Suite 114, Austin, TX 78741", delivery: "South Congress, Bouldin Creek, Oltorf, Riverside" },
                                    { title: "Brodie Lane", addr: "8106 Brodie Ln, Austin, TX 78745", delivery: "Brodie Lane, Oak Hill, Sunset Valley, Manchaca" },
                                    { title: "William Cannon", addr: "500 W William Cannon Dr, Suite 512, Austin, TX 78745", delivery: "William Cannon, Slaughter Lane, South Park Meadows" },
                                    { title: "Thaxton Rd", addr: "7930 Thaxton Rd, Suite 400, Austin, TX 78747", delivery: "Southeast Austin, Thaxton, Slaughter, Onion Creek" }
                                ].map((loc, i) => (
                                    <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 border-l-[6px] border-l-[#CCEE18]">
                                        <h4 className="font-black text-[#1A3D17] uppercase mb-4">{loc.title}</h4>
                                        <p className="text-sm font-bold text-gray-600 mb-4">{loc.addr}</p>
                                        <div className="text-[9px] font-black uppercase text-gray-400 tracking-widest mb-1">Serving:</div>
                                        <p className="text-xs font-bold text-[#1A3D17]">{loc.delivery}</p>
                                    </div>
                                ))}
                            </div>

                            {/* NORTH AUSTIN */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { title: "Burnet Rd", addr: "5343 Burnet Rd, Austin, TX 78756" },
                                    { title: "Balcones Woods", addr: "5114 Balcones Woods Dr, Suite 310, Austin, TX 78759" },
                                    { title: "Rutland Dr", addr: "1925 Rutland Dr, Suite F, Austin, TX 78758" }
                                ].map((loc, i) => (
                                    <div key={i} className="bg-[#1A3D17] text-white rounded-3xl p-8 shadow-xl">
                                        <h4 className="font-black uppercase mb-4 text-[#CCEE18]">{loc.title}</h4>
                                        <p className="text-xs font-bold opacity-80 leading-relaxed">{loc.addr}</p>
                                        <div className="mt-6 pt-6 border-t border-white/10 text-[9px] font-black uppercase tracking-[0.2em]">Carryout & Delivery</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── MENU & PRICES ── */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-black text-[#1A3D17] uppercase mb-4 tracking-tighter">Austin Menu & <span className="text-[#cc0000]">Prices</span></h2>
                            <p className="text-gray-500 font-bold max-w-2xl mx-auto uppercase tracking-widest text-xs leading-loose">
                                Serving the full 2026 national menu across all 12 locations
                            </p>
                        </div>
                        
                        <div className="overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-sm mb-12">
                            <table className="w-full text-left bg-white text-sm">
                                <thead className="bg-[#1A3D17] text-[#CCEE18]">
                                    <tr className="uppercase font-black tracking-widest text-[10px]">
                                        <th className="p-6">Most Ordered Pizzas</th>
                                        <th className="p-6">Small</th>
                                        <th className="p-6">Medium</th>
                                        <th className="p-6">Large</th>
                                        <th className="p-6">XL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-50"><td className="p-6 font-bold text-[#1A3D17]">Pepperoni Pizza</td><td className="p-6 font-bold text-gray-500">$11.49</td><td className="p-6 font-bold text-gray-500">$14.49</td><td className="p-6 font-black text-[#cc0000]">$17.99</td><td className="p-6 font-bold text-gray-500">$20.99</td></tr>
                                    <tr className="border-b border-gray-50 bg-[#fcfaf8]"><td className="p-6 font-bold text-[#1A3D17]">Cheese Pizza</td><td className="p-6 font-bold text-gray-500">$11.49</td><td className="p-6 font-bold text-gray-500">$14.49</td><td className="p-6 font-black text-[#cc0000]">$15.99</td><td className="p-6 font-bold text-gray-500">$18.99</td></tr>
                                    <tr className="border-b border-gray-50"><td className="p-6 font-bold text-[#1A3D17]">The Works™</td><td className="p-6 font-bold text-gray-500">$14.49</td><td className="p-6 font-bold text-gray-500">$17.49</td><td className="p-6 font-black text-[#cc0000]">$20.99</td><td className="p-6 font-bold text-gray-500">$23.99</td></tr>
                                    <tr className="bg-[#fcfaf8]"><td className="p-6 font-bold text-[#1A3D17]">BBQ Chicken Bacon</td><td className="p-6 font-bold text-gray-500">$14.49</td><td className="p-6 font-bold text-gray-500">$17.49</td><td className="p-6 font-black text-[#cc0000]">$20.99</td><td className="p-6 font-bold text-gray-500">$23.99</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-center italic text-gray-400 text-xs">For full menu options, see our <Link href="/menus-prices" className="text-[#cc0000] underline font-bold">Papa Johns Menu with Prices</Link> guide.</p>
                    </div>
                </section>

                {/* ── AUSTIN SPECIFIC TIPS ── */}
                <section className="py-24 bg-gray-50 overflow-hidden">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="bg-white rounded-[3rem] p-12 border border-blue-50 shadow-sm relative">
                                <span className="absolute -top-6 -left-6 bg-[#CCEE18] text-[#1A3D17] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl shadow-xl">🤘</span>
                                <h3 className="text-3xl font-black text-[#1A3D17] uppercase mb-8">Ordering at UT Austin</h3>
                                <div className="space-y-6 text-gray-600 font-medium">
                                    <p>The MLK Jr. Boulevard location is the go-to for <span className="font-bold text-[#1A3D17]">University of Texas</span> students. Pro tip: For Longhorns football Saturdays, order at least 60 minutes in advance!</p>
                                    <p className="bg-[#fcfaf8] p-6 rounded-2xl border border-gray-100 text-sm"><strong>Student Discount:</strong> Papa Johns offers a tax exemption for verified UT student event orders of 5+ pizzas. Call <strong>(512) 474-6676</strong> to apply.</p>
                                </div>
                            </div>
                            <div className="space-y-12">
                                <h3 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tighter">Neighborhood Guides</h3>
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="flex gap-6 items-start">
                                        <div className="bg-[#1A3D17] text-[#CCEE18] p-3 rounded-2xl font-black">DT</div>
                                        <div><h4 className="font-black text-[#1A3D17] uppercase mb-2">Downtown Austin</h4><p className="text-sm text-gray-500 font-medium">30-40 min delivery times during evening peak. Covers 6th St & Rainey St.</p></div>
                                    </div>
                                    <div className="flex gap-6 items-start border-t border-gray-200 pt-6">
                                        <div className="bg-[#cc0000] text-white p-3 rounded-2xl font-black">NE</div>
                                        <div><h4 className="font-black text-[#1A3D17] uppercase mb-2">Domain / Tech Ridge</h4><p className="text-sm text-gray-500 font-medium">Fastest routes to Apple Campus & Domain shopping area.</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── DEAL SECTION ── */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="bg-[#CCEE18] rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden">
                            <h2 className="text-4xl md:text-6xl font-black text-[#1A3D17] uppercase tracking-tighter mb-8 relative z-10">Austin Exclusive <span className="text-[#cc0000]">Deals</span></h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                                <div className="bg-white rounded-3xl p-8 shadow-xl">
                                    <h4 className="font-black text-[#cc0000] text-2xl mb-2">Papa Pairings</h4>
                                    <p className="text-[#1A3D17] font-bold">Any 2+ items for $6.99 each. Perfect for late-night Austin cravings.</p>
                                </div>
                                <div className="bg-[#1A3D17] rounded-3xl p-8 shadow-xl text-white">
                                    <h4 className="font-black text-[#CCEE18] text-2xl mb-2">Papa Rewards</h4>
                                    <p className="font-bold opacity-80">Earn Papa Dough toward free pizza. <Link href="/papa-johns-rewards" className="underline">Join Free</Link></p>
                                </div>
                            </div>
                            <p className="mt-12 font-black text-[#1A3D17] uppercase tracking-widest text-[10px]">Verify current codes at the <Link href="/coupons" className="underline text-[#cc0000]">Papa Johns Coupons Page</Link></p>
                        </div>
                    </div>
                </section>

                {/* ── FEATURED GUIDES ── */}
                <section className="py-24 bg-[#1A3D17] text-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-black uppercase text-center mb-16 tracking-tighter">Popular Guides for <span className="text-[#CCEE18]">Austin Customers</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "Pepperoni Pizza Guide", link: "/posts/papa-johns-pepperoni-pizza", desc: "Most ordered in Austin" },
                                { title: "New Pan Pizza 2026", link: "/posts/papa-johns-pan-pizza", desc: "Now at all Austin stores" },
                                { title: "The Works Explained", link: "/posts/papa-johns-the-works-pizza", desc: "Austin's second favorite" },
                                { title: "Garlic Knots Guide", link: "/posts/papa-johns-garlic-knots", desc: "Top-ordered side" },
                                { title: "BBQ Chicken Bacon", link: "/posts/papa-johns-bbq-chicken-bacon-pizza", desc: "For BBQ lovers" },
                                { title: "Nutrition Guide 2026", link: "/posts/papa-johns-nutrition-guide", desc: "Health-conscious stats" }
                            ].map((guide, i) => (
                                <Link key={i} href={guide.link} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-[#CCEE18] hover:text-[#1A3D17] transition-all group">
                                    <div className="text-[9px] font-black uppercase tracking-widest opacity-60 mb-2 group-hover:text-[#1A3D17]">{guide.desc}</div>
                                    <h4 className="text-lg font-black uppercase">{guide.title}</h4>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase mb-12 text-center tracking-tighter">Frequently Asked <span className="text-[#cc0000]">Questions</span></h2>
                        <div className="space-y-6">
                            {[
                                { q: "How many Papa Johns locations are in Austin TX?", a: "There are 12+ Papa Johns locations across Austin, TX as of April 2026, covering Downtown, UT Campus, South Austin, North Austin, Northwest Austin, East Austin, and the Cedar Valley area." },
                                { q: "What time does Papa Johns close in Austin TX?", a: "Most Austin locations close at 11:00 PM Sunday–Thursday, and at 1:00 AM on Fridays and Saturdays." },
                                { q: "Does Papa Johns Austin deliver to UT Campus?", a: "Yes. The MLK Jr. Boulevard location delivers to most UT campus buildings and West Campus apartments. Call (512) 474-6676 to confirm." }
                            ].map((faq, i) => (
                                <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                    <h4 className="font-black text-[#1A3D17] uppercase mb-2 text-sm">Q: {faq.q}</h4>
                                    <p className="text-gray-600 text-sm font-medium leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    // ── GENERIC TEMPLATE (FOR OTHER CITIES) ──
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": `Papa John's ${location.city}`,
        "image": `${baseUrl}/hero-background.jpeg`,
        "url": `${baseUrl}/locations/${slug}`,
        "telephone": location.phone,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": location.address,
          "addressLocality": location.city,
          "addressRegion": location.state,
          "postalCode": location.address.split(', ').pop(),
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 38.2527,
          "longitude": -85.7585
        },
        "servesCuisine": "Pizza, Italian-American",
        "priceRange": "$$",
        "openingHours": "Mo-Su 11:00-00:00"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `Does Papa John's deliver in ${location.city}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes, Papa John's offers fast and fresh pizza delivery across **${location.city}, ${location.state}**. You can order online for home delivery or carryout.`
            }
          },
          {
            "@type": "Question",
            "name": `What are the Papa John's Hours in ${location.city}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `The Papa John's branch in ${location.city} is typically open from **${location.hours}**. Store hours may vary on holidays.`
            }
          }
        ]
    };

    return (
        <div className="bg-[#fcfaf8] min-h-screen font-sans pb-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            {/* ── LOCATION HERO ── */}
            <div className="bg-[#1A3D17] border-b-8 border-[#cc0000] text-white py-16 md:py-24 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CCEE18] rounded-full -mr-64 -mt-64 opacity-5 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#cc0000] rounded-full -ml-40 -mb-40 opacity-5 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <span className="inline-block bg-[#CCEE18] text-[#1A3D17] font-black uppercase tracking-[0.4em] text-[10px] px-6 py-2.5 rounded-full mb-6 shadow-lg">
                        Local Pizza Delivery — Online Order
                    </span>
                    <h1
                        className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4"
                        style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}
                    >
                        Papa John's <span className="text-[#CCEE18]">{location.city}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 font-bold max-w-3xl mx-auto leading-relaxed">
                        Looking for the best pizza in <strong>{location.city}, {location.state}</strong>? Discover the complete{' '}
                        <Link href="/menus-prices" className="text-[#CCEE18] underline hover:text-white transition-colors">
                            Papa John's menu with prices
                        </Link>{' '}
                        and exclusive local deals for 2026. Whether it's the <strong>Epic Stuffed Crust</strong> or our crowd-favorite{' '}
                        <Link href="/posts/classic-pizzas" className="text-[#CCEE18] underline hover:text-white transition-colors">
                            Classic Pizzas
                        </Link>
                        , we deliver fresh to your doorstep in <strong>{location.city}</strong>.
                    </p>
                </div>
            </div>

            {/* ── STORE INFO SECTION ── */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-[#fcfaf8] rounded-3xl p-8 border-2 border-gray-100 shadow-sm flex flex-wrap items-center justify-between gap-8">
                        <div className="flex-1">
                            <h2 className="text-xl font-black text-[#1A3D17] uppercase tracking-tight mb-4 flex items-center gap-2">
                                <span className="text-2xl">📍</span> Store Details: {location.city}
                            </h2>
                            <div className="space-y-3">
                                <p className="text-gray-600 font-bold flex items-center gap-3">
                                    <span className="text-[#cc0000]">Address:</span> {location.address}
                                </p>
                                <p className="text-gray-600 font-bold flex items-center gap-3">
                                    <span className="text-[#cc0000]">Phone:</span> {location.phone}
                                </p>
                                <p className="text-gray-600 font-bold flex items-center gap-3">
                                    <span className="text-[#cc0000]">Hours:</span> {location.hours}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <a
                                href={`tel:${location.phone.replace(/ /g, '')}`}
                                className="bg-[#cc0000] text-white font-black py-4 px-10 rounded-full text-center hover:bg-[#1A3D17] transition-all uppercase tracking-widest text-xs"
                            >
                                Call Store Now
                            </a>
                            <Link
                                href="https://www.papajohns.com/order/menu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#1A3D17] text-[#CCEE18] font-black py-4 px-10 rounded-full text-center hover:bg-black transition-all uppercase tracking-widest text-xs"
                            >
                                Order Online — USA
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SEO CONTENT BLOCK ── */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-[900px] mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-black text-[#1A3D17] uppercase tracking-tighter mb-8 leading-tight">
                            Fresh Ingredients. Better Pizza.<br />
                            <span className="text-[#cc0000]">Delivered in {location.city}</span>
                        </h2>
                        <div className="text-gray-600 text-lg leading-relaxed font-bold space-y-6">
                            <p>
                                At Papa John's <strong>{location.city}</strong>, we pride ourselves on our promise: <strong>Better Ingredients. Better Pizza.®</strong> Our original dough is never frozen and made with only six simple ingredients. From our 100% real mozzarella cheese to our signature pizza sauce made from vine-ripened tomatoes, you can taste the quality in every bite.
                            </p>
                            <p>
                                Whether you're ordering for a busy night in <strong>DTLA</strong>, a beach day in <strong>Miami</strong>, or a late dinner in <strong>Manhattan</strong>, our local stores provide the fastest delivery times. Check out our{' '}
                                <Link href="/papa-johns-rewards" className="text-[#cc0000] underline hover:text-[#1A3D17]">
                                    Papa Rewards®
                                </Link>{' '}
                                to earn free food on every order placed within <strong>{location.city}</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── LOCAL DEALS (Coupons Reused) ── */}
            <div className="bg-white py-12">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tighter">
                        Active Deals for <span className="text-[#cc0000]">{location.city}</span>
                    </h2>
                </div>
                <CouponsSection />
            </div>
            
            {/* ── QUICK LINKS ── */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                   <h3 className="text-2xl font-black text-[#1A3D17] uppercase tracking-tighter mb-8 italic">Popular Pizzas in {location.city}</h3>
                   <div className="flex flex-wrap justify-center gap-4">
                        {['The Works™', 'Pepperoni', 'Garden Fresh', 'Zesty Italian', 'Spicy Meatball'].map((pizza) => (
                            <Link 
                                key={pizza}
                                href="/posts/classic-pizzas"
                                className="bg-white border-2 border-gray-100 hover:border-[#CCEE18] text-[#1A3D17] font-black px-8 py-3 rounded-full transition-all text-sm uppercase"
                            >
                                {pizza} — Buy in {location.city}
                            </Link>
                        ))}
                   </div>
                </div>
            </section>
        </div>
    );
}
