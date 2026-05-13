import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, ShieldCheck, Award, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: "Our Editorial Team - Unofficial Papa John's Fan Guide",
    description: "Meet the experts behind papajohns-menus.us. Our team of food critics and price analysts ensures you get accurate Papa Johns menu updates.",
};

export default function TeamPage() {
    const team = [
        {
            name: "Sarah Jenkins",
            role: "Senior Editor & Food Critic",
            bio: "With over 12 years in the culinary industry, Sarah specializes in fast-food nutritional analysis and value comparisons. She has reviewed over 500 pizza combinations across the US.",
            expertise: ["Menu Analysis", "Nutrition", "Food Quality"],
            avatar: "👩‍🍳"
        },
        {
            name: "The Deals Team",
            role: "Price & Coupon Analysts",
            bio: "Our dedicated data team monitors Papa Johns prices across 50 states. We verify coupons daily to ensure our readers never pay full price when a deal is available.",
            expertise: ["Price Tracking", "Coupon Verification", "Local Deals"],
            avatar: "💰"
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="bg-[#1A3D17] py-20 text-center px-4">
                <h1 className="text-[#CCEE18] text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                    Meet Our Experts
                </h1>
                <p className="text-white text-lg max-w-2xl mx-auto opacity-90 font-medium">
                    The independent team dedicated to bringing you the most accurate Papa Johns menu data.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-20">
                {/* Standards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="text-center p-8 bg-gray-50 rounded-3xl">
                        <div className="w-12 h-12 bg-[#CCEE18] rounded-full flex items-center justify-center mx-auto mb-4 text-[#1A3D17]"><ShieldCheck /></div>
                        <h3 className="font-black uppercase text-[#1A3D17] mb-2">Verified Data</h3>
                        <p className="text-sm text-gray-500 font-medium">We verify every price point directly from store checkouts.</p>
                    </div>
                    <div className="text-center p-8 bg-gray-50 rounded-3xl">
                        <div className="w-12 h-12 bg-[#CCEE18] rounded-full flex items-center justify-center mx-auto mb-4 text-[#1A3D17]"><Award /></div>
                        <h3 className="font-black uppercase text-[#1A3D17] mb-2">Independent</h3>
                        <p className="text-sm text-gray-500 font-medium">We are not affiliated with Papa Johns, ensuring honest reviews.</p>
                    </div>
                    <div className="text-center p-8 bg-gray-50 rounded-3xl">
                        <div className="w-12 h-12 bg-[#CCEE18] rounded-full flex items-center justify-center mx-auto mb-4 text-[#1A3D17]"><Users /></div>
                        <h3 className="font-black uppercase text-[#1A3D17] mb-2">User Focused</h3>
                        <p className="text-sm text-gray-500 font-medium">Our goal is to save you time and money on every order.</p>
                    </div>
                </div>

                {/* Team Members */}
                <div className="space-y-12">
                    {team.map((member, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-10 items-center bg-white border-2 border-gray-100 rounded-[3rem] p-8 md:p-12 hover:border-[#CCEE18] transition-all">
                            <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-50 rounded-[2rem] flex items-center justify-center text-6xl shadow-inner shrink-0">
                                {member.avatar}
                            </div>
                            <div>
                                <span className="text-[#cc0000] font-black uppercase tracking-widest text-xs mb-2 block">{member.role}</span>
                                <h2 className="text-3xl md:text-4xl font-black text-[#1A3D17] uppercase mb-4 tracking-tighter">{member.name}</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">{member.bio}</p>
                                <div className="flex flex-wrap gap-2">
                                    {member.expertise.map(exp => (
                                        <span key={exp} className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                                            {exp}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-20 bg-[#1A3D17] rounded-[3rem] p-12 text-center text-white">
                    <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter">Have Questions for Our Team?</h3>
                    <p className="mb-8 opacity-80 font-medium">Found a price discrepancy or want us to review a specific item?</p>
                    <Link href="/contact" className="inline-block bg-[#CCEE18] text-[#1A3D17] font-black px-10 py-4 rounded-full hover:bg-white transition-all uppercase tracking-widest text-sm">
                        Contact Editorial Team
                    </Link>
                </div>
            </div>
        </div>
    );
}
