import Image from "next/image";
import Link from "next/link";
import posts from "../data/posts.json";
import { ArrowRight } from "lucide-react";
import HeroSection from "../components/HeroSection";
import RestaurantHoursSection from "../components/RestaurantHoursSection";
import CouponsSection from "../components/CouponsSection";

export default function Home() {
    return (
        <div className="w-full">
            <HeroSection />

            {/* Complete Menu PDF Viewer */}
            <section className="py-16 md:py-24 bg-gray-50 w-full">
                <div className="w-full max-w-[1400px] mx-auto px-2 md:px-4">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-6 md:mb-10 pt-8">
                        {/* Download PDF Button */}
                        <a
                            href="/papajohns_openbook.pdf"
                            download
                            className="mb-8 inline-flex items-center gap-2 bg-[#CCEE18] text-[#1A3D17] font-black uppercase tracking-[0.1em] text-xs md:text-sm py-2 px-6 rounded-full shadow-[0_0_20px_rgba(204,238,24,0.3)] transition-all hover:scale-105"
                        >
                            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
                            <span>DOWNLOAD PDF</span>
                        </a>

                        {/* Updated Heading */}
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6" style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif', color: '#cc0000' }}>
                            OUR FULL MENU PDF
                        </h2>

                        {/* SEO Optimized Paragraph */}
                        <p className="text-gray-700 text-base md:text-lg font-medium leading-relaxed px-4">
                            Looking for the ultimate <Link href="/menus-prices" className="text-[#cc0000] hover:underline font-bold">Papa John's Full Menu</Link>? You can easily view or download the complete <strong>Papa John's Menu PDF</strong> right here to explore all the delicious choices ranging from our mouth-watering <Link href="/menus-prices/classic-pizzas" className="text-[#cc0000] hover:underline font-bold">Classic Pizzas</Link> and <Link href="/menus-prices/super-loaded" className="text-[#cc0000] hover:underline font-bold">Super Loaded options</Link> to sweet <Link href="/menus-prices/desserts" className="text-[#cc0000] hover:underline font-bold">Desserts</Link> and refreshing drinks. Whether you prefer to print it out for your kitchen fridge or save it directly on your device to plan your meal before ordering through the <a href="https://www.papajohns.com/" target="_blank" rel="noopener noreferrer" className="text-[#cc0000] hover:underline font-bold">official Papa John's platform</a>, our high-quality PDF version guarantees you never miss out on any limited-time deals or hidden menu gems.
                        </p>
                    </div>
                    <div className="w-full bg-white rounded-xl shadow-2xl  p-4 md:p-8" style={{ borderColor: '#cc0000' }}>
                        {/* Huge layout to show PDF full screen before native scrolling */}
                        <iframe
                            src="/papajohns_openbook.pdf#view=FitW"
                            className="w-full min-h-screen h-[100vh] rounded-lg border-none"
                            style={{ minHeight: '100vh' }}
                            title="Papa Johns Complete Menu PDF"
                        />
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 pb-16">
                            <a href="/papajohns_openbook.pdf" download className="w-full sm:w-auto text-center bg-red-800 hover:bg-red-900 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1" style={{ backgroundColor: '#cc0000' }}>
                                Download Menu PDF
                            </a>
                            <a href="/papajohns_openbook.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center bg-white hover:bg-gray-50 text-red-800 font-bold py-4 px-10 rounded-full transition-all shadow-md hover:shadow-lg border-2 border-red-800 hover:-translate-y-1" style={{ color: '#cc0000', borderColor: '#cc0000' }}>
                                Open Full View
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Papa Rewards Booklet Viewer */}
            <section className="py-16 md:py-24 bg-gray-50 w-full">
                <div className="w-full max-w-[1400px] mx-auto px-2 md:px-4">
                    {/* Header area - same as first PDF section */}
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-6 md:mb-10 pt-8">
                        {/* Download PDF Button */}
                        <a
                            href="/papa_rewards_openbook.pdf"
                            download
                            className="mb-8 inline-flex items-center gap-2 bg-[#CCEE18] text-[#1A3D17] font-black uppercase tracking-[0.1em] text-xs md:text-sm py-2 px-6 rounded-full shadow-[0_0_20px_rgba(204,238,24,0.3)] transition-all hover:scale-105"
                        >
                            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
                            <span>DOWNLOAD PDF</span>
                        </a>

                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6" style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif', color: '#cc0000' }}>
                            PAPA REWARDS
                        </h2>

                        {/* SEO Optimized Paragraph */}
                        <p className="text-gray-700 text-base md:text-lg font-medium leading-relaxed px-4">
                            Unlock exclusive savings and earn free food across our entire menu with the <Link href="/papa-johns-rewards" className="text-[#cc0000] hover:underline font-bold">Papa Rewards program</Link>. Every time you enjoy our signature <Link href="/menus-prices/classic-pizzas" className="text-[#cc0000] hover:underline font-bold">Classic Pizzas</Link> or add mouth-watering <Link href="/menus-prices/sides" className="text-[#cc0000] hover:underline font-bold">Sides</Link> to your order, you earn points that add up to Papa Dough. View our detailed rewards guide below or visit the <a href="https://www.papajohns.com/papa-rewards/" target="_blank" rel="noopener noreferrer" className="text-[#cc0000] hover:underline font-bold">Official Papa John's Rewards page</a> to learn everything about earning and redeeming. Don't wait—sign up today and start making every pizza night even more rewarding!
                        </p>
                    </div>

                    {/* Card - same as first PDF section */}
                    <div className="w-full bg-white rounded-xl shadow-2xl p-4 md:p-8">
                        <iframe
                            src="/papa_rewards_openbook.pdf#view=FitW"
                            className="w-full min-h-screen h-[100vh] rounded-lg border-none"
                            style={{ minHeight: '100vh' }}
                            title="Papa Rewards Booklet PDF"
                        />
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 pb-6">
                            <Link href="/papa-johns-rewards" className="w-full sm:w-auto text-center bg-[#1A3D17] hover:bg-[#112a0f] text-white font-black py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 uppercase tracking-wider text-sm md:text-base border-2 border-[#1A3D17]">
                                Join Now
                            </Link>
                            <a href="/papa_rewards_openbook.pdf" download className="w-full sm:w-auto text-center bg-[#CCEE18] hover:bg-white text-[#1A3D17] font-black py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 uppercase tracking-wider text-sm md:text-base border-2 border-transparent hover:border-[#1A3D17]">
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
                            Explore our complete menu breakdowns, local delivery guides, and latest product releases.
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
                                    <img src={post.image} alt={post.imageAlt || post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
                                    Read Full Guide 
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
            <section className="py-20 bg-white" itemScope itemType="https://schema.org/FAQPage">
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
                                q: "How do I find a Papa John's near me?",
                                a: <>Use our <Link href="/store-locator" className="text-[#cc0000] underline font-bold">Papa John's Store Locator</Link> to instantly find the closest branch. We have multiple locations across Pakistan offering both pizza delivery and carryout. Simply enter your city or area and get real-time directions, phone numbers, and opening hours.</>,
                            },
                            {
                                q: "What are the latest Papa John's promo codes and coupons?",
                                a: <>Papa John's Pakistan regularly releases exclusive <Link href="/coupons" className="text-[#cc0000] underline font-bold">promo codes and coupon deals</Link> through our website and loyalty program. You can also earn free food via <Link href="/papa-johns-rewards" className="text-[#cc0000] underline font-bold">Papa Rewards®</Link> — no code needed. Check the Coupons section above for today's best active Papa Johns promo codes.</>,
                            },
                            {
                                q: "Is Papa John's open now near me?",
                                a: <>Most Papa John's Pakistan locations are open <strong>Sunday through Saturday, 11:00 AM to 12:00 AM (midnight)</strong>. Exact hours may vary by branch. Use the <Link href="/hours" className="text-[#cc0000] underline font-bold">Papa John's Hours &amp; Locations</Link> page to check live store hours for your nearest restaurant.</>,
                            },
                            {
                                q: "What pizza deals does Papa John's offer?",
                                a: <>Papa John's offers incredible <Link href="/coupons" className="text-[#cc0000] underline font-bold">pizza deals</Link> including Buy-One-Get-One Free offers, Meal Combos, Family Deals, and exclusive digital discounts. Browse our <Link href="/menus-prices" className="text-[#cc0000] underline font-bold">full menu with prices</Link> to find the best value options this week.</>,
                            },
                            {
                                q: "What is the Papa John's phone number for delivery?",
                                a: <>You can place a delivery order by calling your nearest branch via numbers listed on our <Link href="/store-locator" className="text-[#cc0000] underline font-bold">Store Locator page</Link>. Alternatively, order online for the fastest <Link href="/posts/best-pizza-delivery-near-me" className="text-[#cc0000] underline font-bold">pizza delivery experience</Link> with real-time order tracking.</>,
                            },
                            {
                                q: "What is on the Papa John's menu with prices?",
                                a: <>The Papa John's menu includes <Link href="/posts/classic-pizzas" className="text-[#cc0000] underline font-bold">Classic Pizzas</Link> starting from PKR 899, <Link href="/posts/super-loaded" className="text-[#cc0000] underline font-bold">Specialty Pizzas</Link> from PKR 1,199, <Link href="/posts/new-papadias-flavors-2026" className="text-[#cc0000] underline font-bold">Papadias</Link> from PKR 699, and <Link href="/posts/sides" className="text-[#cc0000] underline font-bold">Sides &amp; Dips</Link> from PKR 399. See the <Link href="/posts/papa-johns-menu-prices-guide" className="text-[#cc0000] underline font-bold">complete Papa John's menu guide</Link> for full 2026 pricing.</>,
                            },
                            {
                                q: "How do I earn free pizza with Papa John's rewards?",
                                a: <>Join <Link href="/papa-johns-rewards" className="text-[#cc0000] underline font-bold">Papa Rewards®</Link> for free. You earn <strong>1 point for every PKR 100 spent</strong>. Accumulate 50 points for free Breadsticks, or save up to 280 points for a free Large Pizza — Pakistan's best pizza loyalty program!</>,
                            },
                            {
                                q: "Does Papa John's offer gluten-free or vegetarian options?",
                                a: <>Yes! Papa John's offers a gluten-free crust on select small pizzas and wide veggie topping choices. Explore the <Link href="/menus-prices" className="text-[#cc0000] underline font-bold">full menu</Link> to customize your perfect pizza using our Better Ingredients guarantee.</>,
                            },
                        ].map((faq, i) => (
                            <div
                                key={i}
                                className="bg-[#fcfaf8] hover:bg-[#1A3D17] group transition-colors duration-300 p-7 rounded-3xl shadow-sm border border-gray-100"
                                itemScope
                                itemType="https://schema.org/Question"
                            >
                                <div className="flex items-start gap-5">
                                    <div className="w-10 h-10 shrink-0 bg-[#CCEE18] text-[#1A3D17] rounded-full flex items-center justify-center font-black text-lg shadow-inner">
                                        ?
                                    </div>
                                    <div>
                                        <h3
                                            className="font-black text-gray-900 group-hover:text-white transition-colors mb-2 text-base leading-snug"
                                            itemProp="name"
                                        >
                                            {faq.q}
                                        </h3>
                                        <div
                                            className="text-gray-500 group-hover:text-gray-300 transition-colors text-sm leading-relaxed font-medium [&_a]:text-[#cc0000] [&_a]:underline [&_a]:font-bold"
                                            itemScope
                                            itemType="https://schema.org/Answer"
                                        >
                                            <p itemProp="text">{faq.a}</p>
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
