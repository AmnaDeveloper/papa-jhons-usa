import { Metadata } from 'next';
import CouponsClient from '../../components/CouponsClient';
import { getMonthYear } from '../../../lib/utils/date';

export const metadata: Metadata = {
    title: "Papa John's Coupons & Promo Codes May 2026 | PapaJohns-Menus.us",
    description: "Recently reviewed Papa John's coupon notes, promo code examples, carryout deals, BOGO-style offers, and savings tips for May 2026. Availability varies by store.",
    keywords: "papa johns coupons, papa johns promo codes, papa johns discount code, papa johns deals 2026, papa johns coupon code today, papa johns free delivery code, papa johns bogo deal",
    authors: [{ name: "PapaJohns-Menus.us Deals Team" }],
    robots: "index, follow",
    alternates: {
        canonical: "https://papajohns-menus.us/coupons"
    },
    openGraph: {
        title: "Papa John's Coupons & Promo Codes May 2026",
        description: "Recently reviewed Papa John's coupon notes, BOGO-style offers, carryout deals, and savings tips for May 2026. Availability varies by location.",
        url: "https://papajohns-menus.us/coupons",
        type: "website",
        images: [
            {
                url: "https://papajohns-menus.us/og-coupons.jpg",
                width: 1200,
                height: 630,
                alt: "Papa John's Coupons 2026"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Papa John's Coupons & Promo Codes May 2026",
        description: "Recently reviewed Papa John's coupon notes, promo examples, and ordering tips. Check official checkout for current eligibility.",
    }
};

export default function CouponsPage() {
    const month = getMonthYear();

    const coupons = [
        {
            id: 1,
            discount: "BOGO",
            sub: "Free Pizza",
            title: "BOGO-Style Pizza Offer Example",
            desc: "BOGO-style offers may appear for some stores, accounts, or promo periods. Confirm eligible sizes, crusts, and final discount in the official checkout before ordering.",
            code: null,
            noCodeLabel: "Check Official Cart",
            expiry: "Terms vary",
            tags: ["Popular", "Online + App"],
            featured: true
        },
        {
            id: 2,
            discount: "25%",
            sub: "OFF",
            title: "25% Off Order Example",
            desc: "A percentage-off code may reduce eligible full menu-priced items when active for your store. Test the code in the official checkout before relying on it.",
            code: null,
            noCodeLabel: "Check Official Cart",
            expiry: "Terms vary",
            tags: ["Sitewide"],
            featured: false
        },
        {
            id: 3,
            discount: "SAVE",
            sub: "Carryout",
            title: "Carryout Pizza Savings — Store Terms Vary",
            desc: "Carryout orders may show pizza discounts or store-level specials. Check your official cart because availability, eligible items, and discount amounts vary by location.",
            code: null,
            noCodeLabel: "Check Cart",
            expiry: "Terms vary",
            tags: ["Carryout Only"],
            featured: false,
            color: "green"
        },
        {
            id: 4,
            discount: "$10",
            sub: "OFF $40+",
            title: "$10 Off $40+ Example",
            desc: "This type of offer may appear when your cart meets a minimum spend and local terms. Confirm whether delivery, carryout, and discounted items qualify in checkout.",
            code: null,
            noCodeLabel: "Check Official Cart",
            expiry: "Terms vary",
            tags: ["Min. Spend $40"],
            featured: false
        },
        {
            id: 5,
            discount: "20%",
            sub: "OFF",
            title: "20% Off Full Menu-Priced Order Example",
            desc: "A 20% code may apply to eligible full menu-priced items when active. Exclusions and minimums vary, so check the official cart summary before paying.",
            code: null,
            noCodeLabel: "Check Official Cart",
            expiry: "Terms vary",
            tags: ["Online Only"],
            featured: false
        },
        {
            id: 6,
            discount: "FREE",
            sub: "Delivery",
            title: "Free Delivery Offer Example",
            desc: "Free-delivery offers may appear for some stores or minimum-order periods. Check your official cart for the current delivery fee and any active threshold.",
            code: null,
            noCodeLabel: "Check Cart",
            expiry: "Terms vary",
            tags: ["Delivery"],
            featured: false,
            color: "green"
        },
        {
            id: 7,
            discount: "$7.99",
            sub: "Large Pizza",
            title: "Large 1-Topping Carryout Example",
            desc: "Some stores may show a carryout-only large 1-topping pizza special. Final price and discount amount vary, so select the deal in the official cart to confirm.",
            code: null,
            noCodeLabel: "Select in Cart",
            expiry: "Limited time",
            tags: ["Carryout Only"],
            featured: false,
            color: "green"
        },
        {
            id: 8,
            discount: "30%",
            sub: "OFF",
            title: "30% Off Order Example",
            desc: "Higher percentage-off codes may appear during some promo periods. They may exclude discounted items or require a minimum spend, so confirm terms in checkout.",
            code: null,
            noCodeLabel: "Check Official Cart",
            expiry: "Terms vary",
            tags: ["Min. Spend $30"],
            featured: false
        }
    ];

    const faqs = [
        {
            q: "How do I use a Papa John's promo code?",
            a: "To use a Papa John's promo code: 1) Add your items to the cart on PapaJohns.com or the app. 2) Go to checkout. 3) Find the promo code field. 4) Enter the code and click Apply. 5) Confirm the discount appears in the order summary before payment."
        },
        {
            q: "Can I use multiple Papa John's coupon codes at once?",
            a: "Papa John's typically limits checkout to one promo code per order. Rewards credits may have separate rules, so compare the final cart summary before paying."
        },
        {
            q: "What is the best Papa John's coupon code to check?",
            a: "The best Papa John's deal depends on your location, cart, and whether you choose delivery or carryout. Check official checkout for live eligibility, then compare any BOGO-style offer, percentage-off code, and carryout special before paying."
        },
        {
            q: "Does Papa John's have a free delivery code?",
            a: "Free delivery offers may appear at participating locations or during limited promotions, but they are not guaranteed for every store or order. Check the official checkout page for the current delivery fee and any available free-delivery offer."
        },
        {
            q: "What is Papa Rewards and is it worth it?",
            a: "Papa Rewards is Papa John's free loyalty program. Eligible orders can earn points toward Papa Dough rewards. Birthday or targeted offers may vary by account, so check current terms in your rewards profile."
        },
        {
            q: "How do I get Papa John's app-only deals?",
            a: "Download the Papa John's app from the App Store or Google Play. Log in, select your local store, and check the Deals tab. App-only offers may vary by account, store, and date."
        },
        {
            q: "Does Papa John's do BOGO (Buy One Get One) deals?",
            a: "Papa John's sometimes offers BOGO-style deals, but terms vary by location and date. Always confirm the offer in the official Papa Johns checkout before relying on it."
        },
        {
            q: "What is the Papa John's carryout special?",
            a: "Carryout specials can be one of the strongest ways to save, but exact discounts vary by store, time, and promotion. Compare carryout and delivery totals in the official checkout before placing the order."
        },
        {
            q: "Why is my Papa John's coupon code not working?",
            a: "Common reasons a Papa John's code may not work: 1) The code has expired. 2) Your order does not meet the minimum spend requirement. 3) The code applies only to specific items. 4) Another promo is already applied. 5) The code was typed incorrectly. Check the official cart terms carefully."
        },
        {
            q: "Does Papa John's offer a student or military discount?",
            a: "Military, student, or text-alert offers may vary by location, account, and promotion period. Check official Papa Johns channels or your selected store for current eligibility."
        },
        {
            q: "Can I use Papa John's promo codes on third-party delivery apps?",
            a: "Papa John's promo codes generally apply to direct orders through PapaJohns.com or the official app, not third-party delivery platforms. Compare direct checkout and third-party totals before ordering."
        }
    ];

    const schemas = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://papajohns-menus.us/coupons",
                "name": "Papa John's Coupons & Promo Codes May 2026",
                "description": "Recently reviewed Papa John's coupon notes, promo examples, and ordering tips for May 2026. Availability varies by location and checkout terms.",
                "url": "https://papajohns-menus.us/coupons",
                "datePublished": "2026-01-01",
                "dateModified": new Date().toISOString().split('T')[0],
                "breadcrumb": {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://papajohns-menus.us" },
                        { "@type": "ListItem", "position": 2, "name": "Coupons & Deals", "item": "https://papajohns-menus.us/coupons" }
                    ]
                }
            },
            {
                "@type": "Organization",
                "name": "Papa John's Pizza",
                "url": "https://www.papajohns.com",
                "logo": "https://papajohns-menus.us/papajohns-logo.png",
                "sameAs": [
                    "https://www.facebook.com/papajohns",
                    "https://twitter.com/papajohns",
                    "https://www.instagram.com/papajohns"
                ]
            },
            {
                "@type": "ItemList",
                "name": "Papa John's Coupon Codes May 2026",
                "description": "Papa John's promo examples and deals to verify before checkout",
                "itemListElement": coupons.map((c, i) => ({
                    "@type": "ListItem",
                    "position": i + 1,
                    "item": {
                        "@type": "Offer",
                        "name": c.title,
                        "description": c.desc,
                        "couponCode": c.code || undefined,
                        "validFrom": "2026-05-01",
                        "validThrough": "2026-05-31",
                        "url": "https://www.papajohns.com",
                        "seller": { "@type": "Organization", "name": "Papa John's Pizza" }
                    }
                }))
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.a
                    }
                }))
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />
            <CouponsClient month={month} coupons={coupons} faqs={faqs} />
        </>
    );
}


export const revalidate = 86400; // 24 hours ISR
