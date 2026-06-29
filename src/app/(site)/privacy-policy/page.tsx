import { Metadata } from 'next';
import { generatePageSEO } from '../../lib/seo-config';
import InternalLinks from '../../components/seo/InternalLinks';
import Link from 'next/link';
import FAQJsonLd from '../../components/FAQJsonLd';

export const metadata: Metadata = generatePageSEO(
    "Privacy Policy - PapaJohns-Menus.us",
    "Read how PapaJohns-Menus.us, an independent informational guide, handles contact messages, analytics, cookies, and advertising data.",
    "/privacy-policy",
    "Papa Johns privacy policy, data protection, pizza menu privacy, customer information"
);

const privacyFaqs = [
    {
        question: "Does PapaJohns-Menus.us collect payment information?",
        answer: "No. PapaJohns-Menus.us is an informational guide and does not process Papa Johns orders or collect payment card details for pizza purchases.",
    },
    {
        question: "Does this site use cookies?",
        answer: "Yes. The site may use cookies for analytics, advertising, and basic site functionality. You can manage cookies in your browser settings.",
    },
    {
        question: "Does this site share personal information with Papa Johns?",
        answer: "No. PapaJohns-Menus.us is independent from Papa Johns and does not share reader contact messages or analytics data with Papa Johns International.",
    },
    {
        question: "How can I contact the site about privacy questions?",
        answer: "You can contact the site through the contact page or by emailing contact@papajohns-menus.us.",
    },
];

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-white min-h-screen">
            <FAQJsonLd faqs={privacyFaqs} />
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
                            Welcome to <strong>papajohns-menus.us</strong> — an independent, unofficial fan guide. We are committed to protecting your personal data and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please <Link href="/contact" className="text-[#cc0000] font-bold hover:underline">contact us</Link>.
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
                            We collect only limited information that readers voluntarily provide through the contact form or basic technical information collected through analytics, cookies, and security tools. We do not create customer accounts, process Papa Johns orders, collect payment card details, or store passwords for pizza purchases.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 font-medium">
                            <li><strong>Contact information:</strong> If you contact us, we may receive your name, email address, message content, and any details you choose to include.</li>
                            <li><strong>Device and usage information:</strong> Analytics tools may collect information such as browser type, approximate location, pages viewed, and referring pages.</li>
                            <li><strong>Cookies:</strong> We may use cookies for analytics, advertising, security, and basic site functionality.</li>
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
                            <li><strong>To respond to messages:</strong> We use contact form submissions to reply to reader questions, corrections, or feedback.</li>
                            <li><strong>To improve the site:</strong> Analytics help us understand which menu guides, coupon pages, and location pages readers find useful.</li>
                            <li><strong>To keep content accurate:</strong> Reader feedback may help us identify outdated prices, broken links, or unclear page sections.</li>
                            <li><strong>For advertising and measurement:</strong> Advertising partners may use cookies or similar technologies as described in this policy.</li>
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
                            By using our site, you agree to our use of cookies to enhance your experience, especially when viewing local restaurant hours or using our [Store Locator](/store-locator).
                        </p>
                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-sm">
                            <p className="font-bold mb-2">Google AdSense Disclosure:</p>
                            <p>This site uses Google AdSense advertising. Google may use cookies to serve ads based on your prior visits to this website or other websites. Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">google.com/settings/ads</a>.</p>
                        </div>
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
                            If you have questions or comments about this policy, you may email us at <strong>contact@papajohns-menus.us</strong> or contact us via our <Link href="/contact" className="text-[#cc0000] font-bold hover:underline">Contact Form</Link>.
                        </p>
                    </section>

                    <section className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-8">
                            Privacy FAQs
                        </h2>
                        <div className="space-y-6">
                            {privacyFaqs.map((faq) => (
                                <div key={faq.question} className="border-b border-gray-200 pb-5 last:border-0 last:pb-0">
                                    <h3 className="text-lg font-black text-[#1A3D17] mb-2">{faq.question}</h3>
                                    <p className="text-gray-600 font-medium">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
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
