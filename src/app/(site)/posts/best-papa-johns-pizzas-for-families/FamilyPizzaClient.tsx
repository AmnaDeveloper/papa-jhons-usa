"use client";

import Link from "next/link";
import {
    ArrowRight,
    Baby,
    ClipboardList,
    ExternalLink,
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
    {
        q: "How many large Papa Johns pizzas do I need for a family of four?",
        a: "For two adults and two younger kids, one large pizza plus a side can work. For older kids, teenagers, or anyone who wants leftovers, two large pizzas is the safer family order.",
    },
    {
        q: "What Papa Johns pizza is best for kids?",
        a: "Cheese, pepperoni, or a simple build-your-own pizza is usually best for kids because it avoids surprise toppings. If your kids are flexible, The Works can be paired with a plain pizza for balance.",
    },
    {
        q: "Is The Works good for families?",
        a: "The Works is good for mixed family appetites because it has meat and vegetables on one pizza. It is less ideal for very picky eaters, so pairing it with a plain cheese or pepperoni pizza is usually smarter.",
    },
    {
        q: "Is it cheaper to order another pizza or add sides?",
        a: "For many family orders, adding breadsticks or cheesesticks is cheaper than ordering another full pizza. If you need a full second meal or leftovers, another pizza may still be the better value.",
    },
];

const orderPlans = [
    {
        group: "2 adults + 1 young kid",
        order: "1 large cheese or pepperoni + 1 side",
        bestFor: "Small family dinner",
        note: "Works when appetites are normal and leftovers are not the goal.",
    },
    {
        group: "Family of 4",
        order: "1 large The Works + 1 large cheese or pepperoni + breadsticks",
        bestFor: "Mixed appetites",
        note: "The safest all-around order when adults want flavor and kids need a plain option.",
    },
    {
        group: "Family of 5-6",
        order: "2 large pizzas + 2 sides",
        bestFor: "Older kids or guests",
        note: "Use one simple pizza, one specialty pizza, and sides to keep everyone full.",
    },
    {
        group: "Teenagers / big appetites",
        order: "Epic Stuffed Crust Pepperoni + The Works + cheesesticks",
        bestFor: "Maximum fullness",
        note: "Stuffed crust helps because the crust actually gets eaten.",
    },
];

const sampleBundles = [
    {
        title: "Budget Family Order",
        items: "Large cheese or pepperoni + Garlic Parmesan Breadsticks",
        why: "Best when you want a predictable meal without paying for multiple specialty pizzas.",
    },
    {
        title: "Balanced Family Order",
        items: "Large The Works + Large Build Your Own Cheese or Pepperoni + breadsticks",
        why: "Covers adults, picky kids, and anyone who just wants a plain slice.",
    },
    {
        title: "Bigger Appetite Order",
        items: "Epic Stuffed Crust Pepperoni + The Works + cheesesticks",
        why: "Works for teenagers, hungry adults, or family movie nights where leftovers are welcome.",
    },
];

