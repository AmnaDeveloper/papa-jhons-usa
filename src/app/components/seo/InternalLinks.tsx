import Link from 'next/link';

export default function InternalLinks() {
    return (
        <nav className="my-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                Quick Links & More Information
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm font-medium">
                <li>
                    <Link
                        href="/menus-prices"
                        className="text-red-700 hover:text-red-800 hover:underline transition-colors flex items-center gap-2"
                    >
                        <span>🍕</span> Full Menu & Prices
                    </Link>
                </li>
                <li>
                    <Link
                        href="/coupons"
                        className="text-red-700 hover:text-red-800 hover:underline transition-colors flex items-center gap-2"
                    >
                        <span>🎟️</span> Current Coupons & Deals
                    </Link>
                </li>
                <li>
                    <Link
                        href="/store-locator"
                        className="text-red-700 hover:text-red-800 hover:underline transition-colors flex items-center gap-2"
                    >
                        <span>📍</span> Find Papa John's Locations
                    </Link>
                </li>
                <li>
                    <Link
                        href="/hours"
                        className="text-red-700 hover:text-red-800 hover:underline transition-colors flex items-center gap-2"
                    >
                        <span>🕒</span> Store Operating Hours
                    </Link>
                </li>
                <li>
                    <Link
                        href="/posts"
                        className="text-red-700 hover:text-red-800 hover:underline transition-colors flex items-center gap-2"
                    >
                        <span>📰</span> Pizza Blog & News
                    </Link>
                </li>
                <li>
                    <Link
                        href="/papa-johns-rewards"
                        className="text-red-700 hover:text-red-800 hover:underline transition-colors flex items-center gap-2"
                    >
                        <span>⭐</span> Papa Rewards Program
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
