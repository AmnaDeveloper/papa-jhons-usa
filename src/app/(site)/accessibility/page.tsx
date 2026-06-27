import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Accessibility Policy | PapaJohns-Menus.us',
    description:
        'Accessibility policy for PapaJohns-Menus.us, including how readers can report website accessibility issues or request help using the site.',
    alternates: {
        canonical: 'https://papajohns-menus.us/accessibility',
    },
    openGraph: {
        title: 'Accessibility Policy | PapaJohns-Menus.us',
        description:
            'Learn how PapaJohns-Menus.us works to keep menu guides, price pages, and articles accessible to readers.',
        url: 'https://papajohns-menus.us/accessibility',
        type: 'website',
    },
};

export default function AccessibilityPage() {
    return (
        <main className="bg-[#f9fafb] text-[#253a24]">
            <section className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
                <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#c9261d]">
                    Website Accessibility
                </p>
                <h1 className="mb-6 text-4xl font-black uppercase leading-tight tracking-normal text-[#1A3D17] md:text-5xl">
                    Accessibility Policy
                </h1>
                <div className="space-y-6 text-lg font-medium leading-8 text-[#4b5563]">
                    <p>
                        PapaJohns-Menus.us is an independent menu and pricing guide. We want readers to be able to
                        browse our menu pages, location guides, articles, comparison guides, and contact pages with as
                        little friction as possible.
                    </p>
                    <p>
                        We aim to keep page structure clear, link text descriptive, color contrast readable, and forms
                        usable with a keyboard. We also review new templates and major design changes so important
                        content remains accessible on mobile, tablet, and desktop screens.
                    </p>
                    <p>
                        If you have trouble using any part of this site, please contact us with the page URL and a short
                        description of the issue. We will review the problem and work on a practical improvement.
                    </p>
                </div>

                <div className="mt-10 rounded-lg border border-[#e5e7eb] bg-white p-6 shadow-sm">
                    <h2 className="mb-3 text-2xl font-black uppercase text-[#1A3D17]">Need Help?</h2>
                    <p className="mb-5 text-base font-medium leading-7 text-[#4b5563]">
                        Send accessibility feedback through our contact page. Please include the device, browser, and
                        page URL when possible.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex rounded-full bg-[#1A3D17] px-6 py-3 text-sm font-black uppercase tracking-wider text-white transition-colors hover:bg-[#c9261d]"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </main>
    );
}
