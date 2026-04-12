import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import locations from '../../../data/locations.json';
import { locationRichContent, RichLocationData } from '../../../data/locationRichContent';
import CouponsSection from '../../../components/CouponsSection';

import { getTodayFormatted, getMonthYear } from '../../../../lib/utils/date';

type Props = {
    params: Promise<{ slug: string }>;
};

// Generate SEO metadata for each city — Dynamic Logic
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const richData = locationRichContent[slug];
    const location = locations.find((l) => l.slug === slug);
    
    if (!location && !richData) return { title: 'Location Not Found' };

    if (richData) {
        return {
            title: richData.title,
            description: richData.metaDesc,
            alternates: {
                canonical: `https://papajohns-menus.us/locations/${slug}`,
            },
        };
    }

    const month = getMonthYear();
    const date = getTodayFormatted();

    // Dynamic Title for generic pages
    const dynamicTitle = `Papa John's ${location?.city} Menu with Prices (${month}): Fast Delivery`;
    const dynamicDescription = `Check out the latest Papa John's menu prices in ${location?.city}, ${location?.state} for ${month}. Detailed pricing updated ${date}. Order delivery or carryout today!`;

    return {
        title: dynamicTitle,
        description: dynamicDescription,
        alternates: {
            canonical: `https://papajohns-menus.us/locations/${slug}`,
        },
    };
}

export const revalidate = 86400; // 24 hours

export async function generateStaticParams() {
    return locations.map((location) => ({
        slug: location.slug,
    }));
}

