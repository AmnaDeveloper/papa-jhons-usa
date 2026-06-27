import Link from 'next/link';

const aboutLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Use', href: '/terms' },
    { label: 'Accessibility Policy', href: '/accessibility' },
];

const contactLinks = [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'All Blogs', href: '/posts' },
];

const socialLinks = [
    { label: 'Facebook', href: 'https://www.facebook.com/papajohns', text: 'f' },
    { label: 'Instagram', href: 'https://www.instagram.com/papajohns', text: 'ig' },
    { label: 'X', href: 'https://twitter.com/papajohns', text: 'x' },
    { label: 'YouTube', href: 'https://www.youtube.com/user/papajohns', text: 'yt' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="font-sans">
            <div className="bg-[#fcfaf8] text-[#121827]">
                <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 py-14 md:grid-cols-3 md:px-10 lg:px-16">
                    <div className="flex items-center justify-center md:justify-start">
                        <Link href="/" aria-label="Papa Johns Menus home" className="inline-flex items-center">
                            <span
                                className="text-3xl font-black italic uppercase leading-none tracking-tighter sm:text-4xl"
                                style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}
                            >
                                <span className="text-[#CCEE18]" style={{ textShadow: '0 2px 0 #1A3D17' }}>
                                    PAPA
                                </span>{' '}
                                <span className="text-[#1A3D17]">JOHNS</span>
                            </span>
                        </Link>
                    </div>

                    <nav
                        aria-label="Footer about links"
                        className="border-t border-[#d2c6ba] pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0"
                    >
                        <h2 className="mb-6 text-lg font-black text-[#111827]">About</h2>
                        <ul className="space-y-5">
                            {aboutLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-lg font-medium text-[#596273] transition-colors hover:text-[#1A3D17]"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav
                        aria-label="Footer contact links"
                        className="border-t border-[#d2c6ba] pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0"
                    >
                        <h2 className="mb-6 text-lg font-black text-[#111827]">Contact</h2>
                        <ul className="space-y-5">
                            {contactLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-lg font-medium text-[#596273] transition-colors hover:text-[#1A3D17]"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="bg-[#cc0000] text-red-100">
                <div className="mx-auto max-w-[1440px] px-6 py-8 md:px-10 lg:px-16">
                    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
                        <div className="flex flex-wrap items-center justify-center gap-5 text-sm font-semibold md:justify-start">
                            <Link href="/privacy-policy" className="transition-colors hover:text-white">
                                Privacy Policy
                            </Link>
                            <span className="hidden h-4 w-px bg-white/35 sm:block" aria-hidden="true" />
                            <Link href="/accessibility" className="uppercase tracking-wider transition-colors hover:text-white">
                                Website Accessibility
                            </Link>
                        </div>

                        <div className="flex justify-center gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    aria-label={link.label}
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-sm font-black uppercase text-white transition-colors hover:bg-[#CCEE18] hover:text-[#1A3D17]"
                                >
                                    {link.text}
                                </a>
                            ))}
                        </div>

                        <p className="text-center text-sm font-semibold md:text-right">
                            &copy; {currentYear} papajohns-menus.us
                        </p>
                    </div>

                    <p className="mt-8 text-center text-sm font-semibold leading-relaxed text-red-100/85">
                        Disclaimer: We are not affiliated with Papa Johns International, Inc. All trademarks belong to their respective owners.
                    </p>
                </div>
            </div>
        </footer>
    );
}
