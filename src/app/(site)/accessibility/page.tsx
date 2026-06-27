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
        <main className="bg-[#fcfaf8] text-[#253a24]">
            <section className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
                <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#c9261d]">
                    Last Updated January 2026
                </p>
                <h1 className="mb-6 text-4xl font-black uppercase leading-tight tracking-normal text-[#1A3D17] md:text-5xl">
                    Accessibility Policy
                </h1>
                <p className="mb-10 text-xl font-bold leading-8 text-[#4b5563]">
                    Our commitment to an inclusive, accessible website
                </p>

                <div className="space-y-10 text-lg font-medium leading-8 text-[#4b5563]">
                    <section>
                        <h2 className="mb-4 text-2xl font-black uppercase text-[#1A3D17]">Our Commitment</h2>
                        <p>
                            papajohns-menus.us is committed to ensuring digital accessibility for people with disabilities.
                            We continually improve the user experience for everyone and apply relevant accessibility
                            standards to make our content available to the widest possible audience.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-black uppercase text-[#1A3D17]">Standards We Follow</h2>
                        <p>
                            We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. These
                            guidelines explain how to make web content more accessible to people with disabilities,
                            including visual, auditory, physical, speech, cognitive, and neurological disabilities.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-black uppercase text-[#1A3D17]">Features Supporting Accessibility</h2>
                        <ul className="list-disc space-y-3 pl-6">
                            <li>Semantic HTML5 elements used throughout for screen reader compatibility</li>
                            <li>Sufficient color contrast ratios across text and backgrounds</li>
                            <li>All images include descriptive alt attributes</li>
                            <li>Keyboard navigation support across menus, links, and interactive elements</li>
                            <li>Responsive design that works across screen sizes and zoom levels</li>
                            <li>No auto-playing audio or video content</li>
                            <li>Form inputs include associated labels</li>
                            <li>Focus indicators visible on keyboard navigation</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-black uppercase text-[#1A3D17]">Known Limitations</h2>
                        <p>
                            While we strive for full accessibility, some third-party content, such as embedded maps and
                            analytics tools, may not fully meet all accessibility standards. We are working to identify
                            and address these gaps where possible.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-black uppercase text-[#1A3D17]">Assistive Technology</h2>
                        <p className="mb-4">
                            This site is designed to be compatible with common assistive technologies including:
                        </p>
                        <ul className="list-disc space-y-3 pl-6">
                            <li>Screen readers (NVDA, JAWS, VoiceOver, TalkBack)</li>
                            <li>Keyboard-only navigation</li>
                            <li>Browser zoom up to 200% without loss of content</li>
                            <li>High contrast display modes</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-black uppercase text-[#1A3D17]">Feedback & Contact</h2>
                        <p className="mb-4">
                            If you experience accessibility barriers on this site or have suggestions for improvement,
                            please contact us:
                        </p>
                        <ul className="space-y-3">
                            <li>
                                Email:{' '}
                                <a
                                    href="mailto:accessibility@papajohns-menus.us"
                                    className="font-black text-[#cc0000] underline hover:text-[#1A3D17]"
                                >
                                    accessibility@papajohns-menus.us
                                </a>
                            </li>
                            <li>
                                Contact form:{' '}
                                <Link href="/contact" className="font-black text-[#cc0000] underline hover:text-[#1A3D17]">
                                    papajohns-menus.us/contact
                                </Link>
                            </li>
                        </ul>
                        <p className="mt-4">We aim to respond to accessibility feedback within 5 business days.</p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-black uppercase text-[#1A3D17]">Formal Complaints</h2>
                        <p>
                            If you are not satisfied with our response to an accessibility concern, you may contact the
                            relevant disability authority in your jurisdiction.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-black uppercase text-[#1A3D17]">Updates</h2>
                        <p>
                            This Accessibility Policy is reviewed and updated regularly. Last reviewed: January 2026.
                        </p>
                    </section>
                </div>

                <div className="mt-10 rounded-lg border border-[#e5e7eb] bg-white p-6 shadow-sm">
                    <h2 className="mb-3 text-2xl font-black uppercase text-[#1A3D17]">Need Help?</h2>
                    <p>
                        Send accessibility feedback through our contact page. Please include the device, browser, and
                        page URL when possible.
                    </p>
                    <Link
                        href="/contact"
                        className="mt-5 inline-flex rounded-full bg-[#1A3D17] px-6 py-3 text-sm font-black uppercase tracking-wider text-white transition-colors hover:bg-[#c9261d]"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </main>
    );
}
