import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { Check } from 'lucide-react';
import { getTodayFormatted } from '@/lib/utils/date';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['700', '900'],
    display: 'swap',
});

export default function HeroSection() {
    const currentDate = getTodayFormatted();
    const featurePills = [
        '89+ Menu Items',
        'Calorie & Allergen Facts',
        'Updated Regularly',
        '100% Free & Independent',
    ];

    return (
        <section
            className="relative flex min-h-[630px] w-full items-center justify-center overflow-hidden px-4 py-10 text-white md:min-h-[630px] md:py-12"
            style={{ backgroundColor: '#102d0f' }}
        >
            <div className="absolute inset-x-0 top-0 h-1 bg-[#cc0000]" aria-hidden="true" />
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        'radial-gradient(circle at top, rgba(204,238,24,0.10), transparent 34%), linear-gradient(180deg, rgba(26,61,23,0.94), rgba(15,30,14,0.98))',
                }}
                aria-hidden="true"
            />

            <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
                <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-white/55 md:text-sm">
                    UPDATED AT: {currentDate}
                </p>

                <h1
                    className={`${poppins.className} hero-main-heading mb-6 max-w-5xl uppercase tracking-normal text-white`}
                    style={{
                        fontSize: '60px',
                        fontWeight: 900,
                        lineHeight: 1.08,
                        textShadow: '0 6px 24px rgba(0,0,0,0.35)',
                    }}
                >
                    Papa John’s Menu Deals with Prices (Updated 2026)
                </h1>

                <p className="max-w-5xl text-base font-bold leading-8 text-white/75 md:text-xl md:leading-9">
                    If you are searching for{' '}
                    <Link href="/best-pizza-delivery-near-me" className="text-[#CCEE18] underline font-bold hover:text-white transition-colors">Papa John&apos;s pizza delivery near you</Link>,
                    {' '}looking to compare current{' '}
                    <Link href="/coupons" className="text-[#CCEE18] underline font-bold hover:text-white transition-colors">Papa Johns promo codes</Link>,
                    {' '}or exploring a fresh{' '}
                    <Link href="/menus-prices" className="text-[#CCEE18] underline font-bold hover:text-white transition-colors">Papa John&apos;s full menu with prices</Link>
                    {' '}— you&apos;re in the right place. Earn free food every time you order with{' '}
                    <Link href="/papa-johns-rewards" className="text-[#CCEE18] underline font-bold hover:text-white transition-colors">Papa Rewards</Link>,
                    {' '}discover our crowd-favorite{' '}
                    <Link href="/posts/classic-pizzas" className="text-[#CCEE18] underline font-bold hover:text-white transition-colors">Classic Pizzas</Link>
                    {' '}and new{' '}
                    <Link href="/posts/new-papadias-flavors-2026" className="text-[#CCEE18] underline font-bold hover:text-white transition-colors">Papadias Flavors 2026</Link>,
                    {' '}or locate your nearest branch instantly on the{' '}
                    <Link href="/store-locator" className="text-[#CCEE18] underline font-bold hover:text-white transition-colors">Papa John&apos;s Store Locator</Link>.
                </p>

                <div className="mt-8 flex w-full max-w-6xl flex-wrap items-center justify-center gap-4">
                    {featurePills.map((pill) => (
                        <div
                            key={pill}
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 text-sm font-black text-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:text-base"
                            style={{ height: '58px' }}
                        >
                            <Check size={18} strokeWidth={4} className="shrink-0 text-[#CCEE18]" />
                            <span>{pill}</span>
                        </div>
                    ))}
                </div>

                <div className="flex w-full max-w-4xl flex-col items-stretch justify-center gap-4 sm:flex-row" style={{ marginTop: '34px' }}>
                    <Link
                        href="/store-locator"
                        className={`${poppins.className} flex items-center justify-center bg-[#CCEE18] px-8 text-center uppercase tracking-[0.12em] transition-colors hover:bg-white`}
                        style={{
                            color: '#102d0f',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontVariant: 'normal',
                            fontWeight: 900,
                            height: '56px',
                        }}
                    >
                        Find Papa Johns Near You
                    </Link>

                    <Link
                        href="/menus-prices"
                        className={`${poppins.className} flex items-center justify-center border-2 border-white bg-transparent px-8 text-center uppercase tracking-[0.12em] text-white transition-colors hover:border-[#CCEE18] hover:text-[#CCEE18]`}
                        style={{
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontVariant: 'normal',
                            fontWeight: 900,
                            height: '56px',
                        }}
                    >
                        View Full Menu
                    </Link>
                </div>
            </div>
        </section>
    );
}
