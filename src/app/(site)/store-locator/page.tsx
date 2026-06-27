import type { Metadata } from 'next';
import StoreLocatorClient from './StoreLocatorClient';

export const metadata: Metadata = {
    title: "Find Papa John's Near Me — Store Locator Guide | PapaJohns-Menus.us",
    description: "Use our independent Papa Johns location guide for city planning, then confirm exact addresses, phone numbers, hours, delivery zones, and ordering in the official Papa Johns locator.",
    alternates: {
        canonical: 'https://papajohns-menus.us/store-locator',
    },
};

export default function StoreLocatorPage() {
    return <StoreLocatorClient />;
}
