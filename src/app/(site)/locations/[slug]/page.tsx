import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import locations from '../../../data/locations.json';
import CouponsSection from '../../../components/CouponsSection';

type Props = {
    params: Promise<{ slug: string }>;
};

// Generate SEO metadata for each city
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const location = locations.find((l) => l.slug === slug);

    if (!location) return { title: 'Location Not Found' };

    return {
        title: location.title,
        description: location.description,
        alternates: {
            canonical: `https://papajohns-menus.us/locations/${slug}`,
        },
    };
}

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

    // ── ADVANCED SCHEMA 1: LocalBusiness ──
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

    // ── ADVANCED SCHEMA 2: FAQ ──
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

