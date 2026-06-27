import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Papa Johns Nutrition Guide 2026 | Calories & Allergens',
    description:
        'Start here for Papa Johns calories, allergen notes, gluten-free information, and nutrition planning links from PapaJohns-Menus.us.',
    alternates: {
        canonical: 'https://papajohns-menus.us/nutrition',
    },
};

const nutritionLinks = [
    {
        title: 'Full Nutrition Guide',
        href: '/posts/papa-johns-nutrition-guide',
        desc: 'Calories, allergens, pizza slices, sides, desserts, and practical ordering notes.',
    },
    {
        title: 'Gluten-Free Guide',
        href: '/posts/papa-johns-gluten-free-guide',
        desc: 'Shared-kitchen cross-contact notes and what to ask before ordering gluten-free crust.',
    },
    {
        title: 'Drinks Nutrition',
        href: '/drinks#nutrition',
        desc: 'Compare drink sizes, calories, sugar notes, and pizza pairing information.',
    },
    {
        title: 'Full Menu Prices',
        href: '/menus-prices',
        desc: 'Browse Papa Johns menu items with prices before checking detailed nutrition notes.',
    },
];

export default function NutritionPage() {
    return (
        <main className="bg-[#fcfaf8] text-[#1A3D17]">
            <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
                <div className="max-w-3xl">
                    <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#CCEE18] px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#1A3D17]">
                        <ShieldCheck size={16} strokeWidth={3} />
                        Nutrition & Allergens
                    </p>
                    <h1 className="mb-6 text-4xl font-black uppercase leading-tight tracking-normal md:text-6xl">
                        Papa Johns Nutrition Guide
                    </h1>
                    <p className="text-lg font-semibold leading-8 text-gray-600 md:text-xl">
                        Use this page as a quick starting point for calories, allergens, gluten-free notes, drink nutrition,
                        and menu planning. Always confirm final nutrition and allergen details with the official Papa Johns
                        checkout or store before ordering.
                    </p>
                </div>

                <div className="mt-12 grid gap-5 md:grid-cols-2">
                    {nutritionLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="group flex min-h-44 flex-col justify-between rounded-lg border border-gray-200 bg-white p-7 shadow-sm transition-colors hover:border-[#CCEE18]"
                        >
                            <div>
                                <h2 className="mb-3 text-2xl font-black uppercase text-[#1A3D17] group-hover:text-[#cc0000]">
                                    {link.title}
                                </h2>
                                <p className="font-semibold leading-7 text-gray-600">{link.desc}</p>
                            </div>
                            <span className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#cc0000]">
                                Read More <ArrowRight size={16} />
                            </span>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