export default async function LocationPage({ params }: Props) {
    const { slug } = await params;
    const richData = locationRichContent[slug];
    const location = locations.find((l) => l.slug === slug);

    if (!location && !richData) notFound();

    const month = getMonthYear();

    if (richData) {
        return <RichTemplate data={richData} month={month} />;
    }

    // --- FALLBACK GENERIC TEMPLATE ---
    const baseUrl = 'https://papajohns-menus.us';
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": `Papa John's ${location?.city}`,
        "image": `${baseUrl}/hero-background.jpeg`,
        "url": `${baseUrl}/locations/${slug}`,
        "telephone": location?.phone,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": location?.address,
          "addressLocality": location?.city,
          "addressRegion": location?.state,
          "postalCode": location?.address.split(', ').pop(),
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
            "name": `Does Papa John's deliver in ${location?.city}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes, Papa John's offers fast and fresh pizza delivery across **${location?.city}, ${location?.state}**. You can order online for home delivery or carryout.`
            }
          },
          {
            "@type": "Question",
            "name": `What are the Papa John's Hours in ${location?.city}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `The Papa John's branch in ${location?.city} is typically open from **${location?.hours}**. Store hours may vary on holidays.`
            }
          }
        ]
    };

    return (
        <div className="bg-[#fcfaf8] min-h-screen font-sans pb-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <div className="bg-[#1A3D17] border-b-8 border-[#cc0000] text-white py-16 md:py-24 text-center relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <span className="inline-block bg-[#CCEE18] text-[#1A3D17] font-black uppercase tracking-[0.4em] text-[10px] px-6 py-2.5 rounded-full mb-6 shadow-lg">
                        Local Pizza Delivery — Online Order
                    </span>
                    <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                        Papa John's <span className="text-[#CCEE18]">{location?.city}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 font-bold max-w-3xl mx-auto leading-relaxed">
                        Looking for the best pizza in <strong>{location?.city}, {location?.state}</strong>? Discover the complete{' '}
                        <Link href="/menus-prices" className="text-[#CCEE18] underline hover:text-white transition-colors">
                            Papa John's menu with prices
                        </Link>{' '}
                        and exclusive local deals for 2026.
                    </p>
                </div>
            </div>
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-[#fcfaf8] rounded-3xl p-8 border-2 border-gray-100 shadow-sm flex flex-wrap items-center justify-between gap-8">
                        <div className="flex-1">
                            <h2 className="text-xl font-black text-[#1A3D17] uppercase mb-4 tracking-tight">📍 Store Details: {location?.city}</h2>
                            <div className="space-y-3 font-bold text-gray-600">
                                <p><span className="text-[#cc0000]">Address:</span> {location?.address}</p>
                                <p><span className="text-[#cc0000]">Phone:</span> {location?.phone}</p>
                                <p><span className="text-[#cc0000]">Hours:</span> {location?.hours}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// ── RICH TEMPLATE COMPONENT ──
function RichTemplate({ data, month }: { data: RichLocationData; month: string }) {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.faq.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.a
            }
        }))
    };

    return (
        <div className="bg-[#fcfaf8] min-h-screen font-sans pb-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data.schema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            
            {/* HERO */}
            <div className="bg-[#1A3D17] border-b-8 border-[#cc0000] text-white py-16 md:py-24 text-center relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <span className="inline-block bg-[#CCEE18] text-[#1A3D17] font-black uppercase tracking-[0.4em] text-[10px] px-6 py-2.5 rounded-full mb-6 shadow-lg">
                        Local Guide — Verified {month}
                    </span>
                    <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                        {data.h1.split(' — ')[0]} — <span className="text-[#CCEE18]">{data.h1.split(' — ')[1]}</span>
                    </h1>
                    <div className="text-lg md:text-xl text-white/90 font-medium max-w-4xl mx-auto leading-relaxed mb-8 prose prose-invert" dangerouslySetInnerHTML={{ __html: data.intro.replace(/\n\n/g, '<br/><br/>') }} />
                    
                    {/* STATS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-12">
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl">
                            <div className="text-[#CCEE18] text-3xl font-black mb-1">{data.stats.deliveryTime}</div>
                            <div className="text-[10px] uppercase font-black tracking-widest text-white/60">Avg Delivery Time</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl">
                            <div className="text-white text-3xl font-black mb-1">{data.stats.startingPrice}</div>
                            <div className="text-[10px] uppercase font-black tracking-widest text-white/60">Large Pizza Starts At</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl">
                            <div className="text-[#CCEE18] text-3xl font-black mb-1">{data.stats.verifiedYear}</div>
                            <div className="text-[10px] uppercase font-black tracking-widest text-white/60">Pricing Verified</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* LOCATION DETAILS */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Primary Location / Location Info */}
                        <div className="bg-[#fcfaf8] rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 h-full">
                            <h2 className="text-2xl font-black text-[#1A3D17] uppercase mb-8 flex items-center gap-3">
                                <span className="bg-[#cc0000] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">📍</span> 
                                Store Location & Hours
                            </h2>
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Main Address:</div>
                                    <p className="font-bold text-[#1A3D17] text-xl leading-snug">{data.locationDetails.address}</p>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Order by Phone:</div>
                                    <p className="text-[#cc0000] font-black text-2xl tracking-tighter">{data.locationDetails.phone}</p>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Weekly Hours:</div>
                                    <p className="text-sm font-bold text-gray-600 leading-relaxed italic">{data.locationDetails.hours}</p>
                                </div>
                                <div className="pt-4">
                                    <Link 
                                        href={data.locationDetails.mapUrl} 
                                        target="_blank"
                                        className="inline-block bg-[#1A3D17] text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-black transition-all shadow-lg"
                                    >
                                        Get Directions
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Store Hours List or Additional Context */}
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-200 shadow-sm h-full">
                            <h3 className="text-xl font-black text-[#1A3D17] uppercase mb-6 flex items-center gap-2">
                                <span className="bg-[#CCEE18] p-2 rounded-lg text-xs">🚗</span> {data.slug === 'austin-tx' ? 'Delivery Zones' : 'Store Hours'}
                            </h3>
                            <div className="space-y-4">
                                {data.locationDetails.hours.split('|').map((period, idx) => (
                                    <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                                        <span className="font-bold text-[#1A3D17] text-sm">{period.trim().split(' ')[0]}</span>
                                        <span className="font-medium text-gray-500 italic text-sm">{period.trim().replace(/^[^ ]+ /, '')}</span>
                                    </div>
                                ))}
                                <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Delivery Areas:</h4>
                                    <p className="text-sm font-bold text-[#1A3D17] leading-relaxed italic">{data.locationDetails.deliveryAreas}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Locations Grid for Cities with Multiple Stores */}
                    {data.locationDetails.additionalLocations && (
                        <div className="mt-16 pt-16 border-t border-gray-100">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                                <h3 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tighter">
                                    All {data.slug.split('-')[0].replace(/^\w/, c => c.toUpperCase())} Locations
                                </h3>
                                <span className="inline-block bg-[#cc0000] text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest">
                                    {data.locationDetails.additionalLocations.length + 1} Stores Found
                                </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {data.locationDetails.additionalLocations.map((loc, idx) => (
                                    <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <h4 className="font-black text-[#1A3D17] uppercase text-lg mb-3 tracking-tight">{loc.title}</h4>
                                        <p className="text-gray-500 font-bold text-sm mb-4 leading-relaxed">{loc.address}</p>
                                        {loc.deliveryAreas && (
                                            <div className="mt-auto">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-white bg-[#1A3D17] px-3 py-1 rounded-full">
                                                    Serves: {loc.deliveryAreas.split(',')[0]}...
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* MENU SECTION */}
            <section className="py-24 bg-[#fcfaf8]">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-[#1A3D17] uppercase mb-4 tracking-tighter">Menu & <span className="text-[#cc0000]">Prices</span></h2>
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Verified 2026 pricing for this location</p>
                    </div>
                    
                    <div className="overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white shadow-xl mb-12">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-[#1A3D17] text-[#CCEE18]">
                                <tr className="uppercase font-black tracking-widest text-[10px]">
                                    <th className="p-6">Pizza Favorites</th>
                                    <th className="p-6">S</th>
                                    <th className="p-6">M</th>
                                    <th className="p-6">L</th>
                                    <th className="p-6">XL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.menuPizzas.map((p, i) => (
                                    <tr key={i} className={`border-b border-gray-50 ${i % 2 === 1 ? 'bg-[#fcfaf8]' : ''}`}>
                                        <td className="p-6 font-bold text-[#1A3D17]">{p.name}</td>
                                        <td className="p-6 font-bold text-gray-500">{p.s}</td>
                                        <td className="p-6 font-bold text-gray-500">{p.m}</td>
                                        <td className="p-6 font-black text-[#cc0000]">{p.l}</td>
                                        <td className="p-6 font-bold text-gray-500">{p.xl}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
                            <h4 className="font-black text-[#1A3D17] uppercase mb-6 flex items-center gap-2">
                                <span className="bg-[#CCEE18] p-2 rounded-lg text-sm">🍟</span> Sides & Dips
                            </h4>
                            <div className="space-y-4">
                                {data.menuSides.map((s, i) => (
                                    <div key={i} className="flex justify-between items-center border-b border-gray-50 pb-2">
                                        <span className="font-bold text-gray-700">{s.name}</span>
                                        <span className="font-black text-[#cc0000]">{s.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#1A3D17] rounded-[2.5rem] p-10 text-white relative overflow-hidden flex flex-col justify-center">
                             <div className="relative z-10">
                                <h4 className="text-3xl font-black uppercase text-[#CCEE18] mb-4 tracking-tighter">Fastest Order</h4>
                                <p className="font-bold opacity-80 mb-8 leading-relaxed">Skip the line and order online for the fastest carryout or delivery experience.</p>
                                <Link href="https://www.papajohns.com/order/menu" className="inline-block bg-[#cc0000] text-white font-black px-10 py-4 rounded-full uppercase tracking-wider text-xs hover:scale-105 transition-transform">
                                    Start Ordering
                                </Link>
                             </div>
                             <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl">🍕</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEIGHBORHOOD CONTENT */}
            {data.neighborhoodContent.map((section, i) => (
                <section key={i} className={`py-24 ${i % 2 === 1 ? 'bg-white' : 'bg-gray-50'}`}>
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h3 className="text-3xl font-black text-[#1A3D17] uppercase mb-8 tracking-tighter">{section.title}</h3>
                        <div className="text-gray-600 font-bold text-lg leading-relaxed prose prose-lg" dangerouslySetInnerHTML={{ __html: section.text.replace(/\n\n/g, '<br/><br/>') }} />
                    </div>
                </section>
            ))}

            {/* FAQ */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-black text-[#1A3D17] uppercase mb-12 text-center tracking-tighter">Frequently Asked <span className="text-[#cc0000]">Questions</span></h2>
                    <div className="space-y-6">
                        {data.faq.map((f, i) => (
                            <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
                                <h4 className="font-black text-[#1A3D17] uppercase mb-2 text-sm italic">Q: {f.q}</h4>
                                <p className="text-gray-600 text-sm font-medium leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INTERNAL LINKING */}
            <section className="py-20 bg-[#1A3D17] text-white">
                <div className="container mx-auto px-4">
                    <h3 className="text-2xl font-black uppercase text-center mb-12 tracking-tighter">Explore More <span className="text-[#CCEE18]">Menu Details</span></h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-center">
                        <Link href="/posts/papa-johns-pepperoni-pizza" className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-[#CCEE18] hover:text-[#1A3D17] transition-all font-black uppercase text-[10px] tracking-widest">Pepperoni Pizza</Link>
                        <Link href="/posts/papa-johns-the-works-pizza" className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-[#CCEE18] hover:text-[#1A3D17] transition-all font-black uppercase text-[10px] tracking-widest">The Works™</Link>
                        <Link href="/posts/papa-johns-garlic-knots" className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-[#CCEE18] hover:text-[#1A3D17] transition-all font-black uppercase text-[10px] tracking-widest">Garlic Knots</Link>
                        <Link href="/posts/papa-johns-nutrition-guide" className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-[#CCEE18] hover:text-[#1A3D17] transition-all font-black uppercase text-[10px] tracking-widest">Nutrition Guide</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
