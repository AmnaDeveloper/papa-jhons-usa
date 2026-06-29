'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useMemo, useState } from 'react';

import menuData from '../../data/menu-items.json';
import postsData from '../../data/posts.json';

const topLeftLinks = [
    { name: 'Blogs', href: '/posts' },
    { name: 'Coupons', href: '/coupons' },
    { name: 'Contact', href: '/contact' },
];

const topRightLinks = [
    { name: 'About', href: '/about' },
    { name: 'Privacy', href: '/privacy-policy' },
];

const menuItems = [
    { name: 'Classic Pizzas', href: '/posts/classic-pizzas' },
    { name: 'Super Loaded', href: '/posts/super-loaded' },
    { name: 'Sides', href: '/posts/sides' },
    { name: 'Drinks', href: '/drinks' },
    { name: 'Desserts', href: '/posts/papa-johns-desserts' },
    { name: 'Papa Rewards', href: '/papa-johns-rewards' },
];

const mainLinks = [
    { name: 'Deals & Coupons', href: '/coupons' },
    { name: 'All Blogs', href: '/posts' },
    { name: 'Store Locator', href: '/store-locator' },
    { name: 'About', href: '/about' },
];

type SearchItem = {
    title: string;
    href: string;
    category: string;
    keywords: string;
};

type ScoredSearchItem = SearchItem & {
    score: number;
};

const staticSearchItems: SearchItem[] = [
    { title: 'Home', href: '/', category: 'Page', keywords: 'home papa johns menu deals prices' },
    { title: 'Full Menu & Prices', href: '/menus-prices', category: 'Menu', keywords: 'menu prices pizza sides drinks desserts papadias' },
    { title: 'Nutrition Guide', href: '/posts/papa-johns-nutrition-guide', category: 'Guide', keywords: 'nutrition calories allergens food facts' },
    { title: 'Deals & Coupons', href: '/coupons', category: 'Deals', keywords: 'coupons deals promo codes discounts' },
    { title: 'Store Locator', href: '/store-locator', category: 'Store', keywords: 'store locator near me locations delivery carryout' },
    { title: 'Papa Rewards', href: '/papa-johns-rewards', category: 'Rewards', keywords: 'rewards papa dough points loyalty' },
    { title: 'Contact', href: '/contact', category: 'Page', keywords: 'contact support corrections' },
    { title: 'About', href: '/about', category: 'Page', keywords: 'about team editorial' },
];

const searchItems: SearchItem[] = [
    ...staticSearchItems,
    ...menuItems.map((item) => ({
        title: item.name,
        href: item.href,
        category: 'Menu Category',
        keywords: `${item.name} papa johns menu prices`,
    })),
    ...(menuData as Array<{ title: string; slug: string; category?: string; description?: string }>).map((item) => ({
        title: item.title,
        href: item.slug === 'drinks' ? '/drinks' : `/menus-prices/${item.slug}`,
        category: item.category || 'Menu Item',
        keywords: `${item.title} ${item.category || ''} ${item.description || ''}`,
    })),
    ...(postsData as Array<{ title: string; slug: string; category?: string; excerpt?: string }>).map((post) => ({
        title: post.title,
        href: post.slug === 'best-pizza-delivery-near-me' ? `/${post.slug}` : `/posts/${post.slug}`,
        category: post.category || 'Blog',
        keywords: `${post.title} ${post.category || ''} ${post.excerpt || ''}`,
    })),
];

function getSearchResults(query: string): ScoredSearchItem[] {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
        return [];
    }

    return searchItems
        .map((item) => {
            const title = item.title.toLowerCase();
            const haystack = `${item.title} ${item.category} ${item.keywords}`.toLowerCase();
            const startsWithTitle = title.startsWith(normalized);
            const includesTitle = title.includes(normalized);
            const includesKeywords = haystack.includes(normalized);

            if (!includesKeywords) {
                return null;
            }

            return {
                ...item,
                score: startsWithTitle ? 3 : includesTitle ? 2 : 1,
            };
        })
        .filter((item): item is ScoredSearchItem => item !== null)
        .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
        .slice(0, 8);
}

