import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Papa Rewards® - Earn Points & Redeem Free Pizza | Papa John's USA",
    description:
        "Join Papa Rewards® and earn 1 point for every $1 spent at Papa John's. Redeem points for free Breadsticks, Wings, Medium Pizza, Large Pizza, and more. Sign up today and start earning Papa Dough!",
    keywords: [
        "Papa Rewards",
        "Papa John's loyalty program",
        "free pizza points",
        "Papa John's rewards USA",
        "earn points pizza",
        "pizza rewards program",
        "Papa Dough",
    ],
    openGraph: {
        title: "Papa Rewards® — Earn Free Pizza at Papa John's",
        description:
            "Earn points on every Papa John's order and redeem them for free food — from Breadsticks to Large Pizzas. The best pizza loyalty program in the USA.",
        url: "https://papajohns-menus.us/papa-johns-rewards",
        type: "website",
    },
    alternates: {
        canonical: "/papa-johns-rewards",
    },
};

const rewardItems = [
    { points: 25,  item: 'Original Breadsticks',           icon: '🥖', desc: 'Classic baked breadsticks with garlic butter dip' },
    { points: 25,  item: 'Potato Wedges',                  icon: '🍟', desc: 'Crispy golden seasoned potato wedges' },
    { points: 50,  item: 'Banana Hazelnut Choco Roll',     icon: '🍫', desc: 'Sweet slow-baked chocolate hazelnut dessert roll' },
    { points: 60,  item: 'Chicken Poppers (10 pcs)',        icon: '🍗', desc: 'Bite-sized crispy white-meat chicken poppers' },
    { points: 75,  item: 'Cheesesticks',                   icon: '🧀', desc: '100% real mozzarella melted over fresh-baked dough' },
    { points: 75,  item: 'Peri Peri Chicken Poppers',      icon: '🌶️', desc: 'Spicy peri peri glazed chicken bites (10 pcs)' },
    { points: 80,  item: 'Wings (10 pcs)',                  icon: '🍗', desc: 'Bone-in or boneless wings in your favorite sauce' },
    { points: 90,  item: 'Spicy Chicken Roll',             icon: '🌯', desc: 'Rolled in our signature spicy buffalo sauce' },
    { points: 150, item: 'Medium Pizza (Any Flavor)',      icon: '🍕', desc: 'Choose any Medium pizza from the full menu' },
    { points: 200, item: 'Large Pizza (Any Flavor)',       icon: '🔥', desc: 'Any Large pizza — all toppings of your choice!', popular: true },
];

const howToEarnSteps = [
    {
        step: '01',
        title: 'Create a Free Account',
        desc: "Sign up on Papa John's website or app in under 60 seconds. No credit card required — completely free to join!",
        icon: '👤',
    },
    {
        step: '02',
        title: 'Order & Earn Points',
        desc: 'With every $1 spent on any qualifying delivery or carryout order, you automatically earn 1 reward point.',
        icon: '🛒',
    },
    {
        step: '03',
        title: 'Redeem at Checkout',
        desc: 'Hit your target points and pick any item from the rewards menu. Points are applied instantly as Papa Dough at checkout.',
        icon: '🎁',
    },
];

