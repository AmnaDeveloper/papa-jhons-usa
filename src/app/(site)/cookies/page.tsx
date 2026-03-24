import { Metadata } from 'next';
import { generatePageSEO } from '../../lib/seo-config';
import InternalLinks from '../../components/seo/InternalLinks';
import Link from 'next/link';

export const metadata: Metadata = generatePageSEO(
    "Cookie Policy - Papa John's Menu & User Preferences",
    "Find out how we use cookies and tracking technologies to enhance your pizza ordering experience and provide personalized Papa John's promos.",
    "/cookies",
    "Papa Johns cookie policy, tracking technologies, browser cookies, pizza website data"
);

export default function CookiesPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Page Header */}
            <div className="bg-[#1A3D17] py-16 md:py-24 text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-[#CCEE18] text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4" style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}>
                        Cookie Policy
                    </h1>
                    <p className="text-white text-lg md:text-xl font-medium opacity-90">
                        Transparency about how we use cookies to improve your experience.
                    </p>
                    <div className="mt-6 flex justify-center items-center gap-2 text-[#CCEE18] text-sm font-bold tracking-widest uppercase">
                        <span>Version:</span>
                        <span className="bg-white/10 px-3 py-1 rounded-full">2.0 (March 2026)</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-[1000px] mx-auto px-4 md:px-8 py-16">
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-10">
                    
                    <section>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-4 border-l-4 border-[#cc0000] pl-4">
                            1. What Are Cookies?
                        </h2>
                        <p>
                            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-4 border-l-4 border-[#cc0000] pl-4">
                            2. Why We Use Cookies
                        </h2>
                        <p>
                            We use cookies for several reasons. Some cookies are required for technical reasons in order for our Site to operate. Others enable us to track and target the interests of our users to enhance the experience on our Site.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <h3 className="text-[#1A3D17] font-black text-lg mb-2 uppercase">Essential Cookies</h3>
                                <p className="text-sm">These are strictly necessary to provide you with services available through our Site, like accessing secure areas of our [Store Locator](/store-locator).</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <h3 className="text-[#1A3D17] font-black text-lg mb-2 uppercase">Performance Cookies</h3>
                                <p className="text-sm">These cookies collect information that is used in aggregate form to help us understand how our [Menu Pages](/menus-prices) are being used.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-4 border-l-4 border-[#cc0000] pl-4">
                            3. Tracking Technologies
                        </h2>
                        <p>
                            In addition to cookies, we may use other tracking technologies like web beacons (sometimes called "tracking pixels" or "clear gifs"). These are tiny graphics files that contain a unique identifier that allow us to recognize when someone has visited our [Pizza Promotions](/coupons) page.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-4 border-l-4 border-[#cc0000] pl-4">
                            4. Managing Your Cookies
                        </h2>
                        <p>
                            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
                        </p>
                        <p>
                            To learn more about how to manage cookies on popular browsers, you can visit the [AboutCookies.org](https://www.aboutcookies.org) website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-4 border-l-4 border-[#cc0000] pl-4">
                            5. Updates to This Policy
                        </h2>
                        <p>
                            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-4 border-l-4 border-[#cc0000] pl-4">
                            6. More Information
                        </h2>
                        <p>
                            If you have any questions about our use of cookies or other technologies, please <Link href="/contact" className="text-[#cc0000] font-bold hover:underline">Contact Us</Link> or refer to our full <Link href="/privacy-policy" className="text-[#cc0000] font-bold hover:underline">Privacy Policy</Link>.
                        </p>
                    </section>
                </div>

                <div className="mt-20 pt-10 border-t border-gray-100">
                    <InternalLinks />
                </div>
            </div>
        </div>
    );
}
