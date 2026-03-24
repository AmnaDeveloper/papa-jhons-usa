import { Metadata } from 'next';
import { generatePageSEO } from '../../lib/seo-config';
import RestaurantHoursSection from '../../components/RestaurantHoursSection';
import InternalLinks from '../../components/seo/InternalLinks';
import Link from 'next/link';

export const metadata: Metadata = generatePageSEO(
    "Papa John's Hours & Opening Times - Delivery & Carryout Near Me",
    "Looking for Papa John's store hours? Check updated opening and closing times for all locations. Most stores offer late-night delivery and weekend hours for your convenience.",
    "/hours",
    "Papa Johns hours, Papa Johns closing time, pizza delivery hours, Papa Johns locations near me"
);

export default function HoursPage() {
    return (
        <div className="bg-[#fafafa] min-h-screen">
            {/* ── Premium Hero Header ── */}
            <div className="bg-[#1A3D17] py-20 md:py-32 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#CCEE18] rounded-full -mr-72 -mt-72 opacity-[0.08] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#cc0000] rounded-full -ml-48 -mb-48 opacity-[0.08]"></div>
                
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block bg-[#CCEE18] text-[#1A3D17] font-black uppercase tracking-[0.4em] text-[10px] px-6 py-2.5 rounded-full mb-8 shadow-lg">
                        Business Hours
                    </span>
                    <h1 
                        className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]"
                        style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}
                    >
                        Store <span className="text-[#CCEE18]">Hours</span>
                    </h1>
                    <p className="text-white/80 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-bold tracking-tight">
                        Craving late-night pizza? Most Papa John's locations stay open late for <Link href="/menus-prices" className="text-[#CCEE18] hover:underline transition-all">Midnight Delivery</Link> and weekend treats. Check your local store times below!
                    </p>
                </div>
            </div>

            {/* ── Main Content Area ── */}
            <div className="max-w-[1440px] mx-auto px-4 md:px-12 -mt-16 relative z-20 pb-32">
                
                {/* ── SEO CONTENT SECTION ── */}
                <div className="bg-white rounded-[3rem] p-10 md:p-16 mb-20 shadow-2xl border border-gray-50">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                             <h2 className="text-3xl md:text-5xl font-black text-[#1A3D17] uppercase tracking-tighter mb-8 leading-tight" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                 Pizza At Your <br />
                                 <span className="text-[#cc0000]">Schedule</span>
                             </h2>
                             <div className="space-y-6 text-gray-500 font-bold leading-relaxed text-lg">
                                 <p>
                                     Whether it's a quick lunch break or a 2 AM cravings session, we've got you covered. Our stores operate on flexible schedules to ensure you get your <Link href="/coupons" className="text-[#1A3D17] hover:text-[#cc0000] underline decoration-[#CCEE18] underline-offset-4">favorite deals</Link> whenever you need them.
                                 </p>
                                 <p>
                                     Standard Papa John's hours usually begin from <span className="text-[#1A3D17]">10:00 AM</span> or <span className="text-[#1A3D17]">11:00 AM</span> for lunch service, extending until <span className="text-[#1A3D17]">11:00 PM</span> on weekdays and even later on Fridays and Saturdays.
                                 </p>
                                 <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#CCEE18]">
                                     <p className="text-gray-400 text-sm italic font-bold">
                                         "Always check your local <Link href="/store-locator" className="text-[#1A3D17] hover:underline">Store Locator</Link> for precise closing times and holiday schedules!"
                                     </p>
                                 </div>
                             </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-[#1A3D17] p-8 rounded-[2.5rem] text-center group hover:bg-[#CCEE18] transition-all duration-500 shadow-xl">
                                <span className="text-4xl mb-4 block group-hover:scale-125 transition-transform">🕒</span>
                                <h4 className="text-white group-hover:text-[#1A3D17] font-black uppercase text-[10px] tracking-widest mb-2">Late Night</h4>
                                <p className="text-[#CCEE18] group-hover:text-[#1A3D17] text-xl font-black">Until 12 AM+</p>
                            </div>
                            <div className="bg-white p-8 rounded-[2.5rem] text-center border-2 border-gray-100 group hover:border-[#cc0000] transition-all duration-500 shadow-xl">
                                <span className="text-4xl mb-4 block group-hover:scale-125 transition-transform">🎉</span>
                                <h4 className="text-[#1A3D17] font-black uppercase text-[10px] tracking-widest mb-2">Weekends</h4>
                                <p className="text-[#cc0000] text-xl font-black">All Day Open</p>
                            </div>
                            <div className="bg-white p-8 rounded-[2.5rem] text-center border-2 border-gray-100 group hover:border-[#CCEE18] transition-all duration-500 shadow-xl">
                                <span className="text-4xl mb-4 block group-hover:scale-125 transition-transform">🚚</span>
                                <h4 className="text-[#1A3D17] font-black uppercase text-[10px] tracking-widest mb-2">Delivery</h4>
                                <p className="text-gray-400 font-black text-xs">24/7 Availability*</p>
                            </div>
                            <div className="bg-[#cc0000] p-8 rounded-[2.5rem] text-center group hover:bg-[#1A3D17] transition-all duration-500 shadow-xl">
                                <span className="text-4xl mb-4 block group-hover:scale-125 transition-transform">🥡</span>
                                <h4 className="text-white font-black uppercase text-[10px] tracking-widest mb-2">Carryout</h4>
                                <p className="text-white text-xs font-black">Fast Pickup</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Papa John's Hours & Locations Section ── */}
                <div className="rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-30px_rgba(0,0,0,0.2)]">
                    <RestaurantHoursSection />
                </div>

                <div className="mt-32 pt-16 border-t-2 border-gray-100">
                    <InternalLinks />
                </div>
            </div>
        </div>
    );
}
