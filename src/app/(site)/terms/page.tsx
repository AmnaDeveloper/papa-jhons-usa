import { Metadata } from 'next';
import { generatePageSEO } from '../../lib/seo-config';
import InternalLinks from '../../components/seo/InternalLinks';
import Link from 'next/link';

export const metadata: Metadata = generatePageSEO(
    "Terms and Conditions - Papa John's Menu & Specials",
    "Review our terms and conditions for using the Papa John's menu website, including rules for promo codes, pizza orders, and store information usage.",
    "/terms",
    "Papa Johns terms and conditions, pizza menu terms, promo code rules, legal terms"
);

export default function TermsPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Page Header */}
            <div className="bg-[#1A3D17] py-16 md:py-24 text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-[#CCEE18] text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4" style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}>
                        Terms & Conditions
                    </h1>
                    <p className="text-white text-lg md:text-xl font-medium opacity-90">
                        Please read these terms carefully before using our services and promotions.
                    </p>
                    <div className="mt-6 flex justify-center items-center gap-2 text-[#CCEE18] text-sm font-bold tracking-widest uppercase">
                        <span>Effective Date:</span>
                        <span className="bg-white/10 px-3 py-1 rounded-full">March 18, 2026</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-[1000px] mx-auto px-4 md:px-8 py-16">
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-10">
                    
                    <section>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-4 border-l-4 border-[#cc0000] pl-4">
                            1. Agreement to Terms
                        </h2>
                        <p>
                            By accessing or using our website, you agree to be bound by these <strong>Terms and Conditions</strong> and our <Link href="/privacy-policy" className="text-[#cc0000] font-bold hover:underline">Privacy Policy</Link>. If you do not agree with all of these terms, then you are expressly prohibited from using the site and you must discontinue use immediately.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-4 border-l-4 border-[#cc0000] pl-4">
                            2. Intellectual Property Rights
                        </h2>
                        <p>
                            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-4 border-l-4 border-[#cc0000] pl-4">
                            3. Use of Promo Codes and Coupons
                        </h2>
                        <p>
                            Our [latest coupons and promo codes](/coupons) are subject to specific terms as dictated by participating stores. 
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Promo codes must be entered exactly as shown on the official checkout page.</li>
                            <li>Coupons cannot be combined with other offers unless explicitly stated in the [specials menu](/menus-prices).</li>
                            <li>We do not guarantee the validity of codes found on third-party websites. For verified codes, visit our [Papa Johns Coupons](/coupons) section.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-4 border-l-4 border-[#cc0000] pl-4">
                            4. User Representations
                        </h2>
                        <p>
                            By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-4 border-l-4 border-[#cc0000] pl-4">
                            5. Limitation of Liability
                        </h2>
                        <p>
                            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-4 border-l-4 border-[#cc0000] pl-4">
                            6. External Links Disclaimer
                        </h2>
                        <p>
                            The Site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. For official corporate info, visit the [official Papa John's website](https://www.papajohns.com).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-4 border-l-4 border-[#cc0000] pl-4">
                            7. Governing Law
                        </h2>
                        <p>
                            These Terms and conditions shall be governed by and defined following the laws of the United States. You irrevocably consent that the courts of the United States shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight mb-4 border-l-4 border-[#cc0000] pl-4">
                            8. Contact Information
                        </h2>
                        <p>
                            For any questions regarding these terms, please visit our <Link href="/contact" className="text-[#cc0000] font-bold hover:underline">Support Page</Link> or email us at legal@papajohns.com.
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