export default function PapaRewardsPage() {
    return (
        <div className="bg-[#fcfaf8] min-h-screen font-sans pb-20">

            {/* ── HERO BANNER ── */}
            <div className="bg-[#1A3D17] border-b-8 border-[#cc0000] text-white py-16 md:py-24 text-center relative overflow-hidden mb-16">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CCEE18] rounded-full -mr-64 -mt-64 opacity-5 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#cc0000] rounded-full -ml-40 -mb-40 opacity-5 pointer-events-none"></div>
                <div className="absolute top-10 left-10 text-[#CCEE18] text-2xl opacity-20 animate-bounce">⭐</div>
                <div className="absolute top-16 right-20 text-[#CCEE18] text-3xl opacity-15 animate-pulse">⭐</div>

                <div className="container mx-auto px-4 relative z-10">
                    <span className="inline-block bg-[#CCEE18] text-[#1A3D17] font-black uppercase tracking-[0.4em] text-[10px] px-6 py-2.5 rounded-full mb-6 shadow-lg">
                        Best USA Loyalty Program — 2026
                    </span>
                    <h1
                        className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4"
                        style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}
                    >
                        Papa <span className="text-[#CCEE18]">Rewards</span>®
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 font-bold max-w-3xl mx-auto leading-relaxed mb-8">
                        The most rewarding pizza loyalty program in the United States. Earn <strong className="text-[#CCEE18]">1 point</strong> for every $1 spent and redeem for free food starting at just <strong className="text-[#CCEE18]">25 Points</strong> — from Breadsticks to a full Large Pizza!
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Link
                            href="/contact"
                            className="bg-[#CCEE18] hover:bg-white text-[#1A3D17] font-black py-4 px-10 rounded-full transition-all uppercase tracking-widest text-xs shadow-xl active:scale-95"
                        >
                            Join Now — It's 100% Free
                        </Link>
                        <Link
                            href="#rewards-catalogue"
                            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-black py-4 px-10 rounded-full transition-all uppercase tracking-widest text-xs"
                        >
                            View Rewards Catalogue
                        </Link>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto border-t border-white/10 pt-8">
                        {[
                            { value: '1 Point', label: 'Per $1 Spent' },
                            { value: '25 Pts', label: 'Minimum Redemption' },
                            { value: '10+', label: 'Reward Items Available' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-2xl md:text-3xl font-black text-[#CCEE18]">{stat.value}</div>
                                <div className="text-white/50 text-[10px] font-bold uppercase tracking-widest mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── SEO INTRO CONTENT ── */}
            <section className="max-w-[900px] mx-auto px-4 mb-20 text-center">
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                    The <strong>Papa Rewards® program</strong> is <a href="https://www.papajohns.com/papa-rewards/" target="_blank" rel="noopener noreferrer" className="text-[#cc0000] underline font-bold hover:text-[#1A3D17]">Papa John's official loyalty program</a>, designed to reward loyal customers across the USA with exclusive free food perks. Unlike other <a href="https://en.wikipedia.org/wiki/Loyalty_program" target="_blank" rel="noopener noreferrer" className="text-[#1A3D17] underline font-bold hover:text-[#cc0000]">loyalty programs</a>, Papa Rewards® covers your entire order — from our crowd-pleasing{' '}
                    <Link href="/posts/classic-pizzas" className="text-[#cc0000] underline font-bold hover:text-[#1A3D17]">Classic Pizzas</Link> and{' '}
                    <Link href="/posts/super-loaded" className="text-[#cc0000] underline font-bold hover:text-[#1A3D17]">Specialty Pizzas</Link> to{' '}
                    <Link href="/posts/sides" className="text-[#cc0000] underline font-bold hover:text-[#1A3D17]">Sides & Dips</Link> and{' '}
                    <Link href="/posts/new-papadias-flavors-2026" className="text-[#cc0000] underline font-bold hover:text-[#1A3D17]">Papadias</Link>. Every order you place on our{' '}
                    <Link href="/menus-prices" className="text-[#cc0000] underline font-bold hover:text-[#1A3D17]">complete menu</Link> brings you one step closer to free food!
                </p>
            </section>

            {/* ── HOW TO EARN ── */}
            <section id="how-to-earn" className="py-20 bg-white">
                <div className="max-w-[1280px] mx-auto px-4">
                    <div className="text-center mb-14">
                        <span className="inline-block bg-[#1A3D17]/10 text-[#1A3D17] font-black uppercase tracking-[0.3em] text-[10px] px-6 py-2 rounded-full mb-4">
                            Getting Started
                        </span>
                        <h2
                            className="text-3xl md:text-5xl font-black text-[#1A3D17] uppercase tracking-tighter mb-4"
                            style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}
                        >
                            How to <span className="text-[#cc0000]">Earn Points?</span>
                        </h2>
                        <p className="text-gray-500 font-bold max-w-2xl mx-auto leading-relaxed">
                            Earning Papa Rewards® points is incredibly simple. Every time you order{' '}
                            <Link href="/posts/best-pizza-delivery-near-me" className="text-[#cc0000] underline font-bold">pizza delivery</Link>{' '}
                            or carryout in the US, points are added automatically to your account.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {howToEarnSteps.map((step) => (
                            <div key={step.step} className="relative bg-[#fcfaf8] rounded-3xl p-8 border-2 border-gray-100 hover:border-[#CCEE18] transition-all group shadow-sm hover:shadow-xl">
                                <div className="absolute -top-5 left-8 bg-[#cc0000] text-white font-black text-sm px-4 py-1 rounded-full shadow">
                                    Step {step.step}
                                </div>
                                <div className="text-5xl mb-6 mt-4">{step.icon}</div>
                                <h3 className="text-xl font-black text-[#1A3D17] uppercase mb-3 group-hover:text-[#cc0000] transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 font-medium leading-relaxed text-sm">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── REWARDS CATALOGUE ── */}
            <section id="rewards-catalogue" className="py-20 bg-[#fcfaf8]">
                <div className="max-w-[1280px] mx-auto px-4">
                    <div className="text-center mb-14">
                        <span className="inline-block bg-[#cc0000]/10 text-[#cc0000] font-black uppercase tracking-[0.3em] text-[10px] px-6 py-2 rounded-full mb-4">
                            Free Food Awaits
                        </span>
                        <h2
                            className="text-3xl md:text-5xl font-black text-[#1A3D17] uppercase tracking-tighter mb-4"
                            style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}
                        >
                            What Can You <span className="text-[#cc0000]">Redeem?</span>
                        </h2>
                        <p className="text-gray-500 font-bold max-w-2xl mx-auto leading-relaxed">
                            From crispy <Link href="/posts/sides" className="text-[#cc0000] underline font-bold">Garlic Breadsticks</Link> to a complete{' '}
                            <Link href="/posts/classic-pizzas" className="text-[#cc0000] underline font-bold">Large Classic Pizza</Link> — collect points and claim the food you love most at zero cost!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {rewardItems.map((reward) => (
                            <div
                                key={reward.item}
                                className={`relative bg-white rounded-3xl p-6 shadow-md border-2 transition-all group hover:shadow-xl hover:-translate-y-1 ${reward.popular ? 'border-[#CCEE18] bg-gradient-to-br from-white to-[#CCEE18]/10' : 'border-gray-100 hover:border-[#CCEE18]'}`}
                            >
                                {reward.popular && (
                                    <div className="absolute -top-3 right-5 bg-[#cc0000] text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                                        🔥 Best Reward
                                    </div>
                                )}
                                <div className="text-5xl mb-4">{reward.icon}</div>
                                <div className="inline-block bg-[#1A3D17] text-[#CCEE18] font-black text-xs px-4 py-1.5 rounded-full mb-3 shadow">
                                    {reward.points} Points
                                </div>
                                <h3 className="font-black text-[#1A3D17] text-base uppercase leading-tight mb-2 group-hover:text-[#cc0000] transition-colors">
                                    {reward.item}
                                </h3>
                                <p className="text-gray-400 text-sm font-medium leading-relaxed">
                                    {reward.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HOW TO USE ── */}
            <section className="py-20 bg-[#1A3D17]">
                <div className="max-w-[1280px] mx-auto px-4 text-center">
                    <span className="inline-block bg-[#CCEE18] text-[#1A3D17] font-black uppercase tracking-[0.3em] text-[10px] px-6 py-2 rounded-full mb-6">
                        Redemption Guide
                    </span>
                    <h2
                        className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6"
                        style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}
                    >
                        How to <span className="text-[#CCEE18]">Use My Points?</span>
                    </h2>
                    <p className="text-white/70 font-bold max-w-2xl mx-auto text-base leading-relaxed mb-12">
                        Redeeming your Papa Rewards® points is just as easy as earning them. When you're ready to claim a reward, simply follow these three steps at checkout. No complicated forms, no waiting — just free food from your favorite{' '}
                        <Link href="/menus-prices" className="text-[#CCEE18] underline font-bold hover:text-white">
                            Papa John's menu
                        </Link>
                        .
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-14">
                        {[
                            {
                                icon: '🛒',
                                title: 'Add Reward to Cart',
                                desc: 'Pick any item from our rewards catalogue and add it directly to your cart alongside your regular order.',
                            },
                            {
                                icon: '💳',
                                title: 'Apply at Checkout',
                                desc: 'On the payment screen, select "Redeem Points." Your balance updates instantly — no coupon codes needed.',
                            },
                            {
                                icon: '🎉',
                                title: 'Enjoy Free Food!',
                                desc: 'Your reward item appears in your order at $0 cost. Enjoy completely free food on us — every single time!',
                            },
                        ].map((tip) => (
                            <div key={tip.title} className="bg-white/10 hover:bg-white/20 transition-colors rounded-3xl p-8 border border-white/10">
                                <div className="text-4xl mb-4">{tip.icon}</div>
                                <h3 className="font-black text-[#CCEE18] uppercase text-base mb-3">{tip.title}</h3>
                                <p className="text-white/70 text-sm font-medium leading-relaxed">{tip.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-block bg-[#CCEE18] hover:bg-white text-[#1A3D17] font-black py-4 px-12 rounded-full transition-all uppercase tracking-widest text-xs shadow-xl active:scale-95"
                        >
                            Join Papa Rewards® Free
                        </Link>
                        <Link
                            href="/menus-prices"
                            className="inline-block bg-white/10 hover:bg-white/20 border border-white/30 text-white font-black py-4 px-12 rounded-full transition-all uppercase tracking-widest text-xs"
                        >
                            Browse Full Menu
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="py-20 bg-white">
                <div className="max-w-[900px] mx-auto px-4">
                    <div className="text-center mb-14">
                        <span className="inline-block bg-[#1A3D17]/10 text-[#1A3D17] font-black uppercase tracking-[0.3em] text-[10px] px-6 py-2 rounded-full mb-4">
                            Common Questions
                        </span>
                        <h2
                            className="text-3xl md:text-5xl font-black text-[#1A3D17] uppercase tracking-tighter"
                            style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}
                        >
                            Papa Rewards® <span className="text-[#cc0000]">FAQ</span>
                        </h2>
                    </div>
                    <div className="space-y-5">
                        {[
                            {
                                q: 'How quickly do points appear in my account?',
                                a: 'Points are credited to your Papa Rewards® account within 24 hours of a completed and delivered order.',
                            },
                            {
                                q: 'Do Papa Rewards® points expire?',
                                a: 'Yes, points expire after 12 months of account inactivity. Make sure to place at least one order per year to keep your balance active.',
                            },
                            {
                                q: 'Can I use points on delivery and carryout orders?',
                                a: 'Absolutely! Papa Rewards® points can be redeemed on both delivery and carryout orders placed through our website or app.',
                            },
                            {
                                q: 'Can I earn points on discounted or coupon orders?',
                                a: 'Points are earned on the net order total after discounts. Browse our latest offers on the full menu page.',
                            },
                            {
                                q: 'Is there a limit to how many points I can earn?',
                                a: 'There is no cap on points earning! The more you order, the more you earn. High spenders reach Large Pizza rewards much faster.',
                            },
                        ].map((faq, i) => (
                            <div key={i} className="bg-[#fcfaf8] hover:bg-[#1A3D17] group transition-colors duration-300 p-7 rounded-3xl shadow-sm border border-gray-100">
                                <div className="flex items-start gap-5">
                                    <div className="w-10 h-10 shrink-0 bg-[#CCEE18] text-[#1A3D17] rounded-full flex items-center justify-center font-black text-lg shadow-inner">
                                        ?
                                    </div>
                                    <div>
                                        <h3 className="font-black text-gray-900 group-hover:text-white transition-colors mb-2 text-base leading-snug">
                                            {faq.q}
                                        </h3>
                                        <p className="text-gray-500 group-hover:text-gray-300 transition-colors text-sm leading-relaxed font-medium">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── LEGAL DISCLAIMER ── */}
            <section className="py-10 bg-[#fcfaf8]">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <p className="text-gray-400 text-xs font-medium leading-relaxed">
                        *Papa Rewards® points are earned on qualifying orders only. Points expire after 12 months of inactivity. Rewards are non-transferable and cannot be exchanged for cash. Papa John's USA reserves the right to modify or terminate the program at any time without prior notice. Read our full{' '}
                        <Link href="/terms" className="text-[#cc0000] underline font-bold">
                            Terms & Conditions
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy-policy" className="text-[#cc0000] underline font-bold">
                            Privacy Policy
                        </Link>{' '}
                        for complete details.
                    </p>
                </div>
            </section>
        </div>
    );
}
