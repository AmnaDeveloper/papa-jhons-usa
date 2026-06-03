import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Find Papa John's Near Me — Store Locator | PapaJohns-Menus.us",
    description: "Looking for Papa John's near me? Use our store locator to quickly find Papa Johns locations across the United States. Check store hours, get directions, and place your order.",
    alternates: {
        canonical: 'https://papajohns-menus.us/store-locator',
    },
};

export default function StoreLocatorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
