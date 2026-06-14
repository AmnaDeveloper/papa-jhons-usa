"use client";

import Link from "next/link";
import {
    ArrowRight,
    Baby,
    ClipboardList,
    Pizza,
    ShieldCheck,
    Sparkles,
    Users,
    Utensils,
} from "lucide-react";

const picks = [
    {
        label: "Safe Bet",
        title: "The Works",
        href: "/posts/classic-pizzas",
        bestFor: "Mixed appetites",
        note: "The loaded pizza that usually ends the fewest arguments.",
    },
    {
        label: "Picky Eaters",
        title: "Build Your Own",
        href: "/menus-prices",
        bestFor: "Cheese and pepperoni kids",
        note: "Simple, predictable, and surprisingly powerful when kids get to choose.",
    },
    {
        label: "Big Appetites",
        title: "Epic Stuffed Crust",
        href: "/posts/papa-johns-stuffed-crust-pizza",
        bestFor: "Teenagers and hungry adults",
        note: "The crust gets eaten too, which matters when everyone is actually hungry.",
    },
    {
        label: "Different Tonight",
        title: "BBQ Chicken Bacon",
        href: "/posts/papa-johns-bbq-chicken-bacon-pizza",
        bestFor: "Families bored of pepperoni",
        note: "Saucy, different, and still familiar enough for most tables.",
    },
];

const faqs = [
    {
        q: "What's the best Papa Johns pizza for a family with picky eaters?",
        a: "A simple build-your-own cheese or pepperoni pizza tends to work best for picky eaters, since it avoids the toppings that often cause complaints. Pairing it with a more loaded pizza like The Works for the rest of the family is a good middle ground.",
    },
    {
        q: "Is stuffed crust worth it for families?",
        a: "If your family includes teenagers or bigger appetites, stuffed crust can make the meal go further since people are more likely to eat the entire slice, including the crust. For smaller portions or younger kids, regular crust is usually fine.",
    },
    {
        q: "Should I order sides for a family pizza order?",
        a: "Yes — adding breadsticks or cheesesticks to a larger family order can help stretch the meal further, often working out more cost-effective per person than ordering an additional pizza.",
    },
];

