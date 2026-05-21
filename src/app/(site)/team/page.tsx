import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, ShieldCheck, CheckCircle, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: "Meet Our Editorial Team — PapaJohns-Menus.us",
    description: "Meet the real people behind papajohns-menus.us — food writers, deal hunters, and nutrition experts helping Americans save money on Papa Johns since 2024.",
};

export default function TeamPage() {
    const team = [
        {
            name: "Sarah Jenkins",
            role: "Editor in Chief",
            image: "/sarah-jenkins.png",
            alt: "Sarah Jenkins, Editor in Chief",
            accentFrom: "#cc0000",
            accentTo: "#ff4d4d",
            bio: "Sarah has been writing about food, restaurants, and consumer deals for over 6 years. Based in Austin, Texas, she has personally visited and reviewed dozens of Papa Johns locations across the United States.",
            detail: "Sarah leads our editorial team and sets the quality standards for every article published on this site. Before launching PapaJohns-Menus.us, she contributed food reviews to several regional lifestyle publications and ran a personal food blog for 4 years.",
            specialties: ["Menu Analysis", "Editorial Standards", "Food Quality Reviews", "Site Accuracy"],
            location: "Austin, Texas",
        },
        {
            name: "Marcus Webb",
            role: "Deals & Coupons Researcher",
            image: "/marcus-webb.png",
            alt: "Marcus Webb, Deals and Coupons Researcher",
            accentFrom: "#1A3D17",
            accentTo: "#2e6e29",
            bio: "Marcus joined our team in 2024 with one obsession: saving people money on food. He monitors Papa Johns promotions, app-exclusive deals, loyalty program updates, and limited-time offers on a daily basis.",
            detail: "Before joining PapaJohns-Menus.us, Marcus spent 3 years running a coupon and cashback blog where he helped thousands of families reduce their grocery and food delivery bills. He personally tests every coupon code before it goes live on our Deals page.",
            specialties: ["Coupon Verification", "Price Tracking", "Loyalty Programs", "Deal Analysis"],
            location: "Chicago, Illinois",
        },
        {
            name: "Linda Torres",
            role: "Nutrition & Menu Specialist",
            image: "/linda-torres.png",
            alt: "Linda Torres, Nutrition and Menu Specialist",
            accentFrom: "#CCEE18",
            accentTo: "#99b312",
            bio: "Linda brings a background in nutrition science to our team. She is responsible for reviewing all calorie counts, macro breakdowns, and allergen information published on PapaJohns-Menus.us.",
            detail: "Linda understands that many pizza lovers have specific dietary needs — whether managing calories, avoiding allergens, or making health-conscious choices. Her goal is to make sure every reader has the nutritional facts they need before placing an order.",
            specialties: ["Nutritional Analysis", "Allergen Information", "Macro Tracking", "Dietary Guides"],
            location: "Phoenix, Arizona",
        },
    ];

    const editorialSteps = [
        "Prices are verified directly against the Papa Johns official app and website",
        "Coupon codes are personally tested before being published",
        "Nutritional data is cross-checked with official Papa Johns nutrition information",
        "All articles are reviewed and updated at least once per month",
        "Major price changes are reflected on our site within 48 hours",
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <div className="bg-[#1A3D17] py-20 text-center px-4">
                <h1 className="text-[#CCEE18] text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                    Meet Our Editorial Team
                </h1>
                <p className="text-white text-lg max-w-3xl mx-auto opacity-90 font-medium leading-relaxed">
                    The independent team dedicated to bringing you the most accurate Papa Johns menu information, honest reviews, and verified deals.
                </p>
                <p className="text-[#CCEE18] text-sm mt-4 font-semibold max-w-2xl mx-auto opacity-80">
                    We are not affiliated with Papa Johns International. We are everyday Americans who love pizza and believe that finding accurate food information should be free, fast, and honest.
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-20">

                {/* Team Members */}
                <div className="space-y-12 mb-20">
                    {team.map((member, i) => (
                        <div
                            key={i}
                            className="flex flex-col md:flex-row gap-10 items-start bg-white border-2 border-gray-100 rounded-[2.5rem] p-8 md:p-12 hover:border-[#CCEE18] transition-all shadow-sm relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-2" style={{ background: `linear-gradient(to right, ${member.accentFrom}, ${member.accentTo})` }}></div>
                            <div className="w-28 h-28 md:w-36 md:h-36 rounded-[1.5rem] overflow-hidden shadow-md shrink-0 mt-2">
                                <Image
                                    src={member.image}
                                    alt={member.alt}
                                    width={144}
                                    height={144}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <span className="text-[#cc0000] font-black uppercase tracking-widest text-xs mb-1 block">
                                    {member.role}
                                </span>
                                <h2 className="text-2xl md:text-3xl font-black text-[#1A3D17] uppercase mb-3 tracking-tighter">
                                    {member.name}
                                </h2>
                                <p className="text-gray-700 text-base leading-relaxed mb-3 font-medium">
                                    {member.bio}
                                </p>
                                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                                    {member.detail}
                                </p>
                                <div className="mb-4">
                                    <span className="text-xs font-bold uppercase tracking-wide text-gray-400 mr-2">Specialties:</span>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {member.specialties.map(s => (
                                            <span key={s} className="bg-[#f5f9e8] text-[#1A3D17] border border-[#CCEE18] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest">
                                    📍 Based in: {member.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Editorial Process */}
                <div className="mb-16 bg-gray-50 rounded-[2rem] p-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-[#CCEE18] rounded-full flex items-center justify-center text-[#1A3D17]">
                            <CheckCircle size={20} />
                        </div>
                        <h2 className="text-2xl font-black uppercase text-[#1A3D17] tracking-tighter">
                            Our Editorial Process
                        </h2>
                    </div>
                    <p className="text-gray-500 text-sm mb-6 font-medium">
                        Every piece of content on PapaJohns-Menus.us goes through a strict review process:
                    </p>
                    <ul className="space-y-3">
                        {editorialSteps.map((step, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="w-6 h-6 bg-[#1A3D17] text-[#CCEE18] rounded-full flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                                    {i + 1}
                                </span>
                                <span className="text-gray-700 text-sm font-medium leading-relaxed">{step}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Editorial Independence */}
                <div className="mb-16 border-2 border-[#CCEE18] rounded-[2rem] p-10 bg-[#fdfff0]">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-[#1A3D17] rounded-full flex items-center justify-center text-[#CCEE18]">
                            <ShieldCheck size={20} />
                        </div>
                        <h2 className="text-2xl font-black uppercase text-[#1A3D17] tracking-tighter">
                            Editorial Independence
                        </h2>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed font-medium">
                        PapaJohns-Menus.us is a completely independent informational website. Our team receives no payment, sponsorship, or benefit from Papa Johns International in any form. Every review, comparison, and recommendation on this site reflects our team&apos;s honest, independent research and opinion.
                    </p>
                </div>

                {/* Contact CTA */}
                <div className="bg-[#1A3D17] rounded-[2.5rem] p-12 text-center text-white">
                    <div className="w-12 h-12 bg-[#CCEE18] rounded-full flex items-center justify-center mx-auto mb-5 text-[#1A3D17]">
                        <Mail size={22} />
                    </div>
                    <h3 className="text-3xl font-black uppercase mb-3 tracking-tighter">Contact Our Team</h3>
                    <p className="opacity-75 font-medium text-sm mb-2">
                        Found an error? Want to suggest a topic? Have a question for our editors?
                    </p>
                    <p className="text-[#CCEE18] font-bold text-base mb-1">
                        📧 contact@papajohns-menus.us
                    </p>
                    <p className="text-white opacity-60 text-sm mb-8 flex items-center justify-center gap-2">
                        <Clock size={14} /> Response Time: Within 48 hours
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-[#CCEE18] text-[#1A3D17] font-black px-10 py-4 rounded-full hover:bg-white transition-all uppercase tracking-widest text-sm"
                    >
                        Contact Editorial Team
                    </Link>
                </div>

            </div>
        </div>
    );
}