const officialLinks = [
    { label: "Official Papa Johns Menu", href: "https://www.papajohns.com/order/menu" },
    { label: "Official Papa Johns Deals", href: "https://www.papajohns.com/deals/" },
    { label: "Official Nutrition Info", href: "https://www.papajohns.com/nutrition/" },
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
                                Best Papa Johns Pizzas for Families{" "}
                                <span className="block text-[#CCEE18] mt-2">What&apos;s Actually Worth Ordering</span>
                            </h1>
                            <p className="text-lg md:text-xl text-white/80 font-bold leading-relaxed mt-6 max-w-2xl">
                                Written by <Link href="/team" className="text-[#CCEE18] underline underline-offset-4">Sarah Jenkins</Link> — Editor in Chief. Updated June 2026. A practical family-night guide for picky eaters, big appetites, bored-of-pepperoni nights, and orders that need to stretch further.
                            </p>
                            <p className="text-sm text-white/55 font-bold leading-relaxed mt-4 max-w-2xl">
                                Independent guide: PapaJohns-Menus.us is not affiliated with, sponsored by, or endorsed by Papa Johns International.
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
                            <p className="text-xl font-black uppercase mt-2 group-hover:text-[#cc0000] transition-colors">{pick.title}</p>
                            <p className="text-xs font-black uppercase text-[#143414]/50 mt-1">{pick.bestFor}</p>
                            <p className="text-sm text-gray-600 font-bold leading-relaxed mt-4">{pick.note}</p>
                        </Link>
                    ))}
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <aside className="lg:col-span-4 lg:sticky lg:top-8 self-start space-y-5">
                        <div className="bg-[#143414] text-white rounded-[1.5rem] p-6 shadow-xl">
                            <p className="text-lg font-black uppercase mb-5 flex items-center gap-2">
                                <ClipboardList className="text-[#CCEE18]" size={20} /> Family Order Map
                            </p>
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
                            <p className="text-lg font-black uppercase flex items-center gap-2 mb-3">
                                <ShieldCheck className="text-[#cc0000]" size={20} /> Sarah&apos;s Rule
                            </p>
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

                        <section className="bg-white rounded-[1.5rem] p-7 md:p-9 border border-black/5 shadow-sm space-y-5">
                            <span className="inline-flex items-center gap-2 bg-[#143414] text-white text-xs font-black uppercase px-4 py-2 rounded-full">
                                <ShieldCheck size={14} /> How I Picked These Pizzas
                            </span>
                            <h2 className="text-3xl font-black uppercase">The Family Test Criteria</h2>
                            <p className="text-gray-700 font-bold leading-relaxed">
                                I judged these picks by five things that matter at a real family table: picky-eater safety, whether adults still get flavor, how filling the crust is, whether leftovers hold up the next day, and whether sides help avoid buying another full pizza. Prices and availability can vary by store, so I treat this as an ordering strategy rather than a fixed national price list.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {officialLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer nofollow"
                                        className="flex items-center justify-between rounded-2xl bg-[#f7f4ee] border border-black/5 p-4 font-black text-sm text-[#143414] hover:text-[#cc0000] hover:border-[#cc0000] transition-colors"
                                    >
                                        {link.label}
                                        <ExternalLink size={15} />
                                    </a>
                                ))}
                            </div>
                        </section>

                        <section className="bg-white rounded-[1.5rem] p-7 md:p-9 border border-black/5 shadow-sm space-y-5">
                            <h2 className="text-3xl font-black uppercase">Family Size Ordering Cheat Sheet</h2>
                            <p className="text-gray-700 font-bold leading-relaxed">
                                Use this as a planning shortcut before you open the cart. It is intentionally practical, not perfect: appetite, coupons, taxes, and local menu prices can change the final answer.
                            </p>
                            <div className="overflow-x-auto rounded-2xl border border-black/10">
                                <table className="w-full min-w-[680px] text-left text-sm bg-white">
                                    <thead className="bg-[#143414] text-[#CCEE18] uppercase">
                                        <tr>
                                            <th className="p-4">Family / Group</th>
                                            <th className="p-4">Recommended Order</th>
                                            <th className="p-4">Best For</th>
                                            <th className="p-4">Why It Works</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orderPlans.map((plan, idx) => (
                                            <tr key={plan.group} className={idx % 2 === 0 ? "border-b border-gray-100" : "border-b border-gray-100 bg-[#fffaf3]"}>
                                                <td className="p-4 font-black text-[#143414]">{plan.group}</td>
                                                <td className="p-4 font-bold text-gray-700">{plan.order}</td>
                                                <td className="p-4 font-bold text-[#cc0000]">{plan.bestFor}</td>
                                                <td className="p-4 font-medium text-gray-600">{plan.note}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="safe-bet" className="bg-white rounded-[1.5rem] p-7 md:p-9 border border-black/5 shadow-sm space-y-5">
                            <span className="inline-flex items-center gap-2 bg-[#CCEE18] text-[#143414] text-xs font-black uppercase px-4 py-2 rounded-full">
                                <Sparkles size={14} /> The Safe Bet
                            </span>
                            <h2 className="text-3xl font-black uppercase">The Works</h2>
                            <p className="text-gray-700 font-bold leading-relaxed">
                                If you&apos;re not sure what anyone wants — and let&apos;s be real, that&apos;s most weeknights — <Link href="/posts/classic-pizzas" className="text-[#cc0000] underline font-black">The Works</Link> is the pizza that ends the fewest arguments. Pepperoni, sausage, onions, green peppers, mushrooms, and black olives all on one pie means there&apos;s something for almost everyone, and the kids who don&apos;t like a topping can just pick it off (which, yes, they will do, all over the table, but that&apos;s a different problem).
                            </p>
                            <p className="text-gray-700 font-bold leading-relaxed">
                                The downside? If you&apos;ve got a picky eater who treats vegetables like they&apos;re personally offensive, The Works might end up being &quot;the pizza with the weird stuff on it&quot; in their world. For that situation, I&apos;d pair it with one smaller plain cheese or pepperoni pizza on the side rather than trying to make one pizza do everything.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                <div className="bg-[#fffaf3] rounded-2xl p-4 border border-black/5">
                                    <p className="text-xs font-black uppercase text-[#cc0000]">Best For</p>
                                    <p className="text-sm font-bold text-gray-700 mt-1">Mixed appetites and flexible kids</p>
                                </div>
                                <div className="bg-[#fffaf3] rounded-2xl p-4 border border-black/5">
                                    <p className="text-xs font-black uppercase text-[#cc0000]">Avoid If</p>
                                    <p className="text-sm font-bold text-gray-700 mt-1">Visible vegetables cause complaints</p>
                                </div>
                                <div className="bg-[#fffaf3] rounded-2xl p-4 border border-black/5">
                                    <p className="text-xs font-black uppercase text-[#cc0000]">Pair With</p>
                                    <p className="text-sm font-bold text-gray-700 mt-1">Cheese or pepperoni pizza</p>
                                </div>
                            </div>
                        </section>

                        <section id="picky-eaters" className="bg-white rounded-[1.5rem] p-7 md:p-9 border border-black/5 shadow-sm space-y-5">
                            <h2 className="text-3xl font-black uppercase">For Picky Eaters: Build Your Own, Keep It Simple</h2>
                            <p className="text-gray-700 font-bold leading-relaxed">
                                I know &quot;create your own&quot; feels like the boring choice, and in a way it is — but that&apos;s actually the point. When my youngest goes through phases where literally anything green on a pizza is treated like an attack, a simple cheese or pepperoni build-your-own means nobody&apos;s having a meltdown at the dinner table.
                            </p>
                            <p className="text-gray-700 font-bold leading-relaxed">
                                The thing I&apos;d add here: don&apos;t underestimate how much a kid&apos;s mood can be saved by just letting them &quot;choose&quot; their own pizza, even if it&apos;s basically the same as what you&apos;d order anyway. My daughter went from refusing pizza night entirely to genuinely excited about it just because she got to &quot;pick the toppings&quot; — which were cheese and, fine, more cheese.
                            </p>
                            <p className="text-gray-700 font-bold leading-relaxed">
                                The safest builds are cheese, pepperoni, half cheese and half pepperoni, or light sauce if your kids are sauce-sensitive. If you need a baseline before ordering, compare the classic options in our <Link href="/menus-prices/pepperoni-pizza" className="text-[#cc0000] underline font-black">pepperoni pizza guide</Link> and <Link href="/menus-prices" className="text-[#cc0000] underline font-black">menu prices page</Link>.
                            </p>
                        </section>

                        <section id="big-appetites" className="bg-white rounded-[1.5rem] p-7 md:p-9 border border-black/5 shadow-sm space-y-5">
                            <h2 className="text-3xl font-black uppercase">For Bigger Appetites: Epic Stuffed Crust</h2>
                            <p className="text-gray-700 font-bold leading-relaxed">
                                If you&apos;ve got teenagers, or honestly any adult who considers two regular slices a &quot;starter,&quot; the stuffed crust pizzas hit different. The cheese baked into the crust edge means even the part of the pizza people usually leave behind (the crust) actually gets eaten — which, from a &quot;did everyone get enough food&quot; standpoint, matters more than you&apos;d think.
                            </p>
                            <p className="text-gray-700 font-bold leading-relaxed">
                                I&apos;d lean toward the <Link href="/posts/papa-johns-stuffed-crust-pizza" className="text-[#cc0000] underline font-black">Epic Stuffed Crust Pepperoni</Link> for families specifically because pepperoni is about as close to a universally accepted topping as you&apos;re going to get. Cheese-only stuffed crust is good too, but if you&apos;re already paying the upcharge for stuffed crust, pepperoni gives you more flavor per dollar in my opinion.
                            </p>
                            <p className="text-gray-700 font-bold leading-relaxed">
                                This is less necessary for younger kids who eat smaller portions. It becomes more worth it when your family usually leaves crusts behind or when teenagers are treating regular slices like appetizers.
                            </p>
                        </section>

                        <section id="different-night" className="bg-white rounded-[1.5rem] p-7 md:p-9 border border-black/5 shadow-sm space-y-5">
                            <h2 className="text-3xl font-black uppercase">For the &quot;We Want Something Different Tonight&quot; Nights</h2>
                            <p className="text-gray-700 font-bold leading-relaxed">
                                Every family has those nights where pizza is on the table but everyone&apos;s a little bored of the usual order. This is where I&apos;d actually recommend trying one of the specialty pizzas — <Link href="/posts/papa-johns-bbq-chicken-bacon-pizza" className="text-[#cc0000] underline font-black">BBQ Chicken Bacon</Link> or Fiery Buffalo Chicken tend to be a hit if your family likes a bit of sauce variety, though I&apos;d keep the buffalo one on the milder side of expectations if you&apos;ve got younger kids at the table. It&apos;s not &quot;spicy&quot; in a scary way, but it&apos;s noticeably different from a plain cheese pizza, and some younger kids notice that difference immediately and aren&apos;t fans.
                            </p>
                            <p className="text-gray-700 font-bold leading-relaxed">
                                If your family leans more toward &quot;let&apos;s try something new but nothing too adventurous,&quot; Super Hawaiian (ham and pineapple) is honestly a safer bet than people expect. I was surprised how often it ends up being the first pizza gone at gatherings — there&apos;s something about the sweet-and-savory combo that works for a wider range of ages than I initially assumed.
                            </p>
                            <div className="rounded-2xl bg-[#fffaf3] border border-black/5 p-5">
                                <p className="text-sm font-black uppercase text-[#cc0000] mb-2">Kid-risk rating</p>
                                <p className="text-sm text-gray-700 font-bold leading-relaxed">
                                    BBQ Chicken Bacon is medium-safe for families that like sweet sauce. Buffalo-style pizzas are higher risk for younger kids. Hawaiian-style pizzas are polarizing, but they can work well when your family likes sweet-and-savory flavors.
                                </p>
                            </div>
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
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {sampleBundles.map((bundle) => (
                                    <div key={bundle.title} className="bg-[#fffaf3] rounded-2xl p-5 border border-black/5">
                                        <p className="text-sm font-black uppercase text-[#cc0000]">{bundle.title}</p>
                                        <p className="text-sm font-black text-[#143414] mt-3">{bundle.items}</p>
                                        <p className="text-sm font-bold text-gray-600 leading-relaxed mt-3">{bundle.why}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-gray-500 font-bold leading-relaxed">
                                Price note: use these as order combinations, not fixed prices. Store pricing, taxes, delivery fees, and active coupons can change the final total.
                            </p>
                        </section>

                        <section className="bg-white rounded-[1.5rem] p-7 md:p-9 border border-black/5 shadow-sm space-y-5">
                            <h2 className="text-3xl font-black uppercase">What I Would Not Order as the Only Family Pizza</h2>
                            <p className="text-gray-700 font-bold leading-relaxed">
                                I would not make one spicy, sauce-heavy, or vegetable-heavy specialty pizza carry the entire meal unless I already knew everyone at the table liked it. Those pizzas can be great as the adult or adventurous option, but they are risky as the only pizza for kids or mixed appetites.
                            </p>
                            <p className="text-gray-700 font-bold leading-relaxed">
                                If your family has allergies, dietary restrictions, or calorie goals, check the official nutrition page and our <Link href="/posts/papa-johns-nutrition-guide" className="text-[#cc0000] underline font-black">Papa Johns nutrition guide</Link> before placing the order.
                            </p>
                        </section>

                        <section className="bg-[#cc0000] text-white rounded-[1.5rem] p-7 md:p-9 shadow-xl space-y-5">
                            <h2 className="text-3xl font-black uppercase">The Bottom Line</h2>
                            <p className="text-white/85 font-bold leading-relaxed">
                                There&apos;s no single &quot;best family pizza&quot; because every family&apos;s idea of a good dinner looks different. But if I had to generalize: go for variety over trying to please everyone with one pizza. A combination of one &quot;safe&quot; option and one &quot;everyone can build their own&quot; option tends to cause a lot less friction at the table than betting everything on one specialty pizza that half the family won&apos;t touch.
                            </p>
                            <p className="text-white/85 font-bold leading-relaxed">
                                For most families, start with one safe cheese or pepperoni pizza, add one flavor-forward pizza for the adults or adventurous eaters, then use sides to stretch the order instead of guessing whether one more full pizza is necessary.
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