export default function FamilyPizzaClient() {
    return (
        <div className="min-h-screen bg-[#fffaf3] text-[#143414]">
            <header className="bg-[#143414] text-white px-4 pt-16 pb-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,#ffffff_0_1px,transparent_1px_80px),linear-gradient(0deg,#ffffff_0_1px,transparent_1px_80px)] pointer-events-none"></div>
                <div className="max-w-6xl mx-auto relative z-10">
                    <nav className="flex flex-wrap items-center gap-2 text-xs font-black uppercase text-white/60 mb-10">
                        <Link href="/" className="hover:text-[#CCEE18] transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/posts" className="hover:text-[#CCEE18] transition-colors">Guides</Link>
                        <span>/</span>
                        <span className="text-white">Family Pizza Guide</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-7">
                            <span className="inline-flex items-center gap-2 bg-[#CCEE18] text-[#143414] text-xs font-black uppercase px-4 py-2 rounded-full mb-6">
                                <Users size={15} /> Menu Guides
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black uppercase leading-[0.95]" style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}>
                                Best Papa Johns Pizzas for Families
                                <span className="block text-[#CCEE18] mt-2">What&apos;s Actually Worth Ordering</span>
                            </h1>
                            <p className="text-lg md:text-xl text-white/80 font-bold leading-relaxed mt-6 max-w-2xl">
                                Written by Sarah Jenkins — Editor in Chief. A practical family-night guide for picky eaters, big appetites, bored-of-pepperoni nights, and orders that need to stretch further.
                            </p>
                            <div className="flex flex-wrap gap-3 mt-8">
                                <Link href="/store-locator" className="inline-flex items-center gap-2 bg-[#CCEE18] text-[#143414] font-black text-xs uppercase px-6 py-4 rounded-full hover:bg-white transition-colors">
                                    Find a Store <ArrowRight size={14} />
                                </Link>
                                <Link href="/coupons" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-black text-xs uppercase px-6 py-4 rounded-full hover:border-[#CCEE18] transition-colors">
                                    Check Deals <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="bg-white rounded-[1.75rem] p-4 shadow-2xl rotate-1">
                                <div className="rounded-[1.25rem] overflow-hidden bg-[#f7f4ee] border border-black/10">
                                    <img
                                        src="/classic-pizzas.png"
                                        alt="Papa Johns family pizza order with classic pizzas"
                                        className="w-full aspect-square object-cover"
                                    />
                                </div>
                                <div className="grid grid-cols-3 gap-2 mt-3">
                                    <div className="bg-[#143414] text-white rounded-2xl p-4">
                                        <Baby className="text-[#CCEE18] mb-2" size={18} />
                                        <p className="text-xs font-black uppercase">Picky Kids</p>
                                    </div>
                                    <div className="bg-[#cc0000] text-white rounded-2xl p-4">
                                        <Pizza className="text-white mb-2" size={18} />
                                        <p className="text-xs font-black uppercase">Big Slices</p>
                                    </div>
                                    <div className="bg-[#CCEE18] text-[#143414] rounded-2xl p-4">
                                        <Utensils className="mb-2" size={18} />
                                        <p className="text-xs font-black uppercase">Sides Help</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-14">
                <section className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-12">
                    {picks.map((pick) => (
                        <Link key={pick.title} href={pick.href} className="group bg-white border border-black/5 rounded-[1.25rem] p-5 shadow-sm hover:shadow-lg hover:border-[#cc0000] transition-all">
                            <span className="text-[10px] font-black uppercase text-[#cc0000]">{pick.label}</span>
                            <h2 className="text-xl font-black uppercase mt-2 group-hover:text-[#cc0000] transition-colors">{pick.title}</h2>
                            <p className="text-xs font-black uppercase text-[#143414]/50 mt-1">{pick.bestFor}</p>
                            <p className="text-sm text-gray-600 font-bold leading-relaxed mt-4">{pick.note}</p>
                        </Link>
                    ))}
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <aside className="lg:col-span-4 lg:sticky lg:top-8 self-start space-y-5">
                        <div className="bg-[#143414] text-white rounded-[1.5rem] p-6 shadow-xl">
                            <h2 className="text-lg font-black uppercase mb-5 flex items-center gap-2">
                                <ClipboardList className="text-[#CCEE18]" size={20} /> Family Order Map
                            </h2>
                            <div className="space-y-3 text-sm font-bold text-white/80">
                                <a href="#safe-bet" className="flex justify-between hover:text-[#CCEE18]">Safe Bet <ArrowRight size={14} /></a>
                                <a href="#picky-eaters" className="flex justify-between hover:text-[#CCEE18]">Picky Eaters <ArrowRight size={14} /></a>
                                <a href="#big-appetites" className="flex justify-between hover:text-[#CCEE18]">Bigger Appetites <ArrowRight size={14} /></a>
                                <a href="#different-night" className="flex justify-between hover:text-[#CCEE18]">Something Different <ArrowRight size={14} /></a>
                                <a href="#sides" className="flex justify-between hover:text-[#CCEE18]">Sides Strategy <ArrowRight size={14} /></a>
                                <a href="#family-four" className="flex justify-between hover:text-[#CCEE18]">Family of Four <ArrowRight size={14} /></a>
                            </div>
                        </div>

                        <div className="bg-white rounded-[1.5rem] p-6 border border-black/5 shadow-sm">
                            <h2 className="text-lg font-black uppercase flex items-center gap-2 mb-3">
                                <ShieldCheck className="text-[#cc0000]" size={20} /> Sarah&apos;s Rule
                            </h2>
                            <p className="text-gray-600 font-bold leading-relaxed text-sm">
                                Do not make one pizza solve every family argument. Order one safe option, one flexible option, and one side that stretches the meal.
                            </p>
                        </div>
                    </aside>

                    <article className="lg:col-span-8 space-y-8">
                        <section className="bg-white rounded-[1.5rem] p-7 md:p-9 border border-black/5 shadow-sm space-y-5">
                            <p className="text-lg text-gray-700 font-bold leading-relaxed">
                                I have three kids, and if you&apos;ve ever tried to order pizza for a family where one person is &quot;allergic to vegetables&quot; (he&apos;s not, he&apos;s six), another only eats the crust, and your partner wants something with actual flavor on it — you know that ordering family pizza is basically a small negotiation every single time.
                            </p>
                            <p className="text-lg text-gray-700 font-bold leading-relaxed">
                                I&apos;ve ordered from Papa Johns more times than I&apos;d like to admit while researching this site, and a few things have become pretty clear about which pizzas actually hold up for a table full of different appetites and which ones look great on the menu photo but disappear in two bites because everyone wanted &quot;just one slice&quot; of it.
                            </p>
                            <p className="text-lg text-gray-700 font-bold leading-relaxed">
                                Here&apos;s what I&apos;d actually order if I were feeding a family tonight.
                            </p>
                        </section>

                        <section id="safe-bet" className="bg-white rounded-[1.5rem] p-7 md:p-9 border border-black/5 shadow-sm space-y-5">
                            <span className="inline-flex items-center gap-2 bg-[#CCEE18] text-[#143414] text-xs font-black uppercase px-4 py-2 rounded-full">
                                <Sparkles size={14} /> The Safe Bet
                            </span>
                            <h2 className="text-3xl font-black uppercase">The Works</h2>
                            <p className="text-gray-700 font-bold leading-relaxed">
                                If you&apos;re not sure what anyone wants — and let&apos;s be real, that&apos;s most weeknights — The Works is the pizza that ends the fewest arguments. Pepperoni, sausage, onions, green peppers, mushrooms, and black olives all on one pie means there&apos;s something for almost everyone, and the kids who don&apos;t like a topping can just pick it off (which, yes, they will do, all over the table, but that&apos;s a different problem).
                            </p>
                            <p className="text-gray-700 font-bold leading-relaxed">
                                The downside? If you&apos;ve got a picky eater who treats vegetables like they&apos;re personally offensive, The Works might end up being &quot;the pizza with the weird stuff on it&quot; in their world. For that situation, I&apos;d pair it with one smaller plain cheese or pepperoni pizza on the side rather than trying to make one pizza do everything.
                            </p>
                        </section>

                        <section id="picky-eaters" className="bg-white rounded-[1.5rem] p-7 md:p-9 border border-black/5 shadow-sm space-y-5">
                            <h2 className="text-3xl font-black uppercase">For Picky Eaters: Build Your Own, Keep It Simple</h2>
                            <p className="text-gray-700 font-bold leading-relaxed">
                                I know &quot;create your own&quot; feels like the boring choice, and in a way it is — but that&apos;s actually the point. When my youngest goes through phases where literally anything green on a pizza is treated like an attack, a simple cheese or pepperoni build-your-own means nobody&apos;s having a meltdown at the dinner table.
                            </p>
                            <p className="text-gray-700 font-bold leading-relaxed">
                                The thing I&apos;d add here: don&apos;t underestimate how much a kid&apos;s mood can be saved by just letting them &quot;choose&quot; their own pizza, even if it&apos;s basically the same as what you&apos;d order anyway. My daughter went from refusing pizza night entirely to genuinely excited about it just because she got to &quot;pick the toppings&quot; — which were cheese and, fine, more cheese.
                            </p>
                        </section>

                        <section id="big-appetites" className="bg-white rounded-[1.5rem] p-7 md:p-9 border border-black/5 shadow-sm space-y-5">
                            <h2 className="text-3xl font-black uppercase">For Bigger Appetites: Epic Stuffed Crust</h2>
                            <p className="text-gray-700 font-bold leading-relaxed">
                                If you&apos;ve got teenagers, or honestly any adult who considers two regular slices a &quot;starter,&quot; the stuffed crust pizzas hit different. The cheese baked into the crust edge means even the part of the pizza people usually leave behind (the crust) actually gets eaten — which, from a &quot;did everyone get enough food&quot; standpoint, matters more than you&apos;d think.
                            </p>
                            <p className="text-gray-700 font-bold leading-relaxed">
                                I&apos;d lean toward the Epic Stuffed Crust Pepperoni for families specifically because pepperoni is about as close to a universally accepted topping as you&apos;re going to get. Cheese-only stuffed crust is good too, but if you&apos;re already paying the upcharge for stuffed crust, pepperoni gives you more flavor per dollar in my opinion.
                            </p>
                        </section>

                        <section id="different-night" className="bg-white rounded-[1.5rem] p-7 md:p-9 border border-black/5 shadow-sm space-y-5">
                            <h2 className="text-3xl font-black uppercase">For the &quot;We Want Something Different Tonight&quot; Nights</h2>
                            <p className="text-gray-700 font-bold leading-relaxed">
                                Every family has those nights where pizza is on the table but everyone&apos;s a little bored of the usual order. This is where I&apos;d actually recommend trying one of the specialty pizzas — BBQ Chicken Bacon or Fiery Buffalo Chicken tend to be a hit if your family likes a bit of sauce variety, though I&apos;d keep the buffalo one on the milder side of expectations if you&apos;ve got younger kids at the table. It&apos;s not &quot;spicy&quot; in a scary way, but it&apos;s noticeably different from a plain cheese pizza, and some younger kids notice that difference immediately and aren&apos;t fans.
                            </p>
                            <p className="text-gray-700 font-bold leading-relaxed">
                                If your family leans more toward &quot;let&apos;s try something new but nothing too adventurous,&quot; Super Hawaiian (ham and pineapple) is honestly a safer bet than people expect. I was surprised how often it ends up being the first pizza gone at gatherings — there&apos;s something about the sweet-and-savory combo that works for a wider range of ages than I initially assumed.
                            </p>
                        </section>

                        <section id="sides" className="bg-[#143414] text-white rounded-[1.5rem] p-7 md:p-9 shadow-xl space-y-5">
                            <h2 className="text-3xl font-black uppercase">Don&apos;t Skip the Sides — They Stretch the Meal Further</h2>
                            <p className="text-white/80 font-bold leading-relaxed">
                                Here&apos;s something I didn&apos;t think about enough before researching this: adding a side of breadsticks or cheesesticks to a family order isn&apos;t just &quot;extra food,&quot; it actually changes how far the pizza goes. If you&apos;re feeding four or more people, one extra pizza-sized item (sides count) means everyone gets a bit more without needing to order a whole additional pizza, which usually works out cheaper per person than scaling up pizza size alone.
                            </p>
                            <p className="text-white/80 font-bold leading-relaxed">
                                Garlic Parmesan Breadsticks specifically tend to disappear fast in my house — faster than I&apos;d like to admit, honestly. If you&apos;re ordering for a family gathering rather than just your immediate household, I&apos;d budget for at least one side per three to four people.
                            </p>
                            <Link href="/posts/sides" className="inline-flex items-center gap-2 bg-[#CCEE18] text-[#143414] font-black text-xs uppercase px-5 py-3 rounded-full">
                                Compare Sides <ArrowRight size={14} />
                            </Link>
                        </section>

                        <section id="family-four" className="bg-white rounded-[1.5rem] p-7 md:p-9 border border-black/5 shadow-sm space-y-5">
                            <h2 className="text-3xl font-black uppercase">What I&apos;d Personally Order for a Family of Four</h2>
                            <p className="text-gray-700 font-bold leading-relaxed">
                                If you put me on the spot and asked what I&apos;d actually order tonight for my own family, here&apos;s roughly where I&apos;d land: one Large The Works (because it covers the most ground), one Large Build Your Own Cheese or Pepperoni (for the picky ones), and a side of Garlic Parmesan Breadsticks. That combination has worked for us more often than not, and leftovers — if there are any — tend to get eaten the next day without complaint, which in my house is basically the highest compliment a meal can get.
                            </p>
                        </section>

                        <section className="bg-[#cc0000] text-white rounded-[1.5rem] p-7 md:p-9 shadow-xl space-y-5">
                            <h2 className="text-3xl font-black uppercase">The Bottom Line</h2>
                            <p className="text-white/85 font-bold leading-relaxed">
                                There&apos;s no single &quot;best family pizza&quot; because every family&apos;s idea of a good dinner looks different. But if I had to generalize: go for variety over trying to please everyone with one pizza. A combination of one &quot;safe&quot; option and one &quot;everyone can build their own&quot; option tends to cause a lot less friction at the table than betting everything on one specialty pizza that half the family won&apos;t touch.
                            </p>
                        </section>

                        <section id="faq" className="bg-white rounded-[1.5rem] p-7 md:p-9 border border-black/5 shadow-sm">
                            <span className="inline-flex bg-[#cc0000]/10 text-[#cc0000] text-xs font-black uppercase px-4 py-2 rounded-full mb-5">
                                Frequently Asked Questions
                            </span>
                            <h2 className="text-3xl font-black uppercase mb-6">Family Pizza FAQs</h2>
                            <div className="space-y-5">
                                {faqs.map((faq) => (
                                    <div key={faq.q} className="border-b border-gray-100 pb-5">
                                        <h3 className="text-lg font-black text-[#143414]">{faq.q}</h3>
                                        <p className="text-gray-600 font-bold leading-relaxed mt-2">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-white rounded-[1.5rem] p-7 md:p-9 border border-black/5 shadow-sm">
                            <h2 className="text-2xl font-black uppercase mb-4">Keep Reading</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Link href="/posts/how-to-save-money-at-papa-johns" className="rounded-2xl bg-[#f7f4ee] p-5 border border-black/5 hover:border-[#cc0000] transition-colors">
                                    <span className="text-xs font-black uppercase text-[#cc0000]">Previous Guide</span>
                                    <h3 className="font-black uppercase mt-2">How to Save Money at Papa Johns</h3>
                                </Link>
                                <Link href="/posts/papa-johns-menu-prices-guide" className="rounded-2xl bg-[#f7f4ee] p-5 border border-black/5 hover:border-[#cc0000] transition-colors">
                                    <span className="text-xs font-black uppercase text-[#cc0000]">Menu Reference</span>
                                    <h3 className="font-black uppercase mt-2">Papa Johns Menu Prices Guide</h3>
                                </Link>
                            </div>
                        </section>
                    </article>
                </div>
            </main>
        </div>
    );
}
