import { Metadata } from 'next';
import { generatePageSEO } from '../../lib/seo-config';
import InternalLinks from '../../components/seo/InternalLinks';
import Link from 'next/link';

export const metadata: Metadata = generatePageSEO(
    "Privacy Policy - Official Papa John's Menu & Promotions",
    "Read our Privacy Policy to understand how we collect, use, and protect your personal information when you use our Papa John's menu and promotion services.",
    "/privacy-policy",
    "Papa Johns privacy policy, data protection, pizza menu privacy, customer information"
);

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Page Header */}
            <div className="bg-[#1A3D17] py-16 md:py-24 text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-[#CCEE18] text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4" style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}>
                        Privacy Policy
                    </h1>
                    <p className="text-white text-lg md:text-xl font-medium opacity-90">
                        Your privacy is important to us. Learn how we handle your information securely.
                    </p>
                    <div className="mt-6 flex justify-center items-center gap-2 text-[#CCEE18] text-sm font-bold tracking-widest uppercase">
                        <span>Last Updated:</span>
                        <span className="bg-white/10 px-3 py-1 rounded-full">March 18, 2026</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-[1000px] mx-auto px-4 md:px-8 py-16">
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-10">
                    
                    <section>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-4 border-l-4 border-[#cc0000] pl-4">
                            1. Introduction
                        </h2>
                        <p>
                            Welcome to the <strong>Papa John's Menu & Promotions</strong> website. We are committed to protecting your personal data and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please <Link href="/contact" className="text-[#cc0000] font-bold hover:underline">contact us</Link>.
                        </p>
                        <p>
                            When you visit our website and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we describe our privacy policy. We seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-4 border-l-4 border-[#cc0000] pl-4">
                            2. Information We Collect
                        </h2>
                        <p>
                            We collect personal information that you provide to us such as name, address, contact information, passwords and security data, and payment information.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 font-medium">
                            <li><strong>Personal Information:</strong> We collect info you voluntarily provide when you subscribe to our [Coupons](/coupons) or contact us.</li>
                            <li><strong>Device Information:</strong> Information such as your IP address and browser characteristics are collected automatically when you visit our site.</li>
                            <li><strong>Cookies:</strong> We use cookies to improve your user experience and for analytics purposes.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-4 border-l-4 border-[#cc0000] pl-4">
                            3. How We Use Your Information
                        </h2>
                        <p>
                            We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                        </p>
                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>To facilitate account creation:</strong> If you choose to link your account with us to a third-party account (such as your Google or Facebook account).</li>
                            <li><strong>To send marketing communications:</strong> We may send you information about our [Latest Pizzas](/menus-prices) and [Special Offers](/coupons).</li>
                            <li><strong>For Order Fulfillment:</strong> To process and deliver your pizza orders accurately.</li>
                            <li><strong>To respond to user inquiries:</strong> To provide support and resolve issues related to our [Store Locator](/store-locator).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-4 border-l-4 border-[#cc0000] pl-4">
                            4. Sharing Your Information
                        </h2>
                        <p>
                            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may share data with service providers who help us manage our website analytics and email newsletters.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-4 border-l-4 border-[#cc0000] pl-4">
                            5. Cookies and Tracking Technologies
                        </h2>
                        <p>
                            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.
                        </p>
                        <p className="bg-gray-50 p-6 rounded-2xl border border-gray-100 italic">
                            By using our site, you agree to our use of cookies to enhance your experience, especially when using our [Meal Planner](/#meal-planner) or viewing local restaurant hours.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-4 border-l-4 border-[#cc0000] pl-4">
                            6. Your Rights
                        </h2>
                        <p>
                            In some regions, such as the European Economic Area, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-4 border-l-4 border-[#cc0000] pl-4">
                            7. Data Security
                        </h2>
                        <p>
                            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-4 border-l-4 border-[#cc0000] pl-4">
                            8. Contact Us
                        </h2>
                        <p>
                            If you have questions or comments about this policy, you may email us at <strong>privacy@papajohns.com</strong> or contact us via our <Link href="/contact" className="text-[#cc0000] font-bold hover:underline">Contact Form</Link>.
                        </p>
                    </section>
                </div>

                <div className="mt-20 pt-10 border-t border-gray-100">
                    <InternalLinks />
                </div>
            </div>

            {/* Footer Simple CTA */}
            <div className="bg-[#1A3D17] text-white py-12 px-4 text-center">
                <p className="mb-4 font-bold text-[#CCEE18] uppercase tracking-widest text-sm">Hungry for something else?</p>
                <Link href="/menus-prices" className="inline-block bg-[#cc0000] text-white font-black px-8 py-3 rounded-full hover:bg-white hover:text-[#1A3D17] transition-all">
                    Back to Full Menu →
                </Link>
            </div>
        </div>
    );
}
