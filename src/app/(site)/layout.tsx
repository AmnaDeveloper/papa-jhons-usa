import type { Metadata } from 'next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export const metadata: Metadata = {
    title: "Papa John's Menu with Prices 2026: Complete Guide to All Items, Deals & Specials",
    openGraph: {
        title: "Papa John's Menu with Prices 2026",
        description: "Explore the complete Papa John's menu with prices. Order your favorite pizza, sides, desserts & drinks for delivery and takeout.",
        url: "https://papajohns-menus.us",
        siteName: "Papa John's Menus",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://papajohns-menus.us/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Papa John's Menu",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Papa John's Menu with Prices 2026",
        description: "Explore the complete Papa John's menu with prices.",
        images: ["https://papajohns-menus.us/twitter-image.jpg"],
    },
};

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 shrink-0">{children}</main>
            <Footer />
        </div>
    );
}