export default function Header() {
    const router = useRouter();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [drawerMenuOpen, setDrawerMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchFocused, setSearchFocused] = useState(false);

    const normalizedQuery = searchQuery.trim().toLowerCase();
    const searchResults = useMemo(() => getSearchResults(searchQuery), [searchQuery]);

    const closeDrawer = () => {
        setDrawerOpen(false);
        setDrawerMenuOpen(false);
    };

    const submitSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const [topResult] = getSearchResults(searchQuery);

        if (topResult) {
            setSearchFocused(false);
            setSearchQuery('');
            router.push(topResult.href);
        }
    };

    const openSearchResult = (href: string) => {
        setSearchFocused(false);
        setSearchQuery('');
        router.push(href);
    };

    return (
        <header className="sticky top-0 z-50 w-full font-sans shadow-sm">
            <div className="bg-[#111111] text-[#a5abb5]">
                <div className="mx-auto flex h-9 max-w-[1760px] items-center justify-between px-4 md:h-11 md:px-10 lg:px-16">
                    <nav className="flex items-center gap-2 md:gap-4" aria-label="Top quick links">
                        {topLeftLinks.map((link, index) => (
                            <div key={link.href} className="flex items-center gap-2 md:gap-4">
                                <Link href={link.href} className={`font-header-menu transition-colors hover:text-white`}>
                                    {link.name}
                                </Link>
                                {index < topLeftLinks.length - 1 && <span className="h-5 w-px bg-white/15" aria-hidden="true" />}
                            </div>
                        ))}
                    </nav>

                    <nav className="hidden items-center gap-4 md:flex" aria-label="Top secondary links">
                        {topRightLinks.map((link) => (
                            <Link key={link.href} href={link.href} className={`font-header-menu transition-colors hover:text-white`}>
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/coupons"
                            className={`font-header-menu rounded-md bg-[#cc0000] px-5 py-2 text-white transition-colors hover:bg-[#1A3D17]`}
                        >
                            Coupons & Deals
                        </Link>
                    </nav>
                </div>
            </div>

            <div className="relative z-[70] border-b border-gray-200 bg-[#fcfaf8]">
                <div className="mx-auto grid min-h-[76px] max-w-[1760px] grid-cols-[auto_1fr] items-center gap-3 px-4 py-3 md:min-h-[92px] md:gap-5 md:px-10 md:py-0 lg:grid-cols-[auto_auto_1fr_auto] lg:px-16">
                    <button
                        type="button"
                        onClick={() => setDrawerOpen(true)}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center text-[#3d4654] transition-colors hover:text-[#cc0000] md:h-12 md:w-12"
                        aria-label="Open menu"
                        aria-expanded={drawerOpen}
                    >
                        <MenuIcon className="h-[26px] w-[26px] md:h-[30px] md:w-[30px]" />
                    </button>

                    <Logo className="min-w-[112px] justify-self-end md:min-w-[140px] lg:justify-self-start" />

                    <div className="relative col-span-2 row-start-2 lg:col-span-1 lg:row-auto">
                        <form
                            className="flex h-12 items-center rounded-full border border-gray-300 bg-white pl-4 shadow-sm md:h-14 md:pl-6"
                            onSubmit={submitSearch}
                        >
                            <label htmlFor="site-search" className="sr-only">
                                Search menus, prices, and deals
                            </label>
                            <input
                                id="site-search"
                                type="search"
                                value={searchQuery}
                                onChange={(event) => setSearchQuery(event.target.value)}
                                onFocus={() => setSearchFocused(true)}
                                placeholder="Search menus, prices, and deals..."
                                className="min-w-0 flex-1 bg-transparent text-[14px] font-normal text-[#1f2937] outline-none placeholder:text-gray-400 md:text-[16px]"
                                autoComplete="off"
                            />
                            <button
                                type="submit"
                                className="mr-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#cc0000] text-white transition-colors hover:bg-[#1A3D17] md:h-12 md:w-12"
                                aria-label="Search"
                            >
                                <SearchIcon className="h-[18px] w-[18px] md:h-[22px] md:w-[22px]" />
                            </button>
                        </form>

                        {searchFocused && normalizedQuery && (
                            <div className="absolute left-0 right-0 top-[calc(100%+10px)] z-[200] max-h-[560px] overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-2xl">
                                {searchResults.length > 0 ? (
                                    searchResults.map((result) => (
                                        <Link
                                            key={`${result.href}-${result.title}`}
                                            href={result.href}
                                            onMouseDown={(event) => {
                                                event.preventDefault();
                                                openSearchResult(result.href);
                                            }}
                                            onClick={(event) => {
                                                event.preventDefault();
                                                openSearchResult(result.href);
                                            }}
                                            className="block border-b border-gray-100 px-5 py-3 transition-colors last:border-b-0 hover:bg-[#fcfaf8]"
                                        >
                                            <span className="block text-[11px] font-black uppercase tracking-wide text-[#cc0000]">{result.category}</span>
                                            <span
                                                className={`font-header-menu mt-1 block leading-snug text-[#1f2937]`}
                                            >
                                                {result.title}
                                            </span>
                                        </Link>
                                    ))
                                ) : (
                                    <div className="px-5 py-4 text-sm font-bold text-gray-500">
                                        No results found for &quot;{searchQuery.trim()}&quot;
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="hidden items-center gap-5 lg:flex">
                        <Link href="/contact" className="font-header-menu text-[#374151] transition-colors hover:text-[#cc0000]">
                            Contact
                        </Link>
                        <Link
                            href="/coupons"
                            className="font-header-menu rounded-full bg-[#cc0000] px-8 py-4 text-white transition-colors hover:bg-[#1A3D17]"
                        >
                            Coupons & Deals
                        </Link>
                    </div>
                </div>
            </div>

            <div className="relative z-[40] border-b border-gray-200 bg-[#fcfaf8]">
                <nav
                    className={`font-header-menu mx-auto flex h-12 max-w-[1760px] items-center justify-start gap-6 overflow-x-auto px-4 text-[#374151] md:h-16 md:justify-center md:gap-8 md:overflow-visible md:px-10 lg:px-16`}
                    aria-label="Main navigation"
                >
                    <details className="group relative">
                        <summary className="flex cursor-pointer list-none items-center gap-2 whitespace-nowrap transition-colors hover:text-[#cc0000]">
                            Menu & Prices
                            <ChevronIcon className="h-4 w-4 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="absolute left-1/2 top-full z-50 mt-4 w-64 -translate-x-1/2 rounded-xl border border-gray-200 bg-white p-3 shadow-2xl">
                            <Link
                                href="/menus-prices"
                                className={`font-header-menu block rounded-lg px-4 py-3 text-[#1A3D17] hover:bg-[#fcfaf8] hover:text-[#cc0000]`}
                            >
                                Full Menu
                            </Link>
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`font-header-menu block rounded-lg px-4 py-3 text-[#5b6472] hover:bg-[#fcfaf8] hover:text-[#cc0000]`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </details>

                    {mainLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="whitespace-nowrap transition-colors hover:text-[#cc0000]">
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>

            {drawerOpen && (
                <button
                    type="button"
                    onClick={closeDrawer}
                    className="fixed inset-0 z-[100] cursor-pointer bg-black/60"
                    aria-label="Close menu overlay"
                />
            )}

            <aside className={`fixed left-0 top-0 z-[101] h-full w-[400px] max-w-[88vw] overflow-y-auto bg-white text-[#1f2937] shadow-2xl transition-transform duration-300 ${drawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex h-[76px] items-center justify-between border-b border-gray-200 px-7">
                    <Logo className="" />
                    <button
                        type="button"
                        onClick={closeDrawer}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center text-gray-500 transition-colors hover:text-[#cc0000]"
                        aria-label="Close menu"
                    >
                        <CloseIcon className="h-7 w-7" />
                    </button>
                </div>

                <nav className="pb-8" aria-label="Drawer navigation">
                    <div className="grid grid-cols-[1fr_68px] border-b border-gray-200">
                        <Link
                            href="/menus-prices"
                            onClick={closeDrawer}
                            className="font-header-menu px-7 py-5 text-[#1f2937] transition-colors hover:text-[#cc0000]"
                        >
                            Menu & Prices
                        </Link>
                        <button
                            type="button"
                            onClick={() => setDrawerMenuOpen((open) => !open)}
                            className="flex items-center justify-center border-l border-gray-200 text-[#4b5563] transition-colors hover:text-[#cc0000]"
                            aria-label={drawerMenuOpen ? 'Hide Menu & Prices submenu' : 'Show Menu & Prices submenu'}
                            aria-expanded={drawerMenuOpen}
                        >
                            <ChevronIcon className={`h-[22px] w-[22px] transition-transform ${drawerMenuOpen ? 'rotate-180' : ''}`} />
                        </button>
                    </div>

                    {drawerMenuOpen && (
                        <div className="bg-[#f7f8fa]">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={closeDrawer}
                                    className={`font-header-menu block border-b border-gray-100 px-11 py-4 text-[#5b6472] transition-colors hover:text-[#cc0000]`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    )}

                    {mainLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={closeDrawer}
                            className="font-header-menu block border-b border-gray-200 px-7 py-5 text-[#1f2937] transition-colors hover:text-[#cc0000]"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        href="/contact"
                        onClick={closeDrawer}
                        className="font-header-menu block border-b border-gray-200 px-11 py-4 text-[#374151] transition-colors hover:text-[#cc0000]"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/privacy-policy"
                        onClick={closeDrawer}
                        className="font-header-menu block border-b border-gray-200 px-11 py-4 text-[#374151] transition-colors hover:text-[#cc0000]"
                    >
                        Privacy Policy
                    </Link>

                    <div className="px-6 pt-6">
                        <Link
                            href="/coupons"
                            onClick={closeDrawer}
                            className="font-header-menu flex h-12 items-center justify-center rounded-xl bg-[#cc0000] text-white transition-colors hover:bg-[#1A3D17]"
                        >
                            Coupons & Deals
                        </Link>
                    </div>
                </nav>
            </aside>
        </header>
    );
}

function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className={`inline-flex items-center ${className}`} aria-label="Papa Johns Menus home">
            <span
                className="text-base font-black italic uppercase leading-none tracking-tight md:text-xl"
                style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}
            >
                <span className="text-[#CCEE18]" style={{ textShadow: '0 2px 0 #1A3D17' }}>
                    PAPA
                </span>{' '}
                <span className="text-[#1A3D17]">JOHNS</span>
            </span>
        </Link>
    );
}

function MenuIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
        </svg>
    );
}

function SearchIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
        </svg>
    );
}

function CloseIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <path d="M6 6l12 12" />
            <path d="M18 6 6 18" />
        </svg>
    );
}

function ChevronIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
}
